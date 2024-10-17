import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import Project from './components/TopProjects';
import Skills from './components/Skills';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Contact from './components/ContactSection';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="bg-custom-dark font-mono text-gray-200 min-h-screen">
        <Header />
        <main className="space-y-20 mt-10 px-4">
          <Routes>
            <Route path="/" element={
              <>
                <Hero/>
                <Services />
                <Project />
                <Skills />
                <CallToAction />
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
          <Toaster
            position="top-right"
            reverseOrder={true}
            gutter={12}
            containerClassName="custom-toaster-container"
            toastOptions={{
              className: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white',
              style: {
                padding: '12px 20px',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                fontSize: '14px',
                fontWeight: '600',
              },
              success: {
                iconTheme: {
                  primary: '#22C55E',
                  secondary: '#DCFCE7',
                },
                duration: 3000,
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#FEE2E2',
                },
                duration: 4000,
              },
              loading: {
                iconTheme: {
                  primary: '#3B82F6',
                  secondary: '#DBEAFE',
                },
              },
            }}
          />

    </Router>
  );
}

export default App;