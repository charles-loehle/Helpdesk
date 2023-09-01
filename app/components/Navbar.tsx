import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './dojo-logo.png';
import { spawn } from 'child_process';
import LogoutButton from './LogoutButton';

export default function Navbar({ user }: any) {
	return (
		<div className="container">
			<header className="row py-3 mb-4 border-bottom">
				<div className="col-lg-4">
					<Link
						href="/"
						className="fw-bold fs-3 text-primary d-inline-flex link-body-emphasis text-decoration-none align-items-end"
					>
						<Image
							alt="logo"
							src={Logo}
							width={70}
							quality={100}
							placeholder="blur"
							className="me-4"
						/>
						<h3 className="fw-bold mb-0">Dojo Helpdesk</h3>
					</Link>
				</div>

				<ul className="nav col align-items-center justify-content-start">
					<li>
						<Link href="/" className="nav-link px-2 text-body-tertiary">
							Dashboard
						</Link>
					</li>
					<li>
						<Link href="/tickets" className="nav-link px-2 text-body-tertiary">
							Tickets
						</Link>
					</li>
					{user && (
						<li>
							<Link
								href="/tickets/create"
								className="nav-link px-2 text-body-tertiary"
							>
								Create Ticket
							</Link>
						</li>
					)}
				</ul>
				{user && <span>Hello, {user.email}</span>}
				<LogoutButton />
			</header>
		</div>
	);
}
