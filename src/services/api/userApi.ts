import axios from "axios";

export async function getToken(login: string, password: string) {
  try {
    const res = await axios.post("http://localhost:3001/auth", {
      login,
      password,
    });
    return res;
  } catch (error) {
    return  undefined;
  }
}
