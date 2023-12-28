import { NavLink } from "react-router-dom";
import "./central.css";
import { Button } from "@mui/material";

const AddWord = () => {
  return (
    <NavLink to="/add">
      <Button variant="contained" className="lbtn m-3">
        Add Word
      </Button>
    </NavLink>
  );
};

const TodayWord = () => {
  return (
    <NavLink to="/get">
      <Button variant="contained" className="lbtn m-3">
        Today's word
      </Button>
    </NavLink>
  );
};

const Revision = () => {
  return (
    <NavLink to="/revise">
      <Button variant="contained" className="lbtn m-3">
        Revision
      </Button>
    </NavLink>
  );
};

export { AddWord, Revision, TodayWord };
