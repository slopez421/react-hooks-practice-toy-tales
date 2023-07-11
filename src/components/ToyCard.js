import React, {useState} from "react";

function ToyCard({toy, handleUpdateToy, onDeleteToy}) {

  const {name, image, likes} = toy;
  const [toyLikes, setToyLikes] = useState(likes);

  function handleClick() {
    const newLikes = toyLikes + 1

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify({
        likes: newLikes
      })
    })
    .then((r) => r.json())
    .then((updatedToy) => handleUpdateToy(updatedToy))

    setToyLikes(newLikes)
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(()=> onDeleteToy(toy))
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={handleClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
