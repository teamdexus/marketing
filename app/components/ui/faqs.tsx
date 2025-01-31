import { Container } from './container';
import { Subheading } from './text';

const faqs = [
	[
		{
			question: 'Question 1?',
			answer: 'Answer to Question 1.',
		},
		{
			question: 'Question 4?',
			answer: 'Answer to Question 4',
		},
		// {
		// 	question: 'Question 3?',
		// 	answer:
		// 		'Here’s the thing: you’re the one doing the insider trading, not us. We’re just giving you the tips and some tools to make trades. We’re not doing anything wrong here.',
		// },
	],
	[
		{
			question: 'Question 2?',
			answer: 'Answer to Question 2.',
		},
		{
			question: 'Question 5?',
			answer: 'Answer to Question 5.',
		},
		// {
		// 	question: 'Question 6?',
		// 	answer:
		// 		'For our free plan, the age limit is based on the minimum age to trade in your country of residence. Our VIP plan uses advanced transaction anonymization though, so you can use that plan even if you’re 9 years old. Or a dog.',
		// },
	],
	[
		{
			question: 'Question 3?',
			answer: 'Answer to Question 3.',
		},
		{
			question: 'Question 6?',
			answer: 'Answer to Question 6.',
		},
		// {
		// 	question: 'Question 9?',
		// 	answer:
		// 		'Contact us with some details about your industry and the type of access you have to apply for an insider account. Once approved, we’ll send you a guide on collecting insider information without being detected at work.',
		// },
	],
];

export function Faqs() {
	return (
		<section id="faqs" aria-labelledby="faqs-title" className="py-20 sm:py-32">
			<Container>
				<div className="mx-auto max-w-2xl lg:mx-0">
					<Subheading dark>FAQ</Subheading>
					<h2
						id="faqs-title"
						className="text-3xl font-medium tracking-tight text-gray-900"
					>
						Frequently asked questions
					</h2>
					{/* <p className="mt-2 text-lg text-gray-600">
						If you have anything else you want to ask,{' '}
						<a
							href="mailto:info@example.com"
							className="text-gray-900 underline"
						>
							reach out to us
						</a>
						.
					</p> */}
				</div>
				<ul
					role="list"
					className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
				>
					{faqs.map((column, columnIndex) => (
						<li key={columnIndex}>
							<ul role="list" className="space-y-10">
								{column.map((faq, faqIndex) => (
									<li key={faqIndex}>
										<h3 className="text-lg/6 font-semibold text-gray-900">
											{faq.question}
										</h3>
										<p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
