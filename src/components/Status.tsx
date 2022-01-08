import { useState } from "react";

const Status = ({ status }: { status: string }) => {
  const [btnStatus, setBtnStatus] = useState(status);
  const [btnColor, setBtnColor] = useState("dropbtn-color-red");

  const statusChange = (btnText: string, btnColor: string) => {
    setBtnStatus(btnText);
    setBtnColor(btnColor);
  };

  return (
    <div className="dropdown">
      <button className={btnColor}>{btnStatus}</button>
      <div className="dropdown-content">
        <a 
          id="todo" 
          onClick={() => statusChange("Todo", "dropbtn-color-red")}
        >
          Todo
        </a>
        <a
          id="doing"
          onClick={() => statusChange("Doing", "dropbtn-color-yellow")}
        >
          Doing
        </a>
        <a
          id="done"
          onClick={() => statusChange("Done", "dropbtn-color-green")}
        >
          Done
        </a>
      </div>
    </div>
  );
};

export default Status;
