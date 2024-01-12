import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

interface Option {
  query: string,
  values?: any[]
}

export const sql = async ({ query, values}: Option) => {
  return open({
    filename: 'database/database.db',
    driver: sqlite3.Database
  }).then((db) => {
    // db.exec('CREATE TABLE "user" ( "id"	INTEGER NOT NULL, "name"	TEXT NOT NULL, "title"	TEXT NOT NULL, "email"	TEXT NOT NULL, "role"	TEXT NOT NULL, PRIMARY KEY("id" AUTOINCREMENT));')
    return db.all(query);
  })
}