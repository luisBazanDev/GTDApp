import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash);

function SuccessBtn(props) {
  function handleClick(e) {
    console.log(props);
  }

  return (
    <button className="btn btn-danger" onClick={handleClick} title="Borrar">
      <FontAwesomeIcon icon="fa-solid fa-trash" />
    </button>
  )
}

export default SuccessBtn;