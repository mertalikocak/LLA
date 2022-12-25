import React from "react";
import Header from "./Header";
import HIW from "./howitworks";
import TopSection from "./TopSection";
import FAQ from "./FAQsection";
import PricingSection from "./PricingSection";
import Footer from "./Footer";
import Subscription from "./Subscription";
import { Routes, Route } from "react-router-dom";
import Question from "./Question";
import Login from "../pages/Login";
import Skills from "../pages/Skills";
import Lesson from "../pages/Lesson";
import Lesson2 from "../pages/Lesson2";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lesson/:no" element={<Lesson />} />
        <Route path="/lesson2/:no" element={<Lesson2 />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <TopSection />
      <HIW />
      <FAQ />
      <PricingSection />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
