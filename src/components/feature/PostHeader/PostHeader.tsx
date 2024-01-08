import styles from "./PostHeader.module.css";
import classNames from "classnames/bind";
import ButtonShare from "../../ui/ButtonShare/ButtonShare";
import { Link } from "react-router-dom";
import { useGetSubject } from "../../../data-access/subjects/useGetSubject";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function PostHeader({ id }) {
  const [zIndex, setZIndex] = useState(false);
  const { data } = useGetSubject(id);
  const { imageSource, name } = data || {};

  return (
    <>
      <div className={cx("header", { zIndex: zIndex })}>
        <div className={cx("header-img")} />
        <Link to="/">
          <img
            className={cx("logo")}
            src="/assets/main-logo.png"
            alt="오픈마인드 로고"
          />
        </Link>
        <img
          className={cx("profile-photo")}
          src={imageSource}
          alt="프로필 이미지"
        />
        <h2 className={cx("username")}>{name}</h2>
        <ButtonShare zIndex={setZIndex} />
      </div>
    </>
  );
}
