'use client'
import styled from "styled-components";
import {FieldErrors, useForm} from "react-hook-form";


interface HookFormTypes {
    userId: string;
    userPwd: string;
}

function Login() {
    //register를 사용하면 validation으로 값을 입력못하게 막을 수 있다.
    const {handleSubmit, register}  = useForm<HookFormTypes>();
    const onValid = (data:HookFormTypes) => {
        console.log(data);
        try{
            //로그인 요청
        }catch (e){

        }
    };
    const onInValid = (errors:FieldErrors) => console.log(errors);

    const InputId = styled.input`
        margin: 4px 0;
    `
    const InputPwd = styled.input`
        margin: 4px 0;
    `
    return (
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            <InputId {...register("userId", {required: {value: true, message: "id를 입력해주십시오"}})} id={"userId"} type={"text"}/>
            <InputPwd {...register("userPwd", {required: {value: true, message: "비밀번호를 입력해주십시오"}})} id={"userPwd"} type={"password"}/>
        </form>
    )
}

export default Login;