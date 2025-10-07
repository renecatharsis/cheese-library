# cheese-library
Because I like cheese :-)

## development
* `cp .env.example .env`
* `docker compose up -d --build`

## production
* `cp .env.example .env` (no database provided as part of the stack)
* `docker compose up -d --build`

## Migrations
* To create a new migration, run:
    * `pnpm run payload migrate:create`
* To run migrations, run:
    * `pnpm run payload migrate`
