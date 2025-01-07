import{a as b,b as q,c as z}from"./chunk-U7F2SG4S.js";import{a as I}from"./chunk-M6CHSWMY.js";import{a as L,d as $}from"./chunk-X47O72ZR.js";import{b as V}from"./chunk-STXYMT2D.js";import{a as G}from"./chunk-7R2YJYDP.js";import{h as P,ia as U,j as F,k as j}from"./chunk-BERFFYA2.js";import{$a as w,Cb as B,Fb as v,Gb as y,Hb as e,Ib as t,Jb as k,Nb as T,Qb as R,Rc as g,Sb as C,Sc as E,Vb as A,Wb as M,ac as i,bc as o,cb as n,cc as s,ic as S,ka as u,mc as l,nc as c,oa as f,oc as h,vb as D,xa as O,ya as _}from"./chunk-XJECHS7E.js";var K=(a,d)=>d.productId;function Q(a,d){if(a&1&&(e(0,"tr")(1,"td",22)(2,"div",23),k(3,"img",24),e(4,"span"),i(5),t()()(),e(6,"td",25),i(7),t(),e(8,"td",26),i(9),l(10,"currency"),t()()),a&2){let r=d.$implicit;n(3),A("src",r.pictureUrl,w),n(2),o(r.productName),n(2),s("x",r.quantity,""),n(2),o(c(10,4,r.price))}}function W(a,d){if(a&1){let r=T();e(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"h2",3),i(4),t(),e(5,"button",4),R("click",function(){O(r);let m=C();return _(m.onReturnClick())}),i(6),t()(),e(7,"div",5)(8,"div",6)(9,"h4",7),i(10,"Billing and delivery information"),t(),e(11,"dl")(12,"dt",8),i(13,"Shipping address"),t(),e(14,"dd",9),i(15),l(16,"address"),t()(),e(17,"dl")(18,"dt",8),i(19,"Payment info"),t(),e(20,"dd",9),i(21),l(22,"paymentCard"),t()()(),e(23,"div",6)(24,"h4",7),i(25,"Order details"),t(),e(26,"dl")(27,"dt",8),i(28,"Email address"),t(),e(29,"dd",9),i(30),t()(),e(31,"dl")(32,"dt",8),i(33,"Order status"),t(),e(34,"dd",9),i(35),t()(),e(36,"dl")(37,"dt",8),i(38,"Order date"),t(),e(39,"dd",9),i(40),l(41,"date"),t()()()(),e(42,"div",10)(43,"div",11)(44,"table",12)(45,"tbody",13),v(46,Q,11,6,"tr",null,K),t()()()(),e(48,"div",14)(49,"p",15),i(50,"Order summary"),t(),e(51,"div",16)(52,"div",6)(53,"dl",17)(54,"dt",18),i(55,"Subtotal"),t(),e(56,"dd",19),i(57),l(58,"currency"),t()(),e(59,"dl",17)(60,"dt",18),i(61,"Discount"),t(),e(62,"dd",20),i(63),l(64,"currency"),t()(),e(65,"dl",17)(66,"dt",18),i(67,"Delivery fee"),t(),e(68,"dd",19),i(69),l(70,"currency"),t()()(),e(71,"dl",21)(72,"dt",18),i(73,"Total"),t(),e(74,"dd",19),i(75),l(76,"currency"),t()()()()()()}if(a&2){let r=C();n(4),s("Order summary for order #",r.order.id,""),n(2),o(r.buttonText),n(9),o(c(16,11,r.order.shippingAddress)),n(6),o(c(22,13,r.order.paymentSummary)),n(9),o(r.order.buyerEmail),n(5),o(r.order.status),n(5),o(h(41,15,r.order.orderDate,"medium")),n(6),y(r.order.orderItems),n(11),s(" ",c(58,18,r.order.subtotal)," "),n(6),s(" -",c(64,20,r.order.discount)," "),n(6),s(" ",c(70,22,r.order.shippingPrice)," "),n(6),s(" ",c(76,24,r.order.total)," ")}}var N=(()=>{let d=class d{constructor(){this.orderService=u(b),this.activatedRoute=u(P),this.accountService=u(V),this.adminService=u(G),this.router=u(F),this.buttonText=this.accountService.isAdmin()?"Return to admin":"Return to orders"}ngOnInit(){this.loadOrder()}onReturnClick(){this.accountService.isAdmin()?this.router.navigateByUrl("/admin"):this.router.navigateByUrl("/orders")}loadOrder(){let p=this.activatedRoute.snapshot.paramMap.get("id");if(!p)return;(this.accountService.isAdmin()?this.adminService.getOrder(+p):this.orderService.getOrderDetailed(+p)).subscribe({next:x=>this.order=x})}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=f({type:d,selectors:[["app-order-detailed"]],standalone:!0,features:[S],decls:1,vars:1,consts:[[1,"bg-white","py-8","shadow-md","max-w-screen-lg","mx-auto"],[1,"px-4","w-full"],[1,"flex","justify-between","items-center","align-middle"],[1,"text-2xl","text-center","font-semibold"],["mat-stroked-button","",3,"click"],[1,"mt-8","py-3","border-t","border-gray-200","flex","gap-16"],[1,"space-y-2"],[1,"text-lg","font-semibold"],[1,"font-medium"],[1,"mt-1","font-light"],[1,"mt-4"],[1,"border-y","border-gray-200"],[1,"w-full","text-center"],[1,"divide-y","divide-gray-200"],[1,"space-y-4","rounded-lg","border-y","border-gray-200","p-4","bg-white"],[1,"text-xl","font-semibold"],[1,"space-y-4"],[1,"flex","items-center","justify-between","gap-4"],[1,"font-medium","text-gray-500"],[1,"font-medium","text-gray-900"],[1,"font-medium","text-green-500"],[1,"flex","items-center","justify-between","gap-4","border-t","border-gray-200","pt-2"],[1,"py-4"],[1,"flex","items-center","gap-4"],["alt","product image",1,"w-10","h-10",3,"src"],[1,"p-4"],[1,"p-4","text-right"]],template:function(m,x){m&1&&D(0,W,77,26,"mat-card",0),m&2&&B(x.order?0:-1)},dependencies:[$,L,U,g,E,q,z]});let a=d;return a})();var X=(a,d)=>d.id;function Y(a,d){if(a&1&&(e(0,"tr",10)(1,"th",11),i(2),t(),e(3,"td"),i(4),l(5,"date"),t(),e(6,"td"),i(7),l(8,"currency"),t(),e(9,"td"),i(10),t()()),a&2){let r=d.$implicit;M("routerLink","/orders/",r.id,""),n(2),s("# ",r.id,""),n(2),o(h(5,6,r.orderDate,"medium")),n(3),o(c(8,9,r.total)),n(3),o(r.status)}}var H=(()=>{let d=class d{constructor(){this.orderService=u(b),this.orders=[]}ngOnInit(){this.orderService.getOrdersForUser().subscribe({next:p=>this.orders=p})}};d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=f({type:d,selectors:[["app-order"]],standalone:!0,features:[S],decls:19,vars:0,consts:[[1,"mx-auto","mt-32"],[1,"font-semibold","text-2xl","mb-6","text-center"],[1,"flex","flex-col"],[1,"w-full"],[1,"min-w-full","divide-y","divide-gray-200","cursor-pointer"],[1,"bg-gray-50"],[1,"uppercase","text-gray-600","text-sm"],[1,"text-center","px-6","py-3"],[1,"text-left"],[1,"bg-white","divide-y","divide-gray-200"],[1,"hover:bg-gray-100",3,"routerLink"],[1,"px-6","py-3"]],template:function(m,x){m&1&&(e(0,"div",0)(1,"h2",1),i(2,"My orders"),t(),e(3,"div",2)(4,"div",3)(5,"table",4)(6,"thead",5)(7,"tr",6)(8,"th",7),i(9,"Order"),t(),e(10,"th",8),i(11,"Date"),t(),e(12,"th",8),i(13,"Total"),t(),e(14,"th",8),i(15,"Status"),t()()(),e(16,"tbody",9),v(17,Y,11,11,"tr",10,X),t()()()()()),m&2&&(n(17),y(x.orders))},dependencies:[j,g,E]});let a=d;return a})();var be=[{path:"",component:H,canActivate:[I]},{path:":id",component:N,canActivate:[I]}];export{be as orderRoutes};
