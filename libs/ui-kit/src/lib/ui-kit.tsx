import styled from '@emotion/styled';
import { common } from "my-app/app/common";

const StyledUiKit = styled.div`
  color: pink;
`;
export function UiKit() {
    console.log('importing', common());
  return (
    <StyledUiKit>
      <h1>Welcome to UiKit!</h1>
    </StyledUiKit>
  );
}

export default UiKit;
