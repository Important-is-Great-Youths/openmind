import AnswerList from "./AnswerList";
import styles from "./MockUpTest.module.css";
import classNames from "classnames/bind";

function QuestionListItem({ item }) {
  const { id, subjectId, content, like, dislike, createdAt, team, answer } =
    item;

  return (
    <div>
      <p classname="caption-1-regular">{id}</p>
      <p classname="caption-1-regular">{subjectId}</p>
      <p classname="caption-1-regular">{content}</p>
      <p classname="caption-1-regular">{like}</p>
      <p classname="caption-1-regular">{dislike}</p>
      <p classname="caption-1-regular">{createdAt}</p>
      <p classname="caption-1-regular">{team}</p>
      <AnswerList items={answer} />
    </div>
  );
}

function QuestionList({ items }) {
  const cx = classNames.bind(styles);
  return (
    <ul className={cx("testUl")}>
      <h2>QuestionList</h2>
      {items.map((item) => (
        <li>
          <QuestionListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default QuestionList;
