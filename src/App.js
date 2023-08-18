import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { getItem, setItem } from "./storage.js";

export default function App({$target}) {
    const initData = getItem('todos', [
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
    ])


    let lastId = initData[initData.length - 1].id;

    const onSubmit = (text) => {
       const nextState = todoList.state.concat(
        [
            {
                id: lastId + 1,
                text,
                checked: false
            }
        ]
       )
       todoList.setState(nextState);
       lastId++;
       console.log(todoList.state);
       setItem('todos', JSON.stringify(nextState))
    }

    const onDelete = (id) => {
        const nextState = todoList.state.filter(todo => todo.id != id);
        todoList.setState(nextState)
        setItem('todos', JSON.stringify(nextState))
    }

    const onToggle = (id) => {
        const nextState = todoList.state.map(todo =>             
            todo.id === id ? {...todo, checked: !todo.checked} : todo
        )
        todoList.setState(nextState)
        setItem('todos', JSON.stringify(nextState))
    }

    new Header({$target});

    new TodoForm({$target, onSubmit});
 
    
    const todoList = new TodoList({$target, initData, onDelete, onToggle});
}
