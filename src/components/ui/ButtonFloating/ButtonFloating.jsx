import styles from "./ButtonFloating.module.css";

export default function ButtonFloating({ text }) {
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  );
}
