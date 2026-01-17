import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';


const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigationItems = [
    { label: 'Accueil', path: '/home-landing', icon: 'Home' },
    { label: 'Parcours', path: '/learning-paths', icon: 'BookOpen' },
    { label: 'Playground', path: '/sql-no-sql-playground', icon: 'Code' },
    { label: 'Projets', path: '/mini-projects', icon: 'FolderKanban' },
    { label: 'Tableau de Bord', path: '/user-dashboard', icon: 'LayoutDashboard' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-card shadow-md z-1000 transition-smooth">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/home-landing" className="flex items-center gap-3">
              <div className="header-logo">
              </div>
              <span className="font-heading font-semibold text-lg text-text-primary hidden sm:block">
                DataLearnHub
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-md
                    font-body text-sm font-medium
                    transition-smooth
                    ${isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-primary-glow'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                    }
                  `}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-smooth"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" size={18} className="text-primary" />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-text-primary">Apprenant</div>
                  <div className="text-xs text-text-secondary">Niveau 5 • 2,450 XP</div>
                </div>
                <Icon 
                  name="ChevronDown" 
                  size={16} 
                  className={`text-text-secondary transition-smooth ${isProfileOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isProfileOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-1010" 
                    onClick={() => setIsProfileOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-56 bg-popover rounded-lg shadow-lg z-1020 overflow-hidden">
                    <div className="p-4 border-b border-border">
                      <div className="text-sm font-medium text-popover-foreground">Apprenant</div>
                      <div className="text-xs text-muted-foreground mt-1">apprenant@datalearnhub.com</div>
                    </div>
                    <div className="py-2">
                      <Link
                        to="/user-dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Icon name="LayoutDashboard" size={16} />
                        <span>Tableau de Bord</span>
                      </Link>
                      <Link
                        to="/user-dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Icon name="Settings" size={16} />
                        <span>Paramètres</span>
                      </Link>
                    </div>
                    <div className="border-t border-border py-2">
                      <button
                        className="flex items-center gap-3 px-4 py-2 text-sm text-destructive hover:bg-muted transition-smooth w-full"
                        onClick={() => {
                          setIsProfileOpen(false);
                        }}
                      >
                        <Icon name="LogOut" size={16} />
                        <span>Déconnexion</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-smooth"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-text-primary" />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background z-1010 lg:hidden"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-card z-1020 lg:hidden overflow-y-auto">
            <nav className="p-6 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-md
                    font-body text-base font-medium
                    transition-smooth
                    ${isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-primary-glow'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                    }
                  `}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;