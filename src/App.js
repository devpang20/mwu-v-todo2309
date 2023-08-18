import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({$target}) {
    const initData = ['공부하기', '밥먹기', '운동하기']

    const onSubmit = (text) => {
       const nextState = [...todoList.state, text]
       todoList.setState(nextState);
       console.log(todoList.state)
    }

    new Header({$target});

    new TodoForm({$target, onSubmit});
 
    
    const todoList = new TodoList({$target, initData});
}
