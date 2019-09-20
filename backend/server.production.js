!function(e){var r={};function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/",s(s.s=20)}([function(e,r){e.exports=require("sprintf-js")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("cluster")},function(e,r){e.exports=require("jsonwebtoken")},function(e,r){e.exports=require("dotenv")},function(e,r){e.exports=require("http-errors")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("morgan")},function(e,r){e.exports=require("express-jwt")},function(e,r){e.exports=require("cors")},function(e,r){e.exports=require("compression")},function(e,r){e.exports=require("express-fileupload")},function(e,r){e.exports=require("uuid")},function(e,r){e.exports=require("mkdirp")},function(e,r){e.exports=require("tracer")},function(e,r){e.exports=require("mysql2")},function(e,r){e.exports=require("crypto")},function(e,r){e.exports=require("debug")},function(e,r){e.exports=require("http")},function(e,r,s){"use strict";s.r(r);var t={};s.r(t),s.d(t,"server",function(){return R}),s.d(t,"mysql",function(){return _});var n={};s.r(n),s.d(n,"server",function(){return N}),s.d(n,"mysql",function(){return I});var o=s(5),i=s.n(o),a=s(6),u=s.n(a),l=s(1),d=s.n(l),c=s(2),g=s.n(c),f=s(7),m=s.n(f),E=s(8),p=s.n(E),S=s(9),y=s.n(S),v=s(10),O=s.n(v),b=s(11),A=s.n(b),U=s(12),L=s.n(U);const R={port:8080,baseUrl:"http://127.0.0.1:8080/"},_={connectionLimit:10,host:"127.0.0.1",user:"root",password:"",database:"portal3sections",port:3306,connectTimeout:15e3},N={port:80,baseUrl:"http://108.160.135.63/"},I={connectionLimit:10,host:"127.0.0.1",user:"root",password:"",database:"portal3sections",port:3306,connectTimeout:15e3};let w=t;const T={isDev:!1,port:(w=n).server.port,baseUrl:w.server.baseUrl,name:"Portal - 3 sections",description:"Portal - 3 sections",author:"Zhenlong J.",secret:"portal3sections@@",environment:"production"},M=w.mysql,V={name:"portal3sections",key:"portal3sections",secret:"portal3sections@@",secretAdmin:"portal3sections_admin@@"},h={users:"users",admins:"admins",mediaSlider:"media_slider",ourServices:"our_services",businessPartner:"business_partner",contactUs:"contact_us",ourClients:"our_clients",directorBoard:"director_board",events:"events",previousEvents:"previous_events",upcomingEvents:"upcoming_events",humanOurServices:"human_our_services"},q={mediaSlider:"/uploads/media-slider",ourServices:"/uploads/our-services",businessPartner:"/uploads/business-partner",ourClients:"/uploads/our-clients",directorBoard:"/uploads/director-board",previousEvents:"/uploads/previous-events",upcomingEvents:"/uploads/upcoming-events"};var j={server:T,mysql:M,session:V,dbTblName:h,uploadPath:q},k=s(0),D=s(13),C=s.n(D),P=s(14),x=s.n(P),J={en:{success:"success",error:"error",unknownServerError:"Unknown server error",emailAlreadyRegistered:"This email is already registered.",usernameAlreadyRegistered:"This username is already registered.",successfullyRegistered:"Successfully registered. Please try to sign in.",emailIsIncorrect:"Email is incorrect",usernameIsIncorrect:"Username is incorrect",passwordIsIncorrect:"Password is incorrect",yourAccountIsNotAllowed:"Your account is not allowed. Please contact admin",successfullySignedIn:"Successfully signed in",successfullySignedOut:"Successfully signed out",error404:"Not Fount",error500:"Unknown server error",successfullySaved:"Successfully saved",successfullyAdded:"Successfully added",successfullyEdited:"Successfully edited",successfullyChanged:"Successfully changed",successfullyDeleted:"Successfully Deleted",currentPasswordIncorrect:"Current password is incorrect",failedDueToUnknownServerError:"Failed due to unknown server error",invalidParameters:"Invalid Parameters",notUploaded:"Not uploaded",successfullyUploaded:"Successfully uploaded",successfullyPosted:"Successfully posted"},ar:{success:"success",error:"error",unknownServerError:"خطأ غير معروف في الخادم",emailAlreadyRegistered:"عنوان البريد الإلكترونى هذا مسجل بالفعل",usernameAlreadyRegistered:"وسجلت بالفعل اسم المستخدم هذا",successfullyRegistered:"سجلت بنجاح. يرجى محاولة تسجيل الدخول",emailIsIncorrect:"البريد الالكتروني غير صحيح",usernameIsIncorrect:"اسم المستخدم غير صحيح",passwordIsIncorrect:"كلمة المرور غير صحيحة",yourAccountIsNotAllowed:"حسابك غير مسموح به. يرجى الاتصال المشرف",successfullySignedIn:"تم تسجيل الدخول بنجاح",successfullySignedOut:"تم تسجيل الخروج بنجاح",error404:"لم يتم العثور على",error500:"خطأ غير معروف في الخادم",successfullySaved:"حفظ بنجاح",successfullyAdded:"أضيف بنجاح",successfullyEdited:"تم التعديل بنجاح",successfullyChanged:"تغيرت بنجاح",successfullyDeleted:"تم الحذف بنجاح",currentPasswordIncorrect:"كلمة المرور الحالية غير صحيحة",failedDueToUnknownServerError:"فشل بسبب خطأ غير معروف في الخادم",invalidParameters:"معلمات غير صالحة",notUploaded:"لم يتم الرفع",successfullyUploaded:"تم الرفع بنجاح",successfullyPosted:"تم النشر بنجاح"}},W=s(15),F=s.n(W).a.colorConsole();const H=d.a.Router();H.post("/upload/:dir",(e,r,s)=>{const t=e.params,{dir:n}=t,o=e.get("language"),i=J[o],{files:a}=e;if(0==Object.keys(a).length)return F.error(JSON.stringify(error)),F.error(__filename),r.status(200).send({result:i.error,message:i.notUploaded});const u=a.file,l=g.a.extname(u.name),d=process.cwd(),c=Object(k.sprintf)("%s%s",C()(),l),f=Object(k.sprintf)("%s/public/uploads/%s",d,n),m=Object(k.sprintf)("%s/%s",f,c);x()(f,()=>{u.mv(m,function(e){return e?(F.error(JSON.stringify(e)),F.error(__filename),r.status(200).send({result:i.error,message:i.notUploaded})):r.status(200).send({result:i.success,message:i.successfullyUploaded,filename:c,oldFilename:u.name})})})});var z=H,Y=s(4),B=s.n(Y),$=s(16),K=s.n($).a.createPool(j.mysql),Z=s(17),G=s.n(Z),Q=e=>{return G.a.createHmac("sha256",j.server.secret).update(e).digest("hex")};const X=d.a.Router();X.post("/sign-in",(e,r,s)=>{const t=e.body,n=e.get("language"),{username:o,password:i}=t;let a=Object(k.sprintf)("SELECT `email` FROM `%s` WHERE BINARY `username` = '%s';",h.admins,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:J[n].error,message:J[n].unknownServerError});if(0===s.length)return void r.status(200).send({result:J[n].error,message:J[n].usernameIsIncorrect});const u=Q(i);a=Object(k.sprintf)("SELECT U.* FROM `%s` U WHERE BINARY U.username = '%s' AND BINARY U.hash = '%s';",h.admins,o,u),K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:J[n].error,message:J[n].unknownServerError});if(0===s.length)return void r.status(200).send({result:J[n].error,message:J[n].passwordIsIncorrect});let o=s[0];o.token=B.a.sign({sub:o.id},V.secretAdmin),r.status(200).send({result:J[n].success,message:J[n].successfullySignedIn,data:o})})})});var ee=X;const re=d.a.Router(),se=(e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.mediaSlider,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})},te=(e,r,s,t)=>{const n=e.get("language"),o=e.body,{id:i,category:a,name:u,title:l,description:d,media:c,originMedia:g,mediaSize:f,note:m}=o,E=J[n],p=c.startsWith("/")?c:`${q.mediaSlider}/${c}`,S=[[i,a,u,l,d,p,g,f,m]];let y=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);",h.mediaSlider);K.query(y,[S],(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:E.error,message:E.unknownServerError});r.status(200).send({result:E.success,message:i?E.successfullyEdited:E.successfullyAdded,data:{insertId:i||s.insertId}})})};re.post("/list",(e,r,s)=>{se(e,r)}),re.post("/edit",(e,r,s)=>{te(e,r)}),re.post("/delete",(e,r,s)=>{const t=e.get("language"),n=e.body,{id:o}=n,i=J[t];let a=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",h.mediaSlider,o);K.query(a,null,(s,t,n)=>{if(s)return F.error(JSON.stringify(s)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});se(e,r)})});var ne=re;const oe=d.a.Router(),ie=(e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC;",h.contactUs,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})};oe.post("/list",(e,r,s)=>{ie(e,r)}),oe.post("/delete",(e,r,s)=>{const t=e.get("language"),n=e.body,{id:o}=n,i=J[t];let a=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",h.contactUs,o);K.query(a,null,(s,t,n)=>{if(s)return F.error(JSON.stringify(s)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});ie(e,r)})});var ae=oe;const ue=d.a.Router(),le=(e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.ourServices,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})},de=(e,r,s,t)=>{const n=e.get("language"),o=e.body,{id:i,category:a,name:u,title:l,description:d,media:c,originMedia:g,mediaSize:f,note:m}=o,E=J[n],p=c.startsWith("/")?c:`${q.ourServices}/${c}`,S=[[i,a,u,l,d,p,g,f,m]];let y=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);",h.ourServices);K.query(y,[S],(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:E.error,message:E.unknownServerError});r.status(200).send({result:E.success,message:i?E.successfullyEdited:E.successfullyAdded,data:{insertId:i||s.insertId}})})};ue.post("/list",(e,r,s)=>{le(e,r)}),ue.post("/edit",(e,r,s)=>{de(e,r)}),ue.post("/delete",(e,r,s)=>{const t=e.get("language"),n=e.body,{id:o}=n,i=J[t];let a=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",h.ourServices,o);K.query(a,null,(s,t,n)=>{if(s)return F.error(JSON.stringify(s)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});le(e,r)})});var ce=ue;const ge=d.a.Router(),fe=(e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.businessPartner,o);console.log(a),K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})},me=(e,r,s,t)=>{const n=e.get("language"),o=e.body,{id:i,category:a,name:u,title:l,description:d,media:c,originMedia:g,mediaSize:f,note:m,social1:E,social2:p,social3:S}=o,y=J[n],v=c.startsWith("/")?c:`${q.businessPartner}/${c}`,O=[[i,a,u,l,d,v,g,f,E,p,S,m]];let b=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `social1` = VALUES(`social1`), `social2` = VALUES(`social2`), `social3` = VALUES(`social3`), `note` = VALUES(`note`);",h.businessPartner);K.query(b,[O],(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:y.error,message:y.unknownServerError});r.status(200).send({result:y.success,message:i?y.successfullyEdited:y.successfullyAdded,data:{insertId:i||s.insertId}})})};ge.post("/list",(e,r,s)=>{fe(e,r)}),ge.post("/edit",(e,r,s)=>{me(e,r)}),ge.post("/delete",(e,r,s)=>{const t=e.get("language"),n=e.body,{id:o}=n,i=J[t];let a=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",h.businessPartner,o);K.query(a,null,(s,t,n)=>{if(s)return F.error(JSON.stringify(s)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});fe(e,r)})});var Ee=ge;const pe=d.a.Router(),Se=(e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.ourClients,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})},ye=(e,r,s,t)=>{const n=e.get("language"),o=e.body,{id:i,category:a,timestamp:u,name:l,photo:d,photoOriginMedia:c,photoMediaSize:g,stars:f,title:m,feedback:E,files:p,filesOriginMedia:S,filesMediaSize:y,note:v}=o,O=J[n],b=d.startsWith("/")?d:`${q.ourClients}/${d}`,A=[[i,a,u,l,b,c,g,f,m,E,p,S,y,v]];let U=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `timestamp` = VALUES(`timestamp`), `name` = VALUES(`name`), `photo` = VALUES(`photo`), `photoOriginMedia` = VALUES(`photoOriginMedia`), `photoMediaSize` = VALUES(`photoMediaSize`), `stars` = VALUES(`stars`), `title` = VALUES(`title`), `feedback` = VALUES(`feedback`), `files` = VALUES(`files`), `filesOriginMedia` = VALUES(`filesOriginMedia`), `filesMediaSize` = VALUES(`filesMediaSize`), `note` = VALUES(`note`);",h.ourClients);K.query(U,[A],(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:O.error,message:O.unknownServerError});r.status(200).send({result:O.success,message:i?O.successfullyEdited:O.successfullyAdded,data:{insertId:i||s.insertId}})})};pe.post("/list",(e,r,s)=>{Se(e,r)}),pe.post("/edit",(e,r,s)=>{ye(e,r)}),pe.post("/delete",(e,r,s)=>{const t=e.get("language"),n=e.body,{id:o}=n,i=J[t];let a=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",h.ourClients,o);K.query(a,null,(s,t,n)=>{if(s)return F.error(JSON.stringify(s)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});Se(e,r)})});var ve=pe;const Oe=d.a.Router(),be=(e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.directorBoard,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})},Ae=(e,r,s,t)=>{const n=e.get("language"),o=e.body,{id:i,category:a,name:u,title:l,description:d,media:c,originMedia:g,mediaSize:f,note:m}=o,E=J[n],p=c.startsWith("/")?c:`${q.directorBoard}/${c}`,S=[[i,a,u,l,d,p,g,f,m]];let y=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);",h.directorBoard);K.query(y,[S],(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:E.error,message:E.unknownServerError});r.status(200).send({result:E.success,message:i?E.successfullyEdited:E.successfullyAdded,data:{insertId:i||s.insertId}})})};Oe.post("/list",(e,r,s)=>{be(e,r)}),Oe.post("/edit",(e,r,s)=>{Ae(e,r)}),Oe.post("/delete",(e,r,s)=>{const t=e.get("language"),n=e.body,{id:o}=n,i=J[t];let a=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",h.directorBoard,o);K.query(a,null,(s,t,n)=>{if(s)return F.error(JSON.stringify(s)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});be(e,r)})});var Ue=Oe;const Le=d.a.Router(),Re=(e,r,s)=>{const t=e.get("language"),n=e.body,{scope:o,category:i,limit:a}=n,u=J[t];let l=Object(k.sprintf)("SELECT * FROM `%s_%s` WHERE `category` = '%s' ORDER BY `timestamp` %s;",o,h.events,i,"previous"===o?"DESC":"ASC");K.query(l,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:u.error,message:u.unknownServerError});r.status(200).send({result:u.success,data:s})})},_e=(e,r,s,t)=>{const n=e.get("language"),o=e.body,{scope:i,id:a,category:u,type:l,name:d,timestamp:c,title:g,description:f,media:m,originMedia:E,mediaSize:p,note:S}=o,y=J[n],v=m.startsWith("/")?m:`${q.previousEvents}/${m}`,O=[[a,u,l,d,c,g,f,v,E,p,S]];let b=Object(k.sprintf)("INSERT INTO `%s_%s` VALUES ? ON DUPLICATE KEY UPDATE `type` = VALUES(`type`), `name` = VALUES(`name`), `timestamp` = VALUES(`timestamp`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);",i,h.events);K.query(b,[O],(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:y.error,message:y.unknownServerError});r.status(200).send({result:y.success,message:a?y.successfullyEdited:y.successfullyAdded,data:{insertId:a||s.insertId}})})};Le.post("/list",(e,r,s)=>{Re(e,r)}),Le.post("/edit",(e,r,s)=>{_e(e,r)}),Le.post("/delete",(e,r,s)=>{const t=e.get("language"),n=e.body,{id:o}=n,i=J[t];let a=Object(k.sprintf)("DELETE FROM `%s` WHERE `id` = '%d';",h.previousEvents,o);K.query(a,null,(s,t,n)=>{if(s)return F.error(JSON.stringify(s)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});Re(e,r)})});var Ne=Le;const Ie=d.a.Router();Ie.use("/common",z),Ie.use("/auth",ee),Ie.use("/media-slider",ne),Ie.use("/contact-us",ae),Ie.use("/our-services",ce),Ie.use("/business-partner",Ee),Ie.use("/our-clients",ve),Ie.use("/director-board",Ue),Ie.use("/events",Ne);var we=Ie;const Te=d.a.Router();Te.post("/sign-in",(e,r,s)=>{const t=e.body,n=e.get("language"),{email:o,password:i}=t;let a=Object(k.sprintf)("SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';",h.users,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:J[n].error,message:J[n].unknownServerError});if(0===s.length)return void r.status(200).send({result:J[n].error,message:J[n].emailIsIncorrect});const u=Q(i);a=Object(k.sprintf)("SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';",h.users,o,u),K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:J[n].error,message:J[n].unknownServerError});if(0===s.length)return void r.status(200).send({result:J[n].error,message:J[n].passwordIsIncorrect});let o=s[0];0!==o.allow?(o.token=B.a.sign({id:o.id,email:o.email,firstName:o.firstName,lastName:o.lastName},V.secret),r.status(200).send({result:J[n].success,message:J[n].successfullySignedIn,data:o})):r.status(200).send({result:J[n].error,message:J[n].yourAccountIsNotAllowed})})})}),Te.post("/sign-up",(e,r,s)=>{const t=e.body,n=e.get("language"),{email:o,firstName:i,lastName:a,password:u,position:l,country:d,city:c,phone:g}=t;Q(u);let f=Object(k.sprintf)("SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';",h.users,o);K.query(f,null,(e,s,t)=>{if(e)return F.error("auth/sign-in",JSON.stringify(e)),void r.status(200).send({result:J[n].error,message:J[n].unknownServerError});if(s.length>0)return void r.status(200).send({result:J[n].error,message:J[n].emailAlreadyRegistered});const m=Q(u),E=[[null,o,i,a,m,l,JSON.stringify(d),c,g,0]];f=Object(k.sprintf)("INSERT INTO `%s` VALUES ?;",h.users,h.users),K.query(f,[E],(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:J[n].error,message:J[n].unknownServerError});r.status(200).send({result:J[n].success,message:J[n].successfullyRegistered})})})});var Me=Te;const Ve=d.a.Router();Ve.post("/post",(e,r,s)=>{const{category:t,name:n,email:o,subject:i,message:a}=e.body,u=e.get("language"),l=J[u],d=[[null,t,(new Date).toISOString(),n,o,i,a]];let c=Object(k.sprintf)("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `email` = VALUES(`email`), `subject` = VALUES(`subject`), `message` = VALUES(`message`);",h.contactUs);K.query(c,[d],(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:l.success,message:l.unknownServerError});r.status(200).send({result:l.success,message:l.successfullyPosted})})});var he=Ve;const qe=d.a.Router();qe.use("/admin",we),qe.use("/auth",Me),qe.use("/contact-us",he);var je=qe;const ke=d.a.Router();ke.post("/list",(e,r,s)=>{((e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.mediaSlider,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})})(e,r)});var De=ke;const Ce=d.a.Router();Ce.post("/list",(e,r,s)=>{((e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.ourServices,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})})(e,r)});var Pe=Ce;const xe=d.a.Router();xe.post("/list",(e,r,s)=>{((e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.businessPartner,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})})(e,r)});var Je=xe;const We=d.a.Router();We.post("/list",(e,r,s)=>{((e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC LIMIT 20;",h.ourClients,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});const n=new Date;let o,a,u,l,d,c;for(let e of s)o=new Date(e.timestamp),c=(a=Math.floor((n-o)/6e4))%60,d=(a=Math.floor(a/60))%24,l=(a=Math.floor(a/24))%30,u=a=Math.floor(a/30),e.timeDiff={M:u,d:l,h:d,m:c};r.status(200).send({result:i.success,data:s})})})(e,r)});var Fe=We;const He=d.a.Router();He.post("/list",(e,r,s)=>{((e,r,s)=>{const t=e.get("language"),n=e.body,{category:o}=n,i=J[t];let a=Object(k.sprintf)("SELECT * FROM `%s` WHERE `category` = '%s';",h.directorBoard,o);K.query(a,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:i.error,message:i.unknownServerError});r.status(200).send({result:i.success,data:s})})})(e,r)});var ze=He;const Ye=d.a.Router();Ye.post("/list",(e,r,s)=>{((e,r,s)=>{const t=e.get("language"),n=e.body,{scope:o,category:i,limit:a}=n,u=J[t],l=new Date,d=Object(k.sprintf)("%04d-%02d-%02d",l.getFullYear(),l.getMonth()+1,l.getDate());let c=Object(k.sprintf)("SELECT * FROM `%s_%s` WHERE `category` = '%s' AND `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;",o,h.events,i,"previous"===o?"<=":">=",d,"previous"===o?"DESC":"ASC",a);K.query(c,null,(e,s,t)=>{if(e)return F.error(JSON.stringify(e)),F.error(__filename),void r.status(200).send({result:u.error,message:u.unknownServerError});r.status(200).send({result:u.success,data:s})})})(e,r)});var Be=Ye;const $e=d.a.Router();$e.use("/media-slider",De),$e.use("/our-services",Pe),$e.use("/business-partner",Je),$e.use("/our-clients",Fe),$e.use("/director-board",ze),$e.use("/events",Be);var Ke=$e;const Ze=d()(),Ge=process.cwd();Ze.set("views",g.a.join(Ge,"views")),Ze.set("view engine","pug"),Ze.use(p()("dev")),Ze.use(d.a.json()),Ze.use(d.a.urlencoded({extended:!1})),Ze.use(m()()),Ze.use(O()()),Ze.use(A()()),Ze.use(L()({limits:{fileSize:52428800}})),Ze.use("/api/admin",y()({secret:V.secretAdmin}).unless({path:["/api/admin/auth/sign-in"]})),Ze.use("/api",je),Ze.use("/assets-api",Ke),Ze.use("/admin",d.a.static(g.a.join(Ge,"admin-frontend"))),Ze.get("/admin/*",function(e,r){r.sendFile(g.a.join(Ge,"admin-frontend/index.html"))}),Ze.use("/assets",d.a.static(g.a.join(Ge,"public"))),Ze.use(d.a.static(g.a.join(Ge,"frontend"))),Ze.get("*",function(e,r){r.sendFile(g.a.join(Ge,"frontend/index.html"))}),Ze.use(function(e,r,s){s(u()(404))}),Ze.use(function(e,r,s,t){s.locals.message=e.message,s.locals.error="development"===r.app.get("env")?e:{},s.status(e.status||500),s.render("error")});var Qe=Ze,Xe=s(18),er=s.n(Xe),rr=s(19),sr=s.n(rr),tr=s(3),nr=s.n(tr);let or,ir,ar;i.a.config(),nr.a.isMaster&&(nr.a.fork(),nr.a.on("exit",function(e,r,s){nr.a.fork()})),nr.a.isWorker&&(or=new er.a("express:server"),ir=function(e){const r=parseInt(e,10);if(isNaN(r))return e;if(r>=0)return r;return!1}(T.port),Qe.set("port",ir),(ar=sr.a.createServer(Qe)).listen(ir),ar.on("error",function(e){if("listen"!==e.syscall)throw e;const r="string"==typeof ir?"Pipe "+ir:"Port "+ir;switch(e.code){case"EACCES":console.error(r+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(r+" is already in use"),process.exit(1);break;default:throw e}}),ar.on("listening",function(){const e=ar.address(),r="string"==typeof e?"pipe "+e:"port "+e.port;or("Listening on "+r),console.log("Listening on "+r)}))}]);