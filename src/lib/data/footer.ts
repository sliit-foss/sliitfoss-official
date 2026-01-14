export interface FooterLink {
  text: string;
  linkUrl: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  sections: FooterSection[];
  copyright: string;
}

export const footerData: FooterData = {
  sections: [
    {
      title: 'Socials',
      links: [
        { text: 'Instagram', linkUrl: '#' },
        { text: 'Facebook', linkUrl: '#' },
        { text: 'Github', linkUrl: '#' },
        { text: 'Youtube', linkUrl: '#' },
        { text: 'LinkedIn', linkUrl: '#' },
        { text: 'TikTok', linkUrl: '#' },
      ],
    },
    {
      title: 'Quick Navs',
      links: [
        { text: 'Home', linkUrl: '#' },
        { text: 'About', linkUrl: '#' },
        { text: 'Blog', linkUrl: '#' },
        { text: 'Podcast', linkUrl: '#' },
        { text: 'Events', linkUrl: '#' },
        { text: 'Register', linkUrl: '#' },
      ],
    },
  ],
  copyright: 'Copyright 2025 SLIIT FOSS',
};
