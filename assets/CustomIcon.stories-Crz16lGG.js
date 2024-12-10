import{j as n}from"./jsx-runtime-Bsf-Y80U.js";import{C as b}from"./CustomIcon-C0eNsoOU.js";import{G as u}from"./Grid-2VihIdD4.js";import{b as z,g as j,s as N,u as v,_ as R,a as l,f as S,h as I}from"./DefaultPropsProvider--YwijEWK.js";import{r as w}from"./index-CmnR7VnH.js";import{P as M}from"./Paper-Cd0-ua4e.js";import{T as _}from"./Typography-mNUyEguK.js";import"./assertThisInitialized-DIFuz7Pv.js";import"./useTheme-B6Pr7AB7.js";import"./useTheme-CtltR20v.js";function k(o){return j("MuiCard",o)}z("MuiCard",["root"]);const G=["className","raised"],T=o=>{const{classes:e}=o;return I({root:["root"]},k,e)},U=N(M,{name:"MuiCard",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({overflow:"hidden"})),F=w.forwardRef(function(e,r){const t=v({props:e,name:"MuiCard"}),{className:m,raised:s=!1}=t,d=R(t,G),a=l({},t,{raised:s}),p=T(a);return n.jsx(U,l({className:S(p.root,m),elevation:s?8:void 0,ref:r,ownerState:a},d))});function P(o){return j("MuiCardContent",o)}z("MuiCardContent",["root"]);const D=["className","component"],E=o=>{const{classes:e}=o;return I({root:["root"]},P,e)},V=N("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),A=w.forwardRef(function(e,r){const t=v({props:e,name:"MuiCardContent"}),{className:m,component:s="div"}=t,d=R(t,D),a=l({},t,{component:s}),p=E(a);return n.jsx(V,l({as:s,className:S(p.root,m),ownerState:a,ref:r},d))}),X={title:"Components/CustomIcon",component:b,parameters:{layout:"centered"},argTypes:{iconName:{control:"text",description:"Nombre del ícono según la biblioteca de Material Icons.",defaultValue:"home"},iconFontSize:{control:"number",description:"Tamaño de la fuente para el ícono.",defaultValue:32},iconColor:{control:"color",description:"Color del ícono. Por defecto, es negro.",defaultValue:"black"}}},i={args:{iconName:"home",iconFontSize:32,iconColor:"black"}},c={render:()=>{const o=[{name:"home",color:"blue",size:40},{name:"favorite",color:"red",size:40},{name:"settings",color:"green",size:40},{name:"search",color:"purple",size:40},{name:"notifications",color:"orange",size:40},{name:"info",color:"teal",size:40},{name:"account_circle",color:"brown",size:40},{name:"help",color:"blue",size:40},{name:"lock",color:"black",size:40}];return n.jsx(u,{container:!0,spacing:3,justifyContent:"center",children:o.map((e,r)=>n.jsx(u,{item:!0,xs:12,sm:6,md:4,children:n.jsx(F,{sx:{display:"flex",justifyContent:"center",alignItems:"center",padding:2,boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)",borderRadius:2},children:n.jsxs(A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[n.jsx(b,{iconName:e.name,iconFontSize:e.size,iconColor:e.color}),n.jsx(_,{variant:"subtitle1",textAlign:"center",marginTop:1,children:e.name})]})})},r))})},args:{iconName:"home"}};var C,f,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    iconName: "home",
    iconFontSize: 32,
    iconColor: "black"
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,h,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const icons = [{
      name: "home",
      color: "blue",
      size: 40
    }, {
      name: "favorite",
      color: "red",
      size: 40
    }, {
      name: "settings",
      color: "green",
      size: 40
    }, {
      name: "search",
      color: "purple",
      size: 40
    }, {
      name: "notifications",
      color: "orange",
      size: 40
    }, {
      name: "info",
      color: "teal",
      size: 40
    }, {
      name: "account_circle",
      color: "brown",
      size: 40
    }, {
      name: "help",
      color: "blue",
      size: 40
    }, {
      name: "lock",
      color: "black",
      size: 40
    }];
    return <Grid container spacing={3} justifyContent="center">
        {icons.map((icon, index) => <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: 2
        }}>
              <CardContent sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}>
                <CustomIcon iconName={icon.name} iconFontSize={icon.size} iconColor={icon.color} />
                <Typography variant="subtitle1" textAlign="center" marginTop={1}>
                  {icon.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>)}
      </Grid>;
  },
  args: {
    iconName: "home"
  }
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const Y=["Home","IconGrid"];export{i as Home,c as IconGrid,Y as __namedExportsOrder,X as default};
