import {sql} from '~/server/db'

export default defineEventHandler(async (event) => {
  return sql({query:'SELECT * from list_of_values', type: 'select'});
})
