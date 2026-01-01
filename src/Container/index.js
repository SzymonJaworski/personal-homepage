import styled from "styled-components";

export const Container = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    padding: 32px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 16px;
    }
`;