import { useTranslation } from 'react-i18next';
import { Language, resume } from 'constants/resume';
import { isLanguage, saveLanguage, updateDocumentLanguage, updateLanguageUrl } from 'utils/language';

const useResume = () => {
  const [, i18n] = useTranslation('global');
  const language = isLanguage(i18n.language) ? i18n.language : 'zh';

  const changeLanguage = (nextLanguage: Language) => {
    i18n.changeLanguage(nextLanguage);
    saveLanguage(nextLanguage);
    updateDocumentLanguage(nextLanguage);
    updateLanguageUrl(nextLanguage);
  };

  return {
    changeLanguage,
    i18n,
    language,
    resume: resume[language],
  };
};

export default useResume;
