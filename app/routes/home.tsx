import { BentoCard } from '#app/components/ui/bento-card';
import { Container } from '#app/components/ui/container';
import { Footer } from '#app/components/ui/footer';
import { Gradient, GradientBackground } from '#app/components/ui/gradient';
import { Navbar } from '#app/components/ui/navbar';
import { Heading, Lead, Subheading } from '#app/components/ui/text';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Dexus Inc' },
		{
			name: 'description',
			content: 'AI Driven Platform & Consulting Services',
		},
	];
}

function Hero() {
	return (
		<div className="relative">
			<Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
			<Container className="relative">
				{/* <Navbar
					banner={
						<a
							href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
							className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
						>
							AI Driven Platform. Automation. Consulting Services.
						</a>
					}
				/> */}
				<div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
					<h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
						Engage
					</h1>
					<p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
						Team Dexus helps you identify, explore, and respond to new
						opportunities at the interstion of AI technology.
					</p>
					<div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row"></div>
				</div>
			</Container>
		</div>
	);
}

function DarkBentoSection() {
	return (
		<div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
			<Container>
				<Subheading dark>Outreach</Subheading>
				<Heading as="h3" dark className="mt-2 max-w-3xl">
					Customer outreach has never been easier.
				</Heading>

				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
					<BentoCard
						dark
						eyebrow="Networking"
						title="Sell at the speed of light"
						description="Our AI agents analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
						graphic={<></>}
						fade={['top']}
						className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
					/>
					<BentoCard
						dark
						eyebrow="Integrations"
						title="Meet leads where they are"
						description="With thousands of integrations, no one will be able to escape your cold outreach."
						graphic={<></>}
						// `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
						className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
					/>
					<BentoCard
						dark
						eyebrow="Meetings"
						title="Smart call scheduling"
						description="Automatically insert intro calls into your leads' calendars without their consent."
						graphic={<></>}
						className="lg:col-span-2 lg:rounded-bl-4xl"
					/>
					<BentoCard
						dark
						eyebrow="Engagement"
						title="Become a thought leader"
						description="AI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
						graphic={
							<div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
						}
						fade={['top']}
						className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
					/>
				</div>
			</Container>
		</div>
	);
}

const features = [
	{
		name: 'AI Driven Platform.',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
	},
	{
		name: 'Automation.',
		description:
			'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
	},
	{
		name: 'Consulting.',
		description:
			'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
	},
];

function Features() {
	return (
		<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
			<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
				{features.map(feature => (
					<div key={feature.name} className="relative pl-9">
						<dt className="inline font-semibold text-gray-900">
							{feature.name}
						</dt>

						<dd className="inline">{feature.description}</dd>
					</div>
				))}
			</dl>
		</div>
	);
}

function Example() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
					<h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
						Helping companies generate revenue.
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
						Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
						anim id veniam aliqua proident excepteur commodo do ea.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Get started
						</a>
						<a href="#" className="text-sm/6 font-semibold text-white">
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
					<svg
						viewBox="0 0 1024 1024"
						aria-hidden="true"
						className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
					>
						<circle
							r={512}
							cx={512}
							cy={512}
							fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
							fillOpacity="0.7"
						/>
						<defs>
							<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
								<stop stopColor="#7775D6" />
								<stop offset={1} stopColor="#E935C1" />
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="overflow-hidden">
			<main>
				<GradientBackground />
				<Container>
					<Navbar />
					<Subheading className="mt-16">
						AI Driven Platform. Automation. Consulting Services.
					</Subheading>
					<Heading as="h1" className="mt-2">
						What’s happening at Dexus Inc.
					</Heading>
					<Lead className="mt-6 max-w-3xl">
						We’re on a mission to transform the way organizations generate
						revenue by harnessing AI technology to engage with their customers
						and sell smarter.
					</Lead>
				</Container>
				{/* <Features /> */}
				<div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
					{/* <FeatureSection /> */}
					{/* <BentoSection /> */}
				</div>
				{/* <DarkBentoSection /> */}
			</main>
			{/* <Testimonials /> */}
			<Footer />
		</div>
	);
}
