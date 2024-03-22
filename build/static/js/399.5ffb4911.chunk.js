"use strict";(self.webpackChunkclient_2=self.webpackChunkclient_2||[]).push([[399],{289:(e,s,t)=>{t.d(s,{KR:()=>o,MW:()=>n,dd:()=>r,eG:()=>a,vB:()=>l,vP:()=>i});const a=()=>{window.scrollTo(0,0)},l="border-2 border-blue-400 focus:outline-blue-800 rounded-md w-full py-2 px-2 font-normal mt-2 text-lg",r="font-bold text-gray-700 text-lg flex-1",n=["Budget","Boutique","Luxury","Ski Resort","Business","Family","Romantic","Hiking Resort","Cabin","Beach Resort","Golf Resort","Motel","All Inclusive","Pet Friendly","Self Catering"],o=["Free WiFi","Parking","Airport Shuttle","Family Rooms","Non-Smoking Rooms","Outdoor Pool","Spa","Fitness Center"],i=[{name:"Best Rating",sort:"star",order:"desc",current:!1},{name:"Price: Low to High",sort:"discountedPrice",order:"asc",current:!1},{name:"Price: High to Low",sort:"discountedPrice",order:"desc",current:!1}]},9399:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var a=t(3003),l=t(5519),r=t(3216),n=t(3916),o=t(5043),i=t(289),d=t(710),c=t(5475),u=t(4858),m=t(579);const x=e=>{let{handleForgetPasswordState:s,status:t}=e;const r=(0,a.wA)(),{register:n,handleSubmit:o,formState:{errors:x}}=(0,u.mN)(),g=o((e=>{r((0,l.qG)(e))}));return(0,m.jsxs)("form",{className:"flex flex-col gap-5 w-full",onSubmit:g,children:[(0,m.jsx)("h2",{className:"text-3xl font-bold",children:"Login Into Account"}),(0,m.jsxs)("label",{className:i.dd,children:["Email",(0,m.jsx)("input",{type:"email",...n("email",{required:"Pleace Enter Email...",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,message:"Please enter a valid email address."}}),className:i.vB}),x.email&&(0,m.jsx)("span",{className:"text-red-500",children:x.email.message})]}),(0,m.jsx)("span",{onClick:s,className:"text-right -mb-6 text-lg underline outline-none text-blue-600 transition-all hover:text-cyan-800 cursor-pointer",children:"Forget Password?"}),(0,m.jsxs)("label",{className:i.dd,children:["Password",(0,m.jsx)("input",{type:"password",...n("password",{required:"Pleace Enter Password...",minLength:{value:8,message:"Password Must Be 8 Char Long"},pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)"}}),className:i.vB}),x.password&&(0,m.jsx)("span",{className:"text-red-500",children:x.password.message})]}),(0,m.jsxs)("div",{className:"flex flex-col md:flex-row justify-between md:items-center gap-5",children:[(0,m.jsxs)("span",{className:"flex gap-1",children:["Don't have an account?",(0,m.jsx)(c.N_,{onClick:i.eG,to:"/register",className:"underline outline-none text-blue-600 transition-all hover:text-cyan-800",children:"Create One!"})]}),(0,m.jsxs)("button",{type:"submit",className:"bg-blue-700 outline-none text-white p-2 px-4 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ".concat("loading"===t?"cursor-not-allowed":"cursor-pointer"," flex justify-center items-center gap-2"),children:[(0,m.jsx)(d.A,{size:20,color:"white",loading:"loading"===t}),(0,m.jsx)("div",{children:"Login Account"})]})]})]})},g=e=>{let{handleForgetPasswordState:s,status:t}=e;const r=(0,a.wA)(),{register:n,handleSubmit:o,formState:{errors:c}}=(0,u.mN)(),x=o((e=>{r((0,l.en)(e))}));return(0,m.jsxs)("form",{className:"flex flex-col gap-5 w-full",onSubmit:x,children:[(0,m.jsx)("h2",{className:"text-3xl font-bold",children:"Password Reset Requet"}),(0,m.jsxs)("label",{className:i.dd,children:["Email",(0,m.jsx)("input",{type:"email",...n("email",{required:"Pleace Enter Email...",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,message:"Please enter a valid email address."}}),className:i.vB}),c.email&&(0,m.jsx)("span",{className:"text-red-500",children:c.email.message})]}),(0,m.jsx)("span",{onClick:s,className:"text-start -my-2 text-lg underline outline-none text-blue-600 transition-all hover:text-cyan-800 cursor-pointer",children:"Login?"}),(0,m.jsx)("div",{className:"flex flex-col md:flex-row justify-end md:items-center gap-5",children:(0,m.jsxs)("button",{type:"submit",className:"bg-blue-700 outline-none text-white p-2 px-4 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ".concat("loading"===t?"cursor-not-allowed":"cursor-pointer"," flex justify-center items-center gap-2"),children:[(0,m.jsx)(d.A,{size:20,color:"white",loading:"loading"===t}),(0,m.jsx)("div",{children:"Login Account"})]})})]})},p=e=>{let{status:s}=e;const t=new URLSearchParams(window.location.search).get("token"),r=(0,a.wA)(),{register:n,handleSubmit:o,watch:c,formState:{errors:x}}=(0,u.mN)(),g=o((e=>{r((0,l.Gw)({...e,token:t}))}));return(0,m.jsxs)("form",{className:"flex flex-col gap-5 w-full",onSubmit:g,children:[(0,m.jsx)("h2",{className:"text-3xl font-bold",children:"Create Your Password"}),(0,m.jsxs)("label",{className:i.dd,children:["Password",(0,m.jsx)("input",{type:"password",...n("password",{required:"Pleace Enter Password...",minLength:{value:8,message:"Password Must Be 8 Char Long"},pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)"}}),className:i.vB}),x.password&&(0,m.jsx)("span",{className:"text-red-500",children:x.password.message})]}),(0,m.jsxs)("label",{className:i.dd,children:["Confirm Password",(0,m.jsx)("input",{type:"password",...n("confirmPassword",{validate:e=>e?c("password")!==e?"Your password dose not match":void 0:"Place Same Password..."}),className:i.vB}),x.confirmPassword&&(0,m.jsx)("span",{className:"text-red-500",children:x.confirmPassword.message})]}),(0,m.jsx)("div",{className:"flex flex-col md:flex-row justify-end md:items-center gap-5",children:(0,m.jsxs)("button",{type:"submit",className:"bg-blue-700 outline-none text-white p-2 px-4 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ".concat("loading"===s?"cursor-not-allowed":"cursor-pointer"," flex justify-center items-center gap-2"),children:[(0,m.jsx)(d.A,{size:20,color:"white",loading:"loading"===s}),(0,m.jsx)("div",{children:"Reset Password"})]})})]})},h=()=>{var e,s;const t=(0,r.zy)(),{token:d}=(0,r.g)(),[c,u]=(0,o.useState)(!1),h=(0,r.Zp)(),{status:w,message:f,loginSuccess:b,passwordReset:j}=(0,a.d4)(l.hf),v=()=>{(0,i.eG)(),u(!c)};return(0,o.useEffect)((()=>{var e,s;b&&h((null===t||void 0===t||null===(e=t.state)||void 0===e||null===(s=e.from)||void 0===s?void 0:s.pathname)||"/")}),[null===t||void 0===t||null===(e=t.state)||void 0===e||null===(s=e.from)||void 0===s?void 0:s.pathname,b,h]),(0,o.useEffect)((()=>{j&&h("/login")}),[j,h]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.A,{type:"failed"===w?"error":"success",message:f,clearMessage:l.de}),void 0===d?c?(0,m.jsx)(g,{handleForgetPasswordState:v,status:w}):(0,m.jsx)(x,{handleForgetPasswordState:v,status:w}):(0,m.jsx)(p,{status:w})]})}}}]);
//# sourceMappingURL=399.5ffb4911.chunk.js.map