import { lsp2Parse } from '.';

describe('lsp2parse', () => {
  it('works', () => {
    const schema = lsp2Parse(
      '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',
    );

    expect(schema).toEqual(null);
  });
});
