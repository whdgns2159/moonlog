'use client'
import Header from "@/components/header/Header";
import styled from "styled-components";
import {media, MIXINS} from "@/styles/theme";
import Footer from "@/components/footer/Footer";

export default function ArticleFrameLayout({children} : { children : React.ReactNode}){
    const LayoutHeader = styled.header`
        ${MIXINS.flexBox('row', 'center', 'space-between')}
        background-color : #777777;
        ${media.pc}{
            height: 50px;
        };
        ${media.tablet}{
          height: 80px;
        };
        ${media.mobile}{
          height: 80px;
        };
    `
    const LayoutMain = styled.section`
        ${MIXINS.flexBox()}
    `
    const LayoutFooter = styled.footer`
        ${MIXINS.flexBox()}
    `
    return(
        <>
        <LayoutHeader>
            <Header/>
        </LayoutHeader>
        <LayoutMain>
            {children}
        </LayoutMain>
        <LayoutFooter>
            <Footer/>
        </LayoutFooter>
        </>
    )
}