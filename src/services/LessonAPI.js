import { BASE_URL } from "./base";

export default function LessonAPI() {
  return {
    getByClassId: (classId) =>
      fetch(BASE_URL + "/lesson/class/" + classId).then((res) => res.json()),
  };
}
