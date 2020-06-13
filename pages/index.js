import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getSortedPostsData } from "../lib/posts";

const Wrapper = styled.div``;

const A = styled.a`
  display: block;
  cursor: pointer;
`;

export default function Home({ allPostsData }) {
  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id} style={{ marginBottom: "1em" }}>
              <Link as={`posts/${id}`} href="posts/[id]">
                <A>{`visit ${title}`}</A>
              </Link>

              <br />
              {date}
            </div>
          ))}
        </ul>
      </section>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
