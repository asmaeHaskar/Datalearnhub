import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivityItem = ({ 
  type, 
  title, 
  description, 
  timestamp, 
  xpEarned, 
  status = 'completed' 
}) => {
  const typeConfig = {
    exercise: { icon: 'Code', color: 'primary' },
    quiz: { icon: 'HelpCircle', color: 'accent' },
    project: { icon: 'FolderKanban', color: 'warning' },
    module: { icon: 'BookOpen', color: 'success' }
  };

  const config = typeConfig?.[type] || typeConfig?.exercise;
  const statusColors = {
    completed: 'bg-success/20 text-success',
    in_progress: 'bg-warning/20 text-warning',
    failed: 'bg-destructive/20 text-destructive'
  };

  return (
    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-${config?.color}/20 flex items-center justify-center flex-shrink-0`}>
        <Icon name={config?.icon} size={20} className={`text-${config?.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1 md:mb-2">
          <h4 className="text-sm md:text-base font-semibold text-text-primary line-clamp-1">{title}</h4>
          {xpEarned && (
            <div className="flex items-center gap-1 px-2 py-1 bg-accent/20 rounded-md flex-shrink-0">
              <Icon name="Zap" size={12} className="text-accent" />
              <span className="text-xs font-medium text-accent whitespace-nowrap">+{xpEarned} XP</span>
            </div>
          )}
        </div>
        <p className="text-xs md:text-sm text-text-secondary mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <span className="text-xs text-text-secondary">{timestamp}</span>
          <span className={`text-xs px-2 py-0.5 rounded-md ${statusColors?.[status]}`}>
            {status === 'completed' ? 'Terminé' : status === 'in_progress' ? 'En cours' : 'Échoué'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityItem;