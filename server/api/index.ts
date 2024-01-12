// import sqlite3 from 'sqlite3'
// import { open } from 'sqlite'
import {sql} from '~/server/db'

// interface Option {
//   query: string,
//   values?: any[]
// }

// export const sql = async ({ query, values}: Option) => {
//   open({
//     filename: 'database/database.db',
//     driver: sqlite3.Database
//   }).then((db) => {
    
//     return db.all(query);
//   })
// }

// export default defineEventHandler(async (event) => {
//   return open({
//       filename: 'database/database.db',
//       driver: sqlite3.Database
//     }).then((db) => {
//       // do your thing
//       // db.exec('CREATE TABLE tbl (col TEXT)')
//       // db.exec('INSERT INTO tbl VALUES ("test")')

//       // db.exec('CREATE TABLE "user" ( "id"	INTEGER NOT NULL, "name"	TEXT NOT NULL, "title"	TEXT NOT NULL, "email"	TEXT NOT NULL, "role"	TEXT NOT NULL, PRIMARY KEY("id" AUTOINCREMENT));')
//       return db.all('SELECT * FROM user');
//     })
// })

export default defineEventHandler(async (event) => {
  return sql({query:'SELECT * FROM user'});
})
