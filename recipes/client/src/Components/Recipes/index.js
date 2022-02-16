import React, { useState } from "react";
import { Modal } from "react-bootstrap";


export default function Recipe({ recipe }) {
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false); 

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded"s>
      <div onClick={handleShow}>
        <h1>{recipe.name}</h1>            {/* Name of the recipe */}
        <img src={recipe.image} alt="recipeImage" className="img-fluid" style={{ height: "200px", width: "200px" }}/>         {/* Picture of the recipe */}
      <div className="flex-container">
          <div className="w-100">
              <p>Ingredients</p>
          </div>
      </div>
      <div className="flex-container">
          <div className="w-100">
              <p>{recipe.ingredients}</p> {/* Ingredients of the recipe */}
          </div>
      </div>
      </div>

      <Modal show={show} onHide={handleClose}> {/*Recipe' s pop up */}
        <Modal.Header closeButton>
          <Modal.Title>{recipe.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={recipe.image} alt="recipeImage" className="img-fluid" style={{height:'400px'}}/>
          <p>{recipe.ingredients}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
