export type TEntityName = 'Entity1' | 'Entity2' | 'Entity3' | 'Entity4' | 'Entity5' | 'Entity6' | 'Entity7' | 'Entity8' | 'Entity9' | 'Entity10' | 'Entity11' | 'Entity12' | 'Entity13' | 'Entity14' | 'Entity15' | 'Entity16' | 'Entity17' | 'Entity18' | 'Entity19' | 'Entity20';

export type TValue = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];

export interface IEntity {
   name: TEntityName;
   values: TValue;
}

export interface ISnapshot {
   Entity1: TValue;
   Entity2: TValue;
   Entity3: TValue;
   Entity4: TValue;
   Entity5: TValue;
   Entity6: TValue;
   Entity7: TValue;
   Entity8: TValue;
   Entity9: TValue;
   Entity10: TValue;
   Entity11: TValue;
   Entity12: TValue;
   Entity13: TValue;
   Entity14: TValue;
   Entity15: TValue;
   Entity16: TValue;
   Entity17: TValue;
   Entity18: TValue;
   Entity19: TValue;
   Entity20: TValue;
}
