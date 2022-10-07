import React from "react";
import { Form, Button } from "react-bootstrap";

const InputForm = (props) => {
  return (
    <Form
      onSubmit={props.handleSubmit}
      direction="horizontal"
      className="d-flex flex-row gap-4 mb-3"
    >
      <Form.Control size="lg" type="text" placeholder="Search subreddit" />
      <Form.Select>
        <option value="top">Top</option>
        <option value="hot">Hot</option>
        <option value="new">New</option>
      </Form.Select>
      <Button className="ms-auto" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default InputForm;
