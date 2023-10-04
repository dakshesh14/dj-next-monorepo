# Django Next.js Monorepo with turpo

This is a Django and Next.js monorepo project made using turbo. 

## Getting Started

This is a monorepo project, meaning it contains all the required code in single repository. The project is divided into 3 parts:

1. [Frontend](../apps/README.md): contains all the frontend apps
2. [Backend](../backend/README.md): contains all the required APIs
3. Package: contains all the shared code between all the apps

To setup the project you can use docker-compose or manually setup the project.

### Docker Compose

Coming soon...

### Manual Setup

#### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Python](https://www.python.org/downloads/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Redis](https://redis.io/download)
- [pnpm](https://pnpm.io/installation)

#### Setup

1. Clone the repository

```bash
git clone
```

2. Install dependencies

```bash
pip install -r requirements/local.txt # requirements/production.txt for production
pnpm install && pnpm prepare
```

3. Create a `.env` file in the root of the project and add the following environment variables

```bash
cp /apps/web/.env.example /apps/web/.env.local
```

4. Run the migrations

Assuming you have PostgreSQL running on your machine, run the following command to create the database

```bash
createdb dj-next-monorepo
```

```bash
python manage.py migrate
```

5. Run the development server

```bash
pnpm dev
```

## Contributing

Coming soon...

## License

[MIT](LICENSE)
