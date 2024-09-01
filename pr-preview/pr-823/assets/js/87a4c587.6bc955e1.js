"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9952],{26279:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=o(74848),i=o(28453),n=o(36289);const r={sidebar_position:8,slug:"/modeling/blocklists",description:"Preventing certain users from accessing objects"},a="Blocklists",c={id:"content/modeling/blocklists",title:"Blocklists",description:"Preventing certain users from accessing objects",source:"@site/docs/content/modeling/blocklists.mdx",sourceDirName:"content/modeling",slug:"/modeling/blocklists",permalink:"/pr-preview/pr-823/docs/modeling/blocklists",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/blocklists.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/modeling/blocklists",description:"Preventing certain users from accessing objects"},sidebar:"docs",previous:{title:"Parent-Child Objects",permalink:"/pr-preview/pr-823/docs/modeling/parent-child"},next:{title:"Public Access",permalink:"/pr-preview/pr-823/docs/modeling/public-access"}},l={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Modify Our Model So Users Can Be Blocked From Accessing A Document",id:"01-modify-our-model-so-users-can-be-blocked-from-accessing-a-document",level:3},{value:"02. Modify Our Model So Users Who Are Blocked Can No Longer Edit The Document",id:"02-modify-our-model-so-users-who-are-blocked-can-no-longer-edit-the-document",level:3},{value:"03. Verify Our Solution Works",id:"03-verify-our-solution-works",level:3},{value:"a. Indicate That Carl Is Blocked From The Planning Document",id:"a-indicate-that-carl-is-blocked-from-the-planning-document",level:4},{value:"b. Carl (now blocked) Can No Longer Edit The Document",id:"b-carl-now-blocked-can-no-longer-edit-the-document",level:4},{value:"c. Becky Still Has Edit Access",id:"c-becky-still-has-edit-access",level:4},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"blocklists",children:"Blocklists"})}),"\n",(0,s.jsx)(n.ZE,{}),"\n",(0,s.jsxs)(t.p,{children:["In this guide you'll see how to model preventing users from accessing objects using ",(0,s.jsx)(n.bU,{format:n.Ed.ProductLink}),". For example, ",(0,s.jsx)(t.code,{children:"blocking"})," users from accessing a ",(0,s.jsx)(t.code,{children:"document"}),", even if it has been already shared with them."]}),"\n",(0,s.jsxs)(n.u6,{title:"When to use",appearance:"filled",children:[(0,s.jsx)(t.p,{children:"Exclusion is useful while building applications. You may need to support access patterns like granting access to some users, but excluding specific people or groups, similar to how users can block others from following them on social media, or prevent them from sharing documents on Google Drive."}),(0,s.jsx)(t.p,{children:"This is useful when:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Implementing the "blocking" feature, such as the profile blocking commonly present on social media platforms (e.g. Instagram and Twitter).'}),"\n",(0,s.jsx)(t.li,{children:"Reduce a user's access if they are part of a particular group (e.g. restricting access to members who are also guests, or restricting access to users in a certain locality)."}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,s.jsxs)(t.p,{children:["Before you start this guide, make sure you're familiar with some ",(0,s.jsx)(n.OK,{})," and know how to develop the things listed below."]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsxs)("summary",{children:[(0,s.jsxs)(t.p,{children:["You will start with the ",(0,s.jsx)(t.em,{children:(0,s.jsx)(n.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"})})," below, it represents a ",(0,s.jsx)(t.code,{children:"document"})," ",(0,s.jsx)(t.em,{children:(0,s.jsx)(n.OK,{section:"what-is-a-type",linkName:"type"})})," that can have users ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(n.OK,{section:"what-is-a-relation",linkName:"related"})})," as ",(0,s.jsx)(t.code,{children:"editor"}),", and ",(0,s.jsx)(t.code,{children:"team"})," type that can have users related as ",(0,s.jsx)(t.code,{children:"member"}),"."]}),(0,s.jsxs)(t.p,{children:["Let us also assume that we have a ",(0,s.jsx)(t.code,{children:"document"}),' called "planning", shared for editing within the product ',(0,s.jsx)(t.code,{children:"team"})," (comprised of becky and carl)."]})]}),(0,s.jsx)(n.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"},{type:"team",relation:"member"}]}}}},{type:"team",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,s.jsx)(t.p,{children:"The current state of the system is represented by the following relationship tuples being in the system already:"}),(0,s.jsx)(n.AI,{relationshipTuples:[{_description:"Members of the product team can edit the planning document",user:"team:product#member",relation:"editor",object:"document:planning"},{_description:"Becky is a member of the product team",user:"user:becky",relation:"member",object:"team:product"},{_description:"Carl is a member of the product team",user:"user:carl",relation:"member",object:"team:product"}]}),(0,s.jsx)("hr",{}),(0,s.jsx)(t.p,{children:"In addition, you will need to know the following:"}),(0,s.jsx)(t.h3,{id:"modeling-user-groups",children:"Modeling User Groups"}),(0,s.jsxs)(t.p,{children:["You need to know how to add users to groups and grant groups access to resources. ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-823/docs/modeling/user-groups",children:"Learn more \u2192"})]}),(0,s.jsxs)(t.h3,{id:"-concepts",children:[(0,s.jsx)(n.bU,{format:n.Ed.ShortForm})," Concepts"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(n.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(n.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(n.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,s.jsxs)(t.li,{children:["An ",(0,s.jsx)(n.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(n.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,s.jsx)(n.bU,{format:n.Ed.ShortForm})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/pr-preview/pr-823/docs/configuration-language#the-exclusion-operator",children:"Exclusion Operator"}),": the exclusion operator can be used to exclude certain usersets from being related to an object"]}),"\n"]})]}),"\n",(0,s.jsx)(n.QF,{}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,s.jsxs)(t.p,{children:["With the above authorization model and relationship tuples, ",(0,s.jsx)(n.bU,{format:n.Ed.LongForm})," will correctly respond with ",(0,s.jsx)(t.code,{children:'{"allowed":true}'})," when ",(0,s.jsx)(n.OK,{section:"what-is-a-check-request",linkName:"check"})," is called to see if Carl and Becky can edit this ",(0,s.jsx)(t.code,{children:"document"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"We can verify that by issuing two check requests:"}),"\n",(0,s.jsx)(n.ou,{user:"user:becky",relation:"editor",object:"document:planning",allowed:!0}),"\n",(0,s.jsx)(n.ou,{user:"user:carl",relation:"editor",object:"document:planning",allowed:!0}),"\n",(0,s.jsx)(t.p,{children:"We want to share a document with the product team and also have the ability to deny certain users access, even if they have the document shared with them already. We can verify this by blocking Carl (who we have seen already has edit access) from editing the document."}),"\n",(0,s.jsx)(t.p,{children:"In order to do that, we need to:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#01-modify-our-model-so-users-can-be-blocked-from-accessing-a-document",children:"Modify our model to allow indicating that users can be blocked from accessing a document"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#02-modify-our-model-so-users-who-are-blocked-can-no-longer-edit-the-document",children:"Modify our model to indicate that users who are blocked can no longer edit the document"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#03-verify-our-solution-works",children:"Verify that our solution works"}),":"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["a. ",(0,s.jsx)(t.a,{href:"#a-indicate-that-carl-is-blocked-from-the-planning-document",children:"Indicate that Carl is blocked from the planning document"})]}),"\n",(0,s.jsxs)(t.p,{children:["b. ",(0,s.jsx)(t.a,{href:"#b-carl-now-blocked-can-no-longer-edit-the-document",children:"Carl (now blocked) can no longer edit the document"})]}),"\n",(0,s.jsxs)(t.p,{children:["c. ",(0,s.jsx)(t.a,{href:"#c-becky-still-has-edit-access",children:"Becky still has edit access"})]}),"\n",(0,s.jsx)(t.h3,{id:"01-modify-our-model-so-users-can-be-blocked-from-accessing-a-document",children:"01. Modify Our Model So Users Can Be Blocked From Accessing A Document"}),"\n",(0,s.jsxs)(t.p,{children:['To allow users to be "blocked" from accessing a ',(0,s.jsx)(t.code,{children:"document"}),", we first need to allow this relation. We'll update our store model to add a ",(0,s.jsx)(t.code,{children:"blocked"})," ",(0,s.jsx)(n.OK,{section:"what-is-a-relation",linkName:"relation"})," to the ",(0,s.jsx)(t.code,{children:"document"})," type."]}),"\n",(0,s.jsx)(t.p,{children:"The authorization model becomes this:"}),"\n",(0,s.jsx)(n.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{blocked:{this:{}},editor:{this:{}}},metadata:{relations:{blocked:{directly_related_user_types:[{type:"user"}]},editor:{directly_related_user_types:[{type:"user"},{type:"team",relation:"member"}]}}}},{type:"team",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,s.jsxs)(t.p,{children:["Now we can add relationship tuples indicating that a certain user is ",(0,s.jsx)(t.code,{children:"blocked"})," from editing a ",(0,s.jsx)(t.code,{children:"document"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"02-modify-our-model-so-users-who-are-blocked-can-no-longer-edit-the-document",children:"02. Modify Our Model So Users Who Are Blocked Can No Longer Edit The Document"}),"\n",(0,s.jsxs)(t.p,{children:["Now that we can mark users as ",(0,s.jsx)(t.code,{children:"blocked"})," from editing documents, we need to support denying the ",(0,s.jsx)(t.code,{children:"editor"})," relationship when a user is ",(0,s.jsx)(t.code,{children:"blocked"}),". We do that by modifying the relation definition of ",(0,s.jsx)(t.code,{children:"editor"}),", and making use of the ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-823/docs/configuration-language#the-exclusion-operator",children:(0,s.jsx)(t.strong,{children:"exclusion operator"})})," to exclude the set of ",(0,s.jsx)(t.code,{children:"blocked"})," users, as we can see here:"]}),"\n",(0,s.jsx)(n.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{blocked:{this:{}},editor:{difference:{base:{this:{}},subtract:{computedUserset:{relation:"blocked"}}}}},metadata:{relations:{blocked:{directly_related_user_types:[{type:"user"}]},editor:{directly_related_user_types:[{type:"user"},{type:"team",relation:"member"}]}}}},{type:"team",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,s.jsx)(t.h3,{id:"03-verify-our-solution-works",children:"03. Verify Our Solution Works"}),"\n",(0,s.jsxs)(t.p,{children:["To check if our new model works, we'll add a relationship tuple with Carl as ",(0,s.jsx)(t.code,{children:"blocked"})," from ",(0,s.jsx)(t.code,{children:"document:planning"})," and then verify that Carl no longer has ",(0,s.jsx)(t.code,{children:"editor"})," access to that document."]}),"\n",(0,s.jsx)(t.h4,{id:"a-indicate-that-carl-is-blocked-from-the-planning-document",children:"a. Indicate That Carl Is Blocked From The Planning Document"}),"\n",(0,s.jsxs)(t.p,{children:["With our modified authorization model, we can indicate that Carl is blocked by adding this ",(0,s.jsx)(t.em,{children:(0,s.jsx)(n.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple"})}),"."]}),"\n",(0,s.jsx)(n.dp,{relationshipTuples:[{_description:"Carl is blocked from editing the planning document",user:"user:carl",relation:"blocked",object:"document:planning"}]}),"\n",(0,s.jsx)(t.h4,{id:"b-carl-now-blocked-can-no-longer-edit-the-document",children:"b. Carl (now blocked) Can No Longer Edit The Document"}),"\n",(0,s.jsxs)(t.p,{children:["We have modified the authorization model and added relationship tuples to indicate that Carl is ",(0,s.jsx)(t.code,{children:"blocked"}),". Now let's make sure our solution works as expected."]}),"\n",(0,s.jsx)(t.p,{children:"To check if Carl still has access to the document, we can issue a check request with Carl as the user."}),"\n",(0,s.jsx)(n.ou,{user:"user:carl",relation:"editor",object:"document:planning",allowed:!1}),"\n",(0,s.jsxs)(t.p,{children:["The response is ",(0,s.jsx)(t.code,{children:"false"}),", so our solution is working as expected."]}),"\n",(0,s.jsx)(t.h4,{id:"c-becky-still-has-edit-access",children:"c. Becky Still Has Edit Access"}),"\n",(0,s.jsx)(t.p,{children:"To check if Becky still has access to the document, we'll issue another check request with Becky as the user."}),"\n",(0,s.jsx)(n.ou,{user:"user:becky",relation:"editor",object:"document:planning",allowed:!0}),"\n",(0,s.jsxs)(t.p,{children:["The response is ",(0,s.jsx)(t.code,{children:"true"}),", indicating our model change did not inadvertently deny access for users who have access but are not blocked."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["When creating tuples for ",(0,s.jsx)(n.bU,{format:n.Ed.LongForm})," make sure to use unique ids for each object and user within your application domain. We are using first names and human-readable identifiers to make this task easier to read."]})}),"\n",(0,s.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,s.jsx)(n.XQ,{description:"Check the following sections for more on how to model with {ProductName}.",relatedLinks:[{title:"Modeling: Getting Started",description:"Learn about how to get started with modeling.",link:"./getting-started",id:"./getting-started"},{title:"Configuration Language",description:"Learn about {ProductName} Configuration Language.",link:"../configuration-language",id:"../configuration-language"},{title:"Public Access",description:"Learn about model public access.",link:"./public-access",id:"./public-access"}]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);