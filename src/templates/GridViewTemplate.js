import React from 'react';
import PageSidebar from 'templates/PageSidebar';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 50px 70px 50px 50px;
`;

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
    /* pierszy litera bedzie wielka w glownym opisie strony */
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridViewTemplate = ({ children, ewelina, arrayLength }) => (
  <PageSidebar ewelina={ewelina}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input placeholder="search" />
        <StyledHeading big as="h1">
          {ewelina}
        </StyledHeading>
        <StyledParagraph>{arrayLength} elements</StyledParagraph>
      </StyledPageHeader>
      <StyleGrid>{children}</StyleGrid>
    </StyledWrapper>
  </PageSidebar>
);

GridViewTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired, // tablica obiektów
  ewelina: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  arrayLength: PropTypes.number.isRequired,
};

GridViewTemplate.defaultProps = {
  ewelina: 'notes',
};
export default GridViewTemplate;

// walidacja powyzej
