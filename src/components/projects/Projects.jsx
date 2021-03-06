import { Section, SectionTitle, SectionDivider } from "../common/CommonStyles";
import { ProjectCase, ProjectContainer, Img, TextContainer, ProjectTitle, ProjectDescription, ProjectStack, ProjectLinks, ProjectLink } from "./ProjectStyles";
import projects from "../../data/projects";
import Logo from '../common/Logo'

const Projects = () => (
    <>
    <SectionDivider id="projects"/>
    <Section>
        <SectionTitle>Projects</SectionTitle>
        <ProjectCase>
            {projects.map(({title, description, image, stack, links}) => (
                <ProjectContainer>
                    <TextContainer>
                    <ProjectTitle>{title}</ProjectTitle> 
                    <ProjectDescription>
                        {description}
                    </ProjectDescription>
                    </TextContainer>
                    <ProjectStack>
                        {stack.map(s => (<Logo name={s} size={4}/>))}
                    </ProjectStack>
                    <ProjectLinks>
                        {links.map(l => (<a href={l.link}><Logo name={l.name} size={4}/></a>))}
                    </ProjectLinks>
                    <Img src={image}/>
                </ProjectContainer>    
            ))}
        </ProjectCase>
    </Section>
    </>
);

export default Projects;