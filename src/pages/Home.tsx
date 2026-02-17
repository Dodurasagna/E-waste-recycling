import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Recycle, Award, MapPin, Users, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-ewaste.jpg';
import trackingIcon from '@/assets/tracking-icon.jpg';
import Map from '../components/Map'; // ✅ this uses your Map.tsx
// import Chat from '@/components/Chat';



// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { ArrowRight, Recycle, Award, MapPin, Users, Smartphone } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import heroImage from '@/assets/hero-ewaste.jpg';
// import trackingIcon from '@/assets/tracking-icon.jpg';
// import Map from '../components/Map'; // ✅ this uses your Map.tsx
// import Chat from '@/components/Chat';



interface HomeProps {
  language: string;
}

const translations = {
  en: {
    heroTitle: 'E-Waste Management',
    heroSubtitle: 'Transform your electronic waste into environmental impact. Safe disposal, real-time tracking, and rewarding experiences.',
    heroButton: 'Submit E-Waste Now',
    learnMore: 'Learn More',
    howItWorks: 'How It Works',
    step1Title: 'Submit Request',
    step1Desc: 'Fill out our simple form with your e-waste details and pickup preferences.',
    step2Title: 'Live Tracking',
    step2Desc: 'Track your pickup in real-time with GPS-based monitoring system.',
    step3Title: 'Earn Rewards',
    step3Desc: 'Get reward points for every submission and redeem exciting offers.',
    featuresTitle: 'Why Choose EcoWaste AI?',
    feature1Title: 'Smart Collection',
    feature1Desc: 'AI-powered routing for efficient and timely pickups.',
    feature2Title: 'Real-time Tracking',
    feature2Desc: 'GPS-based live tracking of your pickup vehicle.',
    feature3Title: 'Reward System',
    feature3Desc: 'Earn points and redeem discount coupons from top retailers.',
    feature4Title: 'Community Events',
    feature4Desc: 'Join local e-waste drives and awareness programs.',
    statsTitle: 'Our Environmental Impact',
    devicesCollected: 'Devices Collected',
    carbonReduced: 'CO₂ Reduced (kg)',
    usersJoined: 'Users Joined',
    rewardsGiven: 'Rewards Given',
    ctaTitle: 'Ready to Make a Difference?',
    ctaDesc: 'Join thousands of users who are making environmental impact through responsible e-waste management.',
    ctaButton: 'Get Started Today'
  }
};
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-4">Locate E-Waste Centers Near You</h2>
    <p className="text-xl text-muted-foreground mb-6">
      This map shows your current location and nearby recycling centers.
    </p>
    <Map />
  </div>
</section>


export default function Home({ language }: HomeProps) {
  const t = translations[language as keyof typeof translations] || translations['en'];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit">
              <Button size="lg" className="btn-hero">
                {t.heroButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
           <Link to="/about">
  <Button
    size="lg"
    variant="outline"
    className="text-black border-black hover:bg-[#006400] hover:text-white"
  >
    {t.learnMore}
  </Button>
</Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.howItWorks}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center glass-card">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.step1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.step1Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-card">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>{t.step2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.step2Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-card">
              <CardHeader>
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-success" />
                </div>
                <CardTitle>{t.step3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.step3Desc}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">{t.feature2Title}</h2>
            <p className="text-xl text-muted-foreground">{t.feature2Desc}</p>
          </div>
          <div className="w-full overflow-hidden rounded shadow">
            <Map />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.statsTitle}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25,847</div>
              <div className="text-xl opacity-90">{t.devicesCollected}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">18,540</div>
              <div className="text-xl opacity-90">{t.carbonReduced}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12,394</div>
              <div className="text-xl opacity-90">{t.usersJoined}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3,246</div>
              <div className="text-xl opacity-90">{t.rewardsGiven}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t.ctaDesc}</p>
          <Link to="/submit">
            <Button size="lg" className="btn-hero">
              {t.ctaButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}




// interface HomeProps {
//   language: string;
// }

