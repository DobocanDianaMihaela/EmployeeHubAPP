// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import DepartmentList from './components/DepartmentList';
import EmployeeList from './components/EmployeeList';
import EmailForm from './components/EmailForm';
import Login from './components/Login';
import './App.css'; // Import the CSS file for styles

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (username) => {
        // You can perform authentication here, and set the logged-in user
        setLoggedInUser(username);
    };

    const handleLogout = () => {
        // Perform logout logic, e.g., clear user from state
        setLoggedInUser(null);
    };

    return (
        <Router>
            <div className="app-container">
                <header>
                    <h1>Employee Hub</h1>
                </header>

                <div className="main-container">
                    {loggedInUser ? (
                        // Render the authenticated content
                        <>
                            <nav>
                                <ul>

                                    <li>
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>
                            </nav>

                            <hr />

                            <div className="content">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/departments" element={<DepartmentListContainer />} />
                                    <Route path="/employees" element={<EmployeeListContainer />} />
                                    <Route path="/send-email" element={<EmailForm />} />
                                </Routes>
                            </div>
                        </>
                    ) : (
                        // Render the login component if not authenticated
                        <Login onLogin={handleLogin} />
                    )}
                </div>
            </div>
        </Router>
    );
};

const Home = () => (
    <div>
        <h2>Choose an Option to Manage:</h2>
        <div>
            <Link to="/departments">
                <button>Manage Departments</button>
            </Link>
        </div>
        <div>
            <Link to="/employees">
                <button>Manage Employees     </button>
            </Link>
        </div>
    </div>
);

const BackButton = () => (
    <div>
        <Link to="/">
            <button>Back</button>
        </Link>
    </div>
);

const DepartmentListContainer = () => (
    <>
        <BackButton />
        <DepartmentList />
    </>
);

const EmployeeListContainer = () => (
    <>
        <BackButton />
        <EmployeeList />
    </>
);

export default App;
