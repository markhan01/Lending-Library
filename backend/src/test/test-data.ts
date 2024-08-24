import Path from 'path';

import { Errors } from 'utils';
import { readJson } from 'node-utils';

const BOOKS = await getTestBooks(); //yeah for top-level awaits!!


export { BOOKS, };

//bit messy, but don't want to copy data;
//also, import json requires experimental import assertions
async function getTestBooks() {
  const dataPath = Path.join(process.env.HOME, '/data/books.json');
  const readResult = await readJson(dataPath);
  if (readResult.isOk === false) throw readResult.errors;
  return readResult.val as Record<string, any>[];
}
