import { lsp2Parse } from '.';

describe('lsp2parse', () => {
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
