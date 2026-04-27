import styles from './Features.module.css';

export default function FeatureCard({ icon, color, title, description, delay }) {
  return (
    <div
      className={`${styles.card} animate-fade-in-up animate-delay-${Math.min(delay, 6)}`}
      style={{ '--card-color': color }}
    >
      <div className={styles.iconWrapper} style={{ background: `${color}15`, color }}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
