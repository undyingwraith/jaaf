import { ComponentChildren } from 'preact';
import { Header, useTranslation } from 'src';
import { Link, Route, Switch } from 'wouter-preact';
import { DataDisplayPage } from './DataDisplayPage';
import { InputsPage } from './InputsPage';
import { ThemePage } from './ThemePage';

export function PreviewApp() {
	const _t = useTranslation();

	const links: { url: string, title: string, component: ComponentChildren; }[] = [
		{
			url: '/',
			title: _t('Home'),
			component: (<div>{_t('WelcomeText')}</div>),
		},
		{
			url: '/inputs',
			title: _t('Inputs'),
			component: (<InputsPage />),
		},
		{
			url: '/data-display',
			title: _t('DataDisplay'),
			component: (<DataDisplayPage />),
		},
		{
			url: '/theme',
			title: _t('Theme'),
			component: (<ThemePage />),
		},
	];

	return (<>
		<Header>
			{links.map((v) => (<Link to={v.url} key={v.url}>{v.title}</Link>))}
		</Header>
		<Switch>
			{links.map(v => (
				<Route path={v.url} key={v.url}>
					{v.component}
				</Route>
			))}
		</Switch>
	</>);
}
