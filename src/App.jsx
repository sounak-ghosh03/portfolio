import Hero from "./sections/Hero.jsx";
import AppShowcase from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <FeatureCards />
            <TechStack />
            <AppShowcase />
            <ExperienceSection />
            <LogoShowcase />
            <Contact />
            <Footer/>
        </>
    );
};
export default App;
