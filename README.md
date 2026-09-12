# 가라타다 메인 페이지

정적 HTML/CSS/JavaScript로 만든 가라타다 메인 페이지입니다. GitHub Pages에 그대로 배포할 수 있습니다.

## 파일 구조

```text
garatada-main/
├─ index.html
├─ review.html
├─ achievement.html
├─ stationpedia.html
├─ meeting.html
├─ style.css
├─ script.js
└─ assets/
   └─ logo.png
```

## 실행

`index.html`을 브라우저에서 열면 바로 확인할 수 있습니다.

VS Code에서는 `Live Server` 확장 프로그램을 사용해도 됩니다.

## GitHub Pages 배포

1. 이 폴더의 파일을 GitHub 저장소에 업로드합니다.
2. 저장소에서 **Settings → Pages**로 이동합니다.
3. **Deploy from a branch**를 선택합니다.
4. `main` 브랜치와 `/ (root)`를 선택하고 저장합니다.
5. 잠시 뒤 표시되는 GitHub Pages 주소로 접속합니다.

## 다음 개발 시

각 기능용 파일(`review.html`, `achievement.html`, `stationpedia.html`, `meeting.html`)은 현재 연결 확인용 기본 화면입니다. 해당 파일을 실제 기능 페이지 코드로 교체해도 메인 페이지 링크는 그대로 유지됩니다.
