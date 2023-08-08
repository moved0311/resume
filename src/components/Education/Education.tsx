
import { useTranslation} from 'react-i18next'
import Section from "components/Section/Section"
import language_en from "constants/en.json"
import language_zh from "constants/zh.json"

const SCHOOLS = {
	"schools_en": language_en.schools_en,
	"schools_zh": language_zh.schools_zh
}

type SCHOOLS_KEYS = keyof typeof SCHOOLS

const Education = () => {
	const [t] = useTranslation("global")
	const schools = SCHOOLS[t("education.schools") as SCHOOLS_KEYS]

	return (
		<>
		<Section>{t("education.title")}</Section>
		<ul>
			{schools?.map(({name, duration, master}) => <li key={name} className='mb-2'>
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