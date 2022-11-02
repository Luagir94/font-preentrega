import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import PrivateRoute from "../components/privateRoute";
import Login from '../pages/login';
import Register from '../pages/register';
import IssueDetail from '../pages/issueDetail';
import Issues from '../pages/issues';
import NewIssue from '../pages/newIssue';
import { useAuth } from "../context/authContext";
import Layout from "../components/layout";
const unAuthRoutes = [{
    name: "Login",
    path: "/",
    component: <Login />,
},
{
    name: "Register",
    path: "/register",
    component: <Register />,
},
]
const authRoutes = [{
    name: "Issues",
    path: "/",
    component: <Issues />,
},
{
    name: "Issue Detail",
    path: "/Issue-detail/:id",
    component: <IssueDetail />,
},
{
    name: "New Issue",
    path: "/new-issue",
    component: <NewIssue />,
},
]


const Routing = () => {
    const { logged } = useAuth()

    return (
        <>
            {
                !logged
                    ?
                    <Router>

                        <Routes>

                            {unAuthRoutes.map(x =>
                                <Route
                                    exact
                                    path={x.path}
                                    element={
                                        x.component
                                    }
                                >
                                </Route>
                            )
                            }
                            <Route path="*" element={<Login />} />
                        </Routes>


                    </Router>
                    :
                    <Router>
                        <Layout>
                            <Routes>
                                {authRoutes.map(x =>
                                    <Route
                                        exact
                                        path={x.path}
                                        element={
                                            <PrivateRoute component={x.component}/>  
                                        }
                                    >
                                    </Route>
                                )
                                }
                                <Route path="*" element={<Issues />} />
                            </Routes>
                        </Layout>
                    </Router>
            }




        </>
    )
}

export default Routing
