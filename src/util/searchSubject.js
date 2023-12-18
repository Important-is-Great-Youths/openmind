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

// const SearchSubjectForm = () => {
//   const { data: subjectsData } = useGetSubjects(99);
//   const { count, next, previous, results } = subjectsData || {};
//   const subjects = subjectsData ? { count, next, previous, results } : null;

//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     const subjectId = SearchSubject(name);
//     alert(subjectId);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <p>count: {subjects ? subjects.count : null}</p>
//         <label htmlFor="nameInput">
//           Name:
//           <input
//             id="nameInput"
//             type="text"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         {subjects && subjects.results.length > 0 && (
//           <ul>
//             {subjects.results.map((subject) => (
//               <li key={subject.id}>
//                 ID: {subject.id}, Name: {subject.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// };