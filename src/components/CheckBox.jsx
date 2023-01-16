import React, { useState, useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { loadJSON, saveJSON } from "../utils/commonFunc";

const CheckBox = () => {
  const [checked, setChecked] = useStorage("checkbox", "");
  // const [checked, setChecked] = useState(
  //   localStorage.getItem("checkbox") ? loadJSON("checkbox") : false
  // );

  // useEffect(() => {
  //   if (!checked) saveJSON("checkbox", false);
  //   saveJSON("checkbox", checked);
  // }, [checked]);

  return (
    <>
      <input
        type={"checkbox"}
        value={checked}
        checked={checked}
        onChange={() => {
          setChecked((checked) => !checked);
        }}
      />
      {checked ? <h2>"Checked!"</h2> : <h2>"Not checked!"</h2>}
    </>
  );
};

export default CheckBox;
