export interface NavLink {
  text: string;
  linkUrl: string;
}

export interface NavbarData {
  logo: {
    imageUrl: string;
    link: string;
  };
  links: NavLink[];
}

export const navbarData: NavbarData = {
  logo: {
    imageUrl: '/assets/logos/logo-dark.svg',
    link: '/',
  },
  links: [
    { text: 'Home', linkUrl: '#' },
    { text: 'About', linkUrl: '#' },
    { text: 'Events', linkUrl: '#' },
    { text: 'Blogs', linkUrl: '#' },
    { text: 'Board', linkUrl: '/board' },
    { text: 'Contact', linkUrl: '#' },
  ],
};
