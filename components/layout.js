import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React from 'react'
import Subscribe from './subscribe'

const name = 'Designruse'
export const siteTitle = 'Designruse'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* <div> */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="All your information on design"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.header}>
        <nav className={styles.headerNav}>
          <h2 className={utilStyles.headingXl} style={{margin:0}}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
          <h2 className={utilStyles.headingXSm} style={{margin:0}}>
            <Link href="/about">
              <a className={utilStyles.colorInherit}>About</a>
            </Link>
          </h2>
          <h2 className={utilStyles.headingXSm} style={{margin:0}}>
            <Link href="/featured">
              <a className={utilStyles.colorInherit}>Sponser</a>
            </Link>
          </h2>
        </nav>
        <Subscribe/>
      </div>

      {/* <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header> */}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <h2 className={utilStyles.headingMd}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          </h2>
        </div>
      )}
    </div>
  )
}