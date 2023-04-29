export interface Task {
  _id?: number;
  user_id: number;
  title: string;
  due_date: Date;
  completed: Boolean;
  description: string;
  priority: number;
  list_id: number;
}
