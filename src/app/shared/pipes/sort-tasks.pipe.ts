import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../core/model/task';

@Pipe({
  name: 'sortTasks',
})
export class SortTasksPipe implements PipeTransform {
  transform(tasks: Task[], sortBy: string): Task[] {
    if (!tasks || tasks.length === 0) {
      return tasks;
    }

    if (sortBy === 'date') {
      tasks.sort((a, b) => {
        return new Date(a.due_date).getDate() - new Date(b.due_date).getDate();
      });
    } else if (sortBy === 'title') {
      tasks.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy === 'title-rev') {
      tasks.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return 1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }

    return tasks;
  }
}
