import{H as r,j as e}from"./entry.client-DXCFpibL.js";const l="This section provides detailed instructions for setting up the project and configuring the environment.",a=[{depth:1,value:"Installation",id:"installation",children:[{depth:2,value:"Prerequisites",id:"prerequisites"},{depth:2,value:"Installation Steps",id:"installation-steps"},{depth:2,value:"OpenAPI Documentation and SDK Generation",id:"openapi-documentation-and-sdk-generation"}]}],c=void 0;function s(i){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"This section provides detailed instructions for setting up the project and configuring the environment."}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"PHP 7.2 or higher"}),`
`,e.jsx(n.li,{children:"Composer installed"}),`
`,e.jsx(n.li,{children:"OpenAPI Generator (if you want to regenerate SDKs)"}),`
`]}),`
`,e.jsx(n.h2,{id:"installation-steps",children:"Installation Steps"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Clone the Repository:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git clone <repository_url>
cd <project_directory>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Install Dependencies:"})}),`
`,e.jsx(n.p,{children:"Run the following command to install PHP dependencies:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`composer install
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configure Environment:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Copy the ",e.jsx(n.code,{inline:!0,children:".env.example"})," file to ",e.jsx(n.code,{inline:!0,children:".env"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cp .env.example .env
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Generate the application key:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`php artisan key:generate
`})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Set API Key:"})}),`
`,e.jsxs(n.p,{children:["Update the ",e.jsx(n.code,{inline:!0,children:".env"})," file with your API key:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`API_KEY=your_api_key_here
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Run Migrations:"})}),`
`,e.jsx(n.p,{children:"If the project uses a database, run migrations:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`php artisan migrate
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Start Development Server:"})}),`
`,e.jsx(n.p,{children:"Start the Laravel development server:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`php artisan serve
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The application will be available at ",e.jsx(n.a,{href:"http://localhost:8000",children:"http://localhost:8000"}),"."]}),`
`,e.jsx(n.h2,{id:"openapi-documentation-and-sdk-generation",children:"OpenAPI Documentation and SDK Generation"}),`
`,e.jsxs(n.p,{children:["The project includes an OpenAPI specification file (",e.jsx(n.code,{inline:!0,children:"openapi.yaml"}),") that describes the API for the streaming video service (entities ",e.jsx(n.strong,{children:"Movie"})," and ",e.jsx(n.strong,{children:"Review"}),").",e.jsx(n.br,{}),`
`,"Using this file, the following are generated:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Client SDK"}),": for integrating with the API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Server Stub"}),": (e.g., in Laravel) for further API development."]}),`
`]}),`
`,e.jsx(n.hr,{})]})}function o(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{o as default,l as excerpt,c as frontmatter,a as tableOfContents};
//# sourceMappingURL=installation-BKyBKpqm.js.map
