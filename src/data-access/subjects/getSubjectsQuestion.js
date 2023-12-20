export async function getSubjectsQuestion(id, limit = 99, offset = "") {
  const subjectId = id;
  const query = `?limit=${limit}`;
  const response = await fetch(
    `https://openmind-api.vercel.app/2-3/subjects/${subjectId}/questions/${query}`
  );
  if (!response.ok) {
    throw new Error("질문 조회에 실패했습니다");
  }
  const body = await response.json();
  return body;
}
