import { meStaticText } from '@/common/constants/static-text/me';
import HomePage from './home-page';

export async function getStaticProps() {
    // Instead of fetching your `/api` route you can call the same
    // function directly in `getStaticProps`
    const posts = await meStaticText.journey;
    // Props returned will be passed to the page component
    return {
        props: { message: `Next.js is awesome` }, // will be passed to the page component as props
    };
}

type HomePageProps = {};

export default function Home(props: any) {
    console.log('props', props);
    return <HomePage />;
}
