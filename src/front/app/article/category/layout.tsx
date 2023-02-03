'use client'
import styled from "styled-components";
import {MIXINS} from "@/styles/theme";

export default function ArticleFrameLayout({children} : { children : React.ReactNode}){


    return (
        <>
            <LayoutNav>

            </LayoutNav>
            <LayoutContents>
                {children}
            </LayoutContents>
        </>
    );
}


const LayoutNav = styled.nav`
        ${MIXINS.flexBox()}
    `
const LayoutContents = styled.section`
    
    `