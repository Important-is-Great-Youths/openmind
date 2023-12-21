import styles from "./ButtonShare.module.css";
import { ReactComponent as IconLink } from "../../../icon/icon-link.svg";
import { ReactComponent as IconKakaotalk } from "../../../icon/icon-kakaotalk.svg";
import { ReactComponent as IconFacebook } from "../../../icon/icon-facebook.svg";
import Toast from "../Toast/Toast";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

export default function ButtonShare() {
  const [showToast, setShowToast] = useState(false);
  const cx = classNames.bind(styles);

  const shareToOpenMind = async (text) => {
    try {
      await navigator.clipboard.writeText("https://www.codeit.kr");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  const REACT_APP_SHARE_KAKAO_LINK_KEY = "7df72a9443d6a8672a6a96715723c486";

  const shareToKakaotalk = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(REACT_APP_SHARE_KAKAO_LINK_KEY);
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "IGY openmind",
          description: "IGY openmind",
          imageUrl: "이미지 url",
          link: {
            mobileWebUrl: "https://www.codeit.kr",
            webUrl: "https://www.codeit.kr",
          },
        },
      });
    }
  };

  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent("https://www.codeit.kr");
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  });

  return (
    <div>
      <div className={cx("FooterSns")}>
        <div className={cx("link")} onClick={shareToOpenMind}>
          <IconLink width="18" height="18" fill="#fff" />
        </div>
        <div className={cx("kakao")} onClick={shareToKakaotalk}>
          <IconKakaotalk width="18" height="18" />
        </div>
        <div className={cx("facebook")} onClick={shareToFacebook}>
          <IconFacebook width="18" height="18" fill="#fff" />
        </div>
      </div>
      {showToast && (
        <div className={cx("toastLocation")}>
          <Toast />
        </div>
      )}
    </div>
  );
}
