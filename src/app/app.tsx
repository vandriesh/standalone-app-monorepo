import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { UiKit } from '@my-org/ui-kit';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <UiKit />
    </StyledApp>
  );
}

export default App;
