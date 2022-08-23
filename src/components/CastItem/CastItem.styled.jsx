import styled from 'styled-components';

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CastTitle = styled.h3`
  padding: 5px;
  font-weight: bold;
  text-align: center;
`;

export const CastText = styled.p`
  padding: 5px;
  text-align: center;
`;
