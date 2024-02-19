import PostHeader from "../components/feature/PostHeader/PostHeader";
import classNames from "classnames/bind";
import styles from "./BasePostLayout.module.scss";
import React, { ReactNode } from "react";

const cx = classNames.bind(styles);

interface BasePostLayoutProps {
  children: ReactNode;
  id: number;
}

const BasePostLayout = ({ children, id }: BasePostLayoutProps) => {
  return (
    <>
      <PostHeader id={id} />
      <main className={cx("main")}>{children}</main>
    </>
  );
};

export default BasePostLayout;
