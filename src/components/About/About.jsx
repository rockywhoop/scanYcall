import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Text Side */}
          <div className={`${styles.textSide} animate-slide-left`}>
            <h2 className={styles.title}>
              About <span className={styles.titleHighlight}>ScanYCall</span>
            </h2>
            <p className={styles.description}>
              ScanYCall is your smart parking communication solution. We provide personalized
              QR code stickers that you place on your car, allowing others to contact you
              instantly if there is a parking issue all while keeping your phone number private.
            </p>
            <p className={styles.description}>
              Whether someone needs you to move your car, has accidentally bumped it, or just
              needs to reach you for any parking-related matter, ScanYCall makes communication
              instant and secure.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statValue}>100%</div>
                <div className={styles.statLabel}>Privacy</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <div className={styles.statValue}>&lt;30s</div>
                <div className={styles.statLabel}>To Connect</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Available</div>
              </div>
            </div>
          </div>

          {/* Steps Side */}
          <div className={`${styles.stepsSide} animate-slide-right`}>
            <div className={styles.stepsContainer}>
              <div className={styles.stepsLine}></div>

              <div className={styles.step}>
                <div className={styles.stepDot}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="3" width="5" height="5" rx="1" stroke="white" strokeWidth="1.2"/>
                    <rect x="10" y="3" width="5" height="5" rx="1" stroke="white" strokeWidth="1.2"/>
                    <rect x="3" y="10" width="5" height="5" rx="1" stroke="white" strokeWidth="1.2"/>
                    <rect x="10" y="10" width="5" height="5" rx="1" stroke="white" strokeWidth="1.2"/>
                  </svg>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNum}>Step 1</div>
                  <h4 className={styles.stepTitle}>Get Your QR Sticker</h4>
                  <p className={styles.stepText}>
                    Register and receive your personalized QR code sticker to place on your car windshield.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepDot}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="2" width="12" height="14" rx="2" stroke="white" strokeWidth="1.2"/>
                    <circle cx="9" cy="7" r="2" stroke="white" strokeWidth="1.2"/>
                    <path d="M5 14v-1c0-2.2 1.8-4 4-4s4 1.8 4 4v1" stroke="white" strokeWidth="1.2"/>
                  </svg>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNum}>Step 2</div>
                  <h4 className={styles.stepTitle}>Someone Scans It</h4>
                  <p className={styles.stepText}>
                    When someone needs to reach you, they simply scan the QR code with their phone camera.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepDot}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16 12.5v2a1.5 1.5 0 01-1.64 1.5 14.85 14.85 0 01-6.47-2.3 14.63 14.63 0 01-4.5-4.5A14.85 14.85 0 011.09 2.64 1.5 1.5 0 012.58 1h2a1.5 1.5 0 011.5 1.29c.1.61.27 1.2.5 1.77a1.5 1.5 0 01-.34 1.58l-.85.85a12 12 0 004.5 4.5l.95-.95a1.5 1.5 0 011.58-.34c.57.23 1.16.4 1.77.5A1.5 1.5 0 0116 12.5z" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNum}>Step 3</div>
                  <h4 className={styles.stepTitle}>Get Called Privately</h4>
                  <p className={styles.stepText}>
                    You receive a masked call your number stays completely hidden. Resolve the issue instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
