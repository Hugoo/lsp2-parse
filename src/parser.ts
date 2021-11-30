import { ERC725JSONSchema, ERC725JSONSchemaKeyType } from '@erc725/erc725.js';
import schemas from './schemas';

const getSchemasByKeyType = (): Record<
  ERC725JSONSchemaKeyType,
  ERC725JSONSchema[]
> => {
  return {
    Singleton: schemas.filter((schema) => schema.keyType === 'Singleton'),
    Array: schemas.filter((schema) => schema.keyType === 'Array'),
    Mapping: schemas.filter((schema) => schema.keyType === 'Mapping'),
    Bytes20Mapping: schemas.filter(
      (schema) => schema.keyType === 'Bytes20Mapping',
    ),
    Bytes20MappingWithGrouping: schemas.filter(
      (schema) => schema.keyType === 'Bytes20MappingWithGrouping',
    ),
  };
};

const findSingletonKey = (
  key: string,
  singletonSchemas: ERC725JSONSchema[],
): ERC725JSONSchema | null => {
  return (
    singletonSchemas.find((singletonSchema) => singletonSchema.key === key) ||
    null
  );
};

export function parser(key: string): ERC725JSONSchema | null {
  const schemasByKeyType = getSchemasByKeyType();

  let foundSchema: ERC725JSONSchema | null = null;

  foundSchema = findSingletonKey(key, schemasByKeyType.Singleton);

  if (foundSchema) {
    return foundSchema;
  }

  // TODO: Array

  // TODO: Mapping

  // TODO: Bytes20Mapping

  // TODO: Bytes20MappingWithGrouping

  return foundSchema;
}
