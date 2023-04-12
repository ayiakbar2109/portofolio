import Hero from "./sections/Hero";
import TabSection from "./sections/Tabs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import About from "./sections/About";

function App() {
  return (
    <>
      <main className="px-[1.4rem] lg:px-[6.8rem]">
        <Hero />
        <TabSection />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
