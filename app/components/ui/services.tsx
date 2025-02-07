import { Container } from './container';
import { FadeIn } from './fade-in';
import { List, ListItem } from './list';
import { SectionIntro } from './section-intro';
import cloudIllustrationTealCyan from '../../assets/cloud-illustration-teal-cyan.svg';

export function Services() {
	return (
		// <section id="services" aria-labelledby="services-title" className="py-20 sm:py-32">
		// 			<Container>
		// 				<div className="mx-auto max-w-2xl lg:mx-0">
		// 					<Subheading dark>Services</Subheading>
		// 					<h2
		// 						id="faqs-title"
		// 						className="text-3xl font-medium tracking-tight text-gray-900"
		// 					>
		// 						Engage with Team Dexus
		// 					</h2>

		// 				</div>
		// 				<ul
		// 					role="list"
		// 					className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
		// 				>

		// 				</ul>
		// 			</Container>
		// 		</section>

		<section
			id="services"
			aria-labelledby="services-title"
			className="py-16 mb-4"
		>
			<Container>
				<div className="lg:flex lg:items-center lg:justify-end">
					<div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
						<FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
							<div className="mx-2 my-2 relative overflow-hidden rounded-4xl bg-gray-900 py-4">
								<img
									src={cloudIllustrationTealCyan}
									alt="React Router"
									// className="hidden w-full dark:block"
									className="w-3/4 mx-auto"
								/>
							</div>
						</FadeIn>
					</div>
					<List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
						<ListItem title="Discovery">Tell us about your project.</ListItem>
						<ListItem title="Application development">
							We have a team of skilled engineers.
						</ListItem>
						<ListItem title="Data Engineering & Warehouse">
							Automate data ingestion pipelines.
						</ListItem>
						<ListItem title="Vector Database & AI Integration">
							AI trained the way you want.
						</ListItem>
					</List>
				</div>
			</Container>
		</section>
	);
}
