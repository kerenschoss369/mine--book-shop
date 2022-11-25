const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { BookPage } from "./pages/BookPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Navbar } from "./cmps/Navbar.jsx";
import { BookDetailsPage } from "./pages/BookDetailsPage.jsx";
import { AboutPage } from "./cmps/AboutPage.jsx";
const history = History.createBrowserHistory()

export class BookApp extends React.Component {
    render() {
        return (
            <Router>
            <div>
              <Navbar />
              <main>
                <Switch>
                  <Route component={BookDetailsPage} path="/book/:bookId" />
                  <Route component={BookPage} path="/book" />
                  <Route component={AboutPage} path="/about" />
                  <Route component={HomePage} path="/" />
                </Switch>
              </main>
            </div>
          </Router>
        )
    }
}

