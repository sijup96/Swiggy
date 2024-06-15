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
=> context.Provider - To set the value

# Redux

-> configureStore()
-> createSlice
-> reducer()
-> reducers()
-> useDispatch()
-> useSelector()

# Testing [ developer ] 3 types

=> Unit testing
=> Integration testing
=> End to End (E2E) testing

# Setting up Testing in our app

-> Install React Testing Library
-> Install jest
-> Install Babel dependencies
-> Configure Babel
-> Configure Parcel
-> Jest configuration
-> Install jsdom library
