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
  overflow-x: hidden;
  background-color: ${DASHBOARD_BACKGROUND_COLOR};
`;

const DashBoardLinksAndUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  gap: 0.3rem;
  @media (min-width: 690px) {
    gap: 0.5rem;
  }
`;

const DashBoardLinksContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: start;
  justify-content: end;
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
  @media (min-width: 690px) {
    font-size: ${DASHBOARD_LAPTOP_FONT_SIZE};
  }
`;

const PageHeader = styled.h3`
  color: ${FONT_COLOR};
  padding: 0;
  margin: 0;
  font-size: ${DASHBOARD_MOBILE_FONT_SIZE};
  font-weight: 300;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 6rem;
  @media (min-width: 690px) {
    font-size: ${DASHBOARD_LAPTOP_FONT_SIZE};
    width: 20rem;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
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
  DashBoardLinksAndUserContainer,
};
