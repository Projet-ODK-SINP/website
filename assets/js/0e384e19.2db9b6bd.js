"use strict";(self.webpackChunkodksinp_website=self.webpackChunkodksinp_website||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const i={sidebar_position:1,title:"Introduction"},o=void 0,a={unversionedId:"intro",id:"intro",title:"Introduction",description:"Ce site et le d\xe9pot GIT associ\xe9 sont une initiative de g\xe9omaticiens du r\xe9seau des Conservatoires d'Epsaces Naturels.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/website/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"XLSForm",permalink:"/website/docs/xlsform"}},l={},u=[{value:"Vitrine des formulaires XLSForm mis en \u0153uvre pour la conservation de la nature",id:"vitrine-des-formulaires-xlsform-mis-en-\u0153uvre-pour-la-conservation-de-la-nature",level:2},{value:"les suivis scientifiques dans les CENs",id:"les-suivis-scientifiques-dans-les-cens",level:2},{value:"XLSForm et ODK",id:"xlsform-et-odk",level:2},{value:"-&gt; Les formulaires mis en oeuvre &lt;-",id:"--les-formulaires-mis-en-oeuvre--",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Avertissement",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Ce site et le d\xe9pot GIT associ\xe9 sont une initiative de g\xe9omaticiens du r\xe9seau des Conservatoires d'Epsaces Naturels.\nIl fait la promotion d'ODK pour le mise en eouvre des formulaires pr\xe9sent\xe9s et partag\xe9s mais est totalement ind\xe9pendant du projet ODK.\nLes formualires propos\xe9s ici sont mis en oeuvre par des utilisateurs de la solution et en rien par l'\xe9quipe de GetODK")),(0,s.kt)("h1",{id:"accueil"},"Accueil"),(0,s.kt)("h2",{id:"vitrine-des-formulaires-xlsform-mis-en-\u0153uvre-pour-la-conservation-de-la-nature"},"Vitrine des formulaires XLSForm mis en \u0153uvre pour la conservation de la nature"),(0,s.kt)("p",null,"A l'initiative des Conservatoires d'Espaces Naturels, cet espace est un endroit d\xe9di\xe9 \xe0 la pr\xe9sentation et au partage des formulaires mis en place pour collecter des donn\xe9es dans le r\xe9seau des CEN.\nLe but \xe9tant de ne pas repartir de 0 dans le d\xe9veloppement d'un formulaire ou d'une application mobile pour mettre en \u0153uvre un nouveau suivi ou une nouvelle collecte de donn\xe9es.\nMais plut\xf4t de favoriser l'utilisation d'ODK, d\xe9velopp\xe9 pour cela et la r\xe9utilisation, l'adaptation de formulaires XlsForm existants."),(0,s.kt)("p",null,"Le standard XLSForm s'y pr\xeate bien. Il permet en effet de copier/coller des blocs de questions d'un formulaire \xe0 un autre. Cela sera facilit\xe9 en essayant de standardiser l'ordre des colonnes du fichier XLSForm.\nUn ",(0,s.kt)("a",{parentName:"p",href:"template_xlsform.xlsx"},"mod\xe8le")," est propos\xe9 \xe0 cet effet, nous nous efforcerons de le respecter. A d\xe9faut il est bien s\xfbr possible de r\xe9ordonner les colonnes avant de copier,coller le bloc de questions."),(0,s.kt)("p",null,"Ces formulaires, les ressources qu'ils utilisent (r\xe9f\xe9rentiels, images...) ainsi que les protocoles auxquels ils sont associ\xe9s seront t\xe9l\xe9chargeables."),(0,s.kt)("h2",{id:"les-suivis-scientifiques-dans-les-cens"},"les suivis scientifiques dans les CENs"),(0,s.kt)("h2",{id:"xlsform-et-odk"},(0,s.kt)("a",{parentName:"h2",href:"/website/docs/odk"},"XLSForm et ODK")),(0,s.kt)("p",null,"ODK est un des outils utilisant le standard XLSForm, c'est celui que les CEN utilisent depuis 2015."),(0,s.kt)("h2",{id:"--les-formulaires-mis-en-oeuvre--"},(0,s.kt)("a",{parentName:"h2",href:"./category/les-formulaires"},"-> Les formulaires mis en oeuvre <-")))}c.isMDXComponent=!0}}]);