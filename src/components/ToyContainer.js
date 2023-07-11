import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleUpdateToy, onDeleteToy}) {
  return (
    <div id="toy-collection">{toys.map((toy) => <ToyCard  onDeleteToy={onDeleteToy} handleUpdateToy={handleUpdateToy} toy={toy} key={toy.id} />)}</div>
  );
}

export default ToyContainer;
