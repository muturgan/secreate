import type { IEntity, TEntityName } from '../custom_types';

const generateRandomInteger = (min: number, max: number): number =>
{
   const rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
};

const generateEntityName = (): TEntityName => {
   return 'Entity' + generateRandomInteger(1, 20) as TEntityName;
};

const generateEntityValue = (): number =>
{
   const multiplier = Math.round(Math.random()) === 1 ? 1 : -1;
   return Math.random() * multiplier;
};

export const generateEntity = (): IEntity =>
{
   const entity: IEntity = {
      name: generateEntityName(),
      value: generateEntityValue(),
   };
   return entity;
};