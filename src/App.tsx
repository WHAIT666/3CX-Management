import { ThemeProvider } from '@/components/ui/theme-provider';
import AppRouter from './AppRouter';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppRouter />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
