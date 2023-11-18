"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1746],{28531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>T});var r=a(87462),o=(a(67294),a(3905)),l=a(58219),m=(a(62316),a(51039)),n=a.n(m),i=(a(82723),a(9487)),s=a(41429),p=(a(5397),a(4667)),u=(a(9472),a(85162));const d={id:"tournament-importer-controller-import-match-result-manual",title:"TournamentImporterController_importMatchResultManual",description:"TournamentImporterController_importMatchResultManual",sidebar_label:"TournamentImporterController_importMatchResultManual",hide_title:!0,hide_table_of_contents:!0,api:"eJydVEtv2zAM/iuGThvgLWmPvrVZumbY0qBJl8NWDLTNxu5kyZPktobh/z5Scl5NscMalJb4EsnvkzqhazTgSq1muUjESjdGQYXKzapaG4dmopUzWko0v0qv+gYuK27RNpKWqgEpYlGDoSDytiL50QnOQMkq9qS0sTD4pykN0gnONBiLUpG5BleQzWYFViCSTri25jDrTKk2ou/vQyBad6nzlj1e58moOKqVTVDXssx8J6NHqxXrTlLr9BEzxwUb7tuVaNla6ApXCNVnDdIeuKumStGIPhbwDO2/PawD19jTNmKB5ERjEVcr2lxMWS6mc5LLu+WCPrO5Vy1ZTi7mE/a6/MRyzXJ9Q+LsmsQ5Cx9/zeLSh9H/19n3KX1WPmi+FPdUTgF2gQrktsWhqFRriaC44NKunvUaWrtEGmPuYX3Lk1xd6STrDqD3iPQ9Ww3aWisbzjkfn/EnR5uZsmY0KC4kgQ2zQ7gdxawghI89/5N/xL1CM39rbT28TK1EjA7OGnk2oh11Ay37kfFJyDBksWieAoXveZM1pnStJ3SKYAhmMvQHpiXTK7S9dRg45wcYVPGwuNKGDib9lzXjNky5cK7202HK3u7JPn2BquaZn5BzfELG8Z58gWPH2A837k202cZUUA/aQz/gfNW4VMtoYXSO4jVEpOAphc3Zx7EI1xAyvobcCmNAM+WEw0OwRzXawhrtcY0CrpGvKQrIRjtojw7fsdPhixvVEkpP5cZItgXUjxkWiwF3WiWHDxKf4q3+HEK1YOpQdNelYPHOyL5nNUFi2kCJJzAlpDwhokReWl4T6R4IBTwpdPc0iXe3w6v1PtoDf9zAoATV8nRBNhgG/Rvbg3e09xcbIfdU7AbrJBz0YcU59tEn7yEzd3dPFjf+uUmHd7VioBNh4JlnQzIRP+lHG+0b8hz3+k5IUJsGNuwf8vLfX4WoIvo=",sidebar_class_name:"post api-method",info_path:"docs/api/futbol-prode",custom_edit_url:null},c=void 0,h={unversionedId:"api/tournament-importer-controller-import-match-result-manual",id:"api/tournament-importer-controller-import-match-result-manual",title:"TournamentImporterController_importMatchResultManual",description:"TournamentImporterController_importMatchResultManual",source:"@site/docs/api/tournament-importer-controller-import-match-result-manual.api.mdx",sourceDirName:"api",slug:"/api/tournament-importer-controller-import-match-result-manual",permalink:"/docs/api/tournament-importer-controller-import-match-result-manual",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"tournament-importer-controller-import-match-result-manual",title:"TournamentImporterController_importMatchResultManual",description:"TournamentImporterController_importMatchResultManual",sidebar_label:"TournamentImporterController_importMatchResultManual",hide_title:!0,hide_table_of_contents:!0,api:"eJydVEtv2zAM/iuGThvgLWmPvrVZumbY0qBJl8NWDLTNxu5kyZPktobh/z5Scl5NscMalJb4EsnvkzqhazTgSq1muUjESjdGQYXKzapaG4dmopUzWko0v0qv+gYuK27RNpKWqgEpYlGDoSDytiL50QnOQMkq9qS0sTD4pykN0gnONBiLUpG5BleQzWYFViCSTri25jDrTKk2ou/vQyBad6nzlj1e58moOKqVTVDXssx8J6NHqxXrTlLr9BEzxwUb7tuVaNla6ApXCNVnDdIeuKumStGIPhbwDO2/PawD19jTNmKB5ERjEVcr2lxMWS6mc5LLu+WCPrO5Vy1ZTi7mE/a6/MRyzXJ9Q+LsmsQ5Cx9/zeLSh9H/19n3KX1WPmi+FPdUTgF2gQrktsWhqFRriaC44NKunvUaWrtEGmPuYX3Lk1xd6STrDqD3iPQ9Ww3aWisbzjkfn/EnR5uZsmY0KC4kgQ2zQ7gdxawghI89/5N/xL1CM39rbT28TK1EjA7OGnk2oh11Ay37kfFJyDBksWieAoXveZM1pnStJ3SKYAhmMvQHpiXTK7S9dRg45wcYVPGwuNKGDib9lzXjNky5cK7202HK3u7JPn2BquaZn5BzfELG8Z58gWPH2A837k202cZUUA/aQz/gfNW4VMtoYXSO4jVEpOAphc3Zx7EI1xAyvobcCmNAM+WEw0OwRzXawhrtcY0CrpGvKQrIRjtojw7fsdPhixvVEkpP5cZItgXUjxkWiwF3WiWHDxKf4q3+HEK1YOpQdNelYPHOyL5nNUFi2kCJJzAlpDwhokReWl4T6R4IBTwpdPc0iXe3w6v1PtoDf9zAoATV8nRBNhgG/Rvbg3e09xcbIfdU7AbrJBz0YcU59tEn7yEzd3dPFjf+uUmHd7VioBNh4JlnQzIRP+lHG+0b8hz3+k5IUJsGNuwf8vLfX4WoIvo=",sidebar_class_name:"post api-method",info_path:"docs/api/futbol-prode",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"TournamentImporterController_importRoundResult",permalink:"/docs/api/tournament-importer-controller-import-round-result"},next:{title:"TournamentImporterController_standings",permalink:"/docs/api/tournament-importer-controller-standings"}},k={},T=[{value:"Request",id:"request",level:2}],N={toc:T};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"openapi__heading"},"TournamentImporterController_importMatchResultManual"),(0,o.kt)(n(),{method:"post",path:"/tournaments/matches/{matchId}/result/manual",mdxType:"MethodEndpoint"}),(0,o.kt)("p",null,"TournamentImporterController_importMatchResultManual"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(s.Z,{className:"paramsItem",param:{name:"matchId",required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)(i.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,o.kt)(u.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,o.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,o.kt)("strong",{className:"openapi-schema__required"},"required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"homeTeamGoals",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"awayTeamGoals",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`FT`, `AET`, `PEN`, `SUSP`, `INT`, `PST`, `CANC`, `ABD`, `AWD`, `WO`, `1H`, `2H`, `ET`, `HT`, `BT`, `P`, `LIVE`, `TBD`, `NS`]",schema:{type:"string",enum:["FT","AET","PEN","SUSP","INT","PST","CANC","ABD","AWD","WO","1H","2H","ET","HT","BT","P","LIVE","TBD","NS"]},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"hasPenalties",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"isTwoWaysSecondMatch",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(l.Z,{mdxType:"ApiTabs"},(0,o.kt)(u.default,{label:"201",value:"201",mdxType:"TabItem"},(0,o.kt)("div",null),(0,o.kt)("div",null))))))}b.isMDXComponent=!0}}]);