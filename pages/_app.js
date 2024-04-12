import SocialSection from '../components/SocialSection';
import { useScrollToTop } from '../public/src/Functions';
import { WindowLoad } from '../public/src/Functions'
import '../styles/design_token.css';
import '../styles/global.css';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {
    useScrollToTop();

    return (
        <>
            <WindowLoad />
            <Component {...pageProps} />
            <SocialSection />
        </>
    );
}