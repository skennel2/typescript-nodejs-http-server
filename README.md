# 개발 환경 세팅

## npm 초기화
```
npm init
```

## 의존성 추가
```
npm i typescript, @types/node --save-dev
```

## typescript 초기화
tsconfig.json 생성
```
tsc --init
```

---

# 프로젝트 실행

## 빌드

타입스크립트 빌드
프로젝트 루트의 tsconfig.json 이용
dist 디렉토리에 빌드되어 js파일이 생성된다.
```
tsc
```

## 실행
```
node ./dist/파일명
```