import AppLayout from 'common/layout';
import HeroSection from './sections/hero-section';
import MeSection from './sections/me-section';
import PersonalSection from './sections/personal-section';
import { useViewModel } from './viewmodel';

const HomePage = () => {
    const { meRef, workRef } = useViewModel();

    return (
        <AppLayout>
            <HeroSection meRef={meRef} />
            <MeSection />
            {/* <PersonalSection /> */}
            {/* <HeroContainer meRef={meRef} />
            <MeContainer meRef={meRef} />
            <WorkContainer workRef={workRef} /> */}
        </AppLayout>
    );
};

export default HomePage;
