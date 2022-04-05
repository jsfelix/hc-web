import type { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="sticky top-0 z-40 py-4 border-b bg-white dark:bg-slate-900 dark:border-slate-800">
        <Header />
      </header>
      <main className="mb-auto py-2 sm:py-4 md:py-6">
        <Component {...pageProps} />
      </main>
      <footer className="bg-sky-100 dark:bg-slate-800 py-6 sm:py-8 md:py-10">
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
