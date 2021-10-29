import { useEffect, useState } from "react";

import moviedb from "../api/moviedb";

const useMovies = (url, term) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getSearch = async () => {
      const Movie = await moviedb.get(`${url}`, {
        params: {
          query: term,
        },
      });
      setData(Movie.data.results);
    };
    const timeOut = setTimeout(() => {
      if (term || term !== "") {
        getSearch();
      }
    }, 200);

    return () => {
      clearTimeout(timeOut);
    };
  }, [url, term]);

  return data;
};

export default useMovies;
