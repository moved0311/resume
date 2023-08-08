import { useTranslation} from 'react-i18next'


const Information = () => {
	const [, i18n] = useTranslation("global")

	const handleChangeLanguage = (lang: string) => {
		i18n.changeLanguage(lang)
	}

	return (
		<div className="mb-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<img className="rounded-full mr-2" alt="avatar" src="resume/assets/avatar.jpg" width={50} height={50} />
					<span>江太一 (Tai Yi Jiang)</span>
				</div>
				<div>
					<button className="border-2 mr-1 p-1" onClick={() => handleChangeLanguage('en')}>EN</button>
					<button className="border-2  p-1" onClick={() => handleChangeLanguage('zh')}>繁</button>
				</div>
			</div>
			<ul className="flex flex-col gap-2 mt-3 pl-3">
				<li className='flex'>
					<img alt="email-icon" src="resume/assets/email.png" width={25} height={25} className='mr-2'/>
					<a href="mailto:moved0311@gmail.com">moved0311@gmail.com</a>
				</li>
				<li className='flex'>
					<img alt="github-icon" src="resume/assets/github.png" width={25} height={25} className='mr-2'/>
					<a href="https://github.com/moved0311">https://github.com/moved0311</a>
				</li>
				<li className='flex'>
					<img alt="linkin-icon" src="resume/assets/linkedin.png" width={25} height={25} className='mr-2'/>
					<a href="https://www.linkedin.com/in/jiang-taiyi/">https://www.linkedin.com/in/jiang-taiyi/</a>
				</li>
			</ul>
		</div>
	)
}

export default Information