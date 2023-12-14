import styles from "./MockUpTest.module.css";
import classNames from "classnames/bind";

function SubjectListItem({ item }) {
  const { count, next, previous, results } = item;
  const cx = classNames.bind(styles);

  return (
    <div>
      <p className="caption-1-regular">{count}</p>
      <p className="caption-1-regular">{next}</p>
      <p className="caption-1-regular">{previous}</p>
      <ul className={cx("testUl")}>
        <h3>AnswerList</h3>
        {results.map((result) => (
          <li key={result.id}>
            <SubjectResultItem result={result} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function SubjectResultItem({ result }) {
  const { id, name, imageSource, questionCount, createdAt, team } = result;
  const cx = classNames.bind(styles);

  return (
    <div>
      <p className="caption-1-regular">{id}</p>
      <p className="caption-1-regular">{name}</p>
      <img className={cx("subject-img")} src={imageSource} alt={name} />
      <p className="caption-1-regular">{questionCount}</p>
      <p className="caption-1-regular">{createdAt}</p>
      <p className="caption-1-regular">{team}</p>
    </div>
  );
}

function SubjectList({ items }) {
  const cx = classNames.bind(styles);
  return (
    <ul className={cx("testUl")}>
      <h3>AnswerList</h3>
      {items.map((item) => (
        <li>
          <SubjectListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default SubjectList;
