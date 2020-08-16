import React from "react";
import "./blog-posts.scss";
import { IBlogPost } from "../portfolio.type";

export const BlogPosts = (props: { posts: IBlogPost[] }) => {
  const postsList = props.posts.map((p) => <BlogPost post={p} />);
  return (
    <section className="blog-posts-section" id="BlogPosts">
      <div className="posts-container">
        <div className="title">Blog Posts</div>
        <div className="">{postsList}</div>
      </div>
    </section>
  );
};

export const BlogPost = (props: { post: IBlogPost }) => {
  return (
    <div className="blog-slider__item swiper-slide blog-slider">
      <div className="blog-slider__img">
        <img src={"https://ico.now.sh/" + props.post.source + "/fff"} alt="" />
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">
          {props.post.date.toDateString()}
        </span>
        <div className="blog-slider__title">{props.post.title}</div>
        <div className="blog-slider__text">{props.post.description}</div>
        <a href={props.post.url} className="blog-slider__button">
          READ MORE
        </a>
      </div>
    </div>
  );
};
