import FantomHeroSection from "@/components/FantomHeroSection";
import Ecosystem from "@/components/Ecosystem";
import Developers from "@/components/Developers";
import Governance from "@/components/Governance";
import Footer from "@/components/shared/Footer";

const HomePage = () => {
    return (
        <main>
            <FantomHeroSection/>
            <Ecosystem/>
            <Developers/>
            <Governance/>
            <Footer/>
        </main>
    );
};

export default HomePage;
