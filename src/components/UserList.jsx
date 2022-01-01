import React from "react";

const User= React.memo(({users,onRemove,onToggle})=>{
    return(
        <div>
            <b
                style={{
                    cursor:'pointer',
                    color:users.active?'green':'black'
                }}
                onClick={()=>onToggle(users.id)}
            >{users.username}</b>
            &nbsp;
            <span>({users.email})</span>
            <button onClick={function (){onRemove(users.id)}}>삭제</button>
        </div>
    );
});
const UserList=({users,onRemove, onToggle})=>{
    return(
        <div>
            {users.map(user=>(
                <User
                    users={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}
export default React.memo(UserList);