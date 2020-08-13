import { assert } from 'chai';

export default async function quickTest() {
  assert.strictEqual('huhu'.length, 4, 'The length should be four');
}
