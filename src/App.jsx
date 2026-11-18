import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

const HomePage = lazy(() => import('./pages/HomePage'));
const AdvocatesDirectoryPage = lazy(() => import('./pages/AdvocatesDirectoryPage'));
const AdvocateDetailPage = lazy(() => import('./pages/AdvocateDetailPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const KnowledgeHubPage = lazy(() => import('./pages/KnowledgeHubPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

// Scroll to top upon route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

// Layout wrapper that hides default Navbar & Footer on dedicated standalone auth pages
function AppLayout({ children }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFEFE] text-slate-800 font-sans selection:bg-amber-200 selection:text-slate-900">
      {!isAuthPage && <Navbar />}

      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          {children}
        </Suspense>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}

function MainRoutes({ onBookConsultation }) {
  const navigate = useNavigate();

  const handleOpenJoinAdvocate = () => {
    navigate('/register?role=advocate');
  };

  return (
    <AppLayout>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage 
              onBookConsultation={onBookConsultation} 
              onOpenJoinAdvocate={handleOpenJoinAdvocate} 
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/advocates"
          element={<AdvocatesDirectoryPage onBookConsultation={onBookConsultation} />}
        />
        <Route
          path="/advocate/:id"
          element={<AdvocateDetailPage onBookConsultation={onBookConsultation} />}
        />
        <Route
          path="/services"
          element={<ServicesPage />}
        />
        <Route
          path="/knowledge"
          element={<KnowledgeHubPage />}
        />
        <Route
          path="/about"
          element={<AboutPage onOpenJoinAdvocate={handleOpenJoinAdvocate} />}
        />
        <Route
          path="*"
          element={
            <HomePage 
              onBookConsultation={onBookConsultation} 
              onOpenJoinAdvocate={handleOpenJoinAdvocate} 
            />
          }
        />
      </Routes>
    </AppLayout>
  );
}

export default function App() {
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleOpenBooking = (advocate) => {
    setSelectedAdvocate(advocate);
    setIsConsultationModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainRoutes onBookConsultation={handleOpenBooking} />

      {/* Global Consultation Booking Modal */}
      <ConsultationModal
        advocate={selectedAdvocate}
        isOpen={isConsultationModalOpen}
        onClose={() => {
          setIsConsultationModalOpen(false);
          setSelectedAdvocate(null);
        }}
      />
    </BrowserRouter>
  );
}
