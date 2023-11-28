import { useTranslation } from 'react-i18next'
import Section from "components/Section/Section"
import language_en from "constants/en.json"
import language_zh from 'constants/zh.json'

const PORTFOLIOS = {
	"portfolio_en": language_en.portfolio_en,
	"portfolio_zh": language_zh.portfolio_zh
}

type PORTFOLIOS_KEYS = keyof typeof PORTFOLIOS

const Portfolio = () => {
	const [t] = useTranslation("global")
	const protfolios = PORTFOLIOS[t("portfolio.portfolio") as PORTFOLIOS_KEYS]

	return (
		<>
			<Section>{t("portfolio.title")}</Section>
			<ul>
				{protfolios?.map(({ name, link, description, tags }) => <li key={name}
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
