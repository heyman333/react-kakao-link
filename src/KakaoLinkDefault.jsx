import React from "react"

function KaKaoLinkDefault({ children, template, jsKey, className }) {
  React.useEffect(() => {
    let id = "kakao-link-api"
    if (document.getElementById(id) == null) {
      const js = document.createElement("script")

      js.id = id
      js.src = "//developers.kakao.com/sdk/js/kakao.min.js"
      js.onload = () => {
        window.Kakao.init(jsKey)
      }

      document.body.append(js)
    }
  })

  const onLink = () => {
    window.Kakao.Link.sendDefault(template)
  }

  return <div onClick={onLink} id="kakao-link-btn">{children}</div>
}

export default KaKaoLinkDefault
