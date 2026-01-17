import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathCard = ({ 
  title, 
  description, 
  progress, 
  totalModules, 
  completedModules, 
  icon, 
  color = 'primary',
  path = '/learning-paths'
}) => {
  const colorClasses = {
    primary: 'from-primary/20 to-primary/5',
    accent: 'from-accent/20 to-accent/5',
    warning: 'from-warning/20 to-warning/5',
    success: 'from-success/20 to-success/5'
  };

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-smooth">
      <div className={`bg-gradient-to-br ${colorClasses?.[color]} rounded-lg p-4 md:p-6 mb-4`}>
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-${color}/20 flex items-center justify-center`}>
              <Icon name={icon} size={20} className={`text-${color} md:w-6 md:h-6`} />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-text-primary">{title}</h3>
              <p className="text-xs md:text-sm text-text-secondary mt-1 line-clamp-2">{description}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-text-secondary">Progression</span>
            <span className="font-semibold text-text-primary">{progress}%</span>
          </div>
          <div className="w-full h-2 md:h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className={`h-full bg-${color} transition-smooth shadow-primary-glow`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <span>{completedModules}/{totalModules} modules complétés</span>
          </div>
        </div>
      </div>
      <Link to={path}>
        <Button variant="outline" fullWidth iconName="ArrowRight" iconPosition="right">
          Continuer l'apprentissage
        </Button>
      </Link>
    </div>
  );
};

export default LearningPathCard;