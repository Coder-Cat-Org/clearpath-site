import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import BackToTopButton from "./BackToTopButton";

function Layout() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default Layout;
