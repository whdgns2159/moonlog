import {router} from "next/client";

function SignUp(){
    async function signUp(){
        const rst = await fetch("http://localhost:3001/auth/signin")
            .then((res) =>{
                alert("회원가입 완료");

            }).catch((err) => {

            });
        return rst;
    }
    return (
        <form onSubmit={signUp}>
            <input name={"username"} type={"text"}/>
            <input name={"password"} type={"password"}/>
            <button type={"submit"}>회원가입</button>
        </form>
    );
}

export default SignUp;