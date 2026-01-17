import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Data Analyst chez TechCorp",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16bdcd5d9-1763298436458.png",
    avatarAlt: "Professional headshot of French woman with shoulder-length brown hair wearing navy blazer and white blouse",
    rating: 5,
    content: "DataLearnHub a complètement transformé ma carrière. En 3 mois, je suis passée de débutante à analyste de données confirmée. Les exercices pratiques et le playground SQL sont exceptionnels !",
    achievement: "Certifiée SQL & NoSQL",
    date: "Décembre 2025"
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Développeur Full-Stack",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1134ccfa4-1763292342884.png",
    avatarAlt: "Professional headshot of French man with short dark hair and beard wearing gray suit and blue shirt",
    rating: 5,
    content: "La gamification rend l'apprentissage addictif. J'ai gagné plus de 5000 XP en un mois et j'ai enfin compris les concepts avancés de SQL que je trouvais difficiles auparavant.",
    achievement: "Top 10 du Classement",
    date: "Janvier 2026"
  },
  {
    id: 3,
    name: "Marie Lefebvre",
    role: "Étudiante en Informatique",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffa45897-1763297091863.png",
    avatarAlt: "Professional headshot of young French woman with long blonde hair wearing casual blue sweater",
    rating: 5,
    content: "Les mini-projets sont parfaits pour construire un portfolio. J\'ai décroché mon stage grâce aux compétences acquises sur DataLearnHub. L\'assistant IA est incroyablement utile !",
    achievement: "15 Projets Complétés",
    date: "Novembre 2025"
  },
  {
    id: 4,
    name: "Alexandre Rousseau",
    role: "Business Intelligence Consultant",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_181070bb8-1763292570282.png",
    avatarAlt: "Professional headshot of French man with glasses and short gray hair wearing formal black suit",
    rating: 5,
    content: "Après 10 ans dans le métier, j'ai découvert de nouvelles techniques grâce aux parcours avancés. La plateforme est parfaite pour la formation continue et le perfectionnement.",
    achievement: "Expert NoSQL Certifié",
    date: "Octobre 2025"
  },
  {
    id: 5,
    name: "Camille Bernard",
    role: "Data Scientist Junior",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14ffe18db-1763297881212.png",
    avatarAlt: "Professional headshot of French woman with curly dark hair wearing red blazer and white shirt",
    rating: 5,
    content: "L'approche pratique de DataLearnHub m'a permis de comprendre rapidement les concepts complexes. Les visualisations de données et les exercices de machine learning sont excellents.",
    achievement: "Niveau 8 Atteint",
    date: "Décembre 2025"
  },
  {
    id: 6,
    name: "Lucas Moreau",
    role: "Reconversion Professionnelle",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1830a5992-1763292451426.png",
    avatarAlt: "Professional headshot of French man with short brown hair wearing casual green shirt",
    rating: 5,
    content: "J'ai changé de carrière à 35 ans grâce à DataLearnHub. La progression structurée et le support de la communauté m'ont donné la confiance nécessaire pour réussir ma reconversion.",
    achievement: "Certification Complète",
    date: "Janvier 2026"
  }];


  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-4">
            <Icon name="MessageSquare" size={16} className="text-primary" />
            <span className="text-xs md:text-sm font-medium text-text-secondary">
              Témoignages
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
            Ce Que Disent Nos Apprenants
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto">
            Rejoignez des milliers de professionnels qui ont transformé leur carrière avec DataLearnHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-smooth shadow-md hover:shadow-xl">

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial?.rating })?.map((_, index) =>
              <Icon key={index} name="Star" size={16} className="text-warning fill-warning" />
              )}
              </div>

              <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed line-clamp-4">
                "{testimonial?.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Image
                src={testimonial?.avatar}
                alt={testimonial?.avatarAlt}
                className="w-12 h-12 rounded-full object-cover" />

                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-text-primary text-sm md:text-base truncate">
                    {testimonial?.name}
                  </div>
                  <div className="text-xs text-text-secondary truncate">
                    {testimonial?.role}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                  <Icon name="Award" size={12} className="text-accent" />
                  <span className="text-xs font-medium text-accent">
                    {testimonial?.achievement}
                  </span>
                </div>
                <span className="text-xs text-text-secondary">
                  {testimonial?.date}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-primary/10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="TrendingUp" size={24} className="text-primary" />
              <span className="text-2xl md:text-3xl font-bold text-text-primary">
                96% de Satisfaction
              </span>
            </div>
            <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto mb-6">
              Plus de 12,000 apprenants ont évalué positivement leur expérience sur DataLearnHub avec une moyenne de 4.9/5 étoiles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-accent">8,200+</div>
                <div className="text-xs md:text-sm text-text-secondary">Certifications Délivrées</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">92%</div>
                <div className="text-xs md:text-sm text-text-secondary">Taux de Complétion</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-warning">4.9/5</div>
                <div className="text-xs md:text-sm text-text-secondary">Note Moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;