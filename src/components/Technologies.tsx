import { technologies } from '@/data/technologies';
import Subtitle from './Subtitle';

const Technologies = () => {
	return (
		<section className="w-full px-4">
			<div className="mx-auto max-w-screen-xl w-full ">
				<Subtitle text="Technologies" />
				<p className="text-slate-400 text-md mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tortor massa.</p>
				<div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{Object.entries(technologies).map(([k, v]) => (
						<div key={k} className="flex items-center gap-4 p-3 rounded-md  bg-gradient-to-r from-slate-800 to-purple-900/10">
							<span className={`[&>svg]:w-5 p-2 rounded-lg ${v.bgColor}`}>{v.icon}</span>
							<span className="text-slate-200 text-md">{k}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
