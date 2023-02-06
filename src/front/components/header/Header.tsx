'use client'
import styled from "styled-components";
import LoginImage from "@/public/login.svg"

const Header = () => {

    const Logo = styled.div`
        
    `
    const Menu = styled.div`
        padding : 0 5px;
    `
  return (
      <>
          <Logo>
              여기는 헤더입니다.
          </Logo>
          <Menu>
              <LoginImage height={'1rem'} />
          </Menu>
      </>
  )
}

export default Header;