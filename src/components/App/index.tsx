import React, {useState} from 'react';
import Navigation from "./Navigation";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import AboutPage from "./Pages/About";
import WorksPage from "./Pages/Works";
import ContactPage from "./Pages/Contact";
import Footer from "./Footer";

export interface RootContextProps {
    appTheme: appTheme,
    toggleTheme: () => void;
}

type appTheme = 'light' | 'dark';

const defaultRootContextProps: RootContextProps = {
    appTheme: 'light',
    toggleTheme: () => {}
}

export const RootContext = React.createContext<RootContextProps>(defaultRootContextProps);
const App = () => {

    let [theme, setTheme] = useState<appTheme>('light');

    const rootContext: RootContextProps = {
        appTheme: theme,
        toggleTheme: () => theme === "light" ? setTheme('dark') : setTheme('light')
    }

    return (
        <div id='App' className={`app-theme-${theme}`}>
            <Router>
                <RootContext.Provider value={rootContext}>
                    <Navigation/>
                    <div className='page-container'>
                        <Switch>
                            <Route path='/about'><AboutPage/></Route>
                            <Route path='/works'><WorksPage/></Route>
                            <Route path='/contact'><ContactPage/></Route>
                            <Route path='/'><Home/></Route>
                        </Switch>
                    </div>
                    <Footer/>
                </RootContext.Provider>
            </Router>
        </div>
    );
}

export default App;