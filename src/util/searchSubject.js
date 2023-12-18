import { useState, useEffect, useMemo } from "react";
import { useGetSubjects } from "../data-access/subjects/useGetSubjects";

const SearchSubject = ({ name }) => {
  const { data: subjectsData } = useGetSubjects(99);
  const { count, next, previous, results } = subjectsData || {};
  // useMemo를 사용하여 subjects를 초기화
  const subjects = useMemo(() => {
    return results ? { count, next, previous, results } : null;
  }, [count, next, previous, results]);
  const [nameArray, setNameArray] = useState([]);

  useEffect(() => {
    // subjects.results가 존재하고 데이터가 있을 때만 배열을 생성
    if (subjects && subjects.results) {
      const newArray = subjects.results.map((subject) => subject.name);
      setNameArray(newArray);
    }
  }, [subjects]);

  try {
    const nameIndex = nameArray.indexOf(name);
    if (nameIndex !== -1) {
      return subjects.results[nameIndex].id;
    } else {
      // 존재하지 않는 이름이면
      return -1;
    }
  } catch (error) {
    return error;
  }
};

export default SearchSubject;
