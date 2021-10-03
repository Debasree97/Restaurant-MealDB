import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Restaurant = () => {
    const [searchText, setSearchText] = useState("");
    const handleChange = (e) => {
      const searchTextValue = e.target.value;
      setSearchText(searchTextValue);
    };
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            onChange={handleChange}
            placeholder="Start Typing to Search Your Favourite Food!"
            aria-describedby="basic-addon2"
          />
          {/* <Button
          variant="outline-secondary"
          id="button-addon2"
        >
          search
        </Button> */}
        </InputGroup>
        <Meals searchText={searchText}></Meals>
      </div>
    );
};

export default Restaurant;