// 韩语

import { LocaleData } from "@/type";
import koKR from "antd/locale/ko_KR";

const localeData: LocaleData = {
  antLocale: koKR,
  logo: "Pic Smaller",
  initial: "초기화 중",
  previewHelp:
    "압축 효과를 비교하려면 구분선을 드래그하세요. 왼쪽은 원본 이미지, 오른쪽은 압축된 이미지입니다.",
  uploadCard: {
    title: "여기에서 파일을 선택하고 파일 및 폴더 끌기를 지원합니다.",
    subTitle: "오픈 소스 배치 이미지 압축 도구, %s 형식 지원",
  },

  listAction: {
    batchAppend: "일괄 추가",
    addFolder: "폴더 추가",
    clear: "목록 지우기",
    downloadAll: "모두 저장",
    downloadOne: "이미지 저장",
    removeOne: "사진 제거",
    reCompress: "재압축",
  },
  columnTitle: {
    status: "상태",
    name: "파일 이름",
    preview: "미리보기",
    size: "크기",
    dimension: "크기",
    decrease: "압축 비율",
    action: "액션",
    newSize: "새 크기",
    newDimension: "새 차원",
  },
  optionPannel: {
    failTip: "더 작게 만들 수 없습니다. 매개변수를 조정하고 다시 시도하세요.",
    help: "일반적으로 옵션값이 클수록 압축률은 낮아지지만, 영상이 더욱 선명해집니다. 해당 옵션이 어떤 기능을 하는지 모르신다면 여러 번 시도해 보시고 압축 효과를 비교해 보세요.",
    resizeLable: "이미지 크기 조정",
    formatLable: "출력 형식 설정",
    jpegLable: "JPEG/WEBP 매개변수",
    pngLable: "PNG 매개변수",
    gifLable: "GIF 매개변수",
    avifLable: "AVIF 매개변수",
    unChanged: "크기 조정 없음",
    toWidth: "너비, 높이는 자동으로 조정됩니다.",
    toHeight: "높이를 설정하면 너비가 자동으로 조정됩니다",
    widthPlaceholder: "출력 이미지의 너비를 설정합니다",
    heightPlaceholder: "출력 이미지의 높이를 설정합니다",
    resetBtn: "재설정 옵션",
    confirmBtn: "옵션 적용",
    qualityTitle: "출력 이미지 품질 설정(0-1)",
    colorsDesc: "출력 색상 수 설정(2-256)",
    pngDithering: "디더링 계수 설정(0-1)",
    gifDithering: "디더링 켜기",
    avifQuality: "출력 이미지 품질 설정(1-100)",
    avifSpeed: "압축 속도 설정(1-10)",
  },
  error404: {
    backHome: "홈 페이지로 돌아가기",
    description: "죄송합니다. 방문하신 페이지는 존재하지 않습니다~",
  },
  progress: {
    before: "압축 전",
    after: "압축 후",
    rate: "압축률",
  },
};

export default localeData;
