# 기본 사항

## 구현 의도
이번 과제에서는 제공된 피그마 디자인을 기준으로 UI 컴포넌트를 구현하는 것이 목표였으며, 지시사항에 따라 Storybook을 활용한 컴포넌트 단위 개발을 진행했습니다.

1. 스토리북을 활용함 컴포넌트 재사용성 극대화
   기본적으로 많이 사용하는 버튼, 타이틀 등을 UI 컴포넌트화 시켰습니다.
   특히 버튼에서는 argTypes를 활용해 다양한 props 변화에 따른 UI 상태를 테스트했습니다.
   classNames 를 사용하여 variant 값에 대응하는 스타일을 할당해주었습니다.
3. 피그마 디자인과의 일치성 
   디자인 가이드를 기준으로 1100px, 모바일의 경우 최대 콘텐츠 너비 430px 에 부합하게 제작하였습니다.
4. 적응형 환경을 위해 기기체크 모듈을 구성 (components > utils)
   isDesktop, isMobile 를 사용하여 현재 기기체크 가능
5. components 는 home, ui, layout 으로 구성하였습니다.
   layout - 페이지별 사용가능한 전체 container 환경을 제공합니다. 동시에 header footer 등의 전역으로 사용한 컴포넌트들을 넣었습니다.
   ui - 스토리북에 넘어간 최소단위 컴포넌트를 조합하여 만든 컴포넌트들을 넣었습니다.
   home - layout, ui 를 제외한 도메인별 폴더를 생성하였습니다. 추후 도메인 추가 시 도메인별로 폴더를 생성하여 관리하도록 생각했습니다.

## 후기 
구현의도대로 설계하지 못한 부분이 많아 아쉬움이 남습니다만
평소 사용해보고 싶었던 스토리북을 디자인에 맞춰서 사용해보고 직접 실행해보니 생각보다 너무 재밌었습니다.

## 기술 스택
- Framework: [Next.js 14](https://nextjs.org/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Styling: [Sass](https://sass-lang.com/) / [CSS Modules](https://github.com/css-modules/css-modules)
- UI Components: [Storybook](https://storybook.js.org/)
- Linting: [ESLint](https://eslint.org/)
- Formatting [Prettier](https://prettier.io/)
- Package Manager [Yarn](https://yarnpkg.com/)
