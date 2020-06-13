// Components==============
import Head from "next/head";
import styled from "styled-components";
import { getAllPostIds, getPostData } from "../../lib/posts";
import A from "../../single-components/A";
import Date from "../../single-components/Date";

// =========================

const Wrapper = styled.div`
  .Link {
    display: block;
    font-size: 20px;
  }
`;

export default function Post({ postData }) {
  return (
    <Wrapper>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <A to="/">Back to home</A>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Wrapper>
  );
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return {
    props: { postData },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};
