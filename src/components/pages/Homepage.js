import MainSection from "../main-section/main-section";
import Label from "../other-projects-section/label";
import CategorySection from "../category-section/category-section";
import Benefits from "../benefits-section/benefits";
import Bestsellers from "../bestsellers-section/bestsellers";
import OtherProjects from "../other-projects-section/other-projects";
import VideoSection from "../video-section/video_section";

import { Route , Routes , Link } from 'react-router-dom';
import Videos from "./Videos";


const Homepage = () => {
    return (
        <>
        
        <MainSection/>
        <Label text="ОБЛАДНАННЯ SIGLENT"/>
        <CategorySection/>
        <Benefits/>
        <Label text="БЕСТСЕЛЛЕРИ"/>
        <Bestsellers/>
        <Label text="НАШІ ІНШІ ПРОЄКТИ"/>
        <OtherProjects/>
        <VideoSection/>

        </>
        
        
    );
}

export default Homepage;