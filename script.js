import { tweetsData } from "./data";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const tweetInput = document.getElementById("tweet-input");

document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  } else if (e.target.dataset.retweet) {
    handleRetweetClick(e.target.dataset.retweet);
  } else if (e.target.dataset.reply) {
    handleReplyClick(e.target.dataset.reply);
  } else if (e.target.id === "tweet-btn") {
    handleTweetBtnClick();
  }
});

function handleLikeClick(tweedId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweedId;
  })[0];

  if (targetTweetObj.isLiked) {
    targetTweetObj.likes--;
  } else {
    targetTweetObj.likes++;
  }
  // flip the boolean
  targetTweetObj.isLiked = !targetTweetObj.isLiked;
  render();
}
