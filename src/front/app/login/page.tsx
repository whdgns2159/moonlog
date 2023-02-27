'use client'
import styled from "styled-components";
import {FieldErrors, useForm} from "react-hook-form";
import {MIXINS} from "@/styles/theme";
import React, {useCallback} from "react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import {getCsrfToken, signIn} from "next-auth/react"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type HookFormType = {
    username : String,
    password : String
}

function Login({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
    const {handleSubmit} = useForm<HookFormType>(formOptions);
    function onSubmit (body: HookFormType ){
        signIn("credentials", {redirect: false , callbackUrl : "http://localhost:3000/article/", ...body})
        return false;
    }

    return (
        <Form onSubmit={body => {handleSubmit(onSubmit)}}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <SpanTitle>아이디</SpanTitle>
            <InputId name={"username"} id={"username"} type={"text"}/>
            <SpanTitle>비밀번호</SpanTitle>
            <InputPwd name={"password"} id={"password"} type={"password"}/>
            <InputButtonSubmit type={"submit"}>로그인</InputButtonSubmit>
        </Form>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
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
const InputButtonSubmit = styled.button`
    width: 100%;
`

const SpanTitle = styled.span`
  font-size: 1rem;
`

export default Login;