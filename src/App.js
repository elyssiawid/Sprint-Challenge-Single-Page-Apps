import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
    </main>
  );
}

// const App = () => (
//   <div>
//     <Navigation />
//     <Route exact path="/" component={Home} />
//     <Route path="/about" component={About} />
//     <Route path="/contact" component={Contact} />
//   </div>
// );
