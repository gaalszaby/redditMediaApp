import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

const InputForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Container className="mb-md-3">
        <Row>
          <Col lg={6} md={5} className="mb-2 mb-md-0">
            <Form.Control
              name="searchtext"
              size="lg"
              type="text"
              placeholder="Search subreddit"
            />
          </Col>
          <Col lg={2} md={3} className="mb-2 mb-md-0">
            <Form.Select
              aria-label="Posts"
              name="posts"
              size="lg"
              className="border border-success"
            >
              <option value="10">10 posts</option>
              <option value="20">20 posts</option>
              <option value="40">40 posts</option>
              <option value="80">80 posts</option>
            </Form.Select>
          </Col>
          <Col lg={2} md={2} className="mb-2 mb-md-0">
            <Form.Select
              aria-label="Posts"
              name="topgroup"
              size="lg"
              className="border border-warning"
            >
              <option value="top">Top</option>
              <option value="hot">Hot</option>
              <option value="new">New</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Button size="lg" type="submit" className="mb-3 mb-md-0">
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default InputForm;
