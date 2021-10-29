import axios from "axios";

export default axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
    append_to_response:
      "videos,credits,similar,external_ids,images,recommendations,keywords,external_ids,Known_For,combined_credits",
  },
});
