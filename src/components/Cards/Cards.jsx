import { motion } from 'framer-motion';
import styles from './Cards.module.css';
import { cardsData } from '../../utils/content';

function Cards() {
  return (
    <section className={styles.cards} id="company">
      <div className={styles.container}>
        <div className={styles.grid}>
          {cardsData.map((card, index) => (
            <motion.article
              key={card.title}
              className={styles.card}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className={styles.CardButton} type="button">
                {card.Button}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )    
      
}

export default Cards;
