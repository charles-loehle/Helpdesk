import Link from 'next/link';

export default function Home() {
	return (
		<main className="Dashboard container">
			<div className="pt-4 pb-5">
				<h2 className="text-primary fw-bold">Dashboard</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
					repellendus tempore, exercitationem odit, quasi doloremque possimus
					recusandae alias sequi totam soluta natus iure eius, obcaecati sint
					dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed
					voluptates iste cum totam, facere explicabo, fugit suscipit ratione
					aspernatur consequuntur ex mollitia quaerat?
				</p>
				<div className="text-center">
					<Link className="btn btn-primary" href="/tickets">
						View Tickets
					</Link>
				</div>
			</div>

			<div className="card-container pt-4">
				<h2 className="text-primary fw-bold">Company Updates</h2>
				<div className="card border-white mb-3">
					<div className="card-body">
						<h5 className="card-title">New member of the web dev team...</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							odit facilis nobis possimus sed earum quasi? Quaerat nisi modi
							rerum, quisquam, iste asperiores reprehenderit, quae eaque magni
							ullam optio dignissimos?
						</p>
						<a href="#" className="btn btn-primary">
							Button
						</a>
					</div>
				</div>

				<div className="card border-white">
					<div className="card-body">
						<h5 className="card-title">New website live!</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
							repellat autem aut est nisi eveniet reprehenderit. Sit eum nobis
							porro provident eos. Ipsum corrupti cumque, quaerat quia nihil
							placeat delectus.
						</p>
						<a href="#" className="btn btn-primary">
							Button
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}

