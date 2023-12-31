import axios from "axios";

export async function getToken(login: string, password: string) {
  try {
    const res = await axios.post(process.env.NEXT_PUBLIC_serverAPI + "/auth", {
      login,
      password,
    });
    return res;
  } catch (error) {
    return undefined;
  }
}
