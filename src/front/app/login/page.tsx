'use client'
import styled from "styled-components";
import {MIXINS} from "@/styles/theme";
import React, {FormEvent} from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as Yup from 'yup';
import {signIn} from "next-auth/react";


function Login() {
    //register를 사용하면 validation으로 값을 입력못하게 막을 수 있다.
    const validationSchema = Yup.object().shape({
        // title: Yup.string()
        //     .required('Title is required'),
        // firstName: Yup.string()
        //     .required('First Name is required'),
        // lastName: Yup.string()
        //     .required('Last name is required'),
        // dob: Yup.string()
        //     .required('Date of Birth is required')
        //     .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        username: Yup.string()
            .required('id를 입력해주세요'),
        password: Yup.string()
            .min(6, '비밀번호는 6자리 이상입니다.')
            .required('비밀번호를 입력해주세요'),
        // confirmPassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        //     .required('Confirm Password is required'),
        // acceptTerms: Yup.bool()
        //     .oneOf([true], 'Accept Ts & Cs is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const {handleSubmit} = useForm(formOptions);
    function onSubmit (){
        signIn("credentials", {redirect: false , callbackUrl : "http://localhost:3000/article/"})
        return false;
    }

    return (
        <Form onSubmit={(e) => {handleSubmit(onSubmit)}}>
            <SpanTitle>아이디</SpanTitle>
            <InputId name={"username"} id={"username"} type={"text"}/>
            <SpanTitle>비밀번호</SpanTitle>
            <InputPwd name={"password"} id={"password"} type={"password"}/>
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