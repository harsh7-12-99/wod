import "./central.css";
import { Button } from "@mui/material";

function ContentDiv() {
  return (
    <>
      <div className="cdiv">
        <h1 className="pt-5 pb-4">Content Div</h1>
        <div style={{ height: "50%", fontSize: "1.5rem" }}>
          <div>Total Costs</div>
        </div>
        <Button variant="outlined"> Get Description</Button>
      </div>
    </>
  );
}

export default ContentDiv;
