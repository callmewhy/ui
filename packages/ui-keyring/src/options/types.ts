// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringStruct } from '../types';

export type KeyringSectionOption = {
  className?: string,
  disabled?: boolean,
  content?: any | string, // node?
  key: string | null,
  name: string,
  text: any | string, // node?
  value: string | null
};

export type KeyringSectionOptions = Array<KeyringSectionOption>;

export type KeyringOptions = {
  account: KeyringSectionOptions,
  address: KeyringSectionOptions,
  all: KeyringSectionOptions,
  recent: KeyringSectionOptions,
  testing: KeyringSectionOptions
};

export type KeyringOption$Type = keyof KeyringOptions;

export interface KeyringOptionInstance {
  createOptionHeader: (name: string) => KeyringSectionOption;
  init: (keyring: KeyringStruct) => void;
}
