import "./../components/central.css";
import { Button } from "@mui/material";
import { AddWord, Revision } from "../components/LinkBtn";
import { useEffect, useState } from "react";
import axios from "axios";

function GetWord() {
  const [cWord, setCurrentWord] = useState("");
  const [cDescription, setCurrentDescription] = useState("");
  useEffect(() => {
    axios.get("/word/get").then((res) => {
      let obj = res.data;
      setCurrentWord(obj.word);
      setCurrentDescription(obj.description);
    });
  });

  return (
    <>
      <h1 className="m-5">Get Word</h1>
      <div className="cdiv">
        <h1 className="pt-5 pb-5">{cWord}</h1>
        <div style={{ marginTop: "1rem", height: "50%", fontSize: "1.5rem" }}>
          <div>{cDescription}</div>
        </div>
      </div>
      <Revision />
      <AddWord />
    </>
  );
}

export default GetWord;
