import{u as f,r,G as N,a as C,j as e,s as b,b as l,c as i}from"./index-e2493e9c.js";import{G as c}from"./iconBase-d00fe934.js";function w(a){return c({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(a)}function y(a){return c({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(a)}const I=()=>{const a=f(),[o,d]=r.useState("test@email.com"),[n,h]=r.useState("test123"),[u,g]=r.useState(!0),x=new N,m=new C,p=async t=>{if(t.preventDefault(),u&&n)try{const s=await b(l,o,n);a("/dashboard",{replace:!0})}catch(s){console.log(s)}},v=async t=>{t.preventDefault(),i(l,x).then(s=>{a("/dashboard"),console.log(s.user)}).catch(s=>{console.error(s)})},j=async t=>{t.preventDefault(),i(l,m).then(s=>{a("/dashboard"),console.log(s.user)}).catch(s=>{console.error(s)})};return e.jsxs("div",{className:"loginContainer",children:[e.jsx("div",{className:"left",children:e.jsx("h1",{className:"mont",children:"Board."})}),e.jsx("div",{className:"right",children:e.jsxs("div",{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{className:"mont",children:"Sign In"}),e.jsx("h3",{className:"lato",children:"Sign in to you account"})]}),e.jsxs("div",{className:"button-container",children:[e.jsxs("button",{onClick:v,className:"lato",children:[" ",e.jsx("i",{children:e.jsx(w,{})}),"Sign in with Google"]}),e.jsxs("button",{onClick:j,className:"lato",children:[" ",e.jsx("i",{children:e.jsx(y,{})})," Sign in with Github"]})]}),e.jsx("div",{className:"textfields-and-buttons",children:e.jsxs("form",{onSubmit:t=>p(t),className:"textfields",children:[e.jsxs("div",{className:"textfieldsWrapper",children:[e.jsx("h3",{className:"lato",children:"Email address"}),e.jsx("input",{placeholder:"test@email.com",type:"email",required:!0,value:o,onChange:t=>{d(t.target.value),g(t.target.validity.valid)}})]}),e.jsxs("div",{className:"textfieldsWrapper",children:[e.jsx("h3",{className:"lato",style:{fontSize:"16px"},children:"Password"}),e.jsx("input",{type:"password",required:!0,value:n,onChange:t=>{h(t.target.value)}})]}),e.jsx("h3",{className:"lato forgot-password",children:"Forgot password?"}),e.jsx("input",{type:"submit",className:"mont",value:"Sign In"})]})}),e.jsxs("h3",{className:"lato register",children:["Don’t have an account? ",e.jsx("span",{style:{color:"#346BD4"},children:"Register here"})]})]})})]})};export{I as default};
