import { BASE_URL } from "./base";

export default function QuestionAPI() {
  return {
    getByExamId: (examId) =>
      fetch(BASE_URL + "/class/exam/" + examId).then((res) => res.json()),
  };
}
