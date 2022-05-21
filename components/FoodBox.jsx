// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.alimento.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.alimento.image} height={60} alt="food" />
        <p>Calories: {props.alimento.calories}</p>
        <p>Servings: {props.alimento.servings}</p>
        <p>
          <b>Total Calories: {props.alimento.calories * props.alimento.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;