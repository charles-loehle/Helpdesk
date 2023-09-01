import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tickets',
	description: 'All open tickets',
};

export default function Tickets() {
	return (
		<main className="Tickets container">
			<h2 className="text-primary">Tickets</h2>
			<p>Currently open tickets</p>

			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	);
}
