import Layout from '../components/Layout';
import '../styles/global.css';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}