import{j as n}from"./jsx-runtime-Bsf-Y80U.js";import{r as u}from"./index-CmnR7VnH.js";import{C as p}from"./CustomModal-1TI9-Oco.js";import{f as h}from"./index-YkVIqR4J.js";import{B as a}from"./Button-zTDG6LmW.js";import{T as s}from"./Typography-mNUyEguK.js";import"./Modal-CkA7751a.js";import"./DefaultPropsProvider--YwijEWK.js";import"./Portal-Ce1Mv2qa.js";import"./ButtonBase-B0_QeNL-.js";import"./assertThisInitialized-DIFuz7Pv.js";import"./index-BOjEwyeZ.js";import"./index-BS_t85qj.js";import"./useTheme-B6Pr7AB7.js";import"./useTheme-CtltR20v.js";import"./Box-CFxmXA4T.js";const z={title:"Modals/Custom",component:p,parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean",description:"Controla si el modal está abierto o cerrado.",defaultValue:!1},close:{control:!1,description:"Función que se ejecuta al intentar cerrar el modal."},children:{control:!1,description:"Contenido que se renderiza dentro del modal."},sx:{control:"object",description:"Estilos adicionales aplicados al contenedor `Box` interno."}}},e={render:o=>{const[c,r]=u.useState(o.isOpen),m=()=>{r(!0)},t=()=>{r(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(a,{variant:"contained",onClick:m,sx:{marginBottom:2},children:"Abrir Modal"}),n.jsx(p,{isOpen:c,close:t,children:n.jsxs(n.Fragment,{children:[n.jsx(s,{id:"modal-modal-title",variant:"h6",textAlign:"center",children:"Contenido del Modal"}),o.children,n.jsx(a,{onClick:t,sx:{marginTop:2},children:"Cerrar"})]})})]})},args:{isOpen:!1,children:n.jsx(s,{id:"modal-modal-description",sx:{mt:2},children:"Este es un modal personalizado."}),close:h()}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOpen = () => {
      setIsOpen(true);
    };
    const handleClose = () => {
      setIsOpen(false);
    };
    return <>
        {/* Botón para abrir el modal */}
        <Button variant="contained" onClick={handleOpen} sx={{
        marginBottom: 2
      }}>
          Abrir Modal
        </Button>

        {/* Modal interactivo */}
        <CustomModal isOpen={isOpen} close={handleClose}>
          <>
            <Typography id="modal-modal-title" variant="h6" textAlign="center">
              Contenido del Modal
            </Typography>
            {args.children}
            <Button onClick={handleClose} sx={{
            marginTop: 2
          }}>
              Cerrar
            </Button>
          </>
        </CustomModal>
      </>;
  },
  args: {
    isOpen: false,
    children: <Typography id="modal-modal-description" sx={{
      mt: 2
    }}>
        Este es un modal personalizado.
      </Typography>,
    close: fn()
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const F=["BasicCustomModal"];export{e as BasicCustomModal,F as __namedExportsOrder,z as default};
