'use client'
import styled from "styled-components";
import {FieldErrors, useForm} from "react-hook-form";


interface HookFormTypes {
    userId: string;
    userPwd: string;
}

function Login() {
    const {handleSubmit}  = useForm<HookFormTypes>();
    const onValid = (data:HookFormTypes) => console.log(data);
    const onInValid = (errors:FieldErrors) => console.log(errors);

    const InputId = styled.input`
        margin: 4px 0;
    `
    const InputPwd = styled.input`
        margin: 4px 0;
    `
    return (
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            <InputId id={"userId"} type={"text"}/>
            <InputPwd id={"userPwd"} type={"password"}/>
        </form>
    )
}

export default Login;