import { useTranslation} from 'react-i18next'


const Information = () => {
	const [, i18n] = useTranslation("global")

	const handleChangeLanguage = (lang: string) => {
		i18n.changeLanguage(lang)
	}

	return (
		<div className="flex items-center justify-between">
		<div>江太一 (Tai Yi Jiang)</div>
		<div>
		<button className="border-2 mr-1 p-1" onClick={() => handleChangeLanguage('en')}>EN</button>
		<button className="border-2  p-1" onClick={() => handleChangeLanguage('zh')}>繁</button></div>
		</div>
	)
}

export default Information