import React from "react";
import {Layout} from "../../components";
import {Curriculum} from "../../components/curriculum/curriculum";
import {graphql, PageProps} from "gatsby";
import {MarkdownContent} from "../../components/MarkdownContent";
import {GroupBox} from "react95";
import {SkillsView} from "../../components/curriculum/skills-view";

export const SkillsPage: React.FC<PageProps<Queries.SkillQuery>> = ({data}) => {
    const frontMatter = data?.allMarkdownRemark.edges[0]?.node.frontmatter;
    return (
        <Layout>
            <Curriculum
                title=""
                aboutMe=""
                skillsDescription=""
                skillsByTimeJson="[]"
                skillsByScoreJson="[]"
                links="[]"
                training="[]"
                monitorImage="">
                <>
                    <MarkdownContent>{frontMatter?.skillsDescription ?? '-'}</MarkdownContent>
                    <hr/>
                    <img src='./assets/wordcloud.svg'/>
                    <hr/>
                    <GroupBox label='Timed Skills'>
                        <SkillsView skillsJson={frontMatter?.skillsByTime ?? '-'}/>
                    </GroupBox>
                    <GroupBox label='Scored Skills'>
                        <SkillsView skillsJson={frontMatter?.skillsByScore ?? '-'}/>
                    </GroupBox>
                </>
            </Curriculum>
        </Layout>
    );
}

export const skillsQuery = graphql`
query Skill {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "curriculum"}}}) {
    edges {
      node {
        frontmatter {
          skillsDescription
          skillsByTime
          skillsByScore
        }
      }
    }
  }
}
`;


export default SkillsPage