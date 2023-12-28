import "./../components/central.css";
import { AddWord, TodayWord } from "../components/LinkBtn";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function Revision() {
  const [rword, setRword] = useState("");
  const [rdis, setRdis] = useState("R");

  useEffect(() => {
    axios.get("/word/revise").then((res) => {
      const obj = res.data[0];
      setRword(obj.word);
    });
  });

  const getRdis = () => {
    axios.get("/word/revise").then((res) => {
      const obj = res.data[0];
      setRdis(obj.description);
    });
  };
  return (
    <>
      <h1 className="m-5">Revision</h1>

      <div className="cdiv">
        <h1 className="pt-5 pb-4">{rword}</h1>
        <div style={{ height: "50%", fontSize: "1.5rem" }}>
          <div>{rdis}</div>
        </div>
        <Button variant="outlined" onClick={getRdis}>
          Get Description
        </Button>
      </div>
      <AddWord />
      <TodayWord />
    </>
  );
}

export default Revision;
