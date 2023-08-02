import axios from "axios";

export async function getAnalysisResearches(analysisID: string) {
  console.log("message1");
  const res = await axios.get(
    process.env.NEXT_PUBLIC_serverAPI + "/researches",
    {
      params: { analysisID },
    }
  );

  return res.data;
}
