import { Guid } from "guid-typescript";


export interface Task {
  id?: Guid;
  title?: string;
  description?: string;
  dueDate?: Date;
  completed?: Date;
}
