import Section from 'components/Section/Section'
import useResume from 'hooks/useResume'

const CoreSkill = () => {
	const { resume } = useResume()
	const { coreSkill } = resume

	return (
		<>
			<Section>{coreSkill.title}</Section>
			<ul className="mb-2">
				{coreSkill.items.map(({ category, items }) => (
					<li key={category} className="mb-1">
						<span className="font-bold">{category}: </span>
						<span>{items.join(', ')}</span>
					</li>
				))}
			</ul>
		</>
	)
}

export default CoreSkill
