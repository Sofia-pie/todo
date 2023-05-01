import { Task } from './task';

export interface List {
  _id?: string;
  title: string;
  description?: string;
  tasks: Task[];
}
