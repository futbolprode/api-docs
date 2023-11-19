"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[9805],{38710:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>k,default:()=>g,frontMatter:()=>y,metadata:()=>T,toc:()=>f});var s=t(87462),m=(t(67294),t(3905)),r=t(58219),n=(t(62316),t(51039)),l=t.n(n),i=(t(82723),t(9487)),o=t(41429),d=t(5397),p=t(4667),c=t(9472),u=t(85162);const y={id:"teams-controller-by-tournament",title:"TeamsController_byTournament",description:"TeamsController_byTournament",sidebar_label:"TeamsController_byTournament",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VU1v2zAM/SuBThvg1VnRk29Dtw7dadgy7BAUA20zsTrZUvVR1DD830fKTmI3KdoO2ymORPKRj3xUJ7RBC17q5roUmVgh1O5SN95qpdD+ytuVDraBGhsvEmHA0qdH60S27gSfk5Pfm1CMRFi8C9IihfM2YCJkQzYGfEV3rqiwBpF1wreGfZ23stmKvk+6wbBCKNHOwmxAOYozoj282wSfa2WsLvHdM3ETgQ9QG8VHdVvo2kDT/j1apZ1/IVoRnCc4djsjXMK8YRRndOPQse/5csk/JbrCSsMtIDeKURD9TDfdgTFKFrE96a1jg+4YHKyFlvykx9pNznV+i0XsmuUmeznAynJi04Q6p/r7Xb1HfUmE0lv9w6qTd4UONCrtvwcFZSo4vyTyTl5vFGyfysnzCL+AnsPkTQb4VY79dGzWXONY0S6JeWTqv5c+DsflyFvPE0NyakBdl6dzewphR/0kKouX02K3i+XFieGKxcKW1TumSO5zm2c2AKm/0rwptjgsBJJfJtIYLD1Um3bTpdCzZtDe7/ZG4NaJynvjsjQFI88mIotqeZzVR9xAUH4xRBGsJYdFsNK3MWKOYOk8W99Mr76zVIYB3BmM+mG6xqNk/LjStgZSnfjyc8WdGzrBSUbaZLPRsUMj2Vcx48VXTvkoXTrgYoc/78+Wo6qhYFVzNEOLpIao53HRRN4XB+IXebuYMT9D2E+Kp/lJjQLaZhQ2DJoYurI+MYX0J5uta2IrLjWy7rocHJKs+p6P7wKystf0eQ9WQs5lE9WldPx92JSPEtuvL/Hm2zi7bxcHQucJ76TWsNDuQQUc2PuN7eOHpb8h+3Ffvy6Pp8AHkJPvyT4Vfin+D9L4lsyQBrsPRYFmenf0DPCQ75X4+dOKJvQPJg+scA==",sidebar_class_name:"get api-method",info_path:"docs/api/futbol-prode",custom_edit_url:null},k=void 0,T={unversionedId:"api/teams-controller-by-tournament",id:"api/teams-controller-by-tournament",title:"TeamsController_byTournament",description:"TeamsController_byTournament",source:"@site/docs/api/teams-controller-by-tournament.api.mdx",sourceDirName:"api",slug:"/api/teams-controller-by-tournament",permalink:"/docs/api/teams-controller-by-tournament",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"teams-controller-by-tournament",title:"TeamsController_byTournament",description:"TeamsController_byTournament",sidebar_label:"TeamsController_byTournament",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VU1v2zAM/SuBThvg1VnRk29Dtw7dadgy7BAUA20zsTrZUvVR1DD830fKTmI3KdoO2ymORPKRj3xUJ7RBC17q5roUmVgh1O5SN95qpdD+ytuVDraBGhsvEmHA0qdH60S27gSfk5Pfm1CMRFi8C9IihfM2YCJkQzYGfEV3rqiwBpF1wreGfZ23stmKvk+6wbBCKNHOwmxAOYozoj282wSfa2WsLvHdM3ETgQ9QG8VHdVvo2kDT/j1apZ1/IVoRnCc4djsjXMK8YRRndOPQse/5csk/JbrCSsMtIDeKURD9TDfdgTFKFrE96a1jg+4YHKyFlvykx9pNznV+i0XsmuUmeznAynJi04Q6p/r7Xb1HfUmE0lv9w6qTd4UONCrtvwcFZSo4vyTyTl5vFGyfysnzCL+AnsPkTQb4VY79dGzWXONY0S6JeWTqv5c+DsflyFvPE0NyakBdl6dzewphR/0kKouX02K3i+XFieGKxcKW1TumSO5zm2c2AKm/0rwptjgsBJJfJtIYLD1Um3bTpdCzZtDe7/ZG4NaJynvjsjQFI88mIotqeZzVR9xAUH4xRBGsJYdFsNK3MWKOYOk8W99Mr76zVIYB3BmM+mG6xqNk/LjStgZSnfjyc8WdGzrBSUbaZLPRsUMj2Vcx48VXTvkoXTrgYoc/78+Wo6qhYFVzNEOLpIao53HRRN4XB+IXebuYMT9D2E+Kp/lJjQLaZhQ2DJoYurI+MYX0J5uta2IrLjWy7rocHJKs+p6P7wKystf0eQ9WQs5lE9WldPx92JSPEtuvL/Hm2zi7bxcHQucJ76TWsNDuQQUc2PuN7eOHpb8h+3Ffvy6Pp8AHkJPvyT4Vfin+D9L4lsyQBrsPRYFmenf0DPCQ75X4+dOKJvQPJg+scA==",sidebar_class_name:"get api-method",info_path:"docs/api/futbol-prode",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"TeamsController_remove",permalink:"/docs/api/teams-controller-remove"},next:{title:"TournamentsController_findAll",permalink:"/docs/api/tournaments-controller-find-all"}},h={},f=[{value:"Request",id:"request",level:2}],b={toc:f};function g(e){let{components:a,...t}=e;return(0,m.kt)("wrapper",(0,s.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"TeamsController_byTournament"),(0,m.kt)(l(),{method:"get",path:"/teams/tournament/{tournamentId}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"TeamsController_byTournament"),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(o.Z,{className:"paramsItem",param:{name:"tournamentId",required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Header Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(o.Z,{className:"paramsItem",param:{in:"header",required:!1,name:"x-futbolprode-path",schema:{type:"string",example:"mycompany"}},mdxType:"ParamsItem"}),(0,m.kt)(o.Z,{className:"paramsItem",param:{in:"header",required:!1,name:"x-futbolprode-host",schema:{type:"string",example:"customprode.com"}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(r.Z,{mdxType:"ApiTabs"},(0,m.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null),(0,m.kt)("div",null,(0,m.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"logoUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"country"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"alpha2Code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"flagUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"teams",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"tournaments",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"})))),(0,m.kt)(p.Z,{collapsible:!1,name:"externalId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(d.Z,{responseExample:'[\n  {\n    "id": 0,\n    "name": "string",\n    "logoUrl": "string",\n    "country": {\n      "id": 0,\n      "name": "string",\n      "alpha2Code": "string",\n      "flagUrl": "string",\n      "teams": [\n        "string"\n      ],\n      "tournaments": [\n        "string"\n      ]\n    },\n    "externalId": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(u.default,{label:"404",value:"404",mdxType:"TabItem"},(0,m.kt)("div",null),(0,m.kt)("div",null))))))}g.isMDXComponent=!0}}]);