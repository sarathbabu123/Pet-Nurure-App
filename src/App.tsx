import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  Bell, 
  Star, 
  MapPin, 
  Clock, 
  Plus, 
  ChevronRight, 
  AlertCircle,
  Navigation,
  Filter,
  Package,
  HeartPulse,
  PawPrint
} from 'lucide-react';
import { Button, Card, Input } from './components/UI';
import { BottomNav } from './components/BottomNav';

type Screen = 'onboarding' | 'setup' | 'home' | 'services' | 'clinic' | 'shop' | 'profile';

export default function App() {
  const [screen, setScreen] = useState<Screen>('onboarding');

  const renderScreen = () => {
    switch (screen) {
      case 'onboarding': return <OnboardingScreen onNext={() => setScreen('setup')} />;
      case 'setup': return <SetupScreen onNext={() => setScreen('home')} />;
      case 'home': return <HomeScreen />;
      case 'services': return <ServicesScreen />;
      case 'clinic': return <ClinicScreen />;
      case 'shop': return <ShopScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary-container selection:text-on-primary-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
      
      {screen !== 'onboarding' && screen !== 'setup' && (
        <BottomNav activeTab={screen} onTabChange={(tab) => setScreen(tab as Screen)} />
      )}
    </div>
  );
}

// --- Screens ---

function OnboardingScreen({ onNext }: { onNext: () => void }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 rounded-full bg-primary-container opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 rounded-full bg-tertiary-container opacity-20 blur-[120px]"></div>
      
      <div className="w-full max-w-md z-10">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="h-1.5 w-12 rounded-full bg-primary"></div>
          <div className="h-1.5 w-8 rounded-full bg-surface-container-highest"></div>
          <div className="h-1.5 w-8 rounded-full bg-surface-container-highest"></div>
        </div>

        <div className="relative mb-16 px-4">
          <div className="aspect-square bg-surface-container rounded-xl rotate-3 absolute inset-0 -z-10 scale-105"></div>
          <div className="aspect-square bg-white rounded-xl shadow-[0_32px_32px_rgba(27,29,14,0.04)] flex items-center justify-center overflow-hidden">
            <img 
              alt="Playful golden retriever pup" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              src="https://picsum.photos/seed/puppy/800/800" 
            />
          </div>
          <div className="absolute -top-6 -right-4 bg-secondary-container text-on-secondary-container p-4 rounded-xl shadow-lg -rotate-12">
            <ArrowRight size={32} />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-background leading-tight mb-4 italic">
            Tactile Sanctuary
          </h1>
          <p className="text-on-surface-variant text-lg max-w-[280px] mx-auto leading-relaxed">
            Personalized premium care for your favorite family members.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="surface" className="py-4">
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
              Google
            </Button>
            <Button variant="surface" className="py-4">
              <span className="font-headline font-semibold text-sm">Apple</span>
            </Button>
          </div>

          <div className="py-6 flex items-center justify-center">
            <span className="font-label text-outline text-[10px] tracking-[0.2em] uppercase px-4">Or continue with</span>
          </div>

          <Input placeholder="Email address" type="email" />
          
          <Button onClick={onNext} className="w-full py-5 mt-4">
            Start Your Journey
            <ArrowRight size={20} />
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-on-surface-variant text-sm">
            Already have an account? 
            <button className="text-primary font-bold hover:underline underline-offset-4 decoration-primary/30 ml-1">Sign In</button>
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <button className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-primary transition-colors">Privacy</button>
            <button className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-primary transition-colors">Terms</button>
            <button className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-primary transition-colors">Support</button>
          </div>
        </div>
      </div>
    </main>
  );
}

