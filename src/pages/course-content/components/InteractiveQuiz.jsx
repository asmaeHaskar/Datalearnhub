import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveQuiz = ({ 
  quiz = null,
  onComplete = () => {}
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const defaultQuiz = {
    id: 1,
    title: "Quiz: Concepts de Base SQL",
    description: "Testez vos connaissances sur les concepts fondamentaux des bases de données SQL",
    totalQuestions: 5,
    passingScore: 60,
    timeLimit: 10,
    questions: [
      {
        id: 1,
        question: "Qu'est-ce qu'une clé primaire dans une base de données relationnelle?",
        options: [
          "Un champ qui peut contenir des valeurs nulles",
          "Un identifiant unique pour chaque enregistrement dans une table",
          "Une colonne qui stocke des mots de passe",
          "Un index secondaire pour améliorer les performances"
        ],
        correctAnswer: 1,
        explanation: "Une clé primaire est un identifiant unique qui garantit que chaque enregistrement dans une table peut être identifié de manière unique. Elle ne peut pas contenir de valeurs nulles et doit être unique pour chaque ligne."
      },
      {
        id: 2,
        question: "Quelle commande SQL est utilisée pour récupérer des données d'une table?",
        options: [
          "GET",
          "FETCH",
          "SELECT",
          "RETRIEVE"
        ],
        correctAnswer: 2,
        explanation: "La commande SELECT est la commande standard SQL pour récupérer des données d'une ou plusieurs tables. C'est la commande la plus utilisée en SQL."
      },
      {
        id: 3,
        question: "Que fait la clause WHERE dans une requête SQL?",
        options: [
          "Elle trie les résultats",
          "Elle filtre les enregistrements selon une condition",
          "Elle groupe les données",
          "Elle joint plusieurs tables"
        ],
        correctAnswer: 1,
        explanation: "La clause WHERE est utilisée pour filtrer les enregistrements qui répondent à une condition spécifique. Elle permet de ne récupérer que les données qui correspondent aux critères définis."
      },
      {
        id: 4,
        question: "Quel type de jointure retourne tous les enregistrements de la table de gauche et les enregistrements correspondants de la table de droite?",
        options: [
          "INNER JOIN",
          "RIGHT JOIN",
          "LEFT JOIN",
          "FULL JOIN"
        ],
        correctAnswer: 2,
        explanation: "LEFT JOIN (ou LEFT OUTER JOIN) retourne tous les enregistrements de la table de gauche et les enregistrements correspondants de la table de droite. Si aucune correspondance n'existe, les colonnes de la table de droite contiendront NULL."
      },
      {
        id: 5,
        question: "Quelle fonction d\'agrégation SQL compte le nombre d\'enregistrements?",
        options: [
          "SUM()",
          "COUNT()",
          "AVG()",
          "TOTAL()"
        ],
        correctAnswer: 1,
        explanation: "La fonction COUNT() est utilisée pour compter le nombre d'enregistrements qui correspondent à un critère spécifique. Elle peut compter toutes les lignes ou seulement les lignes avec des valeurs non nulles dans une colonne spécifique."
      }
    ]
  };

  const quizData = quiz || defaultQuiz;
  const currentQ = quizData?.questions?.[currentQuestion];

  const handleAnswerSelect = (answerIndex) => {
    if (!showResults) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: answerIndex
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData?.questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = calculateScore();
    onComplete(score);
  };

  const calculateScore = () => {
    let correct = 0;
    quizData?.questions?.forEach((q, index) => {
      if (selectedAnswers?.[index] === q?.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizData?.questions?.length) * 100);
  };

  const isAnswerCorrect = (questionIndex, answerIndex) => {
    return answerIndex === quizData?.questions?.[questionIndex]?.correctAnswer;
  };

  const score = showResults ? calculateScore() : 0;
  const passed = score >= quizData?.passingScore;

  if (!quizStarted) {
    return (
      <div className="bg-card rounded-lg shadow-md p-6 md:p-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Icon name="HelpCircle" size={32} className="text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {quizData?.title}
          </h2>
          <p className="text-base text-text-secondary mb-8">
            {quizData?.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-muted/30 rounded-lg">
              <Icon name="FileQuestion" size={24} className="text-primary mx-auto mb-2" />
              <p className="text-sm text-text-secondary mb-1">Questions</p>
              <p className="text-xl font-bold text-text-primary">{quizData?.totalQuestions}</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <Icon name="Clock" size={24} className="text-warning mx-auto mb-2" />
              <p className="text-sm text-text-secondary mb-1">Temps Estimé</p>
              <p className="text-xl font-bold text-text-primary">{quizData?.timeLimit} min</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <Icon name="Target" size={24} className="text-accent mx-auto mb-2" />
              <p className="text-sm text-text-secondary mb-1">Score Minimum</p>
              <p className="text-xl font-bold text-text-primary">{quizData?.passingScore}%</p>
            </div>
          </div>

          <Button
            variant="default"
            size="lg"
            onClick={() => setQuizStarted(true)}
            iconName="Play"
            iconPosition="left"
            className="mx-auto"
          >
            Commencer le Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="bg-card rounded-lg shadow-md p-6 md:p-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className={`
            w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6
            ${passed ? 'bg-accent/20' : 'bg-destructive/20'}
          `}>
            <Icon 
              name={passed ? "CheckCircle2" : "XCircle"} 
              size={40} 
              className={passed ? 'text-accent' : 'text-destructive'}
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {passed ? 'Félicitations!' : 'Continuez vos efforts!'}
          </h2>
          <p className="text-base text-text-secondary mb-6">
            {passed 
              ? 'Vous avez réussi le quiz avec succès!' :'Vous n\'avez pas atteint le score minimum. Révisez le contenu et réessayez.'
            }
          </p>

          <div className="inline-flex items-center gap-4 p-6 bg-muted/30 rounded-lg mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{score}%</p>
              <p className="text-sm text-text-secondary">Votre Score</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-4xl font-bold text-text-primary mb-2">
                {Object.values(selectedAnswers)?.filter((ans, idx) => 
                  ans === quizData?.questions?.[idx]?.correctAnswer
                )?.length}/{quizData?.questions?.length}
              </p>
              <p className="text-sm text-text-secondary">Réponses Correctes</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setQuizStarted(false);
                setShowResults(false);
                setCurrentQuestion(0);
                setSelectedAnswers({});
              }}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Recommencer
            </Button>
            <Button
              variant="default"
              size="lg"
              onClick={() => window.location.href = '/learning-paths'}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Continuer le Parcours
            </Button>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-semibold text-text-primary mb-6">
            Révision des Réponses
          </h3>
          <div className="space-y-6">
            {quizData?.questions?.map((q, qIndex) => {
              const userAnswer = selectedAnswers?.[qIndex];
              const isCorrect = userAnswer === q?.correctAnswer;

              return (
                <div key={q?.id} className="p-6 bg-muted/30 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                      ${isCorrect ? 'bg-accent/20' : 'bg-destructive/20'}
                    `}>
                      <Icon 
                        name={isCorrect ? "Check" : "X"} 
                        size={16} 
                        className={isCorrect ? 'text-accent' : 'text-destructive'}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-primary mb-4">
                        Question {qIndex + 1}: {q?.question}
                      </p>
                      <div className="space-y-2 mb-4">
                        {q?.options?.map((option, optIndex) => {
                          const isUserAnswer = userAnswer === optIndex;
                          const isCorrectAnswer = optIndex === q?.correctAnswer;

                          return (
                            <div
                              key={optIndex}
                              className={`
                                p-3 rounded-md border-2 transition-smooth
                                ${isCorrectAnswer 
                                  ? 'border-accent bg-accent/10' 
                                  : isUserAnswer 
                                    ? 'border-destructive bg-destructive/10' :'border-border bg-background'
                                }
                              `}
                            >
                              <div className="flex items-center gap-3">
                                {isCorrectAnswer && (
                                  <Icon name="CheckCircle2" size={16} className="text-accent flex-shrink-0" />
                                )}
                                {isUserAnswer && !isCorrectAnswer && (
                                  <Icon name="XCircle" size={16} className="text-destructive flex-shrink-0" />
                                )}
                                <span className={`
                                  text-sm
                                  ${isCorrectAnswer 
                                    ? 'text-accent font-medium' 
                                    : isUserAnswer 
                                      ? 'text-destructive' :'text-text-primary'
                                  }
                                `}>
                                  {option}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="p-4 bg-primary/10 rounded-md border-l-4 border-primary">
                        <p className="text-xs font-medium text-primary mb-2">Explication:</p>
                        <p className="text-sm text-text-primary leading-relaxed">
                          {q?.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name="HelpCircle" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-text-primary">
                {quizData?.title}
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                Question {currentQuestion + 1} sur {quizData?.questions?.length}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Icon name="Clock" size={14} />
            <span>{quizData?.timeLimit} min</span>
          </div>
        </div>

        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-smooth"
            style={{ width: `${((currentQuestion + 1) / quizData?.questions?.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h4 className="text-lg md:text-xl font-semibold text-text-primary mb-6">
          {currentQ?.question}
        </h4>

        <div className="space-y-3 mb-8">
          {currentQ?.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-smooth
                ${selectedAnswers?.[currentQuestion] === index
                  ? 'border-primary bg-primary/10' :'border-border bg-background hover:border-primary/50 hover:bg-muted/30'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                  ${selectedAnswers?.[currentQuestion] === index
                    ? 'border-primary bg-primary' :'border-border'
                  }
                `}>
                  {selectedAnswers?.[currentQuestion] === index && (
                    <Icon name="Check" size={14} className="text-primary-foreground" />
                  )}
                </div>
                <span className="text-sm md:text-base text-text-primary">
                  {option}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Précédent
          </Button>

          <div className="flex items-center gap-2">
            {quizData?.questions?.map((_, index) => (
              <div
                key={index}
                className={`
                  w-2 h-2 rounded-full transition-smooth
                  ${index === currentQuestion
                    ? 'bg-primary w-6'
                    : selectedAnswers?.[index] !== undefined
                      ? 'bg-accent' :'bg-muted'
                  }
                `}
              />
            ))}
          </div>

          {currentQuestion === quizData?.questions?.length - 1 ? (
            <Button
              variant="default"
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers)?.length !== quizData?.questions?.length}
              iconName="CheckCircle2"
              iconPosition="right"
            >
              Soumettre
            </Button>
          ) : (
            <Button
              variant="default"
              onClick={handleNext}
              disabled={selectedAnswers?.[currentQuestion] === undefined}
              iconName="ChevronRight"
              iconPosition="right"
            >
              Suivant
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveQuiz;