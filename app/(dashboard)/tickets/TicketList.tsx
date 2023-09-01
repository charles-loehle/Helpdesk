import generateBadgeClasses from '@/app/lib/generateBadgeClasses';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { cookies } from 'next/headers';

type Ticket = {
	id: string;
	title: 'string';
	body: 'string';
	priority: 'string';
	user_email: 'string';
};

async function getTickets() {
	// await new Promise(resolve => setTimeout(resolve, 3000));

	// const res = await fetch('http://localhost:4000/tickets', {
	// 	next: {
	// 		revalidate: 0, // opt out of data caching
	// 	},
	// });

	// get supabase instance
	const supabase = createServerComponentClient({ cookies });

	const { data, error } = await supabase.from('Tickets').select();

	if (error) {
		// This will activate the closest `error.js` Error Boundary
		console.log(error.message);
	}

	// return res.json();
	return data;
}

export default async function TicketList() {
	const tickets = await getTickets();

	return (
		<div className="TicketList">
			{tickets?.map((ticket: Ticket) => (
				<div key={ticket.id} className="card border-white mb-3">
					<div className="card-body">
						<h5 className="card-title">{ticket.title}</h5>
						<p className="card-text">{ticket.body.slice(0, 200)}...</p>
					</div>

					<div className="d-flex justify-content-end align-items-end">
						<Link className="stretched-link" href={`/tickets/${ticket.id}`}>
							<span
								className={`badge text-bg-${generateBadgeClasses(
									ticket.priority
								)}`}
							>
								{ticket.priority} priority
							</span>
						</Link>
					</div>
				</div>
			))}
			{tickets?.length === 0 && <p>There are no tickets to show</p>}
		</div>
	);
}
