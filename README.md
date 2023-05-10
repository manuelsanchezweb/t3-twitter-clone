# Clon de Twitter

Tutorial de webdevsimplified: https://www.youtube.com/watch?v=jqVm5_G1ZEE

## 🗂️ Repo

Aquí: https://github.com/manuelsanchezweb/t3-twitter-clone](https://github.com/manuelsanchezweb/t3-twitter-clone)

## 🪜 Setup

Estamos usando el famoso t3 stack con tRPC, TypeScript y Tailwind. Con NextJS y oAuth.

1. npm create t3-app@latest
2. npx prisma db push
3. npm run dev

## 💿 Database

A manera de database estamos utilizando planetscale.
Esta es la página: [https://app.planetscale.com/](https://app.planetscale.com/)

Hay hacemos lo siguiente:

1. Creamos una db con dos branches: production con main y una derivada llamada dev
2. Pedimos los datos de conexión de la de dev
3. Cambiamos la url de la db en el .env y también actualizamos el schema.prisma
4. npx prisma db push

Es importante en pasos posteriores activar las safe migrations para que podamos migrar desde dev todo a main.
Para ello, cada vez que queramos hacerlo, haremos un deploy request en dev.

<img src="./public/schema-planetscale.png" alt="Push Schema en Planetscale" />

## 🚚 Providers

- [Discord](https://discord.com/developers/applications) - No olvides http://localhost:3000/api/auth/callback/discord para el redirect en dev -> Más info: https://discord.com/developers/applications/1105601300521037855/oauth2/general
- [GitHub](https://github.com/settings/developers) - En mi caso, en las apps de la org
