import{H as s,j as e}from"./entry.client-DXCFpibL.js";const a="This section describes the authorization mechanisms used in the API.",h=[{depth:1,value:"Authorization",id:"authorization",children:[{depth:2,value:"API Key Authentication",id:"api-key-authentication",children:[{depth:3,value:"Obtaining an API Key",id:"obtaining-an-api-key"},{depth:3,value:"Example Request with API Key",id:"example-request-with-api-key"},{depth:3,value:"Example Using cURL",id:"example-using-curl"},{depth:3,value:"Error Responses",id:"error-responses"}]}]}],o=void 0;function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"authorization",children:"Authorization"}),`
`,e.jsx(n.p,{children:"This section describes the authorization mechanisms used in the API."}),`
`,e.jsx(n.h2,{id:"api-key-authentication",children:"API Key Authentication"}),`
`,e.jsx(n.p,{children:"The API uses an API key for authentication."}),`
`,e.jsx(n.h3,{id:"obtaining-an-api-key",children:"Obtaining an API Key"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Contact the administrator or use the registration process to get an API key."}),`
`,e.jsx(n.li,{children:"Add the key to the HTTP request header."}),`
`]}),`
`,e.jsx(n.h3,{id:"example-request-with-api-key",children:"Example Request with API Key"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-http",children:`GET /movies HTTP/1.1
Host: localhost:8000
X-API-KEY: your_api_key_here
`})}),`
`,e.jsx(n.h3,{id:"example-using-curl",children:"Example Using cURL"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`curl -X GET "http://localhost:8000/api/v1/movies" -H "X-API-KEY: your_api_key_here"
`})}),`
`,e.jsx(n.h3,{id:"error-responses",children:"Error Responses"}),`
`,e.jsx(n.p,{children:"If the API key is invalid or missing, the server will return the following error:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"401 Unauthorized"})," – Missing or invalid API key:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "error": "Unauthorized",
  "message": "Invalid API Key"
}
`})}),`
`,e.jsx(n.hr,{})]})}function l(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{l as default,a as excerpt,o as frontmatter,h as tableOfContents};
//# sourceMappingURL=authorization-uiPGyXVX.js.map
