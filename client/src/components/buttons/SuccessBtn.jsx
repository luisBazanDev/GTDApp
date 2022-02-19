import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck);

function SuccessBtn(props) {
  function handleClick(e) {
    console.log(props);
  }

  return (
    <button className="btn btn-success" onClick={handleClick} title="Completar">
      <FontAwesomeIcon icon="fa-solid fa-check" />
    </button>
  )
}

export default SuccessBtn;