# Bunker Elevate

Quiero que trabajes sobre el proyecto actual de Bunker Global Security Systems.

IMPORTANTE:

No quiero rehacer la página desde cero.

Quiero conservar la estructura visual y contenido que ya existe, pero mejorar la calidad del proyecto, el diseño, la organización del código, el responsive y la mantenibilidad.

El sitio es una página web corporativa para una empresa de:

Videovigilancia CCTV e IP.

Cámaras de seguridad.

Centro de monitoreo 24/7.

Alarmas.

Control de acceso.

Analítica inteligente.

Instalación y configuración.

Mantenimiento.

Soporte técnico.

Soluciones residenciales, comerciales, corporativas e industriales.

El sitio NO tiene ecommerce.

El objetivo es generar prospectos mediante:

WhatsApp.

Correo electrónico.

Formulario de contacto.

Solicitudes de cotización.

1. PRIMERO: REFACTORIZAR EL PROYECTO

Antes de realizar cambios visuales importantes, analiza la estructura actual del proyecto.

No quiero que toda la página esté escrita dentro de un único archivo.

Separar correctamente:

Componentes.

Páginas.

Estilos.

Scripts.

Datos.

Configuración.

Recursos reutilizables.

Utiliza la arquitectura más apropiada para el stack actual del proyecto.

Si el proyecto está construido con React / Vite / TypeScript, mantener ese stack.

NO convertir innecesariamente el proyecto a otra tecnología.

2. ESTRUCTURA DE ARCHIVOS

Organizar el proyecto de manera similar a:

src/

components/
Header
Hero
TrustBar
Services
MonitoringCenter
Sectors
Process
WhyBunker
Projects
Technology
FAQ
Contact
Footer
WhatsAppButton

pages/
Home

styles/
globals.css
variables.css
components.css

data/
services.ts
sectors.ts
projects.ts
faq.ts
navigation.ts

utils/

assets/
images/
icons/
logos/

La estructura exacta puede adaptarse a las convenciones del proyecto actual.

No crear carpetas innecesarias.

3. COMPONENTES

Cada sección importante debe ser un componente independiente.

Por ejemplo:

Header

Hero

Services

MonitoringCenter

Sectors

Process

Projects

FAQ

Contact

Footer

Evitar tener toda la Home dentro de un archivo de cientos o miles de líneas.

La página Home debe funcionar principalmente como composición de componentes.

Ejemplo conceptual:

4. SEPARAR DATOS DEL DISEÑO

No repetir manualmente información dentro de múltiples componentes.

Crear estructuras de datos reutilizables para:

Servicios.

Sectores.

Proyectos.

Preguntas frecuentes.

Navegación.

Fabricantes.

Proceso de trabajo.

Ejemplo:

services.ts

Debe contener los servicios y su información.

Luego el componente Services debe renderizarlos.

Esto facilitará que posteriormente podamos agregar o modificar servicios sin alterar el diseño del componente.

5. ESTILOS

No quiero estilos inline innecesarios.

No quiero grandes cantidades de CSS dentro de componentes.

Centralizar:

Variables.

Colores.

Tipografía.

Espaciados.

Tamaños.

Sombras.

Breakpoints cuando corresponda.

Crear variables de diseño reutilizables.

Paleta base:

Primary blue:
#1565D8

Dark blue:
#0B2545

Light blue:
#EAF4FF

Background:
#F7F9FC

White:
#FFFFFF

Main text:
#182230

Secondary text:
#5B6472

Mantener una estética:

luminosa;

corporativa;

tecnológica;

elegante.

Evitar que todo el sitio sea oscuro.

6. TAILWIND

Si el proyecto utiliza Tailwind:

Mantener Tailwind.

No convertir todo a CSS tradicional sin motivo.

Pero:

Evitar clases extremadamente largas y repetidas en todos los componentes.

Crear componentes reutilizables cuando existan patrones comunes.

Por ejemplo:

Button

SectionTitle

Container

ServiceItem

CTA

Badge

No crear abstracciones innecesarias.

Priorizar legibilidad.

7. JAVASCRIPT / TYPESCRIPT

Separar toda la lógica interactiva de la presentación cuando sea posible.

Ejemplos:

