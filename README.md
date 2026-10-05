# STEPFLOW 스텝이 리디자인 v3

이번 버전은 캐릭터를 기존 화면에 단순 삽입한 버전이 아니라, **학생 화면 전체의 디자인 기조를 스텝이 브랜드에 맞게 재정리한 버전**입니다.

## 핵심
- 기존 기능/API/D1 데이터 구조 유지
- 관리자 화면은 기존 운영형 UI 유지 (스텝이 미적용)
- 학생 화면만 크림/버터옐로우/블랙 기반의 새 디자인 시스템 적용
- 한 화면에 스텝이 최대 1개
- 같은 이미지를 반복 사용하지 않고 상황별 포즈 사용
  - 홈: 기본/할 일/공부 중/완료 상태에 따라 포즈 변경
  - 온보딩: 단계마다 포즈 변경
  - 계획 빈 화면: 체크리스트 포즈
  - 캘린더 요약: 캘린더 포즈
  - 기록: 기록/궁금/걱정 포즈
- 기존 회원가입, 정회원/베타, manager247, 오프라인 PWA, 타이머, 기록수정 기능 유지

## GitHub에 덮어쓸 파일
- public/index.html
- public/sw.js
- public/manifest.webmanifest
- public/icon-192.png
- public/icon-512.png
- public/stepi-main.png
- public/stepi-happy.png
- public/stepi-focus.png
- public/stepi-curious.png
- public/stepi-cheer.png
- public/stepi-worry.png
- public/stepi-todo.png
- public/stepi-calendar.png
- public/stepi-timer.png
- public/stepi-record.png

`src/index.js`는 기존 v2와 동일합니다. 서버 데이터 재이전은 필요하지 않습니다.

## 배포 후
설치형 PWA는 이전 Service Worker 캐시가 남을 수 있으므로 앱을 완전히 종료 후 다시 열거나, 필요하면 홈 화면의 기존 앱을 지우고 재설치하세요.
