import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendationCard = ({ recommendation }) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 md:p-6 border border-primary/20">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Icon name="Sparkles" size={20} className="text-primary md:w-6 md:h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1">
            Recommandé pour vous
          </h3>
          <p className="text-xs md:text-sm text-text-secondary">
            Basé sur votre progression et vos objectifs
          </p>
        </div>
      </div>
      <div className="bg-card rounded-lg p-3 md:p-4 mb-4">
        <h4 className="text-sm md:text-base font-semibold text-text-primary mb-2">
          {recommendation?.title}
        </h4>
        <p className="text-xs md:text-sm text-text-secondary line-clamp-2 mb-3">
          {recommendation?.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-text-secondary">
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={12} />
            <span>{recommendation?.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Award" size={12} />
            <span>{recommendation?.xp} XP</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="TrendingUp" size={12} />
            <span className="text-accent">{recommendation?.matchScore}% correspondance</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-start gap-2 text-xs md:text-sm text-text-secondary">
          <Icon name="CheckCircle2" size={14} className="text-accent mt-0.5 flex-shrink-0" />
          <span>{recommendation?.reason}</span>
        </div>
        <div className="flex items-start gap-2 text-xs md:text-sm text-text-secondary">
          <Icon name="Target" size={14} className="text-primary mt-0.5 flex-shrink-0" />
          <span>Objectif: {recommendation?.goal}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <Button
          variant="default"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          asChild
        >
          <Link to="/course-content">
            Commencer maintenant
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RecommendationCard;