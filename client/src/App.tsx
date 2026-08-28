// AJ Burger style reminder: route the experience as a focused catalog—Burgers stays home, dedicated content pages stay separate, and each menu card opens a matching detail view.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import BurgerDetail from "./pages/BurgerDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Quality from "./pages/Quality";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/burger/:id" component={BurgerDetail} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/quality" component={Quality} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
