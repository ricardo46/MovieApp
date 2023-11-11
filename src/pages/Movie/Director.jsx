import {
  ImageAndTextContainer,
  SectionTitle,
  SmallImage,
  StyledInfo,
} from "../../components/StyledComponents";

const Director = ({ director }) => {
  return (
    <>
      {director && <SectionTitle>{`Director: ${director?.name}`}</SectionTitle>}
      {director && (
        <ImageAndTextContainer>
          <SmallImage src={director?.imageURL} />

          <StyledInfo>{director?.bio}</StyledInfo>
        </ImageAndTextContainer>
      )}
    </>
  );
};

export { Director };
