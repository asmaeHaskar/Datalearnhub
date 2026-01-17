import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendedNextSteps = ({ recommendations }) => {
  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-md">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center">
          <Icon name="Lightbulb" size={20} className="text-accent md:w-6 md:h-6" />
        </div>
        <div>
          <h3 className="text-base md:text-lg font-semibold text-text-primary">Prochaines étapes recommandées</h3>
          <p className="text-xs md:text-sm text-text-secondary">Basé sur votre progression</p>
        </div>
      </div>
      <div className="space-y-3 md:space-y-4">
        {recommendations?.map((item, index) => (
          <div key={index} className="p-3 md:p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth">
            <div className="flex items-start gap-3 md:gap-4">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-${item?.color}/20 flex items-center justify-center flex-shrink-0`}>
                <Icon name={item?.icon} size={18} className={`text-${item?.color} md:w-5 md:h-5`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm md:text-base font-semibold text-text-primary mb-1">{item?.title}</h4>
                <p className="text-xs md:text-sm text-text-secondary mb-2 md:mb-3 line-clamp-2">{item?.description}</p>
                <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                  <span className="flex items-center gap-1 text-xs text-text-secondary">
                    <Icon name="Clock" size={12} />
                    {item?.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-accent">
                    <Icon name="Zap" size={12} />
                    +{item?.xp} XP
                  </span>
                </div>
              </div>
              <Link to={item?.path}>
                <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                  Commencer
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedNextSteps;