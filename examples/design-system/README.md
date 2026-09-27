# Sistema de diseño para tu portfolio

Este ejemplo está pensado para que entiendas la idea sin meterte en cosas demasiado técnicas.

## 1) ¿Qué es un sistema de diseño?

Es una colección de reglas que te ayudan a que todo tu sitio se vea coherente.

Piensa en esto:

- Los colores tienen un nombre y una intención.
- Las medidas siguen una escala (8, 12, 16, 24, 32...)
- Los textos tienen tamaños y pesos definidos.
- Los botones, tarjetas y menús usan la misma lógica.

Sin esto, cada sección se ve diferente por accidente.

## 2) La idea principal: tokens

Los tokens son nombres para valores.

Ejemplos:

- `color-bg`: fondo general
- `color-surface`: tarjeta
- `color-accent`: naranja principal
- `color-text`: texto principal
- `color-muted`: texto secundario

Así no escribes valores sueltos como `#FF7A1A` por todo el sitio.

Cuando quieres cambiar el tema, solo cambias los tokens y el resto sigue funcionando.

## 3) Paleta recomendada para este portfolio

La base ya funciona bien con naranja oscuro + fondo negro/azulado. Aquí va una versión más clara y “premium”:

- Fondo: `#0B0F14`
- Superficie: `#121B22`
- Superficie elevada: `#1A2430`
- Texto principal: `#EAF0F5`
- Texto secundario: `#9AA8B5`
- Accento principal: `#FF7A1A`
- Accento hover: `#FF9A4D`
- Accento suave: `#FFD3AE`
- Borde: `#24313D`

Esto transmite:

- técnico
- serio
- moderno
- premium sin ser demasiado agresivo

## 4) Escala de espaciado

La escala de espacio mejora muchísimo la consistencia.

Ejemplo:

- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px
- `space-5`: 20px
- `space-6`: 24px
- `space-8`: 32px
- `space-10`: 40px
- `space-12`: 48px

Esto ayuda a que los elementos respiren y no se vean "aplastados".

## 5) Tipografía

No hace falta una fuente rara en cada sitio. Mejor esto:

- Títulos grandes y muy claros
- Texto de cuerpo legible
- Un peso fuerte en el nombre y en el puesto
- Un estilo monoespaciado solo para detalles técnicos o stack

Regla simple:

- `h1` = fuerte, claro y con altura de línea correcta
- `h2` = estructura visual
- `p` = lectura cómoda
- `label` = detalles pequeños

## 6) ¿Qué significa “bien diseñado” en un portfolio?

Es muy simple:

- el visitante entiende enseguida quién eres
- entiende tu especialidad
- sabe dónde mirar
- no se cansa visualmente

No se trata de poner muchas cosas.
Se trata de que todo tenga jerarquía.

## 7) Qué componentes normalmente debes tener

### Botón principal

Usado para CTA, contacto o demo.

- fondo: accent
- texto: blanco
- hover: accent más claro
- borde: no siempre necesario

### Tarjeta

Sirve para:

- proyectos
- experiencia
- educación
- tecnologías

Debe tener:

- fondo con superficie
- borde tenue
- radios suaves
- sombra pequeña
- mucho aire interno

### Texto secundario

Muy usado para descripciones, subtítulos o microcopy.

Debe ser más tenue que el principal para crear contraste sin perder legibilidad.

## 8) Regla de oro

Si algo parece bonito pero no ayuda a comunicar, probablemente no pertenece ahí.

Haz esto en vez de eso:

- en lugar de muchos colores, usa pocos pero bien elegidos
- en lugar de tamaños aleatorios, usa una escala
- en lugar de copiar estilo de cada tarjeta, usa la misma base

## 9) Cómo aplicarlo a tu portfolio

La idea es convertir esto en reglas reutilizables:

- fondo principal
- cards
- texto principal y secundario
- botón principal
- hover
- borde
- sombras

Tu código puede ir así en una hoja CSS con tokens.

## 10) Tema claro y oscuro

Un sistema de diseño funciona mejor cuando los tokens se redefinen según el tema, en lugar de duplicar estilos por todos lados.

La idea es:

- `dark` = tema base, más premium y técnico
- `light` = versión más clara para contraste y lectura
- `tokens.css` define los valores para ambos temas
- `demo.html` incluye un switcher para comparar ambos visualmente

Esto te permite mantener la misma estructura visual mientras cambias solo los valores semánticos.

## 11) Próximo paso

Mira los archivos de ejemplo:

- `tokens.css` → define los valores del sistema y ambos temas
- `demo.html` → muestra cómo se ven los elementos reales y el switcher

Si lo entiendes, ya tienes la base para empezar a refinar tu portfolio sin perderte.
