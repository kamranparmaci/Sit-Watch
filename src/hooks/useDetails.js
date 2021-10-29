import { useEffect, useState } from "react";
import moviedb from "../api/moviedb";

const useMovies = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const getDetailsMAndT = async () => {
        const details = await moviedb.get(url);
        setData(details.data);
      };
      getDetailsMAndT();
    } catch (error) {
      throw new Error(error);
    }
  }, [url]);

  return data;
};

export default useMovies;
