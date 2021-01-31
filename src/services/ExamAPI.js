import { BASE_URL } from "./base";

export default function ExamAPI() {
  return {
    getByLessonId: (lessonId) =>
      fetch(BASE_URL + "/exam/lesson/" + lessonId).then((res) => res.json()),
  };
}
