import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, selectProjectsState } from "../projectsSlice";
import { Section, SectionTitle } from "../../common/Section";
import { Tile, TileList, TileTitle, TileDescription, TileLink } from "./styled";

const Portfolio = () => {
    const dispatch = useDispatch();
    const { projects, status } = useSelector(selectProjectsState);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <Section>
            <SectionTitle>Portfolio</SectionTitle>
            <p>My recent projects from GitHub</p>

            {status === "loading" && <p>Loading... ⏳</p>}
            {status === "error" && <p>Error! ❌</p>}

            {status === "success" && (
                <TileList>
                    {projects.map(repo => (
                        <Tile key={repo.id}>
                            <TileTitle>{repo.name}</TileTitle>
                            <TileLinkContainer>
                                <LinkTitle>Code:</LinkTitle>
                                <Link href={repo.html_url} target="_blank" rel="noreferrer">
                                    {repo.html_url}
                                </Link>
                            </TileLinkContainer>
                        </Tile>
                    ))}
                </TileList>
            )}
        </Section>
    );
};

export default Portfolio;