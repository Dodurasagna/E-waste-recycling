import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Recycle, Award, MapPin, Users, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-ewaste.jpg';
import trackingIcon from '@/assets/tracking-icon.jpg';
import Map from '../components/Map'; // 👈 Added map import



interface HomeProps {
  language: string;
}

const translations = {
  // 👇 Translation content (unchanged for brevity)
  en: { /* ...same as before... */ },
  te: { /* ...same as before... */ },
  hi: { /* ...same as before... */ },
  ta: { /* ...same as before... */ }
};

export default function Home({ language }: HomeProps) {
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in delay-150">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Link to="/submit">
              <Button size="lg" className="btn-hero">
                {t.heroButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              {t.learnMore}
            </Button>
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
            <Card className="text-center glass-card transition-smooth hover:shadow-medium">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.step1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.step1Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-card transition-smooth hover:shadow-medium">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>{t.step2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.step2Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-card transition-smooth hover:shadow-medium">
              <CardHeader>
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-success" />
                </div>
                <CardTitle>{t.step3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.step3Desc}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 📍 Live Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">{t.feature2Title}</h2>
            <p className="text-xl text-muted-foreground">{t.feature2Desc}</p>
          </div>
          <Map />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.featuresTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center transition-smooth hover:shadow-medium hover:scale-105">
              <CardHeader>
                <Recycle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{t.feature1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.feature1Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center transition-smooth hover:shadow-medium hover:scale-105">
              <CardHeader>
                <img src={trackingIcon} alt="Tracking" className="h-12 w-12 mx-auto mb-4 rounded" />
                <CardTitle className="text-xl">{t.feature2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.feature2Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center transition-smooth hover:shadow-medium hover:scale-105">
              <CardHeader>
                <Award className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle className="text-xl">{t.feature3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.feature3Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center transition-smooth hover:shadow-medium hover:scale-105">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">{t.feature4Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.feature4Desc}</CardDescription>
              </CardContent>
            </Card>
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