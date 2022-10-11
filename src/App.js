import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Article from "./components/Article";
import InputForm from "./components/InputForm";
import MediaModal from "./components/MediaModal";

function App() {
  const [redditPosts, setRedditPosts] = useState([]);
  const [isSubWorking, setIsSubWorking] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const handleClose = () => {
    setModalShow(false);
  };

  const showImageHandler = (event) => {
    const postId = redditPosts.findIndex(
      (el) => el.data.id === event.target.id
    );
    setImgIndex(postId);
    setModalShow(true);
  };

  const fetchPosts = (event) => {
    event.preventDefault();
    const searchText = event.target.searchtext.value;
    const popularity = event.target.topgroup.value;
    const postAmount = event.target.posts.value;
    fetch(
      `https://www.reddit.com/r/${searchText}/${popularity}.json?limit=${postAmount}&t=month`
    )
      .catch((err) => {
        if (err) {
          setIsSubWorking(false);
          setRedditPosts([]);
          return;
        }
      })
      .then((res) => {
        if (res.status !== 200) {
          setIsSubWorking(false);
          setRedditPosts([]);
          return;
        }
        res.json().then((data) => {
          if (data != null) {
            setRedditPosts((prevPosts) => [...data.data.children]);
            setIsSubWorking(true);
          } else {
            setRedditPosts([]);
          }
        });
      });
  };

  return (
    <>
      <Container className="my-4">
        <InputForm handleSubmit={fetchPosts} />

        {!isSubWorking && <h2>Can't find this subreddit!</h2>}
        {redditPosts.length > 0 && (
          <h2 className="mb-4">
            {redditPosts[0].data.subreddit_name_prefixed}
          </h2>
        )}
        {redditPosts.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {redditPosts.map((post, index) => {
              return (
                <Article
                  article={post.data}
                  key={post.data.id}
                  id={post.data.id}
                  showImage={showImageHandler}
                />
              );
            })}
          </div>
        )}
      </Container>
      <MediaModal
        isShown={modalShow}
        closeHandler={handleClose}
        mediaUrl={redditPosts.length > 0 && redditPosts[imgIndex]?.data?.url}
        mediaTitle={
          redditPosts.length > 0 && redditPosts[imgIndex]?.data?.title
        }
        mediaPermaLink={
          redditPosts.length > 0 && redditPosts[imgIndex]?.data?.permalink
        }
      />
    </>
  );
}

export default App;
