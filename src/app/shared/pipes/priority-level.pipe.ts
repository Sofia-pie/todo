import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityLevel',
})
export class PriorityLevelPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Високий';
      case 2:
        return 'Середній';
      case 3:
        return 'Низький';
      default:
        return 'Unknown';
    }
  }
}
