import styled from "styled-components";

const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    align-items: center;
    margin-top: 115px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
        margin-top: 32px;
    }
`;

const Image = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 132px;
        height: 132px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
`;

const Caption = styled.span`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 12px 0;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const Description = styled.p`
    font-size: 20px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 32px; 
`;

const ButtonLink = styled.a`
    display: inline-flex; 
    align-items: center;
    gap: 16px; 
    padding: 12px 16px; 
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px; 
    border-radius: 4px;
    transition: 0.3s;
    
    &:hover { 
        filter: brightness(1.2); 
        transform: scale(1.02); 
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;

const Header = () => (
    <Wrapper>
        { }
        <Image src="" alt="Szymon Jaworski" />
        <Content>
            <Caption>This is</Caption>
            <Title>Szymon Jaworski</Title>
            <Description>
                👨‍💻 Passionate Frontend Developer dedicated to creating interactive
                web applications with React. I focus on delivering clean,
                maintainable code and solving complex technical challenges
                through modern development practices.
            </Description>
            <ButtonLink href="mailto:jaworski10293@gmail.com">
                { }
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Hire me
            </ButtonLink>
        </Content>
    </Wrapper>
);

export default Header;