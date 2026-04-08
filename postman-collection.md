Endpoints extraídos da aplicação:

- Autenticação: [`requestBackendLogin()`](src/util/requests.ts:18) faz `POST /oauth/token` com `Content-Type: application/x-www-form-urlencoded` e `Authorization: Basic base64(clientId:clientSecret)`. Credenciais padrão: [`CLIENT_ID`](src/util/requests.ts:9) = `myclientid`, [`CLIENT_SECRET`](src/util/requests.ts:11) = `myclientsecret`. Body: `username`, `password`, `grant_type=password`.
- Filmes: [`MovieCatalog`](src/pages/Private/MovieCatalog/index.tsx:40) usa `GET /movies?page={n}&size=4&name={texto}&genreId={id}`; [`MovieDetails`](src/pages/Private/MovieDetails/index.tsx:26) usa `GET /movies/{movieId}`; [`MovieDetails`](src/pages/Private/MovieDetails/index.tsx:41) usa `GET /movies/{movieId}/reviews`.
- Demais recursos: [`MovieFilter`](src/components/MovieFilter/index.tsx:40) usa `GET /genres`; [`ReviewForm`](src/components/ReviewForm/index.tsx:31) usa `POST /reviews` com JSON `{ "movieId": number, "text": string }`; [`Users`](src/components/User/index.tsx:11) usa `GET /users?page=0&size=12`.

Notas para testar no Postman:

- Base URL padrão: [`BASE_URL`](src/util/requests.ts:6) = variável `REACT_APP_BACKEND_URL` ou `http://localhost:8080`.
- Todas as chamadas protegidas enviam Bearer token quando [`withCredentials`](src/util/requests.ts:39) está ativo em [`requestBackend()`](src/util/requests.ts:38). No Postman, use `Authorization: Bearer {{access_token}}`.
- O login retorna campos persistidos em [`LoginResponse`](src/util/storage.ts:3): `access_token`, `token_type`, `expires_in`, `scope`, `userFirstName`, `userId`.
- Perfis esperados no token JWT: [`Role`](src/util/auth.ts:4) = `ROLE_VISITOR` e `ROLE_MEMBER`. Envio de avaliação exige `ROLE_MEMBER`, conforme [`hasAnyRoles()`](src/util/auth.ts:25) e uso em [`MovieDetails`](src/pages/Private/MovieDetails/index.tsx:86).

Sugestão prática de coleção no Postman:

- `POST {{baseUrl}}/oauth/token`
- `GET {{baseUrl}}/genres`
- `GET {{baseUrl}}/movies?page=0&size=4`
- `GET {{baseUrl}}/movies?page=0&size=4&name=abc`
- `GET {{baseUrl}}/movies?page=0&size=4&genreId=1`
- `GET {{baseUrl}}/movies/1`
- `GET {{baseUrl}}/movies/1/reviews`
- `POST {{baseUrl}}/reviews`
- `GET {{baseUrl}}/users?page=0&size=12`

Headers e bodies principais:

- Login:
  - Header `Content-Type: application/x-www-form-urlencoded`
  - Header `Authorization: Basic base64(myclientid:myclientsecret)`
  - Body `username=seu_email&password=sua_senha&grant_type=password`
- Endpoints protegidos:
  - Header `Authorization: Bearer {{access_token}}`
- Criar review:
  - Header `Content-Type: application/json`
  - Body: `{ "movieId": 1, "text": "Ótimo filme" }`

Task complete.