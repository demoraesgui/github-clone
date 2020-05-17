import React from "react";
import "./App.css";
import { Header, Content, PinnedItems } from "./components";
import { Container, Box } from "@material-ui/core";


function App() {
  return (
    <div style={{  height: 900}}>
      <Header></Header>
      <Content></Content>
      <PinnedItems></PinnedItems>
    </div>
  );
}

export default App;
