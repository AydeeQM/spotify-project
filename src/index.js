import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Switch, Route} from 'react-router-dom'

const Index = () => (
   <Provider store={store}>
      <HashRouter>
         <Switch>
            <Route  exact path = "/" component={App}/>
{/*             <Route  exact path = "/featured" component={Featured}/>
            <Route  exact path = "/genresmood" component={Generomood}/>
            <Route  exact path = "/new" component={Newreleases}/> */}
         </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();


