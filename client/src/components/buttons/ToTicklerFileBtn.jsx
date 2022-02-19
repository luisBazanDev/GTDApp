import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
library.add(faClipboard);

function SuccessBtn(props) {
  function handleClick(e) {
    console.log(props);
  }

  return (
    <button className="btn btn-info" onClick={handleClick} title="Enviar al TicklerFile">
      <FontAwesomeIcon icon="fa-solid fa-clipboard" />
    </button>
  )
}

export default SuccessBtn;