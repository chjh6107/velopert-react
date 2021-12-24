const User=({u})=>{
    return(
        <div>
            <b>{u.username}</b> <span>({u.email})</span>
        </div>
    );
}
const UserList=({users})=>{
    return(
        <div>
            {users.map((u,i)=>( //i는 map함수의 두번째 parameter인 인덱스로 인덱스를 key로 던져줌
                <User u={u} key={i}/>
            ))}
        </div>
    );
}
export default UserList;