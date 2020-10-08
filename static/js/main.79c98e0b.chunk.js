(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,a,t){e.exports=t(55)},30:function(e,a,t){},31:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},51:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),r=t.n(c),o=t(22),s=t(1);t(30);function i(){var e=function(){document.getElementById("navbarSupportedContent").classList.remove("show")};return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light sidebar-background fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand",href:"#page-top"},l.a.createElement("span",{className:"d-block d-lg-none font-black"},"Wesley Tran"),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:"/images/profilePic.jpg",alt:""}))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link font-black",href:"#about",onClick:e},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link font-black",href:"#interest",onClick:e},"Interest")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link font-black",href:"#skills",onClick:e},"Skills")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link font-black",href:"#projects",onClick:e},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link font-black",href:"#contact",onClick:e},"Contact Me")))))}t(31);var m=t(5),u=t(12),d=t.n(u);t(34);function p(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(m.a)(r,2),s=o[0],i=o[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),E=p[0],b=p[1];return l.a.createElement("div",{className:"SimpleContactForm"},l.a.createElement("form",{type:"submit",onSubmit:function(e){e.preventDefault(),t||s?t&&s&&(d.a.sendForm("service_us9hkka","template_45cnunm",e.target,"user_aoSDneBYjn25nZipmAnsy").then((function(e){console.log(e.text),alert("Email has been sent to Wesley")}),(function(e){console.log(e.text)})),c(""),i(""),b("")):alert("Name nad email are required!")}},l.a.createElement("input",{className:"SimpleContactFormInput",type:"text",id:"name",name:"name",placeholder:"Name",value:t,onChange:function(e){return c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("input",{className:"SimpleContactFormInput",type:"text",id:"email",name:"email",placeholder:"Email",value:s,onChange:function(e){return i(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("textarea",{className:"SimpleContactFormTextArea",rows:"4",cols:"50",name:"message",placeholder:"Leave me a message!",value:E,onChange:function(e){return b(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("input",{className:"SimpleContactFormSubmit",type:"submit",value:"Submit"})))}t(35);function E(e){return console.log("props",e),l.a.createElement("div",{className:"card-body col-sm-4"},l.a.createElement("a",{href:e.deploy,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"logo",src:e.logo,alt:e.title})),l.a.createElement("p",{className:"app-name"},e.title),l.a.createElement("a",{href:e.repo,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",{className:"repo-link"},"Repository")))}var b=[{id:1,title:"Travel Nurses Job Spot",src:"/images/travelnurse.png",description:"Developed with the intention of helping Travel Nurses find the most financially viable job",deployed_link:"https://staffbotsteve.github.io/lazy-loaders/",repo_link:"https://github.com/wesaboo/lazy-loaders"},{id:2,title:"Collector's Cache",src:"/images/collectorscache.png",description:"Web App to keep track of Card collection, and retrieve market values",deployed_link:"https://immense-spire-70706.herokuapp.com/",repo_link:"https://github.com/wesaboo/Project-2"},{id:3,title:"Hi-Ho Job Search",src:"/images/hihologo.png",description:"Find your future job in the location you want! Let us find out whether you will actually make money by comparing the wage to the cost of living in that area!",deployed_link:"https://hi-ho-frontend.herokuapp.com/",repo_link:"https://github.com/staffbotsteve/hi-ho-frontend"}];function g(){return console.log(b),l.a.createElement("div",{className:"container-fluid ProfileBody"},l.a.createElement("section",{className:"bodySection",id:"about"},l.a.createElement("div",{className:"bodySection-content"},l.a.createElement("h1",{className:"mb-0"},"Wesley",l.a.createElement("span",{className:"text-secondary"},"Tran")),l.a.createElement("div",{className:"subheading mb-5"},"Hayward, CA 94541 \xb7 (510) 918-2481 \xb7",l.a.createElement("a",{href:"mailto:WebDevWes89@gmail.com"},"WebDevWes89@gmail.com")),l.a.createElement("p",{className:"lead mb-5"},"I'm a new and upcoming Full-Stack Web Developer, language of choice is Javascript and I am currently picking up Typescript. I have always loved to tinker with things since a young age and that has led me towards coding."),l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{className:"social-icon",href:"https://www.linkedin.com/in/wesley-tran-1333b81a5",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"fab fa-linkedin"})),l.a.createElement("a",{className:"social-icon",href:"https://github.com/WebDevWes",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"fab fa-github-square"})),l.a.createElement("a",{className:"social-icon",href:"/WesleyResume.pdf",download:!0},l.a.createElement("div",{className:"fab fas fa-file"}))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"bodySection",id:"interest"},l.a.createElement("div",{className:"bodySection-content"},l.a.createElement("h2",{className:"mb-5"},"Interests"),l.a.createElement("p",null,"At the risk of sounding generic, I do love food. The only reason why I bother to weight lift is to gain muscle mass for the sole purpose of the higher calorie consumption that I'm allowed. Even during hikes, I place more emphasis on the snacks that I bring over the activity itself."),l.a.createElement("p",{className:"mb-0"},"My other interest lies in PC gaming and all the technologies that follows it. I started building my first PC in pursuit of gaming, and this has led me to tinker with arduino units and has now led me to coding."))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"bodySection",id:"skills"},l.a.createElement("div",{className:"bodySectionContent"},l.a.createElement("h2",{className:"mb-5"},"Tech Stack"),l.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),l.a.createElement("ul",{className:"list-inline techIcons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-html5"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-css3-alt"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-js-square"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-react"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-node-js"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-npm"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-git-square"}))),l.a.createElement("div",{className:"subheading mb-3"},"Databases"),l.a.createElement("ul",{className:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("span",{className:"fa-li"},l.a.createElement("img",{className:"databaseIcon",src:"/images/mysql.png",alt:"mySQL"})),"MySQL"),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("span",{className:"fa-li"},l.a.createElement("img",{className:"databaseIcon",src:"/images/mongodb.png",alt:"MongoDB"})),"MongoDB")),l.a.createElement("br",null),l.a.createElement("div",{className:"subheading mb-3"},l.a.createElement("u",null,"Interested in learning:")),l.a.createElement("ul",{className:"list-inline techIcons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("img",{className:"typescriptIcon",src:"/images/typescript.png",alt:"MongoDB"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-python"}))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"bodySection",id:"projects"},l.a.createElement("div",{className:"bodySection-content"},l.a.createElement("h2",{className:"mb-5"},"Projects"),l.a.createElement("div",{className:"card-container"},b.map((function(e){var a=e.id,t=e.title,n=e.src,c=e.deployed_link,r=e.repo_link;return l.a.createElement(E,{key:a,logo:n,title:t,deploy:c,repo:r})}))))),l.a.createElement("section",{className:"bodySection",id:"contact"},l.a.createElement("div",{className:"bodySection-content"},l.a.createElement("h2",{className:"mb-5"},"Contact Me"),l.a.createElement(p,null))))}t(36);function f(){var e=(new Date).getFullYear();return l.a.createElement("div",{className:"SimpleFooter"},"Copyright \xa9 ",e,", WebDevWes")}function h(){return l.a.createElement("div",{style:{backgroundColor:"#ac9ecc"}},l.a.createElement(i,null),l.a.createElement(g,null),l.a.createElement(f,null))}t(37),t(38);function v(e){return l.a.createElement("span",null,l.a.createElement("input",{type:"button",className:"NavBarDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",value:e.value}),e.children)}t(39);function N(e){return l.a.createElement("div",{className:"dropdown-menu DropdownItem","aria-labelledby":"dropdown"},l.a.createElement("button",{className:"dropdown-item DropdownItemButton",type:"button"},e.value))}t(40);function y(e){return l.a.createElement("span",null,l.a.createElement("input",{type:"button",className:"ContactDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",value:e.value}),e.children)}t(41);function k(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(m.a)(r,2),s=o[0],i=o[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),E=p[0],b=p[1];return l.a.createElement("div",{className:"dropdown-menu ContactForm","aria-labelledby":"dropdown"},l.a.createElement("form",{type:"submit",onSubmit:function(e){e.preventDefault(),t||s?t&&s&&(d.a.sendForm("service_us9hkka","template_45cnunm",e.target,"user_aoSDneBYjn25nZipmAnsy").then((function(e){console.log(e.text),alert("Email has been sent to Wesley")}),(function(e){console.log(e.text)})),c(""),i(""),b("")):alert("Name nad email are required!")}},l.a.createElement("label",{className:"ContactFormLabel"},"Name:"),l.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:t,onChange:function(e){return c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"ContactFormLabel"},"Email:"),l.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:"Email",value:s,onChange:function(e){return i(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("textarea",{className:"ContactFormTextArea",rows:"4",cols:"50",name:"message",placeholder:"Leave me a message!",value:E,onChange:function(e){return b(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("input",{className:"ContactFormSubmit",type:"submit",value:"Submit"})))}t(42);var w=(new Date).toLocaleString().split(" ")[1].split(":"),S=(new Date).toLocaleString().split(" ")[2];function C(){var e=Object(n.useState)(w[0]),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(w[1]),o=Object(m.a)(r,2),s=o[0],i=o[1],u=Object(n.useState)(S),d=Object(m.a)(u,2),p=d[0],E=d[1];return setInterval((function(){var e=(new Date).toLocaleString().split(" ")[1].split(":"),a=(new Date).toLocaleString().split(" ")[2];c(e[0]),i(e[1]),E(a)}),3e4),l.a.createElement("div",{className:"Time"},"".concat(t,":").concat(s," ").concat(p))}function j(){return l.a.createElement("nav",{className:"NavBar"},l.a.createElement("a",{href:"foo",className:"logo"},l.a.createElement("strong",null,"Logo")),l.a.createElement(v,{value:"About Me"},l.a.createElement(N,{value:"Information"})),l.a.createElement(v,{value:"Projects"},l.a.createElement(N,{value:"Password Generator"})),l.a.createElement(y,{value:"Contact Me"},l.a.createElement(k,null)),l.a.createElement("a",{href:"foo",className:"WebDevWes"},l.a.createElement("strong",null,"WebDevWes")),l.a.createElement(C,null))}t(43);function D(){var e=(new Date).getFullYear();return l.a.createElement("div",{className:"Footer-container","data-toggle":"collapse","data-target":".Footer","aria-expanded":"true","aria-controls":"collapseOne"},l.a.createElement("div",{className:"Footer collapse show"},"Copyright \xa9 ",e,", WebDevWes. All rights reserved."),l.a.createElement("input",{className:"Footer-button",type:"button",value:"="}))}t(44);function I(e){return l.a.createElement("div",{className:"Wrapper"},e.children)}var W=t(24);t(51);function x(e){return l.a.createElement(W.a,{className:"WindowContainer",dragHandleClassName:"TitleBar"},l.a.createElement("div",{className:"TitleBar"},l.a.createElement("button",{type:"button",className:"DeleteButton",onClick:function(){console.log("Delete Button")}}),e.name),e.children)}var F=l.a.createElement("div",null,l.a.createElement("h4",null,"Information"),l.a.createElement("p",null,"My name is Wesley Tran")),O=function(){console.log("open window")};var _=function(){return l.a.createElement("div",{style:{backgroundColor:"#66a",minHeight:"100vh",height:"100%"}},l.a.createElement(j,{onClick:O}),l.a.createElement(I,null,l.a.createElement(x,null,F)),l.a.createElement(D,null))};var B=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",component:h,exact:!0}),l.a.createElement(s.a,{path:"/OSexp",component:_,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.79c98e0b.chunk.js.map