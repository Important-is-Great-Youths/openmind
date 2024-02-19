import React from "react";
import styles from "./PostHeader.module.scss";
import classNames from "classnames/bind";
import ButtonShare from "../../ui/ButtonShare/ButtonShare";
import { Link } from "react-router-dom";
import { useGetSubject } from "../../../data-access/subjects/useGetSubject";
import { useState } from "react";

const cx = classNames.bind(styles);

interface PostHeaderProps {
  id: number;
}

export default function PostHeader({ id }: PostHeaderProps) {
  const [zIndex, setZIndex] = useState(false);
  const { data } = useGetSubject(id);
  const { imageSource, name }: { imageSource: string; name: string } = data || {
    imageSource: "",
    name: "",
  };
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
        <ButtonShare onSetZIndex={setZIndex} />
      </div>
    </>
  );
}
