import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans text-foreground relative overflow-hidden flex flex-col selection:bg-primary/50 selection:text-white">
        {/* Cosmic Background Glows - Dark Mode Optimized */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-black">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet-900/20 rounded-full blur-[180px] animate-pulse-slow" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[180px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/10 rounded-full blur-[200px]" />
        </div>

        <Navbar />

        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
