"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7868],{71375:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(85893),n=t(11151);const r={title:"Modular Models",description:"Modular Models",slug:"modular-models-announcement",date:new Date("2024-04-21T00:00:00.000Z"),authors:"eharris",tags:["openfga","features"],image:"https://openfga.dev/img/og-rich-embed.png",hide_table_of_contents:!1},s="Release Candidate for Modular Models",i={permalink:"/pr-preview/pr-697/blog/modular-models-announcement",source:"@site/blog/modular-models-announcement.md",title:"Modular Models",description:"Modular Models",date:"2024-04-21T00:00:00.000Z",formattedDate:"April 21, 2024",tags:[{label:"openfga",permalink:"/pr-preview/pr-697/blog/tags/openfga"},{label:"features",permalink:"/pr-preview/pr-697/blog/tags/features"}],readingTime:1.79,hasTruncateMarker:!1,authors:[{name:"Ewan Harris",url:"https://github.com/ewanharris",imageURL:"/pr-preview/pr-697/img/blog/authors/ewan.jpg",key:"eharris"}],frontMatter:{title:"Modular Models",description:"Modular Models",slug:"modular-models-announcement",date:"2024-04-21T00:00:00.000Z",authors:"eharris",tags:["openfga","features"],image:"https://openfga.dev/img/og-rich-embed.png",hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"Fine Grained News - February 2024",permalink:"/pr-preview/pr-697/blog/fine-grained-news-2024-02"}},l={authorsImageUrls:[void 0]},d=[{value:"How to use it?",id:"how-to-use-it",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reach out!",id:"reach-out",level:2}];function u(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"Modular models aims to improve the model authoring experience when multiple teams are maintaining a model, such as:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"A model can grow large and difficult to understand"}),"\n",(0,a.jsx)(o.li,{children:"As more teams begin to contribute to a model, the ownership boundaries may not be clear and code review processes might not scale"}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["With modular models, a single model can be separated across multiple files allow grouping of types and conditions into modules. This means a model can more easily be organized in terms of team or organizational structure and by using a feature such as ",(0,a.jsx)(o.a,{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",children:"GitHub"})," or ",(0,a.jsx)(o.a,{href:"https://docs.gitlab.com/ee/user/project/codeowners/",children:"GitLab"})," code owners, it should become easier to ensure the owners of an portion of your model are correctly assigned to review it."]}),"\n",(0,a.jsx)(o.h2,{id:"how-to-use-it",children:"How to use it?"}),"\n",(0,a.jsx)(o.p,{children:"Modular models is currently shipped as experimental while we gather feedback, in order to try it out."}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Download the ",(0,a.jsx)(o.a,{href:"https://github.com/openfga/cli/releases/tag/v0.3.0-beta.1",children:"beta release"})," of the CLI","\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"With the CLI you will be able to write your modular model and test it against a store file you have, but you will not be able to write your model to any OpenFGA server that does not enable this feature."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["Download ",(0,a.jsx)(o.a,{href:"https://github.com/openfga/openfga/releases/tag/v1.5.1",children:"v1.5.1"})," of OpenFGA","\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["As this is currently in RC you will need to start OpenFGA with ",(0,a.jsx)(o.code,{children:"openfga run --experimental enable-modular-models"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["Check out the modular models sample store in the ",(0,a.jsx)(o.a,{href:"https://github.com/openfga/sample-stores/tree/main/stores/modular",children:"sample-stores repo"})]}),"\n",(0,a.jsx)(o.li,{children:"The latest version of VS Code contains support for modular models, so ensure you're updated"}),"\n",(0,a.jsxs)(o.li,{children:["Review the ",(0,a.jsx)(o.a,{href:"/docs/modeling/modular-models",children:"documentation for this feature"})]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,a.jsx)(o.p,{children:"We intend to move this feature out of RC within the next few weeks, so as we gather feedback we'll deal with any issues that arise and look to improve upon any areas of the developer experience as needed."}),"\n",(0,a.jsx)(o.p,{children:"Looking beyond the near term, modular models allows us to start evaluating other features such as per-module authorization (a.k.a FGA-on-FGA) that would allow providing restrictions on what applications can write tuples for or run queries against."}),"\n",(0,a.jsx)(o.h2,{id:"reach-out",children:"Reach out!"}),"\n",(0,a.jsx)(o.p,{children:"We want to learn how you use this feature and how we can improve it!"}),"\n",(0,a.jsxs)(o.p,{children:["Please reach out through our ",(0,a.jsx)(o.a,{href:"https://openfga.dev/community",children:"community channels"})," with any questions or feedback."]})]})}function h(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);