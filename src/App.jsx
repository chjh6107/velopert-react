import Counter from './components/Count';
import Hello from './components/Hello'
import InputSample from './components/InputSample';
import Wrapper from './components/Wrapper';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import { useRef, useState } from 'react';
function App() {
    const [inputs,setInputs]=useState({
        username:"",
        email:""
    });
    const {username,email}=inputs;
    const onChange=e=>{
        const {name,value}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };
    const [users,setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);
    const nextId=useRef(4);
    const onCreate=()=>{
        if(!username&&!email)return; //둘다 입력없으면 등록 무시
        const user={
            id:nextId.current,
            username,
            email
        };
        setUsers(users.concat(user));
        setInputs({
            username:"",
            email:""
        })
        nextId.current++;
    }
    const onRemove=id=>{
        setUsers(users.filter(user=>user.id!==id));
    }
    return (
        <>
            <Wrapper>
                <Hello name="reaact" color="red" isSpecial/>
                <Hello color="pink"/>
                <Counter/>
                <br/>
                <InputSample/>
            </Wrapper>
            <Wrapper>
                <CreateUser
                    username={username}
                    email={email}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <UserList users={users} onRemove={onRemove}/>
            </Wrapper>
        </>
    )
}

export default App;
