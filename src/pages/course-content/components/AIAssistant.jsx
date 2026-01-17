import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Bonjour! Je suis votre assistant d'apprentissage IA. Je peux vous aider à comprendre les concepts SQL, expliquer les erreurs dans votre code, ou répondre à vos questions. Comment puis-je vous aider aujourd'hui?",
      timestamp: new Date(Date.now() - 300000)
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "Qu\'est-ce qu\'une clé primaire?",
    "Comment utiliser JOIN?",
    "Expliquer WHERE vs HAVING",
    "Différence entre INNER et LEFT JOIN"
  ];

  const handleSendMessage = () => {
    if (inputMessage?.trim()) {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        content: inputMessage,
        timestamp: new Date()
      };

      setMessages([...messages, userMessage]);
      setInputMessage('');
      setIsTyping(true);

      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          type: 'assistant',
          content: generateAIResponse(inputMessage),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const generateAIResponse = (question) => {
    const responses = {
      "clé primaire": "Une clé primaire est un identifiant unique pour chaque enregistrement dans une table. Elle garantit que chaque ligne peut être identifiée de manière unique et ne peut pas contenir de valeurs nulles. Par exemple:\n\nCREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100)\n);\n\nIci, 'id' est la clé primaire qui identifie uniquement chaque utilisateur.",
      "join": "Les JOIN permettent de combiner des données de plusieurs tables. Il existe plusieurs types:\n\n• INNER JOIN: Retourne uniquement les lignes avec correspondances dans les deux tables\n• LEFT JOIN: Retourne toutes les lignes de la table de gauche\n• RIGHT JOIN: Retourne toutes les lignes de la table de droite\n• FULL JOIN: Retourne toutes les lignes des deux tables\n\nExemple:\nSELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;",
      "where": "WHERE et HAVING sont tous deux utilisés pour filtrer, mais:\n\n• WHERE: Filtre les lignes AVANT le regroupement (GROUP BY)\n• HAVING: Filtre les groupes APRÈS le regroupement\n\nExemple:\nSELECT city, COUNT(*) as total\nFROM customers\nWHERE country = 'France'\nGROUP BY city\nHAVING COUNT(*) > 5;\n\nWHERE filtre les pays, HAVING filtre les villes avec plus de 5 clients.",
      "inner left": "INNER JOIN vs LEFT JOIN:\n\n• INNER JOIN: Ne retourne que les lignes avec correspondances dans les DEUX tables\n• LEFT JOIN: Retourne TOUTES les lignes de la table de gauche, même sans correspondance\n\nExemple:\n-- INNER JOIN (seulement les clients avec commandes)\nSELECT * FROM customers\nINNER JOIN orders ON customers.id = orders.customer_id;\n\n-- LEFT JOIN (tous les clients, avec ou sans commandes)\nSELECT * FROM customers\nLEFT JOIN orders ON customers.id = orders.customer_id;"
    };

    const lowerQuestion = question?.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion?.includes(key)) {
        return response;
      }
    }

    return "C'est une excellente question! Pour mieux vous aider, pourriez-vous préciser votre question? Vous pouvez également consulter la documentation du cours ou essayer l'un des exemples de questions rapides ci-dessous.";
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const formatTimestamp = (date) => {
    return new Date(date)?.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <Button
        variant="default"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-1000 w-14 h-14 rounded-full shadow-lg lg:hidden"
      >
        <Icon name="Bot" size={24} />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-1010 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-card shadow-2xl z-1020 lg:hidden flex flex-col">
            <MobileAssistantContent 
              messages={messages}
              isTyping={isTyping}
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              handleSendMessage={handleSendMessage}
              quickQuestions={quickQuestions}
              handleQuickQuestion={handleQuickQuestion}
              formatTimestamp={formatTimestamp}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </>
      )}

      <div className="hidden lg:block bg-card rounded-lg shadow-md overflow-hidden h-full flex flex-col">
        <DesktopAssistantContent 
          messages={messages}
          isTyping={isTyping}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
          quickQuestions={quickQuestions}
          handleQuickQuestion={handleQuickQuestion}
          formatTimestamp={formatTimestamp}
        />
      </div>
    </>
  );
};

const MobileAssistantContent = ({
  messages,
  isTyping,
  inputMessage,
  setInputMessage,
  handleSendMessage,
  quickQuestions,
  handleQuickQuestion,
  formatTimestamp,
  onClose
}) => {
  return (
    <>
      <div className="p-4 border-b border-border flex items-center justify-between bg-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Icon name="Bot" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-text-primary">
              Assistant IA
            </h3>
            <p className="text-xs text-accent flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              En ligne
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
        >
          <Icon name="X" size={20} />
        </Button>
      </div>

      <AssistantMessages 
        messages={messages}
        isTyping={isTyping}
        formatTimestamp={formatTimestamp}
      />

      <AssistantInput 
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
        quickQuestions={quickQuestions}
        handleQuickQuestion={handleQuickQuestion}
      />
    </>
  );
};

const DesktopAssistantContent = ({
  messages,
  isTyping,
  inputMessage,
  setInputMessage,
  handleSendMessage,
  quickQuestions,
  handleQuickQuestion,
  formatTimestamp
}) => {
  return (
    <>
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Icon name="Bot" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-text-primary">
              Assistant IA
            </h3>
            <p className="text-xs text-accent flex items-center gap-1 mt-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              En ligne
            </p>
          </div>
        </div>
      </div>

      <AssistantMessages 
        messages={messages}
        isTyping={isTyping}
        formatTimestamp={formatTimestamp}
      />

      <AssistantInput 
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
        quickQuestions={quickQuestions}
        handleQuickQuestion={handleQuickQuestion}
      />
    </>
  );
};

const AssistantMessages = ({ messages, isTyping, formatTimestamp }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scrollbar-custom">
      {messages?.map((message) => (
        <div
          key={message?.id}
          className={`flex gap-3 ${message?.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
            ${message?.type === 'user' ?'bg-primary/20' :'bg-gradient-to-br from-primary to-accent'
            }
          `}>
            <Icon 
              name={message?.type === 'user' ? 'User' : 'Bot'} 
              size={16} 
              className={message?.type === 'user' ? 'text-primary' : 'text-white'}
            />
          </div>
          <div className={`flex-1 ${message?.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`
              inline-block p-3 rounded-lg max-w-[85%]
              ${message?.type === 'user' ?'bg-primary text-primary-foreground' :'bg-muted/50 text-text-primary'
              }
            `}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {message?.content}
              </p>
            </div>
            <p className="text-xs text-text-secondary mt-1">
              {formatTimestamp(message?.timestamp)}
            </p>
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
            <Icon name="Bot" size={16} className="text-white" />
          </div>
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AssistantInput = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
  quickQuestions,
  handleQuickQuestion
}) => {
  return (
    <div className="p-4 md:p-6 border-t border-border bg-card">
      <div className="mb-3">
        <p className="text-xs text-text-secondary mb-2">Questions rapides:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions?.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/70 text-text-primary rounded-full transition-smooth"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e?.target?.value)}
          onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
          placeholder="Posez votre question..."
          className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
        />
        <Button
          variant="default"
          size="icon"
          onClick={handleSendMessage}
          disabled={!inputMessage?.trim()}
        >
          <Icon name="Send" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default AIAssistant;