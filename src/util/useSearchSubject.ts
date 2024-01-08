import { useState, useMemo, useEffect } from "react";
import { useGetSubjects } from "../data-access/subjects/useGetSubjects";

export const useSearchSubject = () => {
  const { data: subjectsData, loading, error } = useGetSubjects(99);

  const subjects = useMemo(() => {
    return subjectsData?.results
      ? { ...subjectsData, results: [...subjectsData.results] }
      : null;
  }, [subjectsData]);

  const [nameArray, setNameArray] = useState([]);

  useEffect(() => {
    if (!loading && !error && subjects && subjects.results) {
      const newArray = subjects.results.map((subject) => subject.name);
      setNameArray(newArray);
    }
  }, [loading, error, subjects]);

  const searchSubject = (name) => {
    const nameIndex = nameArray.indexOf(name);

    if (nameIndex !== -1) {
      // 존재하는 이름이면
      return subjects?.results[nameIndex].id;
    } else {
      // 존재하지 않는 이름이면
      return -1;
    }
  };
  return { searchSubject };
};

// export default useSearchSubject;

// 예시 코드
// const SearchSubjectForm = () => {
//   const { data: subjectsData } = useGetSubjects(99);
//   const { count, next, previous, results } = subjectsData || {};
//   const subjects = subjectsData ? { count, next, previous, results } : null;

//   const [name, setName] = useState("");

//   const subjectId = useSearchSubject(name);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(subjectId);
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
