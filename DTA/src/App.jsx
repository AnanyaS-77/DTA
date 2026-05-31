
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";

const routes = {
  "/": Home,
  "/contact": ContactUs,
};

function App() {
  const Page = routes[window.location.pathname] || Home;

  return (
    <main className="site-page">
      <div className="page-shell">
        <Navbar />
        <Page />
        <Footer />
      </div>
    </main>
  );
}

export default App;
