"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[5896],{1996:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>h,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(74848),r=t(28453),i=t(36289);const o={title:"Search With Permissions",description:"Integrating FGA into your search",sidebar_position:1,slug:"/interacting/search-with-permissions"},h="Search With Permissions",c={id:"content/interacting/search-with-permissions",title:"Search With Permissions",description:"Integrating FGA into your search",source:"@site/docs/content/interacting/search-with-permissions.mdx",sourceDirName:"content/interacting",slug:"/interacting/search-with-permissions",permalink:"/pr-preview/pr-702/docs/interacting/search-with-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/search-with-permissions.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Search With Permissions",description:"Integrating FGA into your search",sidebar_position:1,slug:"/interacting/search-with-permissions"},sidebar:"docs",previous:{title:"Get Tuple Changes",permalink:"/pr-preview/pr-702/docs/interacting/read-tuple-changes"}},a={},l=[{value:"Possible Options",id:"possible-options",level:2},{value:"Option 1: Search, Then Check",id:"option-1-search-then-check",level:3},{value:"Option 2: Build A Local Index From Changes Endpoint, Search, Then Check",id:"option-2-build-a-local-index-from-changes-endpoint-search-then-check",level:3},{value:"Option 3: Build A List Of IDs, Then Search",id:"option-3-build-a-list-of-ids-then-search",level:3},{value:"Choosing The Best Option",id:"choosing-the-best-option",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"search-with-permissions",children:"Search With Permissions"})}),"\n",(0,n.jsx)(i.ZE,{}),"\n",(0,n.jsx)(s.p,{children:"Once you implement fine-grained authorization to protect your resources, search becomes a more complex problem, because the user's access to each resource now has to be validated before the resource can be shown."}),"\n",(0,n.jsx)(s.p,{children:"The search problem can then be summarized as:"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'"Given a particular search filter and a sort order, what objects can the user access"?'}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(i.bU,{format:i.Ed.ShortForm})," service does not store object metadata (names of files, creation dates, time of last update, etc), which means completing any search request by filtering and sorting according to certain criteria will require data from your database."]}),"\n",(0,n.jsx)(s.p,{children:"The services responsible for performing these actions are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Filter: Your database"}),"\n",(0,n.jsx)(s.li,{children:"Sort: Your database"}),"\n",(0,n.jsxs)(s.li,{children:["Authorize: ",(0,n.jsx)(i.bU,{format:i.Ed.ShortForm})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To return the set of results that match the user's search query, you will need to get the intersection of the results from the services above."}),"\n",(0,n.jsx)(s.h2,{id:"possible-options",children:"Possible Options"}),"\n",(0,n.jsx)(s.p,{children:"There are three possible ways to do this:"}),"\n",(0,n.jsx)(s.h3,{id:"option-1-search-then-check",children:"Option 1: Search, Then Check"}),"\n",(0,n.jsxs)(s.p,{children:["Pre-filter, then call ",(0,n.jsx)(i.bU,{format:i.Ed.ShortForm})," Check endpoint."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Filter and sort on your database."}),"\n",(0,n.jsxs)(s.li,{children:["Call ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-702/docs/interacting/relationship-queries#check",children:(0,n.jsx)(s.code,{children:"/check"})})," in parallel on each object returned from your database."]}),"\n",(0,n.jsx)(s.li,{children:"Filter out objects the user does not have access to."}),"\n",(0,n.jsx)(s.li,{children:"Return the filtered result to the user."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"option-2-build-a-local-index-from-changes-endpoint-search-then-check",children:"Option 2: Build A Local Index From Changes Endpoint, Search, Then Check"}),"\n",(0,n.jsxs)(s.p,{children:["Consume the ",(0,n.jsx)(s.code,{children:"GET /changes"})," endpoint to create a local index you can use to do an intersection on the two sets of results."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Call the ",(0,n.jsx)(i.Oe,{link:"/api/service#Relationship%20Tuples/ReadChanges",name:"{ProductName} changes API"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["For the particular authorization model version(s) you are using in production, flatten/expand the changes (e.g. ",(0,n.jsx)(s.code,{children:"user:anne, writer, doc:planning"})," becomes two tuples: ",(0,n.jsx)(s.code,{children:"user:anne, writer, doc:planning"})," and ",(0,n.jsx)(s.code,{children:"user:anne, reader, doc:planning"}),")."]}),"\n",(0,n.jsx)(s.li,{children:"Build the intersection between the objects in your database and the flattened/expanded state you created."}),"\n",(0,n.jsxs)(s.li,{children:["You can then call ",(0,n.jsx)(s.code,{children:"/check"})," on each resource in the resulting set before returning the response to filter out any resource with permissions revoked but whose authorization data has not made it into your index yet."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"option-3-build-a-list-of-ids-then-search",children:"Option 3: Build A List Of IDs, Then Search"}),"\n",(0,n.jsxs)(s.p,{children:["Call the ",(0,n.jsx)(s.code,{children:"GET /list-objects"})," API to get a list of object IDs the user has access to, then run the filter restricting by the object IDs returned."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Call the ",(0,n.jsx)(i.Oe,{link:"/api/service#Relationship%20Queries/ListObjects",name:"{ProductName} List Objects API"}),". to get the list of all resources a user can access."]}),"\n",(0,n.jsx)(s.li,{children:"Pass in the set of object IDs to the database query to limit the search."}),"\n",(0,n.jsx)(s.li,{children:"Return the filtered result to the user."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Be aware that the performance characteristics of the ListObjects endpoint vary drastically depending on the model complexity, number of tuples, and the relations it needs to evaluate. Relations with ",(0,n.jsx)(s.code,{children:"and"})," or ",(0,n.jsx)(s.code,{children:"but not"})," are more expensive to evaluate than relations with ",(0,n.jsx)(s.code,{children:"or"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"choosing-the-best-option",children:"Choosing The Best Option"}),"\n",(0,n.jsx)(s.p,{children:"Which option to choose among the three listed above depends on the following criteria:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Number of objects that your database can return from a search query"}),"\n",(0,n.jsx)(s.li,{children:"Number of objects of a certain type the user could have access to"}),"\n",(0,n.jsx)(s.li,{children:"Percentage of objects in a type the user could have access to"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Consider the following scenarios:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"A."})," The ",(0,n.jsx)(s.em,{children:"number of objects a search query could return from the database"})," is ",(0,n.jsx)(s.em,{children:"low"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#option-1-search-then-check",children:"Search then Check"})})," is the recommended solution."]}),"\n",(0,n.jsx)(s.p,{children:"Use-case: Situations where the search query can be optimized to return a small number of results."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"B."})," The ",(0,n.jsx)(s.em,{children:"number of objects of a certain type the user could have access to"})," is ",(0,n.jsx)(s.em,{children:"low"}),", and the ",(0,n.jsx)(s.em,{children:"percentage of objects in a namespace a user could have access to"})," is ",(0,n.jsx)(s.em,{children:"high"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#option-1-search-then-check",children:"Search then Check"})})," is recommended to get the final list of results."]}),"\n",(0,n.jsx)(s.p,{children:"Note that this use case, because the user has access to a low number of objects which are still a high percentage of the total objects in the system, that means that the total number of objects in the system is low."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"C."})," The ",(0,n.jsx)(s.em,{children:"number of objects of a certain type the user could have access to"})," is ",(0,n.jsx)(s.em,{children:"low"})," (~ 1000), and the ",(0,n.jsx)(s.em,{children:"percentage of the total objects that the user can have access to"})," is also ",(0,n.jsx)(s.em,{children:"low"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["In this case, using the ",(0,n.jsx)(s.code,{children:"GET /list-objects"})," would make sense. You can query this API to get a list of object IDs and then pass these IDs to your filter function to limit the search to them."]}),"\n",(0,n.jsx)(s.p,{children:"As this number increases, this solution becomes impractical, because you would need to paginate over multiple pages to get the entire list before being able to search and sort. A partial list from the API is not enough, because you won't be able to sort using it."}),"\n",(0,n.jsxs)(s.p,{children:["So while ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#option-3-build-a-list-of-ids-then-search",children:"List of IDs then Search"})})," would be useful for this in some situations, we would recommend ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check",children:"Local Index from Changes Endpoint, Search then Check"})})," for the cases when the number of objects is high enough."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"D."})," The ",(0,n.jsx)(s.em,{children:"number of objects of a certain type the user could have access to"})," is ",(0,n.jsx)(s.em,{children:"high"}),", and the ",(0,n.jsx)(s.em,{children:"percentage of the total objects that the user can have access to"})," is ",(0,n.jsx)(s.em,{children:"low"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The recommended option for this case is to use ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check",children:"Local Index from Changes Endpoint, Search then Check"})}),"."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"List of IDs then Search"})," would not work because you would have to get and paginate across thousands or tens of thousands (or in some cases more) of results from ",(0,n.jsx)(i.bU,{format:i.Ed.ShortForm}),", only after you have retrieved the entire set can you start searching within your database for matching results. This would mean that your user could be waiting for a long time before they can start seeing results."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Search then Check"})," would also not be ideal, as you will be retrieving and checking against a lot of items and discarding most of them."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Use case: Searching in Google Drive, where the list of documents and folders that a user has access to can be very high, but it still is a small percentage of the entire set of documents in Google Drive."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"E."})," The ",(0,n.jsx)(s.em,{children:"number of objects of a certain type the user could have access to"})," is ",(0,n.jsx)(s.em,{children:"high"}),", and the ",(0,n.jsx)(s.em,{children:"percentage of the total objects that the user can have access to"})," is also ",(0,n.jsx)(s.em,{children:"high"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["In this case a ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check",children:"Local Index from Changes Endpoint, Search then Check"})})," would be useful. If you do not want to maintain a local index, and if the user can access a high percentage of the total, meaning that the user is more likely than not to have access to the results returned by the search query, then ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#option-1-search-then-check",children:"Search then Check"})})," would work just as well."]}),"\n",(0,n.jsx)(s.p,{children:"Use-case: Searching on Twitter. Most Twitter users have their profiles set to public, so the user is more likely to have access to the tweets when performing a search. So searching first then running checks against the set of returned results would be appropriate."}),"\n",(0,n.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Scenario"}),(0,n.jsx)(s.th,{children:"Use Case"}),(0,n.jsx)(s.th,{children:"# of objects returned from database query"}),(0,n.jsx)(s.th,{children:"# of objects user can access in a type"}),(0,n.jsx)(s.th,{children:"% of objects user can access in a type"}),(0,n.jsx)(s.th,{children:"Preferred Option"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"A"}),(0,n.jsx)(s.td,{children:"Search criteria enough to narrow down results"}),(0,n.jsx)(s.td,{children:"Low"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#option-1-search-then-check",children:"1"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"B"}),(0,n.jsx)(s.td,{children:"Few objects the user has access to, but still a high % of total objects"}),(0,n.jsx)(s.td,{children:"Low"}),(0,n.jsx)(s.td,{children:"Low"}),(0,n.jsx)(s.td,{children:"High"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#option-1-search-then-check",children:"1"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"C"}),(0,n.jsx)(s.td,{children:"Cannot narrow down search results, very high probability search returns objects user cannot access, total number of objects user can access is low enough to fit in a response"}),(0,n.jsx)(s.td,{children:"High"}),(0,n.jsx)(s.td,{children:"Low"}),(0,n.jsx)(s.td,{children:"Low"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"#option-3-build-a-list-of-ids-then-search",children:"3"})," or ",(0,n.jsx)(s.a,{href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check",children:"2"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"D"}),(0,n.jsx)(s.td,{children:"Google Drive: User has access to a lot of documents, but low percentage from total"}),(0,n.jsx)(s.td,{children:"High"}),(0,n.jsx)(s.td,{children:"High"}),(0,n.jsx)(s.td,{children:"Low"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check",children:"2"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"E"}),(0,n.jsx)(s.td,{children:"Twitter Search: Most profiles are public, and the user can access them"}),(0,n.jsx)(s.td,{children:"High"}),(0,n.jsx)(s.td,{children:"High"}),(0,n.jsx)(s.td,{children:"High"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"#option-1-search-then-check",children:"1"})," or ",(0,n.jsx)(s.a,{href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check",children:"2"})]})]})]})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);