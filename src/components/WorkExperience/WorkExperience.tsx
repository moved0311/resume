import { useTranslation} from 'react-i18next'
import Section from "components/Section/Section"
import language_en from "constants/en.json"
import language_zh from 'constants/zh.json'

const COMPANIES = {
	"companies_en": language_en.companies_en,
	"companies_zh": language_zh.companies_zh
}

type COMPANIES_KEYS = keyof typeof COMPANIES

const WorkExperience = () => {
	const [t] = useTranslation("global")
	const companies = COMPANIES[t("workExperience.companies") as COMPANIES_KEYS]

	return (
		<>
		<Section>{t("workExperience.title")}</Section>
		<ul>
			{companies?.map(({name, jobTitle,  duration, link, description}) => <li key={name}
			className='mb-2'>
				<div className="flex items-center justify-between">
				<h4 className="text-[18px] inline-block mr-2 font-bold">{name}
				<span className='ml-2 text-base font-normal'>{jobTitle}</span>
				</h4>
				<span>{duration}</span>
				</div>
				<a href={link}>{link}</a>
				<ul className='list-disc list-inside'>
					{description?.map(item => <li key={item}>{item}</li>)}
				</ul>
			</li>)}
		</ul>
		</>
	)
}

export default WorkExperience