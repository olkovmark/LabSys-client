import axios from "axios";

export async function getAnlysisResearches(id: string) {
  console.log(process.env.serverApi);
  const res = await axios.get(process.env.serverApi + "/researches", {
    params: id,
  });
  console.log(res);
  return res;
}
