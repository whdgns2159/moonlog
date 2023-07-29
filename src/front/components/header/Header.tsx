'use client'
import styled from "styled-components";
import loginSvg from "@/public/login.svg"
import Link from "next/link";
import {useSession} from "next-auth/react";

const Header = () => {

    const Logo = styled.div`
        
    `
    const Menu = styled.div`
        padding : 0 5px;
    `
    const LoginImage = styled(loginSvg)``

    const {data:session} = useSession();
  return (
      <>
          <Logo>
              여기는 헤더입니다.
          </Logo>
          <Menu>
              {session?.user ?(
                  <>
                    <p>{session.user.name} 님 안녕하세요</p>
                  </>
              )
                  :
              (
                  <>
                      <Link href={"/user/login"}>
                          <LoginImage height={'1rem'} />
                      </Link>
                  </>
              )}
          </Menu>
      </>
  )
}

export default Header;