import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Shield, Sparkles, Home, LayoutGrid, Image, Mail, ChevronRight, PhoneCall } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetCloseButton } from '../ui/Sheet';
import { BrandedCTA } from '../ui/BrandedCTA';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home, description: 'Overview & company highlights' },
    { path: '/services', label: 'Services', icon: LayoutGrid, description: 'Explore our tech capabilities' },
    { path: '/gallery', label: 'Gallery', icon: Image, description: 'Events, projects & team' },
    { path: '/contact', label: 'Contact', icon: Mail, description: 'Get in touch with our team' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    // Scroll reset on route change is handled globally by <ScrollToTop />,
    // which stays in sync with the Lenis smooth-scroll instance.
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#003152] flex items-center justify-center text-white shadow-md group-hover:bg-[#00243d] transition-all duration-200">
              <div className="relative flex items-center justify-center">
                <Shield className="w-6 h-6 text-white stroke-[2.2]" />
                <Sparkles className="w-3 h-3 text-[#62aff0] absolute -top-1 -right-1" />
              </div>
            </div>
            <div className="text-left">
              <span className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'} group-hover:text-[#003152]`}>
                Informa
                <span className={`${isScrolled ? 'text-[#003152]' : 'text-white'} transition-colors group-hover:text-[#003152]'`}>
                  tech
                </span>
              </span>
              <span className={`block text-[10px] uppercase font-semibold tracking-widest -mt-1 transition-colors ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                Enterprise Technology
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-slate-100/80 border-slate-200/60 shadow-inner'
              : 'bg-white/10 border-white/15 backdrop-blur-md shadow-lg shadow-black/20'
          }`}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isScrolled
                      ? isActive
                        ? 'text-white bg-[#003152] shadow-sm'
                        : 'text-slate-600 hover:text-[#003152] hover:bg-white/60'
                      : isActive
                        ? 'bg-[#003152] text-white border border-[#62aff0]/40 shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <BrandedCTA showStatusDot={false} onClick={() => handleNavClick('/contact')}>
              Get Started
            </BrandedCTA>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-2.5 rounded-xl transition-colors focus:outline-none ${
              isScrolled
                ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                : 'bg-transparent text-white hover:bg-white/10'
            }`}
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sheet (opens from right) */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent open={mobileMenuOpen} side="right" className="p-0">
          {/* Sheet Header */}
          <SheetHeader className="bg-[#001c31]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#003152] flex items-center justify-center text-white border border-[#62aff0]/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <SheetTitle className="text-white">
                  Informa<span className="text-[#62aff0]">tech</span>
                </SheetTitle>
                <SheetDescription className="text-slate-400">Enterprise Technology Menu</SheetDescription>
              </div>
            </div>
            <SheetCloseButton className="bg-white/10 text-white hover:bg-white/20 hover:text-white" />
          </SheetHeader>

          {/* Nav Items List */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-[#003152] text-white shadow-md shadow-[#003152]/20'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-white/15 text-[#62aff0]'
                        : 'bg-white text-[#003152] border border-slate-200 group-hover:border-[#003152]/30'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {item.label}
                    </div>
                    <div className={`text-xs truncate ${isActive ? 'text-[#a7d5fa]' : 'text-slate-500'}`}>
                      {item.description}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                      isActive ? 'text-[#62aff0]' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Sheet Footer CTA */}
          <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
            <BrandedCTA
              fullWidth
              showStatusDot={false}
              className="justify-center"
              onClick={() => handleNavClick('/contact')}
            >
              Get Started
            </BrandedCTA>
            <a
              href="tel:+12125550190"
              className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#003152] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              +1 (212) 555-0190
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};