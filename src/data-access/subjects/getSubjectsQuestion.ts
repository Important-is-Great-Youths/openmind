export async function getSubjectsQuestion(
  id: number,
  limit = 99,
  offset: number
) {
  const query = `?limit=${limit}`;
  const response = await fetch(
    `https://openmind-api.vercel.app/2-3/subjects/${id}/questions/${query}`
  );
  if (!response.ok) {
    throw new Error("질문 조회에 실패했습니다");
  }
  const body = await response.json();
  return body;
}
