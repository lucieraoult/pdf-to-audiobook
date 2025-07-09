
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-10 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-navy-900 rounded-xl">
              <BookOpen className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-semibold text-navy-900">
                Scriptum Audio
              </h1>
              <p className="text-sm text-navy-600 font-light">
                Premium Document Narration
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-navy-700">
            <span className="hover:text-gold-600 transition-colors cursor-pointer">
              About
            </span>
            <span className="hover:text-gold-600 transition-colors cursor-pointer">
              Pricing
            </span>
            <span className="hover:text-gold-600 transition-colors cursor-pointer">
              Contact
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
