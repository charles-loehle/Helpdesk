'use client';

import { DELETE } from '@/app/api/tickets/[id]/route';
import { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }: { id: string }) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleClick = async () => {
		setIsLoading(true);
		const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
			method: 'DELETE',
		});
		const json = await res.json();

		if (json.error) {
			console.log(json.error);
			setIsLoading(false);
		}
		if (!json.error) {
			router.refresh();
			router.push('/tickets');
		}
	};

	return (
		<button
			className="btn btn-primary"
			onClick={handleClick}
			disabled={isLoading}
		>
			{isLoading && (
				<>
					<TiDelete />
					Deleting...
				</>
			)}
			{!isLoading && (
				<>
					<TiDelete />
					Delete Ticket
				</>
			)}
		</button>
	);
}
