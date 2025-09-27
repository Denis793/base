import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
// import { BlogGrid } from './pages/BlogGrid/BlogGrid';
// import { BlogSingle } from './pages/BlogSingle/BlogSingle';
// import { SignIn } from './pages/SignIn/SignIn';
// import { SignUp } from './pages/SignUp/SignUp';
// import { NotFound } from './pages/NotFound/NotFound';
// import { ClientLogoSection } from './components/ClientLogoSection';
// import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* <ClientLogoSection />
      <Footer /> */}
    </Router>
  );
}
