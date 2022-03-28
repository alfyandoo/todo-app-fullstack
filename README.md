# My Todo List App
This app built with reactjs and nodejs with prisma orm.

## Usage
make sure you have [NodeJS](https://nodejs.org/en/download/),  [Postgresql](https://www.postgresql.org/download/) installed.

1. Intsall [PNPM](https://pnpm.io/id/installation)
```
npm install pnpm
```
> or
```
wget -qO- https://get.pnpm.io/install.sh | sh -
```
2. Instal node package with pnpm
```
pnpm install
```
3. Rename .env.example to .env and setup your database url
4. At todo-app-fullstack/app/dbs/db open in new terminal then migrate db
```
npx prisma migrate dev --name init
```
5. Go back /todo-app-fullstack and run
```
pnpm node base
```
