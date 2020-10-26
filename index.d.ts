interface KakaoLinkDefaultProps {
    template: any;
    jsKey: string;
    className?: string;
}

interface KakaoLinkScrapProps {
    requestUrl: string;
    jsKey: string;
    className?: string;
}


declare const KakaoLinkDefault: React.FunctionComponent<KakaoLinkDefaultProps>
declare const KakaoLinkScrap: React.FunctionComponent<KakaoLinkScrapProps>

export { KakaoLinkDefault, KakaoLinkScrap }