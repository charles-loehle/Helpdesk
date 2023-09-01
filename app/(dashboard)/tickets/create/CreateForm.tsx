'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateForm() {
	const router = useRouter();

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [priority, setPriority] = useState('low');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const newTicket = {
			title,
			body,
			priority,
		};

		const res = await fetch('http://localhost:3000/api/tickets', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTicket),
		});

		const json = await res.json();

		if (json.error) {
			console.log(json.error.message);
		}
		if (json.data) {
			router.refresh();
			router.push('/tickets');
		}
	};

	return (
		<div className="row justify-content-center">
			<form onSubmit={handleSubmit} className="col-lg-6">
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input
						required
						type="text"
						onChange={e => setTitle(e.target.value)}
						value={title}
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Body</label>
					<textarea
						required
						onChange={e => setBody(e.target.value)}
						value={body}
						className="form-control"
					></textarea>
				</div>
				<div className="mb-3">
					<label className="form-label">Priority</label>
					<select
						onChange={e => setPriority(e.target.value)}
						value={priority}
						className="form-select"
					>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
				</div>
				<button disabled={isLoading} type="submit" className="btn btn-primary">
					{isLoading && <span>Adding...</span>}
					{!isLoading && <span>Add Ticket</span>}
				</button>
			</form>
		</div>
	);
}
