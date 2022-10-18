import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(event => {
        setValue(event.target.value)
    }, []); //컴포넌트가 처음 렌더링 될때만 함수 생성
    console.log(value);

    const onSubmit = useCallback(event => {
        onInsert(value);
        setValue(''); //value 값 초기화

        //submit 이벤트는 브라우저에서 새로 고침을 발생시킨다
        //이를 방지하기 위해 이 함수를 호출한다
        event.preventDefault();
    }, [onInsert, value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert