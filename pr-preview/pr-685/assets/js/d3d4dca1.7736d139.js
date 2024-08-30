"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1717],{46186:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=s(74848),n=s(28453),r=s(36289);const t={sidebar_position:5,slug:"/modeling/roles-and-permissions",description:"Modeling basic roles and permissions"},a="Roles and Permissions",d={id:"content/modeling/roles-and-permissions",title:"Roles and Permissions",description:"Modeling basic roles and permissions",source:"@site/docs/content/modeling/roles-and-permissions.mdx",sourceDirName:"content/modeling",slug:"/modeling/roles-and-permissions",permalink:"/pr-preview/pr-685/docs/modeling/roles-and-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/roles-and-permissions.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/modeling/roles-and-permissions",description:"Modeling basic roles and permissions"},sidebar:"docs",previous:{title:"User Groups",permalink:"/pr-preview/pr-685/docs/modeling/user-groups"},next:{title:"Parent-Child Objects",permalink:"/pr-preview/pr-685/docs/modeling/parent-child"}},l={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step by step",id:"step-by-step",level:2},{value:"01. Understand how roles work within the trip booking system",id:"01-understand-how-roles-work-within-the-trip-booking-system",level:3},{value:"02. Add permissions for bookings",id:"02-add-permissions-for-bookings",level:3},{value:"03. Check user roles and their permissions",id:"03-check-user-roles-and-their-permissions",level:3},{value:"Related sections",id:"related-sections",level:2}];function h(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"roles-and-permissions",children:"Roles and Permissions"})}),"\n",(0,o.jsx)(r.ZE,{}),"\n",(0,o.jsxs)(i.p,{children:["Roles and permissions can be modeled within ",(0,o.jsx)(r.bU,{format:r.Ed.ProductLink})," using an ",(0,o.jsx)(r.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"})," and ",(0,o.jsx)(r.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"}),"."]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Roles"})," are assigned to ",(0,o.jsx)(r.OK,{section:"what-is-a-user",linkName:"users"})," or a group of users. Any user can have more than one role, like ",(0,o.jsx)(i.code,{children:"editor"})," or ",(0,o.jsx)(i.code,{children:"owner"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Permissions"})," allow users to access certain ",(0,o.jsx)(r.OK,{section:"what-is-an-object",linkName:"objects"})," based on their specific roles, like ",(0,o.jsx)(i.code,{children:"device_renamer"})," or ",(0,o.jsx)(i.code,{children:"channel_archiver"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["For example, the role ",(0,o.jsx)(i.code,{children:"viewer"})," of a ",(0,o.jsx)(i.code,{children:"trip"})," can have permissions to view bookings, while the role ",(0,o.jsx)(i.code,{children:"owners"})," can have permissions to add or view trip bookings."]}),"\n",(0,o.jsxs)(r.u6,{title:"When to use a Roles and Permissions model",appearance:"filled",children:[(0,o.jsxs)(i.p,{children:["Role and permissions models in ",(0,o.jsx)(r.bU,{format:r.Ed.ShortForm})," can both directly assign roles to users and assign permissions through relations users receive downstream from other relations. For example, you can:"]}),(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Grant someone an ",(0,o.jsx)(i.code,{children:"admin"})," role that can ",(0,o.jsx)(i.code,{children:"edit"})," and ",(0,o.jsx)(i.code,{children:"read"})," a ",(0,o.jsx)(i.code,{children:"document"})]}),"\n",(0,o.jsxs)(i.li,{children:["Grant someone a ",(0,o.jsx)(i.code,{children:"security_guard"})," role that can ",(0,o.jsx)(i.code,{children:"live_video_viewer"})," on a ",(0,o.jsx)(i.code,{children:"device"})]}),"\n",(0,o.jsxs)(i.li,{children:["Grant someone a ",(0,o.jsx)(i.code,{children:"viewer"})," role that can ",(0,o.jsx)(i.code,{children:"view_products"})," on a ",(0,o.jsx)(i.code,{children:"shop"})]}),"\n"]}),(0,o.jsxs)(i.p,{children:["Implementing a Roles and Permissions model allows existing roles to have finer-grained permissions, allowing your application to check whether a user has access to a certain object without having to explicitly check that specific users role. In addition, you can add new roles/permissions or consolidate roles without affecting your application behavior. For example, if your app's checks are for the fine permissions, like ",(0,o.jsx)(i.code,{children:"check('bob', 'booking_adder', 'trip:Europe')"})," instead of ",(0,o.jsx)(i.code,{children:"check('bob', 'owner', 'trip:Europe')"}),", and you later decide ",(0,o.jsx)(i.code,{children:"owners"})," can no longer add bookings to a ",(0,o.jsx)(i.code,{children:"trip"}),", you can remove the relation within the ",(0,o.jsx)(i.code,{children:"trip"})," type with no code changes in your application and all permissions will automatically honor the change."]})]}),"\n",(0,o.jsx)(i.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,o.jsxs)(i.p,{children:["Familiarize yourself with the basics of ",(0,o.jsx)(r.OK,{}),"."]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:(0,o.jsxs)(i.p,{children:["Assume that you have the following ",(0,o.jsx)(r.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"})," and a ",(0,o.jsx)(r.OK,{section:"what-is-a-type",linkName:"type"})," called ",(0,o.jsx)(i.code,{children:"trip"})," that users can be related to as ",(0,o.jsx)(i.code,{children:"viewer"})," and/or an ",(0,o.jsx)(i.code,{children:"owner"}),"."]})}),(0,o.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"trip",relations:{owner:{this:{}},viewer:{this:{}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,o.jsx)("hr",{}),(0,o.jsx)(i.p,{children:"In addition, you need to know the following:"}),(0,o.jsx)(i.h3,{id:"direct-access",children:"Direct Access"}),(0,o.jsxs)(i.p,{children:["Creating an authorization model and a relationship tuple can grant a user access to an object. To learn more, ",(0,o.jsx)(i.a,{href:"/pr-preview/pr-685/docs/modeling/direct-access",children:"read about Direct Access"})]}),(0,o.jsxs)(i.h3,{id:"-concepts",children:[(0,o.jsx)(r.bU,{format:r.Ed.ShortForm})," Concepts"]}),(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["A ",(0,o.jsx)(r.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,o.jsxs)(i.li,{children:["A ",(0,o.jsx)(r.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,o.jsxs)(i.li,{children:["A ",(0,o.jsx)(r.OK,{section:"what-is-a-relation",linkName:"Relation"}),": a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,o.jsxs)(i.li,{children:["An ",(0,o.jsx)(r.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,o.jsxs)(i.li,{children:["A ",(0,o.jsx)(r.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a group stored in ",(0,o.jsx)(r.bU,{format:r.Ed.ShortForm})," that consists of a user, a relation, and an object"]}),"\n",(0,o.jsxs)(i.li,{children:["A ",(0,o.jsx)(r.OK,{section:"what-is-a-relationship",linkName:"Relationship"}),": ",(0,o.jsx)(r.bU,{format:r.Ed.ShortForm})," will be called to check if there is a relationship between a user and an object, indicating that the access is allowed"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/pr-preview/pr-685/docs/configuration-language#the-union-operator",children:"Union Operator"}),": can be used to indicate that the user has multiple ways of being related to an object"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/pr-preview/pr-685/docs/configuration-language#direct-relationship-type-restrictions",children:"Direct Relationship Type Restrictions"}),": can be used to indicate direct relationships between users and objects"]}),"\n",(0,o.jsxs)(i.li,{children:["A ",(0,o.jsx)(r.OK,{section:"what-is-a-check-request",linkName:"Check API Request"}),": used to check for relationships between users and objects"]}),"\n"]})]}),"\n",(0,o.jsx)(r.QF,{}),"\n",(0,o.jsx)(i.h2,{id:"step-by-step",children:"Step by step"}),"\n",(0,o.jsxs)(i.p,{children:["The Roles and Permissions example below is a trip booking system that has ",(0,o.jsx)(i.code,{children:"owners"})," and/or ",(0,o.jsx)(i.code,{children:"viewers"}),", both of which can have more granular permissions like adding bookings to a trip or viewing a trip's bookings."]}),"\n",(0,o.jsxs)(i.p,{children:["To represent this in an ",(0,o.jsx)(r.bU,{format:r.Ed.ProductLink})," environment, you need to:"]}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"Understand how roles are related to direct relations for the trip booking system"}),"\n",(0,o.jsx)(i.li,{children:"Add implied relations to the existing authorization model to define permissions for bookings"}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(r.OK,{section:"what-is-a-check-request",linkName:"Check"})," user roles and their permissions based on relationship\ntuples for direct and implied relations"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"01-understand-how-roles-work-within-the-trip-booking-system",children:"01. Understand how roles work within the trip booking system"}),"\n",(0,o.jsxs)(i.p,{children:["Roles are relations that are directly assigned to users. Below, the stated roles that a given user can be assigned are ",(0,o.jsx)(i.code,{children:"owner"})," and ",(0,o.jsx)(i.code,{children:"viewer"}),"."]}),"\n",(0,o.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"trip",relations:{owner:{this:{}},viewer:{this:{}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,o.jsx)(i.h3,{id:"02-add-permissions-for-bookings",children:"02. Add permissions for bookings"}),"\n",(0,o.jsxs)(i.p,{children:["Permissions are relations that users get through other relations. To avoid adding a ",(0,o.jsx)(i.a,{href:"/pr-preview/pr-685/docs/configuration-language#direct-relationship-type-restrictions",children:"direct relationship type restriction"})," to the relation in the authorization model while representing permissions, they instead define the relation via other relations in the model, which indicates that it is a permission granted to and implied from a different relation."]}),"\n",(0,o.jsxs)(i.p,{children:["To add permissions related to bookings, add new relations to the ",(0,o.jsx)(i.code,{children:"trip"})," object type denoting the various actions a user can take on ",(0,o.jsx)(i.code,{children:"trips"}),", like view, edit, delete, or rename."]}),"\n",(0,o.jsxs)(i.p,{children:["To allow ",(0,o.jsx)(i.code,{children:"viewers"})," of a ",(0,o.jsx)(i.code,{children:"trip"})," to have permissions to view bookings and ",(0,o.jsx)(i.code,{children:"owners"})," to have permissions to add/view bookings, you modify the type:"]}),"\n",(0,o.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"trip",relations:{owner:{this:{}},viewer:{this:{}},booking_adder:{computedUserset:{relation:"owner"}},booking_viewer:{union:{child:[{computedUserset:{relation:"viewer"}},{computedUserset:{relation:"owner"}}]}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsxs)(i.p,{children:["Note: both ",(0,o.jsx)(i.code,{children:"booking_viewer"})," and ",(0,o.jsx)(i.code,{children:"booking_adder"})," don't have ",(0,o.jsx)(i.a,{href:"/pr-preview/pr-685/docs/configuration-language#direct-relationship-type-restrictions",children:"direct relationship type restrictions"}),", which ensures that the relation can only be assigned through the role and not directly."]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"03-check-user-roles-and-their-permissions",children:"03. Check user roles and their permissions"}),"\n",(0,o.jsxs)(i.p,{children:["Your type definitions reflects the roles and permissions on how bookings can be viewed/added, so you can create ",(0,o.jsx)(r.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"})," to assign roles to users, then ",(0,o.jsx)(r.OK,{section:"what-is-a-check-request",linkName:"check"})," if users have the proper permissions."]}),"\n",(0,o.jsx)(i.p,{children:"Create two relationship tuples:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["give ",(0,o.jsx)(i.code,{children:"bob"})," the role of ",(0,o.jsx)(i.code,{children:"viewer"})," on ",(0,o.jsx)(i.code,{children:"trip"})," called Europe."]}),"\n",(0,o.jsxs)(i.li,{children:["give ",(0,o.jsx)(i.code,{children:"alice"})," the role of ",(0,o.jsx)(i.code,{children:"owner"})," on ",(0,o.jsx)(i.code,{children:"trip"})," called Europe."]}),"\n"]}),"\n",(0,o.jsx)(r.dp,{relationshipTuples:[{_description:"Add bob as viewer on trip:Europe",user:"user:bob",relation:"viewer",object:"trip:Europe"},{_description:"Add alice as owner on trip:Europe",user:"user:alice",relation:"owner",object:"trip:Europe"}]}),"\n",(0,o.jsxs)(i.p,{children:["Now check: is ",(0,o.jsx)(i.code,{children:"bob"})," allowed to view bookings on trip Europe?"]}),"\n",(0,o.jsx)(r.ou,{user:"user:bob",relation:"booking_viewer",object:"trip:Europe",allowed:!0}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"bob"})," is a ",(0,o.jsx)(i.code,{children:"booking_viewer"})," because of the following chain of resolution:"]}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"bob"})," is a ",(0,o.jsx)(i.code,{children:"viewer"})," on ",(0,o.jsx)(i.code,{children:"trip"}),": Europe"]}),"\n",(0,o.jsxs)(i.li,{children:["Any user related to the ",(0,o.jsx)(i.em,{children:"object"})," ",(0,o.jsx)(i.code,{children:"trip:"}),"Europe as ",(0,o.jsx)(i.code,{children:"viewer"})," is also related as a ",(0,o.jsx)(i.code,{children:"booking_viewer"})," (i.e ",(0,o.jsx)(i.code,{children:"usersRelatedToObjectAs: viewer"}),")"]}),"\n",(0,o.jsxs)(i.li,{children:["Therefore, all ",(0,o.jsx)(i.code,{children:"viewers"})," on a given ",(0,o.jsx)(i.code,{children:"trip"})," are ",(0,o.jsx)(i.code,{children:"booking_viewers"})]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["To confirm that ",(0,o.jsx)(i.code,{children:"bob"})," is not allowed to add bookings on trip Europe, run the following check:"]}),"\n",(0,o.jsx)(r.ou,{user:"user:bob",relation:"booking_adder",object:"trip:Europe",allowed:!1}),"\n",(0,o.jsx)(i.p,{children:"You also check: is alice allowed to view and add bookings on trip Europe?"}),"\n",(0,o.jsx)(r.ou,{user:"user:alice",relation:"booking_viewer",object:"trip:Europe",allowed:!0}),"\n",(0,o.jsx)(r.ou,{user:"user:alice",relation:"booking_adder",object:"trip:Europe",allowed:!0}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"alice"})," is a ",(0,o.jsx)(i.code,{children:"booking_viewer"})," and ",(0,o.jsx)(i.code,{children:"booking_adder"})," because of the following chain of resolution:"]}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"alice"})," is a ",(0,o.jsx)(i.code,{children:"owner"})," on ",(0,o.jsx)(i.code,{children:"trip"}),": Europe"]}),"\n",(0,o.jsxs)(i.li,{children:["Any user related to the ",(0,o.jsx)(i.em,{children:"object"})," ",(0,o.jsx)(i.code,{children:"trip:"}),"Europe as ",(0,o.jsx)(i.code,{children:"owner"})," is also related as a ",(0,o.jsx)(i.code,{children:"booking_viewer"})]}),"\n",(0,o.jsxs)(i.li,{children:["Any user related to the ",(0,o.jsx)(i.em,{children:"object"})," ",(0,o.jsx)(i.code,{children:"trip:"}),"Europe as ",(0,o.jsx)(i.code,{children:"owner"})," is also related as a ",(0,o.jsx)(i.code,{children:"booking_adder"})]}),"\n",(0,o.jsxs)(i.li,{children:["Therefore, all ",(0,o.jsx)(i.code,{children:"owners"})," on a given ",(0,o.jsx)(i.code,{children:"trip"})," are ",(0,o.jsx)(i.code,{children:"booking_viewers"})," and ",(0,o.jsx)(i.code,{children:"booking_adders"})," on that trip"]}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{type:"caution",children:(0,o.jsxs)(i.p,{children:["Use unique ids for each object and user within your application domain when creating relationship tuples for ",(0,o.jsx)(r.bU,{format:r.Ed.LongForm}),". This example first names and simple ids as an easy-to-follow example."]})}),"\n",(0,o.jsx)(i.h2,{id:"related-sections",children:"Related sections"}),"\n",(0,o.jsx)(r.XQ,{description:"See following sections for more on how to model for roles and permissions.",relatedLinks:[{title:"Modeling Concepts: Concentric Relationships",description:"Learn about how to represent a concentric relationships in {ProductName}.",link:"./building-blocks/concentric-relationships",id:"./building-blocks/concentric-relationships"},{title:"Modeling Google Drive",description:"See how to indicate that editors are commenters and viewers in Google Drive.",link:"./advanced/gdrive#01-individual-permissions",id:"./advanced/gdrive.mdx#01-individual-permissions"},{title:"Modeling GitHub",description:"See how to indicate that repository admins are writers and readers in GitHub.",link:"./advanced/github#01-permissions-for-individuals-in-an-org",id:"./advanced/github.mdx#01-permissions-for-individuals-in-an-org"}]})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);