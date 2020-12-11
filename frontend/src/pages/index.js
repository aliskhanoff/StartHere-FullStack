import IndexPage from './index.page.js'
import AboutPage from './about.page.js';
import ContactsPage from './contacts.page.js';

import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
export const router = () => {
    
    return (
        <Switch>
            <Route exact path='/'> <IndexPage /> </Route>
            <Route exact path='/about'> <AboutPage /> </Route>
            <Route exact path='/contacts'> <ContactsPage /> </Route>
            <Redirect  to='/'/>
        </Switch>
    )
}

export default router;