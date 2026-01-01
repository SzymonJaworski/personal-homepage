import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
`;

const ThemeSwitch = ({ isDarkMode, onClick }) => (
    <Wrapper>
        <Button onClick={onClick}>
            Dark mode {isDarkMode ? "on" : "off"}
        </Button>
    </Wrapper>
);

export default ThemeSwitch;