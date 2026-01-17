import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickActionCard = ({ icon, title, description, path, color = 'primary' }) => {
  const colorClasses = {
    primary: 'from-primary/20 to-primary/5 hover:from-primary/30 hover:to-primary/10',
    accent: 'from-accent/20 to-accent/5 hover:from-accent/30 hover:to-accent/10',
    warning: 'from-warning/20 to-warning/5 hover:from-warning/30 hover:to-warning/10',
    success: 'from-success/20 to-success/5 hover:from-success/30 hover:to-success/10'
  };

  return (
    <Link to={path}>
      <div className={`bg-gradient-to-br ${colorClasses?.[color]} rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-smooth cursor-pointer`}>
        <div className="flex items-start gap-3 md:gap-4">
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-${color}/20 flex items-center justify-center flex-shrink-0`}>
            <Icon name={icon} size={24} className={`text-${color} md:w-7 md:h-7`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1 md:mb-2">{title}</h3>
            <p className="text-xs md:text-sm text-text-secondary line-clamp-2">{description}</p>
          </div>
          <Icon name="ArrowRight" size={20} className="text-text-secondary flex-shrink-0 md:w-6 md:h-6" />
        </div>
      </div>
    </Link>
  );
};

export default QuickActionCard;