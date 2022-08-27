import { Example } from 'components';

import * as s from './home.styles';

const Home = () => {
  return (
    <s.Wrapper>
      <s.Title>
        diegosilvatech/template--<strong>react-ts</strong>
      </s.Title>
      <Example.Button />
    </s.Wrapper>
  );
};

export { Home };
