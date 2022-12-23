import React from "react";
import Header from "./Header";
import HIW from "./howitworks";
import TopSection from "./TopSection";
import FAQ from "./FAQsection";
import PricingSection from "./PricingSection";
import Footer from "./Footer";
import Subscription from "./Subscription";


function App(){
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