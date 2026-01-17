import React from 'react';
import Icon from '../../../components/AppIcon';

const JourneySection = () => {
  const journeySteps = [
    {
      id: 1,
      step: "Étape 1",
      title: "Commencez en Tant que Débutant",
      description: "Aucune expérience requise. Commencez par les bases de SQL avec des tutoriels guidés et des exercices simples.",
      icon: "BookOpen",
      duration: "2-3 semaines",
      modules: 8,
      color: "primary"
    },
    {
      id: 2,
      step: "Étape 2",
      title: "Pratiquez avec des Projets Réels",
      description: "Appliquez vos connaissances sur des datasets réels. Analysez des données de ventes, créez des dashboards et résolvez des problèmes concrets.",
      icon: "Code",
      duration: "4-6 semaines",
      modules: 12,
      color: "accent"
    },
    {
      id: 3,
      step: "Étape 3",
      title: "Maîtrisez les Concepts Avancés",
      description: "Plongez dans les requêtes complexes, l'optimisation de performances, NoSQL et le machine learning pour la data science.",
      icon: "Rocket",
      duration: "6-8 semaines",
      modules: 15,
      color: "warning"
    },
    {
      id: 4,
      step: "Étape 4",
      title: "Devenez un Professionnel Certifié",
      description: "Complétez votre parcours, obtenez votre certification et rejoignez notre communauté de professionnels de la data.",
      icon: "Award",
      duration: "Certification",
      modules: "Portfolio complet",
      color: "success"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary"
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent"
      },
      warning: {
        bg: "bg-warning/10",
        text: "text-warning",
        border: "border-warning"
      },
      success: {
        bg: "bg-success/10",
        text: "text-success",
        border: "border-success"
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-4">
            <Icon name="Map" size={16} className="text-primary" />
            <span className="text-xs md:text-sm font-medium text-text-secondary">
              Votre Parcours d'Apprentissage
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            De Débutant à Professionnel de la Data
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto">
            Suivez un parcours structuré qui vous guide étape par étape vers la maîtrise de la data science et des bases de données.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {journeySteps?.map((step, index) => {
              const colors = getColorClasses(step?.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step?.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-lg hover:shadow-xl transition-smooth">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 ${colors?.bg} rounded-full mb-4`}>
                        <span className={`text-xs font-semibold ${colors?.text}`}>
                          {step?.step}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-heading font-semibold text-text-primary mb-3">
                        {step?.title}
                      </h3>

                      <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
                        {step?.description}
                      </p>

                      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} className="text-text-secondary" />
                          <span className="text-xs md:text-sm text-text-secondary">
                            {step?.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="BookOpen" size={16} className="text-text-secondary" />
                          <span className="text-xs md:text-sm text-text-secondary">
                            {step?.modules} {typeof step?.modules === 'number' ? 'modules' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${colors?.bg} border-4 ${colors?.border} flex items-center justify-center shadow-lg`}>
                      <Icon name={step?.icon} size={28} className={colors?.text} />
                    </div>
                  </div>
                  <div className="w-full lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Prêt à Commencer Votre Voyage ?
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Rejoignez des milliers d'apprenants qui ont transformé leur carrière grâce à DataLearnHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-smooth shadow-lg">
                Commencer Gratuitement
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-smooth border border-white/20">
                Voir les Parcours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;