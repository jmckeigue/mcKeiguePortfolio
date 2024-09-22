import Layout from '../Layout';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}