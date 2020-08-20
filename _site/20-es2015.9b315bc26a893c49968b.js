(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/BgN":function(n,t,i){"use strict";i.r(t),t.default=".layout_color {\n  width: 100%;\n  height: 100%;\n  background-color: #F5F5F5;\n}\n\n.container-fluid {\n  padding: 0;\n}"},D291:function(n,t,i){"use strict";i.r(t),t.default='<div class="container">\n    <div class="header_component">\n        <h2>L\u0129nh v\u1ef1c ho\u1ea1t \u0111\u1ed9ng</h2>\n    </div>\n    \n    <div class="row" style="padding-bottom: 45px;">\n        <div class="col-md" *ngFor="let item of items" style="padding-left: 0;">\n            <img [src]="item.img">\n            <h5>{{item.title}}</h5>\n            <p style="text-align: justify;">\n                {{item.content}}\n            </p>\n        </div> \n    </div>\n</div>\n'},STy1:function(n,t,i){"use strict";i.r(t),t.default='<div class="container">\n    <div class="header_component">\n        <h2 >V\u1ec1 ch\xfang t\xf4i</h2>\n    </div>\n    <div class="row" >\n        <div class="col-md" style="text-align: -webkit-right;">\n            <div >\n                <img class="content-img" src="assets/img/introduction/banner_overviewintroduction.svg" alt="">\n            </div>\n        </div>\n        <div class="col-md introduce">\n            <div class="row" style="margin-top: 0;" *ngFor="let item of list">\n                <div class="col-1" style="text-align: -webkit-right;padding: 0;">\n                    <div class="border-symbol">\n                        <div class="symbol"></div>\n                    </div>\n                </div>\n                <div class="col" style="text-align: justify;">\n                    {{item.title}}\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n'},afUD:function(n,t,i){"use strict";i.r(t),t.default='<div class="container-fluid">\n    <app-header></app-header>\n    <div style="margin-top: 81px;">\n        <img style="width: 100%;" src="assets/img/banners/Banner_introduction.svg" alt="">\n    </div>\n    <app-about-us></app-about-us>\n    <div class="layout_color">\n        <app-field></app-field>\n    </div>\n    <app-team></app-team>\n    <div class="d-flex justify-content-center pb-5">\n        <app-button-free-trial></app-button-free-trial>\n    </div>\n    <app-chat></app-chat>\n    <app-footer></app-footer>\n</div>\n'},iMpg:function(n,t,i){"use strict";i.r(t),t.default=".container {\n  width: 100%;\n}\n.container h3 {\n  text-align: center;\n}\n.container .row {\n  margin: auto;\n}\n.container .row img {\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .container .row img {\n    height: 250px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .container .row img {\n    height: 150px;\n    width: 100%;\n  }\n}\n.container .row h5 {\n  margin-top: 3vh;\n}"},qDDP:function(n,t,i){"use strict";i.r(t),i.d(t,"IntroductionModule",(function(){return u}));var e=i("mrSG"),c=i("fXoL"),a=i("ofXK"),o=i("tyNb");let h=class{constructor(n){this.router=n}ngOnInit(){console.log(this.router.getCurrentNavigation())}};h.ctorParameters=()=>[{type:o.e}],h=Object(e.__decorate)([Object(c.Component)({selector:"app-introduction",template:Object(e.__importDefault)(i("afUD")).default,styles:[Object(e.__importDefault)(i("/BgN")).default]})],h);var g=i("qHA4");let r=class{constructor(){this.items=[{img:"assets/img/introduction/field/it_support.svg",title:"Cung c\u1ea5p c\xe1c ph\u1ea7n m\u1ec1m",content:"Thi\u1ebft k\u1ebf v\xe0 ph\xe1t tri\u1ec3n c\xe1c ph\u1ea7n m\u1ec1m \u0111a l\u0129nh v\u1ef1c, \u0111a ng\xe0nh ngh\u1ec1 nh\u1eb1m \u0111\xe1p m\u1ecdi nhu c\u1ea7u c\u1ee7a ng\u01b0\u1eddi d\xf9ng: qu\u1ea3n l\xfd ho\u1ea1t \u0111\u1ed9ng kinh doanh (ph\u1ea7n m\u1ec1m qu\u1ea3n l\xfd b\xe1n h\xe0ng, ph\u1ea7n m\u1ec1m qu\u1ea3n l\xfd nh\xe0 h\xe0ng - cafe, ph\u1ea7n m\u1ec1m qu\u1ea3n l\xfd nh\xe2n s\u1ef1,...); ph\xe1t tri\u1ec3n c\xe1 nh\xe2n (qu\u1ea3n l\xfd thu chi, qu\u1ea3n l\xfd th\u1eddi gian,\u2026 ); n\xe2ng cao ch\u1ea5t l\u01b0\u1ee3ng cu\u1ed9c s\u1ed1ng (ch\u0103m s\xf3c s\u1ee9c kh\u1ecfe,...)."},{img:"assets/img/introduction/field/data_process.svg",title:"Cung c\u1ea5p c\xe1c gi\u1ea3i ph\xe1p",content:"Viethas cung c\u1ea5p c\xe1c \u1ee9ng d\u1ee5ng qu\u1ea3n l\xfd v\xe0 gi\u1ea3i ph\xe1p, \u1ee9ng d\u1ee5ng c\xf4ng ngh\u1ec7 cao v\xe0o vi\u1ec7c gi\xe1m s\xe1t t\u1eeb xa, theo d\xf5i v\xe0 \u0111i\u1ec1u khi\u1ec3n t\u1ef1 \u0111\u1ed9ng; t\u1ea1o s\u1ef1 k\u1ebft n\u1ed1i nhi\u1ec1u thi\u1ebft b\u1ecb v\u1edbi quy m\xf4 l\u1edbn nh\u1eb1m \u0111\u1ea1t hi\u1ec7u qu\u1ea3 t\u1ed1t h\u01a1n trong vi\u1ec7c ki\u1ec3m so\xe1t, c\u1ea3i thi\u1ec7n n\u0103ng su\u1ea5t, gi\u1ea3m chi ph\xed, t\u0103ng an to\xe0n lao \u0111\u1ed9ng v\xe0 n\xe2ng cao ch\u1ea5t l\u01b0\u1ee3ng l\xe0m vi\u1ec7c."},{img:"assets/img/introduction/field/code_development_.svg",title:"Gia c\xf4ng ph\u1ea7n m\u1ec1m",content:"Ngo\xe0i c\xe1c d\u1ecbch v\u1ee5 v\u1ec1 s\u1eeda ch\u1eefa, b\u1ea3o tr\xec h\u1ec7 th\u1ed1ng gi\xfap t\u0103ng hi\u1ec7u su\u1ea5t v\xe0 tu\u1ed5i th\u1ecd l\xe0m vi\u1ec7c c\u1ee7a c\xe1c thi\u1ebft b\u1ecb c\xf4ng ngh\u1ec7 trong doanh nghi\u1ec7p v\xe0 h\u1ed9 gia \u0111\xecnh, Viethas c\xf2n nh\u1eadn gia c\xf4ng ph\u1ea7n c\u1ee9ng IoT, ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng, thi\u1ebft k\u1ebf website, ph\xe1t tri\u1ec3n c\xe1c gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7... \u0111\xe1p \u1ee9ng nhu c\u1ea7u \u0111a d\u1ea1ng, \u0111a l\u0129nh v\u1ef1c c\u1ee7a c\xe1c doanh nghi\u1ec7p b\u1eb1ng c\xe1c s\u1ea3n ph\u1ea9m ch\u1ea5t l\u01b0\u1ee3ng nh\u1ea5t."}]}ngOnInit(){}};r=Object(e.__decorate)([Object(c.Component)({selector:"app-field",template:Object(e.__importDefault)(i("D291")).default,styles:[Object(e.__importDefault)(i("iMpg")).default]})],r);let s=class{constructor(){this.items=[{img:"assets/img/introduction/team/Image10.png",name:"Hu\u1ef3nh L\xea Ho\xe0i",detail:"Viethas lu\xf4n mong mu\u1ed1n mang \u0111\u1ebfn cho kh\xe1ch h\xe0ng nh\u1eefng ph\u1ea7n m\u1ec1m ti\u1ec7n l\u1ee3i, d\u1ec5 s\u1eed d\u1ee5ng v\xe0 c\xf3 tr\u1ea3i nghi\u1ec7m t\u1ed1t nh\u1ea5t. T\xf4i v\xe0 c\xe1c \u0111\u1ed3ng nghi\u1ec7p trong c\xf4ng ty s\u1ebd kh\xf4ng ng\u1eebng n\xe2ng c\u1ea5p nh\u1eefng t\xednh n\u0103ng m\u1edbi \u0111\u1ec3 ph\u1ee5c v\u1ee5 vi\u1ec7c gi\u1ea3i tr\xed, c\xf4ng vi\u1ec7c c\u1ee7a kh\xe1ch h\xe0ng."},{img:"assets/img/introduction/team/Image9.png",name:"V\u0169 Minh \u0110\u1ee9c",detail:"L\xe0m vi\u1ec7c t\u1ea1i Viethas mang \u0111\u1ebfn cho t\xf4i nh\u1eefng th\u1eed th\xe1ch m\u1edbi, c\u0169ng nh\u01b0 nh\u1eefng tr\u1ea3i nghi\u1ec7m th\xfa v\u1ecb. T\xf4i hy v\u1ecdng s\u1ea3n ph\u1ea9m do ch\xfang t\xf4i l\xe0m ra s\u1ebd \u0111\xe1p \u1ee9ng t\u1ed1t nh\u1ea5t nhu c\u1ea7u c\u1ee7a kh\xe1ch h\xe0ng."},{img:"assets/img/introduction/team/Image8.png",name:"L\xfd Quang Ngh\u0129a",detail:"\u0110am m\xea l\u0129nh v\u1ef1c l\u1eadp tr\xecnh, t\xf4i kh\xf4ng ng\u1eebng n\xe2ng cao v\xe0 ph\xe1t tri\u1ec3n kh\u1ea3 n\u0103ng b\u1ea3n th\xe2n \u0111\u1ec3 c\u1ed1 g\u1eafng mang \u0111\u1ebfn cho kh\xe1ch h\xe0ng nh\u1eefng t\xednh n\u0103ng m\u1edbi v\xe0 h\u1eefu \xedch tr\xean c\xe1c s\u1ea3n ph\u1ea9m ph\u1ea7n m\u1ec1m."}]}ngOnInit(){}};s=Object(e.__decorate)([Object(c.Component)({selector:"app-team",template:Object(e.__importDefault)(i("sdaM")).default,styles:[Object(e.__importDefault)(i("rmpG")).default]})],s);let d=class{constructor(){this.list=[{title:"\u0110\u01b0\u1ee3c th\xe0nh l\u1eadp t\u1eeb nh\u1eefng ng\xe0y \u0111\u1ea7u n\u0103m 2013, Viethas \u0111\xe3 ng\xe0y c\xe0ng kh\u1eb3ng \u0111\u1ecbnh m\xecnh tr\xean th\u1ecb tr\u01b0\u1eddng c\xf4ng ngh\u1ec7 Vi\u1ec7t Nam, \u0111\u1eb7c bi\u1ec7t trong c\xe1c l\u0129nh v\u1ef1c ph\xe1t tri\u1ec3n v\xe0 gia c\xf4ng ph\u1ea7n m\u1ec1m, website; \u1ee9ng d\u1ee5ng c\xf4ng ngh\u1ec7 IoT trong \u0111\u1eddi s\u1ed1ng v\xe0 s\u1ea3n xu\u1ea5t."},{title:"Tr\u1ea3i qua h\u01a1n 8 n\u0103m h\xecnh th\xe0nh v\xe0 ph\xe1t tri\u1ec3n, Viethas \u0111\xe3 c\xf3 nh\u1eefng b\u01b0\u1edbc ti\u1ebfn \u0111\xe1ng k\u1ec3 v\xe0 \u0111ang ti\u1ebfp t\u1ee5c c\u1ed1 g\u1eafng kh\xf4ng ng\u1eebng \u0111\u1ec3 \u0111\u1ea1t \u0111\u01b0\u1ee3c m\u1ee5c ti\xeau h\xe0ng \u0111\u1ea7u ch\xednh l\xe0 mang \u0111\u1ebfn kh\xe1ch h\xe0ng s\u1ef1 h\xe0i l\xf2ng v\xe0 tin t\u01b0\u1edfng khi s\u1eed d\u1ee5ng s\u1ea3n ph\u1ea9m, \u0111\u1ed3ng th\u1eddi kh\xf4ng ng\u1eebng nghi\xean c\u1ee9u \u0111\u1ec3 t\xecm ra c\xe1c gi\u1ea3i ph\xe1p t\u1ed1t nh\u1ea5t \u0111\u1ec3 ph\u1ee5c v\u1ee5 kh\xe1ch h\xe0ng."},{title:" V\u1edbi \u0111\u1ed9i ng\u0169 nh\xe2n vi\xean tr\u1ebb, nhi\u1ec7t huy\u1ebft, s\xe1ng t\u1ea1o lu\xf4n l\xe0m vi\u1ec7c trong m\xf4i tr\u01b0\u1eddng chuy\xean nghi\u1ec7p, k\u1ef7 lu\u1eadt cao, Viethas h\u1ee9a h\u1eb9n s\u1ebd \u0111em \u0111\u1ebfn cho kh\xe1ch h\xe0ng c\xe1c gi\u1ea3i ph\xe1p t\u1ed1i \u01b0u v\xe0 hi\u1ec7u qu\u1ea3 nh\u1ea5t."}]}ngOnInit(){}};d=Object(e.__decorate)([Object(c.Component)({selector:"app-about-us",template:Object(e.__importDefault)(i("STy1")).default,styles:[Object(e.__importDefault)(i("rjzn")).default]})],d);var l=i("1zsC");const m=[{path:"",component:h}];let p=class{};p=Object(e.__decorate)([Object(c.NgModule)({imports:[o.g.forChild(m)],exports:[o.g]})],p);let u=class{};u=Object(e.__decorate)([Object(c.NgModule)({declarations:[h,g.a,r,s,d],imports:[a.CommonModule,l.a,p]})],u)},rjzn:function(n,t,i){"use strict";i.r(t),t.default=".container {\n  width: 100%;\n  padding-bottom: 5.625rem;\n}\n.container h3 {\n  text-align: center;\n}\n.container .content-img {\n  width: 100%;\n  height: 300px;\n}\n.container .border-symbol {\n  width: 24px;\n  height: 24px;\n  background-color: #95fcae;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container .symbol {\n  width: 18px;\n  height: 18px;\n  background-color: #00A859;\n  border-radius: 10px;\n}\n.container .introduce {\n  display: grid;\n}\n.container .introduce .row {\n  margin-top: 1vh;\n}"},rmpG:function(n,t,i){"use strict";i.r(t),t.default=".container {\n  width: 100%;\n}\n.container .row {\n  margin: auto;\n}\n@media screen and (min-width: 768px) {\n  .container .row .img {\n    height: 200px;\n    width: 200px;\n    border-radius: 100%;\n    background-color: #78f7d7;\n  }\n}\n@media screen and (max-width: 480px) {\n  .container .row .img {\n    height: 100px;\n    width: 100px;\n    border-radius: 100%;\n    background-color: #78f7d7;\n  }\n}\n.container .row .img_avatar {\n  text-align: center;\n}\n.container .row h5 {\n  margin-top: 3vh;\n  text-align: center;\n}\n.container .header_component_two {\n  padding-top: 5rem;\n  padding-bottom: 2.5rem;\n  text-align: center;\n}\n.container .header_component_two .center {\n  text-align: -webkit-center;\n}\n.container h2 p {\n  font-size: 1rem;\n  font-weight: 400;\n  margin-top: 1rem;\n  margin-bottom: 0;\n}"},sdaM:function(n,t,i){"use strict";i.r(t),t.default='<div class="container">\n    <div class="header_component">\n        <h2>\u0110\u1ed9i ng\u0169 Viethas</h2>\n    </div>\n\n    <div class="row">\n        <div class="col-md center" *ngFor="let item of items">\n            <div class="img_avatar">\n                <img class="img" [src]="item.img" alt="">\n\n            </div>\n            <h5>{{item.name}}</h5>\n            <p style="text-align: justify;">\n                {{item.detail}}\n            </p>\n        </div>\n    </div>\n    <h2 class="header_component_two">Tr\u1ea3i nghi\u1ec7m mi\u1ec5n ph\xed 1 th\xe1ng<br>\n        <p class="center">H\xe3y \u0111\u1ec3 ch\xfang t\xf4i gi\xfap b\u1ea1n \u0111i t\u1edbi th\xe0nh c\xf4ng</p>\n    </h2>\n</div>\n'}}]);