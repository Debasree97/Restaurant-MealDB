import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Meal = (props) => {
  const { idMeal, strArea, strTags, strMeal, strCategory, strMealThumb } =
    props.meal;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" className="img-fluid" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>
              <h3>
                <span>Tag: </span>
                {strTags}
              </h3>
              <h3>
                <span>Category: </span>
                {strCategory}
              </h3>
              <h3>
                <span>Origin Area: </span>
                {strArea}
              </h3>

              <NavLink to={`./restaurant/${idMeal}`}>Click Here</NavLink>
              <small>or</small>
              <NavLink to={`./restaurant/${idMeal}`}>
                <Button>Click Here</Button>
              </NavLink>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>

    // <div className="meal-style">
    //   <div>
    //     <img src={strMealThumb} alt="" />
    //   </div>
    //   <div>
    //     <p>
    //       <span></span>
    //       {strMeal}
    //     </p>
    //     <p>
    //       <span></span>
    //       {strCategory}
    //     </p>
    //     <p>
    //       <span></span>
    //       {strTags}
    //     </p>
    //   </div>
    // </div>
  );
};

export default Meal;
