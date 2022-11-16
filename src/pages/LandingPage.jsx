import { Banner } from '../components/Banner';
import Footer from '../components/Footer';
import MeetTheTeam from '../components/MeetTheTeam';
import MeetToonsutra from '../components/MeetToonsutra';
import News from '../components/News';
import Webtoons from '../components/WebToons';
import ComicSlide from '../components/ComicSlide';
export default function LandingPage() {
    return (
        <div className="div">
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

