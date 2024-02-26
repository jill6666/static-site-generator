import { useState, useEffect } from "react";
import { Progress as ProgressMarkup } from "./markup";

const Progress = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, []);

  return <ProgressMarkup value={progress} className="w-full" />;
};
export default Progress;
