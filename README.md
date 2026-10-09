# STEPFlow V6.1 관리자 학생 미리보기 핫픽스

관리자 > 학생 > 학생 클릭 시 팝업 안이 흰 화면으로 비어 있던 문제 수정.

원인: `public/_headers`의 CSP가 `frame-ancestors 'none'`이라 같은 STEPFlow 사이트 안의 iframe조차 차단하고 있었음.

수정:
- `frame-ancestors 'self'`로 변경
- `frame-src 'self'` 명시
- 서비스워커 캐시 버전 `stepflow-sync-admin-exam-v6-1`로 갱신

적용 파일:
- `public/_headers`
- `public/sw.js`

GitHub 같은 경로에 덮어쓰고 Commit → Cloudflare 배포 Success 확인.
D1 재등록/재마이그레이션 불필요.
