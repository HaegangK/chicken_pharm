import styled from 'styled-components';
import DOMPurify from 'dompurify';

const DescriptionContainer = styled.div`
  margin: 5vh 7vw;
`;

const ChickenPharm = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.4;
  margin-top: 1.5vh;
`;

interface NewsDescriptionProps {
  description: string;
}

const NewsDescription = ({ description }: NewsDescriptionProps) => {
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <DescriptionContainer>
      <ChickenPharm>@chickenPharm</ChickenPharm>
      <Description dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </DescriptionContainer>
  );
};

export default NewsDescription;
