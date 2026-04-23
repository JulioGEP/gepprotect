# Fix: Lógica de creación de sesiones — embudo Formación Abierta

## Problema detectado

Cuando llega un presupuesto del embudo **Formación Abierta**, el sistema crea
tantas sesiones como la cantidad total de productos que contiene el presupuesto.
Este comportamiento es correcto para otros embudos, pero no para Formación
Abierta: aquí siempre debe crearse exactamente **1 sesión**, independientemente
de la cantidad de productos.

## Regla de negocio acordada

| Embudo              | Sesiones a crear                    |
|---------------------|-------------------------------------|
| Formación Abierta   | Siempre **1**                       |
| Cualquier otro      | Según la cantidad de productos (comportamiento actual) |

## Dónde aplicar el cambio en el ERP

La lógica de creación de sesiones se ejecuta al recibir un presupuesto nuevo.
Localizar la función (o servicio) que itera los productos del presupuesto para
crear sesiones — normalmente algo como `createSessionsForBudget`,
`buildSessions`, o el hook que se dispara al guardar/lanzar un presupuesto.

## Parche recomendado

```ts
const FORMACION_ABIERTA_FUNNELS = ['Formación Abierta', 'formacion-abierta', 'open-training'];

function isFormacionAbierta(deal: Deal): boolean {
  return FORMACION_ABIERTA_FUNNELS.some(
    (f) =>
      deal?.funnel?.toLowerCase() === f.toLowerCase() ||
      deal?.pipeline?.toLowerCase() === f.toLowerCase() ||
      deal?.embudo?.toLowerCase() === f.toLowerCase()
  );
}

// Dentro de la función que crea sesiones para un presupuesto:
function getSessionCount(deal: Deal, lineItems: LineItem[]): number {
  if (isFormacionAbierta(deal)) {
    return 1;
  }
  // Comportamiento actual: una sesión por cada unidad de producto
  return lineItems.reduce((total, item) => total + (item.quantity ?? 1), 0);
}

// Uso:
const sessionCount = getSessionCount(deal, budget.lineItems);
for (let i = 0; i < sessionCount; i++) {
  await createSession({ budgetId: budget.id, index: i });
}
```

### Variante si la cantidad de sesiones se calcula de forma distinta

Si en el ERP la lógica simplemente hace `for (const item of lineItems)` sin
acumular cantidades, el parche más quirúrgico es añadir un guard al principio:

```ts
async function createSessionsForBudget(deal: Deal, budget: Budget): Promise<void> {
  if (isFormacionAbierta(deal)) {
    await createSession({ budgetId: budget.id, index: 0 });
    return; // una única sesión; salir sin procesar los productos
  }

  // Lógica existente sin modificar
  for (const item of budget.lineItems) {
    for (let i = 0; i < (item.quantity ?? 1); i++) {
      await createSession({ budgetId: budget.id, lineItemId: item.id, index: i });
    }
  }
}
```

## Notas

- El identificador exacto del embudo (`deal.funnel`, `deal.pipeline`,
  `deal.embudo`…) puede variar según el campo que use el ERP. Ajustar
  `isFormacionAbierta` al nombre de campo real.
- No modificar la lógica de ningún otro embudo.
- Este repositorio (`gepprotect`) contiene la web pública Astro y no incluye
  el código del ERP. Este documento deja definido el cambio exacto para
  aplicarlo en el repositorio correcto del ERP.
