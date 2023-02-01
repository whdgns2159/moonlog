import styled from 'styled-components';
import {media, MIXINS} from "@/styles/theme";

/**
 * 어플리케이션 전체를 감싸는 Layout 컴포넌트
 * */
const AppLayout = (props: { children: React.ReactNode}) => {
    return (
        <LayoutFrame>
            <LayoutHeader>

            </LayoutHeader>
            <LayoutMain>
                <LayoutNav>

                </LayoutNav>
                <LayoutContents>
                    {props.children}
                </LayoutContents>
            </LayoutMain>
            <LayoutFooter>

            </LayoutFooter>
        </LayoutFrame>
    );
};

const LayoutFrame = styled.article`
  ${MIXINS.flexBox()}
  @media ${media.pc}{
    width: 1200px;
  };
  @media ${media.tablet}
  @media ${media.mobile}
`;

const LayoutHeader = styled.header`
  ${MIXINS.flexBox()}
  @media ${media.pc}{
    width: 1200px;
  };
  @media ${media.tablet}{
    width: 80px;
  };
  @media ${media.mobile}{
    width: 80px;
  };
`
const LayoutMain = styled.section`
  ${MIXINS.flexBox('column')}
`

const LayoutNav = styled.nav`
  ${MIXINS.flexBox()}
`
const LayoutContents = styled.section`

`
const LayoutFooter = styled.footer`
  ${MIXINS.flexBox()}
`

export default AppLayout;