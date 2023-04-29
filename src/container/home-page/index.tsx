import AppLayout from 'common/layout';
import HeroContainer from './containers/hero-container';
import MeContainer from './containers/me-container';
import { useViewModel } from './viewmodel';
import WorkContainer from './containers/work-container';

const HomePage = () => {
    const { meRef, workRef } = useViewModel();

    return (
        <AppLayout>
            <HeroContainer meRef={meRef} />
            <MeContainer meRef={meRef} />
            <WorkContainer workRef={workRef} />
        </AppLayout>
    );
};

export default HomePage;
