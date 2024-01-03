//single selection
//multiple selection
import data from "./data";

import { useState } from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    selected(getCurrentId);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h1>{dataItem.question}</h1>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>No data Found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
