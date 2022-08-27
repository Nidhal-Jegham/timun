//Dependencies
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Styling
import "./App.css";
import "./styles/app.scss";

//Pages
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SGuides from "./pages/Studyguides";
import Articles from "./pages/Articles";
import Events from "./pages/Events";
// import NotFound from "./pages/NotFound";

//Admin Pages
import Login from "./Admin/pages/login";
import Admin from "./Admin/pages/admin";
import TeamsAdmin from "./Admin/pages/teams-admin";
import LayoutAdmin from "./Admin/pages/layout-admin";
import SGuidesAdmin from "./Admin/pages/sguides-admin";
import EventsAdmin from "./Admin/pages/events-admin";
import ArticleAdmin from "./Admin/pages/articles-admin";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading} />}>
        <Route
          index
          element={<Home loading={loading} setLoading={setLoading} />}
        />
        <Route
          path="sguides"
          element={<SGuides loading={loading} setLoading={setLoading} />}
        />
        <Route
          path="articles"
          element={<Articles loading={loading} setLoading={setLoading} />}
        />
        <Route
          path="events"
          element={<Events loading={loading} setLoading={setLoading} />}
        />
      </Route>
      <Route path="/fanta" element={<LayoutAdmin />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Admin />} />
        <Route path="articles" element={<ArticleAdmin />} />
        <Route path="events" element={<EventsAdmin />} />
        <Route path="sguides" element={<SGuidesAdmin />} />
        <Route path="teams" element={<TeamsAdmin />} />
      </Route>
      {/* <Route path="*" elemnet={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
