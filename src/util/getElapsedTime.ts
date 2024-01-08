export const getElapsedTime = (createdAt) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 31;
  const year = month * 12;

  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now - createdAtDate;

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)}년 전`;
  }
  if (year <= elapsedTime) {
    return `1년 전`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)}개월 전`;
  }
  if (month <= elapsedTime) {
    return `1개월 전`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)}일 전`;
  }
  if (day <= elapsedTime) {
    return `1일 전`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)}시간 전`;
  }
  if (hour <= elapsedTime) {
    return `1시간 전`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)}분 전`;
  }
  return `1분 전`;
};
