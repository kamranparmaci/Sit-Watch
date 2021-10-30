import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "react-router-loading";

import moviedb from "../api/moviedb";

const useMovies = (url, page) => {
  const [data, setData] = useState([]);

  const loadingContext = useContext(LoadingContext);

  useEffect(() => {
    try {
      const getSearch = async () => {
        const movie = await moviedb.get(`${url}`, {
          params: {
            page,
          },
        });

        setData((prev) => {
          return [...prev, ...movie.data.results];
        });
        loadingContext.done();
      };
      getSearch();
    } catch (error) {
      throw new Error(error);
    }
  }, [url, page, loadingContext]);

  return data;
};

export default useMovies;
