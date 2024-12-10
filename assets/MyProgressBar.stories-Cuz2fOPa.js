import{j as r}from"./jsx-runtime-Bsf-Y80U.js";import{B as n}from"./Box-CFxmXA4T.js";import{L as u}from"./LinearProgress-DWl8QVtf.js";import{T as m}from"./Typography-mNUyEguK.js";import"./index-CmnR7VnH.js";import"./DefaultPropsProvider--YwijEWK.js";import"./useTheme-CtltR20v.js";import"./index-Bx95iVmm.js";function g(e){return r.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[r.jsx(n,{sx:{width:"100%",mr:1},children:r.jsx(u,{variant:"determinate",...e})}),r.jsx(n,{sx:{minWidth:35},children:r.jsx(m,{variant:"body2",color:"text.secondary",children:`${Math.round(e.value)}%`})})]})}const c=({progress:e})=>r.jsx(n,{sx:{width:`${e}`},children:r.jsx(g,{value:e})});c.__docgenInfo={description:`Este componente muestra una barra de progreso con un indicador visual que incluye el porcentaje de progreso.
Utiliza \`LinearProgress\` de Material UI como base, con un diseño personalizado.

__Props__
- \`progress\` (requerido): Número que indica el valor actual del progreso, en un rango de 0 a 100.

__Funcionalidades__
- Muestra una barra de progreso lineal (\`LinearProgress\`) basada en el valor proporcionado.
- Incluye un texto que indica el porcentaje de progreso actual.
- Se adapta al ancho definido por \`progress\`, ajustándose automáticamente al valor.

---

 __Ejemplo de uso__

\`\`\`tsx
import { MyProgressBar } from './MyProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <MyProgressBar progress={progress} />
    </div>
  );
};
\`\`\`
---

__Notas__
- El texto del porcentaje se calcula automáticamente utilizando \`Math.round\` y se muestra junto a la barra.
- Asegúrate de que el valor de \`progress\` esté en el rango de 0 a 100 para un comportamiento óptimo.
- Los estilos de Material UI pueden personalizarse mediante la prop \`sx\` en \`Box\` o \`LinearProgress\`.`,methods:[],displayName:"MyProgressBar",props:{progress:{required:!0,tsType:{name:"number"},description:""}}};const M={title:"Components/MyProgressBar",component:c,argTypes:{progress:{control:{type:"number",min:0,max:100},description:"Porcentaje de progreso (0 a 100).",defaultValue:0}}},o={args:{progress:100}},s={args:{progress:1}};var a,t,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    progress: 100 // Progreso completo
  }
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,d,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    progress: 1 // Progreso vacío
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const b=["FullProgress","InitProgress"];export{o as FullProgress,s as InitProgress,b as __namedExportsOrder,M as default};
