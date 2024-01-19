import {sql} from '~/server/db'
import * as url from "url";

export default defineEventHandler(async (event) => {
  // CRY, FST, GFT, IDL
  const query = getQuery(event)
  return sql({query: 'SELECT * from list_of_values WHERE "group"="'+query.type+'"', type: 'select'});
})