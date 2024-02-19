export interface subject {
  id: number;
  name: string;
  imageSource: string;
  questionCount: string;
  createdAt: string;
  team: string;
}

export interface subjectListInfo {
  count: number;
  next: string;
  previous: string;
  results: subject[];
}

export interface subjectQuestions {
  id: number;
  subjectId: number;
  content: string;
  like: number;
  dislike: number;
  createdAt: string;
  team: string;
  answer: {
    id: number;
    questionId: number;
    content: string;
    isRejected: boolean;
    createdAt: string;
  };
}

export interface subjectQuestionsInfo {
  count: number;
  next: string;
  previous: string;
  results: subjectQuestions[];
}
