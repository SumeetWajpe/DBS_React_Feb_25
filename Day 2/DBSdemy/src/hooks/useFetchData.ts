import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(url: string) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [url]);
  return data;
}
