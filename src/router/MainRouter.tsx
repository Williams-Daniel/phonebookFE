import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import NewContact from "../pages/NewContact";


const MainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<LandingPage/>
            },
            {
                path:"/homepage",
                element:<HomePage/>
            },
            {
                path:"/new-contact",
                element:<NewContact/>
            },
        ]
    }
])

export default MainRouter