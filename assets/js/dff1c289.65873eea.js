"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[3792],{30089:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=o(87462),n=(o(67294),o(3905));const a={sidebar_position:1,tags:["test"]},i="Manage Docs Versions",r={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",draft:!1,editUrl:"https://github.com/futbolprode/apidocs/docs/tutorial-extras/manage-docs-versions.md",tags:[{label:"test",permalink:"/docs/tags/test"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["test"]},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"},next:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},l={},d=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,n.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,n.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,n.kt)("p",null,"Release a version 1.0 of your project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,n.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,n.kt)("p",null,"Your docs now have 2 versions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,n.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,n.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,n.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,n.kt)("p",null,"Modify the ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,n.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docs Version Dropdown",src:o(50953).Z,width:"494",height:"276"})),(0,n.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,n.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}c.isMDXComponent=!0},50953:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);