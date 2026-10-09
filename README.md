# STEPFlow V6.2 업데이트

GitHub의 같은 경로에 아래 3개 파일을 덮어쓰세요.

- `public/index.html`
- `public/sw.js`
- `src/index.js`

변경 내용:
- 관리자 학생 탭의 불필요한 `STUDENT VIEW` 상세 패널 제거
- 학생 화면 우측 상단에 `↻ 업데이트` 추가
- 현재 기기 데이터를 서버 최종본으로 확정하는 API 추가
- 최종본 확정 후 다른 기기의 오래된 수정 요청을 막는 `syncEpoch` 보호 추가

D1 데이터 재-import는 하지 마세요.