menú móvil;

scroll del header;

acordeón FAQ;

navegación;

formulario;

botón flotante de WhatsApp.

Evitar scripts enormes dentro del mismo componente.

Si existe lógica reutilizable, crear hooks.

Ejemplo:

hooks/
useScrollHeader.ts
useMobileMenu.ts

Solo si realmente mejora la estructura.

No sobreingenierizar.

8. MEJORAR HEADER

Revisar el Header actual.

Debe tener:

Logo Bunker.

Navegación:

Inicio
Nosotros
Servicios
Centro de Monitoreo
Sectores
Proyectos
Contacto

Botón:

SOLICITAR COTIZACIÓN

En desktop debe verse limpio.

En móvil:

Crear un menú hamburguesa realmente funcional.

Agregar animación discreta de apertura.

Al hacer scroll:

El header puede reducir ligeramente su altura y mantener un fondo blanco/translúcido.

9. MEJORAR HERO

Mantener una estética luminosa.

No quiero un típico sitio negro de cámaras.

Hero recomendado:

Pequeño texto:

BUNKER GLOBAL SECURITY SYSTEMS

H1:

SEGURIDAD QUE NUNCA DUERME.

Texto:

Diseñamos, instalamos y monitoreamos soluciones de seguridad para hogares, empresas e instalaciones que requieren protección confiable.

Botones:

SOLICITAR COTIZACIÓN

HABLAR POR WHATSAPP

Indicadores:

Monitoreo 24/7
Instalación profesional
Soporte especializado
Soluciones a medida

Mejorar spacing, jerarquía tipográfica y adaptación móvil.

10. EVITAR APARIENCIA DE SITIO GENERADO POR IA

Este punto es muy importante.

No quiero que el diseño parezca generado automáticamente.

Evitar el patrón repetitivo:

Título centrado
+
Subtítulo
+
3 tarjetas iguales

en todas las secciones.

Variar las composiciones.

Por ejemplo:

Hero:
dos columnas.

Introducción:
texto editorial.

Servicios:
composición asimétrica.

Centro de monitoreo:
imagen grande + contenido.

Sectores:
galería editorial.

Proceso:
timeline.

Proyectos:
galería.

FAQ:
acordeón.

Contacto:
formulario + información.

Quiero que cada sección tenga una razón visual diferente.

11. SERVICIOS

Mejorar la sección de servicios.

No utilizar seis tarjetas idénticas.

Dar mayor importancia visual a:

Videovigilancia.

Centro de Monitoreo.

Y presentar de forma secundaria:

Control de acceso.

Alarmas.

Analítica.

Instalación y mantenimiento.

Las descripciones deben ser directas.

No usar frases de marketing genéricas.

12. CENTRO DE MONITOREO

Debe ser una de las secciones protagonistas.

Puede utilizar fondo azul oscuro.

Título:

VIGILANCIA QUE CONTINÚA CUANDO TÚ NO ESTÁS.

Explicar:

monitoreo continuo;

supervisión centralizada;

alertas;

seguimiento;

integración con sistemas de videovigilancia.

Usar una fotografía amplia.

No inventar estadísticas.

13. SECTORES

Mostrar:

Residencial.

Comercial.

Corporativo.

Industrial.

Utilizar una composición visual con fotografías.

No utilizar únicamente iconos.

14. PROCESO DE TRABAJO

Mostrar:

01 Evaluación

02 Diseño

03 Instalación

04 Pruebas

05 Monitoreo

06 Soporte

Crear una timeline limpia.

No utilizar seis cajas iguales.

15. PROYECTOS

Crear una galería que permita posteriormente reemplazar fácilmente las imágenes.

No inventar clientes reales.

Utilizar datos separados en:

projects.ts

Cada proyecto debe poder tener:

title
category
description
image
technologies

Preparar el componente para que posteriormente se puedan agregar proyectos sin modificar su estructura.

16. MARCAS / TECNOLOGÍAS

Crear una sección discreta para mostrar fabricantes.

Ejemplo:

Hikvision
Ubiquiti
Dahua
Ajax

No afirmar que Bunker es distribuidor autorizado o partner si no está confirmado.

Solo mostrar:

“Tecnologías con las que podemos trabajar”

