"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1480],{54502:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>f,default:()=>v,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var l=t(87462),s=(t(67294),t(3905)),r=t(58219),o=(t(62316),t(51039)),n=t.n(o),m=(t(82723),t(9487)),i=t(41429),p=t(5397),d=t(4667),c=t(9472),u=t(85162);const h={id:"tournament-importer-controller-find-all",title:"TournamentImporterController_findAll",description:"TournamentImporterController_findAll",sidebar_label:"TournamentImporterController_findAll",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVU1v2zAM/SuGThsQ1N2OuRXdOnSnYcmwQ1EUiswk6mRJleSggeH/PlKyYzt22vZSxfzQ4yP5VDNjwfEgjb4v2JKtTeU0L0GH+9IaF8DdGh2cUQrc01bq4kYptmCWO3RCq2fLh5pRBAYLU6Hv8dYUgD4OXirpALMGV8GCSY0uloc92rzYQ8nZsmbhaCnUByf1jjXNIwV6a7QHT/av19f0rwAvnLSEE70xg0BYiJJs3FolRawhf/bkUE8v4M7xI8bJAKUffDebZxCBSnLERJDp2lTRBN6CKbMzf5yatUnfklYMzBtjFHBNdnhFxjRX98VsuAfeop+YhDlgl3bwPvCtfA2Vgw+UCAfkz88jVVJDZS8YfUCufZDCP83cNu9oFT/GaZn6NcNReehg9RjmL5zNjsMTZFCU/sbKFfXCryKrty2Bd118gqcLJPgC+jcg4zXGPnlh3JsO3HsE+IaD4K64YJb6uXLyErMWyZKCJv6CgynmE5+RPaazZaMvfVznuKhhBQO4Y2wtkPf7MkEWF3C0UqP9OW3LYDcGt6QgvlHQCxpeQX/oxKnlD4i/M0WEY4n5oBCiCO4NCecO4oaRvC1ZPkidd6jzeqCPTazAHToFrUhS2D4E65d5zq282lZhYxSubAFXwpTsHOA32PJKhSxlYSScHgQ2IRxjxg1w7BoeH4emFelimqrOoRXLOCbp06I93BlXcpRY9vPvmvqdZolAxnZJvTVxxlrS7yLi7JdL+j+RbCo2/fhydd1KOBck4ZTNGh9KrnvxHbQg63qQ9U3IqAlZ6sLoqtPQB2Q+x1GWcSOqJNqpQ+Pm95OFx+XwFUPm9oiLAup6wz2g9DcNfX6pwBHReDxwJ2nUIu2F9HTGkdhy5WGC7fRusU+/23H/nPXkjjF3b5eml+vAVQWJyX9wPHtum0d03wMvYsvr1uNGCLBhEDt5Kmk2TjP84/saG/sfkMrVvg==",sidebar_class_name:"get api-method",info_path:"docs/api/futbol-prode",custom_edit_url:null},f=void 0,y={unversionedId:"api/tournament-importer-controller-find-all",id:"api/tournament-importer-controller-find-all",title:"TournamentImporterController_findAll",description:"TournamentImporterController_findAll",source:"@site/docs/api/tournament-importer-controller-find-all.api.mdx",sourceDirName:"api",slug:"/api/tournament-importer-controller-find-all",permalink:"/api-docs/docs/api/tournament-importer-controller-find-all",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"tournament-importer-controller-find-all",title:"TournamentImporterController_findAll",description:"TournamentImporterController_findAll",sidebar_label:"TournamentImporterController_findAll",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVU1v2zAM/SuGThsQ1N2OuRXdOnSnYcmwQ1EUiswk6mRJleSggeH/PlKyYzt22vZSxfzQ4yP5VDNjwfEgjb4v2JKtTeU0L0GH+9IaF8DdGh2cUQrc01bq4kYptmCWO3RCq2fLh5pRBAYLU6Hv8dYUgD4OXirpALMGV8GCSY0uloc92rzYQ8nZsmbhaCnUByf1jjXNIwV6a7QHT/av19f0rwAvnLSEE70xg0BYiJJs3FolRawhf/bkUE8v4M7xI8bJAKUffDebZxCBSnLERJDp2lTRBN6CKbMzf5yatUnfklYMzBtjFHBNdnhFxjRX98VsuAfeop+YhDlgl3bwPvCtfA2Vgw+UCAfkz88jVVJDZS8YfUCufZDCP83cNu9oFT/GaZn6NcNReehg9RjmL5zNjsMTZFCU/sbKFfXCryKrty2Bd118gqcLJPgC+jcg4zXGPnlh3JsO3HsE+IaD4K64YJb6uXLyErMWyZKCJv6CgynmE5+RPaazZaMvfVznuKhhBQO4Y2wtkPf7MkEWF3C0UqP9OW3LYDcGt6QgvlHQCxpeQX/oxKnlD4i/M0WEY4n5oBCiCO4NCecO4oaRvC1ZPkidd6jzeqCPTazAHToFrUhS2D4E65d5zq282lZhYxSubAFXwpTsHOA32PJKhSxlYSScHgQ2IRxjxg1w7BoeH4emFelimqrOoRXLOCbp06I93BlXcpRY9vPvmvqdZolAxnZJvTVxxlrS7yLi7JdL+j+RbCo2/fhydd1KOBck4ZTNGh9KrnvxHbQg63qQ9U3IqAlZ6sLoqtPQB2Q+x1GWcSOqJNqpQ+Pm95OFx+XwFUPm9oiLAup6wz2g9DcNfX6pwBHReDxwJ2nUIu2F9HTGkdhy5WGC7fRusU+/23H/nPXkjjF3b5eml+vAVQWJyX9wPHtum0d03wMvYsvr1uNGCLBhEDt5Kmk2TjP84/saG/sfkMrVvg==",sidebar_class_name:"get api-method",info_path:"docs/api/futbol-prode",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"TournamentImporterController_importExternalLeagueSeason",permalink:"/api-docs/docs/api/tournament-importer-controller-import-external-league-season"},next:{title:"TournamentImporterController_importMatchResult",permalink:"/api-docs/docs/api/tournament-importer-controller-import-match-result"}},k={},b=[{value:"Request",id:"request",level:2}],g={toc:b};function v(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,l.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"TournamentImporterController_findAll"),(0,s.kt)(n(),{method:"get",path:"/tournaments/external/{countryCode}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"TournamentImporterController_findAll"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"countryCode",required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"logoUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"isImported",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"externalId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"season",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"coverage"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"fixtures"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"events",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"lineups",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"statistics_fixtures",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"statistics_players",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"standings",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"players",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"top_scorers",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"top_assists",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"top_cards",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"injuries",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"predictions",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"odds",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'[\n  {\n    "name": "string",\n    "logoUrl": "string",\n    "isImported": true,\n    "externalId": "string",\n    "season": "string",\n    "coverage": {\n      "fixtures": {\n        "events": true,\n        "lineups": true,\n        "statistics_fixtures": true,\n        "statistics_players": true\n      },\n      "standings": true,\n      "players": true,\n      "top_scorers": true,\n      "top_assists": true,\n      "top_cards": true,\n      "injuries": true,\n      "predictions": true,\n      "odds": true\n    }\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);