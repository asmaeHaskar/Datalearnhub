import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "Check",
      text: "Accès à 500+ exercices pratiques"
    },
    {
      icon: "Check",
      text: "Playground SQL/NoSQL illimité"
    },
    {
      icon: "Check",
      text: "50+ mini-projets réels"
    },
    {
      icon: "Check",
      text: "Assistant IA 24/7"
    },
    {
      icon: "Check",
      text: "Certification reconnue"
    },
    {
      icon: "Check",
      text: "Communauté active"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <span className="text-xs md:text-sm font-medium text-white">
            Offre de Lancement
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
          Commencez Votre Transformation Aujourd'hui
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto">
          Rejoignez DataLearnHub et maîtrisez la data science en pratiquant, pas seulement en lisant. Votre parcours vers l'expertise commence maintenant.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10 max-w-3xl mx-auto">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Icon name={feature?.icon} size={12} className="text-white" />
              </div>
              <span className="text-sm text-white font-medium">
                {feature?.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            variant="default"
            size="lg"
            iconPosition="right"
            onClick={() => navigate('/learning-paths')}
            className="bg-white text-primary hover:bg-white/90 shadow-2xl"
          >
            Commencer Gratuitement
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="PlayCircle"
            iconPosition="left"
            onClick={() => navigate('/sql-no-sql-playground')}
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
          >
            Voir une Démo
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={18} />
            <span className="text-xs md:text-sm">Conforme RGPD</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CreditCard" size={18} />
            <span className="text-xs md:text-sm">Aucune carte requise</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" size={18} />
            <span className="text-xs md:text-sm">12,450+ apprenants actifs</span>
          </div>
        </div>

        <div className="mt-8 md:mt-10 pt-8 border-t border-white/20">
          <p className="text-sm text-white/70 mb-4">
            Vous avez des questions ? Contactez-nous
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@datalearnhub.com"
              className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-smooth"
            >
              <Icon name="Mail" size={16} />
              <span>contact@datalearnhub.com</span>
            </a>
            <a
              href="tel:+33123456789"
              className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-smooth"
            >
              <Icon name="Phone" size={16} />
              <span>+212 720365996</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;