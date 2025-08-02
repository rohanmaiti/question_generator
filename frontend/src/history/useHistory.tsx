import React from "react";
import { useState, useEffect } from "react";
export const useHistory = () => {
  const [history, setHistory] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setIsLoading(false);
    // login / api call here
  };

  return {
    history:history,
    setHistory: setHistory,
    isLoading: isLoading,
    error: error,
    setError: setError,
    fetchHistory: fetchHistory
  }
};
