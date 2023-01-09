import styled from "styled-components";

const Abc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.xl};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export default function LandingPage() {
  return (
    <>
      <Abc>LandingPage</Abc>
      <a href="/Login">
        <div>글작성</div>
      </a>
    </>
  );
}
