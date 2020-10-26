import React from "react"
import "./App.css"
import { KakaoLinkDefault, KakaoLinkScrap } from "react-kakao-link"

const App: React.FunctionComponent = () => {
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
    <div className="App">
      <header className="App-header">
        <KakaoLinkDefault template={template} jsKey={"1ee5cc9e2e4525c244069216d2522870"} className="">
          <button>카카오톡 공유하기</button>
        </KakaoLinkDefault>
        <KakaoLinkScrap requestUrl="https://developers.kakao.com" className="" jsKey={"1ee5cc9e2e4525c244069216d2522870"}>
          <button>카카오톡 공유하기 스크랩</button>
        </KakaoLinkScrap>
      </header>
    </div>
  )
}

export default App
