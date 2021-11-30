/**
 * @file index.ts
 * @author Hugo Masclet <@Hugoo>
 * @date 2021
 */

import { ERC725JSONSchema } from '@erc725/erc725.js';

function findSchemaForKey(key: string): ERC725JSONSchema | null {
  return null;
}

/**
 *
 *
 * @param keyOrKeys
 */
export function lsp2Parse(
  keyOrKeys: string[],
): Record<string, ERC725JSONSchema | null>;
export function lsp2Parse(keyOrKeys: string): ERC725JSONSchema | null;
export function lsp2Parse(
  keyOrKeys: string | string[],
): ERC725JSONSchema | null | Record<string, ERC725JSONSchema | null> {
  if (Array.isArray(keyOrKeys)) {
    return keyOrKeys.reduce<Record<string, ERC725JSONSchema | null>>(
      (acc, key) => {
        acc[key] = findSchemaForKey(key);
        return acc;
      },
      {},
    );
  }

  return findSchemaForKey(keyOrKeys);
}
