import { ThemeProvider } from "@/components/ui/theme-provider";
import AppRouter from './Routes';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;