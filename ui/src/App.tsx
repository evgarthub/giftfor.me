import React, { useMemo, useState } from 'react';
import { TextInput } from './components/TextInput';
import { PasswordInput } from './components/PasswordInput';
import AuthorizationService from './client/services/authorizationService';
import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

const Row = styled.div`
  margin-bottom: 10px;
`

const App = () => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const hasRequiredData = useMemo(() => {
    return !!email && !!username && !!password;
  }, [email, username, password]);

  const handleClick = () => {
    if (hasRequiredData) {
      const auth = AuthorizationService.register({ email, username, password });
    }
  };

  return (
    <StyledApp>
      <FormBox>
        <Row>
          <TextInput onChange={setEmail} value={email} label='email' />
        </Row>
        <Row>
          <TextInput onChange={setUsername} value={username} label='user name' />
        </Row>
        <Row>
          <PasswordInput onChange={setPassword} value={password} label='password' />
        </Row>

        <button disabled={!hasRequiredData} onClick={handleClick}>Register</button>
      </FormBox>
    </StyledApp>
  );
};

export default App;
