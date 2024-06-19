export class Model {
  user: string;
  items: { description: string; action: boolean }[];
  constructor() {
    this.user = 'Erhan';
    this.items = [
      new TodoItem('Spor', true),
      new TodoItem('Kahvaltı', false),
      new TodoItem('Sinema', false),
      new TodoItem('Coding', false),
    ];
  }
}

export class TodoItem {
  description: string;
  action: boolean;
  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
