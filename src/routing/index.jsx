import React, { useContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


import Login from '../pages/login';
import Register from '../pages/register';
import IssueDetail from '../pages/issueDetail';
import Issues from '../pages/issues';
import NewIssue from '../pages/newIssue';
const unAuthRoutes = [{
    name: "Login",
    path: "/",
    icon: '',
    subMenu: [],
    component: <Login />,
},
{
    name: "Register",
    path: "/register",
    icon: '',
    subMenu: [],
    component: <Register />,
},
]
const authRoutes = [{
    name: "Issues",
    path: "/",
    icon: '',
    subMenu: [],
    component: <Issues />,
},
{
    name: "Issue Detail",
    path: "/Issue-detail/:id",
    icon: '',
    subMenu: [],
    component: <IssueDetail />,
},
{
    name: "New Issue",
    path: "/new-issue",
    icon: '',
    subMenu: [],
    component: <NewIssue />,
},
]


const Routing = () => {
    const isLogged = true
   
    return (
        <>
            {
                !isLogged
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

                        </Routes>


                    </Router>
                    :
                    <Router>
                        <Routes>
                            {authRoutes.map(x =>
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
                        </Routes>
                    </Router>
            }




        </>
    )
}

export default Routing
