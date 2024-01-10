import React, { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIspending(true);
      try {
        const req = await fetch(url);
        if (!req) {
          throw new Error("Xatolik yuz berdi:)");
        }
        const data = await req.json();
        
        setData(data);

        setIspending(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIspending(false);
      }
    };
    getData();
  }, [url]);
  return { data, ispending, error };
}
