'use client'
import styled from "styled-components";
import {FieldErrors, useForm} from "react-hook-form";
import {MIXINS} from "@/styles/theme";
import React from "react";
import {signIn} from "next-auth/react";


interface HookFormTypes {
    userId: string;
    userPwd: string;
}

function Login() {
    //register를 사용하면 validation으로 값을 입력못하게 막을 수 있다.
    const {handleSubmit, register}  = useForm<HookFormTypes>();
    const onValid = (formData:HookFormTypes, e:React.BaseSyntheticEvent) => {
        console.log(formData);
        try{
            e.preventDefault();
            signIn();
        }catch (e){
            console.log(e);
        }
    };
    const onInValid = (errors:FieldErrors) => console.log(errors);


    return (
        <Form onSubmit={handleSubmit(onValid, onInValid)}>
            <SpanTitle>아이디</SpanTitle>
            <InputId {...register("userId", {required: {value: true, message: "id를 입력해주십시오"}})} id={"userId"} type={"text"}/>
            <SpanTitle>비밀번호</SpanTitle>
            <InputPwd {...register("userPwd", {required: {value: true, message: "비밀번호를 입력해주십시오"}})} id={"userPwd"} type={"password"}/>
            <ButtonSubmit type={"submit"}>로그인</ButtonSubmit>
        </Form>
    )
}

const Form = styled.form`
  ${MIXINS.flexBox('column', 'flex-start')}
`

const InputId = styled.input`
    margin: 4px 0;
    font-size: 1.2rem;
`
const InputPwd = styled.input`
    margin: 4px 0;
    font-size: 1.2rem;
`
const ButtonSubmit = styled.button`
    width: 100%;
`

const SpanTitle = styled.span`
  font-size: 1rem;
`

export default Login;