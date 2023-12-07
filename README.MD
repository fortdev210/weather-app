- This application is initiated with turbo(https://turbo.build/).
- The app contains `apps` with `backend` and `frontend` inside it.
- `backend` is using `nestjs` and graphql. `backend` generates graphql endpoint that are consumed on frontend.
- `frontend` is done using `vite` and `react`. frontend uses data that are fetched via graphql query.
- This app shows the weather data of several cities such as HK, NY, Sydney and LA.
- This repo can be used as a starter project of a full stack web application that uses `Nest`, `GraphQL`, `React`, `Vite` inside a monorepo.

```bash
1. clone this repo
2. cd
3. cp env.sample .env
4. npm install
5. npm run build
6. npm run dev
```

This will run both frontend(http://127.0.0.1:5173/) and backend(http://127.0.0.1:3000/)
You can check the graphql query schema on https://127.0.0.1:3000/graphql

- How to add a new dependency in turbo

  ```bash
  `npm install --workspace backend dependency_name`
  `npm install --workspace frontend dependency_name`
  ```

- Node Version
  `node 18.18.0`
