import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 32px;
  margin: 72px 0;
  box-shadow: ${({ theme }) => theme.colors.tileShadow};
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 16px;
    margin: 48px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0 0 32px;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  padding-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 32px;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textSecondary};

  &::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5em;
    margin-right: 16px;
    line-height: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;