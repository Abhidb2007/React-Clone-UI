import { motion } from 'framer-motion';
import styles from './Features.module.css';
import { featuresData } from '../../utils/content';

function Features() {
  return (
    <section className={styles.features} id="resources">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className={styles.kicker}>Designed for modern teams</p>
          <h2>Everything you need to stay aligned and ship faster.</h2>
        </motion.div>
        <div className={styles.grid}>
          {featuresData.map((feature) => (
            <motion.article
              key={feature.title}
              className={styles.card}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
