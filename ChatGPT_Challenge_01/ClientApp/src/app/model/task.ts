import { Guid } from "guid-typescript";
// ClientApp Terminal run
// npm i guid-typescript --save


export interface Task {
  id?: Guid;
  title?: string;
  description?: string;
  dueDate?: Date;
  completed?: Date;
}
