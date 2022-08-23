import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GalleryItem = styled.li`
  border-radius: 2px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const GalleryLink = styled(Link)`
  width: 100%;

  object-fit: cover;
`;

export const GalleryImg = styled.img`
  /* width: 100%; */
  /* object-fit: cover; */
  height: 300px;
  margin: auto;
`;

export const GalleryTitle = styled.h3`
  padding: 10px;
  font-weight: bold;
`;
