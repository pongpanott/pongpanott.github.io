import AppLayout from '../../common/components/layout';
import AboutSection from '../../common/container/about-section';
import ContactSection from '../../common/container/contact-section';
import ExperienceSection from '../../common/container/experience-section';
import WorkSection from '../../common/container/work-section';

const HomePage = () => {
    return (
        <AppLayout>
            <AboutSection />
            <ExperienceSection />
            <WorkSection />
            <ContactSection />
        </AppLayout>
    );
};

export default HomePage;
