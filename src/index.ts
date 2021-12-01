/**
 * @file index.ts
 * @author Hugo Masclet <@Hugoo>
 * @date 2021
 */

import { ERC725JSONSchema } from '@erc725/erc725.js';

import allSchemas from './schemas';
import { parser } from './parser';

/**
 * Parses a hashed key or a list of hashed keys and will attempt to return its corresponding LSP-2 ERC725YJSONSchema object.
 * The function will look for a corresponding key within the schemas provided in `./schemas` folder.
 *
 * @param keyOrKeys The hashed key or array of keys for which you want to find the corresponding LSP-2 ERC725YJSONSchema.
 * @param providedSchemas If you provide your own ERC725JSONSchemas, the parser will also try to find a key match against these schemas.
 */
export function lsp2Parse(
  keyOrKeys: string[],
  providedSchemas?: ERC725JSONSchema[],
): Record<string, ERC725JSONSchema | null>;
export function lsp2Parse(
  keyOrKeys: string,
  providedSchemas?: ERC725JSONSchema[],
): ERC725JSONSchema | null;
export function lsp2Parse(
  keyOrKeys: string | string[],
  providedSchemas?: ERC725JSONSchema[],
): ERC725JSONSchema | null | Record<string, ERC725JSONSchema | null> {
  let fullSchema = allSchemas;
  if (providedSchemas) {
    fullSchema = fullSchema.concat(providedSchemas);
  }

  if (Array.isArray(keyOrKeys)) {
    return keyOrKeys.reduce<Record<string, ERC725JSONSchema | null>>(
      (acc, key) => {
        acc[key] = parser(key, fullSchema);
        return acc;
      },
      {},
    );
  }

  return parser(keyOrKeys, fullSchema);
}
