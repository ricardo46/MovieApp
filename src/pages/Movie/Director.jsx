import {
  ImageAndTextContainer,
  SectionTitle,
  SmallImage,
  StyledInfo,
} from "../../components/StyledComponents";
import { currentPageIsMovie } from "../../components/PageLayout/PageLayoutUtils";

const Director = ({ director }) => {
  return (
    <>
      <SectionTitle>{`Director: ${director?.name}`}</SectionTitle>
      <ImageAndTextContainer>
        <SmallImage src={director?.imageURL} />

        <StyledInfo>{director?.bio}</StyledInfo>
      </ImageAndTextContainer>
    </>
  );
};

export { Director };
