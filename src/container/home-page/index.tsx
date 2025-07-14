import AppLayout from 'common/layout';
import HeroSection from './sections/hero-section';
import JourneySection from './sections/journey-section';
import MeSection from './sections/me-section';
import PersonalSection from './sections/personal-section';
import WorkSection from './sections/work-section';
import { useViewModel } from './viewmodel';

const HomePage = () => {
    const { meRef, workRef } = useViewModel();

    return (
        <AppLayout>
            <HeroSection ref={meRef} />
            <MeSection ref={meRef} />
            <JourneySection />
            <PersonalSection />
            <WorkSection ref={workRef} />
        </AppLayout>
    );
};

export default HomePage;
