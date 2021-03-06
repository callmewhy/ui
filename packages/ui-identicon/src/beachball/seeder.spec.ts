// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Seeder } from './types';

import newSeeder from './seeder';

describe('seeder', () => {
  let seeder: Seeder;

  beforeEach(() => {
    seeder = newSeeder(new Uint8Array([1, 2, 3, 4]));
  });

  it('generates numbers using 2 spaces', () => {
    expect(
      seeder()
    ).toEqual(0.0156402587890625);
  });

  it('generates numbers using 2 spaces (incremented)', () => {
    seeder();

    expect(
      seeder()
    ).toEqual(0.0078582763671875);
  });
});
