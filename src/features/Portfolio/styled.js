import styled from "styled-components";

export const TileList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Tile = styled.article`
  padding: 56px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.colors.tileShadow};
  border: 3px solid ${({ theme }) => theme.colors.tileBorder};

  &:hover {
    border: 5px solid ${({ theme }) => theme.colors.primary}4D;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 24px;
  }
`;

export const TileTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const TileLinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  margin-top: 24px;
  font-size: 18px;
`;

export const LinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}33;
  word-break: break-all;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;