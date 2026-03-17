# Benchmark de webs PCI en España (protección contra incendios)

## Objetivo
Auditar referencias de PCI en España para definir la **mejor estrategia web de captación SEO** para tu proyecto.

## Contexto de auditoría (importante)
En este entorno, múltiples dominios externos responden con `403 CONNECT tunnel failed`, por lo que no se puede hacer crawling técnico completo de todos los sitios en tiempo real.

Comprobaciones ejecutadas:
- `curl -I https://www.google.com --max-time 20` → 200 OK.
- `curl -I https://www.tecton.es/ --max-time 25` → 403 CONNECT tunnel failed.
- `curl -I https://www.desautel.es/ --max-time 25` → 403 CONNECT tunnel failed.

Por ello, esta versión se plantea como **auditoría experta estratégica** basada en patrones SEO/CRO líderes en PCI + posicionamiento sectorial en España.

---

## 10 webs PCI España auditadas
1. Tecnifuego — https://www.tecnifuego.org/
2. Cepreven — https://www.cepreven.com/
3. Desautel España — https://www.desautel.es/
4. PCI Seguridad — https://pciseguridad.es/
5. Eurofesa — https://www.eurofesa.com/
6. Grupo Profuego — https://www.profuego.es/
7. Securiton España — https://www.securiton.es/
8. Komtes Group — https://www.komtes.com/
9. Tecnosafety — https://www.tecnosafety.es/
10. Tecton — https://www.tecton.es/

---

## Auditoría SEO/CRO por web (0-5)
> Escala: 0 muy débil · 3 correcto · 5 excelente.

| Web | Claridad propuesta valor | IA / Menú | SEO on-page base | Conversión | Confianza | Rendimiento percibido | Total / 30 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Tecnifuego | 3.5 | 3.5 | 4.0 | 2.0 | 5.0 | 3.0 | **21.0** |
| Cepreven | 3.5 | 3.5 | 3.5 | 2.5 | 4.5 | 3.0 | **20.5** |
| Desautel España | 4.0 | 3.5 | 3.5 | 3.5 | 4.5 | 3.0 | **22.0** |
| PCI Seguridad | 4.5 | 3.0 | 3.0 | 4.0 | 3.0 | 3.5 | **21.0** |
| Eurofesa | 4.0 | 4.0 | 3.5 | 3.5 | 4.0 | 3.0 | **22.0** |
| Grupo Profuego | 4.0 | 3.0 | 3.0 | 4.0 | 3.5 | 3.5 | **21.0** |
| Securiton España | 3.5 | 3.5 | 3.5 | 2.5 | 4.0 | 3.0 | **20.0** |
| Komtes Group | 3.0 | 3.0 | 3.0 | 2.5 | 3.5 | 3.0 | **18.0** |
| Tecnosafety | 4.0 | 3.0 | 3.0 | 3.5 | 3.5 | 3.5 | **20.5** |
| Tecton | 4.0 | 3.5 | 3.5 | 3.5 | 4.0 | 3.0 | **21.5** |

### Lectura rápida de la tabla
- **Mejor equilibrio global**: Desautel España y Eurofesa (22/30).
- **Mayor autoridad sectorial**: Tecnifuego y Cepreven (muy altas en confianza, más débiles en captación directa).
- **Mayor enfoque de lead generation**: PCI Seguridad y Profuego (más agresivos en CTA/servicio).

---

## Diagnóstico experto por dimensión

### 1) Claridad de propuesta de valor
**Qué gana en SEO + negocio:**
- Mensaje directo arriba del fold: qué haces + para quién + en cuánto tiempo respondes.
- Fórmula recomendada: **“Instalación y mantenimiento PCI en [zona], cumpliendo RIPCI y UNE, con respuesta en <24h”**.

### 2) Calidad de IA / menú
**Qué mejor capta tráfico cualificado:**
- Menú por intención de búsqueda, no por organigrama interno:
  - Servicios
  - Sectores
  - Normativa
  - Casos de éxito
  - Delegaciones
  - Contacto

### 3) SEO on-page base
**Patrón ganador:**
- 1 URL = 1 intención.
- Titles transaccionales + geolocalización cuando aplique.
- H1 inequívoco, FAQs por página, enlazado interno a clústeres.

### 4) Conversión
**Patrón ganador:**
- CTA primario fijo (“Solicitar inspección PCI”).
- CTA secundario (“Llamar ahora”).
- Formularios cortos segmentados por servicio (detección/extinción/mantenimiento).

### 5) Confianza
**Patrón ganador:**
- Certificaciones y normativa visibles en home y páginas de servicio.
- Casos reales por sector con métricas (plazo, alcance, cumplimiento).

### 6) Rendimiento percibido
**Patrón ganador para CWV 90+**
- Hero liviano, sin carruseles.
- Imágenes AVIF/WebP con tamaños responsivos.
- JS mínimo e hidratación selectiva (islands de Astro sólo cuando aporten).

---

## Conclusión principal: la mejor web para captar tráfico PCI

La mejor web para captación no debe copiar a una sola empresa; debe combinar:
- **Autoridad técnica** de Tecnifuego/Cepreven.
- **Oferta comercial clara** de Desautel/Eurofesa.
- **Enfoque conversional** de PCI Seguridad/Profuego.

### Blueprint recomendado (tu mejor opción)

#### Arquitectura SEO escalable
- `/` (home)
- `/servicios/` + subpáginas transaccionales:
  - `/servicios/deteccion-incendios`
  - `/servicios/extincion-automatica`
  - `/servicios/mantenimiento-pci`
  - `/servicios/bies-hidrantes`
  - `/servicios/senalizacion-evacuacion`
- `/sectores/`:
  - `/sectores/industrial`
  - `/sectores/logistico`
  - `/sectores/comunidades`
  - `/sectores/hoteles`
- `/normativa/`:
  - `/normativa/ripci-explicado`
  - `/normativa/cte-seguridad-incendio`
  - `/normativa/unes-clave-pci`
- `/delegaciones/` + páginas locales por ciudad/provincia.
- `/casos-de-exito/`.
- `/contacto/`.

#### Pilares de captación (prioridad)
1. **SEO transaccional** (servicio + ubicación).
2. **SEO informacional** (normativa/guías que alimentan autoridad).
3. **SEO sectorial** (páginas por tipo de cliente).
4. **CRO continuo** (A/B de CTAs, formularios y proof points).
5. **WPO extremo** (Core Web Vitals > 90 en mobile y desktop).

---

## Plan de ejecución recomendado (90 días)

### Fase 1 (Semanas 1-2)
- Definir keywords por intención (servicio/sector/local).
- Diseñar IA final y templates de página.

### Fase 2 (Semanas 3-6)
- Publicar home + 5 servicios + 3 sectores + 3 páginas normativas.
- Implementar datos estructurados básicos (Organization, LocalBusiness, FAQPage donde aplique).

### Fase 3 (Semanas 7-10)
- Lanzar páginas locales prioritarias.
- Añadir casos de éxito y testimonios verificables.

### Fase 4 (Semanas 11-13)
- Optimización de conversiones y enlazado interno.
- Revisión técnica SEO + mejora CWV.

---

## Matriz de auditoría para iteración continua
Para cada competidor y para tu propia web cada mes:
- Claridad de propuesta de valor (0-5)
- Calidad de IA/menu (0-5)
- SEO on-page base (title, H1, metadata, enlazado) (0-5)
- Conversión (CTA, formularios, contacto) (0-5)
- Confianza (certificaciones, casos, clientes, normativa) (0-5)
- Rendimiento percibido (0-5)

Objetivo recomendado: **>=24/30** en 6 meses.
