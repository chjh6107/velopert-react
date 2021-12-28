import React from "react";

const User= React.memo(({u,onRemove,onToggle})=>{
    return(
        <div>
            <b
                style={{
                    cursor:'pointer',
                    color:u.active?'green':'black'
                }}
                onClick={()=>onToggle(u.id)}
            >{u.username}</b>
            &nbsp;
            <span>({u.email})</span>
            <button onClick={function (){onRemove(u.id)}}>삭제</button>
        </div>
    );
});
const UserList=({users,onRemove, onToggle})=>{
    return(
        <div>
            {users.map((u)=>(
                <User
                    u={u}
                    key={u.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}
export default React.memo(UserList);