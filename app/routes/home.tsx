import { BentoCard } from '#app/components/ui/bento-card';
import { CircleBackground } from '#app/components/ui/circle-background';
import { Container } from '#app/components/ui/container';
import { Faqs } from '#app/components/ui/faqs';
import { Footer } from '#app/components/ui/footer';
import { Gradient, GradientBackground } from '#app/components/ui/gradient';
import { Navbar } from '#app/components/ui/navbar';
import { SecondaryFeatures } from '#app/components/ui/secondary-features';
import { Services } from '#app/components/ui/services';
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

				<Services />
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

function DarkCallToAction() {
	return (
		<div className="mx-2 my-2 relative overflow-hidden rounded-4xl bg-gray-900 py-32">
			<Container>
				<div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
					<CircleBackground color="#fff" className="animate-pulse" />
				</div>
				<Container className="relative">
					<div className="mx-auto max-w-md sm:text-center">
						<Subheading dark>AI Technology</Subheading>
						<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
							Customer outreach.
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							Our AI agents analyze the sentiment of your customer conversations
							in real time, ensuring you're always one step ahead, helping you
							build a reputation and close the deal.
						</p>
					</div>
				</Container>
			</Container>
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
						Welcome to Dexus Inc.
					</Heading>
					<Lead className="mt-6 max-w-3xl">
						We’re on a mission to transform the way businesses generate revenue
						by harnessing AI technology to engage with their customers and sell
						smarter.
					</Lead>
				</Container>
				<SecondaryFeatures />
				<DarkCallToAction />
				<Container>
					<div className="relative pt-20 pb-16 text-center sm:py-24">
						<hgroup>
							<Subheading>Engage</Subheading>
							<p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
								Team Dexus
								<br />
							</p>
						</hgroup>
						<p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
							We are here to help you identify, explore, and empower you with
							new opportunities with AI technology.
						</p>
					</div>
				</Container>
				<Hero />
				{/* <Faqs /> */}
			</main>
			{/* <Testimonials /> */}

			<Footer />
		</div>
	);
}
