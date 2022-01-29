import React from "react";
import { Navbar } from "../components/Navbar";
import { FriendList } from "../components/FriendList";
import { NewsFeed } from "../components/NewsFeed";
import { SideBar } from "../components/SideBar";

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
