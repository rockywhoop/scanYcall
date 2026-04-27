import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.bgOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>
      <div className={styles.container}>
        <div className={`${styles.content} animate-fade-in-up`}>
          <h2 className={styles.title}>Ready to Get Started?</h2>
          <p className={styles.description}>
            Join thousands of smart drivers who protect their privacy while staying connected.
            Get your QR sticker today or download our app when it launches.
          </p>

          <div className={styles.appButtons}>
            <div className={styles.appButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="white"/>
              </svg>
              <div className={styles.appButtonText}>
                <span className={styles.appButtonSmall}>Coming soon on</span>
                <span className={styles.appButtonBig}>App Store</span>
              </div>
            </div>
            <div className={styles.appButton}>
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
                <path d="M1 1.34L12.26 12 1 22.66V1.34zM14.68 9.58l-2.42 2.42 2.42 2.42L18.4 12l-3.72-2.42zM12.26 14.42L1 25.08l16.08-9.28-4.82-1.38zM1-1.08l16.08 9.28-4.82 1.38L1-1.08z" fill="white"/>
              </svg>
              <div className={styles.appButtonText}>
                <span className={styles.appButtonSmall}>Coming soon on</span>
                <span className={styles.appButtonBig}>Google Play</span>
              </div>
            </div>
          </div>

          <div className={styles.divider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerText}>or get notified</span>
            <span className={styles.dividerLine}></span>
          </div>

          <div className={styles.emailForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button className={styles.emailButton}>Notify Me</button>
          </div>

          <p className={styles.note}>
            We'll notify you when the mobile app launches. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
