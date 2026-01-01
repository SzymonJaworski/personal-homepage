import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightMode, darkMode } from "./theme";
import { selectIsDarkMode, fetchProjects, selectProjectsState, toggleDarkMode } from "./features/projectsSlice";
import { Container } from "./Container";
import Header from "./features/Header";
import Footer from "./features/Footer";
import ThemeSwitch from "./common/Section/ThemeSwitch";

import { Section, SectionTitle, List, ListItem } from "./common/Section/styled";
import { TileList, Tile, TileTitle, TileLinkContainer, LinkTitle, Link } from "./features/Portfolio/styled";

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const { projects, status } = useSelector(selectProjectsState);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const skills = ["React", "Redux Toolkit", "Redux-Saga", "React Router", "Styled Components", "Git", "TypeScript", "NPM"];
  const toLearn = ["Next.js", "React Query", "Cypress", "Node.js", "GraphQL", "Unit Testing"];

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyle />
      <Container>
        <ThemeSwitch isDarkMode={isDarkMode} onClick={() => dispatch(toggleDarkMode())} />
        <Header />

        <Section>
          <SectionTitle>My skillset includes 🛠️</SectionTitle>
          <List>
            {skills.map(skill => <ListItem key={skill}>{skill}</ListItem>)}
          </List>
        </Section>

        { }
        <Section>
          <SectionTitle>What I want to learn next 🚀</SectionTitle>
          <List>
            {toLearn.map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Section>

        <Section>
          <SectionTitle>Portfolio</SectionTitle>
          <p>My recent projects from GitHub</p>
          {status === "loading" && <p>Loading...</p>}
          {status === "success" && (
            <TileList>
              {projects.map(repo => (
                <Tile key={repo.id}>
                  <TileTitle>{repo.name}</TileTitle>
                  <TileLinkContainer>
                    <LinkTitle>Code:</LinkTitle>
                    <Link href={repo.html_url} target="_blank" rel="noreferrer">{repo.html_url}</Link>
                  </TileLinkContainer>
                </Tile>
              ))}
            </TileList>
          )}
        </Section>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;