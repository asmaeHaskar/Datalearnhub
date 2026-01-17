import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-xs md:text-sm font-medium text-primary">
                Plateforme d'apprentissage interactive
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-text-primary leading-tight">
              Apprenez la Data Science & SQL{' '}
              <span className="text-primary">en Pratiquant</span>, Pas Seulement en Lisant
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0">
              Maîtrisez SQL, NoSQL et la science des données grâce à des exercices pratiques, un playground de code en temps réel et un système de gamification qui rend l'apprentissage addictif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconPosition="right"
                onClick={() => navigate('/learning-paths')}
                className="shadow-primary-glow-lg"
              >
                Commencer l'Apprentissage
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Code"
                iconPosition="left"
                onClick={() => navigate('/sql-no-sql-playground')}
              >
                Essayer SQL Playground
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-accent" />
                <span className="text-sm md:text-base text-text-secondary">
                  <span className="font-semibold text-text-primary">12,450+</span> Apprenants
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} className="text-warning" />
                <span className="text-sm md:text-base text-text-secondary">
                  <span className="font-semibold text-text-primary">4.9/5</span> Évaluation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={20} className="text-primary" />
                <span className="text-sm md:text-base text-text-secondary">
                  <span className="font-semibold text-text-primary">8,200+</span> Certificats
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-card rounded-3xl shadow-2xl p-6 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="ml-auto text-xs text-text-secondary font-mono">SQL Editor</span>
                  </div>

                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex gap-2">
                      <span className="text-text-secondary">1</span>
                      <span className="text-primary">SELECT</span>
                      <span className="text-text-primary">name, email</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-text-secondary">2</span>
                      <span className="text-primary">FROM</span>
                      <span className="text-text-primary">users</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-text-secondary">3</span>
                      <span className="text-primary">WHERE</span>
                      <span className="text-text-primary">status =</span>
                      <span className="text-accent">'active'</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-text-secondary">4</span>
                      <span className="text-primary">ORDER BY</span>
                      <span className="text-text-primary">created_at</span>
                      <span className="text-primary">DESC</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-accent">
                      <Icon name="CheckCircle" size={16} />
                      <span>Requête exécutée avec succès • 3 lignes retournées</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary">Progression</div>
                    <div className="text-lg font-bold text-text-primary">+45%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-card rounded-2xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary">XP Gagné</div>
                    <div className="text-lg font-bold text-text-primary">+250</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;