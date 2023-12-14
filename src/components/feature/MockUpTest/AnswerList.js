import styles from "./MockUpTest.module.css";
import classNames from "classnames/bind";

function AnswerListItem({ item }) {
  const { id, questionId, content, isRejected, createdAt } = item;

  return (
    <div>
      <p classname="caption-1-regular">{id}</p>
      <p classname="caption-1-regular">{questionId}</p>
      <p classname="caption-1-regular">{content}</p>
      <p classname="caption-1-regular">{isRejected}</p>
      <p classname="caption-1-regular">{createdAt}</p>
    </div>
  );
}

function AnswerList({ items }) {
  const cx = classNames.bind(styles);
  return (
    <ul className={cx("testUl")}>
      <h3>AnswerList</h3>
      {items.map((item) => (
        <li>
          <AnswerListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default AnswerList;
