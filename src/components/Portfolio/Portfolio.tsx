import { useTranslation} from 'react-i18next'
import Section from "components/Section/Section"

const Portfolio = () => {
	const [t] = useTranslation("global")

	return (
		<Section>{t("protfolio.title")}</Section>
	)
}

export default Portfolio