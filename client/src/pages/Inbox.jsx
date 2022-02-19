import { useState } from "react";
import axios from "axios";
import Item from "../components/Item";

function Inbox () {
  const [itemsData, setItemsData] = useState("");
  async function reloadList() {
    let response = await axios.get("http://localhost:3000/items");
    setItemsData(response.data);
  }
  reloadList()

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Inbox</div>
        <div className="container col-9">
          <div className="row" id="items-container">
            {itemsData.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div className="col-3">
          a
        </div>
      </div>
    </div>
  );
}

export default Inbox;
