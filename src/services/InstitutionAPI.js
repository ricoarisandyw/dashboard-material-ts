import { BASE_URL } from "./base";

export default function InstitutionAPI() {
  return {
    getAll: () =>
      fetch(BASE_URL + "/institution/all").then((res) => res.json()),
  };
}
