import { useState, useRef, useCallback } from 'react';

import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import Clock from './Clock';
import Weather from './Weather';



// function createBulkTodos() {
//     const array = [];
//     for (let i = 1; i <= 2500; i++) {
//         array.push({
//             id: i,
//             text: `할일 ${i}`,
//             checked: false,
//         })
//     }
//     return array;
// }

// function todoReducer(todos, action) {
//     switch (action.type) {
//         case 'INSERT':
//             // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
//             return todos.concat(action.todo);
//         case 'REMOVE':
//             // {type: 'REOMOVE', id:1}
//             return todos.filter(todo => todo.id !== action.id);
//         case 'TOGGLE':
//             // {type:'Remove', id:1}
//             return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,);
//         default: return todos;
//     }
// }
function Main() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "리액트 코딩",
            checked: false,
        },
        {
            id: 2,
            text: "리액트 / JS 이론공부",
            checked: false,
        },
        {
            id: 3,
            text: "CS 공부",
            checked: false,
        },
        {
            id: 4,
            text: "IT 뉴스 읽기",
            checked: false,
        },

    ])

    const nextId = useRef(5);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos => todos.concat(todo));
            nextId.current += 1; //nextId 1씩 더하기
        }, []
    )

    const onRemove = useCallback(
        id => {
            setTodos(todos => todos.filter(todo => todo.id !== id));
        }, []
    )

    const onToggle = useCallback(
        id => {
            setTodos(todos =>
                //특정 id를 가지고 있는 객체의 checked값을 반전시킨다 
                //불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 이렇게 map을 사용
                todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
            )
        }, []
    )
    //==========**useReducer 사용하기
    //useReducer 사용할 때는 원래 두번째 파라미터에 초기상태를 넣어주여야 하지만 undefined를 넣고
    //세번째 파라미터에 초기 상태를 만들어 주는 함수인 createBulkTodos를 넣어주는데 이렇게 하면 컴포넌트가 맨 처음 렌더링 될때만 createBulkTodosrk ghcnfehlsek
    //useReducer를 사용하는 방버은 기존 코드를 많이 고쳐야 한다는 단점이 있지만, 상태를 업데이트 하는 로직을 모아서 컴포넌트 바깥에 둘 수 있다는 장점이 있다 
    //성능상으로는 useState를 함수로 다루는 것과 useReducer가 비슷하다
    // const [todos, dispatch] = useReducer(todoReducer, undefined, array);
    // const nextId = useRef(2501);
    // const onInsert = useCallback(text => {
    //     const todo = {
    //         id: nextId.current,
    //         text,
    //         checked: false,
    //     };
    //     dispatch({ type: 'INSERT', todo });
    //     nextId.current += 1; //nextId 1씩 더하기
    // }, []);

    // const onRemove = useCallback(id => {
    //     dispatch({ type: 'REMOVE', id });
    // }, []);

    // const onToggle = useCallback(id => {
    //     dispatch({ type: 'TOGGLE', id });
    // }, [])

    return (
        <div>
            <Weather />
            <Clock />
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </TodoTemplate>
        </div >
    );
}

export default Main;
