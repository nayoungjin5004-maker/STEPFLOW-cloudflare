# STEPFlow V6 업데이트용

GitHub의 같은 위치에 아래 3개 파일만 덮어쓰기 후 Commit 하세요.

- `public/index.html`
- `public/sw.js`
- `src/index.js`

Cloudflare 배포가 Success가 되면 적용됩니다.
기존 D1 데이터는 다시 import하지 마세요.

배포 전에 `/api/admin/export-state` 백업을 하나 받아두는 것을 권장합니다.

주요 변경:
- 관리자 학생 클릭 → 학생 실제 앱 화면 읽기 전용 팝업
- 현재 출결 서버 상태 + 마지막 동기화/기기 수
- 다중기기 `deviceId`, 요청 `mutationId`, 계획 `_rev` 충돌 방지
- 학생 앱 온라인 상태에서 30초 주기 최신화
- 더보기 → 시험 기록
- 점수 + 등급(선택) + 난이도 0.5~5.0 별 드래그 + 메모
