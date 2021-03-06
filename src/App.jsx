import Counter from './components/Counter';
import Hello from './components/Hello'
import InputSample from './components/InputSample';
import Wrapper from './components/Wrapper';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import React, { useMemo, useReducer } from 'react';

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
    case "TOGGLE_USER":
        return{
            ...state,
            users: state.users.map(user=>
                user.id===action.id?{...user,active:!user.active}:user
            )
        };
    case "REMOVE_USER":
        return{
            ...state,
            users:state.users.filter(user=>user.id!==action.id)
        };
    default:
        return state;
    }
}

export const UserDispatch = React.createContext(null);

function App() {
    const [state,dispatch]=useReducer(reducer,initialState);
    const {users}=state;

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
                <UserDispatch.Provider value={dispatch}>
                <CreateUser />
                <UserList users={users}/>
                <div>활성 사용자 수 : {count}</div>
                </UserDispatch.Provider>
            </Wrapper>
        </>
    )
}

export default App;
