import generateBadgeClasses from '@/app/lib/generateBadgeClasses';
import { notFound } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import DeleteButton from './DeleteButton';
import Tickets from '../page';

export const dynamicParams = true;

type Ticket = {
	id: string;
	title: 'string';
	body: 'string';
	priority: 'string';
	user_email: 'string';
};

export async function generateMetadata({ params }: { params: { id: string } }) {
	const supabase = createServerComponentClient({ cookies });
	const { data: ticket } = await supabase
		.from('Tickets')
		.select()
		.eq('id', params.id)
		.single();

	return {
		title: `${ticket?.title}`,
	};
}

async function getTicket(id: string) {
	// get supabase instance
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase
		.from('Tickets')
		.select()
		.eq('id', id)
		.single();

	if (!data) {
		notFound();
	}

	return data;
}

export default async function TicketDetails({
	params,
}: {
	params: { id: string };
}) {
	const id = params.id;
	const ticket = await getTicket(id);

	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	//console.log(data.session?.user);

	return (
		<div className="container pt-4">
			<h1 className="text-primary">Ticket Details</h1>
			<div>
				{data.session?.user.email === ticket.user_email && (
					<DeleteButton id={ticket.id} />
				)}
			</div>
			<div className="card border-white mb-3">
				<div className="card-body">
					<h2 className="card-title">{ticket.title}</h2>
					<p className="card-text">{ticket.body}</p>
				</div>
				<div className="d-flex justify-content-end align-items-end">
					<span
						className={`badge text-bg-${generateBadgeClasses(ticket.priority)}`}
					>
						{ticket.priority} priority
					</span>
				</div>
			</div>
		</div>
	);
}
