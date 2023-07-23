"use client";
import { getAnalyses } from "@/services/api/analysesApi";
import { useEffect, useState } from "react";
import styles from "./analyses.module.scss";
import CollapsePanel from "@/components/CollapsePanel/CollapsePanel";
import { getAnlysisResearches } from "@/services/api/researchApi";

export default function Analyses() {
  const [analyses, setAnalyses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAnalyses().then((res) => {
      setIsLoading(false);
      setAnalyses(res);
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
        {analyses.map((value: any, index) => (
          <CollapsePanel
            key={index}
            onClick={click}
            items={[index + 1, value.name]}
          >
            <div>
              <p>asdasdñlk</p>
            </div>
          </CollapsePanel>
        ))}
      </div>
    </div>
  );
}

function click(items: any) {
  console.log(items);
  getAnlysisResearches(items.id).then((v) => {
    console.log(v);
  });
}
