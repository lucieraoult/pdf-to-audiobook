
const Footer = () => {
  return (
    <footer className="mt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-navy-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-serif text-lg font-semibold text-navy-900 mb-3">
                Scriptum Audio
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed max-w-md">
                Premium document-to-audiobook conversion service designed for professionals, 
                academics, and discerning readers who value quality and sophistication.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-navy-900 mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-navy-600">
                <li className="hover:text-gold-600 transition-colors cursor-pointer">PDF Conversion</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer">Bulk Processing</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer">Custom Voices</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer">Enterprise Plans</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-navy-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-navy-600">
                <li className="hover:text-gold-600 transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer">Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-navy-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-navy-500">
              © 2024 Scriptum Audio. All rights reserved.
            </p>
            <p className="text-sm text-navy-500 mt-2 md:mt-0">
              Crafted with precision and elegance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
