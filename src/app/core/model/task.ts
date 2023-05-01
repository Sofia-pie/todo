export interface Task {
  _id?: string;
  title: string;
  due_date: Date;
  completed: boolean;
  description?: string;
  priority: number;
  list_id: string;
}
