import React from "react";
import { Navbar } from "../components/Homepage/Navbar";
import { FriendList } from "../components/Homepage/FriendList";
import { NewsFeed } from "../components/Homepage/NewsFeed";
import { SideBar } from "../components/Homepage/SideBar";

export const Home = () => {
  return (
    <div>
      <div className="App">
        <Navbar title="OdinBook" />
        <section className="content">
          <SideBar className="sidebar" />
          <div className="message-section">
            <NewsFeed />
          </div>
          <FriendList className="friends-list" />
        </section>
      </div>
    </div>
  );
};
