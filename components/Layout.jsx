import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import { useColorScheme } from '../hooks/useColorScheme';

const Layout = ({ children }) => {
const theme = useColorScheme();

    return (
        <div className={`theme-${theme}`}>
            <Header />
            {children}
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default Layout;