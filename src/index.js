import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { BrowserRouter as Router } from "react-router-dom";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import imageCard from "./components/imageCard";

storyblokInit({
  accessToken: "4l8TQSdiWVrDyJ78aegKAQtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    home: Home,
    about: About,
    gallery: Gallery,
    imageCard: imageCard,
  },
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
