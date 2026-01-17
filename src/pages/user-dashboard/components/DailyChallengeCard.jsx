import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DailyChallengeCard = ({ 
  title, 
  description, 
  difficulty, 
  xpReward, 
  timeLimit, 
  completed = false,
  path = '/sql-no-sql-playground'
}) => {
  const difficultyConfig = {
    facile: { color: 'success', icon: 'CircleDot' },
    moyen: { color: 'warning', icon: 'Circle' },
    difficile: { color: 'destructive', icon: 'AlertCircle' }
  };

  const config = difficultyConfig?.[difficulty] || difficultyConfig?.moyen;

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-smooth">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <Icon name="Target" size={20} className="text-primary md:w-6 md:h-6" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-text-primary">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-${config?.color}/20 text-${config?.color}`}>
                <Icon name={config?.icon} size={12} />
                {difficulty?.charAt(0)?.toUpperCase() + difficulty?.slice(1)}
              </span>
            </div>
          </div>
        </div>
        {completed && (
          <div className="flex items-center gap-1 px-2 py-1 bg-success/20 rounded-md">
            <Icon name="Check" size={14} className="text-success" />
            <span className="text-xs font-medium text-success">Complété</span>
          </div>
        )}
      </div>
      <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-1 md:gap-2 text-accent">
          <Icon name="Zap" size={16} className="md:w-5 md:h-5" />
          <span className="text-sm md:text-base font-semibold whitespace-nowrap">+{xpReward} XP</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2 text-text-secondary">
          <Icon name="Clock" size={16} className="md:w-5 md:h-5" />
          <span className="text-sm md:text-base whitespace-nowrap">{timeLimit}</span>
        </div>
      </div>
      <Link to={path}>
        <Button 
          variant={completed ? "outline" : "default"} 
          fullWidth 
          iconName={completed ? "RotateCcw" : "Play"} 
          iconPosition="right"
        >
          {completed ? 'Refaire le défi' : 'Commencer le défi'}
        </Button>
      </Link>
    </div>
  );
};

export default DailyChallengeCard;