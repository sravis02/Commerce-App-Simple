import { BACKEND_BASE_URL } from "../constants/backend";

export default class API {
  static createCart() {
    return fetch(`${BACKEND_BASE_URL}cart-create/`, {
      method: "POST",
      body: {},
    })
      .then((response) => response.json())
      .catch((e) => console.log(e));
  }
}
