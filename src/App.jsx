import React from "react";
import useFetch from "./hooks/useFetch";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const size = useWindowSize();

  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
  );
  return (
    <div>
      <div>
        <div>
          <b>Height: </b>
          {size.height}px
        </div>
        <div>
          <b>Width: </b> {size.width}px
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div>
          <b>Loading: </b>
          {loading ? "true" : "false"}
        </div>
        <div>
          <b>data: </b> {data && JSON.stringify(data)}
        </div>
        <div>
          <b>error: </b>
          {!error ? "None" : error}
        </div>
      </div>
    </div>
  );
}
