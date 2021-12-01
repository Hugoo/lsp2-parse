import { ERC725JSONSchema } from '@erc725/erc725.js';

import { lsp2Parse } from '.';

describe('lsp2parse', () => {
  describe('Singleton', () => {
    it('finds keys of type Singleton correctly', () => {
      const schema = lsp2Parse(
        '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
      );

      expect(schema).toEqual({
        name: 'LSP3Profile',
        key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
        keyType: 'Singleton',
        valueContent: 'JSONURL',
        valueType: 'bytes',
      });
    });
  });

  describe('Array', () => {
    it('finds initial key of type Array correctly', () => {
      const schema = lsp2Parse(
        '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',
      );

      expect(schema).toEqual({
        name: 'LSP3IssuedAssets[]',
        key: '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',
        keyType: 'Array',
        valueContent: 'Address',
        valueType: 'address',
      });
    });
    it('finds subsequent key of type Array correctly', () => {
      const schema = lsp2Parse(
        '0x3a47ab5bd3a594c3a8995f8fa58d087600000000000000000000000000000001',
      );

      expect(schema).toEqual({
        name: 'LSP3IssuedAssets[1]',
        key: '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',
        keyType: 'Singleton',
        valueContent: 'Address',
        valueType: 'address',
      });
    });
    it('finds subsequent key of type Array correctly', () => {
      const schema = lsp2Parse(
        '0x3a47ab5bd3a594c3a8995f8fa58d087600000000000fab000000000000000001',
      );

      expect(schema).toEqual(null);
    });
  });

  describe('Mapping', () => {
    it('finds known mappings', () => {
      const schema = lsp2Parse(
        '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6',
      );

      expect(schema).toEqual({
        name: 'SupportedStandards:LSP3UniversalProfile',
        key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6',
        keyType: 'Mapping',
        valueContent: '0xabe425d6',
        valueType: 'bytes',
      });
    });

    it('finds unknown mappings', () => {
      // Key name: SupportedStandards:UnknownKey
      const schema = lsp2Parse(
        '0xeafec4d89fa9619884b6b89135626455000000000000000000000000f4d7faed',
      );

      expect(schema).toEqual({
        name: 'SupportedStandards:??????',
        key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000f4d7faed',
        keyType: 'Mapping',
        valueContent: '0xabe425d6',
        valueType: 'bytes',
      });
    });
  });

  describe('Bytes20Mapping', () => {
    it('finds Bytes20Mapping', () => {
      const address = 'af3bf2ffb025098b79caddfbdd113b3681817744';
      const name = `MyCoolAddress:${address}`;
      const key = `0x22496f48a493035f00000000${address}`;

      const extraSchema: ERC725JSONSchema = {
        name,
        key,
        keyType: 'Bytes20Mapping',
        valueContent: 'Address',
        valueType: 'address',
      };

      const schema = lsp2Parse(key, [extraSchema]);

      expect(schema).toEqual(extraSchema);
    });
  });

  describe('Bytes20MappingWithGrouping', () => {
    it('finds Bytes20MappingWithGrouping', () => {
      const address = 'af3bf2ffb025098b79caddfbdd113b3681817744';
      const name = `AddressPermissions:Permissions:${address}`;
      const key = `0x4b80742d0000000082ac0000${address}`;
      const schema = lsp2Parse(key);

      expect(schema).toEqual({
        name,
        key,
        keyType: 'Bytes20MappingWithGrouping',
        valueContent: 'BitArray',
        valueType: 'byte32',
      });
    });
  });
});
