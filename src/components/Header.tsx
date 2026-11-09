import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        const currentSection = visibleSections.sort(
          (first, second) => second.intersectionRatio - first.intersectionRatio,
        )[0];
        if (currentSection) setActiveSection(currentSection.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px' },
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const renderLinks = (mobile = false) => navLinks.map((link) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={() => {
        setActiveSection(link.id);
        if (mobile) setIsMobileMenuOpen(false);
      }}
      className={`nav-link${activeSection === link.id ? ' is-active' : ''}`}
      aria-current={activeSection === link.id ? 'location' : undefined}
    >
      {link.label}
    </a>
  ));

  const themeButton = (
    <button
      className="icon-button"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon aria-hidden="true" size={18} /> : <Sun aria-hidden="true" size={18} />}
    </button>
  );

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-shell">
        <a
          href="#home"
          onClick={() => {
            setActiveSection('home');
            setIsMobileMenuOpen(false);
          }}
          className="brand"
          aria-label="S V Vishnu Vamsi, home"
        >
          S V Vishnu Vamsi
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {renderLinks()}
        </nav>

        <div className="header-tools header-tools--desktop">
          {themeButton}
        </div>

        <div className="header-tools header-tools--mobile">
          {themeButton}
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMobileMenuOpen}
      >
        <div className="container mobile-nav-inner">
          {renderLinks(true)}
        </div>
      </nav>
    </header>
  );
};
