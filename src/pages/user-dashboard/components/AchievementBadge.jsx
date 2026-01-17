import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadge = ({ 
  icon, 
  title, 
  description, 
  unlocked = false, 
  unlockedDate, 
  progress,
  total 
}) => {
  return (
    <div className={`bg-card rounded-lg p-4 md:p-6 shadow-md transition-smooth ${unlocked ? 'hover:shadow-lg' : 'opacity-60'}`}>
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 md:mb-4 ${unlocked ? 'bg-gradient-to-br from-accent to-primary shadow-primary-glow' : 'bg-muted'}`}>
          <Icon name={icon} size={32} className={`${unlocked ? 'text-white' : 'text-text-secondary'} md:w-10 md:h-10`} />
        </div>
        <h4 className="text-sm md:text-base font-semibold text-text-primary mb-1 md:mb-2">{title}</h4>
        <p className="text-xs md:text-sm text-text-secondary mb-2 md:mb-3 line-clamp-2">{description}</p>
        
        {unlocked ? (
          <div className="flex items-center gap-1 text-xs text-accent">
            <Icon name="Check" size={14} />
            <span>Débloqué le {unlockedDate}</span>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex items-center justify-between text-xs text-text-secondary mb-1">
              <span>Progression</span>
              <span>{progress}/{total}</span>
            </div>
            <div className="w-full h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-smooth"
                style={{ width: `${(progress / total) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementBadge;