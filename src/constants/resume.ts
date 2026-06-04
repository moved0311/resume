import language_en from 'constants/en.json';
import language_zh from 'constants/zh.json';

export const languages = ['zh', 'en'] as const;

export type Language = (typeof languages)[number];

type Contact = {
  type: 'email' | 'github' | 'linkedin' | 'blog';
  label: string;
  href: string;
  icon: string;
};

const contacts: Contact[] = [
  {
    type: 'email',
    label: 'moved0311@gmail.com',
    href: 'mailto:moved0311@gmail.com',
    icon: '/assets/email.png',
  },
  {
    type: 'github',
    label: 'https://github.com/moved0311',
    href: 'https://github.com/moved0311',
    icon: '/assets/github.png',
  },
  {
    type: 'linkedin',
    label: 'https://www.linkedin.com/in/jiang-taiyi/',
    href: 'https://www.linkedin.com/in/jiang-taiyi/',
    icon: '/assets/linkedin.png',
  },
  {
    type: 'blog',
    label: 'https://www.taiyi.dev',
    href: 'https://www.taiyi.dev',
    icon: '/assets/blogger.svg',
  },
];

export const resume = {
  zh: {
    profile: {
      name: language_zh.profile.name,
      avatar: '/assets/avatar.jpg',
      contacts,
    },
    workExperience: language_zh.workExperience,
    education: language_zh.education,
    portfolio: language_zh.portfolio,
  },
  en: {
    profile: {
      name: language_en.profile.name,
      avatar: '/assets/avatar.jpg',
      contacts,
    },
    workExperience: language_en.workExperience,
    education: language_en.education,
    portfolio: language_en.portfolio,
  },
} as const;

