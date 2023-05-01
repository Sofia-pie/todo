import { Task } from './task';

export interface List {
  _id?: number;
  title: string;
  description?: string;
  tasks: Task[];
}
