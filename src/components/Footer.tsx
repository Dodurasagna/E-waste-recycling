// import { Recycle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// const Footer = () => {
//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' }
//   ];

//   return (
//     <footer className="bg-white text-black font-montserrat w-full z-50 shadow-lg border-t border-gray-200 mt-10">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        
//         {/* Logo */}
//         <div className="flex items-center space-x-2 mb-2 md:mb-0">
//           <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center">
//             <Recycle className="h-4 w-4 text-white" />
//           </div>
//           <span className="text-sm md:text-base font-bold">EcoRecycle</span>
//         </div>

//         {/* Social Media */}
//         <div className="flex space-x-4">
//           {socialLinks.map((social, index) => (
//             <a
//               key={index}
//               href={social.href}
//               aria-label={social.label}
//               className="hover:text-green-600 transition-transform transform hover:scale-110"
//             >
//               <social.icon className="h-4 w-4" />
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-xs text-gray-600 py-1 border-t border-gray-200">
//         &copy; 2024 EcoRecycle. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Recycle, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-green-900 text-white font-montserrat w-full z-50 shadow-md border-t border-green-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* EcoRecycle Brand Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Recycle className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold">EcoRecycle</span>
          </div>
          <p className="text-sm text-green-100">
            EcoRecycle is committed to safe e-waste disposal and creating awareness for a cleaner and greener future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li><a href="/" className="hover:text-green-300">Home</a></li>
            <li><a href="/about" className="hover:text-green-300">About Us</a></li>
            <li><a href="/rewards" className="hover:text-green-300">Rewards</a></li>
            <li><a href="/events" className="hover:text-green-300">Events</a></li>
            <li><a href="/submitewaste" className="hover:text-green-300">Submit E-Waste</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <div className="flex items-start space-x-2 text-green-100 text-sm">
            <Mail className="w-5 h-5 mt-1" />
            <span>support@ecorecycle.org</span>
          </div>
          <div className="mt-4">
            <h5 className="font-medium mb-2">Follow us:</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-green-300 transition-transform transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-green-200 py-3 border-t border-green-800">
        &copy; {new Date().getFullYear()} EcoRecycle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
