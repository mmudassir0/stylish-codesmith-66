
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80 px-4">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tech-accent/10 text-tech-accent mb-6">
          <span className="text-3xl font-bold">404</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-foreground/70 mb-6">
          We couldn't find the page you're looking for. The URL may be misspelled or the page you're looking for is no longer available.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-tech-accent text-white font-medium transition-all hover:shadow-glow hover:translate-y-[-2px]"
        >
          <ArrowLeft size={16} /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
