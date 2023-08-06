type SectionProps = {
	children: React.ReactNode
}

const Section = ({children}: SectionProps) => {
	return (
		<h2 className="text-[28px] border-b-2 border-[#383838] font-extrabold mb-2">{children}</h2>
	)
}

export default Section