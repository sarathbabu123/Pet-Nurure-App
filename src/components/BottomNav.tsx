import { Home, PawPrint, Stethoscope, ShoppingBag, User } from 'lucide-react';
import { motion } from 'motion/react';

interface NavItemProps {
  icon: typeof Home;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center px-5 py-2 transition-all duration-300 ease-out
        ${active 
          ? 'bg-tertiary-container text-on-background rounded-[3rem]' 
          : 'text-on-background/50 hover:bg-surface-container-low rounded-full'
        }
      `}
    >
      <Icon size={24} strokeWidth={active ? 2.5 : 2} />
      <span className="font-headline text-[11px] font-medium tracking-wide uppercase mt-1">
        {label}
      </span>
    </button>
  );
}

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-background/80 backdrop-blur-xl shadow-[0_-8px_32px_rgba(27,29,14,0.04)] rounded-t-[3rem] z-50">
      <NavItem icon={Home} label="Home" active={activeTab === 'home'} onClick={() => onTabChange('home')} />
      <NavItem icon={PawPrint} label="Services" active={activeTab === 'services'} onClick={() => onTabChange('services')} />
      <NavItem icon={Stethoscope} label="Clinic" active={activeTab === 'clinic'} onClick={() => onTabChange('clinic')} />
      <NavItem icon={ShoppingBag} label="Shop" active={activeTab === 'shop'} onClick={() => onTabChange('shop')} />
      <NavItem icon={User} label="Profile" active={activeTab === 'profile'} onClick={() => onTabChange('profile')} />
    </nav>
  );
}
