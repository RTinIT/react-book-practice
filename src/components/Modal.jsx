import React from "react";

const Modal = () => {
  const [active, setActive] = useState(true);

  const closeModal = () => {
    setActive(false);
  };

  useEffect(() => {
    let timeout = setTimeout(() => closeModal(), 3000);

    return () => clearTimeout(timeout);
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "68px",
        right: "247px",
        border: "1px solid green",
        borderRadius: "12px",
        padding: "20px 50px",
        color: "green",
      }}
    >
      <h3>{children}</h3>
    </div>
  );
};

export default Modal;
