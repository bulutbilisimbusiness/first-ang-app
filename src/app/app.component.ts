import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Model, TodoItem } from './model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName() {
    return this.model.user;
  }
  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }
  addItem(value: string) {
    if (value != '') {
      this.model.items.push(new TodoItem(value, false));
    }
  }
}
