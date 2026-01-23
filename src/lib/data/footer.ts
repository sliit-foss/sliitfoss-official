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

const currentYear = new Date().getFullYear();

export const footerData: FooterData = {
  sections: [
    {
      title: 'Socials',
      links: [
        { text: 'Instagram', linkUrl: 'https://www.instagram.com/sliitfoss/' },
        { text: 'Facebook', linkUrl: 'https://www.facebook.com/sliitfoss/' },
        { text: 'Github', linkUrl: 'https://github.com/sliit-foss' },
        {
          text: 'Youtube',
          linkUrl: 'https://www.youtube.com/@SLIITFOSSCommunity',
        },
        {
          text: 'LinkedIn',
          linkUrl: 'https://www.linkedin.com/company/sliit-foss-community/',
        },
        { text: 'TikTok', linkUrl: 'https://www.tiktok.com/@sliit.foss' },
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
  copyright: `Copyright ${currentYear} SLIIT FOSS Community`,
};
