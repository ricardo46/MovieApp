import {
  ImageAndTextContainer,
  SectionTitle,
  SmallImage,
  StyledInfo,
} from "../../components/StyledComponents";

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
