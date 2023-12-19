export async function postSubjectsQuestion(id, formData) {
  const response = await fetch(
    `https://openmind-api.vercel.app/2-3/subjects/${id}/questions/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error("질문 생성에 실패하였습니다");
  }
  const body = await response.json();
  return body;
}
