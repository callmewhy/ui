

# Hierarchy

 [Base](_base_.base.md)

**↳ Keyring**

# Implements

* [KeyringStruct](../interfaces/_types_.keyringstruct.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Keyring**(): [Keyring](_keyring_.keyring.md)

*Inherited from [Base](_base_.base.md).[constructor](_base_.base.md#constructor)*

*Defined in [Base.ts:22](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L22)*

**Returns:** [Keyring](_keyring_.keyring.md)

___

# Accessors

<a id="accounts"></a>

##  accounts

**get accounts**(): `object`

*Inherited from [Base](_base_.base.md).[accounts](_base_.base.md#accounts)*

*Defined in [Base.ts:30](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L30)*

**Returns:** `object`

___
<a id="addresses"></a>

##  addresses

**get addresses**(): `object`

*Inherited from [Base](_base_.base.md).[addresses](_base_.base.md#addresses)*

*Defined in [Base.ts:34](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L34)*

**Returns:** `object`

___
<a id="keyring"></a>

##  keyring

**get keyring**(): `KeyringInstance`

*Inherited from [Base](_base_.base.md).[keyring](_base_.base.md#keyring)*

*Defined in [Base.ts:38](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L38)*

**Returns:** `KeyringInstance`

___

# Methods

<a id="addexternal"></a>

##  addExternal

▸ **addExternal**(publicKey: *`Uint8Array`*, meta?: *`KeyringPair$Meta`*): [CreateResult](../modules/_types_.md#createresult)

*Defined in [Keyring.ts:23](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| publicKey | `Uint8Array` | - |
| `Default value` meta | `KeyringPair$Meta` |  {} |

**Returns:** [CreateResult](../modules/_types_.md#createresult)

___
<a id="addpair"></a>

##  addPair

▸ **addPair**(pair: *`KeyringPair`*, password: *`string`*): [CreateResult](../modules/_types_.md#createresult)

*Defined in [Keyring.ts:33](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** [CreateResult](../modules/_types_.md#createresult)

___
<a id="adduri"></a>

##  addUri

▸ **addUri**(suri: *`string`*, password?: *`undefined` \| `string`*, meta?: *`KeyringPair$Meta`*, type?: *`KeypairType`*): [CreateResult](../modules/_types_.md#createresult)

*Defined in [Keyring.ts:43](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L43)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| suri | `string` | - |
| `Optional` password | `undefined` \| `string` | - |
| `Default value` meta | `KeyringPair$Meta` |  {} |
| `Optional` type | `KeypairType` | - |

**Returns:** [CreateResult](../modules/_types_.md#createresult)

___
<a id="backupaccount"></a>

##  backupAccount

▸ **backupAccount**(pair: *`KeyringPair`*, password: *`string`*): `KeyringPair$Json`

*Defined in [Keyring.ts:53](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** `KeyringPair$Json`

___
<a id="createaccount"></a>

##  createAccount

▸ **createAccount**(seed: *`Uint8Array`*, password?: *`undefined` \| `string`*, meta?: *`KeyringPair$Meta`*): `KeyringPair`

*Defined in [Keyring.ts:63](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |
| `Optional` password | `undefined` \| `string` |
| `Optional` meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair`

___
<a id="createaccountexternal"></a>

##  createAccountExternal

▸ **createAccountExternal**(publicKey: *`Uint8Array`*, meta?: *`KeyringPair$Meta`*): `KeyringPair`

*Defined in [Keyring.ts:69](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| `Optional` meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair`

___
<a id="createaccountmnemonic"></a>

##  createAccountMnemonic

▸ **createAccountMnemonic**(seed: *`string`*, password?: *`undefined` \| `string`*, meta?: *`KeyringPair$Meta`*): `KeyringPair`

*Defined in [Keyring.ts:75](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L75)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `string` |
| `Optional` password | `undefined` \| `string` |
| `Optional` meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair`

___
<a id="createfromuri"></a>

##  createFromUri

▸ **createFromUri**(suri: *`string`*, meta?: *`KeyringPair$Meta`*, type?: *`KeypairType`*): `KeyringPair`

*Implementation of [KeyringStruct](../interfaces/_types_.keyringstruct.md).[createFromUri](../interfaces/_types_.keyringstruct.md#createfromuri)*

*Defined in [Keyring.ts:81](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L81)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| suri | `string` | - |
| `Default value` meta | `KeyringPair$Meta` |  {} |
| `Optional` type | `KeypairType` | - |

**Returns:** `KeyringPair`

___
<a id="decodeaddress"></a>

##  decodeAddress

▸ **decodeAddress**(key: *`string` \| `Uint8Array`*, ignoreChecksum?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from [Base](_base_.base.md).[decodeAddress](_base_.base.md#decodeaddress)*

*Defined in [Base.ts:46](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |
| `Optional` ignoreChecksum | `undefined` \| `false` \| `true` |

**Returns:** `Uint8Array`

___
<a id="encodeaddress"></a>

##  encodeAddress

▸ **encodeAddress**(key: *`string` \| `Uint8Array`*): `string`

*Inherited from [Base](_base_.base.md).[encodeAddress](_base_.base.md#encodeaddress)*

*Defined in [Base.ts:50](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `string`

___
<a id="encryptaccount"></a>

##  encryptAccount

▸ **encryptAccount**(pair: *`KeyringPair`*, password: *`string`*): `void`

*Defined in [Keyring.ts:85](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** `void`

___
<a id="forgetaccount"></a>

##  forgetAccount

▸ **forgetAccount**(address: *`string`*): `void`

*Defined in [Keyring.ts:94](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `void`

___
<a id="forgetaddress"></a>

##  forgetAddress

▸ **forgetAddress**(address: *`string`*): `void`

*Defined in [Keyring.ts:99](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L99)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `void`

___
<a id="getaccount"></a>

##  getAccount

▸ **getAccount**(address: *`string` \| `Uint8Array`*): [KeyringAddress](../modules/_types_.md#keyringaddress)

*Defined in [Keyring.ts:103](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L103)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringAddress](../modules/_types_.md#keyringaddress)

___
<a id="getaccounts"></a>

##  getAccounts

▸ **getAccounts**(): `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

*Defined in [Keyring.ts:107](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L107)*

**Returns:** `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

___
<a id="getaddress"></a>

##  getAddress

▸ **getAddress**(_address: *`string` \| `Uint8Array`*, type?: *"account" \| "address"*): [KeyringAddress](../modules/_types_.md#keyringaddress)

*Defined in [Keyring.ts:116](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L116)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| _address | `string` \| `Uint8Array` | - |
| `Default value` type | "account" \| "address" | &quot;address&quot; |

**Returns:** [KeyringAddress](../modules/_types_.md#keyringaddress)

___
<a id="getaddresses"></a>

##  getAddresses

▸ **getAddresses**(): `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

*Defined in [Keyring.ts:137](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L137)*

**Returns:** `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

___
<a id="getpair"></a>

##  getPair

▸ **getPair**(address: *`string` \| `Uint8Array`*): `KeyringPair`

*Inherited from [Base](_base_.base.md).[getPair](_base_.base.md#getpair)*

*Defined in [Base.ts:54](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `KeyringPair`

___
<a id="getpairs"></a>

##  getPairs

▸ **getPairs**(): `Array`<`KeyringPair`>

*Inherited from [Base](_base_.base.md).[getPairs](_base_.base.md#getpairs)*

*Defined in [Base.ts:58](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L58)*

**Returns:** `Array`<`KeyringPair`>

___
<a id="isavailable"></a>

##  isAvailable

▸ **isAvailable**(_address: *`Uint8Array` \| `string`*): `boolean`

*Inherited from [Base](_base_.base.md).[isAvailable](_base_.base.md#isavailable)*

*Defined in [Base.ts:64](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _address | `Uint8Array` \| `string` |

**Returns:** `boolean`

___
<a id="ispassvalid"></a>

##  isPassValid

▸ **isPassValid**(password: *`string`*): `boolean`

*Inherited from [Base](_base_.base.md).[isPassValid](_base_.base.md#ispassvalid)*

*Defined in [Base.ts:74](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| password | `string` |

**Returns:** `boolean`

___
<a id="loadall"></a>

##  loadAll

▸ **loadAll**(options: *[KeyringOptions](../modules/_types_.md#keyringoptions)*): `void`

*Defined in [Keyring.ts:180](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L180)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [KeyringOptions](../modules/_types_.md#keyringoptions) |

**Returns:** `void`

___
<a id="restoreaccount"></a>

##  restoreAccount

▸ **restoreAccount**(json: *`KeyringPair$Json`*, password: *`string`*): `KeyringPair`

*Defined in [Keyring.ts:194](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L194)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `KeyringPair$Json` |
| password | `string` |

**Returns:** `KeyringPair`

___
<a id="saveaccount"></a>

##  saveAccount

▸ **saveAccount**(pair: *`KeyringPair`*, password?: *`undefined` \| `string`*): `KeyringPair$Json`

*Defined in [Keyring.ts:213](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L213)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| `Optional` password | `undefined` \| `string` |

**Returns:** `KeyringPair$Json`

___
<a id="saveaccountmeta"></a>

##  saveAccountMeta

▸ **saveAccountMeta**(pair: *`KeyringPair`*, meta: *`KeyringPair$Meta`*): `void`

*Defined in [Keyring.ts:224](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L224)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| meta | `KeyringPair$Meta` |

**Returns:** `void`

___
<a id="saveaddress"></a>

##  saveAddress

▸ **saveAddress**(address: *`string`*, meta: *`KeyringPair$Meta`*): `KeyringPair$Json`

*Defined in [Keyring.ts:234](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L234)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |
| meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair$Json`

___
<a id="saverecent"></a>

##  saveRecent

▸ **saveRecent**(address: *`string`*): [SingleAddress](../modules/_observable_types_.md#singleaddress)

*Defined in [Keyring.ts:256](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Keyring.ts#L256)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** [SingleAddress](../modules/_observable_types_.md#singleaddress)

___
<a id="setaddressprefix"></a>

##  setAddressPrefix

▸ **setAddressPrefix**(prefix: *`number`*): `void`

*Inherited from [Base](_base_.base.md).[setAddressPrefix](_base_.base.md#setaddressprefix)*

*Defined in [Base.ts:78](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `number` |

**Returns:** `void`

___
<a id="setdevmode"></a>

##  setDevMode

▸ **setDevMode**(isDevelopment: *`boolean`*): `void`

*Inherited from [Base](_base_.base.md).[setDevMode](_base_.base.md#setdevmode)*

*Defined in [Base.ts:82](https://github.com/polkadot-js/ui/blob/0ec9797/packages/ui-keyring/src/Base.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| isDevelopment | `boolean` |

**Returns:** `void`

___

