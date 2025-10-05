import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData, clearList } from "../redux/actions";

const Swapi = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.list);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>SWAPI</h1>
      <button onClick={() => dispatch(fetchSwapiData())}>Get info</button>

      {isLoading && <p>Loading...</p>}

      {person && (
        <pre
          style={{
            textAlign: "left",
            margin: "20px auto",
            width: "70%",
            background: "#f0f0f0",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {JSON.stringify(person, null, 2)}
        </pre>
      )}

      <footer style={{ marginTop: "20px" }}>
        <button
          style={{ background: "red", color: "white", padding: "8px 16px" }}
          onClick={() => dispatch(clearList())}
        >
          Clear
        </button>
      </footer>
    </div>
  );
};

export default Swapi;
