import styles from "./ButtonShare.module.css";
import { ReactComponent as IconLink } from "../../icon/icon-link.svg";
import { ReactComponent as IconKakaotalk } from "../../icon/icon-kakaotalk.svg";
import { ReactComponent as IconFacebook } from "../../icon/icon-facebook.svg";

export default function ButtonShare() {
  const shareToOpenMind = () => {
    navigator.share({
      title: "Important-is-Great-Youths",
      text: "중요한 건 멋진 젊은이들의 오픈마인드사이트",
      url: "https://www.codeit.kr",
    });
  };

  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent("https://www.naver.com");
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  return (
    <div className={styles.FooterSns}>
      <div className={styles.link} onClick={shareToOpenMind}>
        <IconLink width="18" height="18" fill="#fff" />
      </div>
      <div className={styles.kakao}>
        <IconKakaotalk width="18" height="18" />
      </div>
      <div className={styles.facebook} onClick={shareToFacebook}>
        <IconFacebook width="18" height="18" fill="#fff" />
      </div>
    </div>
  );
}
