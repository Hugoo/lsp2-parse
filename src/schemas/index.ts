import { ERC725JSONSchema } from '@erc725/erc725.js';
import LSP3UniversalProfile from './LSP3UniversalProfile.json';
import LSP4DigitalAsset from './LSP4DigitalAsset.json';

export default LSP3UniversalProfile.concat(
  LSP4DigitalAsset,
) as ERC725JSONSchema[];
