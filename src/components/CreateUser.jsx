import React, { useRef } from "react";

const CreateUser=({username,email,onChange,onCreate})=>{
    const nameInput=useRef(null);
    const color="RED";
    return(
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
                ref={nameInput}
                />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={()=>{
                onCreate();
                nameInput.current.focus();
                }}>등록</button>
            <span style={{color}}>(계정명이나 이메일 등록 필수)</span>
        </div>
    );
}

export default React.memo(CreateUser);