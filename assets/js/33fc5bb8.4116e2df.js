"use strict";(self.webpackChunkryanatkins_dev=self.webpackChunkryanatkins_dev||[]).push([[867],{778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(6540);var s=a(4164),n=a(1213),r=a(7559),o=a(6461),i=a(8774),l=a(4096),g=a(8027),h=a(7713),u=a(1463),c=a(3892),p=a(6913),d=a(4848);function m(e){let{author:t}=e;const a=(0,o.wI)(t);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.be,{title:a}),(0,d.jsx)(u.A,{tag:"blog_authors_posts"})]})}function b(){const{authorsListPath:e}=(0,l.x)();return(0,d.jsx)(i.A,{href:e,children:(0,d.jsx)(o.np,{})})}function x(e){let{author:t,items:a,sidebar:s,listMetadata:n}=e;return(0,d.jsxs)(g.A,{sidebar:s,children:[(0,d.jsxs)("header",{className:"margin-bottom--xl",children:[(0,d.jsx)(p.A,{as:"h1",author:t}),t.description&&(0,d.jsx)("p",{children:t.description}),(0,d.jsx)(b,{})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(c.A,{items:a}),(0,d.jsx)(h.A,{metadata:n})]})}function j(e){return(0,d.jsxs)(n.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsPostsPage),children:[(0,d.jsx)(m,{...e}),(0,d.jsx)(x,{...e})]})}},7713:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(1312),n=a(9022),r=a(4848);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),o&&(0,r.jsx)(n.A,{permalink:o,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4096),n=a(1550),r=a(4848);function o(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6461:(e,t,a)=>{a.d(t,{ZD:()=>i,np:()=>h,uz:()=>g,wI:()=>l});a(6540);var s=a(1312),n=a(3465),r=a(4848);function o(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=o();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function l(e){const t=o();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const g=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function h(){return(0,r.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);