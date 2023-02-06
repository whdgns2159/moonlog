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
    ${MIXINS.flexBox('column')}
`
const LayoutContents = styled.section`
    
`
const LayoutAside = styled.aside`
    ${MIXINS.flexBox('column')}
`