/**
 * @file index.ts
 * @author Hugo Masclet <@Hugoo>
 * @date 2021
 */

import { ERC725JSONSchema } from '@erc725/erc725.js';

import allSchemas from './schemas';
import { parser } from './parser';

/**
 *
 *
 * @param keyOrKeys
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
