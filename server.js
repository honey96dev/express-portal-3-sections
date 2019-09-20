!function(e){var r={};function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/",s(s.s=20)}([function(e,r){e.exports=require("sprintf-js")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("cluster")},function(e,r){e.exports=require("jsonwebtoken")},function(e,r){e.exports=require("dotenv")},function(e,r){e.exports=require("http-errors")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("morgan")},function(e,r){e.exports=require("express-jwt")},function(e,r){e.exports=require("cors")},function(e,r){e.exports=require("compression")},function(e,r){e.exports=require("express-fileupload")},function(e,r){e.exports=require("uuid")},function(e,r){e.exports=require("mkdirp")},function(e,r){e.exports=require("tracer")},function(e,r){e.exports=require("mysql2")},function(e,r){e.exports=require("crypto")},function(e,r){e.exports=require("debug")},function(e,r){e.exports=require("http")},function(e,r,s){"use strict";s.r(r);var t={};s.r(t),s.d(t,"server",function(){return L}),s.d(t,"mysql",function(){return R});var n={};s.r(n),s.d(n,"server",function(){return h}),s.d(n,"mysql",function(){return _});var a=s(5),o=s.n(a),i=s(6),u=s.n(i),c=s(1),l=s.n(c),d=s(2),g=s.n(d),y=s(7),m=s.n(y),E=s(8),f=s.n(E),p=s(9),S=s.n(p),v=s(10),O=s.n(v),b=s(11),A=s.n(b),U=s(12),w=s.n(U);const L={port:8080,baseUrl:"http://127.0.0.1:8080/"},R={connectionLimit:10,host:"127.0.0.1",user:"root",password:"",database:"portal3sections",port:3306,connectTimeout:15e3},h={port:80,baseUrl:"http://108.160.135.63/"},_={connectionLimit:10,host:"127.0.0.1",user:"root",password:"",database:"portal3sections",port:3306,connectTimeout:15e3};let N=t;const I={isDev:!1,port:(N=n).server.port,baseUrl:N.server.baseUrl,name:"Portal - 3 sections",description:"Portal - 3 sections",author:"Zhenlong J.",secret:"portal3sections@@",environment:"production"},T=N.mysql,M={name:"portal3sections",key:"portal3sections",secret:"portal3sections@@",secretAdmin:"portal3sections_admin@@"},V={users:"users",admins:"admins",mediaSlider:"media_slider",ourServices:"our_services",businessPartner:"business_partner",contactUs:"contact_us",ourClients:"our_clients",directorBoard:"director_board",events:"events",previousEvents:"previous_events",upcomingEvents:"upcoming_events",humanOurServices:"human_our_services"},q={mediaSlider:"/uploads/media-slider",ourServices:"/uploads/our-services",businessPartner:"/uploads/business-partner",ourClients:"/uploads/our-clients",directorBoard:"/uploads/director-board",previousEvents:"/uploads/previous-events",upcomingEvents:"/uploads/upcoming-events"};var j={server:I,mysql:T,session:M,dbTblName:V,uploadPath:q},k=s(0),D=s(13),C=s.n(D),P=s(14),x=s.n(P),J={en:{success:"success",error:"error",unknownServerError:"Unknown server error",emailAlreadyRegistered:"This email is already registered.",usernameAlreadyRegistered:"This username is already registered.",successfullyRegistered:"Successfully registered. Please try to sign in.",emailIsIncorrect:"Email is incorrect",usernameIsIncorrect:"Username is incorrect",passwordIsIncorrect:"Password is incorrect",yourAccountIsNotAllowed:"Your account is not allowed. Please contact admin",successfullySignedIn:"Successfully signed in",successfullySignedOut:"Successfully signed out",error404:"Not Fount",error500:"Unknown server error",successfullySaved:"Successfully saved",successfullyAdded:"Successfully added",successfullyEdited:"Successfully edited",successfullyChanged:"Successfully changed",successfullyDeleted:"Successfully Deleted",currentPasswordIncorrect:"Current password is incorrect",failedDueToUnknownServerError:"Failed due to unknown server error",invalidParameters:"Invalid Parameters",notUploaded:"Not uploaded",successfullyUploaded:"Successfully uploaded",successfullyPosted:"Successfully posted"},ar:{success:"success",error:"error",unknownServerError:"خطأ غير معروف في الخادم",emailAlreadyRegistered:"عنوان البريد الإلكترونى هذا مسجل بالفعل",usernameAlreadyRegistered:"وسجلت بالفعل اسم المستخدم هذا",successfullyRegistered:"سجلت بنجاح. يرجى محاولة تسجيل الدخول",emailIsIncorrect:"البريد الالكتروني غير صحيح",usernameIsIncorrect:"اسم المستخدم غير صحيح",passwordIsIncorrect:"كلمة المرور غير صحيحة",yourAccountIsNotAllowed:"حسابك غير مسموح به. يرجى الاتصال المشرف",successfullySignedIn:"تم تسجيل الدخول بنجاح",successfullySignedOut:"تم تسجيل الخروج بنجاح",error404:"لم يتم العثور على",error500:"خطأ غير معروف في الخادم",successfullySaved:"حفظ بنجاح",successfullyAdded:"أضيف بنجاح",successfullyEdited:"تم التعديل بنجاح",successfullyChanged:"تغيرت بنجاح",successfullyDeleted:"تم الحذف بنجاح",currentPasswordIncorrect:"كلمة المرور الحالية غير صحيحة",failedDueToUnknownServerError:"فشل بسبب خطأ غير معروف في الخادم",invalidParameters:"معلمات غير صالحة",notUploaded:"لم يتم الرفع",successfullyUploaded:"تم الرفع بنجاح",successfullyPosted:"تم النشر بنجاح"}},W=s(15),F=s.n(W).a.colorConsole();const H=l.a.Router();H.post("/upload/:dir",(e,r,s)=>{const t=e.params,{dir:n}=t,a=e.get("language"),o=J[a],{files:i}=e;if(0==Object.keys(i).length)return F.error(JSON.stringify(error)),F.error(__filename),r.status(200).send({result:o.error,message:o.notUploaded});const u=i.file,c=g.a.extname(u.name),l=process.cwd(),d=Object(k.sprintf)("%s%s",C()(),c),y=Object(k.sprintf)("%s/public/uploads/%s",l,n),m=Object(k.sprintf)("%s/%s",y,d);x()(y,()=>{u.mv(m,function(e){return e?(F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.notUploaded})):r.status(200).send({result:o.success,message:o.successfullyUploaded,filename:d,oldFilename:u.name})})})});var z=H,Y=s(4),B=s.n(Y),$=s(16),K=s.n($).a.createPool(j.mysql);const Z={query:(e,r)=>new Promise((s,t)=>{K.query(e,r,(e,r)=>{e?t(e):s(r)})})};var G=Z,Q=s(17),X=s.n(Q),ee=e=>{return X.a.createHmac("sha256",j.server.secret).update(e).digest("hex")};const re=l.a.Router();re.post("/sign-in",async(e,r,s)=>{const t=e.body,n=e.get("language"),a=J[n],{username:o,password:i}=t;let u=Object(k.sprintf)("SELECT `email` FROM `%s` WHERE BINARY `username` = '%s';",V.admins,o);try{let e=await G.query(u,null);if(0===e.length)return void r.status(200).send({result:a.error,message:a.usernameIsIncorrect});const s=ee(i);if(u=Object(k.sprintf)("SELECT U.* FROM `%s` U WHERE BINARY U.username = '%s' AND BINARY U.hash = '%s';",V.admins,o,s),0===(e=await G.query(u,null)).length)return void r.status(200).send({result:a.error,message:a.passwordIsIncorrect});let t=e[0];t.token=B.a.sign({sub:t.id},M.secretAdmin),r.status(200).send({result:a.success,message:a.successfullySignedIn,data:t})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:a.error,message:a.unknownServerError,err:e})}});var se=re;const te=l.a.Router(),ne=async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.mediaSlider,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}},ae=async(e,r,s,t)=>{const n=e.get("language"),a=e.body,{id:o,category:i,name:u,title:c,description:l,media:d,originMedia:g,mediaSize:y,note:m}=a,E=J[n],f=[[o,i,u,c,l,d.startsWith("/")?d:`${q.mediaSlider}/${d}`,g,y,m]];let p=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);",V.mediaSlider);try{let e=await G.query(p,[f]);r.status(200).send({result:E.success,message:o?E.successfullyEdited:E.successfullyAdded,data:{insertId:o||e.insertId}})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:E.error,message:E.unknownServerError})}};te.post("/list",(e,r,s)=>{ne(e,r)}),te.post("/edit",(e,r,s)=>{ae(e,r)}),te.post("/delete",async(e,r,s)=>{const t=e.get("language"),n=e.body,{id:a}=n,o=J[t];let i=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",V.mediaSlider,a);try{await G.query(i,null),ne(e,r)}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}});var oe=te;const ie=l.a.Router(),ue=async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC;",V.contactUs,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}};ie.post("/list",(e,r,s)=>{ue(e,r)}),ie.post("/delete",async(e,r,s)=>{const t=e.get("language"),n=e.body,{id:a}=n,o=J[t];let i=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",V.contactUs,a);try{await G.query(i,null),ue(e,r)}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}});var ce=ie;const le=l.a.Router(),de=async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.ourServices,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}},ge=async(e,r,s,t)=>{const n=e.get("language"),a=e.body,{id:o,category:i,name:u,title:c,description:l,media:d,originMedia:g,mediaSize:y,note:m}=a,E=J[n],f=[[o,i,u,c,l,d.startsWith("/")?d:`${q.ourServices}/${d}`,g,y,m]];let p=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);",V.ourServices);try{let e=await G.query(p,[f]);r.status(200).send({result:E.success,message:o?E.successfullyEdited:E.successfullyAdded,data:{insertId:o||e.insertId}})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:E.error,message:E.unknownServerError})}};le.post("/list",(e,r,s)=>{de(e,r)}),le.post("/edit",(e,r,s)=>{ge(e,r)}),le.post("/delete",async(e,r,s)=>{const t=e.get("language"),n=e.body,{id:a}=n,o=J[t];let i=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",V.ourServices,a);try{await G.query(i,null),de(e,r)}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}});var ye=le;const me=l.a.Router(),Ee=async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.businessPartner,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}},fe=async(e,r,s,t)=>{const n=e.get("language"),a=e.body,{id:o,category:i,name:u,title:c,description:l,media:d,originMedia:g,mediaSize:y,note:m,social1:E,social2:f,social3:p}=a,S=J[n],v=[[o,i,u,c,l,d.startsWith("/")?d:`${q.businessPartner}/${d}`,g,y,E,f,p,m]];let O=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `social1` = VALUES(`social1`), `social2` = VALUES(`social2`), `social3` = VALUES(`social3`), `note` = VALUES(`note`);",V.businessPartner);try{let e=await G.query(O,[v]);r.status(200).send({result:S.success,message:o?S.successfullyEdited:S.successfullyAdded,data:{insertId:o||e.insertId}})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:S.error,message:S.unknownServerError})}};me.post("/list",(e,r,s)=>{Ee(e,r)}),me.post("/edit",(e,r,s)=>{fe(e,r)}),me.post("/delete",async(e,r,s)=>{const t=e.get("language"),n=e.body,{id:a}=n,o=J[t];let i=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",V.businessPartner,a);try{await G.query(i,null),Ee(e,r)}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}});var pe=me;const Se=l.a.Router(),ve=async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.ourClients,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}},Oe=async(e,r,s,t)=>{const n=e.get("language"),a=e.body,{id:o,category:i,timestamp:u,name:c,photo:l,photoOriginMedia:d,photoMediaSize:g,stars:y,title:m,feedback:E,files:f,filesOriginMedia:p,filesMediaSize:S,note:v}=a,O=J[n],b=[[o,i,u,c,l.startsWith("/")?l:`${q.ourClients}/${l}`,d,g,y,m,E,f,p,S,v]];let A=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `timestamp` = VALUES(`timestamp`), `name` = VALUES(`name`), `photo` = VALUES(`photo`), `photoOriginMedia` = VALUES(`photoOriginMedia`), `photoMediaSize` = VALUES(`photoMediaSize`), `stars` = VALUES(`stars`), `title` = VALUES(`title`), `feedback` = VALUES(`feedback`), `files` = VALUES(`files`), `filesOriginMedia` = VALUES(`filesOriginMedia`), `filesMediaSize` = VALUES(`filesMediaSize`), `note` = VALUES(`note`);",V.ourClients);try{let e=await G.query(A,[b]);r.status(200).send({result:O.success,message:o?O.successfullyEdited:O.successfullyAdded,data:{insertId:o||e.insertId}})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:O.error,message:O.unknownServerError})}};Se.post("/list",(e,r,s)=>{ve(e,r)}),Se.post("/edit",(e,r,s)=>{Oe(e,r)}),Se.post("/delete",async(e,r,s)=>{const t=e.get("language"),n=e.body,{id:a}=n,o=J[t];let i=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",V.ourClients,a);try{await G.query(i,null),ve(e,r)}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}});var be=Se;const Ae=l.a.Router(),Ue=async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.directorBoard,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}},we=async(e,r,s,t)=>{const n=e.get("language"),a=e.body,{id:o,category:i,name:u,title:c,description:l,media:d,originMedia:g,mediaSize:y,note:m}=a,E=J[n],f=[[o,i,u,c,l,d.startsWith("/")?d:`${q.directorBoard}/${d}`,g,y,m]];let p=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);",V.directorBoard);try{let e=await G.query(p,[f]);r.status(200).send({result:E.success,message:o?E.successfullyEdited:E.successfullyAdded,data:{insertId:o||e.insertId}})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:E.error,message:E.unknownServerError})}};Ae.post("/list",(e,r,s)=>{Ue(e,r)}),Ae.post("/edit",(e,r,s)=>{we(e,r)}),Ae.post("/delete",async(e,r,s)=>{const t=e.get("language"),n=e.body,{id:a}=n,o=J[t];let i=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",V.directorBoard,a);try{await G.query(i,null),Ue(e,r)}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}});var Le=Ae;const Re=l.a.Router(),he=async(e,r,s)=>{const t=e.get("language"),n=e.body,{scope:a,category:o,limit:i}=n,u=J[t];let c=Object(k.sprintf)("SELECT * FROM `%s_%s` WHERE `category` = '%s' ORDER BY `timestamp` %s;",a,V.events,o,"previous"===a?"DESC":"ASC");try{let e=await G.query(c,null);r.status(200).send({result:u.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:u.error,message:u.unknownServerError})}},_e=async(e,r,s,t)=>{const n=e.get("language"),a=e.body,{scope:o,id:i,category:u,type:c,name:l,timestamp:d,title:g,description:y,media:m,originMedia:E,mediaSize:f,note:p}=a,S=J[n],v=[[i,u,c,l,d,g,y,m.startsWith("/")?m:`${q.previousEvents}/${m}`,E,f,p]];let O=Object(k.sprintf)("INSERT INTO `%s_%s` VALUES ? ON DUPLICATE KEY UPDATE `type` = VALUES(`type`), `name` = VALUES(`name`), `timestamp` = VALUES(`timestamp`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);",o,V.events);try{let e=await G.query(O,[v]);r.status(200).send({result:S.success,message:i?S.successfullyEdited:S.successfullyAdded,data:{insertId:i||e.insertId}})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:S.error,message:S.unknownServerError})}};Re.post("/list",(e,r,s)=>{he(e,r)}),Re.post("/edit",(e,r,s)=>{_e(e,r)}),Re.post("/delete",async(e,r,s)=>{const t=e.get("language"),n=e.body,{id:a}=n,o=J[t];let i=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",V.previousEvents,a);try{await G.query(i,null),he(e,r)}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError})}});var Ne=Re;const Ie=l.a.Router();Ie.use("/common",z),Ie.use("/auth",se),Ie.use("/media-slider",oe),Ie.use("/contact-us",ce),Ie.use("/our-services",ye),Ie.use("/business-partner",pe),Ie.use("/our-clients",be),Ie.use("/director-board",Le),Ie.use("/events",Ne);var Te=Ie;const Me=l.a.Router();Me.post("/sign-in",async(e,r,s)=>{const t=e.body,n=e.get("language"),a=J[n],{email:o,password:i}=t;let u=Object(k.sprintf)("SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';",V.users,o);try{let e=await G.query(u,null);if(0===e.length)return void r.status(200).send({result:a.error,message:a.emailIsIncorrect});const s=ee(i);if(u=Object(k.sprintf)("SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';",V.users,o,s),0===(e=await G.query(u,null)).length)return void r.status(200).send({result:a.error,message:a.passwordIsIncorrect});let t=e[0];if(0===t.allow)return void r.status(200).send({result:a.error,message:a.yourAccountIsNotAllowed});t.token=B.a.sign({id:t.id,email:t.email,firstName:t.firstName,lastName:t.lastName},M.secret),r.status(200).send({result:a.success,message:a.successfullySignedIn,data:t})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:a.error,message:a.unknownServerError,err:e})}}),Me.post("/sign-up",async(e,r,s)=>{const t=e.body,n=e.get("language"),a=J[n],{email:o,firstName:i,lastName:u,password:c,position:l,country:d,city:g,phone:y}=t,m=ee(c);let E=Object(k.sprintf)("SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';",V.users,o);try{if((await G.query(E,null)).length>0)return void r.status(200).send({result:a.error,message:a.emailAlreadyRegistered});const e=[[null,o,i,u,m,l,JSON.stringify(d),g,y,0]];E=Object(k.sprintf)("INSERT INTO `%s` VALUES ?;",V.users,V.users),await G.query(E,[e]),r.status(200).send({result:a.success,message:a.successfullyRegistered})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:a.error,message:a.unknownServerError,err:e})}});var Ve=Me;const qe=l.a.Router();qe.post("/post",async(e,r,s)=>{const{category:t,name:n,email:a,subject:o,message:i}=e.body,u=e.get("language"),c=J[u],l=[[null,t,(new Date).toISOString(),n,a,o,i]];let d=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `email` = VALUES(`email`), `subject` = VALUES(`subject`), `message` = VALUES(`message`);",V.contactUs);try{await G.query(d,[l]),r.status(200).send({result:c.success,message:c.successfullyPosted})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:c.error,message:c.unknownServerError,err:e})}});var je=qe;const ke=l.a.Router();ke.use("/admin",Te),ke.use("/auth",Ve),ke.use("/contact-us",je);var De=ke;const Ce=l.a.Router();Ce.post("/list",(e,r,s)=>{(async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.mediaSlider,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError,err:e})}})(e,r)});var Pe=Ce;const xe=l.a.Router();xe.post("/list",(e,r,s)=>{(async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.ourServices,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError,err:e})}})(e,r)});var Je=xe;const We=l.a.Router();We.post("/list",(e,r,s)=>{(async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.businessPartner,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError,err:e})}})(e,r)});var Fe=We;const He=l.a.Router();He.post("/list",(e,r,s)=>{(async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC LIMIT 20;",V.ourClients,a);try{let e=await G.query(i,null);const s=new Date;let t,n,a,u,c,l;for(let r of e)t=new Date(r.timestamp),l=(n=Math.floor((s-t)/6e4))%60,c=(n=Math.floor(n/60))%24,u=(n=Math.floor(n/24))%30,a=n=Math.floor(n/30),r.timeDiff={M:a,d:u,h:c,m:l};r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError,err:e})}})(e,r)});var ze=He;const Ye=l.a.Router();Ye.post("/list",(e,r,s)=>{(async(e,r,s)=>{const t=e.get("language"),n=e.body,{category:a}=n,o=J[t];let i=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",V.directorBoard,a);try{let e=await G.query(i,null);r.status(200).send({result:o.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:o.error,message:o.unknownServerError,err:e})}})(e,r)});var Be=Ye;const $e=l.a.Router();$e.post("/list",(e,r,s)=>{(async(e,r,s)=>{const t=e.get("language"),n=e.body,{scope:a,category:o,limit:i}=n,u=J[t],c=new Date,l=Object(k.sprintf)("%04d-%02d-%02d",c.getFullYear(),c.getMonth()+1,c.getDate());let d=Object(k.sprintf)("SELECT * FROM `%s_%s` WHERE `category` = '%s' AND `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;",a,V.events,o,"previous"===a?"<=":">=",l,"previous"===a?"DESC":"ASC",i);try{let e=await G.query(d,null);r.status(200).send({result:u.success,data:e})}catch(e){F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:u.error,message:u.unknownServerError,err:e})}})(e,r)});var Ke=$e;const Ze=l.a.Router();Ze.use("/media-slider",Pe),Ze.use("/our-services",Je),Ze.use("/business-partner",Fe),Ze.use("/our-clients",ze),Ze.use("/director-board",Be),Ze.use("/events",Ke);var Ge=Ze;const Qe=l()(),Xe=process.cwd();Qe.set("views",g.a.join(Xe,"views")),Qe.set("view engine","pug"),Qe.use(f()("dev")),Qe.use(l.a.json()),Qe.use(l.a.urlencoded({extended:!1})),Qe.use(m()()),Qe.use(O()()),Qe.use(A()()),Qe.use(w()({limits:{fileSize:52428800}})),Qe.use("/api/admin",S()({secret:M.secretAdmin}).unless({path:["/api/admin/auth/sign-in"]})),Qe.use("/api",De),Qe.use("/assets-api",Ge),Qe.use("/admin",l.a.static(g.a.join(Xe,"admin-frontend"))),Qe.get("/admin/*",function(e,r){r.sendFile(g.a.join(Xe,"admin-frontend/index.html"))}),Qe.use("/assets",l.a.static(g.a.join(Xe,"public"))),Qe.use(l.a.static(g.a.join(Xe,"frontend"))),Qe.get("*",function(e,r){r.sendFile(g.a.join(Xe,"frontend/index.html"))}),Qe.use(function(e,r,s){s(u()(404))}),Qe.use(function(e,r,s,t){s.locals.message=e.message,s.locals.error="development"===r.app.get("env")?e:{},s.status(e.status||500),s.render("error")});var er=Qe,rr=s(18),sr=s.n(rr),tr=s(19),nr=s.n(tr),ar=s(3),or=s.n(ar);let ir,ur,cr;o.a.config(),or.a.isMaster&&(or.a.fork(),or.a.on("exit",function(e,r,s){or.a.fork()})),or.a.isWorker&&(ir=new sr.a("express:server"),ur=function(e){const r=parseInt(e,10);if(isNaN(r))return e;if(r>=0)return r;return!1}(I.port),er.set("port",ur),(cr=nr.a.createServer(er)).listen(ur),cr.on("error",function(e){if("listen"!==e.syscall)throw e;const r="string"==typeof ur?"Pipe "+ur:"Port "+ur;switch(e.code){case"EACCES":console.error(r+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(r+" is already in use"),process.exit(1);break;default:throw e}}),cr.on("listening",function(){const e=cr.address(),r="string"==typeof e?"pipe "+e:"port "+e.port;ir("Listening on "+r),console.log("Listening on "+r)}))}]);