import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onStartProject }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'débutant':
        return 'text-accent bg-accent/10';
      case 'intermédiaire':
        return 'text-warning bg-warning/10';
      case 'avancé':
        return 'text-destructive bg-destructive/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-accent bg-accent/10';
      case 'in-progress':
        return 'text-primary bg-primary/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden transition-smooth hover:shadow-lg group">
      <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project?.difficulty)}`}>
            {project?.difficulty}
          </span>
          {project?.status && (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
              {project?.status === 'completed' ? 'Terminé' : 'En cours'}
            </span>
          )}
        </div>
      </div>
      <div className="p-4 md:p-5 lg:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-text-primary line-clamp-2">
            {project?.title}
          </h3>
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name={project?.icon} size={20} className="text-primary" />
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-4 line-clamp-3">
          {project?.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-secondary">
            <Icon name="Clock" size={16} className="flex-shrink-0" />
            <span>{project?.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-secondary">
            <Icon name="Database" size={16} className="flex-shrink-0" />
            <span>{project?.datasetSize}</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-secondary">
            <Icon name="Award" size={16} className="flex-shrink-0" />
            <span>+{project?.xpReward} XP</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
            <span>Compétences requises</span>
            <span>{project?.skills?.length}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project?.skills?.slice(0, 3)?.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted rounded text-xs text-text-primary"
              >
                {skill}
              </span>
            ))}
            {project?.skills?.length > 3 && (
              <span className="px-2 py-1 bg-muted rounded text-xs text-text-secondary">
                +{project?.skills?.length - 3}
              </span>
            )}
          </div>
        </div>

        {project?.progress !== undefined && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
              <span>Progression</span>
              <span>{project?.progress}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-smooth"
                style={{ width: `${project?.progress}%` }}
              />
            </div>
          </div>
        )}

        <Button
          variant={project?.status === 'in-progress' ? 'default' : 'outline'}
          fullWidth
          iconName={project?.status === 'in-progress' ? 'Play' : 'Rocket'}
          iconPosition="left"
          onClick={() => onStartProject(project)}
        >
          {project?.status === 'in-progress' ? 'Continuer' : project?.status === 'completed' ? 'Revoir' : 'Commencer'}
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;