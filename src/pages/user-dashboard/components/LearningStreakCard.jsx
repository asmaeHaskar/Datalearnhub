import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningStreakCard = ({ currentStreak, longestStreak, streakDays }) => {
  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-md">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-primary-glow">
          <Icon name="Flame" size={20} className="text-white md:w-6 md:h-6" />
        </div>
        <div>
          <h3 className="text-base md:text-lg font-semibold text-text-primary">Série d'apprentissage</h3>
          <p className="text-xs md:text-sm text-text-secondary">Continuez votre élan!</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="text-center p-3 md:p-4 bg-muted/30 rounded-lg">
          <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{currentStreak}</p>
          <p className="text-xs md:text-sm text-text-secondary">Jours actuels</p>
        </div>
        <div className="text-center p-3 md:p-4 bg-muted/30 rounded-lg">
          <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{longestStreak}</p>
          <p className="text-xs md:text-sm text-text-secondary">Record personnel</p>
        </div>
      </div>
      <div className="space-y-2 md:space-y-3">
        <p className="text-xs md:text-sm text-text-secondary">Derniers 7 jours</p>
        <div className="flex items-center justify-between gap-1 md:gap-2">
          {streakDays?.map((day, index) => (
            <div 
              key={index}
              className={`flex-1 h-8 md:h-10 rounded-md flex items-center justify-center transition-smooth ${day?.active ? 'bg-gradient-to-br from-accent to-primary shadow-primary-glow' : 'bg-muted'}`}
            >
              {day?.active && <Icon name="Check" size={16} className="text-white md:w-5 md:h-5" />}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span>Lun</span>
          <span>Mar</span>
          <span>Mer</span>
          <span>Jeu</span>
          <span>Ven</span>
          <span>Sam</span>
          <span>Dim</span>
        </div>
      </div>
      <div className="mt-4 md:mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs md:text-sm text-text-secondary">
          <Icon name="Info" size={14} className="md:w-4 md:h-4" />
          <span>Apprenez chaque jour pour maintenir votre série!</span>
        </div>
      </div>
    </div>
  );
};

export default LearningStreakCard;