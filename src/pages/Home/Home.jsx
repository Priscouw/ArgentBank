import "../Home/Home.scss";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import Footer from "../../layout/Footer/Footer";
import MainNav from "../../layout/MainNav/MainNav";

const Home = () => {
  return (
    <>
      <MainNav />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <FeatureItem />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
