# Incidencia integración Holded/Pipedrive (embudo PCI)

## Problema detectado
Al lanzar un presupuesto a Holded desde `/presupuestos/todos`, cuando el trato proviene del embudo **PCI** sin campos completos en Pipedrive, la automatización falla con:

> "La combinación de tipo de servicio y sede no está contemplada en la automatización."

## Regla de negocio acordada
Para tratos PCI sin datos:

- `serviceType` por defecto: `PCI`
- `saleschannelid` por defecto: `65ba4efb2a6c0e434b0295c6`
- `sede` por defecto: `Sabadell`

## Parche recomendado en la app ERP
Antes de validar la combinación `tipoServicio + sede` para enviar a Holded, aplicar un fallback si el embudo/canal es PCI:

```ts
const isPCI =
  deal?.funnel === 'PCI' ||
  deal?.pipeline === 'PCI' ||
  deal?.saleschannelid === '65ba4efb2a6c0e434b0295c6';

const serviceType = deal?.serviceType?.trim() || (isPCI ? 'PCI' : '');
const sede = deal?.sede?.trim() || (isPCI ? 'Sabadell' : '');
const saleschannelid = deal?.saleschannelid || (isPCI ? '65ba4efb2a6c0e434b0295c6' : '');

if (!serviceType || !sede) {
  throw new Error('Faltan datos para generar el presupuesto.');
}
```

## Nota
Este repositorio (`gepprotect`) contiene la web pública Astro y no incluye el código del ERP (`/presupuestos/todos`). Este documento deja definido el cambio exacto para aplicarlo en el repositorio correcto del ERP.
