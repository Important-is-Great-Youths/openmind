import React, { useState } from "react";
import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import SearchSubject from "../../util/searchSubject";

const SearchSubjectForm = () => {
  const { data: subjectsData } = useGetSubjects(99);
  const { count, next, previous, results } = subjectsData || {};
  const subjects = subjectsData ? { count, next, previous, results } : null;

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    const subjectId = SearchSubject(name);
    alert(subjectId);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
