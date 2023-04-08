export default class AddTodo {
    constructor($newTodoTitle, viewTodo) {
        this.$newTodoTitle = $newTodoTitle;
        this.viewTodo = viewTodo;
        this.mount();
    }
    mount() {
        this.$newTodoTitle.addEventListener('keyup', this.addTodo.bind(this));
    }
    addTodo = ({ target, key }) => {
        if (key === 'Enter' && target.value) {
            // Nullish coalescing operator (??) 사용
            this.todos = JSON.parse(localStorage.getItem('todos')) ?? [];
            this.todos.push({
                id: String(Date.now()),
                title: target.value,
                completed: false,
            });
            target.value = '';
            localStorage.setItem('todos', JSON.stringify(this.todos));
            this.viewTodo.loadTodo();
        }
    }
}