import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/shared/layout/Header';

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/blog-grid" element={<BlogGrid />} /> */}
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
