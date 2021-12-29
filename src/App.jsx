import Counter from './components/Counter';
import Hello from './components/Hello'
import InputSample from './components/InputSample';
import Wrapper from './components/Wrapper';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import { useCallback, useMemo, useReducer, useRef, useState } from 'react';

const countActiveUsers = users =>{
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user=>user.active).length;
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
    }
    ]
};
const reducer=(state,action)=>{return state;}

function App() {
    // const [inputs,setInputs]=useState({
    //     username:"",
    //     email:""
    // });
    const {username,email}=inputs;
    const [state,dispatch]=useReducer(reducer,initialState);
    const {users}=state;
    const {username,email}=state.inputs;

    const onChange=useCallback(e=>{
        const {name,value}=e.target;
        setInputs(inputs=>({
            ...inputs,
            [name]:value
        }));
    },[]);
    // const [users,setUsers] = useState([
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com',
    //         active:true
    //     },
    //     {
    //         id: 2,
    //         username: 'tester',
    //         email: 'tester@example.com',
    //         active:false
    //     },
    //     {
    //         id: 3,
    //         username: 'liz',
    //         email: 'liz@example.com',
    //         active:false
    //     }
    // ]);
    const nextId=useRef(4);
    const onCreate=useCallback(()=>{
        if(!username&&!email)return; //둘다 입력없으면 등록 무시
        const user={
            id:nextId.current,
            username,
            email,
            active:false
        };
        setUsers(users.concat(user));
        setInputs({
            username:"",
            email:""
        })
        nextId.current++;
    },[username,email]);
    const onRemove=useCallback(id=>{
        //값이 true인 친구들만 모아서 다시 잡아넣어버림
        setUsers(users=>users.filter(user=>user.id!==id));
    },[]);
    const onToggle=useCallback(id=>{
        // let newUsers=users.map(user=>{
        //     user.active=(user.id===id?!user.active:user.active);
        //     return user;
        // });
        // console.log("users= ",users,"newUsers =",newUsers);
        // setUsers(newUsers);
        setUsers(users=>
            users.map(user=>
                user.id===id?{...user,active:!user.active}:user
            )
        );
    },[]);
    // const count=countActiveUsers(users);
    const count=useMemo(()=>countActiveUsers(users),[users]);
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
                {/* <CreateUser
                    username={username}
                    email={email}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <UserList users={users} onRemove={onRemove} onToggle={onToggle}/> */}
                <CreateUser username={username} email={email}/>
                <UserList users={users}/>
                <div>활성 사용자 수 : {count}</div>
            </Wrapper>
        </>
    )
}

export default App;
