import { ThemeProvider } from "@/components/ui/theme-provider";
import AppRouter from './Routes';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;