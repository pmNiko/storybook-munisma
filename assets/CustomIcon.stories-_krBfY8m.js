import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{C as b}from"./CustomIcon-CEr3XA3X.js";import{G as u}from"./Grid-DTWtwkTX.js";import{b as z,g as j,s as N,u as v,_ as R,a as l,f as S,h as I}from"./DefaultPropsProvider-ELLn0s9H.js";import{r as w}from"./index-Cp_2WB0_.js";import{P as M}from"./Paper-DS3CdBkb.js";import{T as _}from"./Typography-DQ6QAh56.js";import"./index-D2MAbzvX.js";import"./assertThisInitialized-DIFuz7Pv.js";import"./useTheme-pdgmfwaB.js";import"./useTheme-DFr77biG.js";function k(e){return j("MuiCard",e)}z("MuiCard",["root"]);const G=["className","raised"],T=e=>{const{classes:o}=e;return I({root:["root"]},k,o)},U=N(M,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})(()=>({overflow:"hidden"})),F=w.forwardRef(function(o,r){const t=v({props:o,name:"MuiCard"}),{className:m,raised:s=!1}=t,d=R(t,G),a=l({},t,{raised:s}),p=T(a);return n.jsx(U,l({className:S(p.root,m),elevation:s?8:void 0,ref:r,ownerState:a},d))});function P(e){return j("MuiCardContent",e)}z("MuiCardContent",["root"]);const D=["className","component"],E=e=>{const{classes:o}=e;return I({root:["root"]},P,o)},V=N("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),A=w.forwardRef(function(o,r){const t=v({props:o,name:"MuiCardContent"}),{className:m,component:s="div"}=t,d=R(t,D),a=l({},t,{component:s}),p=E(a);return n.jsx(V,l({as:s,className:S(p.root,m),ownerState:a,ref:r},d))}),Y={title:"Components/CustomIcon",component:b,parameters:{layout:"centered"},argTypes:{iconName:{control:"text",description:"Nombre del ícono según la biblioteca de Material Icons.",defaultValue:"home"},iconFontSize:{control:"number",description:"Tamaño de la fuente para el ícono.",defaultValue:32},iconColor:{control:"color",description:"Color del ícono. Por defecto, es negro.",defaultValue:"black"}}},i={args:{iconName:"home",iconFontSize:32,iconColor:"black"}},c={render:()=>{const e=[{name:"home",color:"blue",size:40},{name:"favorite",color:"red",size:40},{name:"settings",color:"green",size:40},{name:"search",color:"purple",size:40},{name:"notifications",color:"orange",size:40},{name:"info",color:"teal",size:40},{name:"account_circle",color:"brown",size:40},{name:"help",color:"blue",size:40},{name:"lock",color:"black",size:40}];return n.jsx(u,{container:!0,spacing:3,justifyContent:"center",children:e.map((o,r)=>n.jsx(u,{item:!0,xs:12,sm:6,md:4,children:n.jsx(F,{sx:{display:"flex",justifyContent:"center",alignItems:"center",padding:2,boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)",borderRadius:2},children:n.jsxs(A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[n.jsx(b,{iconName:o.name,iconFontSize:o.size,iconColor:o.color}),n.jsx(_,{variant:"subtitle1",textAlign:"center",marginTop:1,children:o.name})]})})},r))})},args:{iconName:"home"}};var C,f,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const Z=["Home","IconGrid"];export{i as Home,c as IconGrid,Z as __namedExportsOrder,Y as default};
