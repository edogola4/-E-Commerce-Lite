// src/components/Row.js
// --------------------------------------------------------------------
// Row Component
// A styled container row that provides a consistent layout with margin,
// box-shadow, border-radius, and a primary background color. This component
// can be reused throughout the application to wrap content sections.
// --------------------------------------------------------------------

import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  margin: 30px auto;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 var(--clr-primary-10);
  border-radius: 4px;
  background-color: var(--clr-primary-10);
  position: relative;
`;

export default Row;
