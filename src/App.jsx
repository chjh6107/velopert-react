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
const reducer=(state,action)=>{
    switch(action.type){
    case "CHANGE_INPUT":
        return{
            ...state,
            inputs:{
                ...state.inputs,
                [action.name]:action.value
            }
        };
    case "CREATE_USER":
        return{
            inputs:initialState.inputs,
            users: state.users.concat(action.user)
        };
    default:
        return state;
    }
}

function App() {
    const [state,dispatch]=useReducer(reducer,initialState);
    const {users}=state;
    const {username,email}=state.inputs;

    const onChange=useCallback(e=>{
        const {name,value}=e.target;
        dispatch({
            type:"CHANGE_INPUT",
            name,
            value
        });
    },[]);
    const nextId=useRef(4);
    const onCreate=useCallback(()=>{
        if(username===""&&email==="")return;
        dispatch({
            type:"CREATE_USER",
            user:{
                id:nextId.current,
                username,
                email
            }
        });
        nextId.current++;
    },[username,email]);
    const onRemove=useCallback(id=>{
        //값이 true인 친구들만 모아서 다시 잡아넣어버림
        setUsers(users=>users.filter(user=>user.id!==id));
    },[]);
    const onToggle=useCallback(id=>{
        setUsers(users=>
            users.map(user=>
                user.id===id?{...user,active:!user.active}:user
            )
        );
    },[]);
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
                <CreateUser
                    username={username}
                    email={email}
                    onChange={onChange}
                    onCreate={onCreate}/>
                <UserList users={users}/>
                <div>활성 사용자 수 : {count}</div>
            </Wrapper>
        </>
    )
}

export default App;
