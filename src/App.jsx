import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollManager } from '@/shared/utils/scrollManager';
import { Header } from '@/shared/layout/Header';
import { Home } from '@/pages/Home';
import { BlogGrid } from '@/pages/BlogGrid';
import { BlogSingle } from '@/pages/BlogSingle';
import { Footer } from '@/shared/layout/Footer';

export default function App() {
  return (
    <Router>
      <ScrollManagerWrapper />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-single" element={<BlogSingle />} />
      </Routes>

      <Footer />
    </Router>
  );
}

function ScrollManagerWrapper() {
  useScrollManager();
  return null;
}
