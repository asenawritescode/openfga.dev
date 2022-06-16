"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[6669],{31678:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=a(80966),l=["components"],s={title:"Comparison between Check, Read and Expand API Calls",sidebar_position:6,slug:"/interacting/check-read-expand",description:"Comparing between Check, Read and Expand API Calls"},p="Comparison between Check, Read and Expand API Calls",d={unversionedId:"content/interacting/check-read-expand",id:"content/interacting/check-read-expand",title:"Comparison between Check, Read and Expand API Calls",description:"Comparing between Check, Read and Expand API Calls",source:"@site/docs/content/interacting/check-read-expand.mdx",sourceDirName:"content/interacting",slug:"/interacting/check-read-expand",permalink:"/docs/interacting/check-read-expand",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/check-read-expand.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Comparison between Check, Read and Expand API Calls",sidebar_position:6,slug:"/interacting/check-read-expand",description:"Comparing between Check, Read and Expand API Calls"},sidebar:"docs",previous:{title:"Transactional Writes",permalink:"/docs/interacting/transactional-writes"},next:{title:"How to get tuple changes",permalink:"/docs/interacting/read-tuple-changes"}},c={},u=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Check",id:"check",level:2},{value:"What Is It For?",id:"what-is-it-for",level:3},{value:"When To Use?",id:"when-to-use",level:3},{value:"Caveats And When Not To Use It",id:"caveats-and-when-not-to-use-it",level:3},{value:"Read",id:"read",level:2},{value:"What Is It For?",id:"what-is-it-for-1",level:3},{value:"When To Use?",id:"when-to-use-1",level:3},{value:"1. A Particular User To Any Objects Of A Specific Type With A Particular Relation",id:"1-a-particular-user-to-any-objects-of-a-specific-type-with-a-particular-relation",level:4},{value:"2. A Particular User To Any Objects Of A Specific Type With Any Relation",id:"2-a-particular-user-to-any-objects-of-a-specific-type-with-any-relation",level:4},{value:"3. A Particular Object To Any User With A Particular Relation",id:"3-a-particular-object-to-any-user-with-a-particular-relation",level:4},{value:"Caveats And When Not To Use It",id:"caveats-and-when-not-to-use-it-1",level:3},{value:"Expand",id:"expand",level:2},{value:"What Is It For?",id:"what-is-it-for-2",level:3},{value:"When To Use?",id:"when-to-use-2",level:3},{value:"Caveats And When Not To Use It",id:"caveats-and-when-not-to-use-it-2",level:3},{value:"Summary",id:"summary",level:2},{value:"Related Sections",id:"related-sections",level:2}],h={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"comparison-between-check-read-and-expand-api-calls"},"Comparison between Check, Read and Expand API Calls"),(0,r.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,r.kt)("p",null,"In this guide you will learn the uses and limitation for check, read and expand API."),(0,r.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,r.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,r.kt)(o.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("p",null,"Assume that you have the following ",(0,r.kt)(o.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,r.kt)("br",null),"\nYou have a ",(0,r.kt)(o.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," called ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," that can have a ",(0,r.kt)("inlineCode",{parentName:"p"},"reader"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"writer"),". All writers are readers. ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"writer")," relationship with ",(0,r.kt)("inlineCode",{parentName:"p"},"document:planning"),".")),(0,r.kt)(o.lG,{configuration:{type_definitions:[{type:"document",relations:{writer:{this:{}},reader:{union:{child:[{this:{}},{computedUserset:{object:"",relation:"writer"}}]}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,r.kt)(o.Wz,{relationshipTuples:[{_description:"Bob has writer relationship with planning document",user:"bob",relation:"writer",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In addition, you will need to know the following:"),(0,r.kt)("h3",{id:"direct-access"},"Direct Access"),(0,r.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,r.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,r.kt)("h3",{id:"-concepts"},(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)(o.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)(o.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)(o.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)(o.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})))),(0,r.kt)("h2",{id:"check"},"Check"),(0,r.kt)("h3",{id:"what-is-it-for"},"What Is It For?"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/api/service#/Relationship%20Queries/Check"},"Check API")," is a call to the ",(0,r.kt)(o.rZ,{format:o.v7.LongForm,mdxType:"ProductName"})," API endpoint that returns whether the user has a certain relationship with an object. ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," will resolve all prerequisite relationships to establish whether a relationship exists."),(0,r.kt)("h3",{id:"when-to-use"},"When To Use?"),(0,r.kt)("p",null,"Check can be called if you need to establish whether a particular user has a specific relationship with a particular object."),(0,r.kt)("p",null,"For example, you can call check to determine whether ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"reader")," relationship with ",(0,r.kt)("inlineCode",{parentName:"p"},"document:planning"),"."),(0,r.kt)(o.uT,{user:"bob",relation:"reader",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,r.kt)("p",null,"The ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," API will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," because there is an implied relationship as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"every ",(0,r.kt)("inlineCode",{parentName:"li"},"writer")," is also a ",(0,r.kt)("inlineCode",{parentName:"li"},"reader")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bob")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"writer")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"document:planning"))),(0,r.kt)("h3",{id:"caveats-and-when-not-to-use-it"},"Caveats And When Not To Use It"),(0,r.kt)("p",null,'Check is designed to answer the question "Does user:X have relationship Y with object:Z?". It is ',(0,r.kt)("em",{parentName:"p"},"not")," designed to answer the following questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Who has relationship Y with object:Z?"'),(0,r.kt)("li",{parentName:"ul"},'"What are the objects that userX has relationship Y with?"'),(0,r.kt)("li",{parentName:"ul"},'"Why does user:X have relationship Y with object:Z?"')),(0,r.kt)("h2",{id:"read"},"Read"),(0,r.kt)("h3",{id:"what-is-it-for-1"},"What Is It For?"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/api/service#/Relationship%20Tuples/Read"},"Read API")," is a call to the ",(0,r.kt)(o.rZ,{format:o.v7.LongForm,mdxType:"ProductName"})," API endpoint that returns the relationship tuples that are stored in the system that satisfy a query."),(0,r.kt)("h3",{id:"when-to-use-1"},"When To Use?"),(0,r.kt)("p",null,"Read can be called if you need to get all the stored relationship tuples that relate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-a-particular-user-to-any-objects-of-a-specific-type-with-a-particular-relation"},"a particular user to any objects of a specific type with a particular relation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-a-particular-user-to-any-objects-of-a-specific-type-with-any-relation"},"a particular user to any objects of a specific type with any relation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-a-particular-object-to-any-user-with-a-particular-relation"},"a particular object to any user with a particular relation"))),(0,r.kt)("h4",{id:"1-a-particular-user-to-any-objects-of-a-specific-type-with-a-particular-relation"},"1. A Particular User To Any Objects Of A Specific Type With A Particular Relation"),(0,r.kt)("p",null,"For example, to query all the stored relationship tuples ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"writer")," relationship with, one can ask"),(0,r.kt)(o.Nq,{user:"bob",relation:"writer",object:"document:",tuples:[{user:"bob",relation:"writer",object:"document:planning"}],mdxType:"ReadRequestViewer"}),(0,r.kt)("h4",{id:"2-a-particular-user-to-any-objects-of-a-specific-type-with-any-relation"},"2. A Particular User To Any Objects Of A Specific Type With Any Relation"),(0,r.kt)("p",null,"For example, to query all the stored relationship tuples in which ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," is related to objects of type ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," as any relation, one can issue the following call:"),(0,r.kt)(o.Nq,{user:"bob",object:"document:",tuples:[{user:"bob",relation:"writer",object:"document:planning"}],mdxType:"ReadRequestViewer"}),(0,r.kt)("h4",{id:"3-a-particular-object-to-any-user-with-a-particular-relation"},"3. A Particular Object To Any User With A Particular Relation"),(0,r.kt)("p",null,"For example, to query all the stored relationship tuples in which any user is related to ",(0,r.kt)("inlineCode",{parentName:"p"},"document:planning")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"writer"),", one can issue the following call:"),(0,r.kt)(o.Nq,{relation:"writer",object:"document:planning",tuples:[{user:"bob",relation:"writer",object:"document:planning"}],mdxType:"ReadRequestViewer"}),(0,r.kt)("h3",{id:"caveats-and-when-not-to-use-it-1"},"Caveats And When Not To Use It"),(0,r.kt)("p",null,"The Read API will only return all the stored relationships that match the query specification.\nIt does not expand or traverse the graph by taking the authorization model into account."),(0,r.kt)("p",null,"For example, if you specify that ",(0,r.kt)("inlineCode",{parentName:"p"},"writers")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"viewers")," in the authorization model, the Read API will ignore that and it will return tuples where a user is a ",(0,r.kt)("inlineCode",{parentName:"p"},"viewer")," if and only if the ",(0,r.kt)("inlineCode",{parentName:"p"},'(user_id, "viewer", object_type:object_id)')," relationship tuple exists in the system."),(0,r.kt)("p",null,"In the following case, although all ",(0,r.kt)("inlineCode",{parentName:"p"},"writers")," have reader ",(0,r.kt)("inlineCode",{parentName:"p"},"relationships")," for document objects and ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"writer")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"document:planning"),", if you query for all objects that ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"reader")," relationships, it will not return ",(0,r.kt)("inlineCode",{parentName:"p"},"document:planning"),"."),(0,r.kt)(o.Nq,{user:"bob",relation:"reader",object:"document:",tuples:[],mdxType:"ReadRequestViewer"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Although bob is a writer to document:planning and every writer is also a reader, the Read API will return an empty list because there are no stored relationship tuples that relate bob to document:planning as reader."))),(0,r.kt)("h2",{id:"expand"},"Expand"),(0,r.kt)("h3",{id:"what-is-it-for-2"},"What Is It For?"),(0,r.kt)("p",null,"Expand uses the authorization model to expand the specific relationship on a particular object.\nThe response is in user tree format. To build a full graph, you would iteratively need to call expand on the leaves returned in the previous expand call."),(0,r.kt)("h3",{id:"when-to-use-2"},"When To Use?"),(0,r.kt)("p",null,"Expand is used for debugging and to understand why a user has a particular relationship with a specific object."),(0,r.kt)("p",null,"For example, to understand why ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," can have a ",(0,r.kt)("inlineCode",{parentName:"p"},"reader")," relationship with ",(0,r.kt)("inlineCode",{parentName:"p"},"document:planning"),", one could first call"),(0,r.kt)(o.s0,{relation:"reader",object:"document:planning",mdxType:"ExpandRequestViewer"}),(0,r.kt)("p",null,"The result of this call will be like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "tree":{\n    "root":{\n      "type":"document:planning#reader",\n        "leaf":{\n          "computed":{\n            "userset":"document:planning#writer"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The returned tree will contains ",(0,r.kt)("inlineCode",{parentName:"p"},"writer"),", for which we will call"),(0,r.kt)(o.s0,{relation:"writer",object:"document:planning",mdxType:"ExpandRequestViewer"}),(0,r.kt)("p",null,"The result of this call will be like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "tree":{\n    "root":{\n      "type":"document:planning#writer",\n        "leaf":{\n          "users":{\n            "users":[\n              "bob"\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"From there, we will learn that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"those related to ",(0,r.kt)("inlineCode",{parentName:"li"},"document:planning")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"reader")," are all those who are related to that document as ",(0,r.kt)("inlineCode",{parentName:"li"},"writer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bob")," is related to ",(0,r.kt)("inlineCode",{parentName:"li"},"document:planning")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"writer"))),(0,r.kt)("h3",{id:"caveats-and-when-not-to-use-it-2"},"Caveats And When Not To Use It"),(0,r.kt)("p",null,"The Expand call is expensive and has high latency. As such, it is designed to be used for debugging and understanding why a user has a particular relationship with a specific object. It is not designed for checking whether a user has a particular relationship with a specific object. In that case the Check API call should be used instead."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Check"),(0,r.kt)("th",{parentName:"tr",align:null},"Read"),(0,r.kt)("th",{parentName:"tr",align:null},"Expand"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if user has particular relationship with certain object"),(0,r.kt)("td",{parentName:"tr",align:null},"Return all stored relationship tuples that match query"),(0,r.kt)("td",{parentName:"tr",align:null},"Expand the specific relationship on a particular object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"When to use"),(0,r.kt)("td",{parentName:"tr",align:null},"Validate if user X can perform Y on object Z"),(0,r.kt)("td",{parentName:"tr",align:null},"List stored relationships in system"),(0,r.kt)("td",{parentName:"tr",align:null},"Understand why user X can perform Y on object Z")))),(0,r.kt)("h2",{id:"related-sections"},"Related Sections"),(0,r.kt)(o.$q,{description:"Check the following sections for more on how to query for tuples.",relatedLinks:[{title:"{ProductName} API - Check",description:"Details on the check API in the {ProductName} reference guide.",link:"/api/service#/Relationship%20Queries/Check"},{title:"{ProductName} API - Read",description:"Details on the read API in the {ProductName} reference guide.",link:"/api/service#/Relationship%20Tuples/Read"},{title:"{ProductName} - Expand",description:"Details on the expand API in the {ProductName} reference guide.",link:"/api/service#/Relationship%20Queries/Expand"}],mdxType:"RelatedSection"}))}m.isMDXComponent=!0}}]);