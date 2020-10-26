 [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/heyman333/react-kakao-link/pulls)
[![Platform](https://img.shields.io/badge/platform-react-lightgrey.svg)](http://facebook.github.io/react/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/heyman333/react-kakao-link/blob/master/LICENSE)

<a href="https://www.npmjs.com/package/react-kakao-link">
<img alt="npm version" src="http://img.shields.io/npm/v/react-kakao-link.svg?style=flat-square">
</a>
<a href="https://www.npmjs.com/package/react-kakao-link">
<img src="http://img.shields.io/npm/dm/react-kakao-link.svg?style=flat-square">
</a>



# react-kakao-link

리액트 웹에서 사용할 수 있는 카카오 링크입니다.

## example

```ts
import React from 'react';
import { KakaoLinkDefault, KakaoLinkScrap } from "react-kakao-link"

function App() {
  const template = {
    objectType: "feed",
    content: {
      title: "딸기 치즈 케익",
      description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
      imageUrl:
        "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      {
        title: "앱으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
  }

  return (
    <div>
        <KakaoLinkDefault
          className="template"
          template={template}
          jsKey={"1ee5cc9e2e4525c244069216d2522870"}
        >
          <button>카카오링크 디폴트 템플릿</button>
        </KakaoLinkDefault>
        <KakaoLinkScrap
          className="scrap"
          requestUrl={"https://developers.kakao.com"}
          jsKey={"1ee5cc9e2e4525c244069216d2522870"}
        >
          <button>카카오링크 스크랩</button>
        </KakaoLinkScrap>
    </div>
  )
}

export default App;
```

## how to use
 1. 카카오 개발자 홈페이지 [애플리케이션 등록](https://developers.kakao.com/docs/latest/ko/getting-started/app)을 참조하여 개발자 페이지에 웹으로 플랫폼을 등록합니다.
 2. JavaScript 키를 발급 받습니다.
 3. 템플릿에서 사용되는 link url 은 [사이트 도메인](https://developers.kakao.com/console/app/488557/config/platform)에 등록 되어야 합니다. (ex: `webUrl: "https://developers.kakao.com"`)

## props
  
- 공통

  1. jsKey - [앱 등록시](https://developers.kakao.com/docs/latest/ko/getting-started/app) 발급받은 JavaScript 키 `string`
  2. children (optional) - 사용자가 직접 그리는 컴포넌트 `ReactNode`
  3. className (optional) `string`

- KakaoLinkScrap

  1. requestUrl - 스크랩 탬플릿에 사용되는 requestUrl. [샘플](https://developers.kakao.com/tool/demo/link/scrap) `string`

- KakaoLinkDefault

  1. template - objectType에 따른 탬플릿. [샘플](https://developers.kakao.com/tool/demo/link) `Object`

## todo

1.  템플릿 any타입 없애기
2.  테스트코드 작성
