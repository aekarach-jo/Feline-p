import React, { useState } from "react";
import { analyzeSkin } from "../../hooks/analyzeSkin";

const Skin = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (selectedFile) {
      const result = await analyzeSkin(selectedFile);
      setAnalysisResult(result);
    }
  };

  return (
    <div className="mt-4 w-100">
      <input className="w-60" type="file" onChange={handleFileChange} />
      <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded" onClick={handleAnalyze}>Analyze Skin</button>
      {analysisResult && (
        <div className="mt-4">
          <h2>Analysis Result</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Skin;
