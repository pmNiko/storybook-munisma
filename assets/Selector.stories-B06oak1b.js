import{j as l}from"./jsx-runtime-BjgbQsUx.js";import{r as c}from"./index-Cp_2WB0_.js";import{B as E}from"./Box-CrlaK6wr.js";import{F as C,I as q,S as I}from"./Select-CcTYwGjV.js";import{M as A}from"./MenuItem-DpxW1fKZ.js";import{T as F}from"./Typography-DQ6QAh56.js";import{f as u}from"./index-DQLiMaGX.js";import"./index-D2MAbzvX.js";import"./DefaultPropsProvider-ELLn0s9H.js";import"./useTheme-DFr77biG.js";import"./index-D1OkooKU.js";import"./Popover-BtA_Jk0f.js";import"./Modal-Cmz8wYNv.js";import"./Portal-D7fkpCCq.js";import"./ButtonBase-B3vSuhhO.js";import"./assertThisInitialized-DIFuz7Pv.js";import"./index-CrNuPw6X.js";import"./index-BIm0odtm.js";import"./useTheme-pdgmfwaB.js";import"./Paper-DS3CdBkb.js";import"./Grow-HZtlPjEj.js";import"./useId-DSj0T10Y.js";import"./createSvgIcon-xASClXZy.js";const o=({disabled:e=!1,label:t,options:a,setSelected:p,selected:y,defaultValue:j,width:m})=>{const T=n=>{p(n.target.value)};return c.useEffect(()=>{var n;a&&j&&p((n=a[0])==null?void 0:n.value)},[a]),l.jsx(E,{mt:3,textAlign:"center",width:250,children:l.jsxs(C,{sx:{width:`${m||"100%"}`},children:[l.jsx(q,{id:"year-tender-label",children:t}),l.jsx(I,{labelId:t,id:t,value:y,label:t,onChange:T,disabled:e,children:a==null?void 0:a.map((n,D)=>l.jsx(A,{value:n.value,children:l.jsx(F,{children:n.label})},n.label+D))})]})})};o.__docgenInfo={description:`Componente Selector

Este componente muestra un selector desplegable configurable utilizando Material UI.
Permite seleccionar un valor de una lista de opciones proporcionada y gestionar
el estado del valor seleccionado.

Props:
- \`disabled\` (opcional): Valor por defecto: \`false\`.
- \`label\`: Descripción del selector.
- \`options\`: Lista de opciones disponibles en el selector.
  - \`label\`: Texto visible en la opción.
  - \`value\`: Valor asociado a la opción (puede ser texto o número).
- \`setSelected\`: Función para actualizar el valor seleccionado.
- \`selected\`: Valor actual seleccionado.
- \`defaultValue\` (opcional): Si es \`true\`, selecciona automáticamente la primera opción al cargar.
  Valor por defecto: \`false\`.
- \`width\` (opcional): Ancho del selector. Puede ser un número o un string con unidades CSS.

Uso:
\`\`\`tsx
const options = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
];

const [selected, setSelected] = useState<string>('');

<Selector
  label="Selecciona una opción"
  options={options}
  selected={selected}
  setSelected={setSelected}
  defaultValue={true}
  width={300}
/>
\`\`\`

Notas:
- Si \`defaultValue\` es \`true\` y la lista de opciones no está vacía, selecciona automáticamente
  la primera opción al cargar el componente.
- El ancho puede ajustarse dinámicamente con la prop \`width\`.
- El estado del valor seleccionado se gestiona externamente mediante las props \`selected\` y \`setSelected\`.`,methods:[],displayName:"Selector",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string | number;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],raw:"OptionListSelector[]"},description:""},setSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},selected:{required:!0,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};const te={title:"Inputs/Selector",component:o,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",description:"Deshabilita el selector si es `true`.",defaultValue:!1},label:{control:"text",description:"Texto del encabezado del selector.",defaultValue:"Selecciona una opción"},options:{control:!1,description:"Lista de opciones disponibles para seleccionar."},setSelected:{control:!1,description:"Función para actualizar el valor seleccionado. Gestionado externamente."},selected:{control:!1,description:"Valor actualmente seleccionado."},defaultValue:{control:"boolean",description:"Selecciona automáticamente la primera opción al cargar el componente.",defaultValue:!1},width:{control:"text",description:"Ancho del selector. Puede ser un número o un string con unidades CSS.",defaultValue:"300px"}}},s=[{label:"🇦🇷 Argentina",value:"AR"},{label:"🇧🇷 Brasil",value:"BR"},{label:"🇨🇱 Chile",value:"CL"},{label:"🇺🇸 Estados Unidos",value:"US"},{label:"🇨🇦 Canadá",value:"CA"},{label:"🇪🇸 España",value:"ES"},{label:"🇫🇷 Francia",value:"FR"},{label:"🇩🇪 Alemania",value:"DE"},{label:"🇮🇹 Italia",value:"IT"},{label:"🇯🇵 Japón",value:"JP"}],r={render:e=>{const[t,a]=c.useState("");return l.jsx(o,{label:e.label,options:e.options,width:e.width,defaultValue:e.defaultValue,disabled:e.disabled,selected:t,setSelected:a})},args:{disabled:!1,defaultValue:!1,width:"250px",label:"Selecciona un pais",options:s,selected:s[0].value,setSelected:u()}},i={render:e=>{const[t,a]=c.useState("");return l.jsx(o,{label:e.label,options:e.options,width:e.width,defaultValue:e.defaultValue,disabled:e.disabled,selected:t,setSelected:a})},args:{disabled:!1,defaultValue:!0,width:"250px",label:"Selecciona un pais",options:s,selected:s[0].value,setSelected:u()}},d={render:e=>{const[t,a]=c.useState("");return l.jsx(o,{label:e.label,options:e.options,width:e.width,defaultValue:e.defaultValue,disabled:e.disabled,selected:t,setSelected:a})},args:{disabled:!0,defaultValue:!1,width:"250px",label:"Selector Deshabilitado",options:s,selected:s[0].value,setSelected:u()}};var b,f,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string>("");
    return <Selector label={args.label} options={args.options} width={args.width} defaultValue={args.defaultValue} disabled={args.disabled} selected={selected} setSelected={setSelected} />;
  },
  args: {
    disabled: false,
    defaultValue: false,
    width: "250px",
    label: "Selecciona un pais",
    options: options,
    selected: options[0].value,
    setSelected: fn()
  }
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var g,h,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string>("");
    return <Selector label={args.label} options={args.options} width={args.width} defaultValue={args.defaultValue} disabled={args.disabled} selected={selected} setSelected={setSelected} />;
  },
  args: {
    disabled: false,
    defaultValue: true,
    width: "250px",
    label: "Selecciona un pais",
    options: options,
    selected: options[0].value,
    setSelected: fn()
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var V,x,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string>("");
    return <Selector label={args.label} options={args.options} width={args.width} defaultValue={args.defaultValue} disabled={args.disabled} selected={selected} setSelected={setSelected} />;
  },
  args: {
    disabled: true,
    defaultValue: false,
    width: "250px",
    label: "Selector Deshabilitado",
    options: options,
    selected: options[0].value,
    setSelected: fn()
  }
}`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const le=["Default","WithDefaultValue","DisabledSelector"];export{r as Default,d as DisabledSelector,i as WithDefaultValue,le as __namedExportsOrder,te as default};
