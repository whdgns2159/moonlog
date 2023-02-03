"use client";
/**
 * 2. useServerInsertedHTML 후크를 사용하여
 * 레지스트리에 수집된 스타일을 루트 레이아웃의 <head>
 * HTML 태그에 삽입하는 클라이언트 구성 요소를 만듭니다.
 */
import { useServerInsertedHTML } from "next/navigation";

import { useStyledComponentsRegistry } from "@/lib/styled-components";

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
    const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry();

    useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}