"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[5263],{49001:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>j});var i=s(85893),n=s(11151),l=s(5270),r=s(74866),a=s(85162);const d={title:"Perform a List Objects call",sidebar_position:4,slug:"/getting-started/perform-list-objects",description:"List all objects a user is authorized to perform a specified action for a given resource type"},o="Perform a List Objects call",c={id:"content/getting-started/perform-list-objects",title:"Perform a List Objects call",description:"List all objects a user is authorized to perform a specified action for a given resource type",source:"@site/docs/content/getting-started/perform-list-objects.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/perform-list-objects",permalink:"/docs/getting-started/perform-list-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/perform-list-objects.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Perform a List Objects call",sidebar_position:4,slug:"/getting-started/perform-list-objects",description:"List all objects a user is authorized to perform a specified action for a given resource type"},sidebar:"docs",previous:{title:"Perform a Check",permalink:"/docs/getting-started/perform-check"},next:{title:"Integrate Within a Framework",permalink:"/docs/getting-started/framework"}},h={},j=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Configure the <ProductName></ProductName> API Client",id:"01-configure-the--api-client",level:3},{value:"02. Calling List Objects API",id:"02-calling-list-objects-api",level:3},{value:"Related Sections",id:"related-sections",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"perform-a-list-objects-call",children:"Perform a List Objects call"}),"\n",(0,i.jsx)(l.AH,{}),"\n",(0,i.jsxs)(t.p,{children:["This section will illustrate how to perform a ",(0,i.jsx)(l.uH,{section:"what-is-a-list-objects-request",linkName:"list objects"})," request to determine all the ",(0,i.jsx)(l.uH,{section:"what-is-an-object",linkName:"objects"})," of a given ",(0,i.jsx)(l.uH,{section:"what-is-a-type",linkName:"type"})," a ",(0,i.jsx)(l.uH,{section:"what-is-a-user",linkName:"user"})," has a specified ",(0,i.jsx)(l.uH,{section:"what-is-a-relationship",linkName:"relationship"})," with."]}),"\n",(0,i.jsx)(t.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,i.jsxs)(r.Z,{groupId:"languages",children:[(0,i.jsx)(a.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(t.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(a.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(t.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(a.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(t.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(a.Z,{value:l.eU.PYTHON_SDK,label:l.UB.get(l.eU.PYTHON_SDK),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsx)(t.a,{href:"/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(t.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(a.Z,{value:l.eU.CLI,label:l.UB.get(l.eU.CLI),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_SERVER_URL"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(a.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(l.YY,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["You have ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(t.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(t.a,{href:"/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(t.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You have loaded ",(0,i.jsx)(t.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(t.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})})]}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,i.jsxs)(t.p,{children:["Assume that you want to list all objects of type document that  user ",(0,i.jsx)(t.code,{children:"anne"})," has ",(0,i.jsx)(t.code,{children:"reader"})," relationship with:"]}),"\n",(0,i.jsxs)(t.h3,{id:"01-configure-the--api-client",children:["01. Configure the ",(0,i.jsx)(l.rZ,{format:l.v7.ShortForm})," API Client"]}),"\n",(0,i.jsx)(t.p,{children:"Before calling the check API, you will need to configure the API client."}),"\n",(0,i.jsxs)(r.Z,{groupId:"languages",children:[(0,i.jsx)(a.Z,{value:l.eU.JS_SDK,label:l.UB.get(l.eU.JS_SDK),children:(0,i.jsx)(l.j3,{lang:l.eU.JS_SDK})}),(0,i.jsx)(a.Z,{value:l.eU.GO_SDK,label:l.UB.get(l.eU.GO_SDK),children:(0,i.jsx)(l.j3,{lang:l.eU.GO_SDK})}),(0,i.jsx)(a.Z,{value:l.eU.DOTNET_SDK,label:l.UB.get(l.eU.DOTNET_SDK),children:(0,i.jsx)(l.j3,{lang:l.eU.DOTNET_SDK})}),(0,i.jsx)(a.Z,{value:l.eU.PYTHON_SDK,label:l.UB.get(l.eU.PYTHON_SDK),children:(0,i.jsx)(l.j3,{lang:l.eU.PYTHON_SDK})}),(0,i.jsx)(a.Z,{value:l.eU.CLI,label:l.UB.get(l.eU.CLI),children:(0,i.jsx)(l.j3,{lang:l.eU.CLI})}),(0,i.jsxs)(a.Z,{value:l.eU.CURL,label:l.UB.get(l.eU.CURL),children:[(0,i.jsxs)(t.p,{children:["To obtain the ",(0,i.jsx)(t.a,{href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-client-credentials-flow",children:"access token"}),":"]}),(0,i.jsx)(l.j3,{lang:l.eU.CURL})]})]}),"\n",(0,i.jsx)(t.h3,{id:"02-calling-list-objects-api",children:"02. Calling List Objects API"}),"\n",(0,i.jsxs)(t.p,{children:["To return all documents that user ",(0,i.jsx)(t.code,{children:"user:anne"})," has relationship ",(0,i.jsx)(t.code,{children:"reader"})," with:"]}),"\n",(0,i.jsx)(l.wA,{authorizationModelId:"1uHxCSuTP0VKPYSnkq1pbb1jeZw",objectType:"document",relation:"reader",user:"user:anne",expectedResults:["document:otherdoc","document:planning"],skipSetup:!0,allowedLanguages:[l.eU.JS_SDK,l.eU.GO_SDK,l.eU.DOTNET_SDK,l.eU.PYTHON_SDK,l.eU.CLI,l.eU.CURL]}),"\n",(0,i.jsxs)(t.p,{children:["The result ",(0,i.jsx)(t.code,{children:"document:otherdoc"})," and ",(0,i.jsx)(t.code,{children:"document:planning"})," are the document objects that ",(0,i.jsx)(t.code,{children:"user:anne"})," has ",(0,i.jsx)(t.code,{children:"reader"})," relationship with."]}),"\n",(0,i.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(l.$q,{description:"Take a look at the following section for more on how to perform authorization checks in your system",relatedLinks:[{title:"{ProductName} List Objects API",description:"Read the List Objects API documentation and see how it works.",link:"/api/service#Relationship%20Queries/ListObjects"}]})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);