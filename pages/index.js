import Head from "next/head";
import styled from "styled-components";
import { getSortedPostsData } from "../lib/posts";
import A from "../single-components/A";

const Wrapper = styled.div`
  .Link {
    display: block;
  }
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
              <A to={`posts/${id}`}>{`visit ${title}`}</A>
              {id}
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
