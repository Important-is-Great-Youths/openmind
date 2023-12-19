import styles from "./ButtonFloating.module.css";

export default function ButtonFloating({ text, onClick }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
