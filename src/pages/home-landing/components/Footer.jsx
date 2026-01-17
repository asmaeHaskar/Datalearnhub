import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    platform: [
      { label: "Parcours d\'Apprentissage", path: "/learning-paths" },
      { label: "SQL Playground", path: "/sql-no-sql-playground" },
      { label: "Mini-Projets", path: "/mini-projects" },
      { label: "Tableau de Bord", path: "/user-dashboard" }
    ],
    company: [
      { label: "À Propos", path: "/home-landing" },
      { label: "Carrières", path: "/home-landing" },
      { label: "Contact", path: "/home-landing" },
      { label: "Partenaires", path: "/home-landing" }
    ],
    legal: [
      { label: "Conditions d\'Utilisation", path: "/home-landing" },
      { label: "Politique de Confidentialité", path: "/home-landing" },
      { label: "Mentions Légales", path: "/home-landing" },
      { label: "RGPD", path: "/home-landing" }
    ]
  };

  const socialLinks = [
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/home-landing" className="flex items-center gap-3 mb-4">
              <div className="header-logo">
                <Icon name="GraduationCap" size={24} className="header-logo-icon" />
              </div>
              <span className="font-heading font-semibold text-lg text-text-primary">
                DataLearnHub
              </span>
            </Link>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Maîtrisez la data science et SQL grâce à une plateforme d'apprentissage interactive avec des exercices pratiques et un playground en temps réel.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.label}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-smooth group"
                  aria-label={social?.label}
                >
                  <Icon
                    name={social?.icon}
                    size={18}
                    className="text-text-secondary group-hover:text-primary transition-smooth"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4 text-sm md:text-base">
              Plateforme
            </h3>
            <ul className="space-y-3">
              {footerLinks?.platform?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-text-secondary hover:text-primary transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4 text-sm md:text-base">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-text-secondary hover:text-primary transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4 text-sm md:text-base">
              Légal
            </h3>
            <ul className="space-y-3">
              {footerLinks?.legal?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-text-secondary hover:text-primary transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-secondary text-center md:text-left">
              © {currentYear} DataLearnHub. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={14} className="text-text-secondary" />
                <span className="text-xs text-text-secondary">MAROC , FSTS </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" size={14} className="text-text-secondary" />
                <span className="text-xs text-text-secondary"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;