import { Container } from './container';

const features = [
	{
		name: 'Vector Databases',
		description:
			'Optimized for storing and querying high-dimensional vectors for your organization needs.',
		// icon: DeviceArrowIcon,
	},
	{
		name: 'Embeddings',
		description:
			'Capture the semantic meaning of the data to better understand your customers.',
		// icon: DeviceCardsIcon,
	},
	{
		name: 'Model Tuning',
		description:
			'Optimize the performance of your model, either by fine-tuning a pretrained model on a specific task.',
		// icon: DeviceClockIcon,
	},
	// {
	// 	name: 'Profit from your network',
	// 	description:
	// 		'Invite new insiders to get tips faster and beat even other Pocket users.',
	// 	// icon: DeviceListIcon,
	// },
	// {
	// 	name: 'Encrypted and anonymized',
	// 	description:
	// 		'Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.',
	// 	// icon: DeviceLockIcon,
	// },
	// {
	// 	name: 'Portfolio tracking',
	// 	description:
	// 		'Watch your investments grow exponentially, leaving other investors in the dust.',
	// 	// icon: DeviceChartIcon,
	// },
];

export function SecondaryFeatures() {
	return (
		<section
			id="secondary-features"
			aria-label="Features for building a portfolio"
			className="pb-32"
		>
			<Container>
				<ul
					role="list"
					className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
				>
					{features.map(feature => (
						<li
							key={feature.name}
							className="rounded-2xl border border-gray-200 p-8"
						>
							{/* <feature.icon className="h-8 w-8" /> */}
							<h3 className="mt-6 font-semibold text-gray-900">
								{feature.name}
							</h3>
							<p className="mt-2 text-gray-700">{feature.description}</p>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
