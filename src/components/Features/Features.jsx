import FeatureCard from './FeatureCard';
import styles from './Features.module.css';

const features = [
  {
    id: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#10b981',
    title: 'Easy Setup',
    description: 'Get your personalized QR code sticker and place it on your car windshield. Setup takes less than a minute.',
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.67 2.36a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.31 1.55.54 2.36.67A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#6366f1',
    title: 'Instant Contact',
    description: 'Anyone can scan your QR code and call you directly if there is a parking issue, without needing your phone number.',
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 5.5v5c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12v-5L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#f59e0b',
    title: 'Privacy Protected',
    description: 'Your phone number stays private. All calls are masked to protect your personal information.',
  },
  {
    id: 4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#ec4899',
    title: 'Works Anywhere',
    description: 'Whether you are at home, work, or traveling stay reachable wherever you park.',
  },
  {
    id: 5,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="9" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#8b5cf6',
    title: 'Mobile App Coming',
    description: 'Our mobile application is under development to give you even more control and features on iOS & Android.',
  },
  {
    id: 6,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#14b8a6',
    title: 'Resolve Issues Fast',
    description: 'Enable quick communication to resolve parking conflicts before they escalate or result in tickets.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={`${styles.header} animate-fade-in-up`}>
          <h2 className={styles.title}>
            Everything you need for{' '}
            <span className={styles.titleHighlight}>smarter parking</span>
          </h2>
          <p className={styles.subtitle}>
            Simple, secure, and effective parking communication that protects your privacy
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              color={feature.color}
              title={feature.title}
              description={feature.description}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
