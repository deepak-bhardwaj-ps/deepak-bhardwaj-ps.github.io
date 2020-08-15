import React from "react";
import "./word-cloud.scss";

export const WordCloud = (props: { words: string[] }) => {
  const wordsList = props.words.map((w) => <div className="word">{w}</div>);
  return <div className="cloud">{wordsList}</div>;
};
