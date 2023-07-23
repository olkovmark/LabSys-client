import axios from "axios";

export async function getAnalyses() {
  try {
    const url = process.env.NEXT_PUBLIC_serverAPI + "/analyses";
    console.log(url);
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return undefined;
  }
}