// const translations = {
//   en: {
//     heroTitle: 'E-Waste Management',
//     heroSubtitle: 'Transform your electronic waste into environmental impact. Safe disposal, real-time tracking, and rewarding experiences.',
//     heroButton: 'Submit E-Waste Now',
//     learnMore: 'Learn More',
//     howItWorks: 'How It Works',
//     step1Title: 'Submit Request',
//     step1Desc: 'Fill out our simple form with your e-waste details and pickup preferences.',
//     step2Title: 'Live Tracking',
//     step2Desc: 'Track your pickup in real-time with GPS-based monitoring system.',
//     step3Title: 'Earn Rewards',
//     step3Desc: 'Get reward points for every submission and redeem exciting offers.',
//     featuresTitle: 'Why Choose EcoWaste AI?',
//     feature1Title: 'Smart Collection',
//     feature1Desc: 'AI-powered routing for efficient and timely pickups.',
//     feature2Title: 'Real-time Tracking',
//     feature2Desc: 'GPS-based live tracking of your pickup vehicle.',
//     feature3Title: 'Reward System',
//     feature3Desc: 'Earn points and redeem discount coupons from top retailers.',
//     feature4Title: 'Community Events',
//     feature4Desc: 'Join local e-waste drives and awareness programs.',
//     statsTitle: 'Our Environmental Impact',
//     devicesCollected: 'Devices Collected',
//     carbonReduced: 'CO₂ Reduced (kg)',
//     usersJoined: 'Users Joined',
//     rewardsGiven: 'Rewards Given',
//     ctaTitle: 'Ready to Make a Difference?',
//     ctaDesc: 'Join thousands of users who are making environmental impact through responsible e-waste management.',
//     ctaButton: 'Get Started Today'
//   }
// };
// <section className="py-20 bg-white">
//   <div className="max-w-7xl mx-auto px-4">
//     <h2 className="text-4xl font-bold mb-4">Locate E-Waste Centers Near You</h2>
//     <p className="text-xl text-muted-foreground mb-6">
//       This map shows your current location and nearby recycling centers.
//     </p>
//     <Map />
//   </div>
// </section>


// export default function Home({ language }: HomeProps) {
//   const t = translations[language as keyof typeof translations] || translations['en'];

//   return (
//     <div className="min-h-screen">

//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             {t.heroTitle}
//           </h1>
//           <p className="text-xl md:text-2xl text-white/90 mb-8">
//             {t.heroSubtitle}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/submit">
//               <Button size="lg" className="btn-hero">
//                 {t.heroButton}
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
//               {t.learnMore}
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">{t.howItWorks}</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="text-center glass-card">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Smartphone className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle>{t.step1Title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription>{t.step1Desc}</CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="text-center glass-card">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <MapPin className="h-8 w-8 text-accent" />
//                 </div>
//                 <CardTitle>{t.step2Title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription>{t.step2Desc}</CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="text-center glass-card">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Award className="h-8 w-8 text-success" />
//                 </div>
//                 <CardTitle>{t.step3Title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription>{t.step3Desc}</CardDescription>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Live Map Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-4xl font-bold mb-4">{t.feature2Title}</h2>
//             <p className="text-xl text-muted-foreground">{t.feature2Desc}</p>
//           </div>
//           <div className="w-full overflow-hidden rounded shadow">
//             <Map />
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 gradient-primary text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">{t.statsTitle}</h2>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-5xl font-bold mb-2">25,847</div>
//               <div className="text-xl opacity-90">{t.devicesCollected}</div>
//             </div>
//             <div>
//               <div className="text-5xl font-bold mb-2">18,540</div>
//               <div className="text-xl opacity-90">{t.carbonReduced}</div>
//             </div>
//             <div>
//               <div className="text-5xl font-bold mb-2">12,394</div>
//               <div className="text-xl opacity-90">{t.usersJoined}</div>
//             </div>
//             <div>
//               <div className="text-5xl font-bold mb-2">3,246</div>
//               <div className="text-xl opacity-90">{t.rewardsGiven}</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-muted">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
//           <p className="text-xl text-muted-foreground mb-8">{t.ctaDesc}</p>
//           <Link to="/submit">
//             <Button size="lg" className="btn-hero">
//               {t.ctaButton}
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </Link>
//         </div>
//       </section>
//        <Chat />
//     </div>
//   );
// }
