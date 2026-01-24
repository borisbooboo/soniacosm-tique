import { motion } from "framer-motion";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/pdg.jpg";
import teamMember3 from "@/assets/developpeur.jpg";

const teamMembers = [
  {
    name: "Sonia",
    role: "Fondatrice & Directrice",
    image: teamMember2,
    description: "Visionnaire passionnée par la beauté africaine",
  },
  {
    name: "Grâce",
    role: "Conseillère Beauté Senior",
    image: teamMember1,
    description: "Experte en soins du visage et du corps",
  },
  {
    name: "Boris tendjou",
    role: "ingenieur logiciel",
    image: teamMember3,
    description: "professionnel en technologie et innovation",
  },
];

const TeamSection = () => {
  return (
    <section className="section-luxury bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
            Notre Équipe
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Les <span className="text-gold-gradient">Expertes</span> Beauté
          </h2>
          <div className="divider-gold mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Une équipe dévouée à votre beauté, prête à vous conseiller et à vous accompagner 
            dans votre parcours vers une peau radieuse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-2">
                {member.name}
              </h3>
              <p className="font-body text-primary uppercase tracking-wider text-sm mb-3">
                {member.role}
              </p>
              <p className="font-body text-muted-foreground text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
