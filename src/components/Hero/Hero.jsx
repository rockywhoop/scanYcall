import styles from './Hero.module.css';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgGrid}></div>
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        <div className={styles.textSide}>
          <div className={`${styles.badge} animate-fade-in-up`}>
            <span className={styles.badgeDot}></span>
            Smart Parking Solution
          </div>

          <h1 className={`${styles.headline} animate-fade-in-up animate-delay-1`}>
            Park Smart,<br />
            <span className={styles.headlineGradient}>Stay Connected</span>
          </h1>

          <p className={`${styles.subheadline} animate-fade-in-up animate-delay-2`}>
            Place our QR code on your car windshield and let others reach you instantly
            with a masked call protecting your privacy while staying connected.
          </p>

          <div className={`${styles.buttons} animate-fade-in-up animate-delay-3`}>
            <button className={styles.primaryBtn} onClick={() => scrollToSection('app-preview')}>
              See How It Works
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.secondaryBtn} onClick={() => scrollToSection('features')}>
              Explore Features
            </button>
          </div>

          <div className={`${styles.trust} animate-fade-in-up animate-delay-4`}>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1z" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="1.2"/>
                <path d="M5.5 8l2 2 3.5-3.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Privacy First</span>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="1.2"/>
                <path d="M8 5v3l2 1" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Instant Connect</span>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="1.2"/>
                <path d="M5 8h6M8 5v6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>No App to Scan</span>
            </div>
          </div>
        </div>

        <div className={`${styles.phoneSide} animate-scale-in animate-delay-2`}>
          <div className={styles.phoneGlow}></div>
          <div className={styles.phone}>
            <div className={styles.phoneDynamic}></div>
            <div className={styles.phoneScreen}>
              {/* Status Bar */}
              <div className={styles.statusBar}>
                <span className={styles.statusTime}>9:41</span>
                <div className={styles.statusIcons}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><rect x="0" y="6" width="2.5" height="6" rx="0.5" opacity="0.4"/><rect x="3.5" y="4" width="2.5" height="8" rx="0.5" opacity="0.6"/><rect x="7" y="2" width="2.5" height="10" rx="0.5" opacity="0.8"/><rect x="10.5" y="0" width="2.5" height="12" rx="0.5"/></svg>
                  <svg width="20" height="10" viewBox="0 0 20 10" fill="white"><rect x="0.5" y="0.5" width="17" height="9" rx="2" stroke="white" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="4" rx="1" fill="white" opacity="0.5"/><rect x="2" y="2" width="11" height="6" rx="1" fill="#10b981"/></svg>
                </div>
              </div>

              {/* App Content */}
              <div className={styles.appContent}>
                <div className={styles.appHeader}>
                  <div className={styles.appLogo}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#10b981"/>
                      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.7"/>
                      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.7"/>
                      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.4"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.appGreeting}>Good morning</div>
                    <div className={styles.appUser}>Welcome back!</div>
                  </div>
                  <div className={styles.appAvatar}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.5"/>
                      <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                <div className={styles.quickActions}>
                  <div className={`${styles.actionCard} ${styles.actionPrimary}`}>
                    <div className={styles.actionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="4" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                        <rect x="14" y="4" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                        <rect x="4" y="14" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                        <rect x="14" y="14" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <span className={styles.actionLabel}>Scan QR</span>
                  </div>
                  <div className={styles.actionCard}>
                    <div className={styles.actionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.67 2.36a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.31 1.55.54 2.36.67A2 2 0 0122 16.92z" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className={styles.actionLabel}>History</span>
                  </div>
                  <div className={styles.actionCard}>
                    <div className={styles.actionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="5" width="14" height="14" rx="2" stroke="#10b981" strokeWidth="1.5"/>
                        <rect x="8" y="8" width="3" height="3" rx="0.5" fill="#10b981"/>
                        <rect x="13" y="8" width="3" height="3" rx="0.5" fill="#10b981"/>
                        <rect x="8" y="13" width="3" height="3" rx="0.5" fill="#10b981"/>
                      </svg>
                    </div>
                    <span className={styles.actionLabel}>My QR</span>
                  </div>
                </div>

                <div className={styles.recentSection}>
                  <div className={styles.recentTitle}>Recent Activity</div>
                  <div className={styles.recentItem}>
                    <div className={styles.recentDot}></div>
                    <div className={styles.recentInfo}>
                      <div className={styles.recentName}>Parking Alert</div>
                      <div className={styles.recentTime}>2 min ago</div>
                    </div>
                    <div className={styles.recentBadge}>New</div>
                  </div>
                  <div className={styles.recentItem}>
                    <div className={`${styles.recentDot} ${styles.recentDotGrey}`}></div>
                    <div className={styles.recentInfo}>
                      <div className={styles.recentName}>QR Scanned</div>
                      <div className={styles.recentTime}>1 hour ago</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className={styles.bottomNav}>
                <div className={`${styles.navItem} ${styles.navActive}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 7.5L10 2l7 5.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V7.5z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>Home</span>
                </div>
                <div className={styles.navItem}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="3" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="11.5" y="3" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="3" y="11.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="11.5" y="11.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>Scan</span>
                </div>
                <div className={styles.navItem}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 18c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
