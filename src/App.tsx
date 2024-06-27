import { ThemeProvider } from '@/components/ui/theme-provider';
import AppRouter from './AppRouter';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
