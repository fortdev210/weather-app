- This application is initiated with turbo(https://turbo.build/).
- The app contains `apps` with `backend` and `frontend` inside it.
- `backend` is using `nestjs`
- `frontend` is done using `vite` and `react`

```bash
1. clone this repo
2. cd
3. cp env.sample .env
4. npm install
5. npm run build
6. npm run dev
```

This will run both client(http://127.0.0.1:5173/) and api(http://127.0.0.1:3000/)

- How to add a new dependency in turbo

  ```bash
  `npm install --workspace backend dependency_name`
  `npm install --workspace frontend dependency_name`
  ```

- Node Version
  `node 18.13.0`
