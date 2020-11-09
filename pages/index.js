import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Date from "../components/date";
import utilStyle from "../styles/utils.module.css";
import { getStoredPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getStoredPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>...</Head>
      <section className={utilStyle.headingMd}>...</section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={utilStyle.headingLg}>Blog</h2>
        <ul className={utilStyle.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyle.listItem}>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
