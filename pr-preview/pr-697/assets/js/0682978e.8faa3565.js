"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7962],{84369:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=i(74848),o=i(28453),a=i(82879);const s={sidebar_position:6,slug:"/modeling/modular-models",description:"Modular Models"},r="Modular Models",d={id:"content/modeling/modular-models",title:"Modular Models",description:"Modular Models",source:"@site/docs/content/modeling/modular-models.mdx",sourceDirName:"content/modeling",slug:"/modeling/modular-models",permalink:"/pr-preview/pr-697/docs/modeling/modular-models",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/modular-models.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/modeling/modular-models",description:"Modular Models"},sidebar:"docs",previous:{title:"Testing Models",permalink:"/pr-preview/pr-697/docs/modeling/testing"},next:{title:"Building Blocks",permalink:"/pr-preview/pr-697/docs/modeling/building-blocks"}},l={},c=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"<code>fga.mod</code>",id:"fgamod",level:3},{value:"Modules",id:"modules",level:3},{value:"Type Extensions",id:"type-extensions",level:3},{value:"Example",id:"example",level:2},{value:"Core",id:"core",level:3},{value:"Issue tracking",id:"issue-tracking",level:3},{value:"Wiki",id:"wiki",level:3},{value:"<code>fga.mod</code>",id:"fgamod-1",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:3},{value:"Viewing the model",id:"viewing-the-model",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"modular-models",children:"Modular Models"}),"\n",(0,t.jsx)(a.ZE,{}),"\n",(0,t.jsx)(n.p,{children:"Modular models allows splitting your authorization module across multiple files and modules, improving upon some of the challenges that may be faced when operating an authorization model within a company, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A model can grow large and difficult to understand"}),"\n",(0,t.jsx)(n.li,{children:"As more teams begin to contribute to a model, the ownership boundaries may not be clear and code review processes might not scale"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["With modular models, a single model can be split across multiple files in a project. It can be organized in a way that makes sense for the project or teams collaborating on it, and it enables ownership for reviews to be expressed using a feature such as ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",children:"GitHub's"}),", ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/user/project/codeowners/",children:"GitLab's"})," or ",(0,t.jsx)(n.a,{href:"https://docs.gitea.com/usage/code-owners",children:"Gitea's"})," code owners."]}),"\n",(0,t.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,t.jsx)(n.h3,{id:"fgamod",children:(0,t.jsx)(n.code,{children:"fga.mod"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"fga.mod"})," is the project file for modular models. This file specifies the schema version for the final combined model and lists the individual files that make up the modular model."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"schema"})}),(0,t.jsx)(n.td,{children:"The schema version to be used for the combined model"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"contents"})}),(0,t.jsx)(n.td,{children:"The individual files that make up the modular model"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"modules",children:"Modules"}),"\n",(0,t.jsxs)(n.p,{children:["Modules are declared using the ",(0,t.jsx)(n.code,{children:"module"})," keyword in the DSL, and a module can be written across multiple files. A single file cannot have more than one module."]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, modules are stored as metadata but are not used by ",(0,t.jsx)(a.bU,{format:a.Ed.ShortForm}),". Module metadata will be used in upcoming features, such as applying authorization to writing and reading/querying tuples."]}),"\n",(0,t.jsx)(n.h3,{id:"type-extensions",children:"Type Extensions"}),"\n",(0,t.jsx)(n.p,{children:"As teams implement features, they might find that core types they are dependent upon might not contain all the realtions they need. However, it might not make sense for these relations to be owned by the owner of that type if they aren't needed across the system."}),"\n",(0,t.jsx)(n.p,{children:"To solve this, individual types can be extended within other modules to implement the relations needed."}),"\n",(0,t.jsx)(n.p,{children:"In order to allow this, there are certain requirements for type extension:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The extended type must exist"}),"\n",(0,t.jsx)(n.li,{children:"A single type can only be extended once per file"}),"\n",(0,t.jsx)(n.li,{children:"The relations added must not already exist, or be part of another type extension"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"In this example we'll look at how an authorization model for a SaaS compny with a issue tracking and wiki software could implement modular models."}),"\n",(0,t.jsx)(n.h3,{id:"core",children:"Core"}),"\n",(0,t.jsx)(n.p,{children:"It's likely there will be a core set of types owned by a team that manages the overall identity for the company, this would provide the basics usch as users, organizations and groups that can be used by each respective product area."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dsl.openfga",children:"module core\n\ntype user\n\ntype organization\n  relations\n    define member: [user]\n    define admin: [user]\n\ntype group\n  relations\n    define member: [user]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"issue-tracking",children:"Issue tracking"}),"\n",(0,t.jsxs)(n.p,{children:["In the issue tracking software we'd likely separate out the project and issue related types into separate files, we'll also extend the ",(0,t.jsx)(n.code,{children:"organization"})," type here so that we can add a relation specific to the issue tracking feature, which is the ability to authorize who can create a project."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dsl.openfga",children:"module issue-tracker\n\nextend type organization\n  relations\n    define can_create_project: admin\n\ntype project\n  relations\n    define organization: [organization]\n    define viewer: member from organization\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dsl.openfga",children:"module issue-tracker\n\ntype ticket\n  relations\n    define project: [project]\n    define owner: [user]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"wiki",children:"Wiki"}),"\n",(0,t.jsxs)(n.p,{children:["Our wiki model we'll handle in one file for now until it grows some more. Again, we'll also extend the ",(0,t.jsx)(n.code,{children:"organization"})," type here so that we can add a relation to track who can create a space."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dsl.openfga",children:"module wiki\n\nextend type organization\n  relations\n    define can_create_space: admin\n\n\ntype space\n  relations\n    define organization: [organization]\n    define can_view_pages: member from organization\n\ntype page\n  relations\n    define space: [space]\n    define owner: [user]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fgamod-1",children:(0,t.jsx)(n.code,{children:"fga.mod"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to deploy this model we'll need to create our ",(0,t.jsx)(n.code,{children:"fga.mod"})," manifest file, in here we'll set our schema version and list the individual module files that make up our model."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"schema: '1.2'\ncontents:\n  - core.fga\n  - issue-tracker/projects.fga\n  - issue-tracker//tickets.fga\n  - wiki.fga\n"})}),"\n",(0,t.jsx)(n.h3,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have our individual parts of the modular model, we're able to write this model to ",(0,t.jsx)(a.bU,{format:a.Ed.ShortForm})," and then run tests against it."]}),"\n",(0,t.jsx)(n.p,{children:"In order to write our model we need to use the CLI and run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"fga model write --store-id=$FGA_STORE_ID --file fga.mod\n"})}),"\n",(0,t.jsx)(n.p,{children:"We can then write tuples and query this model as you would expect with a singular file authorization model."}),"\n",(0,t.jsx)(a.dp,{relationshipTuples:[{user:"user:anne",relation:"admin",object:"organization:acme"},{user:"organization:acme",relation:"organization",object:"space:acme"},{user:"organization:acme",relation:"organization",object:"project:acme"}],skipSetup:!0,allowedLanguages:[a.NH.JS_SDK,a.NH.GO_SDK,a.NH.DOTNET_SDK,a.NH.PYTHON_SDK,a.NH.JAVA_SDK,a.NH.CLI,a.NH.CURL]}),"\n",(0,t.jsx)(a.ou,{user:"user:anne",relation:"can_create_space",object:"organization:acme",allowed:!0}),"\n",(0,t.jsx)(n.h3,{id:"viewing-the-model",children:"Viewing the model"}),"\n",(0,t.jsxs)(n.p,{children:["When viewing the combined model DSL via the CLI with ",(0,t.jsx)(n.code,{children:"fga model get --store-id=$FGA_STORE_ID"}),", the DSL will be annotated with comments defining the source module and file for types, relations and conditions."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if we look specifically at the ",(0,t.jsx)(n.code,{children:"organization"})," type we can see that the type is defined in the ",(0,t.jsx)(n.code,{children:"core.fga"})," file as part of the ",(0,t.jsx)(n.code,{children:"core"})," module, and then the ",(0,t.jsx)(n.code,{children:"can_create_project"})," relation is defined in ",(0,t.jsx)(n.code,{children:"issue-tracker/projects.fga"})," as part of the ",(0,t.jsx)(n.code,{children:"issuer-tracker"})," module and the ",(0,t.jsx)(n.code,{children:"can_create_space"})," relation is defined in the ",(0,t.jsx)(n.code,{children:"wiki.fga"})," file as part of the ",(0,t.jsx)(n.code,{children:"wiki"})," module."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dsl.openfga",children:"type organization # module: core, file: core.fga\n  relations\n    define admin: [user]\n    define member: [user] or admin\n    define can_create_project: admin # extended by: module: issue-tracker, file: issue-tracker/projects.fga\n    define can_create_space: admin # extended by: module: wiki, file: wiki.fga\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);