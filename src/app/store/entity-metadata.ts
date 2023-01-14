import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  UserRegister: {
    entityName: 'UserRegister'
  }
};

const pluralNames = {
  UserRegister: 'UserRegister'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
