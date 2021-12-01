# lsp2-parse

Find [LSP-2 ERC725YJSONSchema](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md) from key hash.

## Example

```js
import { lsp2Parse } from '.';

lsp2Parse('0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5');
/*
{
  name: 'LSP3Profile',
  key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
  keyType: 'Singleton',
  valueContent: 'JSONURL',
  valueType: 'bytes'
}
*/

lsp2Parse([
  '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
  '0x3a47ab5bd3a594c3a8995f8fa58d087600000000000000000000000000000001',
]);
/*
{
  '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5': {
    name: 'LSP3Profile',
    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
    keyType: 'Singleton',
    valueContent: 'JSONURL',
    valueType: 'bytes'
  },
  '0x3a47ab5bd3a594c3a8995f8fa58d087600000000000000000000000000000001': {
    name: 'LSP3IssuedAssets[1]',
    key: '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',
    keyType: 'Singleton',
    valueContent: 'Address',
    valueType: 'address'
  }
}
*/
```
