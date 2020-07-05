import React from "react";

import PageTemplate from '../components/PageTemplate';
import ProjectHeader from '../components/project-header';
import SEO from "../components/seo";
import '../components/index.css';
import '../components/project.scss';

function Project({ title, date, description, team, role, context, techs, featuredimage, award, children }) {

  return (
  <>
    <SEO title={title} keywords={[`portfolio`, `website`, `huapaya`, `development`]} />
    <PageTemplate>
      <div className="page-content project-content page-section">
        <div>
          <ProjectHeader
            title={title}
            date={date}
            description={description}
            team={team}
            role={role}
            context={context}
            techs={techs}
            featuredimage={featuredimage}
            award={award}
          />

          <div className="project-content--html">
            {children}
          </div>

        </div>
      </div>
    </PageTemplate>
  </>
  )
}


export default Project;
