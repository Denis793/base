import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/shared/layout/Header';
import { Home } from '@/pages/Home';
import { Features } from '@/widgets/Features';

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        {/* <Route path="/blog-single" element={<BlogSingle />} /> */}
        {/* <Route path="/signin" element={<SignIn />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* <ClientLogoSection /> */}
      {/* <Footer /> */}
    </Router>
  );
}
