import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrackCard = ({ track, onModuleClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Débutant': 'text-accent bg-accent/10',
      'Intermédiaire': 'text-warning bg-warning/10',
      'Avancé': 'text-destructive bg-destructive/10'
    };
    return colors?.[difficulty] || 'text-text-secondary bg-muted';
  };

  const getDifficultyIcon = (difficulty) => {
    const icons = {
      'Débutant': 'Sparkles',
      'Intermédiaire': 'Zap',
      'Avancé': 'Flame'
    };
    return icons?.[difficulty] || 'BookOpen';
  };

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden transition-smooth hover:shadow-lg">
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${getDifficultyColor(track?.difficulty)} flex items-center justify-center`}>
                <Icon name={getDifficultyIcon(track?.difficulty)} size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary">{track?.title}</h3>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(track?.difficulty)} mt-1`}>
                  <Icon name={getDifficultyIcon(track?.difficulty)} size={12} />
                  {track?.difficulty}
                </span>
              </div>
            </div>
            <p className="text-sm text-text-secondary line-clamp-2 mb-3">{track?.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 text-xs md:text-sm text-text-secondary">
          <div className="flex items-center gap-1.5">
            <Icon name="Clock" size={14} className="md:w-4 md:h-4" />
            <span>{track?.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="BookOpen" size={14} className="md:w-4 md:h-4" />
            <span>{track?.totalModules} modules</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="Award" size={14} className="md:w-4 md:h-4" />
            <span>{track?.totalXP} XP</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs md:text-sm font-medium text-text-secondary">Progression</span>
            <span className="text-xs md:text-sm font-semibold text-primary">{track?.completionPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-smooth shadow-primary-glow"
              style={{ width: `${track?.completionPercentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-text-secondary">
            <span>{track?.completedModules}/{track?.totalModules} modules complétés</span>
            {track?.completionPercentage > 0 && (
              <span className="flex items-center gap-1">
                <Icon name="TrendingUp" size={12} />
                En cours
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
          <Button
            variant="default"
            fullWidth
            iconName={track?.completionPercentage > 0 ? "PlayCircle" : "Rocket"}
            iconPosition="left"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {track?.completionPercentage > 0 ? 'Continuer' : 'Commencer'}
          </Button>
          <Button
            variant="outline"
            fullWidth
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Masquer' : 'Voir modules'}
          </Button>
        </div>
      </div>
      {isExpanded && (
        <div className="border-t border-border bg-muted/30">
          <div className="p-4 md:p-6 space-y-3">
            {track?.modules?.map((module) => (
              <div
                key={module.id}
                className={`bg-card rounded-lg p-3 md:p-4 transition-smooth hover:shadow-md ${
                  module.isLocked ? 'opacity-60' : 'cursor-pointer hover:border-primary'
                } border border-border`}
                onClick={() => !module.isLocked && onModuleClick(module)}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    module.isCompleted 
                      ? 'bg-accent/20 text-accent' 
                      : module.isLocked 
                        ? 'bg-muted text-text-secondary' :'bg-primary/20 text-primary'
                  }`}>
                    <Icon 
                      name={module.isCompleted ? "CheckCircle2" : module.isLocked ? "Lock" : "Circle"} 
                      size={16} 
                      className="md:w-5 md:h-5"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm md:text-base font-semibold text-text-primary line-clamp-1">
                        {module.title}
                      </h4>
                      {module.isNew && (
                        <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-md whitespace-nowrap">
                          Nouveau
                        </span>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-text-secondary line-clamp-2 mb-2">
                      {module.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="FileText" size={12} />
                        <span>{module.lessons} leçons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Award" size={12} />
                        <span>{module.xp} XP</span>
                      </div>
                      {module.progress > 0 && (
                        <div className="flex items-center gap-1 text-primary">
                          <Icon name="TrendingUp" size={12} />
                          <span>{module.progress}%</span>
                        </div>
                      )}
                    </div>
                    {module.isLocked && module.prerequisites && (
                      <div className="mt-2 flex items-start gap-1.5 text-xs text-warning">
                        <Icon name="AlertCircle" size={12} className="mt-0.5 flex-shrink-0" />
                        <span>Prérequis: {module.prerequisites}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackCard;