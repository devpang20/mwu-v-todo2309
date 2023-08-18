import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({$target}) {
    const initData = [
        {
            id: 1,
            text: '공부하기',
            checked: true
        },
        {
            id: 2,
            text: '밥먹기',
            checked: false
        },
        {
            id: 3,
            text: '운동하기',
            checked: true
        }
    ]

    const onSubmit = (text) => {
       const nextState = todoList.state.concat(
        [
            {
                id: 4,
                text,
                checked: false
            }
        ]
       )


       todoList.setState(nextState);
       console.log(todoList.state);
    }

    const onDelete = (id) => {
        const nextState = todoList.state.filter(todo => todo.id != id);
        todoList.setState(nextState)
    }

    new Header({$target});

    new TodoForm({$target, onSubmit});
 
    
    const todoList = new TodoList({$target, initData, onDelete});
}
