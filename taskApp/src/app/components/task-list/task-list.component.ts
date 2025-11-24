import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInputComponent } from '../task-input/task-input.component';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskInputComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

// En task-list.component.ts
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, text: 'Aprender Angular Standalone', completed: false, createdAt: new Date() },
    { id: 2, text: 'Crear componentes reutilizables', completed: true, createdAt: new Date() }
  ];

  onTaskAdded(taskText: string): void {
    if (taskText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date()
      };
      this.tasks.unshift(newTask);
    }
  }

  onDeleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
  }

  get pendingCount(): number {
    return this.tasks.filter(t => !t.completed).length;
  }

  get completedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  // ⬇️ AGREGA ESTA FUNCIÓN AQUÍ ⬇️
  trackByTaskId(index: number, task: Task): number {
    return task.id;
  }
}