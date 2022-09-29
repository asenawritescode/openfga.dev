"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7647],{34839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),o=n(5270);const r={sidebar_position:3,slug:"/interacting/managing-group-access"},l="Managing Group Access",s={unversionedId:"content/interacting/managing-group-access",id:"content/interacting/managing-group-access",title:"Managing Group Access",description:"In this guide you will learn how to give a group of users access to a particular object.",source:"@site/docs/content/interacting/managing-group-access.mdx",sourceDirName:"content/interacting",slug:"/interacting/managing-group-access",permalink:"/docs/interacting/managing-group-access",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/managing-group-access.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/interacting/managing-group-access"},sidebar:"docs",previous:{title:"Managing User Access",permalink:"/docs/interacting/managing-user-access"},next:{title:"Managing Group Membership",permalink:"/docs/interacting/managing-group-membership"}},p={},c=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Adding Company To The Document",id:"01-adding-company-to-the-document",level:3},{value:"02. Adding Employee To The Company",id:"02-adding-employee-to-the-company",level:3},{value:"03. Checking An Individual Member&#39;s Access To An Object",id:"03-checking-an-individual-members-access-to-an-object",level:3},{value:"Related Sections",id:"related-sections",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-group-access"},"Managing Group Access"),(0,i.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"In this guide you will learn how to give a group of users access to a particular object."),(0,i.kt)(o.S1,{title:"When to use",appearance:"filled",description:(0,i.kt)("div",null,(0,i.kt)("p",null,"Adding a relationship tuple specifying that a group has a relation to an object is helpful in cases where you want to encompass a set of users with the same relation to an object. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grant a group of ",(0,i.kt)("inlineCode",{parentName:"li"},"engineers")," ",(0,i.kt)("inlineCode",{parentName:"li"},"viewer")," access to ",(0,i.kt)("inlineCode",{parentName:"li"},"roadmap.doc")),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"block_list")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"members")," who can't access a ",(0,i.kt)("inlineCode",{parentName:"li"},"document")),(0,i.kt)("li",{parentName:"ul"},"Sharing a ",(0,i.kt)("inlineCode",{parentName:"li"},"document")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"team")),(0,i.kt)("li",{parentName:"ul"},"Granting ",(0,i.kt)("inlineCode",{parentName:"li"},"viewer")," access to a ",(0,i.kt)("inlineCode",{parentName:"li"},"photo")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"followers")," only"),(0,i.kt)("li",{parentName:"ul"},"Making a ",(0,i.kt)("inlineCode",{parentName:"li"},"file")," viewable for all ",(0,i.kt)("inlineCode",{parentName:"li"},"users")," within an ",(0,i.kt)("inlineCode",{parentName:"li"},"organization")),(0,i.kt)("li",{parentName:"ul"},"Restricting access from or to ",(0,i.kt)("inlineCode",{parentName:"li"},"users")," in a certain ",(0,i.kt)("inlineCode",{parentName:"li"},"locale")))),mdxType:"CardBox"}),(0,i.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,i.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,i.kt)(o.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("p",null,"Assume that you have the following ",(0,i.kt)(o.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,i.kt)("br",null),"\nYou have two ",(0,i.kt)(o.uH,{section:"what-is-a-type",linkName:"types",mdxType:"ProductConcept"}),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"company")," that can have a ",(0,i.kt)("inlineCode",{parentName:"li"},"employee")," relation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document")," that can have a ",(0,i.kt)("inlineCode",{parentName:"li"},"reader")," relation."))),(0,i.kt)(o.lG,{configuration:{type_definitions:[{type:"company",relations:{employee:{this:{}}}},{type:"document",relations:{reader:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In addition, you will need to know the following:"),(0,i.kt)("h3",{id:"modeling-user-groups"},"Modeling User Groups"),(0,i.kt)("p",null,"You need to know how to add users to groups and grant groups access to an object. ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/user-groups"},"Learn more \u2192")),(0,i.kt)("h3",{id:"-concepts"},(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)(o.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})))),(0,i.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,i.kt)("h3",{id:"01-adding-company-to-the-document"},"01. Adding Company To The Document"),(0,i.kt)("p",null,"If we want to have every ",(0,i.kt)("inlineCode",{parentName:"p"},"employee")," of a type ",(0,i.kt)("inlineCode",{parentName:"p"},"company")," have a ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," relationship with a particular object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"document:planning"),"), we need to add a tuple like so:"),(0,i.kt)(o.Wz,{relationshipTuples:[{_description:"Every employee in the company can read document:planning",user:"company:xyz#employee",relation:"reader",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,i.kt)("h3",{id:"02-adding-employee-to-the-company"},"02. Adding Employee To The Company"),(0,i.kt)("p",null,"If we also write a tuple that says that Anne is a ",(0,i.kt)("inlineCode",{parentName:"p"},"employee")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"company:xyz"),", like so:"),(0,i.kt)(o.Gb,{relationshipTuples:[{user:"anne",relation:"employee",object:"company:xyz"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("h3",{id:"03-checking-an-individual-members-access-to-an-object"},"03. Checking An Individual Member's Access To An Object"),(0,i.kt)("p",null,"Then a call to the Check API to see whether Anne can read ",(0,i.kt)("inlineCode",{parentName:"p"},"document:planning")," will return true:"),(0,i.kt)(o.uT,{user:"anne",relation:"reader",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"The same check for a different user Becky, however, will return false, because Becky does not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"employee")," relationship with ",(0,i.kt)("inlineCode",{parentName:"p"},"company:xyz"),":"),(0,i.kt)(o.uT,{user:"becky",relation:"reader",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(o.$q,{description:"Check the following sections for more on how to model group.",relatedLinks:[{title:"Modeling User Groups",description:"Learn about how to model users and groups.",link:"../modeling/user-groups",id:"../modeling/user-groups.mdx"},{title:"Managing Group Membership",description:"Learn about managing group membership.",link:"./managing-group-membership",id:"./managing-group-membership.mdx"}],mdxType:"RelatedSection"}))}u.isMDXComponent=!0}}]);