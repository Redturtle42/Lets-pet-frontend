import React, { useState, useEffect } from "react";
import PetCard from "./PetCard";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

function CardList({ service, categories }) {
  const [filter, setfilter] = useState(new Set());
  const [petList, setPetList] = useState(service.getPetsByCategory(categories));

  const handleEvent = (event) => {
    const filterkey = event.target.value;
    const newFilter = new Set(filter);
    if (event.target.checked) {
      newFilter.add(filterkey);
    } else {
      newFilter.delete(filterkey);
    }
    setfilter(newFilter);
  };

  useEffect(() => {
    const categoryFilter = filter.size > 0 ? Array.from(filter) : categories;
    setPetList(service.getPetsByCategory(categoryFilter));
  }, [filter, categories, service]);

  return (
    <React.Fragment>
      <div className="sidebar">
        <ToggleButtonGroup
          onClick={handleEvent}
          vertical
          name="categories"
          type="checkbox"
        >
          {categories.map((item) => (
            <ToggleButton value={item}>{item}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div className="petCard-container">
        {petList.map((item) => (
          <PetCard pet={item} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default React.memo(CardList);
