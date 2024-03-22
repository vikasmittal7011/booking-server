"use strict";(self.webpackChunkclient_2=self.webpackChunkclient_2||[]).push([[810],{1907:(e,s,t)=>{t.d(s,{A:()=>a});var l=t(579);const a=e=>{let{hotel:s,bookingInfo:t,nights:a,showNameAndLocation:n=!0}=e;return(0,l.jsxs)("div",{className:"grid gap-4 rounded-lg border border-slate-300 p-4 h-fit",children:[(0,l.jsx)("h1",{className:"text-xl font-bold",children:"Your Booking Info"}),n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"border-b py-2",children:["Name:",(0,l.jsx)("div",{className:"font-bold",children:s.name})]}),(0,l.jsxs)("div",{className:"border-b py-2",children:["Location:",(0,l.jsxs)("div",{className:"font-bold",children:[s.addressLine,", ",s.state,", ",s.country,", ",s.pin]})]})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center border-b py-2",children:[(0,l.jsxs)("div",{children:["Ckeck In:",(0,l.jsx)("div",{className:"font-bold",children:new Date(t.checkIn).toDateString()})]}),(0,l.jsxs)("div",{children:["Ckeck Out:",(0,l.jsx)("div",{className:"font-bold",children:new Date(t.checkOut).toDateString()})]})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center border-b py-2",children:[(0,l.jsxs)("div",{children:["Number Of Nights Stay:",(0,l.jsx)("div",{className:"font-bold",children:a})]}),(null===t||void 0===t?void 0:t.price)&&(0,l.jsxs)("div",{children:["Total Payment",(0,l.jsx)("div",{className:"font-bold",children:t.price})]})]}),(0,l.jsxs)("div",{className:"border-b py-2",children:["Guests:",(0,l.jsxs)("div",{className:"font-bold",children:[t.adultCount," Adults & ",t.childCount||0," Children"]})]})]})}},2721:(e,s,t)=>{t.d(s,{A:()=>n});var l=t(710),a=t(579);const n=()=>(0,a.jsx)("div",{className:"justify-center flex items-center",children:(0,a.jsx)(l.A,{size:100,color:"blue"})})},7810:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v});var l=t(5043),a=t(3003),n=t(5475),r=t(9601),i=t(2721),d=t(5051),o=t(184),c=t(1462),m=t(9740),x=t(1780),h=t(9438),p=t(579);const b=e=>{let{open:s,handleOpen:t,children:a}=e;return(0,p.jsx)(h.e.Root,{show:s,as:l.Fragment,children:(0,p.jsxs)(m.l,{as:"div",className:"relative z-10",onClose:t,children:[(0,p.jsx)(h.e.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,p.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,p.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,p.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0",children:(0,p.jsx)(h.e.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:a})})})]})})},u=e=>{let{open:s,handleOpen:t,hotel:l}=e;const n=(0,a.wA)();return(0,p.jsx)(b,{open:s,handleOpen:t,children:(0,p.jsxs)(m.l.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[(0,p.jsxs)("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:[(0,p.jsxs)("div",{className:"flex items-center justify-around gap-5",children:[(0,p.jsx)("div",{className:"flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:(0,p.jsx)(x.A,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),(0,p.jsx)(m.l.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Delete Hotel"})]}),(0,p.jsx)("div",{className:"font-bold text-xl md:text-2xl mt-3 text-center sm:ml-4 sm:mt-0",children:l.name})]}),(0,p.jsxs)("div",{className:"bg-gray-50 px-4 py-3 flex sm:px-6 gap-5",children:[(0,p.jsx)("button",{onClick:()=>{n((0,r.rP)(l.id)),t()},type:"button",className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",children:"Delete"}),(0,p.jsx)("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:t,children:"Cancel"})]})]})})};var j=t(1907);const g=e=>{let{open:s,handleOpen:t,hotel:l}=e;return(0,p.jsx)(b,{open:s,handleOpen:t,children:(0,p.jsx)(m.l.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:l.bookings.map(((e,s)=>{return(0,p.jsxs)("div",{className:"grid lg:grid-cols-[2fr_1fr] gap-5 m-5 border border-slate-300 p-1 md:p-5 rounded-lg",children:[(0,p.jsx)(j.A,{hotel:l,bookingInfo:e,nights:(t=e,Math.ceil(Math.abs(new Date(t.checkOut).getTime()-new Date(t.checkIn).getTime())/864e5)),showNameAndLocation:!1}),(0,p.jsxs)("div",{className:"grid gap-4 rounded-lg border border-slate-300 p-4 h-fit",children:[(0,p.jsx)("h1",{className:"text-xl font-bold",children:"User Info"}),(0,p.jsxs)("div",{className:"border-b py-2",children:["Name:",(0,p.jsxs)("div",{className:"font-bold",children:[e.user.firstName," ",e.user.lastName]})]}),(0,p.jsxs)("div",{className:"border-b py-2",children:["Email:",(0,p.jsx)("div",{className:"font-bold",children:e.user.email})]})]})]},s);var t}))})})},f=e=>{let{hotel:s}=e;const[t,a]=(0,l.useState)(!1),[r,i]=(0,l.useState)(!1),m=()=>{a(!t)},x=()=>{i(!r)};return(0,p.jsxs)("div",{className:"flex flex-col justify-between border border-slate-300 rounded-lg p-2 md:p-8 gap-5",children:[(0,p.jsx)(u,{open:t,handleOpen:m,hotel:s}),(0,p.jsx)(g,{open:r,handleOpen:x,hotel:s}),(0,p.jsx)("h2",{className:"text-2xl font-bold",children:s.name}),(0,p.jsxs)("div",{className:"flex justify-between flex-col md:flex-row gap-5",children:[(0,p.jsx)("p",{className:"whitespace-pre-line",children:s.discription}),(0,p.jsx)("img",{src:s.photos[0],alt:"",className:"md:w-40 rounded-md"})]}),(0,p.jsxs)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5",children:[(0,p.jsxs)("div",{className:"flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md",children:[(0,p.jsx)(d.vJF,{className:"text-2xl ms-1"}),s.state,", ",s.country]}),(0,p.jsxs)("div",{className:"flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md",children:[(0,p.jsx)(o.IqM,{className:"text-2xl ms-1"}),s.type]}),(0,p.jsxs)("div",{className:"flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md",children:[(0,p.jsx)(c.BRE,{className:"text-2xl ms-1"}),"\u20b9 ",s.discountedPrice,"  per night"]}),(0,p.jsxs)("div",{className:"flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md",children:[(0,p.jsx)(o.TiC,{className:"text-2xl ms-1"}),s.adultCount," adults, ",s.childCount," children"]}),(0,p.jsxs)("div",{className:"flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md",children:[(0,p.jsx)(d.Vis,{className:"text-2xl ms-1"}),s.star," star"]})]}),(0,p.jsxs)("div",{className:"flex justify-between items-center mt-2",children:[(0,p.jsx)(n.N_,{className:"bg-cyan-500 px-3 py-1 text-white hover:bg-cyan-600 transition-all",to:"/hotel/".concat(s.id),children:"View Details"}),(0,p.jsx)("button",{onClick:x,type:"button",className:"bg-green-500 px-3 py-1 text-white hover:bg-green-600 transition-all",children:"View Bookings"}),(0,p.jsx)("button",{onClick:m,type:"button",className:"bg-red-500 px-3 py-1 text-white hover:bg-red-600 transition-all",children:"Delete"}),(0,p.jsx)(n.N_,{className:"bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 transition-all",to:"/hotel/edit/".concat(s.id),children:"Edit"})]})]})};var N=t(3916);const v=()=>{const{status:e,ownerHotels:s,hotelDelete:t,message:d}=(0,a.d4)(r.xe),o=(0,a.wA)();return(0,l.useEffect)((()=>{(s.length<1||t)&&o((0,r.Rh)())}),[t]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(N.A,{type:"failed"===e?"err":"success",message:d,clearMessage:r.de}),"loading"===e?(0,p.jsx)(i.A,{}):(0,p.jsxs)("div",{className:"space-y-5",children:[(0,p.jsxs)("span",{className:"flex justify-between items-center",children:[(0,p.jsx)("h1",{className:"text-2xl base:text-3xl font-bold mb-3",children:"My Hotel's"}),(0,p.jsx)(n.N_,{to:"/add-hotel",className:"bg-blue-400 text-white px-4 py-2 text-xl rounded-md outline-none hover:bg-blue-600 transition-all",children:"Add One"})]}),s.length>0?(0,p.jsx)("div",{className:"grid grid-cols-1 gap-8",children:s.map(((e,s)=>(0,p.jsx)(f,{hotel:e,hotelDelete:t},s)))}):(0,p.jsx)("span",{className:"flex justify-center accent-lime-50 text-3xl",children:"Hotel Not Found"})]})]})}}}]);
//# sourceMappingURL=810.c8ff3814.chunk.js.map