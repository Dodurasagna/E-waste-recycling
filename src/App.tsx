// // import { useState } from "react";
// // import { Toaster } from "@/components/ui/toaster";
// // import { Toaster as Sonner } from "@/components/ui/sonner";
// // import { TooltipProvider } from "@/components/ui/tooltip";
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Layout from "@/components/Layout";
// // import Home from "./pages/Home"; // ✅ updated
// // import SubmitEWaste from "./pages/SubmitEWaste";
// // import Rewards from "./pages/Rewards";
// // import Events from "./pages/Events";
// // import NotFound from "./pages/NotFound";

// // const queryClient = new QueryClient();

// // const App = () => {
// //   const [language, setLanguage] = useState("en");
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [userEmail, setUserEmail] = useState("");

// //   const handleSignIn = () => {
// //     setIsAuthenticated(true);
// //     setUserEmail("user@example.com");
// //   };

// //   const handleSignOut = () => {
// //     setIsAuthenticated(false);
// //     setUserEmail("");
// //   };

// //   return (
// //     <QueryClientProvider client={queryClient}>
// //       <TooltipProvider>
// //         <Toaster />
// //         <Sonner />
// //         <BrowserRouter>
// //           <Layout
// //             language={language}
// //             onLanguageChange={setLanguage}
// //             isAuthenticated={isAuthenticated}
// //             onSignIn={handleSignIn}
// //             onSignOut={handleSignOut}
// //             userEmail={userEmail}
// //           >
// //             <Routes>
// //               <Route path="/" element={<Home language={language} />} /> {/* ✅ updated */}
// //               <Route path="/submit" element={<SubmitEWaste language={language} />} />
// //               <Route path="/rewards" element={<Rewards language={language} />} />
// //               <Route path="/events" element={<Events language={language} />} />
// //               <Route path="/about" element={<Home language={language} />} /> {/* optional */}
// //               <Route path="*" element={<NotFound />} />
// //             </Routes>
// //           </Layout>
// //         </BrowserRouter>
// //       </TooltipProvider>
// //     </QueryClientProvider>
// //   );
// // };

// // export default App;

// import { useState } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "@/components/Layout";
// // import Chatbot from "@/components/Chatbot"; // ❌ Removed Chatbot import
// import Home from "./pages/Home";
// import SubmitEWaste from "./pages/SubmitEWaste";
// import Rewards from "./pages/Rewards";
// import Events from "./pages/Events";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => {
//   const [language, setLanguage] = useState("en");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userEmail, setUserEmail] = useState("");

//   const handleSignIn = () => {
//     setIsAuthenticated(true);
//     setUserEmail("user@example.com");
//   };

//   const handleSignOut = () => {
//     setIsAuthenticated(false);
//     setUserEmail("");
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           {/* ❌ Chatbot line removed */}

//           <Layout
//             language={language}
//             onLanguageChange={setLanguage}
//             isAuthenticated={isAuthenticated}
//             onSignIn={handleSignIn}
//             onSignOut={handleSignOut}
//             userEmail={userEmail}
//           >
//             <Routes>
//               <Route path="/" element={<Home language={language} />} />
//               <Route path="/submit" element={<SubmitEWaste language={language} />} />
//               <Route path="/rewards" element={<Rewards language={language} />} />
//               <Route path="/events" element={<Events language={language} />} />
//               <Route path="/about" element={<Home language={language} />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </Layout>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;



import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/AboutUS"; // ✅ NEW
import RewardsPage from "./pages/Rewards"; // ✅

import Layout from "@/components/layout";
import Chatbot from "@/components/Chatbot"; // ✅ Step 3: Import here
import Home from "./pages/Home";
import SubmitEWaste from "./pages/SubmitEWaste";
import Rewards from "./pages/Rewards";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Footer from '@/components/Footer';

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState("en");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");

const handleSignIn = () => {
  setIsAuthenticated(true);
  setUserEmail("user@gmail.com"); // Replace with dynamic login email if needed
};

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUserEmail("");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ✅ Chatbot will show on all routes */}
          <Chatbot />

          <Layout
            language={language}
            onLanguageChange={setLanguage}
            isAuthenticated={isAuthenticated}
            onSignIn={handleSignIn}
            onSignOut={handleSignOut}
            userEmail={userEmail}
          >
         <Routes>
  <Route path="/" element={<Home language={language} />} />
  <Route path="/submit" element={<SubmitEWaste language={language} />} />
<Route path="/rewards" element={<RewardsPage userEmail={userEmail} />} />

  <Route path="/events" element={<Events language={language} />} />
  <Route path="/about" element={<About />} /> {/* ✅ FIXED */}
  <Route path="*" element={<NotFound />} />
  
</Routes>
<Footer/>

          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
