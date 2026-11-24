# Project 4 - Deploy Apps

Todo List application deployed to the cloud, plus a small Node app that lists Render services.

## Live apps

| App | Type | URL |
|---|---|---|
| Client (React) | Render Static Site | https://todolistreact-4gmb.onrender.com |
| Server (.NET API, Docker) | Render Web Service | https://todoapi-59pc.onrender.com/items |
| Render services list (Node/Express) | Render Web Service | https://render-services-api-ig8d.onrender.com/services |

> The free Render plan sleeps after inactivity, so the first request may take about 30 seconds.

## Structure

- `ToDoListReact/` - React client. The API address is read from the `REACT_APP_API_URL` environment variable.
- `TodoApi/` - ASP.NET Core minimal API with EF Core (MySQL). Includes a `Dockerfile` and `create_db.sql`. The connection string is set through the `ConnectionStrings__ToDoDB` environment variable.
- `RenderServicesApi/` - Node Express app with `GET /services`, which returns the services in the Render account as JSON using the Render API SDK. The API key is set through the `RENDER_API_KEY` environment variable.

## Database

MySQL hosted on Clever Cloud, with a single `items` table (`Id`, `Name`, `IsComplete`).
