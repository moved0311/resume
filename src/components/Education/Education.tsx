import Section from "components/Section/Section"
import useResume from 'hooks/useResume'

const Education = () => {
	const { resume } = useResume()
	const { education } = resume

	return (
		<>
		<Section>{education.title}</Section>
		<ul>
			{education.items.map(({name, duration, master}) => <li key={name} className='mb-2'>
			<div className="flex items-center justify-between">
				<h4 className="text-[18px] inline-block mr-2 font-bold">{name}
				</h4>
				<span>{duration}</span>
				</div>
				<span className='text-base font-normal'>{master}</span>

			</li>)}
		</ul>
		</>
	)
}

export default Education
