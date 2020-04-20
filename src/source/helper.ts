import type { IEntity } from '../custom_types';

const generateRandomInteger = (min: number, max: number): number =>
{
   const rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
};

const generateEntityName = () => 'Entity' + generateRandomInteger(1, 20);

const generateEntityValue = (): number =>
{
   const multiplier = Math.round(Math.random()) === 1 ? 1 : -1;
   return Math.random() * multiplier;
};

export const generateEntity = (): IEntity =>
{
   const key = generateEntityName();
   const val = generateEntityValue();
   return {[key]: val};
};
