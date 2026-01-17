import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: "Code2",
      title: "Apprentissage Pratique",
      description: "Écrivez du code SQL et NoSQL réel dans notre playground interactif. Pas de théorie ennuyeuse - juste de la pratique pure avec validation instantanée.",
      features: [
        "Éditeur de code en temps réel",
        "Validation automatique des exercices",
        "Retour immédiat sur les erreurs"
      ],
      color: "primary"
    },
    {
      id: 2,
      icon: "Zap",
      title: "Exécution en Temps Réel",
      description: "Exécutez vos requêtes SQL et NoSQL instantanément et voyez les résultats en temps réel. Apprenez par l\'expérimentation et la découverte.",
      features: [
        "Environnement de base de données simulé",
        "Résultats tabulaires instantanés",
        "Support multi-bases de données"
      ],
      color: "accent"
    },
    {
      id: 3,
      icon: "Trophy",
      title: "Progression Gamifiée",
      description: "Gagnez des points XP, débloquez des badges et montez de niveau en complétant des défis. Transformez l'apprentissage en une aventure addictive.",
      features: [
        "Système de points XP",
        "Badges de réussite",
        "Classement compétitif"
      ],
      color: "warning"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20"
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20"
      },
      warning: {
        bg: "bg-warning/10",
        text: "text-warning",
        border: "border-warning/20"
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-4">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-xs md:text-sm font-medium text-text-secondary">
              Pourquoi DataLearnHub
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Apprenez Plus Vite avec Notre Approche Unique
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto">
            Nous combinons la théorie avec la pratique intensive pour vous transformer en professionnel de la data en un temps record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits?.map((benefit) => {
            const colors = getColorClasses(benefit?.color);
            return (
              <div
                key={benefit?.id}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-smooth shadow-md hover:shadow-xl group"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${colors?.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <Icon name={benefit?.icon} size={28} className={colors?.text} />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-text-primary mb-3">
                  {benefit?.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
                  {benefit?.description}
                </p>
                <ul className="space-y-3">
                  {benefit?.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${colors?.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon name="Check" size={12} className={colors?.text} />
                      </div>
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 md:p-8 lg:p-10 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-text-secondary">
                Exercices Pratiques
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                50+
              </div>
              <div className="text-sm md:text-base text-text-secondary">
                Mini-Projets Réels
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-warning mb-2">
                24/7
              </div>
              <div className="text-sm md:text-base text-text-secondary">
                Assistant IA Disponible
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;