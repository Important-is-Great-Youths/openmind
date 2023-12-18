import React, { useState, useEffect } from "react";
import { useGetSubjects } from "../data-access/subjects/useGetSubjects";

export const searchSubject = (name) => {
  const { data: subjectsData } = useGetSubjects(99);
  const { count, next, previous, results } = subjectsData || {};
  const subjects = subjectsData ? { count, next, previous, results } : null;

  useEffect(() => {
    // subjects.results가 존재하고 데이터가 있을 때만 배열을 생성
    if (subjects && subjects.results) {
      const newArray = subjects.results.map((subject) => subject.name);
      setNameArray(newArray);
    }
  }, []);

  try {
    const nameIndex = nameArray.indexOf(name);
  }

  return subjectId;
};
