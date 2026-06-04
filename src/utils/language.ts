import { Language, languages } from 'constants/resume';

const defaultLanguage: Language = 'zh';
const languageQueryKey = 'lang';
const languageStorageKey = 'resume-language';

export const isLanguage = (language: string | null): language is Language => {
  return languages.includes(language as Language);
};

const getLanguageFromSearch = (search: string): Language | null => {
  const language = new URLSearchParams(search).get(languageQueryKey);

  return isLanguage(language) ? language : null;
};

const getStoredLanguage = (): Language | null => {
  try {
    const language = window.localStorage.getItem(languageStorageKey);

    return isLanguage(language) ? language : null;
  } catch {
    return null;
  }
};

export const getInitialLanguage = (): Language => {
  return getLanguageFromSearch(window.location.search) ?? getStoredLanguage() ?? defaultLanguage;
};

export const saveLanguage = (language: Language) => {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Storage can be blocked in private browsing or embedded contexts.
  }
};

export const updateDocumentLanguage = (language: Language) => {
  document.documentElement.lang = language;
};

export const updateLanguageUrl = (language: Language) => {
  const params = new URLSearchParams(window.location.search);

  params.set(languageQueryKey, language);

  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}?${params.toString()}${window.location.hash}`,
  );
};
