import React from "react";
import SuccessBtn from "../components/buttons/SuccessBtn";
import ToInboxBtn from "../components/buttons/ToInboxBtn";
import ToTicklerFileBtn from "../components/buttons/ToTicklerFileBtn";
import DeleteBtn from "../components/buttons/DeleteBtn";

function Item(props) {
   return (
      <div className={`col-${props.cols || 4}`+' card'} id={"item-"+props.id}>
         <div className="card-body">
            <div
               contentEditable="true"
               aria-multiline="true"
               role={"textbox"}
               tabIndex="0"
               aria-label="Escribe una nota"
               spellCheck="true"
               className="card-text"
               id="item-a"
            >
               {props.content}
            </div>
         </div>
         <div className="card-footer">
            <ul className="nav nav-fill">
               <li className="nav-item">
                  <SuccessBtn id={props.id} />
               </li>
               <li className="nav-item">
                  <ToInboxBtn id={props.id} />
               </li>
               <li className="nav-item">
                  <ToTicklerFileBtn id={props.id} />
               </li>
               <li className="nav-item">
                  <DeleteBtn id={props.id} />
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Item;