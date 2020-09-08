import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard';

const ROUTES_LIST = [	
	{
		path: "/",
		key: "",
		exact: true,
		component: Dashboard
	}
];

export function Routes({routes}) {
	console.log(routes);
	return (
		<Switch>
			{
				routes.map((route, i) => {
					return <RenderRoute key={route.key} {...route} />
				})
			}			
		</Switch>
	)
}

export default ROUTES_LIST;

function RenderRoute(currentRoute) {	
	return (
		<Route
			path={currentRoute.path}
			exact={currentRoute.exact}
			render={() => <currentRoute.component />}
		/>		
	)
}