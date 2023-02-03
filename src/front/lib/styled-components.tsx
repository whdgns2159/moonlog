/**
 * 1. styled-components API를 사용하여 렌더링 중에
 * 생성된 모든 CSS 스타일 규칙과 해당 규칙을 반환하는
 * 함수를 수집하는 전역 레지스트리 구성 요소를 만듭니다
 */
import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function useStyledComponentsRegistry() {
    const [styledComponentsStyleSheet] = React.useState(
        () => new ServerStyleSheet(),
    );

    const styledComponentsFlushEffect = () => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        // @ts-ignore
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    };

    const StyledComponentsRegistry = ({children,} : {children: React.ReactNode; }) => (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children as React.ReactElement}
        </StyleSheetManager>
    );

    return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
}