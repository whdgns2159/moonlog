'use client'
import styled from "styled-components";
import loginSvg from "@/public/login.svg"
import Login from '@/app/login/page.jsx';
import Link from "next/link";

const Header = () => {

    const Logo = styled.div`
        
    `
    const Menu = styled.div`
        padding : 0 5px;
    `
    const LoginImage = styled(loginSvg)``
  return (
      <>
          <Logo>
              여기는 헤더입니다.
          </Logo>
          <Menu>
              <Link href={"/login"}>
                  <LoginImage height={'1rem'} />
              </Link>
          </Menu>
      </>
  )
}

export default Header;