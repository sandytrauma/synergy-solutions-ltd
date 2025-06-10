// components/Layout.tsx
import React, { ReactNode } from 'react'; // Import ReactNode for children prop
import Navbar from '@/app/components/Navbar';
import Footer from './Footer';


// Define the type for the props of Layout component
interface LayoutProps {
  children: ReactNode; // 'children' can be any React node
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;