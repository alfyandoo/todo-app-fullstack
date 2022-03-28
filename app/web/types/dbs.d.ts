import type * as dbs from 'dbs'

declare global {
  const db: typeof dbs.db & { query: (sql: string) => Promise<any> }
}
  