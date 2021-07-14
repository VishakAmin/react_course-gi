class Todo {
 id: string;
 text: string;   

 constructor( todotext: string) {
     this.text = todotext;
     this.id = new Date().toISOString();
}
}

export default Todo;