"use client";
import { getAnalyses } from "@/services/api/analysesApi";
import { useEffect, useState } from "react";
import styles from "./analyses.module.scss";
import CollapsePanel from "@/components/CollapsePanel/CollapsePanel";
import { getAnalysisResearches as getAnalysisResearches } from "@/services/api/researchApi";

interface Analysis {
  _id: string;
  name: string;
  researches: Array<any>;
}

export default function Analyses() {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAnalyses().then((res: Array<Analysis>) => {
      const array = res.map((v) => {
        v.researches = [];
        return v;
      });
      setIsLoading(false);
      setAnalyses(array);
    });
  }, []);

  if (isLoading)
    return (
      <div className={`spinner-grow ${styles.loader}`} role="status"></div>
    );

  return (
    <div>
      <h2>Analyses</h2>
      <div className={styles.analyses_list}>
        {analyses.map((value: Analysis, index) => {
          return (
            <CollapsePanel
              key={index}
              onClick={openAnalysis}
              items={[index + 1, value.name]}
            >
              <div>
                {value.researches.map((research, index) => {
                  return <div key={index}>{research.name}</div>;
                })}
              </div>

              <div></div>
            </CollapsePanel>
          );
        })}
      </div>
    </div>
  );
  function openAnalysis(event: any) {
    if (event.open) {
      const index = event.items[0] - 1;
      const id = analyses[index]._id;
      getAnalysisResearches(id).then((data: Array<any>) => {
        analyses[index].researches = [...data];
        setAnalyses([...analyses]);
      });
    }
  }
}
