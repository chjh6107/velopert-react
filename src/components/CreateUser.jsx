const CreateUser=({username,email,onChange,onCreate})=>{
    return(
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
            <span>(계정명이나 이메일 등록 필수)</span>
        </div>
    );
}

export default CreateUser;