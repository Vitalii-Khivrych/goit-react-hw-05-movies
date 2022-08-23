import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin-left: 15px;
  margin-bottom: 15px;
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: auto;
  border-radius: 5px;
  max-width: 330px;
`;

export const Box = styled.div`
  max-width: 600px;
  margin-left: 20px;
  padding: 5px;
`;

export const CardTitle = styled.h1`
  margin-bottom: 30px;
`;

export const SecondCardTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
`;

export const LinkWrap = styled.div`
  margin-left: 15px;
  margin-bottom: 20px;
`;

export const CardLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;

  margin-left: 26px;

  :not(:last-child) {
    margin-left: 0;
  }
  :hover {
    color: blue;
  }
`;
