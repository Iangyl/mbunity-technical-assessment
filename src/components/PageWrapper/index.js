import Header from './Header';
import Footer from './Footer';

const PageWrapper = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default PageWrapper;
