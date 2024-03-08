import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 20px 0;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface LocationInterface {
  state: {
    name: string;
    rank: number;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as LocationInterface;

  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading..'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
