import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

interface Option {
  query: string,
  type: string,
  values?: any[]
}

export const sql = async ({ query, values, type}: Option) => {
  return open({
    filename: 'database/database.db',
    driver: sqlite3.Database
  }).then((db) => {
    return db.all(query);
  })
}