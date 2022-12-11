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
import twoColumns from "./components/TwoColumns";
import Contact from "./pages/Contact";
import Price from "./components/Price";
import Images from "./components/Images";
import Faq from "./components/Faq";
import Philosophy from "./components/Philosophy";

storyblokInit({
  accessToken: "4l8TQSdiWVrDyJ78aegKAQtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    home: Home,
    About: About,
    gallery: Gallery,
    imageCard: imageCard,
    twoColumns: twoColumns,
    Contact: Contact,
    price: Price,
    images: Images,
    Faq: Faq,
    philosophy: Philosophy,
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
