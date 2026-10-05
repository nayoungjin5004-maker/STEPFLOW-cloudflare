# STEPFlow 기록 수정 버튼 v2 핫픽스

원인: 기록 수정 모달에서 사용하는 `localInputValue()`와 `kstInputToIso()` 함수가 누락되어 버튼 클릭 직후 자바스크립트 오류가 발생했습니다.

교체 파일:
- `public/index.html`
- `public/sw.js`

수정 내용:
- KST 기준 datetime-local 변환 함수 복구
- 기록 수정 버튼 직접 이벤트 바인딩 추가
- 기존 이벤트 위임도 유지
- PWA 캐시 버전 갱신
