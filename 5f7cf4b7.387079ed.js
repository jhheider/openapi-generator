(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(9),r=(n(0),n(304)),i={id:"faq-contributing",title:"FAQ: Contributing"},c={id:"faq-contributing",title:"FAQ: Contributing",description:"## Automated checks on my PR have failed. Do you know what's wrong?",source:"@site/../docs/faq-contributing.md",permalink:"/docs/faq-contributing",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/faq-contributing.md",lastUpdatedBy:"Roman Klevtsov",lastUpdatedAt:1589168792,sidebar:"faq-sidebar",previous:{title:"FAQ: Extending",permalink:"/docs/faq-extending"},next:{title:"FAQ: Generators",permalink:"/docs/faq-generators"}},s=[{value:"Automated checks on my PR have failed. Do you know what's wrong?",id:"automated-checks-on-my-pr-have-failed-do-you-know-whats-wrong",children:[]},{value:"The public petstore server returns status 500, can I run it locally?",id:"the-public-petstore-server-returns-status-500-can-i-run-it-locally",children:[]},{value:"Who should I report a security vulnerability to?",id:"who-should-i-report-a-security-vulnerability-to",children:[]},{value:"How can I rebase my PR on the latest master?",id:"how-can-i-rebase-my-pr-on-the-latest-master",children:[]},{value:"How can I update commits that are not linked to my Github account?",id:"how-can-i-update-commits-that-are-not-linked-to-my-github-account",children:[]},{value:"Any useful git tips to share?",id:"any-useful-git-tips-to-share",children:[]},{value:"How can I submit a PR to fix bugs or make enhancements?",id:"how-can-i-submit-a-pr-to-fix-bugs-or-make-enhancements",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"automated-checks-on-my-pr-have-failed-do-you-know-whats-wrong"},"Automated checks on my PR have failed. Do you know what's wrong?"),Object(r.b)("p",null,"Please do the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click on the failed tests and check the log to see what's causing the errors."),Object(r.b)("li",{parentName:"ul"},"If it's related to connection timeout in downloading dependencies, please restart the CI jobs (which can be done by closing and reopening the PR)"),Object(r.b)("li",{parentName:"ul"},"If it's some other reason, please tag someone on the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/core-team"}),"core team")," for assistance.")),Object(r.b)("h2",{id:"the-public-petstore-server-returns-status-500-can-i-run-it-locally"},"The public petstore server returns status 500, can I run it locally?"),Object(r.b)("p",null,"Yes, please run the following commands (assuming you've docker installed):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"docker pull swaggerapi/petstore\ndocker run -d -e SWAGGER_HOST=http://petstore.swagger.io -e SWAGGER_BASE_PATH=/v2 -p 80:8080 swaggerapi/petstore\ndocker ps -a\n")),Object(r.b)("p",null,"Then add the following to your local ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Hosts_%28file%29"}),"hosts")," table:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"127.0.0.1    petstore.swagger.io\n")),Object(r.b)("h2",{id:"who-should-i-report-a-security-vulnerability-to"},"Who should I report a security vulnerability to?"),Object(r.b)("p",null,"Please contact team@openapitools.org with the details and we'll follow up with you."),Object(r.b)("h2",{id:"how-can-i-rebase-my-pr-on-the-latest-master"},"How can I rebase my PR on the latest master?"),Object(r.b)("p",null,"Please refer to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://rypress.com/tutorials/git/rebasing"}),"http://rypress.com/tutorials/git/rebasing"),', or follow the steps below (assuming the branch for the PR is "fix_issue_9999"):'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"git checkout master"),Object(r.b)("li",{parentName:"ol"},"git pull upstream master (assuming ",Object(r.b)("inlineCode",{parentName:"li"},"upstream")," is pointing to the official repo)"),Object(r.b)("li",{parentName:"ol"},"git checkout fix_issue_9999"),Object(r.b)("li",{parentName:"ol"},"git rebase master"),Object(r.b)("li",{parentName:"ol"},'Resolve merge conflicts, if any, and run "git commit -a"'),Object(r.b)("li",{parentName:"ol"},"Rebase done (you may need to add --force when doing ",Object(r.b)("inlineCode",{parentName:"li"},"git push"),")")),Object(r.b)("p",null,"(To setup ",Object(r.b)("inlineCode",{parentName:"p"},"upstream")," pointing to the official repo, please run ",Object(r.b)("inlineCode",{parentName:"p"},"git remote add upstream  https://github.com/openapitools/openapi-generator.git"),")"),Object(r.b)("h2",{id:"how-can-i-update-commits-that-are-not-linked-to-my-github-account"},"How can I update commits that are not linked to my Github account?"),Object(r.b)("p",null,"Please refer to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/3042437/how-to-change-the-commit-author-for-one-specific-commit"}),"https://stackoverflow.com/questions/3042437/how-to-change-the-commit-author-for-one-specific-commit")," or you can simply add the email address in the commit as your secondary email address in your Github account."),Object(r.b)("h2",{id:"any-useful-git-tips-to-share"},"Any useful git tips to share?"),Object(r.b)("p",null,"Yes, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.alexkras.com/19-git-tips-for-everyday-use/"}),"http://www.alexkras.com/19-git-tips-for-everyday-use/")),Object(r.b)("h2",{id:"how-can-i-submit-a-pr-to-fix-bugs-or-make-enhancements"},"How can I submit a PR to fix bugs or make enhancements?"),Object(r.b)("p",null,"Visit ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator"}),"https://github.com/openapitools/openapi-generator"),' and then click on the "Fork" button in the upper right corner. Then in your local machine, run the following (assuming your github ID is "your_user_id")'),Object(r.b)("p",null,"1) git clone ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/your_user_id/openapi-generator.git"}),"https://github.com/your_user_id/openapi-generator.git"),"\n2) cd openapi-generator\n3) git checkout -b fix_issue9999\n4) make changes\n5) git commit -a (you may need to use ",Object(r.b)("inlineCode",{parentName:"p"},"git add filename")," to add new files)\n6) git push origin fix_issue9999\n7) Visit ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator"}),"https://github.com/openapitools/openapi-generator")," in your browser and click on the button to file a new PR based on fix_issue9999"))}u.isMDXComponent=!0},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(i,".").concat(h)]||p[h]||b[h]||r;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);