import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { heroStats } from '../../utils/content';

function Hero() {
  return (
    <section className={styles.hero} id="product">
      <div className={styles.grid}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className={styles.badge}>Productivity for remote teams</p>
          <h1 className={styles.heading}>
            Build stronger digital products with intuitive workflows.
          </h1>
          <p className={styles.lead}>
            Deliver high-quality experiences faster with a product system made for design, engineering, and growth teams.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryButton} type="button">
              Start free trial
            </button>
            <button className={styles.secondaryButton} type="button">
              See pricing
            </button>
          </div>
          <div className={styles.stats}>
            {heroStats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.figure
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className={styles.heroCard}>
            <div className={styles.heroGraphic} />
            <div className={styles.heroInfo}>
              <p className={styles.heroLabel}>Live preview</p>
              <h2 className={styles.heroCardTitle}>Dashboard insights</h2>
              <p className={styles.heroCardCopy}>
                Monitor active users, resource usage, and key trends in one elegant workspace.
              </p>
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

export default Hero;
