import { Banner } from '../components/Banner';
import Footer from '../components/Footer';
import MeetTheTeam from '../components/MeetTheTeam';
import MeetToonsutra from '../components/MeetToonsutra';
import News from '../components/News';
import Webtoons from '../components/WebToons';
import ComicSlide from '../components/ComicSlide';
import { NavBar } from '../components/NavBar';
export default function LandingPage() {
    return (
        <div className="div">
            <NavBar currentPage="Home" />
            <Banner />
            <MeetToonsutra />
            <Webtoons />
            <ComicSlide />
            <MeetTheTeam />
            <News />
            <Footer />
        </div>
    );
}

