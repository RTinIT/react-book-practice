import React, { useState } from "react";

export default function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  return [
    { value, onChange: (event) => setValue(event.target.value) },
    () => setValue(initValue),
  ];
}
