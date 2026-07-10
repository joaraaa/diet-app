# React Study

## Day 01 (2026-07-09)

### 오늘 목표
- Git 설치
- React 프로젝트 생성

### 배운 것
- node, npm, git 설치하기
- vite로 프로젝트 
- entry point 라는 표현 (main.jsx)
- 최상위 컴포넌트 (App.jsx)
- json은 JavaScript Object Notation이라는 데이터 형식 / 사람도, 프로그램도 읽기 쉽다
- 브라우저는 React를 모르고, html부터 읽는다. 그 중 index.html이 가장 먼저 브라우저에 전달됨

#### Vite
- React 프로젝트를 빠르게 생성
- 개발 서버 제공
@npm create vite@latest . 
( .이란 현재 폴더 / diet-app(현재 폴더) 안에 vite를 사용해서 React 프로젝트를 만들어줘 )

#### Npm
@npm install
@npm run dev

### 막힌 점
- Git이 설치되어 있지 않았었다 (cmd에서 @git 으로 확인함)
- npm이 powershell에서 먹히지않아서 vscode 터미널에서 cmd로 바꾸고 설정함

### 해결
- Git 설치
- PATH 등록

### 오늘 느낀 점
환경설정도 개발의 일부라는 걸 알았다.




## Day 02 (2026-07-10)

## 오늘의 목표
- Tailwind CSS 설치
- shadcn/ui 설치
- 경로 별칭 설정
- 식단앱 메인 UI 생성
- Codex를 활용한 바이브 코딩 흐름 익히기

## Tailwind CSS vs shadcn/ui

### Tailwind CSS (테일윈드)
- CSS를 빠르게 작성하기 위한 유틸리티 클래스 라이브러리
- 직접 스타일을 조합해서 사용한다.
@npm install tailwindcss @tailwindcss/vite
- vite.config.js 에 플러그인 추가
- index.css 에 @import "tailwindcss";

### shadcn/ui (섀드씨엔)
- Tailwind CSS 기반의 UI 컴포넌트 라이브러리 (따라서 Tailwind CSS 설치 필수)
- Button, Input, Card 등을 바로 사용할 수 있다.
- 컴포넌트 코드가 프로젝트 안으로 복사되어 자유롭게 수정할 수 있다.
@npx shadcn@latest init
@npx shadcn@latest add input label

### 관계
React
└── Tailwind CSS
    └── shadcn/ui

## npm과 npx의 차이

### npm

패키지를 설치하거나 프로젝트에 등록할 때 사용한다.

```bash
npm install tailwindcss
```

### npx

패키지를 전역으로 설치하지 않고 한 번 실행할 때 사용한다.

```bash
@npx shadcn@latest init
```

---

## Path Alias

shadcn/ui 설치 중 아래 오류가 발생했다.

```text
Could not find valid path aliases or package imports for init.
```

`@/components/ui/button` 같은 경로에서 `@`가 무엇을 의미하는지 설정되어 있지 않았기 때문이다.

### Alias를 사용하지 않는 경우

```jsx
import { Button } from "../../components/ui/button"
```

### Alias를 사용하는 경우

```jsx
import { Button } from "@/components/ui/button"
```

여기서 `@`는 `src` 폴더를 의미한다.

### 사용방법
- vite.config.js에 내용추가
- jsconfig.json 파일 추가 및 compilerOptions에 내용 추가 (jsconfig.js -> vscode가 활용하는 js설정파일)

### 장점
- 경로가 짧아진다.
- 폴더 구조가 바뀌어도 수정이 쉽다.
- 실무에서 많이 사용한다.

### 배운 것
- tailwind.css
- shadcn/ui
- codex기본 사용법
- path Alias
- npm & npx 차이점

### 막힌 점
- shadcn 사용시 컴포넌트 호출 오류
- Path Alias(@)를 인식하지 못하는 오류

### 원인
- `App.jsx`에서는 `Input` 컴포넌트를 import했지만 실제 프로젝트에 `input.jsx` 파일이 없었다.
- 프로젝트 path alias가 설정되어 있지않아 경로 해석을 못함. `@`는 기본적으로 존재하는 문법이 아니라, 개발자가 직접 설정해야 하는 경로 별칭(Alias)이다.

### 해결
- shadcn 컴포넌트 설치
```bash
npx shadcn@latest add button card input label
```
설치 후 다음 파일들이 생성되었다.
- 1. `vite.config.js`에 Alias 설정 추가 2. `jsconfig.json` 생성


### 오늘 느낀 점
환경설정도 개발의 일부라는 걸 알았다.