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



function App(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/questions" element={<Question/>}/>
        </Routes>
    </div>
}

function Home(){
    return <div>
        <Header/>
        <TopSection/>
        <HIW/>
        <FAQ/>
        <PricingSection/>
        <Subscription/>
        <Footer/>
    </div>
}

export default App;