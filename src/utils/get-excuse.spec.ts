import test from 'ava'

import { getExcuse } from './get-excuse'

test('getExcuse', async (t) => {
  const excuse = await getExcuse()
  t.is(typeof excuse, 'string')
  t.not(excuse.length, 0)
})
