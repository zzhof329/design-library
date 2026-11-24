// 도구 — AutoCAD 실무 단축키 (기본 설정 acad.pgp 기준), 엑셀 단축키·자주 쓰는 함수
// 형식: 묶음 { g: 이름, rows: [[단축키, 명령·함수, 설명]] }
window.CAD = [
 {g:"그리기", rows:[
  ["L","LINE","선"],["PL","PLINE","폴리선"],["C","CIRCLE","원"],["A","ARC","호"],["REC","RECTANG","사각형"],
  ["POL","POLYGON","다각형"],["EL","ELLIPSE","타원"],["SPL","SPLINE","스플라인(곡선)"],["XL","XLINE","무한 구성선"],
  ["H","HATCH","해치"],["BO","BOUNDARY","닫힌 영역 경계선 생성"],["PO","POINT","점"],["DT","TEXT","한 줄 문자"],
  ["T / MT","MTEXT","여러 줄 문자"],["B","BLOCK","블록 만들기"],["W","WBLOCK","블록을 파일로 저장"],["I","INSERT","블록 삽입"]]},
 {g:"수정", rows:[
  ["E","ERASE","지우기"],["M","MOVE","이동"],["CO / CP","COPY","복사"],["RO","ROTATE","회전"],["SC","SCALE","크기 조정"],
  ["MI","MIRROR","대칭"],["O","OFFSET","간격 띄우기"],["TR","TRIM","자르기"],["EX","EXTEND","연장"],
  ["F","FILLET","모깎기 (R=0이면 모서리 맞춤)"],["CHA","CHAMFER","모따기"],["S","STRETCH","늘리기"],["BR","BREAK","끊기"],
  ["J","JOIN","결합"],["X","EXPLODE","분해"],["AR","ARRAY","배열"],["AL","ALIGN","정렬"],["LEN","LENGTHEN","길이 변경"],
  ["PE","PEDIT","폴리선 편집"],["MA","MATCHPROP","속성 복사"],["ED","TEXTEDIT","문자 수정"],["DR","DRAWORDER","그리기 순서 (앞/뒤)"],["G","GROUP","그룹"]]},
 {g:"치수", rows:[
  ["DLI","DIMLINEAR","선형 치수"],["DAL","DIMALIGNED","정렬 치수"],["DCO","DIMCONTINUE","연속 치수"],["DBA","DIMBASELINE","기준선 치수"],
  ["DRA","DIMRADIUS","반지름"],["DDI","DIMDIAMETER","지름"],["DAN","DIMANGULAR","각도"],["QDIM","QDIM","빠른 치수"],
  ["LE","QLEADER","지시선"],["MLD","MLEADER","다중 지시선"],["D","DIMSTYLE","치수 스타일"],["DED","DIMEDIT","치수 편집"]]},
 {g:"PDF · 외부 파일", rows:[
  ["PDFIMPORT","PDFIMPORT","PDF를 선·문자 객체로 가져오기 (편집 가능) — 기본 별칭 없음, 전체 입력"],
  ["PDFATTACH","PDFATTACH","PDF를 언더레이(참조 배경)로 부착 — 편집 불가, 위에 따라 그릴 때"],
  ["PDFSHXTEXT","PDFSHXTEXT","가져온 PDF의 SHX 글꼴 모양을 문자 객체로 변환"],
  ["XA","XATTACH","다른 DWG를 외부 참조로 부착"],["IM","IMAGE","이미지 참조 관리 (JPG·PNG 부착)"],
  ["EXPORTPDF","EXPORTPDF","현재 도면을 PDF로 내보내기"]]},
 {g:"도면층 · 선 · 색상", rows:[
  ["LA","LAYER","도면층 관리자"],["LAYISO","LAYISO","선택 객체 도면층만 보기"],["LAYUNISO","LAYUNISO","LAYISO 해제"],
  ["LAYOFF","LAYOFF","선택 객체 도면층 끄기"],["LAYON","LAYON","모든 도면층 켜기"],["LAYFRZ","LAYFRZ","선택 객체 도면층 동결"],
  ["LAYTHW","LAYTHW","모든 도면층 동결 해제"],["LAYMCUR","LAYMCUR","선택 객체 도면층을 현재로"],["LT","LINETYPE","선 종류"],
  ["LTS","LTSCALE","선 종류 축척"],["COL","COLOR","색상"],["LW","LWEIGHT","선 두께"]]},
 {g:"화면 보기", rows:[
  ["Z → E","ZOOM","전체 보기 (휠 더블클릭)"],["Z → A","ZOOM","도면 한계 포함 전체 보기"],["Z → W","ZOOM","창 영역 확대"],
  ["Z → P","ZOOM","이전 화면"],["P","PAN","화면 이동 (휠 누르고 드래그)"],["RE","REGEN","화면 재생성"]]},
 {g:"조회 · 측정", rows:[
  ["DI","DIST","거리"],["AA","AREA","면적"],["MEA","MEASUREGEOM","거리·반지름·각도·면적"],["LI","LIST","객체 정보"],["ID","ID","좌표"]]},
 {g:"선택 · 정리 · 설정", rows:[
  ["QSELECT","QSELECT","조건으로 빠르게 선택"],["SELECTSIMILAR","SELECTSIMILAR","비슷한 객체 모두 선택"],["FI","FILTER","선택 필터"],
  ["OVERKILL","OVERKILL","겹친 중복 선 정리"],["PU","PURGE","안 쓰는 항목 정리"],["AUDIT","AUDIT","도면 오류 검사"],
  ["RECOVER","RECOVER","손상 파일 복구"],["OS","OSNAP","객체 스냅 설정"],["UN","UNITS","단위 설정"],["ST","STYLE","문자 스타일"],
  ["OP","OPTIONS","옵션"],["XR","XREF","외부 참조 관리"],["CH / PR","PROPERTIES","특성 창"]]},
 {g:"기능키 (F키)", rows:[
  ["F1","HELP","도움말"],["F2","","명령 기록 창"],["F3","OSNAP","객체 스냅 켜기/끄기"],["F7","GRID","그리드"],
  ["F8","ORTHO","직교 모드 (수평/수직)"],["F9","SNAP","스냅"],["F10","POLAR","극좌표 추적"],["F11","OTRACK","객체 스냅 추적"],["F12","DYNMODE","동적 입력"]]},
 {g:"Ctrl 조합키", rows:[
  ["Ctrl+1","","특성 창"],["Ctrl+2","","디자인 센터"],["Ctrl+3","","도구 팔레트"],["Ctrl+9","","명령창 켜기/끄기"],
  ["Ctrl+0","","화면 정리 (전체 화면)"],["Ctrl+Z / Y","","실행 취소 / 다시 실행"],["Ctrl+C / V","","복사 / 붙여넣기"],
  ["Ctrl+Shift+C","","기준점 지정 복사"],["Ctrl+Shift+V","","블록으로 붙여넣기"],["Ctrl+S","","저장"],
  ["Ctrl+Shift+S","","다른 이름으로 저장"],["Ctrl+P","","출력 (PLOT)"],["Ctrl+Tab","","열린 도면 전환"],["Esc","","명령 취소"]]}
];
window.CAD_TIPS = [
 "단축키 입력 후 Space 또는 Enter로 실행 — 명령이 끝난 뒤 Space를 누르면 직전 명령 반복",
 "PDF 도면을 CAD로: PDFIMPORT → PDF 선택 → 페이지·축척 지정. 문자가 선으로 들어오면 PDFSHXTEXT로 변환",
 "명령창이 사라졌을 때: Ctrl+9",
 "파일이 무겁고 느릴 때: PU(모두 정리) → AUDIT → OVERKILL 순서로 실행",
 "복잡한 도면에서 원하는 객체만 볼 때: LAYISO → 작업 → LAYUNISO",
 "단축키 변경·추가: 관리 탭 → 별칭 편집(acad.pgp) 수정 후 명령창에 REINIT 입력 (예: PDFIMPORT에 PDI 별칭 추가)"
];
window.XL = [
 {g:"이동 · 선택", rows:[
  ["Ctrl+방향키","","데이터 끝까지 이동"],["Ctrl+Shift+방향키","","데이터 끝까지 선택"],["Ctrl+Home / End","","첫 셀 / 마지막 셀로"],
  ["Ctrl+Space","","열 전체 선택"],["Shift+Space","","행 전체 선택"],["Ctrl+A","","전체 선택 (표 안에서는 표 범위)"],
  ["Ctrl+G / F5","","이동 (특정 셀·이름)"],["Ctrl+PageUp / Down","","이전 / 다음 시트"],["Alt+;","","보이는 셀만 선택 (숨김 행 제외)"]]},
 {g:"입력 · 편집", rows:[
  ["F2","","셀 편집"],["Alt+Enter","","셀 안에서 줄바꿈"],["Ctrl+Enter","","선택한 여러 셀에 같은 값 입력"],
  ["Ctrl+D / R","","위 / 왼쪽 셀 내용 채우기"],["Ctrl+E","","빠른 채우기 (패턴 자동 인식)"],["Ctrl+; / Ctrl+Shift+;","","오늘 날짜 / 현재 시각"],
  ["Ctrl+Z / Y","","실행 취소 / 다시 실행"],["F4","","직전 작업 반복 (수식 입력 중에는 $ 절대참조 전환)"],
  ["Ctrl+Alt+V","","선택하여 붙여넣기 (값만·서식만 등)"],["Ctrl+F / H","","찾기 / 바꾸기"],["Ctrl++ / Ctrl+-","","셀·행·열 삽입 / 삭제"]]},
 {g:"서식", rows:[
  ["Ctrl+1","","셀 서식 창"],["Ctrl+B / I / U","","굵게 / 기울임 / 밑줄"],["Ctrl+Shift+1 (!)","","천 단위 쉼표 숫자"],
  ["Ctrl+Shift+5 (%)","","백분율"],["Ctrl+Shift+7 (&)","","바깥 테두리"],["Alt → H → O → I","","열 너비 자동 맞춤"],["Ctrl+9","","행 숨기기"]]},
 {g:"수식 · 데이터", rows:[
  ["Alt+=","","자동 합계 (SUM)"],["Ctrl+`","","수식 / 값 보기 전환"],["F9","","다시 계산 (수식 일부 선택 시 그 부분 값 확인)"],
  ["Ctrl+Shift+L","","자동 필터 켜기 / 끄기"],["Ctrl+T","","표(테이블) 만들기"],["Alt+↓","","필터·목록 펼치기"],["Ctrl+[","","수식이 참조하는 셀로 이동"]]},
 {g:"파일 · 화면", rows:[
  ["Ctrl+S","","저장"],["F12","","다른 이름으로 저장"],["Ctrl+N","","새 통합 문서"],["Ctrl+W","","창 닫기"],
  ["Ctrl+P","","인쇄"],["Shift+F11","","새 시트 추가"],["Alt+W → F → F","","틀 고정"],["Ctrl+마우스 휠","","화면 확대 / 축소"]]},
 {g:"자주 쓰는 함수", rows:[
  ["SUMIF / SUMIFS","SUMIFS(합계범위, 조건범위, 조건)","조건에 맞는 값만 합계 — 부재별·동별 물량 집계"],
  ["COUNTIF(S)","COUNTIFS(범위, 조건)","조건에 맞는 개수"],
  ["VLOOKUP / XLOOKUP","XLOOKUP(찾을값, 찾을범위, 가져올범위)","표에서 값 찾아오기 — 규격별 단중 가져오기"],
  ["INDEX + MATCH","INDEX(범위, MATCH(값, 범위, 0))","VLOOKUP 대신 왼쪽 열도 찾을 때"],
  ["ROUND / ROUNDUP","ROUND(값, 자리수)","반올림 / 올림 — 수량 끝자리 정리"],
  ["IF / IFERROR","IFERROR(수식, \"\")","조건 분기 / 오류를 빈칸으로"],
  ["SUMPRODUCT","SUMPRODUCT(단중범위, 길이범위)","곱한 뒤 합계 — 단중 × 길이 총중량"],
  ["TEXT","TEXT(값, \"#,##0.0\")","숫자를 원하는 형식의 문자로"],
  ["SUBTOTAL","SUBTOTAL(9, 범위)","필터로 보이는 행만 합계"]]}
];
window.XL_TIPS = [
 "단축키는 한글 Windows용 Microsoft 365·Excel 2016 이후 기준 — 버전에 따라 일부 다를 수 있음",
 "Alt를 누르면 리본 메뉴에 글자 단추가 나타남 — 순서대로 누르면 마우스 없이 메뉴 실행",
 "XLOOKUP은 Excel 2021·Microsoft 365부터 — 이전 버전은 VLOOKUP 또는 INDEX+MATCH 사용"
];
