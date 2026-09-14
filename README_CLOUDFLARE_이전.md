# STEPFLOW → Cloudflare 이전판

이 프로젝트는 기존 Railway 버전의 화면과 `/api/...` 주소를 유지하면서 저장소만 Cloudflare Workers + D1로 바꾼 버전입니다.

## 중요한 점
- Railway는 Cloudflare 테스트가 끝날 때까지 절대 끄지 않습니다.
- 기존 Railway 데이터는 GitHub ZIP 안에 없습니다. Railway Volume의 `/app/data/stepflow-state.json`에 있습니다.
- Cloudflare에서 처음 실행하면 기본 계정만 생깁니다. 기존 데이터는 `migrate.html`에서 가져옵니다.
- Web Push(앱이 완전히 닫힌 상태에서 오는 관리자 푸시)는 이 1차 이전판에서는 꺼져 있습니다. 앱 안의 관리자 알림/출결 알림 기록은 계속 작동합니다.

## Cloudflare에 올리는 가장 쉬운 방법
1. 이 폴더를 새 GitHub 저장소에 올립니다. 기존 Railway 저장소를 덮어쓰지 마세요.
2. Cloudflare 가입/로그인 → Workers & Pages → Create application → Import a repository.
3. 새 GitHub 저장소를 선택하고 Save and Deploy 합니다.
4. `wrangler.jsonc`의 D1 binding은 자동 provisioning 방식이라 첫 배포 때 D1이 함께 만들어집니다.
5. 배포가 끝나면 `https://...workers.dev` 주소를 엽니다.
6. 관리자 `nyj5004`로 로그인해 화면이 정상인지 확인합니다.

## 기존 데이터 가져오기
1. Railway의 `/app/data/stepflow-state.json`을 다운로드합니다.
2. Cloudflare STEPFlow에서 관리자 계정으로 로그인합니다.
3. 같은 주소 뒤에 `/migrate.html`을 붙여 엽니다.
4. 다운로드한 `stepflow-state.json`을 선택 → `데이터 옮기기`.
5. 완료 후 다시 로그인해 계획/공부기록/출결/관리자 화면을 확인합니다.

## 최종 전환
며칠 테스트 후 이상이 없으면 기존 도메인을 Cloudflare Worker에 연결하고 마지막으로 Railway를 종료합니다.
