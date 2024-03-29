// Usercard.jsx
import { Link } from "react-router-dom";
import React from "react";
import styles from "./Usercard.module.scss";
import { ReactComponent as IconMessage } from "../../../icon/icon-messages.svg";
// import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
// import { axiosInstance } from "../../util/axiosInstance";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface UsercardProps {
  data: {
    id: string;
    imageSource: string;
    name: string;
    questionCount: number;
  };
}

const Usercard: React.FC<UsercardProps> = ({ data }) => {
  return (
    <Link to={`/post/${data.id}`} className={cx("usercardLink")}>
      <div className={cx("usercard")}>
        <div className={cx("profileInfo")}>
          <img
            className={cx("profileImage")}
            src={data.imageSource}
            alt="temp-profile"
          />
          <p className={cx("profileName")}>{data.name}</p>
        </div>
        <div className={cx("messageInfo")}>
          <IconMessage className={cx("messageIcon")} />
          <p className={cx("messageLabel")}>받은 질문</p>
          <p className={cx("messageCount")}>{data.questionCount}</p>
        </div>
      </div>
    </Link>
  );
};

export default Usercard;
