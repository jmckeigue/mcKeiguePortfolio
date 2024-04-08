import SocialSection from '../components/SocialSection';
import '../styles/design_token.css';
import '../styles/global.css';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <><Component {...pageProps} /><SocialSection /></>
    );
}