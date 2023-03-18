'use client'
import styled from "styled-components";
import {media, MIXINS} from "@/styles/theme";
const DivLoginCard = styled.div`
      padding: 2rem 4rem;
      border: 2px solid darkgray;
      ${MIXINS.flexBox('column')}
      ${MIXINS.positionCenter()}
      ${media.pc}
      ${media.tablet}{
        width: 80%;
        height: 30%;
      }
      ${media.mobile}
    `

export default function LayoutLogin ({children}: { children : React.ReactNode}){
    return (
        <DivLoginCard>
            {children}
        </DivLoginCard>
    );
}