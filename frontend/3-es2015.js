(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0ICx":function(n,t,l){"use strict";l.d(t,"a",function(){return a});var e=l("lJxs"),o=l("AytR"),c=l("geh6"),i=l("8Y7J"),r=l("IheW");let a=(()=>{class n{constructor(n){this.http=n}list(n){return this.http.post(`${o.a.assetsApiBaseUrl}${c.a.common.ourClients.list}`,n).pipe(Object(e.a)(n=>n))}}return n.ngInjectableDef=i.Pb({factory:function(){return new n(i.Qb(r.c))},token:n,providedIn:"root"}),n})()},KxQi:function(n,t,l){"use strict";var e=l("8Y7J"),o=l("zF2Y"),c=l("YbOK"),i=l("TSSN"),r=l("SVse");l("UlC/"),l("iInd"),l("fRjq"),l("0ICx"),l.d(t,"a",function(){return a}),l.d(t,"b",function(){return u});var a=e.pb({encapsulation:0,styles:[[".mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]{display:flex}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;flex:0 0 auto;align-self:stretch;width:2.5rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]{display:block;flex:1 1 auto;align-self:stretch;word-wrap:break-word;margin:0 0 1.2rem 1.2rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .brief[_ngcontent-%COMP%]{padding-bottom:.5rem;font-weight:500}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .brief[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4285f4}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .brief[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:inline-block;vertical-align:baseline}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .brief[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{display:inline-block;float:none;padding-left:.7rem;font-weight:300;font-size:.86rem;color:#9e9e9e}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .added-images[_ngcontent-%COMP%]{margin-bottom:.6rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .added-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;margin-right:.3rem;width:7rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .added-text[_ngcontent-%COMP%]{margin-bottom:.6rem;max-width:450px;max-width:unset!important}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]{font-weight:300;font-size:.86rem;color:#9e9e9e}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover   .fab[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover   .far[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover   .fas[_ngcontent-%COMP%]{color:#f44336;transition:.4s}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#000;transition:.4s}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{padding-right:.5rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-right:.3rem;color:#4285f4;cursor:default}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{color:#9e9e9e;transition:.4s}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover, .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%]:hover, .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]:hover{color:#757575}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fa-thumbs-up[_ngcontent-%COMP%]{padding-right:.3rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{color:#9e9e9e}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-weight:400;margin-bottom:.3rem}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title.title-one[_ngcontent-%COMP%]{transition:.4s}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title.title-one[_ngcontent-%COMP%]:hover{color:#4285f4}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]{font-weight:300;font-size:.86rem;color:#757575}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{padding-right:.5rem}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:.5s}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#4285f4}.news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right-side-meta[_ngcontent-%COMP%]{float:right;font-weight:300;color:#9e9e9e;margin-top:.3rem}.news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;display:inline-block;vertical-align:middle;max-width:100%}.news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{padding-right:.6rem}.news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .fa-heart-o[_ngcontent-%COMP%]{cursor:pointer;color:rgba(0,0,0,.4);transition:.53s}.news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .fa-heart-o[_ngcontent-%COMP%]:hover{color:#f44336}.news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]{margin-top:1.3rem;margin-bottom:.3rem}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{font-size:1.5rem;margin-left:.2rem;color:rgba(0,0,0,.4)}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] ~ textarea[_ngcontent-%COMP%], .news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] ~ input[_ngcontent-%COMP%]{width:calc(100% - 4rem)}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix.active[_ngcontent-%COMP%]{color:rgba(0,0,0,.4)}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-top:0;padding-bottom:.5rem;margin-left:3rem;margin-bottom:0;height:1.3rem;border-bottom:1px solid rgba(0,0,0,.1)}.my-client-photo[_ngcontent-%COMP%]{height:40px!important}"]],data:{}});function s(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,13,"div",[["class","news"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"div",[["class","label"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,0,"img",[["class","rounded-circle z-depth-1-half my-client-photo"]],[[8,"src",4]],null,null,null,null)),(n()(),e.rb(3,0,null,null,10,"div",[["class","excerpt"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,4,"div",[["class","brief"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,1,"a",[["class","name"]],null,null,null,null,null)),(n()(),e.Jb(6,null,["",""])),(n()(),e.rb(7,0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(n()(),e.Jb(8,null,["",""])),(n()(),e.rb(9,0,null,null,1,"star-rating",[["checkedcolor","gold"],["readonly","true"],["size","24px"],["uncheckedcolor","gray"]],null,null,null,o.c,o.a)),e.qb(10,4243456,null,0,c.b,[],{checkedcolor:[0,"checkedcolor"],uncheckedcolor:[1,"uncheckedcolor"],value:[2,"value"],size:[3,"size"],readonly:[4,"readonly"]},null),(n()(),e.rb(11,0,null,null,1,"div",[["class","added-text"]],null,null,null,null,null)),(n()(),e.Jb(12,null,["",""])),(n()(),e.rb(13,0,null,null,0,"div",[["class","feed-footer"]],null,null,null,null,null))],function(n,t){n(t,10,0,"gold","gray",t.context.$implicit.stars,"24px","true")},function(n,t){var l=t.component;n(t,2,0,t.context.$implicit.photo),n(t,6,0,"en"===l.lang?t.context.$implicit.nameEn:t.context.$implicit.nameAr),n(t,8,0,t.context.$implicit.ago),n(t,12,0,"en"===l.lang?t.context.$implicit.feedbackEn:t.context.$implicit.feedbackAr)})}function u(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,8,"section",[["class","screen-breakpoint margin-auto-x my-5"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"h2",[["class","h1-responsive font-weight-bold text-center my-5"]],null,null,null,null,null)),(n()(),e.Jb(2,null,["",""])),e.Eb(131072,i.k,[i.l,e.h]),(n()(),e.rb(4,0,null,null,4,"div",[["class","row full-width px-3"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),e.rb(6,0,null,null,2,"div",[["class","mdb-feed"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,s)),e.qb(8,278528,null,0,r.j,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,8,0,t.component.items)},function(n,t){n(t,2,0,e.Kb(t,2,0,e.Db(t,3).transform("HUMAN_LAYOUT.OUR_CLIENTS")))})}},Lwz3:function(n,t,l){"use strict";var e=l("8Y7J"),o=l("KzlR"),c=l("Ezqk"),i=l("SVse"),r=l("ura0"),a=l("/q54"),s=l("TSSN"),u=l("IP0z");l("cCrQ"),l("iInd"),l("fRjq"),l("VAyd"),l.d(t,"a",function(){return g}),l.d(t,"b",function(){return _});var g=e.pb({encapsulation:0,styles:[[".my-card[_ngcontent-%COMP%]{height:500px}.my-card-image[_ngcontent-%COMP%]{width:100%;height:200px}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{height:117px!important}.social-sec[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:20px}"]],data:{}});function d(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,5,"a",[["class","waves-light"],["color","fb"],["floating","true"],["mdbBtn",""],["mdbWavesEffect",""],["size","sm"],["target","_blank"],["type","button"]],[[8,"href",4]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e.Db(n,2).click(l)&&o),o},o.H,o.l)),e.qb(1,114688,null,0,c.lb,[e.k,e.C],{color:[0,"color"],size:[1,"size"],floating:[2,"floating"]},null),e.qb(2,16384,null,0,c.Jc,[e.k],null,null),(n()(),e.rb(3,0,null,0,2,"mdb-icon",[["fas",""],["icon","link"]],null,null,null,o.O,o.s)),e.qb(4,114688,null,0,c.ub,[e.k,e.C],{icon:[0,"icon"]},null),e.qb(5,16384,null,0,c.I,[e.k,e.C],null,null)],function(n,t){n(t,1,0,"fb","sm","true"),n(t,4,0,"link")},function(n,t){n(t,0,0,t.parent.context.$implicit.social1)})}function b(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,5,"a",[["class","waves-light"],["color","tw"],["floating","true"],["mdbBtn",""],["mdbWavesEffect",""],["size","sm"],["target","_blank"],["type","button"]],[[8,"href",4]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e.Db(n,2).click(l)&&o),o},o.H,o.l)),e.qb(1,114688,null,0,c.lb,[e.k,e.C],{color:[0,"color"],size:[1,"size"],floating:[2,"floating"]},null),e.qb(2,16384,null,0,c.Jc,[e.k],null,null),(n()(),e.rb(3,0,null,0,2,"mdb-icon",[["fas",""],["icon","link"]],null,null,null,o.O,o.s)),e.qb(4,114688,null,0,c.ub,[e.k,e.C],{icon:[0,"icon"]},null),e.qb(5,16384,null,0,c.I,[e.k,e.C],null,null)],function(n,t){n(t,1,0,"tw","sm","true"),n(t,4,0,"link")},function(n,t){n(t,0,0,t.parent.context.$implicit.social2)})}function O(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,5,"a",[["class","waves-light"],["color","dribbble"],["floating","true"],["mdbBtn",""],["mdbWavesEffect",""],["size","sm"],["target","_blank"],["type","button"]],[[8,"href",4]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e.Db(n,2).click(l)&&o),o},o.H,o.l)),e.qb(1,114688,null,0,c.lb,[e.k,e.C],{color:[0,"color"],size:[1,"size"],floating:[2,"floating"]},null),e.qb(2,16384,null,0,c.Jc,[e.k],null,null),(n()(),e.rb(3,0,null,0,2,"mdb-icon",[["fas",""],["icon","link"]],null,null,null,o.O,o.s)),e.qb(4,114688,null,0,c.ub,[e.k,e.C],{icon:[0,"icon"]},null),e.qb(5,16384,null,0,c.I,[e.k,e.C],null,null)],function(n,t){n(t,1,0,"dribbble","sm","true"),n(t,4,0,"link")},function(n,t){n(t,0,0,t.parent.context.$implicit.social3)})}function C(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,29,"div",[["class","col-md-4"]],null,null,null,null,null)),e.Gb(512,null,i.w,i.x,[e.q,e.r,e.k,e.C]),e.qb(2,278528,null,0,i.i,[i.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Fb(3,{"d-none d-md-block":0}),e.qb(4,933888,null,0,r.a,[e.k,a.i,a.f,i.w,[6,i.i]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),e.Fb(5,{"d-none d-md-block":0}),(n()(),e.rb(6,0,null,null,23,"mdb-card",[["class","my-1 my-card"]],null,null,null,o.J,o.n)),e.qb(7,114688,null,0,c.nb,[e.k,e.C],{class:[0,"class"]},null),(n()(),e.rb(8,0,null,0,4,"div",[["class","view view-cascade overlay waves-light"],["mdbWavesEffect",""]],null,[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e.Db(n,9).click(l)&&o),o},null,null)),e.qb(9,16384,null,0,c.Jc,[e.k],null,null),(n()(),e.rb(10,0,null,null,0,"img",[["alt","Card image cap"],["class","my-card-image round-border-top mx-auto"]],[[8,"src",4]],null,null,null,null)),(n()(),e.rb(11,0,null,null,1,"a",[],null,null,null,null,null)),(n()(),e.rb(12,0,null,null,0,"div",[["class","mask rgba-white-slight"]],null,null,null,null,null)),(n()(),e.rb(13,0,null,0,16,"mdb-card-body",[],null,null,null,o.I,o.m)),e.qb(14,114688,null,0,c.mb,[e.k,e.C],null,null),(n()(),e.rb(15,0,null,0,2,"h4",[["class","card-title text-align-center"]],null,null,null,null,null)),(n()(),e.rb(16,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Jb(17,null,["",""])),(n()(),e.rb(18,0,null,0,1,"h5",[["class","text-align-center"]],null,null,null,null,null)),(n()(),e.Jb(19,null,["",""])),(n()(),e.rb(20,0,null,0,2,"p",[["class","card-text"]],[[2,"text-align-right",null]],null,null,null,null)),e.Eb(131072,s.k,[s.l,e.h]),(n()(),e.Jb(22,null,["",""])),(n()(),e.rb(23,0,null,0,6,"div",[["class","text-align-center social-sec"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,d)),e.qb(25,16384,null,0,i.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,b)),e.qb(27,16384,null,0,i.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,O)),e.qb(29,16384,null,0,i.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=n(t,3,0,0!==t.context.index);n(t,2,0,"col-md-4",l);var e=n(t,5,0,0!==t.context.index);n(t,4,0,e,"col-md-4"),n(t,7,0,"my-1 my-card"),n(t,14,0),n(t,25,0,!!t.context.$implicit.social1&&t.context.$implicit.social1.length>0),n(t,27,0,!!t.context.$implicit.social2&&t.context.$implicit.social2.length>0),n(t,29,0,!!t.context.$implicit.social3&&t.context.$implicit.social3.length>0)},function(n,t){var l=t.component;n(t,10,0,t.context.$implicit.img),n(t,17,0,"en"===l.lang?t.context.$implicit.nameEn:t.context.$implicit.nameAr),n(t,19,0,"en"===l.lang?t.context.$implicit.titleEn:t.context.$implicit.titleAr),n(t,20,0,"rtl"===e.Kb(t,20,0,e.Db(t,21).transform("DIRECTION"))),n(t,22,0,"en"===l.lang?t.context.$implicit.descriptionEn:t.context.$implicit.descriptionAr)})}function m(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,3,"mdb-carousel-item",[],[[2,"active",null],[2,"animated",null],[2,"carousel-item-next",null],[2,"carousel-item-left",null],[2,"carousel-item-prev",null],[2,"carousel-item-right",null],[2,"carousel-item",null]],null,null,o.U,o.y)),e.qb(1,245760,[[1,4]],0,c.qc,[e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,C)),e.qb(3,278528,null,0,i.j,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,1,0),n(t,3,0,t.context.$implicit)},function(n,t){n(t,0,0,e.Db(t,1).active,e.Db(t,1).animated,e.Db(t,1).directionNext,e.Db(t,1).directionLeft,e.Db(t,1).directionPrev,e.Db(t,1).directionRight,e.Db(t,1).el)})}function _(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,10,"section",[["class","screen-breakpoint margin-auto-x my-5"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"h2",[["class","h1-responsive font-weight-bold text-center my-5"]],null,null,null,null,null)),(n()(),e.Jb(2,null,["",""])),e.Eb(131072,s.k,[s.l,e.h]),(n()(),e.rb(4,0,null,null,6,"mdb-carousel",[["class","carousel-multi-item carousel"],["dir","ltr"]],[[1,"dir",0]],[[null,"mouseleave"],[null,"mouseenter"],[null,"keyup"],[null,"click"]],function(n,t,l){var o=!0;return"mouseleave"===t&&(o=!1!==e.Db(n,6).play()&&o),"mouseenter"===t&&(o=!1!==e.Db(n,6).pause()&&o),"keyup"===t&&(o=!1!==e.Db(n,6).keyboardControl(l)&&o),"click"===t&&(o=!1!==e.Db(n,6).focus()&&o),o},o.C,o.g)),e.Gb(6144,null,u.c,null,[u.b]),e.qb(6,4374528,null,1,c.r,[c.s,e.k,e.z,e.h,e.C],{isControls:[0,"isControls"],class:[1,"class"],type:[2,"type"],animation:[3,"animation"]},null),e.Hb(603979776,1,{_slidesList:1}),e.qb(8,1196032,null,0,u.b,[],{dir:[0,"dir"]},null),(n()(),e.gb(16777216,null,0,1,null,m)),e.qb(10,278528,null,0,i.j,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var l=t.component;n(t,6,0,!0,"carousel-multi-item carousel","carousel-multi-item","slide"),n(t,8,0,"ltr"),n(t,10,0,l.slides)},function(n,t){n(t,2,0,e.Kb(t,2,0,e.Db(t,3).transform("HUMAN_LAYOUT.OUR_BUSINESS_PARTNER"))),n(t,4,0,e.Db(t,8)._rawDir)})}},"UlC/":function(n,t,l){"use strict";l.d(t,"a",function(){return i});var e=l("SxV6"),o=l("skqE"),c=l("AytR");class i{constructor(n,t,l,e){this.router=n,this.globalVariableService=t,this.translate=l,this.service=e,this.lang="",this.items=[],this.defaultItems=[]}ngOnInit(){this.loadData()}loadData(){this.lang=this.translate.instant("LANG");const{category:n}=this;this.service.list({category:n}).pipe(Object(e.a)()).subscribe(n=>{if(n.result===o.a.success&&n.data.length>0){let t;for(let l of n.data)l.photo=`${c.a.assetsBaseUrl}${l.photo}`,(t=l.timeDiff).M>1?l.ago=this.translate.instant("COMMON.X_MONTHS_AGO",{val:t.M}):1==t.M?l.ago=this.translate.instant("COMMON.A_MONTH_AGO"):t.d>1?l.ago=this.translate.instant("COMMON.X_DAYS_AGO",{val:t.d}):1==t.d?l.ago=this.translate.instant("COMMON.A_DAY_AGO"):t.h>1?l.ago=this.translate.instant("COMMON.X_HOURS_AGO",{val:t.h}):1==t.h?l.ago=this.translate.instant("COMMON.A_HOUR_AGO"):t.m>1?l.ago=this.translate.instant("COMMON.X_MINUTES_AGO",{val:t.m}):1==t.m&&(l.ago=this.translate.instant("COMMON.A_MINUTE_AGO"));this.items=n.data}else this.items=this.defaultItems},n=>{this.items=this.defaultItems})}}},VAyd:function(n,t,l){"use strict";l.d(t,"a",function(){return a});var e=l("lJxs"),o=l("AytR"),c=l("geh6"),i=l("8Y7J"),r=l("IheW");let a=(()=>{class n{constructor(n){this.http=n}list(n){return this.http.post(`${o.a.assetsApiBaseUrl}${c.a.common.businessPartner.list}`,n).pipe(Object(e.a)(n=>n))}}return n.ngInjectableDef=i.Pb({factory:function(){return new n(i.Qb(r.c))},token:n,providedIn:"root"}),n})()},cCrQ:function(n,t,l){"use strict";l.d(t,"a",function(){return i});var e=l("AytR"),o=l("SxV6"),c=l("skqE");class i{constructor(n,t,l,o){this.router=n,this.globalVariableService=t,this.translate=l,this.service=o,this.lang="",this.defaultSlides=[{nameEn:"Welcome",nameAr:"\u0623\u0647\u0644\u0627 \u0628\u0643",titleEn:"Welcome",titleAr:"\u0623\u0647\u0644\u0627 \u0628\u0643",descriptionEn:"Welcome to Elite Resource Center",descriptionAr:"\u0645\u0631\u062d\u0628\u064b\u0627 \u0628\u0643\u0645 \u0641\u064a \u0645\u0631\u0643\u0632 \u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0646\u062e\u0628\u0629",img:`${e.a.assetsBaseUrl}/images/welcome.jpg`}],this.cards=[],this.slides=[[]]}chunk(n,t){let l=[];for(let e=0,o=n.length;e<o;e+=t)l.push(n.slice(e,e+t));return l}ngOnInit(){this.lang=this.translate.instant("LANG");const{category:n}=this;this.service.list({category:n}).pipe(Object(o.a)()).subscribe(n=>{if(n.result===c.a.success&&n.data.length>0){const t=25,l=240;let o;for(let c of n.data)o="."+c.media.split(".").pop(),c.titleEn&&(c.titleEn=c.titleEn.length>t?c.titleEn.substr(0,t)+"...":c.titleEn),c.titleAr&&(c.titleAr=c.titleAr.length>t?c.titleAr.substr(0,t)+"...":c.titleAr),c.descriptionEn&&(c.descriptionEn=c.descriptionEn.length>l?c.descriptionEn.substr(0,l)+"...":c.descriptionEn),c.descriptionAr&&(c.descriptionAr=c.descriptionAr.length>l?c.descriptionAr.substr(0,l)+"...":c.descriptionAr),c.img=`${e.a.assetsBaseUrl}${c.media}`;this.cards=n.data,this.slides=this.chunk(this.cards,3)}else this.cards=this.defaultSlides,this.slides=this.chunk(this.cards,3)},n=>{this.cards=this.defaultSlides,this.slides=this.chunk(this.cards,3)})}}}}]);