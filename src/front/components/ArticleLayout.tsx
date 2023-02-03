// import Header from "@/components/header/Header";
// import styled from "styled-components";
// import {media, MIXINS} from "@/styles/theme";
//
// /**
//  * 블로그의 틀을 구성하는 Layout component
//  * */
// const ArticleLayout = (props: { children: React.ReactNode}) => {
//     return (
//         <>
//         <LayoutHeader>
//             <Header/>
//         </LayoutHeader>
//         <LayoutMain>
//             <LayoutNav>
//
//             </LayoutNav>
//             <LayoutContents>
//                 {props.children}
//             </LayoutContents>
//         </LayoutMain>
//         <LayoutFooter>
//
//         </LayoutFooter>
//         </>
//     )
// };
//
// const LayoutHeader = styled.header`
//   @media ${media.pc}{
//     height: 100px;
//   };
//   @media ${media.tablet}{
//     height: 80px;
//   };
//   @media ${media.mobile}{
//     height: 80px;
//   };
// `
// const LayoutMain = styled.section`
//   ${MIXINS.flexBox()}
// `
//
// const LayoutNav = styled.nav`
//   ${MIXINS.flexBox()}
// `
// const LayoutContents = styled.section`
//
// `
// const LayoutFooter = styled.footer`
//   ${MIXINS.flexBox()}
// `
// export default ArticleLayout;