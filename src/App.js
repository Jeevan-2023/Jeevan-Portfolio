import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import LoadingScreen from './Components/LoadingScreen';
import { ErrorBoundary } from 'react-error-boundary';
import ProjectImageGallery from './Pages/ProjectImages';


const CACHE_KEY = 'portfolio_loaded';
const CACHE_DURATION = 24 * 60 * 60 * 1000;

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
   
    const checkCache = () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp } = JSON.parse(cached);
          const now = Date.now();
          
         
          if (now - timestamp < CACHE_DURATION) {
            setIsLoading(false);
            setShowContent(true);
            return;
          }
        }
      } catch (error) {
        console.log('Cache check failed:', error);
      }
      
     
      setIsLoading(true);
    };

    checkCache();
  }, []);

  const handleLoadingComplete = () => {
    
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now()
      }));
    } catch (error) {
      console.log('Failed to cache loading state:', error);
    }
    
    
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  
  useEffect(() => {
    const handleBeforeUnload = () => {
   
      if (process.env.NODE_ENV === 'development') {
        localStorage.removeItem(CACHE_KEY);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (!showContent) {
    return null; 
  }

  return (
    <div className="app-content" style={{
      opacity: showContent ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out'
    }}>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-gallery/:id" element={<ProjectImageGallery />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
       <ErrorBoundary fallback={<div>Something went wrong. Please refresh.</div>}></ErrorBoundary>
      <AppWrapper />
    </Router>
  );
}

export default App;