import React from "react";
import Header from './components/header/Header';
import TinderCards from "./components/tinderCards/TinderCards";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";

function App() {
  return (
    <div className="App">
      
    {/* Header */}
    <Header />

    {/* Cards */}
    <TinderCards />

    {/* Swipe Buttons */}
    <SwipeButtons />
    </div>
  );
}

export default App;
