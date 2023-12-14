import FantomHeroSection from "@/components/FantomHeroSection";
import Ecosystem from "@/components/Ecosystem";
import Developers from "@/components/Developers";
import Governance from "@/components/Governance";

const HomePage = () => {
    return (
        <main>
            <FantomHeroSection/>
            <Ecosystem/>
            <Developers/>
            <Governance/>
        </main>
    );
};

export default HomePage;
