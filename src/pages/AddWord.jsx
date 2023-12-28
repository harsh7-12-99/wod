import { Revision, TodayWord } from "../components/LinkBtn";
import { Button, TextField } from "@mui/material";
import "./../components/central.css";
import { FormControl } from "@mui/material";
import { useRef } from "react";
import axios from "axios";

function AddWord() {
  const word = useRef(null);
  const description = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      word: word.current.value,
      description: description.current.value,
    };
    axios.post("/word/add", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="m-5">Add word</h1>
        <div className="cdiv">
          <h1 className="pt-5 pb-4">Add word</h1>
          <div className="m-4">
            <TextField
              inputRef={word}
              type="text"
              id="Word"
              label="Word"
              variant="filled"
            />
          </div>
          <div className="mt-4 mb-2">
            <TextField
              inputRef={description}
              type="text"
              id="Description"
              label="Description"
              variant="filled"
            />
          </div>

          <Button type="submit" className="m-3" variant="outlined">
            Add word
          </Button>
        </div>
        <Revision />
        <TodayWord />
      </form>
    </>
  );
}

export default AddWord;
