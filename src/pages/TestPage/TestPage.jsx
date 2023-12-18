import React, { useState, useEffect } from "react";
import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";

const SearchSubjectForm = () => {
  const { data: subjectsData } = useGetSubjects(99);
  const { count, next, previous, results } = subjectsData || {};
  const subjects = subjectsData ? { count, next, previous, results } : null;

  const [name, setName] = useState("");
  const [nameArray, setNameArray] = useState([]);

  const handleSubmit = (e) => {
    try {
      const nameIndex = nameArray.indexOf(name);

      if (nameIndex !== -1) {
        alert(`Name ${name} found at index ${nameIndex}`);
      } else {
        alert("No name");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    // subjects.results가 존재하고 데이터가 있을 때만 배열을 생성
    if (subjects && subjects.results) {
      const newArray = subjects.results.map((subject) => subject.name);
      setNameArray(newArray);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>count: {subjects ? subjects.count : null}</p>
        <label htmlFor="nameInput">
          Name:
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {subjects && subjects.results.length > 0 && (
          <ul>
            {subjects.results.map((subject) => (
              <li key={subject.id}>
                ID: {subject.id}, Name: {subject.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export const TestPage = () => {
  return (
    <>
      <h1>테스트 페이지</h1>
      <SearchSubjectForm />
    </>
  );
};
