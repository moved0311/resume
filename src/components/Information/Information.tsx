import { Language } from 'constants/resume'
import useResume from 'hooks/useResume'

const Information = () => {
	const { changeLanguage, resume } = useResume()
	const { profile } = resume

	const handleChangeLanguage = (lang: Language) => {
		changeLanguage(lang)
	}

	return (
		<div className="mb-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<img className="rounded-full mr-2" alt="avatar" src={`${process.env.PUBLIC_URL}${profile.avatar}`} width={50} height={50} />
					<span>{profile.name}</span>
				</div>
				<div>
					<button className="border-2 mr-1 p-1" onClick={() => handleChangeLanguage('en')}>EN</button>
					<button className="border-2  p-1" onClick={() => handleChangeLanguage('zh')}>中文</button>
				</div>
			</div>
			<ul className="flex flex-col gap-2 mt-3 pl-3">
				{profile.contacts.map(({ type, label, href, icon }) => (
					<li className='flex' key={type}>
						<img alt={`${type}-icon`} src={`${process.env.PUBLIC_URL}${icon}`} width={25} height={25} className='mr-2' />
						<a href={href}>{label}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Information
