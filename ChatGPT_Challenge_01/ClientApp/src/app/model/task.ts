import { Guid } from "guid-typescript";

export interface Task {
  id?: string;  // Guid is a string inside JavaScript json notation
  title?: string;
  description?: string;
  dueDate?: Date;
  completed?: Date;
}
