import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, CustomCursor, ErrorBoundary, Achievements, ScrollProgress, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Achievements />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
          <CustomCursor />
          <ScrollProgress />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
