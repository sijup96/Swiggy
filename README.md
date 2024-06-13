# Parcel

# Named export and Default export

# Shimmer UI

# Live swiggy API cards

# Hooks

=> useState()
=> useEffect()
=> useRouterError()
=> useParams()
=> customHooks()

# React Router (createBrowserRouter , routerProvider, outlet)

# Online Status

# Lazy loading

# Tailwind

=> config
npm install -D tailwindcss postcss
npx tailwindcss init

-> config the content:

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{html,js,ts,jsx,tsx}"],
theme: {
extend: {},
},
plugins: [],
}

> Create .postcssrc file in root and insert this code
> -> {
> "plugins": {

    "tailwindcss": {}

}
}

# Add the Tailwind directives to your CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

# Higher order component

# React context
-> import {useContext} from 'react'
const {}=useContext(contextName)
=> context.Provider  - To set the value