'use client'
import styled from "styled-components";
import {media, MIXINS} from "@/styles/theme";

export default function LayoutLogin ({children}: { children : React.ReactNode}){
    const DivLoginCard = styled.div`
      width: 250px;
      height: 100px;
      border: 2px solid darkgray;
      ${MIXINS.flexBox('column')}
      ${MIXINS.positionCenter()}
      ${media.pc}
      ${media.tablet} {
        width: 80%;
        height: 30%;
      }
      ${media.mobile}
    `
    return (
        <DivLoginCard>
            {children}
        </DivLoginCard>
    );
}