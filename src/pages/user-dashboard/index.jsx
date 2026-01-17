import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import StatsCard from './components/StatsCard';
import LearningPathCard from './components/LearningPathCard';
import AchievementBadge from './components/AchievementBadge';
import RecentActivityItem from './components/RecentActivityItem';
import DailyChallengeCard from './components/DailyChallengeCard';
import WeeklyActivityChart from './components/WeeklyActivityChart';
import LearningStreakCard from './components/LearningStreakCard';
import QuickActionCard from './components/QuickActionCard';
import RecommendedNextSteps from './components/RecommendedNextSteps';

const UserDashboard = () => {
  const statsData = [
    {
      icon: "Zap",
      label: "Points XP totaux",
      value: "2,450",
      subValue: "Niveau 5",
      trend: "+12%",
      trendDirection: "up",
      color: "accent"
    },
    {
      icon: "Award",
      label: "Badges débloqués",
      value: "12",
      subValue: "Sur 24 disponibles",
      color: "warning"
    },
    {
      icon: "Clock",
      label: "Temps d\'apprentissage",
      value: "48h",
      subValue: "Ce mois-ci",
      trend: "+8%",
      trendDirection: "up",
      color: "success"
    },
    {
      icon: "Target",
      label: "Défis complétés",
      value: "34",
      subValue: "Cette semaine: 5",
      color: "primary"
    }
  ];

  const learningPaths = [
    {
      title: "SQL Basics",
      description: "Maîtrisez les fondamentaux de SQL avec des requêtes SELECT, JOIN et les fonctions d'agrégation",
      progress: 65,
      totalModules: 12,
      completedModules: 8,
      icon: "Database",
      color: "primary",
      path: "/learning-paths"
    },
    {
      title: "Advanced SQL",
      description: "Apprenez les sous-requêtes, les CTE, les fonctions de fenêtre et l'optimisation des requêtes",
      progress: 30,
      totalModules: 15,
      completedModules: 5,
      icon: "Code",
      color: "accent",
      path: "/learning-paths"
    },
    {
      title: "NoSQL (MongoDB)",
      description: "Découvrez les bases de données NoSQL avec MongoDB, les collections et les opérations CRUD",
      progress: 15,
      totalModules: 10,
      completedModules: 2,
      icon: "Layers",
      color: "warning",
      path: "/learning-paths"
    }
  ];

  const achievements = [
    {
      icon: "Trophy",
      title: "Premier pas",
      description: "Complétez votre premier exercice SQL",
      unlocked: true,
      unlockedDate: "15/01/2026"
    },
    {
      icon: "Flame",
      title: "Série de 7 jours",
      description: "Apprenez pendant 7 jours consécutifs",
      unlocked: true,
      unlockedDate: "10/01/2026"
    },
    {
      icon: "Star",
      title: "Maître SQL",
      description: "Complétez tous les modules SQL Basics",
      unlocked: false,
      progress: 8,
      total: 12
    },
    {
      icon: "Zap",
      title: "Accumulateur XP",
      description: "Gagnez 5000 points XP",
      unlocked: false,
      progress: 2450,
      total: 5000
    },
    {
      icon: "Target",
      title: "Chasseur de défis",
      description: "Complétez 50 défis quotidiens",
      unlocked: false,
      progress: 34,
      total: 50
    },
    {
      icon: "BookOpen",
      title: "Lecteur assidu",
      description: "Lisez 20 modules de cours",
      unlocked: false,
      progress: 15,
      total: 20
    }
  ];

  const recentActivities = [
    {
      type: "exercise",
      title: "Requêtes JOIN avancées",
      description: "Complété l\'exercice sur les jointures multiples avec 95% de précision",
      timestamp: "Il y a 2 heures",
      xpEarned: 50,
      status: "completed"
    },
    {
      type: "quiz",
      title: "Quiz: Fonctions d\'agrégation",
      description: "Score de 8/10 sur les fonctions COUNT, SUM, AVG",
      timestamp: "Il y a 5 heures",
      xpEarned: 30,
      status: "completed"
    },
    {
      type: "module",
      title: "Introduction aux sous-requêtes",
      description: "Module de cours complété avec tous les exemples pratiqués",
      timestamp: "Hier",
      xpEarned: 40,
      status: "completed"
    },
    {
      type: "project",
      title: "Analyse de données de vente",
      description: "Projet mini en cours - 60% complété",
      timestamp: "Il y a 2 jours",
      status: "in_progress"
    }
  ];

  const dailyChallenges = [
    {
      title: "Optimisation de requête",
      description: "Optimisez une requête SQL lente pour améliorer les performances de 50%",
      difficulty: "difficile",
      xpReward: 100,
      timeLimit: "30 min",
      completed: false,
      path: "/sql-no-sql-playground"
    },
    {
      title: "Agrégation de données",
      description: "Utilisez GROUP BY et HAVING pour analyser les ventes par région",
      difficulty: "moyen",
      xpReward: 60,
      timeLimit: "20 min",
      completed: true,
      path: "/sql-no-sql-playground"
    }
  ];

  const weeklyActivity = [
    { day: "Lun", minutes: 45, isToday: false },
    { day: "Mar", minutes: 60, isToday: false },
    { day: "Mer", minutes: 30, isToday: false },
    { day: "Jeu", minutes: 75, isToday: false },
    { day: "Ven", minutes: 50, isToday: false },
    { day: "Sam", minutes: 90, isToday: false },
    { day: "Dim", minutes: 65, isToday: true }
  ];

  const streakData = {
    currentStreak: 7,
    longestStreak: 14,
    streakDays: [
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true }
    ]
  };

  const quickActions = [
    {
      icon: "Code",
      title: "SQL Playground",
      description: "Pratiquez vos compétences SQL en temps réel",
      path: "/sql-no-sql-playground",
      color: "primary"
    },
    {
      icon: "BookOpen",
      title: "Continuer le cours",
      description: "Reprendre là où vous vous êtes arrêté",
      path: "/course-content",
      color: "accent"
    },
    {
      icon: "FolderKanban",
      title: "Mini-projets",
      description: "Appliquez vos connaissances sur des projets réels",
      path: "/mini-projects",
      color: "warning"
    }
  ];

  const recommendations = [
    {
      icon: "Database",
      title: "Fonctions de fenêtre SQL",
      description: "Apprenez ROW_NUMBER, RANK et PARTITION BY pour des analyses avancées",
      duration: "45 min",
      xp: 80,
      color: "primary",
      path: "/course-content"
    },
    {
      icon: "Code",
      title: "Exercice pratique: Jointures complexes",
      description: "Maîtrisez les jointures LEFT, RIGHT et FULL OUTER avec des cas d'usage réels",
      duration: "30 min",
      xp: 60,
      color: "accent",
      path: "/sql-no-sql-playground"
    },
    {
      icon: "FolderKanban",
      title: "Projet: Tableau de bord des ventes",
      description: "Créez un tableau de bord interactif avec des données de vente réelles",
      duration: "2 heures",
      xp: 150,
      color: "warning",
      path: "/mini-projects"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tableau de Bord - DataLearnHub</title>
        <meta name="description" content="Suivez votre progression d'apprentissage, consultez vos statistiques et accédez à vos cours sur DataLearnHub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
            <Breadcrumb />

            <div className="mb-6 md:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4 md:mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                    Tableau de Bord
                  </h1>
                  <p className="text-sm md:text-base text-text-secondary">
                    Bienvenue! Voici un aperçu de votre parcours d'apprentissage
                  </p>
                </div>
                <ProgressIndicator 
                  currentModule="Introduction à SQL"
                  completionPercentage={45}
                  totalModules={12}
                  completedModules={5}
                  variant="compact"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {statsData?.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 md:mb-6">
                    Vos parcours d'apprentissage
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    {learningPaths?.map((path, index) => (
                      <LearningPathCard key={index} {...path} />
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 md:mb-6">
                    Activité récente
                  </h2>
                  <div className="space-y-3 md:space-y-4">
                    {recentActivities?.map((activity, index) => (
                      <RecentActivityItem key={index} {...activity} />
                    ))}
                  </div>
                </div>

                <RecommendedNextSteps recommendations={recommendations} />
              </div>

              <div className="space-y-4 md:space-y-6">
                <LearningStreakCard {...streakData} />
                
                <WeeklyActivityChart weekData={weeklyActivity} />

                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 md:mb-6">
                    Défis quotidiens
                  </h2>
                  <div className="space-y-4 md:space-y-6">
                    {dailyChallenges?.map((challenge, index) => (
                      <DailyChallengeCard key={index} {...challenge} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 md:mb-6">
                Accès rapide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {quickActions?.map((action, index) => (
                  <QuickActionCard key={index} {...action} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 md:mb-6">
                Vos réalisations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {achievements?.map((achievement, index) => (
                  <AchievementBadge key={index} {...achievement} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDashboard;