import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import AppPreview from './components/AppPreview/AppPreview';
import About from './components/About/About';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Features />
        <AppPreview />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
