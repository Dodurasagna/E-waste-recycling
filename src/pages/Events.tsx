import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import communityImage from '@/assets/community-event.jpg';
import awarenessImage from '@/assets/community-event.jpg';
import treeImage from '@/assets/community-event.jpg';

const translations = {
  en: {
    eventsTitle: 'Upcoming Events',
    joinEvent: 'Join Event',
    register: 'Register',
    emailPlaceholder: 'Enter your email',
    namePlaceholder: 'Enter your full name',
    registered: 'Registered Successfully!',
    required: 'Please fill all fields.',
    event1: 'Community Clean-Up Drive',
    event2: 'E-Waste Awareness Workshop',
    event3: 'Tree Plantation Rally',
    date: 'Date',
    time: 'Time',
    location: 'Location',
    participants: 'Participants',
  },
  te: {
    eventsTitle: 'రాబోయే ఈవెంట్స్',
    joinEvent: 'ఈవెంట్ లో చేరండి',
    register: 'నమోదు',
    emailPlaceholder: 'మీ ఇమెయిల్ నమోదు చేయండి',
    namePlaceholder: 'పూర్తి పేరు నమోదు చేయండి',
    registered: 'విజయవంతంగా నమోదైంది!',
    required: 'దయచేసి అన్ని ఫీల్డ్స్ పూరించండి.',
    event1: 'కమ్యూనిటీ క్లీన్-అప్ డ్రైవ్',
    event2: 'ఇ-వేస్ట్ అవగాహన వర్క్‌షాప్',
    event3: 'వృక్షారోపణ ర్యాలీ',
    date: 'తేదీ',
    time: 'సమయం',
    location: 'స్థలం',
    participants: 'పాల్గొనేవారు',
  },
  hi: {
    eventsTitle: 'आगामी कार्यक्रम',
    joinEvent: 'इवेंट में शामिल हों',
    register: 'पंजीकरण करें',
    emailPlaceholder: 'अपना ईमेल दर्ज करें',
    namePlaceholder: 'अपना पूरा नाम दर्ज करें',
    registered: 'सफलतापूर्वक पंजीकृत!',
    required: 'कृपया सभी फ़ील्ड भरें।',
    event1: 'सामुदायिक सफाई अभियान',
    event2: 'ई-वेस्ट जागरूकता कार्यशाला',
    event3: 'वृक्षारोपण रैली',
    date: 'तारीख',
    time: 'समय',
    location: 'स्थान',
    participants: 'प्रतिभागी',
  },
  ta: {
    eventsTitle: 'வரவிருக்கும் நிகழ்வுகள்',
    joinEvent: 'நிகழ்வில் சேர',
    register: 'பதிவு செய்',
    emailPlaceholder: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
    namePlaceholder: 'உங்கள் முழு பெயரை உள்ளிடவும்',
    registered: 'வெற்றிகரமாக பதிவு செய்யப்பட்டது!',
    required: 'அனைத்து புலங்களையும் நிரப்பவும்.',
    event1: 'சமூகவழுக் கிளீன்-அப் இயக்கம்',
    event2: 'மின்கழிவுகள் விழிப்புணர்வு பட்டறை',
    event3: 'மர நடும் பேரணி',
    date: 'தேதி',
    time: 'நேரம்',
    location: 'இடம்',
    participants: 'பங்கேற்பாளர்கள்',
  },
};

const Events = ({ language }: { language: string }) => {
  const t = translations[language as keyof typeof translations] || translations.en;
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [participantCounts, setParticipantCounts] = useState<{ [key: string]: number }>({
    '1': 10,
    '2': 25,
    '3': 5,
  });

  const events = [
    {
      id: '1',
      title: t.event1,
      date: '2025-08-15',
      time: '10:00 AM',
      location: 'https://maps.google.com/?q=Lakeside Area',
      image: communityImage,
    },
    {
      id: '2',
      title: t.event2,
      date: '2025-09-10',
      time: '2:00 PM',
      location: 'https://maps.google.com/?q=City Convention Hall',
      image: awarenessImage,
    },
    {
      id: '3',
      title: t.event3,
      date: '2025-10-01',
      time: '9:00 AM',
      location: 'https://maps.google.com/?q=Public Garden',
      image: treeImage,
    },
  ];

  const today = new Date();
  const futureEvents = events.filter(event => new Date(event.date) > today);

  const handleRegister = () => {
    if (!email.trim() || !fullName.trim()) {
      toast({ description: t.required });
      return;
    }

    toast({ description: t.registered });

    setParticipantCounts(prev => ({
      ...prev,
      [selectedEvent!]: (prev[selectedEvent!] || 0) + 1,
    }));

    setSelectedEvent(null);
    setEmail('');
    setFullName('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{t.eventsTitle}</h2>
      <div className="flex flex-col gap-4">
        {futureEvents.map(event => (
          <Card key={event.id}>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Image Left */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-xl w-full md:w-1/3 h-48 object-cover"
                />

                {/* Details Right */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

                  <div className="text-green-600 flex flex-col gap-1 text-sm mb-2">
                    <p><strong>{t.date}:</strong> {event.date}</p>
                    <p><strong>{t.time}:</strong> {event.time}</p>
                    <p>
                      <strong>{t.location}:</strong>{' '}
                      <a
                        href={event.location}
                        className="underline text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event.location}
                      </a>
                    </p>
                    <p><strong>{t.participants}:</strong> {participantCounts[event.id]}</p>
                  </div>

                  <Button onClick={() => setSelectedEvent(event.id)} className="mt-2">
                    {t.joinEvent}
                  </Button>

                  {selectedEvent === event.id && (
                    <div className="mt-4 space-y-2">
                      <Input
                        type="text"
                        placeholder={t.namePlaceholder}
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                      />
                      <Input
                        type="email"
                        placeholder={t.emailPlaceholder}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <Button onClick={handleRegister}>{t.register}</Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
