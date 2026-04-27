import styles from './AppPreview.module.css';

export default function AppPreview() {
  return (
    <section id="app-preview" className={styles.section}>
      <div className={styles.bgGlow}></div>
      <div className={styles.container}>
        <div className={`${styles.header} animate-fade-in-up`}>
          <div className={styles.headerBadge}>App Preview</div>
          <h2 className={styles.title}>
            See the <span className={styles.titleHighlight}>app in action</span>
          </h2>
          <p className={styles.subtitle}>
            Three simple steps from scanning to calling, all with complete privacy protection
          </p>
        </div>

        <div className={styles.phonesRow}>
          {/* Phone 1 - Home */}
          <div className={`${styles.phoneColumn} animate-fade-in-up animate-delay-1`}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneDynamic}></div>
              <div className={styles.phoneScreen}>
                <div className={styles.statusBar}>
                  <span className={styles.statusTime}>9:41</span>
                  <div className={styles.statusIcons}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><rect x="0" y="6" width="2.5" height="6" rx="0.5" opacity="0.4"/><rect x="3.5" y="4" width="2.5" height="8" rx="0.5" opacity="0.6"/><rect x="7" y="2" width="2.5" height="10" rx="0.5" opacity="0.8"/><rect x="10.5" y="0" width="2.5" height="12" rx="0.5"/></svg>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="white"><rect x="0.5" y="0.5" width="17" height="9" rx="2" stroke="white" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="4" rx="1" fill="white" opacity="0.5"/><rect x="2" y="2" width="11" height="6" rx="1" fill="#10b981"/></svg>
                  </div>
                </div>

                <div className={styles.screenBody}>
                  <div className={styles.homeHeader}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#10b981"/>
                      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.7"/>
                      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.7"/>
                      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.4"/>
                    </svg>
                    <div className={styles.homeTitle}>ScanYCall</div>
                    <div className={styles.homeAvatar}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="6" r="2.5" stroke="white" strokeWidth="1.2"/>
                        <path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className={styles.homeGreeting}>
                    <div className={styles.greetingText}>Good morning!</div>
                    <div className={styles.greetingSub}>Your car is protected</div>
                  </div>

                  <div className={styles.homeActions}>
                    <div className={`${styles.homeAction} ${styles.homeActionPrimary}`}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="4" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                        <rect x="14" y="4" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                        <rect x="4" y="14" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                        <rect x="14" y="14" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
                      </svg>
                      <span>Scan QR Code</span>
                    </div>
                    <div className={styles.homeAction}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.67 2.36a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.31 1.55.54 2.36.67A2 2 0 0122 16.92z" stroke="#10b981" strokeWidth="1.5"/>
                      </svg>
                      <span>Call History</span>
                    </div>
                    <div className={styles.homeAction}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="5" width="14" height="14" rx="2" stroke="#10b981" strokeWidth="1.5"/>
                        <rect x="8" y="8" width="3" height="3" rx="0.5" fill="#10b981"/>
                        <rect x="13" y="8" width="3" height="3" rx="0.5" fill="#10b981"/>
                        <rect x="8" y="13" width="3" height="3" rx="0.5" fill="#10b981"/>
                      </svg>
                      <span>My QR Code</span>
                    </div>
                    <div className={styles.homeAction}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="3" stroke="#10b981" strokeWidth="1.5"/>
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="#10b981" strokeWidth="1.5"/>
                      </svg>
                      <span>Settings</span>
                    </div>
                  </div>
                </div>

                <div className={styles.bottomTab}>
                  <div className={`${styles.tabItem} ${styles.tabActive}`}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M3 7.5L10 2l7 5.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V7.5z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className={styles.tabItem}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M15 15l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.tabItem}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.stepLabel}>Home Screen</div>
            <div className={styles.stepDesc}>Open the app and tap Scan</div>
          </div>

          {/* Flow Arrow 1 */}
          <div className={`${styles.flowArrow} animate-fade-in animate-delay-2`}>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <path d="M0 12h32M28 6l6 6-6 6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Phone 2 - Scanner */}
          <div className={`${styles.phoneColumn} ${styles.phoneCenter} animate-fade-in-up animate-delay-3`}>
            <div className={styles.stepNumber}>02</div>
            <div className={`${styles.phoneFrame} ${styles.phoneFrameCenter}`}>
              <div className={styles.phoneDynamic}></div>
              <div className={styles.phoneScreen}>
                <div className={styles.statusBar}>
                  <span className={styles.statusTime}>9:41</span>
                  <div className={styles.statusIcons}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><rect x="0" y="6" width="2.5" height="6" rx="0.5" opacity="0.4"/><rect x="3.5" y="4" width="2.5" height="8" rx="0.5" opacity="0.6"/><rect x="7" y="2" width="2.5" height="10" rx="0.5" opacity="0.8"/><rect x="10.5" y="0" width="2.5" height="12" rx="0.5"/></svg>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="white"><rect x="0.5" y="0.5" width="17" height="9" rx="2" stroke="white" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="4" rx="1" fill="white" opacity="0.5"/><rect x="2" y="2" width="11" height="6" rx="1" fill="#10b981"/></svg>
                  </div>
                </div>

                <div className={styles.scanScreen}>
                  <div className={styles.scanTitle}>Scan QR Code</div>
                  <div className={styles.scanSubtitle}>Point camera at car's QR sticker</div>

                  <div className={styles.scanViewfinder}>
                    <div className={styles.scanFrame}>
                      <div className={`${styles.scanCorner} ${styles.scanTL}`}></div>
                      <div className={`${styles.scanCorner} ${styles.scanTR}`}></div>
                      <div className={`${styles.scanCorner} ${styles.scanBL}`}></div>
                      <div className={`${styles.scanCorner} ${styles.scanBR}`}></div>
                      <div className={styles.scanLine}></div>
                    </div>
                  </div>

                  <div className={styles.scanHint}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="#10b981" strokeWidth="1.2"/>
                      <path d="M8 5v3M8 10h.01" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>Align QR code within the frame</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.stepLabel}>Scan QR Code</div>
            <div className={styles.stepDesc}>Point at the car's QR sticker</div>
          </div>

          {/* Flow Arrow 2 */}
          <div className={`${styles.flowArrow} animate-fade-in animate-delay-4`}>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <path d="M0 12h32M28 6l6 6-6 6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Phone 3 - Calling */}
          <div className={`${styles.phoneColumn} animate-fade-in-up animate-delay-5`}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneDynamic}></div>
              <div className={`${styles.phoneScreen} ${styles.phoneScreenCall}`}>
                <div className={`${styles.statusBar} ${styles.statusBarLight}`}>
                  <span className={styles.statusTime}>9:42</span>
                  <div className={styles.statusIcons}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><rect x="0" y="6" width="2.5" height="6" rx="0.5" opacity="0.4"/><rect x="3.5" y="4" width="2.5" height="8" rx="0.5" opacity="0.6"/><rect x="7" y="2" width="2.5" height="10" rx="0.5" opacity="0.8"/><rect x="10.5" y="0" width="2.5" height="12" rx="0.5"/></svg>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="white"><rect x="0.5" y="0.5" width="17" height="9" rx="2" stroke="white" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="4" rx="1" fill="white" opacity="0.5"/><rect x="2" y="2" width="11" height="6" rx="1" fill="#10b981"/></svg>
                  </div>
                </div>

                <div className={styles.callingScreen}>
                  <div className={styles.callingPulse}>
                    <div className={styles.pulseRing}></div>
                    <div className={styles.pulseRing}></div>
                    <div className={styles.callingAvatar}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="16" cy="11" r="5" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>

                  <div className={styles.callingName}>Car Owner</div>
                  <div className={styles.callingStatus}>
                    <span className={styles.callingDot}></span>
                    <span className={styles.callingDot}></span>
                    <span className={styles.callingDot}></span>
                    <span>Calling</span>
                  </div>

                  <div className={styles.privacyBadge}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1L2 3v2.5c0 2.75 1.7 5.35 4 6 2.3-.65 4-3.25 4-6V3L6 1z" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="1"/>
                    </svg>
                    <span>Number Protected</span>
                  </div>

                  <div className={styles.callActions}>
                    <div className={styles.callAction}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3v12M5 7l4-4 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={`${styles.callAction} ${styles.callEnd}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.67 2.36a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.31 1.55.54 2.36.67A2 2 0 0122 16.92z" stroke="white" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className={styles.callAction}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 1v5M9 12v5M1 9h5M12 9h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.stepLabel}>Call Owner</div>
            <div className={styles.stepDesc}>Connected with privacy protection</div>
          </div>
        </div>
      </div>
    </section>
  );
}
