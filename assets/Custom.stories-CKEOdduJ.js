import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{r as u}from"./index-Cp_2WB0_.js";import{C as p}from"./CustomModal-Duy1NZyC.js";import{f as h}from"./index-DQLiMaGX.js";import{B as a}from"./Button-iCE41_Zm.js";import{T as s}from"./Typography-DQ6QAh56.js";import"./index-D2MAbzvX.js";import"./Modal-Cmz8wYNv.js";import"./DefaultPropsProvider-ELLn0s9H.js";import"./Portal-D7fkpCCq.js";import"./ButtonBase-B3vSuhhO.js";import"./assertThisInitialized-DIFuz7Pv.js";import"./index-CrNuPw6X.js";import"./index-BIm0odtm.js";import"./useTheme-pdgmfwaB.js";import"./useTheme-DFr77biG.js";import"./Box-CrlaK6wr.js";const F={title:"Modals/Custom",component:p,parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean",description:"Controla si el modal está abierto o cerrado.",defaultValue:!1},close:{control:!1,description:"Función que se ejecuta al intentar cerrar el modal."},children:{control:!1,description:"Contenido que se renderiza dentro del modal."},sx:{control:"object",description:"Estilos adicionales aplicados al contenedor `Box` interno."}}},e={render:o=>{const[c,r]=u.useState(o.isOpen),m=()=>{r(!0)},t=()=>{r(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(a,{variant:"contained",onClick:m,sx:{marginBottom:2},children:"Abrir Modal"}),n.jsx(p,{isOpen:c,close:t,children:n.jsxs(n.Fragment,{children:[n.jsx(s,{id:"modal-modal-title",variant:"h6",textAlign:"center",children:"Contenido del Modal"}),o.children,n.jsx(a,{onClick:t,sx:{marginTop:2},children:"Cerrar"})]})})]})},args:{isOpen:!1,children:n.jsx(s,{id:"modal-modal-description",sx:{mt:2},children:"Este es un modal personalizado."}),close:h()}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const S=["BasicCustomModal"];export{e as BasicCustomModal,S as __namedExportsOrder,F as default};
