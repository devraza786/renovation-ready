import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Features from '@/sections/Features';
import Contact from '@/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
