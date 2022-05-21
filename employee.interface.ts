 import { IParent } from './parent.interface';
export interface IEmployee extends IPerson ,IParent{
   salary : number;
}