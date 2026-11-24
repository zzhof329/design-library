# 설계기준 라이브러리

제철플랜트 건축 설계검토용 설계기준 정리 사이트입니다. (자매 사이트: [건축 법규 아카이브](https://zzhof329.github.io/law-archive/))

- **제철 프로세스** — 원료 → 소결·코크스 → 제선 → 제강·연주 → 열간압연 → 냉연·도금 → 에너지·환경, 공정별 건축 설계검토 포인트와 관련 약어
- **설비 약어** — 제철 설비 약어 387개, 공정별 분류·검색
- **단중표** — 형강·강관·PL·볼트·철근 등 1,400여 항목 단중·도장계수·할증, 길이·수량 입력 시 중량 계산
- **강재 규격** — SS·SM·SN·SHN·강관·고장력볼트·철근 강종별 강도
- **설계기준·바로가기** — KDS·KCS 코드 체계, 국가건설기준센터·KS·법령 원문 링크

참고용 정리 자료이며 법적 효력이 없습니다. 설계 적용 전 현행 원문으로 확인하세요.

---

## 처음 올리는 방법 (웹 브라우저만 사용)

1. **github.com** 로그인 → 오른쪽 위 **+ → New repository**
   - Repository name: 예) `design-library`
   - **Public** 선택 → **Create repository**
2. **uploading an existing file** 링크 → 이 폴더(`공개사이트`) 안의 **index.html, README.md, lib-*.png 4개, data 폴더**를 한꺼번에 끌어다 놓기 → **Commit changes**
3. **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main** / **(root)** → Save
4. 1~2분 뒤 주소: `https://아이디.github.io/design-library/`

## 내용을 고칠 때

| 바꿀 것 | 방법 | 다시 올릴 파일 |
|---|---|---|
| 단중표 엑셀 | `도구\단중표_변환.ps1` 실행 | `data/danjung.js` |
| 화면 | 새 `원본\화면N.html` 저장 → `도구\사이트_만들기2.ps1` 실행 | `index.html` |
| 약어·공정·강재·기준 | `data/*.js` 수정 | 바뀐 `data/*.js` |

GitHub 저장소 화면에서 **Add file → Upload files** 로 바뀐 파일만 다시 올리면 덮어씁니다.

## 파일

| 파일 | 내용 |
|---|---|
| `index.html` | 화면 |
| `data/danjung.js` | 단중표 (단중표.xlsx 에서 자동 생성) |
| `data/abbr.js` | 설비 약어 (설비약어.pdf, OCR 정정) |
| `data/process.js` | 제철 프로세스 |
| `data/grades.js` | 강재 규격 |
| `data/codes.js` | 설계기준 코드·바로가기 |