function SetupScreen({ onNext }: { onNext: () => void }) {
  const [petType, setPetType] = useState('cat');

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 pb-32">
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
            <img src="https://picsum.photos/seed/user/100/100" alt="User" referrerPolicy="no-referrer" />
          </div>
          <h1 className="font-headline font-extrabold italic text-primary text-lg tracking-tight">Tactile Sanctuary</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
          <Bell size={20} className="text-primary" />
        </button>
      </header>

      <section className="mb-12 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-on-surface mb-4">Welcome, Friend.</h2>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">Let's create a profile for your companion to ensure they receive the bespoke care they deserve.</p>
      </section>

      <section className="mb-16">
        <div className="mb-8">
          <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-secondary">Step 01</span>
          <h3 className="text-2xl font-bold">Select Pet Type</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['dog', 'cat', 'bird', 'other'].map((type) => (
            <button
              key={type}
              onClick={() => setPetType(type)}
              className={`
                group relative flex flex-col items-center p-8 rounded-lg transition-all active:scale-95
                ${petType === type 
                  ? 'bg-secondary-container shadow-[0_12px_24px_rgba(1,110,33,0.1)] ring-2 ring-secondary' 
                  : 'bg-surface-container hover:bg-secondary-container/50'}
              `}
            >
              <div className="mb-4 w-20 h-20 rounded-full bg-surface-container-lowest flex items-center justify-center transition-transform group-hover:scale-110">
                <PawPrint size={32} className={petType === type ? 'text-secondary' : 'text-primary'} />
              </div>
              <span className="font-headline font-bold text-on-surface capitalize">{type}</span>
              {petType === type && (
                <div className="absolute -top-2 -right-2 bg-secondary text-white rounded-full p-1 shadow-md">
                  <ArrowRight size={12} className="rotate-[-45deg]" />
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="mb-8">
          <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-secondary">Step 02</span>
          <h3 className="text-2xl font-bold">The Specifics</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <div className="relative bg-primary-container rounded-xl p-8 aspect-square flex items-center justify-center overflow-visible">
              <img 
                alt="Pet" 
                className="w-full h-full object-cover rounded-lg -mt-16 -ml-4 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500" 
                referrerPolicy="no-referrer"
                src="https://picsum.photos/seed/cat-profile/400/400" 
              />
              <div className="absolute -bottom-6 -right-6 bg-tertiary-container p-6 rounded-lg shadow-lg max-w-[140px]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-on-tertiary-container mb-1">Expert Tip</p>
                <p className="text-xs text-on-tertiary-container leading-relaxed">Accurate age helps us tailor nutritional plans.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full order-1 md:order-2 space-y-8 bg-surface-container-low p-8 rounded-lg">
            <Input label="What is their name?" placeholder="e.g. Luna" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="How old are they?" placeholder="Age" type="number" />
              <Input label="What's their breed?" placeholder="e.g. Maine Coon" />
            </div>
            <div className="space-y-2">
              <label className="font-headline text-sm font-bold text-on-surface-variant ml-2">Health Notes (Optional)</label>
              <textarea className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-secondary text-on-surface placeholder-on-surface-variant/40 outline-none resize-none" placeholder="Any allergies or sensitivities we should know about?" rows={3}></textarea>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <Button onClick={onNext} className="px-12 py-5 text-lg">
          Complete Setup
        </Button>
        <p className="mt-6 text-sm text-on-surface-variant">You can always update these details later in Profile settings.</p>
      </section>
    </main>
  );
}

function HomeScreen() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-8 pb-32 space-y-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
            <img src="https://picsum.photos/seed/user/100/100" alt="User" referrerPolicy="no-referrer" />
          </div>
          <span className="font-headline font-extrabold italic text-primary text-lg tracking-tight">Tactile Sanctuary</span>
        </div>
        <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
          <Bell size={20} className="text-primary" />
        </button>
      </header>

      <section className="space-y-1">
        <p className="text-on-surface-variant font-medium">Hello, Julian!</p>
        <h1 className="text-4xl font-bold tracking-tight text-on-background">How is Cooper <br/>feeling today?</h1>
      </section>

      <section>
        <button className="w-full bg-error-container text-on-error-container flex items-center justify-between p-5 rounded-lg active:scale-95 duration-300 transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-on-error-container text-white rounded-full flex items-center justify-center">
              <AlertCircle size={24} />
            </div>
            <div className="text-left">
              <p className="font-headline font-bold text-lg leading-tight">Emergency SOS</p>
              <p className="text-sm opacity-80">Instant connection to nearest vet</p>
            </div>
          </div>
          <ChevronRight size={20} />
        </button>
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="font-bold text-2xl tracking-tight">Our Services</h2>
          <span className="text-primary font-bold text-sm">View All</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 row-span-2 bg-secondary-container rounded-lg p-6 relative overflow-hidden flex flex-col justify-between group cursor-pointer">
            <div className="z-10">
              <p className="font-headline font-bold text-xl text-on-secondary-container">Grooming</p>
              <p className="text-sm text-on-secondary-container/70">Full spa treatment</p>
            </div>
            <img 
              src="https://picsum.photos/seed/groom/200/200" 
              className="absolute -bottom-4 -right-4 w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500" 
              alt="Grooming" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-primary-container rounded-lg p-6 relative overflow-hidden flex flex-col justify-between group cursor-pointer h-40">
            <div className="z-10">
              <p className="font-headline font-bold text-xl text-on-primary-container">Walking</p>
            </div>
            <img 
              src="https://picsum.photos/seed/walk/150/150" 
              className="absolute -bottom-2 -right-2 w-24 h-24 object-contain opacity-80 group-hover:rotate-12 transition-transform duration-500" 
              alt="Walking" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-tertiary-container rounded-lg p-6 relative overflow-hidden flex flex-col justify-between group cursor-pointer h-40">
            <div className="z-10">
              <p className="font-headline font-bold text-xl text-on-tertiary-container">Training</p>
            </div>
            <ArrowRight className="absolute -bottom-4 -right-4 text-7xl text-on-tertiary-container opacity-20 group-hover:scale-125 transition-transform duration-500" size={80} />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="font-bold text-2xl tracking-tight">Nearby Clinics</h2>
          <Navigation size={24} className="text-outline" />
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 no-scrollbar">
          {[1, 2].map((i) => (
            <div key={i} className="flex-none w-72 bg-surface-container rounded-lg overflow-hidden group">
              <div className="h-40 w-full bg-surface-container-highest">
                <img src={`https://picsum.photos/seed/clinic-${i}/400/300`} className="w-full h-full object-cover" alt="Clinic" referrerPolicy="no-referrer" />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-on-surface">Paws & Whiskers Vet</h3>
                  <span className="flex items-center text-secondary font-bold text-xs"><Star size={14} className="mr-1 fill-secondary" />4.9</span>
                </div>
                <p className="text-sm text-on-surface-variant italic">1.2 miles away • Open Now</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl tracking-tight">Recommended for Cooper</h2>
        <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 no-scrollbar">
          {[1, 2].map((i) => (
            <div key={i} className="flex-none w-48 bg-surface-container-low rounded-lg p-4 space-y-3 relative border border-white/20">
              <div className="aspect-square bg-white rounded-lg overflow-hidden p-4">
                <img src={`https://picsum.photos/seed/product-${i}/200/200`} className="w-full h-full object-contain" alt="Product" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Nutrition</p>
                <p className="font-headline font-bold text-on-surface">Grain-Free Bites</p>
                <p className="text-primary font-bold mt-1">$14.99</p>
              </div>
              <button className="absolute bottom-4 right-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center active:scale-90 duration-200">
                <Plus size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ServicesScreen() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-8 pb-32">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight mb-4">
          What does your <br/>
          <span className="text-primary italic">companion</span> need?
        </h1>
        <p className="text-on-surface-variant max-w-md text-lg">
          Discover local care, grooming, and health services tailored for your furry family.
        </p>
      </section>

      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6">
        {['All Services', 'Grooming', 'Vet Clinic', 'Walking', 'Training'].map((filter, i) => (
          <button
            key={filter}
            className={`
              px-6 py-3 rounded-full font-headline font-semibold whitespace-nowrap active:scale-95 duration-200
              ${i === 0 ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container'}
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group bg-surface-container-low rounded-xl p-6 transition-all duration-300 hover:bg-surface-container relative">
            <div className="absolute -top-6 right-6 w-32 h-32 transform group-hover:-translate-y-2 transition-transform duration-500">
              <img 
                src={`https://picsum.photos/seed/service-${i}/200/200`} 
                className="w-full h-full object-cover rounded-full shadow-lg" 
                alt="Service" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4">
              <span className="bg-primary-container/20 text-on-primary-container text-[10px] font-headline font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">
                Grooming
              </span>
              <h3 className="text-xl font-bold text-on-surface mb-2">Paws & Bubbles Spa</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-primary">
                  <Star size={14} className="fill-primary" />
                  <span className="text-sm font-bold">4.9</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <MapPin size={14} />
                  <span className="text-sm font-medium">0.8 miles</span>
                </div>
              </div>
              <Button className="w-full py-3">
                Book Session
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function ClinicScreen() {
  return (
    <main className="min-h-screen pb-32">
      <section className="px-6 pt-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight mb-6">
            Find care for your <span className="text-primary italic">best friend.</span>
          </h2>
          <div className="flex flex-col gap-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                <Search size={20} />
              </div>
              <input className="w-full pl-12 pr-4 py-5 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary-container text-on-surface placeholder:text-outline/60 font-medium" placeholder="Search clinics by name or neighborhood..." type="text"/>
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {['All Clinics', 'Emergency 24/7', 'Specialist', 'Grooming + Vet'].map((filter, i) => (
                <button
                  key={filter}
                  className={`
                    px-6 py-2 rounded-full font-label text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors
                    ${i === 0 ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="font-label text-xs font-bold uppercase tracking-widest text-outline">Found 12 Results</p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm">
                <Filter size={14} />
                Sort: Nearest
              </button>
            </div>
            {[1, 2, 3].map((i) => (
              <article key={i} className="bg-surface-container-lowest p-5 rounded-lg shadow-[0_8px_32px_rgba(27,29,14,0.04)] group hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/clinic-thumb-${i}/200/200`} className="w-full h-full object-cover" alt="Clinic" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline font-bold text-lg text-on-surface">Paws & Whiskers Clinic</h3>
                      <div className="flex items-center gap-1 bg-primary-container/20 px-2 py-0.5 rounded-full">
                        <Star size={12} className="text-primary fill-primary" />
                        <span className="text-xs font-bold text-primary">4.9</span>
                      </div>
                    </div>
                    <p className="text-sm text-on-surface-variant mt-1">128 Maplewood Ave, Downtown</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1.5 text-secondary font-medium text-xs">
                        <MapPin size={14} />
                        0.8 miles away
                      </div>
                      <div className="flex items-center gap-1.5 text-tertiary font-medium text-xs">
                        <Clock size={14} />
                        Open until 8 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <Button className="flex-1 py-3 text-sm">
                    Book Appointment
                  </Button>
                  <button className="w-12 h-12 flex items-center justify-center bg-surface-container text-on-surface rounded-full hover:bg-surface-container-high transition-colors">
                    <Navigation size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="lg:col-span-7 sticky top-28 h-[600px] w-full rounded-xl overflow-hidden shadow-xl bg-surface-container-highest">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/map/1200/800" 
                className="absolute inset-0 w-full h-full object-cover opacity-60" 
                alt="Map" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                <button className="w-10 h-10 bg-surface-container-lowest shadow-md rounded-full flex items-center justify-center hover:bg-surface-container-low"><Plus size={20} /></button>
                <button className="w-10 h-10 bg-surface-container-lowest shadow-md rounded-full flex items-center justify-center hover:bg-surface-container-low"><ArrowRight size={20} className="rotate-90" /></button>
                <button className="w-10 h-10 bg-primary text-on-primary shadow-lg rounded-full flex items-center justify-center mt-2"><Navigation size={20} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ShopScreen() {
  return (
    <main className="px-6 max-w-7xl mx-auto pb-32">
      <section className="py-10">
        <h1 className="text-6xl font-extrabold tracking-tighter text-on-background mb-4">
          The Curated <span className="text-primary italic">Collection</span>
        </h1>
        <p className="text-on-surface-variant max-w-lg leading-relaxed">
          Handpicked essentials designed for the comfort and well-being of your companions, delivered with a touch of sanctuary.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-4 mb-12 items-center">
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
          <input className="w-full bg-surface-container-highest border-none rounded-md py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-container text-on-surface placeholder-on-surface-variant/50" placeholder="Find organic treats, toys..." type="text"/>
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {['All Items', 'Wellness', 'Living'].map((filter, i) => (
            <button
              key={filter}
              className={`
                px-6 py-3 rounded-full font-label text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors
                ${i === 0 ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}
              `}
            >
              {filter}
            </button>
          ))}
          <button className="flex items-center gap-2 bg-surface-container-low text-on-surface-variant px-6 py-3 rounded-full font-label text-xs font-bold uppercase tracking-widest whitespace-nowrap hover:bg-surface-container transition-colors">
            <Filter size={14} />
            Filter
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group relative flex flex-col bg-surface-container rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-square mb-6 overflow-visible">
              <div className="absolute inset-0 bg-primary-container/20 rounded-full scale-90 translate-x-4 -translate-y-4"></div>
              <img 
                src={`https://picsum.photos/seed/shop-${i}/400/400`} 
                className="relative z-10 w-full h-full object-contain -mt-8 group-hover:scale-110 transition-transform duration-500" 
                alt="Product" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 font-label">Living</span>
                <h3 className="text-xl font-bold font-headline mt-1">Elevated Oak Feeder</h3>
                <p className="text-lg font-medium text-on-surface-variant mt-1">$84.00</p>
              </div>
              <button className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center active:scale-90 transition-transform shadow-lg shadow-primary/20">
                <Plus size={24} />
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        <div className="bg-primary-container rounded-lg p-8 flex flex-col justify-center min-h-[300px] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold font-headline text-on-primary-container mb-4">Subscription Sanctuary</h2>
            <p className="text-on-primary-container/80 max-w-xs mb-6">Save 15% on monthly essentials. Curated for your pet's unique needs.</p>
            <Button className="self-start px-8 py-3">Join Now</Button>
          </div>
          <Package className="absolute -right-8 -bottom-8 text-[200px] opacity-10 text-on-primary-container" size={200} />
        </div>
        <div className="bg-tertiary-container rounded-lg p-8 flex flex-col justify-center min-h-[300px] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold font-headline text-on-tertiary-container mb-4">Clinic-Approved</h2>
            <p className="text-on-tertiary-container/80 max-w-xs mb-6">Vet-recommended supplements for a long and vibrant life.</p>
            <Button variant="tertiary" className="self-start px-8 py-3">Learn More</Button>
          </div>
          <HeartPulse className="absolute -right-8 -bottom-8 text-[200px] opacity-10 text-on-tertiary-container" size={200} />
        </div>
      </section>
    </main>
  );
}
