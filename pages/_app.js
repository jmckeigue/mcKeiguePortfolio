import ScrollToTopButton from '../components/ScrollToTopButton';
import SocialSection from '../components/SocialSection';
import { WindowLoad } from '../public/src/Functions'
import '../styles/global.css';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <WindowLoad />
            <Component {...pageProps} />
            <SocialSection />
            <ScrollToTopButton />
        </>
    );
}