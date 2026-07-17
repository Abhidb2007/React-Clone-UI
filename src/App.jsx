import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import Cards from './components/Cards/Cards.jsx';
import Footer from './components/Footer/Footer.jsx';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.page}>      
      <Navbar />
      <main className={styles.main}>        
        <Hero />
        <Features />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
