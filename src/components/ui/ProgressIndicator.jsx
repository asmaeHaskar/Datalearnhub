import React from 'react';
import Icon from '../AppIcon';

const ProgressIndicator = ({ 
  currentModule = 'Introduction à SQL',
  completionPercentage = 45,
  totalModules = 12,
  completedModules = 5,
  variant = 'compact'
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 px-4 py-2 bg-muted/50 rounded-md">
        <div className="flex items-center gap-2">
          <Icon name="BookOpen" size={16} className="text-primary" />
          <span className="text-sm font-medium text-text-primary hidden sm:inline">
            {currentModule}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-smooth"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className="text-xs font-medium text-text-secondary">
            {completionPercentage}%
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon name="TrendingUp" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Progression du Parcours</h3>
            <p className="text-xs text-text-secondary mt-1">{currentModule}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{completionPercentage}%</div>
          <div className="text-xs text-text-secondary mt-1">
            {completedModules}/{totalModules} modules
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-smooth shadow-primary-glow"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-text-secondary">
            <Icon name="Clock" size={14} />
            <span>Temps estimé: 2h 30min restantes</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <Icon name="Award" size={14} />
            <span>+150 XP à compléter</span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalModules })?.map((_, index) => (
            <div
              key={index}
              className={`
                flex-1 h-1.5 rounded-full transition-smooth
                ${index < completedModules 
                  ? 'bg-accent' 
                  : index === completedModules 
                    ? 'bg-primary' :'bg-muted'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;