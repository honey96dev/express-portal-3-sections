(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0ICx":function(n,t,e){"use strict";e.d(t,"a",function(){return a});var l=e("67Y/"),o=e("AytR"),c=e("geh6"),r=e("CcnG"),i=e("t/Na"),a=function(){function n(n){this.http=n}return n.prototype.list=function(n){return this.http.post(""+o.a.assetsApiBaseUrl+c.a.common.ourClients.list,n).pipe(Object(l.a)(function(n){return n}))},n.ngInjectableDef=r.Pb({factory:function(){return new n(r.Qb(i.c))},token:n,providedIn:"root"}),n}()},KxQi:function(n,t,e){"use strict";var l=e("CcnG"),o=e("zF2Y"),c=e("75g+"),r=e("A7o+"),i=e("Ip0R");e("UlC/"),e("ZYCi"),e("fRjq"),e("0ICx"),e.d(t,"a",function(){return a}),e.d(t,"b",function(){return s});var a=l.pb({encapsulation:0,styles:[[".mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]{display:flex}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;flex:0 0 auto;align-self:stretch;width:2.5rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]{display:block;flex:1 1 auto;align-self:stretch;word-wrap:break-word;margin:0 0 1.2rem 1.2rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .brief[_ngcontent-%COMP%]{padding-bottom:.5rem;font-weight:500}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .brief[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4285f4}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .brief[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:inline-block;vertical-align:baseline}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .brief[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{display:inline-block;float:none;padding-left:.7rem;font-weight:300;font-size:.86rem;color:#9e9e9e}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .added-images[_ngcontent-%COMP%]{margin-bottom:.6rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .added-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;margin-right:.3rem;width:7rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .added-text[_ngcontent-%COMP%]{margin-bottom:.6rem;max-width:450px;max-width:unset!important}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]{font-weight:300;font-size:.86rem;color:#9e9e9e}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover   .fab[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover   .far[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover   .fas[_ngcontent-%COMP%]{color:#f44336;transition:.4s}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#000;transition:.4s}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{padding-right:.5rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-right:.3rem;color:#4285f4;cursor:default}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{color:#9e9e9e;transition:.4s}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover, .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%]:hover, .mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]:hover{color:#757575}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   .fa-thumbs-up[_ngcontent-%COMP%]{padding-right:.3rem}.mdb-feed[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%]   .feed-footer[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{color:#9e9e9e}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-weight:400;margin-bottom:.3rem}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title.title-one[_ngcontent-%COMP%]{transition:.4s}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title.title-one[_ngcontent-%COMP%]:hover{color:#4285f4}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]{font-weight:300;font-size:.86rem;color:#757575}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{padding-right:.5rem}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:.5s}.card-personal[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#4285f4}.news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right-side-meta[_ngcontent-%COMP%]{float:right;font-weight:300;color:#9e9e9e;margin-top:.3rem}.news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.news-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;display:inline-block;vertical-align:middle;max-width:100%}.news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{padding-right:.6rem}.news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .fa-heart-o[_ngcontent-%COMP%]{cursor:pointer;color:rgba(0,0,0,.4);transition:.53s}.news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   .fa-heart-o[_ngcontent-%COMP%]:hover{color:#f44336}.news-card[_ngcontent-%COMP%]   .social-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]{margin-top:1.3rem;margin-bottom:.3rem}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{font-size:1.5rem;margin-left:.2rem;color:rgba(0,0,0,.4)}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] ~ textarea[_ngcontent-%COMP%], .news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] ~ input[_ngcontent-%COMP%]{width:calc(100% - 4rem)}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .prefix.active[_ngcontent-%COMP%]{color:rgba(0,0,0,.4)}.news-card[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-top:0;padding-bottom:.5rem;margin-left:3rem;margin-bottom:0;height:1.3rem;border-bottom:1px solid rgba(0,0,0,.1)}.my-client-photo[_ngcontent-%COMP%]{height:40px!important}"]],data:{}});function u(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,13,"div",[["class","news"]],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,1,"div",[["class","label"]],null,null,null,null,null)),(n()(),l.rb(2,0,null,null,0,"img",[["class","rounded-circle z-depth-1-half my-client-photo"]],[[8,"src",4]],null,null,null,null)),(n()(),l.rb(3,0,null,null,10,"div",[["class","excerpt"]],null,null,null,null,null)),(n()(),l.rb(4,0,null,null,4,"div",[["class","brief"]],null,null,null,null,null)),(n()(),l.rb(5,0,null,null,1,"a",[["class","name"]],null,null,null,null,null)),(n()(),l.Jb(6,null,["",""])),(n()(),l.rb(7,0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(n()(),l.Jb(8,null,["",""])),(n()(),l.rb(9,0,null,null,1,"star-rating",[["checkedcolor","gold"],["readonly","true"],["size","24px"],["uncheckedcolor","gray"]],null,null,null,o.c,o.a)),l.qb(10,4243456,null,0,c.b,[],{checkedcolor:[0,"checkedcolor"],uncheckedcolor:[1,"uncheckedcolor"],value:[2,"value"],size:[3,"size"],readonly:[4,"readonly"]},null),(n()(),l.rb(11,0,null,null,1,"div",[["class","added-text"]],null,null,null,null,null)),(n()(),l.Jb(12,null,["",""])),(n()(),l.rb(13,0,null,null,0,"div",[["class","feed-footer"]],null,null,null,null,null))],function(n,t){n(t,10,0,"gold","gray",t.context.$implicit.stars,"24px","true")},function(n,t){var e=t.component;n(t,2,0,t.context.$implicit.photo),n(t,6,0,"en"===e.lang?t.context.$implicit.nameEn:t.context.$implicit.nameAr),n(t,8,0,t.context.$implicit.ago),n(t,12,0,"en"===e.lang?t.context.$implicit.feedbackEn:t.context.$implicit.feedbackAr)})}function s(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,8,"section",[["class","screen-breakpoint margin-auto-x my-5"]],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,2,"h2",[["class","h1-responsive font-weight-bold text-center my-5"]],null,null,null,null,null)),(n()(),l.Jb(2,null,["",""])),l.Eb(131072,r.k,[r.l,l.h]),(n()(),l.rb(4,0,null,null,4,"div",[["class","row full-width px-3"]],null,null,null,null,null)),(n()(),l.rb(5,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),l.rb(6,0,null,null,2,"div",[["class","mdb-feed"]],null,null,null,null,null)),(n()(),l.gb(16777216,null,null,1,null,u)),l.qb(8,278528,null,0,i.j,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,8,0,t.component.items)},function(n,t){n(t,2,0,l.Kb(t,2,0,l.Db(t,3).transform("HUMAN_LAYOUT.OUR_CLIENTS")))})}},Lwz3:function(n,t,e){"use strict";var l=e("CcnG"),o=e("KzlR"),c=e("i0AA"),r=e("Ip0R"),i=e("A7o+");e("cCrQ"),e("ZYCi"),e("fRjq"),e("VAyd"),e.d(t,"a",function(){return a}),e.d(t,"b",function(){return b});var a=l.pb({encapsulation:0,styles:[[".my-card[_ngcontent-%COMP%]{height:500px}.my-card-image[_ngcontent-%COMP%]{width:100%;height:200px}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{height:117px!important}.social-sec[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:20px}"]],data:{}});function u(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,5,"a",[["class","waves-light"],["color","fb"],["floating","true"],["mdbBtn",""],["mdbWavesEffect",""],["size","sm"],["target","_blank"],["type","button"]],[[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l.Db(n,2).click(e)&&o),o},o.H,o.l)),l.qb(1,114688,null,0,c.lb,[l.k,l.D],{color:[0,"color"],size:[1,"size"],floating:[2,"floating"]},null),l.qb(2,16384,null,0,c.Jc,[l.k],null,null),(n()(),l.rb(3,0,null,0,2,"mdb-icon",[["fas",""],["icon","link"]],null,null,null,o.O,o.s)),l.qb(4,114688,null,0,c.ub,[l.k,l.D],{icon:[0,"icon"]},null),l.qb(5,16384,null,0,c.I,[l.k,l.D],null,null)],function(n,t){n(t,1,0,"fb","sm","true"),n(t,4,0,"link")},function(n,t){n(t,0,0,t.parent.context.$implicit.social1)})}function s(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,5,"a",[["class","waves-light"],["color","tw"],["floating","true"],["mdbBtn",""],["mdbWavesEffect",""],["size","sm"],["target","_blank"],["type","button"]],[[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l.Db(n,2).click(e)&&o),o},o.H,o.l)),l.qb(1,114688,null,0,c.lb,[l.k,l.D],{color:[0,"color"],size:[1,"size"],floating:[2,"floating"]},null),l.qb(2,16384,null,0,c.Jc,[l.k],null,null),(n()(),l.rb(3,0,null,0,2,"mdb-icon",[["fas",""],["icon","link"]],null,null,null,o.O,o.s)),l.qb(4,114688,null,0,c.ub,[l.k,l.D],{icon:[0,"icon"]},null),l.qb(5,16384,null,0,c.I,[l.k,l.D],null,null)],function(n,t){n(t,1,0,"tw","sm","true"),n(t,4,0,"link")},function(n,t){n(t,0,0,t.parent.context.$implicit.social2)})}function g(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,5,"a",[["class","waves-light"],["color","dribbble"],["floating","true"],["mdbBtn",""],["mdbWavesEffect",""],["size","sm"],["target","_blank"],["type","button"]],[[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l.Db(n,2).click(e)&&o),o},o.H,o.l)),l.qb(1,114688,null,0,c.lb,[l.k,l.D],{color:[0,"color"],size:[1,"size"],floating:[2,"floating"]},null),l.qb(2,16384,null,0,c.Jc,[l.k],null,null),(n()(),l.rb(3,0,null,0,2,"mdb-icon",[["fas",""],["icon","link"]],null,null,null,o.O,o.s)),l.qb(4,114688,null,0,c.ub,[l.k,l.D],{icon:[0,"icon"]},null),l.qb(5,16384,null,0,c.I,[l.k,l.D],null,null)],function(n,t){n(t,1,0,"dribbble","sm","true"),n(t,4,0,"link")},function(n,t){n(t,0,0,t.parent.context.$implicit.social3)})}function d(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,27,"div",[["class","col-md-4"]],null,null,null,null,null)),l.Gb(512,null,r.u,r.v,[l.s,l.t,l.k,l.D]),l.qb(2,278528,null,0,r.i,[r.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Fb(3,{"d-none d-md-block":0}),(n()(),l.rb(4,0,null,null,23,"mdb-card",[["class","my-1 my-card"]],null,null,null,o.J,o.n)),l.qb(5,114688,null,0,c.nb,[l.k,l.D],{class:[0,"class"]},null),(n()(),l.rb(6,0,null,0,4,"div",[["class","view view-cascade overlay waves-light"],["mdbWavesEffect",""]],null,[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l.Db(n,7).click(e)&&o),o},null,null)),l.qb(7,16384,null,0,c.Jc,[l.k],null,null),(n()(),l.rb(8,0,null,null,0,"img",[["alt","Card image cap"],["class","my-card-image round-border-top mx-auto"]],[[8,"src",4]],null,null,null,null)),(n()(),l.rb(9,0,null,null,1,"a",[],null,null,null,null,null)),(n()(),l.rb(10,0,null,null,0,"div",[["class","mask rgba-white-slight"]],null,null,null,null,null)),(n()(),l.rb(11,0,null,0,16,"mdb-card-body",[],null,null,null,o.I,o.m)),l.qb(12,114688,null,0,c.mb,[l.k,l.D],null,null),(n()(),l.rb(13,0,null,0,2,"h4",[["class","card-title text-align-center"]],null,null,null,null,null)),(n()(),l.rb(14,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),l.Jb(15,null,["",""])),(n()(),l.rb(16,0,null,0,1,"h5",[["class","text-align-center"]],null,null,null,null,null)),(n()(),l.Jb(17,null,["",""])),(n()(),l.rb(18,0,null,0,2,"p",[["class","card-text"]],[[2,"text-align-right",null]],null,null,null,null)),l.Eb(131072,i.k,[i.l,l.h]),(n()(),l.Jb(20,null,["",""])),(n()(),l.rb(21,0,null,0,6,"div",[["class","text-align-center social-sec"]],null,null,null,null,null)),(n()(),l.gb(16777216,null,null,1,null,u)),l.qb(23,16384,null,0,r.k,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.gb(16777216,null,null,1,null,s)),l.qb(25,16384,null,0,r.k,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.gb(16777216,null,null,1,null,g)),l.qb(27,16384,null,0,r.k,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=n(t,3,0,0!==t.context.index);n(t,2,0,"col-md-4",e),n(t,5,0,"my-1 my-card"),n(t,12,0),n(t,23,0,!!t.context.$implicit.social1&&t.context.$implicit.social1.length>0),n(t,25,0,!!t.context.$implicit.social2&&t.context.$implicit.social2.length>0),n(t,27,0,!!t.context.$implicit.social3&&t.context.$implicit.social3.length>0)},function(n,t){var e=t.component;n(t,8,0,t.context.$implicit.img),n(t,15,0,"en"===e.lang?t.context.$implicit.nameEn:t.context.$implicit.nameAr),n(t,17,0,"en"===e.lang?t.context.$implicit.titleEn:t.context.$implicit.titleAr),n(t,18,0,"rtl"===l.Kb(t,18,0,l.Db(t,19).transform("DIRECTION"))),n(t,20,0,"en"===e.lang?t.context.$implicit.descriptionEn:t.context.$implicit.descriptionAr)})}function O(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,3,"mdb-carousel-item",[],[[2,"active",null],[2,"animated",null],[2,"carousel-item-next",null],[2,"carousel-item-left",null],[2,"carousel-item-prev",null],[2,"carousel-item-right",null],[2,"carousel-item",null]],null,null,o.U,o.y)),l.qb(1,245760,[[1,4]],0,c.qc,[l.k],null,null),(n()(),l.gb(16777216,null,0,1,null,d)),l.qb(3,278528,null,0,r.j,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,1,0),n(t,3,0,t.context.$implicit)},function(n,t){n(t,0,0,l.Db(t,1).active,l.Db(t,1).animated,l.Db(t,1).directionNext,l.Db(t,1).directionLeft,l.Db(t,1).directionPrev,l.Db(t,1).directionRight,l.Db(t,1).el)})}function b(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,8,"section",[["class","screen-breakpoint margin-auto-x my-5"]],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,2,"h2",[["class","h1-responsive font-weight-bold text-center my-5"]],null,null,null,null,null)),(n()(),l.Jb(2,null,["",""])),l.Eb(131072,i.k,[i.l,l.h]),(n()(),l.rb(4,0,null,null,4,"mdb-carousel",[["class","carousel-multi-item carousel"],["dir","ltr"]],null,[[null,"mouseleave"],[null,"mouseenter"],[null,"keyup"],[null,"click"]],function(n,t,e){var o=!0;return"mouseleave"===t&&(o=!1!==l.Db(n,5).play()&&o),"mouseenter"===t&&(o=!1!==l.Db(n,5).pause()&&o),"keyup"===t&&(o=!1!==l.Db(n,5).keyboardControl(e)&&o),"click"===t&&(o=!1!==l.Db(n,5).focus()&&o),o},o.C,o.g)),l.qb(5,4374528,null,1,c.r,[c.s,l.k,l.B,l.h,l.D],{isControls:[0,"isControls"],class:[1,"class"],type:[2,"type"],animation:[3,"animation"]},null),l.Hb(603979776,1,{_slidesList:1}),(n()(),l.gb(16777216,null,0,1,null,O)),l.qb(8,278528,null,0,r.j,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var e=t.component;n(t,5,0,!0,"carousel-multi-item carousel","carousel-multi-item","slide"),n(t,8,0,e.slides)},function(n,t){n(t,2,0,l.Kb(t,2,0,l.Db(t,3).transform("HUMAN_LAYOUT.OUR_BUSINESS_PARTNER")))})}},"UlC/":function(n,t,e){"use strict";e.d(t,"a",function(){return i});var l=e("mrSG"),o=e("P6uZ"),c=e("skqE"),r=e("AytR"),i=function(){function n(n,t,e,l){this.router=n,this.globalVariableService=t,this.translate=e,this.service=l,this.lang="",this.items=[],this.defaultItems=[]}return n.prototype.ngOnInit=function(){this.loadData()},n.prototype.loadData=function(){var n=this;this.lang=this.translate.instant("LANG"),this.service.list({category:this.category}).pipe(Object(o.a)()).subscribe(function(t){var e,o;if(t.result===c.a.success&&t.data.length>0){var i=void 0;try{for(var a=l.__values(t.data),u=a.next();!u.done;u=a.next()){var s=u.value;s.photo=""+r.a.assetsBaseUrl+s.photo,(i=s.timeDiff).M>1?s.ago=n.translate.instant("COMMON.X_MONTHS_AGO",{val:i.M}):1==i.M?s.ago=n.translate.instant("COMMON.A_MONTH_AGO"):i.d>1?s.ago=n.translate.instant("COMMON.X_DAYS_AGO",{val:i.d}):1==i.d?s.ago=n.translate.instant("COMMON.A_DAY_AGO"):i.h>1?s.ago=n.translate.instant("COMMON.X_HOURS_AGO",{val:i.h}):1==i.h?s.ago=n.translate.instant("COMMON.A_HOUR_AGO"):i.m>1?s.ago=n.translate.instant("COMMON.X_MINUTES_AGO",{val:i.m}):1==i.m&&(s.ago=n.translate.instant("COMMON.A_MINUTE_AGO"))}}catch(g){e={error:g}}finally{try{u&&!u.done&&(o=a.return)&&o.call(a)}finally{if(e)throw e.error}}n.items=t.data}else n.items=n.defaultItems},function(t){n.items=n.defaultItems})},n}()},VAyd:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var l=e("67Y/"),o=e("AytR"),c=e("geh6"),r=e("CcnG"),i=e("t/Na"),a=function(){function n(n){this.http=n}return n.prototype.list=function(n){return this.http.post(""+o.a.assetsApiBaseUrl+c.a.common.businessPartner.list,n).pipe(Object(l.a)(function(n){return n}))},n.ngInjectableDef=r.Pb({factory:function(){return new n(r.Qb(i.c))},token:n,providedIn:"root"}),n}()},cCrQ:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var l=e("mrSG"),o=e("AytR"),c=e("P6uZ"),r=e("skqE"),i=function(){function n(n,t,e,l){this.router=n,this.globalVariableService=t,this.translate=e,this.service=l,this.lang="",this.defaultSlides=[{nameEn:"Welcome",nameAr:"\u0623\u0647\u0644\u0627 \u0628\u0643",titleEn:"Welcome",titleAr:"\u0623\u0647\u0644\u0627 \u0628\u0643",descriptionEn:"Welcome to Elite Resource Center",descriptionAr:"\u0645\u0631\u062d\u0628\u064b\u0627 \u0628\u0643\u0645 \u0641\u064a \u0645\u0631\u0643\u0632 \u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0646\u062e\u0628\u0629",img:o.a.assetsBaseUrl+"/images/welcome.jpg"}],this.cards=[],this.slides=[[]]}return n.prototype.chunk=function(n,t){for(var e=[],l=0,o=n.length;l<o;l+=t)e.push(n.slice(l,l+t));return e},n.prototype.ngOnInit=function(){var n=this;this.lang=this.translate.instant("LANG"),this.service.list({category:this.category}).pipe(Object(c.a)()).subscribe(function(t){var e,c;if(t.result===r.a.success&&t.data.length>0){try{for(var i=l.__values(t.data),a=i.next();!a.done;a=i.next()){var u=a.value;u.media.split(".").pop(),u.titleEn&&(u.titleEn=u.titleEn.length>25?u.titleEn.substr(0,25)+"...":u.titleEn),u.titleAr&&(u.titleAr=u.titleAr.length>25?u.titleAr.substr(0,25)+"...":u.titleAr),u.descriptionEn&&(u.descriptionEn=u.descriptionEn.length>240?u.descriptionEn.substr(0,240)+"...":u.descriptionEn),u.descriptionAr&&(u.descriptionAr=u.descriptionAr.length>240?u.descriptionAr.substr(0,240)+"...":u.descriptionAr),u.img=""+o.a.assetsBaseUrl+u.media}}catch(s){e={error:s}}finally{try{a&&!a.done&&(c=i.return)&&c.call(i)}finally{if(e)throw e.error}}n.cards=t.data,n.slides=n.chunk(n.cards,3)}else n.cards=n.defaultSlides,n.slides=n.chunk(n.cards,3)},function(t){n.cards=n.defaultSlides,n.slides=n.chunk(n.cards,3)})},n}()}}]);