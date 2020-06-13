import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2.5em 10%;
`;

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
