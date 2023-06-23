import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addNewCar, updateForm } from "./exampleSlice";

function BasicExample() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.example.form);

  console.log(formData);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => {
            dispatch(updateForm({ type: "email", value: e.target.value }));
          }}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            dispatch(updateForm({ type: "password", value: e.target.value }));
          }}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        onClick={() => {
          dispatch(addNewCar());
        }}
        variant="primary"
      >
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
