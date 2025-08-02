import { useEffect, useState } from "react";
import { useApi } from "../utils/api.js";

export const useChallanges = () => {
  const [challenge, setChallenge] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [quota, setQuota] = useState<any>(null);
  const { makeRequest } = useApi();

  useEffect(() => {
    fetchQuota();
  }, []);

  const fetchQuota = async () => {
    try {
      const data = await makeRequest("quota");
      setQuota(data);
    } catch (err) {
      console.log(err);
    }
  };

  const generateChallenge = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await makeRequest("generate-challenge", {
        method: "POST",
        body: JSON.stringify({ difficulty }),
      });
      setChallenge(data);
      fetchQuota();
    } catch (err:any) {
      setError(err?.message || "Failed to generate challenge.");
    } finally {
      setIsLoading(false);
    }
  };

  const getNextResetTime = () => {
    if (!quota?.last_reset_data) return null;
    const resetDate = new Date(quota.last_reset_data);
    resetDate.setHours(resetDate.getHours() + 24);
    return resetDate;
  };

  return {
    challenge: challenge,
    setChallenge: setChallenge,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    error: error,
    setError: setError,
    difficulty: difficulty,
    setDifficulty: setDifficulty,
    quota: quota,
    setQuota: setQuota,
    generateChallenge: generateChallenge,
    getNextResetTime: getNextResetTime,
  };
};
