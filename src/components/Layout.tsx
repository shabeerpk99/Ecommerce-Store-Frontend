import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
