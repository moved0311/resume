import Section from "components/Section/Section"
import useResume from 'hooks/useResume'

const WorkExperience = () => {
	const { resume } = useResume()
	const { workExperience } = resume

	return (
		<>
		<Section>{workExperience.title}</Section>
		<ul>
			{workExperience.items.map(({name, jobTitle,  duration, link, description, tags}) => <li key={name}
			className='mb-2'>
				<div className="flex items-center justify-between">
				<h4 className="text-[18px] inline-block mr-2 font-bold">{name}
				<span className='ml-2 text-base font-normal'>{jobTitle}</span>
				</h4>
				<span>{duration}</span>
				</div>
				{link && <a href={link}>{link}</a>}
				<ul className="flex items-center gap-2 text-xs mt-2 font-semibold">{tags?.map(tag => <li key={tag} className="py-[0.5px] px-2 rounded-md border-[1px] border-black">{tag}</li>)}</ul>
				<ul className='list-disc list-inside'>
					{description?.map(item => <li key={item}>{item}</li>)}
				</ul>
			</li>)}
		</ul>
		</>
	)
}

export default WorkExperience