o texto equivalente.

17. FAQ

Crear un acordeón accesible y funcional.

El componente debe recibir preguntas desde:

faq.ts

No escribir las preguntas directamente dentro del componente.

Agregar transición discreta.

18. FORMULARIO

Mejorar el formulario de contacto.

Campos:

Nombre
Empresa
Teléfono
Correo
Servicio requerido
Mensaje

Validación básica.

Mensajes claros.

Preparar el código para posteriormente conectar el formulario con:

email;

API;

servicio externo;

pero no crear backend innecesario en este momento.

19. WHATSAPP

Crear un componente reutilizable para WhatsApp.

Debe existir:

botón en Hero;

CTA;

botón flotante discreto en móvil y desktop.

El número debe almacenarse en una configuración central.

Ejemplo:

config/site.ts

No escribir el número manualmente en diferentes archivos.

20. CONFIGURACIÓN CENTRAL

Crear un archivo:

config/site.ts

o equivalente.

Debe centralizar:

companyName
phone
whatsapp
email
address
socialLinks
domain

Usar placeholders claros si los datos todavía no están definidos.

Ejemplo:

phone: "PENDIENTE"
email: "PENDIENTE"

No inventar información.

21. SEO

Crear configuración correcta para:

title

description

Open Graph

favicon placeholder

lang="es-MX"

Semantic HTML.

Usar:

header
main
section
article
footer
nav

Crear solo un H1.

Mantener estructura correcta de H2/H3.

22. ACCESIBILIDAD

Revisar:

contraste;

labels;

botones;

navegación mediante teclado;

alt de imágenes;

focus states;

aria-expanded en FAQ y menú;

tamaño de botones en móvil.

23. RESPONSIVE

Revisar cuidadosamente:

375px
430px
768px
1024px
1440px

Evitar:

textos cortados;

overflow horizontal;

botones demasiado pequeños;

enormes espacios vacíos;

imágenes deformadas.

24. PERFORMANCE

Optimizar:

imágenes;

lazy loading;

tamaño de componentes;

dependencias innecesarias.

No agregar bibliotecas grandes solo para pequeñas animaciones.

25. ANIMACIONES

Agregar solamente:

fade/reveal muy sutil.

hover.

transiciones.

No agregar:

parallax excesivo.

cursores personalizados.

partículas.

animaciones futuristas.

scroll hijacking.

El sitio debe sentirse profesional.

26. LIMPIEZA DEL CÓDIGO

Eliminar:

código duplicado;

imports sin usar;

estilos sin utilizar;

componentes muertos;

console.log;

comentarios innecesarios;

código generado que no tenga propósito.

Mantener comentarios únicamente cuando realmente expliquen una decisión importante.

27. NO HACER

No crear:

ecommerce.

checkout.

backend complejo.

login.

dashboard.

base de datos.

panel administrativo.

autenticación.

blog si actualmente no existe.

No cambiar el alcance del proyecto.

28. RESULTADO ESPERADO

Al terminar quiero:

Página Home completa y funcional.

Componentes separados.

Estilos organizados.

Scripts/lógica separados.

Datos reutilizables.

Configuración central.

Responsive completo.

Diseño visual mejorado.

Código fácil de mantener.

Código fácil de migrar o modificar posteriormente.

Ningún archivo enorme que contenga toda la aplicación.

Ningún cambio funcional innecesario.

29. MUY IMPORTANTE: FORMA DE TRABAJAR

Primero:

Analiza el proyecto actual.

Después:

Refactoriza la estructura sin romper la interfaz.

Después:

Verifica que todo funcione.

Después:

Realiza las mejoras visuales.

Finalmente:

Revisa responsive, accesibilidad y errores.

No elimines contenido existente sin una razón clara.

No inventes información empresarial.

Si encuentras textos, datos o imágenes temporales, déjalos claramente marcados como placeholders para reemplazarlos posteriormente.

Al finalizar, indícame brevemente:

qué archivos fueron creados;

cuáles fueron modificados;

qué componentes fueron separados;

qué datos quedaron pendientes de reemplazar;

si detectaste algo que requiera configuración adicional.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0c460da5-a135-478b-b610-692d35341884).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
