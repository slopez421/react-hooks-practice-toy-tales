import React, { useState, useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((r) => r.json())
    .then((toys) => setToys(toys))
  })

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
    setToys(updatedToys)
  }

  function onDeleteToy(deletedToy) {
    const updatedToys = toys.filter((toy) => deletedToy.id !== toy.id
    )
    setToys(updatedToys)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onDeleteToy={onDeleteToy} handleUpdateToy={handleUpdateToy} toys={toys}/>
    </>
  );
}

export default App;
