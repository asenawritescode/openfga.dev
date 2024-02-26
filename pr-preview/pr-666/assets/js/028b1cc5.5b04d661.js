"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[5289],{87395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>h,toc:()=>p});var i=n(85893),s=n(11151),l=n(5270),a=n(74866),r=n(85162);const o={title:"How to get tuple changes",sidebar_position:1,slug:"/interacting/read-tuple-changes",description:"Getting tuple changes"},d="How to get tuple changes",h={id:"content/interacting/read-tuple-changes",title:"How to get tuple changes",description:"Getting tuple changes",source:"@site/docs/content/interacting/read-tuple-changes.mdx",sourceDirName:"content/interacting",slug:"/interacting/read-tuple-changes",permalink:"/pr-preview/pr-666/docs/interacting/read-tuple-changes",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/read-tuple-changes.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to get tuple changes",sidebar_position:1,slug:"/interacting/read-tuple-changes",description:"Getting tuple changes"},sidebar:"docs",previous:{title:"Relationship Queries: Check, Read, Expand, and ListObjects",permalink:"/pr-preview/pr-666/docs/interacting/relationship-queries"},next:{title:"Search With Permissions",permalink:"/pr-preview/pr-666/docs/interacting/search-with-permissions"}},c={},p=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Configure The <ProductName></ProductName> API Client",id:"01-configure-the--api-client",level:3},{value:"02. Get Changes For All Object Types",id:"02-get-changes-for-all-object-types",level:3},{value:"03. Get Changes For A Specific Object Type",id:"03-get-changes-for-a-specific-object-type",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-get-tuple-changes",children:"How to get tuple changes"}),"\n",(0,i.jsx)(l.AH,{}),"\n",(0,i.jsx)(t.p,{children:"This section illustrates how to call the Read Changes API to get the list of relationship tuple changes that happened in your store, in the exact order that they happened. The API response includes tuples that have been added or removed in your store. It does not include other changes, like updates to your authorization model and adding new assertions."}),"\n",(0,i.jsx)(t.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,i.jsxs)(a.Z,{groupId:"languages",children:[(0,i.jsx)(r.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-666/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"../modeling",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(t.a,{href:"/pr-preview/pr-666/docs/getting-started/update-tuples#02-calling-write-api-to-add-new-relationship-tuples",children:["added some ",(0,i.jsx)(t.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(r.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-666/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"../modeling",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(t.a,{href:"/pr-preview/pr-666/docs/getting-started/update-tuples#02-calling-write-api-to-add-new-relationship-tuples",children:["added some ",(0,i.jsx)(t.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(r.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-666/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"../modeling",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(r.Z,{value:l.eU.PYTHON_SDK,label:l.UB.get(l.eU.PYTHON_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-666/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"../modeling",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(r.Z,{value:l.eU.JAVA_SDK,label:l.UB.get(l.eU.JAVA_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-666/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"../modeling",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(r.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"../modeling",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(t.a,{href:"/pr-preview/pr-666/docs/getting-started/update-tuples#02-calling-write-api-to-add-new-relationship-tuples",children:["added some ",(0,i.jsx)(t.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})})]}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,i.jsx)(t.p,{children:"To get a chronologically ordered list of tuples that have been written or deleted in your store, you can do so by calling the Read Changes API."}),"\n",(0,i.jsxs)(t.h3,{id:"01-configure-the--api-client",children:["01. Configure The ",(0,i.jsx)(l.rZ,{format:l.v7.ShortForm})," API Client"]}),"\n",(0,i.jsx)(t.p,{children:"First you will need to configure the API client."}),"\n",(0,i.jsxs)(a.Z,{groupId:"languages",children:[(0,i.jsx)(r.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),children:(0,i.jsx)(l.j3,{lang:"js-sdk"})}),(0,i.jsx)(r.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),children:(0,i.jsx)(l.j3,{lang:"go-sdk"})}),(0,i.jsx)(r.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),children:(0,i.jsx)(l.j3,{lang:"dotnet-sdk"})}),(0,i.jsx)(r.Z,{value:l.eU.PYTHON_SDK,label:l.UB.get(l.eU.PYTHON_SDK),children:(0,i.jsx)(l.j3,{lang:"python-sdk"})}),(0,i.jsx)(r.Z,{value:l.eU.JAVA_SDK,label:l.UB.get(l.eU.JAVA_SDK),children:(0,i.jsx)(l.j3,{lang:"java-sdk"})}),(0,i.jsxs)(r.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),children:[(0,i.jsxs)(t.p,{children:["To obtain the ",(0,i.jsx)(t.a,{href:"https://auth0.com/docs/authorization/flows/call-your-api-using-the-client-credentials-flow",children:"access token"}),":"]}),(0,i.jsx)(l.j3,{lang:"curl"})]})]}),"\n",(0,i.jsx)(t.h3,{id:"02-get-changes-for-all-object-types",children:"02. Get Changes For All Object Types"}),"\n",(0,i.jsx)(t.p,{children:"To get a paginated list of changes that happened in your store:"}),"\n",(0,i.jsx)(l.J_,{pageSize:25,skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.JAVA_SDK,l.eU.CLI,l.eU.CURL]}),"\n",(0,i.jsxs)(t.p,{children:["The result will contain an array of up to 25 tuples, with the operation (",(0,i.jsx)(t.code,{children:"write"})," or ",(0,i.jsx)(t.code,{children:"delete"}),"), and the timestamp in which that operation took place. The result will also contain a continuation token. Save the continuation token in persistent storage between calls so that it is not lost and you do not have to restart from scratch on system restart or on error."]}),"\n",(0,i.jsx)(t.p,{children:"You can then use this token to get the next set of changes:"}),"\n",(0,i.jsx)(l.J_,{pageSize:25,continuationToken:"eyJwayI6IkxBVEVTVF9OU0NPTkZJR19hdXRoMHN0b3JlIiwic2siOiIxem1qbXF3MWZLZExTcUoyN01MdTdqTjh0cWgifQ==",skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.JAVA_SDK,l.eU.CLI,l.eU.CURL]}),"\n",(0,i.jsx)(t.p,{children:"Once there are no more changes to retrieve, the API will return the same token as the one you sent. Save the token in persistent storage to use at a later time."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The default page size is 50. The maximum page size allowed is 100."}),"\n",(0,i.jsx)(t.li,{children:"The API response will not return all the changes immediately. There will be a delay of one minute between the time that you add or delete a tuple and the time that you see it in the Read Changes API response."}),"\n",(0,i.jsxs)(t.li,{children:["The API response does not expand the tuples. If you wrote a tuple that includes a userset, like ",(0,i.jsx)(t.code,{children:'{"user": "group:abc#member", "relation": "owner": "doc:budget"}'}),", the Read Changes API will return that exact tuple."]}),"\n"]})}),"\n",(0,i.jsx)(t.h3,{id:"03-get-changes-for-a-specific-object-type",children:"03. Get Changes For A Specific Object Type"}),"\n",(0,i.jsx)(t.p,{children:"Imagine you have the following authorization model:"}),"\n",(0,i.jsx)(l.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"group",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}},{type:"folder",relations:{owner:{this:{}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"group",relation:"member"},{type:"user"}]}}}},{type:"doc",relations:{owner:{this:{}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"group",relation:"member"},{type:"user"}]}}}}]}}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to get a list of changes that happened in your store that relate only to one specific object type, like ",(0,i.jsx)(t.code,{children:"folder"}),", by issuing a call like this:"]}),"\n",(0,i.jsx)(l.J_,{pageSize:25,type:"folder",skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.JAVA_SDK,l.eU.CLI,l.eU.CURL]}),"\n",(0,i.jsxs)(t.p,{children:["The response will include a continuation token. In subsequent calls, you have to include the token and the ",(0,i.jsx)(t.code,{children:"type"}),". (If you send this continuation token without the ",(0,i.jsx)(t.code,{children:"type"})," parameter set, you will get an error)."]}),"\n",(0,i.jsx)(l.J_,{pageSize:25,type:"folder",continuationToken:"eyJwayI6IkxBVEVTVF9OU0NPTkZJR19hdXRoMHN0b3JlIiwic2siOiIxem1qbXF3MWZLZExTcUoyN01MdTdqTjh0cWgifQ==",skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.JAVA_SDK,l.eU.CLI,l.eU.CURL]})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);