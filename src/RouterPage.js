import App from './App';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

function RouterPage() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<App />
				</Route>
				<Route default>
					<App />
				</Route>				
			</Switch>
		</BrowserRouter>
	);
}

export default RouterPage;
