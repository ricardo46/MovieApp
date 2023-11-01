import styled from "@emotion/styled";
import { StyledLink } from "../StyledComponents";

const PageContainer = styled.div`
  margin: 0;
  background-color: #2e2e2e;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  align-items: center;
  
`;

const DashBoard = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  position: sticky;
  z-index: 5;
  top: 0;
  height: 4rem;
  width: 100%;
  overflow-x: hidden;
  background-color: #313131b4;
`;

const DashBoardLinksContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 0.5rem;
`;

const DashBoardMessage = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 0.8rem;
  grid-column-start: span 3;
  justify-self: end;
`;

const PageHeader = styled.h3`
  color: white;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
`;

const DashBoardStyledLink = styled(StyledLink)`
  color: #0073ff;
`;

const HeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const OutletContainer = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  justify-content: center;
`;

export {
  DashBoardLinksContainer,
  PageContainer,
  DashBoard,
  PageHeader,
  DashBoardStyledLink,
  DashBoardMessage,
  HeadersContainer,
  OutletContainer,
};
