import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faClipboardCheck);

function SuccessBtn(props) {
  function handleClick(e) {
    console.log(props);
  }

  return (
    <button className="btn btn-warning" onClick={handleClick} title="Enviar al inbox">
      <FontAwesomeIcon icon="fa-solid fa-clipboard-check" />
    </button>
  )
}

export default SuccessBtn;