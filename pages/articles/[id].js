import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import React from 'react'

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>

        <div className={`${utilStyles.contentWrapper}`}>
        <div className={`${utilStyles.leftColumn}`}>
          <h1 className={`${utilStyles.heading2Xl}`}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
        </div>
        <div className={`${utilStyles.rightColumn}`}>
          <article>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>  
        </div>
      </div>
      </Layout>
    )
  }

// getStaticPaths which returns an array of possible values for id
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

// getStaticProps which fetches necessary data for the post with id
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}

