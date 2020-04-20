import type { IStore, TEntityName, IEntity } from '../custom_types';


export class Store
{
   private static readonly _store: IStore = {
      Entity1: 0,
      Entity2: 0,
      Entity3: 0,
      Entity4: 0,
      Entity5: 0,
      Entity6: 0,
      Entity7: 0,
      Entity8: 0,
      Entity9: 0,
      Entity10: 0,
      Entity11: 0,
      Entity12: 0,
      Entity13: 0,
      Entity14: 0,
      Entity15: 0,
      Entity16: 0,
      Entity17: 0,
      Entity18: 0,
      Entity19: 0,
      Entity20: 0,
   };


   public static getStore(): IStore
   {
      return {...this._store};
   }

   public static getEntity(name: TEntityName): IEntity
   {
      return {
         name,
         value: this._store[name],
      };
   }

   public static updateEntity(actualEntity: IEntity): void
   {
      this._store[actualEntity.name] = actualEntity.value;
   }

}
