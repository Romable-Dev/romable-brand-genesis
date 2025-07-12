import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import romableLogo from '@/assets/romable_icon_transparent.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { 
      name: 'Platform', 
      href: '/platform', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Builder', href: '/platform/ai-builder' },
        { name: 'Code Generator', href: '/platform/code-generator' },
        { name: 'Deployment', href: '/platform/deployment' },
        { name: 'Analytics', href: '/platform/analytics' }
      ]
    },
    { 
      name: 'Templates', 
      href: '/templates', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Apps', href: '/templates/web-apps' },
        { name: 'Mobile Apps', href: '/templates/mobile-apps' },
        { name: 'E-commerce', href: '/templates/ecommerce' },
        { name: 'SaaS Starters', href: '/templates/saas' }
      ]
    },
    { name: 'Community', href: '/community', hasDropdown: false },
    { name: 'Docs', href: '/docs', hasDropdown: false },
    { name: 'Pricing', href: '/pricing', hasDropdown: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchExpanded(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95
    }
  };

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0
    },
    exit: { 
      x: '100%'
    }
  };

  return (
    <>
      {/* Header Spacer */}
      <div className="h-20" />
      
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-accent/20 shadow-elegant' 
            : 'bg-background/80 backdrop-blur-xl border-b border-accent/20'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Section - Logo */}
            <Link to="/" className="flex items-center space-x-3 hover-scale">
              <img 
                src={romableLogo} 
                alt="Romable" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-semibold text-foreground">
                Romable
              </span>
            </Link>

            {/* Center Section - Navigation (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setHoveredDropdown(item.name)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 text-base font-medium transition-all duration-200 relative group ${
                      isActivePage(item.href)
                        ? 'text-foreground opacity-100'
                        : 'text-foreground/80 hover:text-foreground hover:opacity-100'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                    
                    {/* Animated Underline */}
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary ${
                        isActivePage(item.href) ? 'w-full' : 'w-0'
                      }`}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && hoveredDropdown === item.name && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-48 glass-card border border-accent/20 rounded-lg py-2 shadow-elegant z-50"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/20 transition-colors duration-150"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Section - Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchExpanded && (
                    <motion.input
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 300, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      type="text"
                      placeholder="Search docs, templates..."
                      className="absolute right-12 bg-background/50 backdrop-blur-sm border border-accent/20 rounded-lg px-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      autoFocus
                      onBlur={() => setIsSearchExpanded(false)}
                    />
                  )}
                </AnimatePresence>
                
                <motion.button
                  onClick={handleSearchToggle}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-5 h-5 text-foreground/80" />
                </motion.button>
              </div>

              {/* Login Button (Desktop) */}
              <Link
                to="/login"
                className="hidden md:block text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                Login
              </Link>

              {/* Start Building Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:brightness-110"
                >
                  Start Building
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={handleMobileMenuToggle}
                className="md:hidden w-10 h-10 rounded-lg bg-background/10 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden"
              onClick={handleMobileMenuToggle}
            />
            
            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-20 right-0 bottom-0 w-80 bg-background border-l border-accent/20 z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Navigation Items */}
                <nav className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={handleMobileMenuToggle}
                        className={`block text-lg font-medium py-2 transition-colors duration-200 ${
                          isActivePage(item.href)
                            ? 'text-accent'
                            : 'text-foreground/80 hover:text-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                      
                      {/* Mobile Dropdown Items */}
                      {item.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={handleMobileMenuToggle}
                              className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-200 py-1"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Login */}
                <div className="pt-6 border-t border-border">
                  <Link
                    to="/login"
                    onClick={handleMobileMenuToggle}
                    className="block text-lg font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 py-2"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;