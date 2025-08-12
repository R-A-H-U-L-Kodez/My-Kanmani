import Navigation from './Navigation';

const Footer = () => (
  <footer className="w-full py-6 text-center text-moon-glow bg-midnight-blue/80 border-t border-starlight-purple/30 mt-auto">
    <span className="font-handwritten text-lg">Made with endless love for Srinithi ✨</span>
  </footer>
);

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navigation />
    <main className="flex-1">
      {/* your routes/pages here */}
    </main>
    <Footer />
  </div>
);

export default Layout;
