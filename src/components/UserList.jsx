const User=({u,onRemove})=>{
    return(
        <div>
            <b>{u.username}</b> <span>({u.email})</span>
            <button onClick={function (){onRemove(u.id)}}>삭제</button>
        </div>
    );
}
const UserList=({users,onRemove})=>{
    return(
        <div>
            {users.map((u,i)=>( //i는 map함수의 두번째 parameter인 인덱스로 인덱스를 key로 던져줌
                <User u={u} key={i} onRemove={onRemove}/>
            ))}
        </div>
    );
}
export default UserList;