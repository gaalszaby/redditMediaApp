import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const MediaModal = ({
  isShown,
  closeHandler,
  mediaUrl,
  mediaTitle,
  mediaPermaLink,
}) => {
  const modalContent = (url, title, permalink) => {
    if (url.includes("imgur") && url.includes(".gifv")) {
      return (
        <video controls autoPlay>
          <source src={url.replace(".gifv", ".mp4")} type="video/mp4"></source>
        </video>
      );
    }

    if (
      url.includes(".jpg") ||
      url.includes(".jpeg") ||
      url.includes(".png") ||
      url.includes(".gif")
    ) {
      return <Image src={url} alt={title} />;
    }

    if (url.includes("redgifs")) {
      return (
        <div style={{ position: "relative", paddingBottom: "102.65%" }}>
          <iframe
            src={url.replace("watch", "ifr")}
            frameBorder="0"
            scrolling="no"
            title={title}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    if (
      url.includes("gfycat.com") ||
      url.includes("v.redd.it") ||
      url.includes("reddit.com/gallery")
    ) {
      return (
        <div
          style={{ position: "relative", paddingBottom: "calc(70% + 44px)" }}
        >
          <iframe
            src={
              "https://www.redditmedia.com/" +
              permalink +
              "?ref_source=embed&amp;embed=true"
            }
            style={{
              border: "none",
              position: "absolute",
              top: "0",
              left: "0",
            }}
            title={title}
            height="100%"
            width="100%"
            scrolling="yes"
          ></iframe>
        </div>
      );
    }

    if (url.includes("youtube.com")) {
      return (
        <div
          style={{ position: "relative", paddingBottom: "calc(60% + 44px)" }}
        >
          <iframe
            style={{
              border: "none",
              position: "absolute",
              top: "0",
              left: "0",
            }}
            width="100%"
            height="100%"
            src={url.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );
    }

    if (url.includes("youtu.be/")) {
      return (
        <div
          style={{ position: "relative", paddingBottom: "calc(60% + 44px)" }}
        >
          <iframe
            style={{
              border: "none",
              position: "absolute",
              top: "0",
              left: "0",
            }}
            width="100%"
            height="100%"
            src={url.replace("youtu.be/", "www.youtube.com/embed/")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );
    }

    return "";
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={isShown}
      onHide={closeHandler}
    >
      <Modal.Header closeButton>
        {mediaTitle && <Modal.Title>{mediaTitle}</Modal.Title>}
      </Modal.Header>
      {mediaUrl && modalContent(mediaUrl, mediaTitle, mediaPermaLink)}
      <Modal.Footer>
        <Button variant="secondary" onClick={closeHandler}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MediaModal;
