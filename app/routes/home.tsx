import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Team Dexus' },
		{
			name: 'description',
			content: 'AI Driven Platform & Consulting Services',
		},
	];
}

export default function Home() {
	return <Welcome />;
}
