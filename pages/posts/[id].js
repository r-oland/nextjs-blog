// Components==============
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../single-components/Date";
// =========================

const Wrapper = styled.div``;

const A = styled.a`
  display: block;
  font-size: 20px;
  cursor: pointer;
`;

export default function Post({ postData }) {
  return (
    <Wrapper>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Link href="/">
        <A>Back to home</A>
      </Link>
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
