import FTMSwapHeroSection from "@/components/FTMSwapHeroSection";
import Treasury from "@/components/Treasury";
import Developers from "@/components/Developers";
import Future from "@/components/Future";

const HomePage = () => {
    return (
        <main>
            <FTMSwapHeroSection/>
            <Treasury/>
            <Developers/>
            <Future/>
        </main>
    );
};

export default HomePage;
