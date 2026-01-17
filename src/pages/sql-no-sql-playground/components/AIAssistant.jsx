import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AIAssistant = ({ isOpen, onClose, selectedDb }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Bonjour! Je suis votre assistant IA pour ${selectedDb?.toUpperCase()}. Comment puis-je vous aider aujourd'hui?`,timestamp: new Date()?.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const mockResponses = {
    mysql: {
      'join': "Pour effectuer une jointure en MySQL:\n\nSELECT users.username, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;\n\nUtilisez INNER JOIN pour les correspondances exactes, LEFT JOIN pour inclure tous les enregistrements de la table de gauche.",
      'group': "Pour regrouper des données:\n\nSELECT category, COUNT(*) as total\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 5;\n\nGROUP BY regroupe les lignes, HAVING filtre les groupes.",
      'default': "Je peux vous aider avec les requêtes SQL, les jointures, les agrégations, et plus encore. Posez-moi une question spécifique!"
    },
    mongodb: {
      'find': "Pour rechercher des documents:\n\ndb.users.find({ age: { $gte: 18 } })\n\nUtilisez des opérateurs comme $gte, $lte, $in, $regex pour des recherches avancées.",
      'aggregate': "Pour l'agrégation:\n\ndb.orders.aggregate([\n  { $match: { status: 'completed' } },\n  { $group: { _id: '$user_id', total: { $sum: '$amount' } } }\n])",
      'default': "Je peux vous aider avec les requêtes MongoDB, l'agrégation, les index, et plus encore!"
    },
    default: "Je suis là pour vous aider avec vos requêtes de base de données. Posez-moi une question!"
  };

  const handleSend = () => {
    if (!input?.trim()) return;

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()?.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const dbResponses = mockResponses?.[selectedDb] || mockResponses?.default;
      let response = dbResponses?.default;

      Object.keys(dbResponses)?.forEach(key => {
        if (input?.toLowerCase()?.includes(key)) {
          response = dbResponses?.[key];
        }
      });

      const assistantMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()?.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-1010" onClick={onClose} />
      <div className="fixed bottom-4 right-4 w-full max-w-md h-[500px] bg-card rounded-lg shadow-2xl z-1020 flex flex-col overflow-hidden md:bottom-6 md:right-6">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name="Bot" size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">Assistant IA</h3>
              <p className="text-xs text-text-secondary">{selectedDb?.toUpperCase()} Expert</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-muted transition-smooth"
          >
            <Icon name="X" size={18} className="text-text-secondary" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-custom p-4 space-y-4">
          {messages?.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message?.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${message?.role === 'user' ? 'bg-primary/20' : 'bg-accent/20'}
              `}>
                <Icon 
                  name={message?.role === 'user' ? 'User' : 'Bot'} 
                  size={16} 
                  className={message?.role === 'user' ? 'text-primary' : 'text-accent'}
                />
              </div>
              <div className={`flex-1 ${message?.role === 'user' ? 'text-right' : ''}`}>
                <div className={`
                  inline-block px-4 py-2 rounded-lg text-sm
                  ${message?.role === 'user' ?'bg-primary text-primary-foreground' :'bg-muted text-text-primary'
                  }
                `}>
                  <pre className="whitespace-pre-wrap font-sans">{message?.content}</pre>
                </div>
                <div className="text-xs text-text-secondary mt-1">{message?.timestamp}</div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Icon name="Bot" size={16} className="text-accent" />
              </div>
              <div className="bg-muted px-4 py-2 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Posez une question..."
              value={input}
              onChange={(e) => setInput(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleSend()}
              className="flex-1"
            />
            <Button
              variant="default"
              size="default"
              onClick={handleSend}
              disabled={!input?.trim() || isTyping}
              iconName="Send"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;