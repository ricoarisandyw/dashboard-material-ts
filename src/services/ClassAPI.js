import { BASE_URL } from "./base";

export default function ClassAPI() {
  return {
    getByInstitutionId: (institutionId) =>
      fetch(BASE_URL + "/class/" + institutionId).then((res) => res.json()),
  };
}
