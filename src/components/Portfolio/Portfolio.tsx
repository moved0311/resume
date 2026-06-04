import Section from "components/Section/Section"
import useResume from 'hooks/useResume'

const Portfolio = () => {
	const { resume } = useResume()
	const { portfolio } = resume

	return (
		<>
			<Section>{portfolio.title}</Section>
			<ul>
				{portfolio.items.map(({ name, link, description, tags }) => <li key={name}
					className='mb-2'>
					<div className="flex items-center">
						<h4 className="text-[18px] inline-block mr-2 font-bold">{name}
						</h4>
						<ul className="flex items-center gap-2 flex-wrap text-xs font-semibold">{tags?.map(tag => <li key={tag} className="py-[0.5px] px-2 rounded-md border-[1px] border-black">{tag}</li>)}</ul>
					</div>
					<p>{description}</p>
					<a href={link} className="pl-5 relative before:absolute before:top-[2px] before:left-0 before:content-link">{link}</a>
				</li>)}
			</ul>
		</>
	)
}

export default Portfolio
