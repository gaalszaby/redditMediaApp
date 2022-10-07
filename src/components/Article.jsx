import React from "react";
import { Card, Button } from "react-bootstrap";

const Article = (props) => {
  return (
    <Card>
      {props.article.thumbnail !== "self" && props.article.thumbnail !== "" ? (
        <Card.Img
          style={{ height: "300px", objectFit: "cover", cursor: "pointer" }}
          variant="top"
          src={props.article.thumbnail}
          onClick={props.showImage}
          id={props.id}
        />
      ) : (
        ""
      )}
      <Card.Body className="d-flex flex-column justify-content-between">
        {props.article.title.length > 100 ? (
          <Card.Text>{props.article.title.substr(0, 100)}...</Card.Text>
        ) : (
          <Card.Text>{props.article.title}</Card.Text>
        )}
        <Button
          variant="primary"
          href={"https://www.reddit.com" + props.article.permalink}
          target="_blank"
          rel="noreferrer"
        >
          To reddit thread
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Article;
