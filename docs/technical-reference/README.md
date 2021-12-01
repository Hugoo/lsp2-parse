# lsp2-parse - v0.1.0

## Functions

### lsp2Parse

▸ **lsp2Parse**(`keyOrKeys`, `providedSchemas?`): `Record`<`string`, `ERC725JSONSchema` \| ``null``\>

Parses a hashed key or a list of hashed keys and will attempt to return its corresponding LSP-2 ERC725YJSONSchema object.
The function will look for a corresponding key within the schemas provided in `./schemas` folder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyOrKeys` | `string`[] | The hashed key or array of keys for which you want to find the corresponding LSP-2 ERC725YJSONSchema. |
| `providedSchemas?` | `ERC725JSONSchema`[] | If you provide your own ERC725JSONSchemas, the parser will also try to find a key match against these schemas. |

#### Returns

`Record`<`string`, `ERC725JSONSchema` \| ``null``\>

#### Defined in

[index.ts:19](https://github.com/Hugoo/lsp2-parse/blob/3c505fa/src/index.ts#L19)

▸ **lsp2Parse**(`keyOrKeys`, `providedSchemas?`): `ERC725JSONSchema` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyOrKeys` | `string` |
| `providedSchemas?` | `ERC725JSONSchema`[] |

#### Returns

`ERC725JSONSchema` \| ``null``

#### Defined in

[index.ts:23](https://github.com/Hugoo/lsp2-parse/blob/3c505fa/src/index.ts#L23)
