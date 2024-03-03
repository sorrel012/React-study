class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString() + Math.floor(Math.random() * 100);
  }
}

export default Todo;
