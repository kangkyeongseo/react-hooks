import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (typeof onCancel !== "function") {
    return;
  }
  const confrimAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confrimAction;
};

const App = () => {
  const onDelete = () => console.log("Delete");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", onDelete, abort);
  return (
    <div>
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
};

export default App;
