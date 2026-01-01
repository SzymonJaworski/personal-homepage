import styled from "styled-components";

export const Section = styled.section`
    background: ${({ theme }) => theme.colors.tileBackground};
    padding: 32px;
    margin-top: 72px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
`;

export const SectionTitle = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    list-style: none;
    padding: 0;
    margin-top: 32px;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 18px;

    &::before {
        content: "•";
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 8px;
    }
`;