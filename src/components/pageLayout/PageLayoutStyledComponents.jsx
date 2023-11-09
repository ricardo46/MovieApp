import styled from "@emotion/styled";
import {
  DASHBOARD_BACKGROUND_COLOR,
  DASHBOARD_MESSAGE_FONT_COLOR,
  DASHBOARD_LAPTOP_FONT_SIZE,
  DASHBOARD_MOBILE_FONT_SIZE,
  PAGE_BACKGROUND_COLOR,
  FONT_COLOR,
} from "../../globalVariables";
import { Message, StyledLink } from "../StyledComponents";

const PageContainer = styled.div`
  margin: 0;
  background-color: ${PAGE_BACKGROUND_COLOR};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  align-items: center;
`;

const DashBoard = styled.div`
  width: 100%;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem;
  box-sizing: border-box;
  position: sticky;
  z-index: 10;
  top: 0;
  /* height: 4rem; */
  overflow-x: hidden;
  background-color: ${DASHBOARD_BACKGROUND_COLOR};
`;

const DashBoardLinksContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  grid-template-columns: repeat(3, auto);
  gap: 0.3rem;
  @media (min-width: 690px) {
    gap: 0.5rem;
  }
`;

const DashBoardMessage = styled(Message)`
  margin: 0;
  padding: 0;
  color: ${DASHBOARD_MESSAGE_FONT_COLOR};
  grid-column-start: span 3;
  justify-self: end;
  font-size: ${DASHBOARD_MOBILE_FONT_SIZE};
`;

const PageHeader = styled.h3`
  color: ${FONT_COLOR};
  padding: 0;
  margin: 0;
  font-size: ${DASHBOARD_MOBILE_FONT_SIZE};
  font-weight: 300;

  @media (min-width: 690px) {
    font-size: ${DASHBOARD_LAPTOP_FONT_SIZE};
  }
`;

const DashBoardStyledLink = styled(StyledLink)`
  color: #0073ff;
  font-size: ${DASHBOARD_MOBILE_FONT_SIZE};
  padding-left: 0.3rem;
  @media (min-width: 690px) {
    font-size: ${DASHBOARD_LAPTOP_FONT_SIZE};
  }
`;

const HeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media (min-width: 690px) {
    gap: 0.5rem;
  }
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
