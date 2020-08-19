import React from "react";
import "./App.scss";
import Portfolio from "./portfolio";
import { Experience } from "./components/Experience";
import { TopSkills } from "./components/TopSkills";
import { Skills } from "./components/Skills";
import { AboutPage } from "./components/AboutPage";
import { Menu } from "./components/Menu";
import { BlogPosts } from "./components/BlogPosts";
import { Achievements } from "./components/Achievements";

const App = () => {
  return (
    <div className="app" id="app">
      <Menu/>
      <AboutPage name={Portfolio.name} story={Portfolio.story} socialProfiles={Portfolio.socialProfile} />
      <TopSkills list={Portfolio.topSkills} />
      <Skills skills={Portfolio.skills} />
      <Experience list={Portfolio.experience} />
      <BlogPosts posts={Portfolio.blogPosts} />
      <Achievements list={Portfolio.achievements} />
    </div>
  );
};
export default App;
