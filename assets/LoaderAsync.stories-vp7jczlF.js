import{j as a}from"./jsx-runtime-Bsf-Y80U.js";import{g as V,b as W,k as U,s as v,c as u,a as t,e as I,u as G,_ as O,f as Z,h as H}from"./DefaultPropsProvider--YwijEWK.js";import{r as Q}from"./index-CmnR7VnH.js";import{T as C}from"./Typography-mNUyEguK.js";import{B as Y}from"./Box-CFxmXA4T.js";import{S as P}from"./Skeleton-zJwQzP1Y.js";import"./useTheme-CtltR20v.js";function ee(e){return V("MuiCircularProgress",e)}W("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const re=["className","color","disableShrink","size","style","thickness","value","variant"];let m=e=>e,j,z,E,T;const o=44,ae=U(j||(j=m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),se=U(z||(z=m`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),oe=e=>{const{classes:r,variant:s,color:n,disableShrink:g}=e,f={root:["root",s,`color${u(n)}`],svg:["svg"],circle:["circle",`circle${u(s)}`,g&&"circleDisableShrink"]};return H(f,ee,r)},ne=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${u(s.color)}`]]}})(({ownerState:e,theme:r})=>t({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&I(E||(E=m`
      animation: ${0} 1.4s linear infinite;
    `),ae)),te=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),ie=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${u(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>t({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&I(T||(T=m`
      animation: ${0} 1.4s ease-in-out infinite;
    `),se)),ce=Q.forwardRef(function(r,s){const n=G({props:r,name:"MuiCircularProgress"}),{className:g,color:f="primary",disableShrink:X=!1,size:h=40,style:J,thickness:i=3.6,value:y=0,variant:S="indeterminate"}=n,K=O(n,re),c=t({},n,{color:f,disableShrink:X,size:h,thickness:i,value:y,variant:S}),x=oe(c),k={},_={},L={};if(S==="determinate"){const b=2*Math.PI*((o-i)/2);k.strokeDasharray=b.toFixed(3),L["aria-valuenow"]=Math.round(y),k.strokeDashoffset=`${((100-y)/100*b).toFixed(3)}px`,_.transform="rotate(-90deg)"}return a.jsx(ne,t({className:Z(x.root,g),style:t({width:h,height:h},_,J),ownerState:c,ref:s,role:"progressbar"},L,K,{children:a.jsx(te,{className:x.svg,ownerState:c,viewBox:`${o/2} ${o/2} ${o} ${o}`,children:a.jsx(ie,{className:x.circle,style:k,ownerState:c,cx:o,cy:o,r:(o-i)/2,fill:"none",strokeWidth:i})})}))}),w=({isLoading:e,fallback:r,children:s})=>e&&!r?a.jsx(ce,{}):e&&r?a.jsx(a.Fragment,{children:r}):a.jsx(a.Fragment,{children:s});w.__docgenInfo={description:`Este componente muestra un indicador de carga mientras se espera la finalización de un proceso asíncrono.
Una vez completado, renderiza el contenido hijo proporcionado.

__Props__
- \`isLoading\` (requerido): Booleano que indica si el componente está en un estado de carga.
- \`fallback\` (opcional): Componente o elemento TSX personalizado que se mostrará como indicador de carga.
  Si no se proporciona, se muestra un spinner (\`CircularProgress\`) de Material UI.
- \`children\` (requerido): Contenido TSX que se renderiza cuando \`isLoading\` es \`false\`.

__Funcionalidades__
- Muestra un spinner predeterminado o un componente personalizado mientras \`isLoading\` es \`true\`.
- Renderiza el contenido principal (\`children\`) una vez que la carga ha finalizado (\`isLoading\` es \`false\`).

---

__Uso__

\`\`\`tsx
import { LoaderAsync } from './LoaderAsync';
import { CircularProgress } from '@mui/material';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simula un proceso asíncrono
  }, []);

  return (
    <LoaderAsync
      isLoading={loading}
      fallback={<CircularProgress color="secondary" />}
    >
      <div>Contenido cargado</div>
    </LoaderAsync>
  );
};
\`\`\`

__Notas__
- Si no se pasa \`fallback\`, se muestra un spinner predeterminado (\`CircularProgress\`).
- Este componente es útil para manejar interfaces que requieren espera mientras se resuelve un proceso asíncrono.`,methods:[],displayName:"LoaderAsync",props:{isLoading:{required:!0,tsType:{name:"boolean"},description:""},fallback:{required:!1,tsType:{name:"JSX.Element"},description:""},children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};const he={title:"Components/LoaderAsync",component:w,parameters:{layout:"centered"},argTypes:{isLoading:{control:"boolean",description:"Indica si el componente está en estado de carga.",defaultValue:!0},fallback:{control:!1,description:"Elemento personalizado que se muestra mientras `isLoading` es `true`."},children:{control:!1,description:"Contenido que se renderiza cuando `isLoading` es `false`."}}},l={args:{isLoading:!0,children:a.jsx(C,{children:"¡El contenido ya está listo!"})}},d={args:{isLoading:!0,fallback:a.jsxs(Y,{children:[a.jsx(P,{variant:"text",sx:{fontSize:"2rem",marginBottom:1}}),a.jsx(P,{variant:"rectangular",width:300,height:100})]}),children:a.jsx(C,{children:"¡El contenido ya está listo!"})}},p={args:{isLoading:!1,children:a.jsx(C,{children:"¡El contenido ya está listo!"})}};var q,D,R;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: <Typography>¡El contenido ya está listo!</Typography>
  }
}`,...(R=(D=l.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var $,M,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    fallback: <Box>
        <Skeleton variant="text" sx={{
        fontSize: "2rem",
        marginBottom: 1
      }} />
        <Skeleton variant="rectangular" width={300} height={100} />
      </Box>,
    children: <Typography>¡El contenido ya está listo!</Typography>
  }
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var B,F,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    children: <Typography>¡El contenido ya está listo!</Typography>
  }
}`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const ye=["DefaultLoader","CustomFallback","Ready"];export{d as CustomFallback,l as DefaultLoader,p as Ready,ye as __namedExportsOrder,he as default};
