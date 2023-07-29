"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";

function SignUp(){
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const router = useRouter();
    async function signUp(){
        const response = await fetch("/api/signup",{
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json',
                },
            });

        if(response.ok){
            alert("환영합니다.");
            await router.push('/article');
        }else{
            alert("회원가입중 오류가 발생하였습니다.");
            console.log(response.statusText);
        }
    }
    return (
        <form onSubmit={signUp}>
            <input name={"username"} type={"text"} value={userId} onChange={(e) => setUserId(e.target.value)}/>
            <input name={"password"} type={"password"} value={userPwd} onChange={(e) => setUserPwd(e.target.value)}/>
            <button type={"submit"}>회원가입</button>
        </form>
    );
}

export default SignUp;