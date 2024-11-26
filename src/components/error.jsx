const errorpage = () => {
	return (
		<div>
			<div className="grid h-screen px-4 place-content-center bg-base-200">
				<div className="text-center">
					<h1 className="font-black text-gray-200 text-9xl">404</h1>

					<p className="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">
						Uh-oh!
					</p>

					<p className="mt-4 text-gray-400">I can&apos;t find that page.</p>

					<a
						href="/"
						className="mt-8 btn btn-accent hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-primary-200 focus:ring-2 focus:ring-offset-2"
					>
						Go Back Home
					</a>
				</div>
			</div>
		</div>
	);
};
// biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
{
	/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3"></div> */
}
export default errorpage;
