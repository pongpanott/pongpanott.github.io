import AppLayout from '../../common/base-ui/layout';
import HeroContainer from './section/hero-container';
import MeContainer from './section/me-container';

const HomePage = () => {
    return (
        <AppLayout>
            <HeroContainer />
            <MeContainer />
        </AppLayout>
    );
};

export default HomePage;
