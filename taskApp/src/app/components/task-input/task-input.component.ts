import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  @Output() taskAdded = new EventEmitter<string>();
  taskText: string = '';

  addTask(): void {
    if (this.taskText.trim()) {
      this.taskAdded.emit(this.taskText);
      this.taskText = '';
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }
}