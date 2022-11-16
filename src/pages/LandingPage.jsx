import { Banner } from '../components/Banner';
import MeetTheTeam from '../components/MeetTheTeam';
import MeetToonsutra from '../components/MeetToonsutra';
import News from '../components/News';
import Webtoons from '../components/WebToons';
export default function LandingPage() {
    return (
        <div className="div">
            <Banner />
            <MeetToonsutra />
            <Webtoons />
            <MeetTheTeam />
            <News />
        </div>
    );
}

