import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import VideoPlayer from './components/VideoPlayer';
import TranscriptPanel from './components/TranscriptPanel';
import NotesPanel from './components/NotesPanel';
import CourseNavigation from './components/CourseNavigation';
import InteractiveQuiz from './components/InteractiveQuiz';
import CodeChallenge from './components/CodeChallenge';
import AIAssistant from './components/AIAssistant';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CourseContent = () => {
  const [currentView, setCurrentView] = useState('video');
  const [videoProgress, setVideoProgress] = useState(45);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);

  const breadcrumbItems = [
    { label: 'Accueil', path: '/home-landing', icon: 'Home' },
    { label: 'Parcours', path: '/learning-paths', icon: 'BookOpen' },
    { label: 'Contenu du Cours', path: '/course-content', icon: 'FileText' }
  ];

  const handleVideoProgress = (progress) => {
    setVideoProgress(progress);
  };

  const handleSeekVideo = (seconds) => {
    setCurrentVideoTime(seconds);
  };

  const handleModuleSelect = (module) => {
    if (module.type === 'quiz') {
      setCurrentView('quiz');
    } else if (module.type === 'exercise') {
      setCurrentView('exercise');
    } else {
      setCurrentView('video');
    }
  };

  const handleQuizComplete = (score) => {
    console.log('Quiz completed with score:', score);
  };

  const handleChallengeComplete = (points) => {
    console.log('Challenge completed, earned points:', points);
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                  Parcours SQL Complet
                </h1>
                <p className="text-sm md:text-base text-text-secondary">
                  Maîtrisez SQL de A à Z avec des exercices pratiques et des projets réels
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant={bookmarked ? "default" : "outline"}
                  size="sm"
                  onClick={toggleBookmark}
                  iconName={bookmarked ? "BookmarkCheck" : "Bookmark"}
                  iconPosition="left"
                >
                  {bookmarked ? 'Enregistré' : 'Enregistrer'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Share2"
                  iconPosition="left"
                >
                  Partager
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <ProgressIndicator
              currentModule="Introduction à SQL"
              completionPercentage={videoProgress}
              totalModules={12}
              completedModules={5}
              variant="full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24 space-y-6">
                <CourseNavigation
                  currentModule="Introduction à SQL"
                  onModuleSelect={handleModuleSelect}
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              {currentView === 'video' && (
                <>
                  <VideoPlayer
                    onProgress={handleVideoProgress}
                  />

                  <div className="bg-card rounded-lg shadow-md p-4 md:p-6">
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
                      <button
                        onClick={() => setCurrentView('video')}
                        className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth bg-primary text-primary-foreground"
                      >
                        <Icon name="PlayCircle" size={16} />
                        <span>Vidéo</span>
                      </button>
                      <button
                        onClick={() => setCurrentView('transcript')}
                        className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth text-text-secondary hover:text-text-primary hover:bg-muted"
                      >
                        <Icon name="FileText" size={16} />
                        <span>Transcription</span>
                      </button>
                      <button
                        onClick={() => setCurrentView('notes')}
                        className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth text-text-secondary hover:text-text-primary hover:bg-muted"
                      >
                        <Icon name="StickyNote" size={16} />
                        <span>Notes</span>
                      </button>
                    </div>

                    <div className="prose prose-sm md:prose-base max-w-none">
                      <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-4">
                        À propos de cette leçon
                      </h3>
                      <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
                        Dans cette leçon d'introduction, nous explorons les concepts fondamentaux des bases de données relationnelles et du langage SQL. Vous apprendrez comment les données sont structurées dans des tables, comment les relations entre les tables sont établies, et pourquoi SQL est devenu le standard de l'industrie pour la gestion des données.
                      </p>
                      <h4 className="text-base md:text-lg font-semibold text-text-primary mb-3">
                        Ce que vous allez apprendre:
                      </h4>
                      <ul className="space-y-2 text-sm md:text-base text-text-secondary">
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent flex-shrink-0 mt-1" />
                          <span>Les principes de base des bases de données relationnelles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent flex-shrink-0 mt-1" />
                          <span>La structure des tables: lignes, colonnes et types de données</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent flex-shrink-0 mt-1" />
                          <span>L'importance des clés primaires et étrangères</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent flex-shrink-0 mt-1" />
                          <span>Introduction aux commandes SQL de base</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {currentView === 'transcript' && (
                <TranscriptPanel
                  currentTime={currentVideoTime}
                  onSeek={handleSeekVideo}
                />
              )}

              {currentView === 'notes' && (
                <NotesPanel />
              )}

              {currentView === 'quiz' && (
                <InteractiveQuiz onComplete={handleQuizComplete} />
              )}

              {currentView === 'exercise' && (
                <CodeChallenge onComplete={handleChallengeComplete} />
              )}

              <div className="bg-card rounded-lg shadow-md p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} className="text-warning" />
                  Ressources Complémentaires
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="/sql-no-sql-playground"
                    className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-smooth group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                        <Icon name="Code" size={20} className="text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-text-primary">
                        Pratiquer dans le Playground
                      </h4>
                    </div>
                    <p className="text-xs text-text-secondary">
                      Testez vos connaissances avec des exercices interactifs
                    </p>
                  </a>

                  <a
                    href="/mini-projects"
                    className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-smooth group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-smooth">
                        <Icon name="FolderKanban" size={20} className="text-accent" />
                      </div>
                      <h4 className="text-sm font-semibold text-text-primary">
                        Projets Pratiques
                      </h4>
                    </div>
                    <p className="text-xs text-text-secondary">
                      Appliquez vos compétences sur des projets réels
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 order-3">
              <div className="sticky top-24">
                <AIAssistant />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between p-6 bg-card rounded-lg shadow-md">
            <Button
              variant="outline"
              size="lg"
              iconName="ChevronLeft"
              iconPosition="left"
            >
              Leçon Précédente
            </Button>
            <Button
              variant="default"
              size="lg"
              iconName="ChevronRight"
              iconPosition="right"
            >
              Leçon Suivante
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseContent;
