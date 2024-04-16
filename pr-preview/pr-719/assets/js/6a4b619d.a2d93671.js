"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7550],{72521:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(74848),i=o(28453),s=o(82879);const r={sidebar_position:7,slug:"/modeling/parent-child",description:"Indicating relationships between objects, and how users' relationships to one object can affect their relationship with another"},d="Parent-Child Objects",a={id:"content/modeling/parent-child",title:"Parent-Child Objects",description:"Indicating relationships between objects, and how users' relationships to one object can affect their relationship with another",source:"@site/docs/content/modeling/parent-child.mdx",sourceDirName:"content/modeling",slug:"/modeling/parent-child",permalink:"/pr-preview/pr-719/docs/modeling/parent-child",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/parent-child.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/modeling/parent-child",description:"Indicating relationships between objects, and how users' relationships to one object can affect their relationship with another"},sidebar:"docs",previous:{title:"Roles and Permissions",permalink:"/pr-preview/pr-719/docs/modeling/roles-and-permissions"},next:{title:"Blocklists",permalink:"/pr-preview/pr-719/docs/modeling/blocklists"}},c={},l=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Update The Authorization Model To Allow A Parent Relationship Between Folder And Document",id:"01-update-the-authorization-model-to-allow-a-parent-relationship-between-folder-and-document",level:3},{value:"02. Update The Editor Relation In The Document Type Definition To Support Cascading From Folder",id:"02-update-the-editor-relation-in-the-document-type-definition-to-support-cascading-from-folder",level:3},{value:"03. Create A New Relationship Tuple To Indicate That bob Is An Editor Of folder",id:"03-create-a-new-relationship-tuple-to-indicate-that-bob-is-an-editor-of-folder",level:3},{value:"04. Create A New Relationship Tuple To Indicate That folder Is A Parent Of document.doc",id:"04-create-a-new-relationship-tuple-to-indicate-that-folder-is-a-parent-of-documentdoc",level:3},{value:"05. Check To See If bob Is An Editor Of document.doc",id:"05-check-to-see-if-bob-is-an-editor-of-documentdoc",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"parent-child-objects",children:"Parent-Child Objects"}),"\n",(0,n.jsx)(s.ZE,{}),"\n",(0,n.jsxs)(t.p,{children:["In this guide you will learn how to indicate ",(0,n.jsx)(s.OK,{section:"what-is-a-relationship",linkName:"relationships"})," between ",(0,n.jsx)(s.OK,{section:"what-is-an-object",linkName:"objects"}),", and how users' relationships to one object can affect their relationship with another. For example: how a ",(0,n.jsx)(t.code,{children:"editor"})," of a ",(0,n.jsx)(t.code,{children:"folder"})," can be an ",(0,n.jsx)(t.code,{children:"editor"})," of all ",(0,n.jsx)(t.code,{children:"documents"})," the ",(0,n.jsx)(t.code,{children:"folder"})," is a ",(0,n.jsx)(t.code,{children:"parent"})," of."]}),"\n",(0,n.jsxs)(s.u6,{title:"When to use",appearance:"filled",children:[(0,n.jsxs)(t.p,{children:["Object-to-Object relationships, combined with a configured authorization model can be used to indicate that a user's relation with one object can influence their relationship with another object. This can also be used in some cases to remove the need to modify relations between objects using ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-719/docs/modeling/user-groups#03-assign-the-team-members-a-relation-to-an-object",children:"user groups"}),"."]}),(0,n.jsx)(t.p,{children:"Object-to-object relationships can be used:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To indicate that ",(0,n.jsx)(t.code,{children:"managers"})," of an ",(0,n.jsx)(t.code,{children:"employee"})," have access to ",(0,n.jsx)(t.code,{children:"approve"})," requests the ",(0,n.jsx)(t.code,{children:"employee"})," has made"]}),"\n",(0,n.jsxs)(t.li,{children:["To indicate that users who have a repository admin role (",(0,n.jsx)(t.code,{children:"repo_admin"}),") in an organization automatically have ",(0,n.jsx)(t.code,{children:"admin"})," access to all repositories in that organization"]}),"\n",(0,n.jsxs)(t.li,{children:["To indicate that users who are ",(0,n.jsx)(t.code,{children:"subscribed"})," to a ",(0,n.jsx)(t.code,{children:"plan"}),", get access to all the ",(0,n.jsx)(t.code,{children:"features"})," in that ",(0,n.jsx)(t.code,{children:"plan"})]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,n.jsxs)(t.p,{children:["In order to understand this guide correctly you must be familiar with some ",(0,n.jsx)(s.OK,{})," and know how to develop the things that we will list below."]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsxs)("summary",{children:[(0,n.jsxs)(t.p,{children:["Assume that you have the following ",(0,n.jsx)(s.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"}),".",(0,n.jsx)("br",{}),"\nYou have two types:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"folder"})," that users can be related to as an ",(0,n.jsx)(t.code,{children:"editor"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"document"})," that ",(0,n.jsx)(t.em,{children:"users"})," can be related to as an ",(0,n.jsx)(t.code,{children:"editor"})]}),"\n"]})]}),(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"folder",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,n.jsx)("hr",{}),(0,n.jsx)(t.p,{children:"In addition, you will need to know the following:"}),(0,n.jsx)(t.h3,{id:"direct-access",children:"Direct Access"}),(0,n.jsxs)(t.p,{children:["You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-719/docs/modeling/direct-access",children:"Learn more \u2192"})]}),(0,n.jsxs)(t.h3,{id:"-concepts",children:[(0,n.jsx)(s.bU,{format:s.Ed.ShortForm})," Concepts"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(s.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(s.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(s.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(s.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(s.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,n.jsx)(s.bU,{format:s.Ed.ShortForm})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/pr-preview/pr-719/docs/configuration-language#the-union-operator",children:"Union Operator"}),": the union operator can be used to indicate that the user has multiple ways of being related to an object"]}),"\n"]})]}),"\n",(0,n.jsx)(s.QF,{}),"\n",(0,n.jsx)(t.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,n.jsx)(t.p,{children:"We would like to model folders that contain documents and that a user having editor access to the folder, has editor access to all documents in that folder."}),"\n",(0,n.jsxs)(t.p,{children:["For ",(0,n.jsx)(t.code,{children:"editors"})," of a ",(0,n.jsx)(t.code,{children:"folder"})," to be ",(0,n.jsx)(t.code,{children:"editors"})," of a containing ",(0,n.jsx)(t.code,{children:"document"}),", we need to:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Update the authorization model to allow a ",(0,n.jsx)(t.code,{children:"parent"})," relationship between ",(0,n.jsx)(t.code,{children:"folder"})," and ",(0,n.jsx)(t.code,{children:"document"})]}),"\n",(0,n.jsxs)(t.li,{children:["Update the ",(0,n.jsx)(t.code,{children:"editor"})," relation in the ",(0,n.jsx)(t.code,{children:"document"})," type definition to support ",(0,n.jsx)(t.em,{children:"cascading"})," from ",(0,n.jsx)(t.code,{children:"folder"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["and then to indicate and verify that ",(0,n.jsx)(t.strong,{children:"bob"})," is an ",(0,n.jsx)(t.code,{children:"editor"})," of ",(0,n.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]})," because ",(0,n.jsx)(t.strong,{children:"bob"})," is an ",(0,n.jsx)(t.code,{children:"editor"})," of ",(0,n.jsxs)(t.strong,{children:["folder",":notes"]}),", we then need to:"]}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Create a new ",(0,n.jsx)(t.em,{children:"relationship tuple"})," to indicate that ",(0,n.jsx)(t.strong,{children:"bob"})," is a ",(0,n.jsx)(t.code,{children:"editor"})," of ",(0,n.jsxs)(t.strong,{children:["folder",":notes"]})]}),"\n",(0,n.jsxs)(t.li,{children:["Create a new ",(0,n.jsx)(t.em,{children:"relationship tuple"})," to indicate that ",(0,n.jsxs)(t.strong,{children:["folder",":notes"]})," is a ",(0,n.jsx)(t.code,{children:"parent"})," of ",(0,n.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]})]}),"\n",(0,n.jsxs)(t.li,{children:["Check to see if ",(0,n.jsx)(t.strong,{children:"bob"})," is an ",(0,n.jsx)(t.code,{children:"editor"})," of ",(0,n.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"01-update-the-authorization-model-to-allow-a-parent-relationship-between-folder-and-document",children:"01. Update The Authorization Model To Allow A Parent Relationship Between Folder And Document"}),"\n",(0,n.jsxs)(t.p,{children:["To allow a ",(0,n.jsx)(t.code,{children:"parent"})," relation between a ",(0,n.jsx)(t.code,{children:"folder"})," and a ",(0,n.jsx)(t.code,{children:"document"}),", we need to update the authorization model to be the following (this is to allow creating relationship tuples that can indicate a relationship between ",(0,n.jsx)(t.code,{children:"folder"})," and ",(0,n.jsx)(t.code,{children:"document"}),". Refer to ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-719/docs/modeling/building-blocks/object-to-object-relationships",children:"Modeling Concepts: Object to Object Relationships"})," to understand why):"]}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"folder",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{parent:{this:{}},editor:{this:{}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"folder"}]},editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Notice that the ",(0,n.jsx)(t.code,{children:"document"})," type now has a ",(0,n.jsx)(t.code,{children:"parent"})," relation, indicating that other objects can be ",(0,n.jsx)(t.code,{children:"parent"}),"s of ",(0,n.jsx)(t.code,{children:"document"}),"s"]})}),"\n",(0,n.jsx)(t.h3,{id:"02-update-the-editor-relation-in-the-document-type-definition-to-support-cascading-from-folder",children:"02. Update The Editor Relation In The Document Type Definition To Support Cascading From Folder"}),"\n",(0,n.jsxs)(t.p,{children:["To allow ",(0,n.jsx)(t.em,{children:"cascading"})," relations between ",(0,n.jsx)(t.code,{children:"folder"})," and ",(0,n.jsx)(t.code,{children:"document"}),", we can update our authorization model as the following:"]}),"\n",(0,n.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"folder",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{parent:{this:{}},editor:{union:{child:[{this:{}},{tupleToUserset:{tupleset:{relation:"parent"},computedUserset:{relation:"editor"}}}]}}},metadata:{relations:{parent:{directly_related_user_types:[{type:"folder"}]},editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"editor"})," of a ",(0,n.jsx)(t.code,{children:"document"})," are any of:"]}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"users that are directly assigned as editors"}),"\n",(0,n.jsxs)(t.li,{children:["users that are related to any ",(0,n.jsx)(t.code,{children:"parent"})," of this document as ",(0,n.jsx)(t.code,{children:"editor"})," (editors of the parent)"]}),"\n"]})]}),"\n",(0,n.jsxs)(t.p,{children:["So with this change, anyone related to a ",(0,n.jsx)(t.code,{children:"folder"})," that is a ",(0,n.jsx)(t.code,{children:"parent"})," of a ",(0,n.jsx)(t.code,{children:"document"})," as an ",(0,n.jsx)(t.code,{children:"editor"})," is also an ",(0,n.jsx)(t.code,{children:"editor"})," of said ",(0,n.jsx)(t.code,{children:"document"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"03-create-a-new-relationship-tuple-to-indicate-that-bob-is-an-editor-of-folder",children:["03. Create A New Relationship Tuple To Indicate That bob Is An Editor Of folder",":notes"]}),"\n",(0,n.jsxs)(t.p,{children:["To leverage our ",(0,n.jsx)(t.em,{children:"cascading"})," relation, we need to create a relationship tuple that states: ",(0,n.jsx)(t.strong,{children:"bob"})," is an ",(0,n.jsx)(t.code,{children:"editor"})," of ",(0,n.jsxs)(t.strong,{children:["folder",":notes"]})]}),"\n",(0,n.jsx)(s.dp,{relationshipTuples:[{user:"user:bob",relation:"editor",object:"folder:notes"}]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," Make sure to use unique ids for each object and user within your application domain when creating relationship tuples for ",(0,n.jsx)(s.bU,{format:s.Ed.LongForm}),". We are using first names and simple ids to illustrate an easy-to-follow example."]})}),"\n",(0,n.jsxs)(t.h3,{id:"04-create-a-new-relationship-tuple-to-indicate-that-folder-is-a-parent-of-documentdoc",children:["04. Create A New Relationship Tuple To Indicate That folder",":notes"," Is A Parent Of document",":meeting_notes",".doc"]}),"\n",(0,n.jsxs)(t.p,{children:["Now that ",(0,n.jsx)(t.strong,{children:"bob"})," is an ",(0,n.jsx)(t.code,{children:"editor"})," of ",(0,n.jsxs)(t.strong,{children:["folder",":notes"]}),", we need to indicate that ",(0,n.jsxs)(t.strong,{children:["folder",":notes"]})," is a ",(0,n.jsx)(t.code,{children:"parent"})," of ",(0,n.jsx)(t.code,{children:"document"}),":",(0,n.jsx)(t.strong,{children:"meeting_notes.doc"})]}),"\n",(0,n.jsx)(s.dp,{relationshipTuples:[{_description:"the notes folder is a parent of the meeting notes document",user:"folder:notes",relation:"parent",object:"document:meeting_notes.doc"}]}),"\n",(0,n.jsxs)(t.h3,{id:"05-check-to-see-if-bob-is-an-editor-of-documentdoc",children:["05. Check To See If bob Is An Editor Of document",":meeting_notes",".doc"]}),"\n",(0,n.jsxs)(t.p,{children:["Now that we have done the changes to the authorization model and the addition of the two new ",(0,n.jsx)(t.em,{children:"relationship tuples"}),", we can verify if our configuration is correct by running the following check: ",(0,n.jsxs)(t.strong,{children:["is bob an editor of document",":meeting_notes",".doc"]}),"."]}),"\n",(0,n.jsx)(s.ou,{user:"user:bob",relation:"editor",object:"document:meeting_notes.doc",allowed:!0}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: There are no other relationship tuples within the store that dictate any direct relation between ",(0,n.jsx)(t.strong,{children:"bob"})," and ",(0,n.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]}),". The check succeeds because of the ",(0,n.jsx)(t.em,{children:"cascading"})," relation applied."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The chain of resolution becomes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"bob"})," is an ",(0,n.jsx)(t.code,{children:"editor"})," of ",(0,n.jsxs)(t.strong,{children:["folder",":notes"]})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["folder",":notes"]})," is a ",(0,n.jsx)(t.code,{children:"parent"})," of ",(0,n.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"editors"})," of any ",(0,n.jsx)(t.code,{children:"parent"})," ",(0,n.jsx)(t.code,{children:"folder"})," of ",(0,n.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]})," are also ",(0,n.jsx)(t.code,{children:"editors"})," of the ",(0,n.jsx)(t.code,{children:"document"})]}),"\n",(0,n.jsxs)(t.li,{children:["Therefore, ",(0,n.jsx)(t.strong,{children:"bob"})," is an ",(0,n.jsx)(t.code,{children:"editor"})," of ",(0,n.jsxs)(t.strong,{children:["document",":meeting_notes",".doc"]})]}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["Note that when searching tuples that are related to the object (the word after ",(0,n.jsx)(t.code,{children:"from"}),", also called the tupleset), ",(0,n.jsx)(s.bU,{format:s.Ed.LongForm})," will not do any evaluation and will only consider concrete objects (of the form ",(0,n.jsx)(t.code,{children:"<object_type>:<object_id>"}),") that were directly assigned, and will throw an error if it encounters any rewrites, or a ",(0,n.jsx)(t.code,{children:"*"}),", a type bound public access (",(0,n.jsx)(t.code,{children:"<object_type>:*"}),") or a userset (",(0,n.jsx)(t.code,{children:"<object_type>:<object_id>#<relation>"}),")."]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-719/docs/configuration-language#referencing-relations-on-related-objects",children:"Referencing Relations on Related Objects"})," for more."]})]}),"\n",(0,n.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,n.jsx)(s.XQ,{description:"Check the following sections for more on how to model for parent and child objects.",relatedLinks:[{title:"Modeling Concepts: Object to Object Relationships",description:"Learn about how to model object to object relationships in {ProductName}.",link:"./building-blocks/object-to-object-relationships",id:"./building-blocks/object-to-object-relationships"},{title:"Modeling Google Drive",description:"See how to make folders parents of documents, and to make editors on the parent folders editors on documents inside them..",link:"./advanced/gdrive#01-individual-permissions",id:"./advanced/gdrive.mdx#01-individual-permissions"},{title:"Modeling GitHub",description:"See how to grant users access to all repositories owned by an organization.",link:"./advanced/github#01-permissions-for-individuals-in-an-org",id:"./advanced/github.mdx#01-permissions-for-individuals-in-an-org"}]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);