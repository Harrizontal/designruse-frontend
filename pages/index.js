import Head from 'next/head'
import React from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Subscribe from '../components/subscribe'

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section> */}
      {/* <Subscribe/> */}
      <div className={`${utilStyles.contentWrapper}`}>
        <div className={`${utilStyles.leftColumn}`}>
          <h1 className={`${utilStyles.heading2Xl}`}>Perusing the design within startup and everyday life in Singapore.</h1>
        </div>
        <div className={`${utilStyles.rightColumn}`}>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title,thumbnail_image,short_description }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href="/articles/[id]" as={`/articles/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                   <span>{short_description}</span> • <Date dateString={date}/> 
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
