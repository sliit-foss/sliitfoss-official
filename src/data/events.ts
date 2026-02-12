export interface Event {
  topic: string;
  description: string;
  venue: string;
  date: string;
  readMoreLink: string;
  imageUrl: string;
}

export const events: readonly Event[] = [
  {
    topic: 'Annual Tech Summit 2025',
    description:
      'A full-day conference covering web development, AI, and cloud-native technologies with industry speakers and workshops.',
    venue: 'SLIIT Auditorium',
    date: '2025-11-10',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Open Source Hackathon',
    description:
      '24-hour hackathon focused on building open-source tooling and community projects. Prizes for best teamwork and impact.',
    venue: 'Innovation Lab, SLIIT',
    date: '2025-09-05',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Frontend Meetup: Design systems',
    description:
      'Hands-on meetup about scalable design systems and component libraries for React and Next.js.',
    venue: 'Room A12, SLIIT',
    date: '2025-10-02',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Career Talk: Software Engineering Paths',
    description:
      'Panel discussion with alumni and industry engineers about internships, career progression, and interview tips.',
    venue: 'Online (Zoom)',
    date: '2025-08-20',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Community Workshop: Git & Open Source',
    description:
      'Beginner-friendly workshop teaching Git, PRs, and contributing to open-source projects.',
    venue: 'Lab 3, SLIIT',
    date: '2025-12-06',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'AI & ML Workshop: Practical Projects',
    description:
      'Two-day hands-on workshop covering model building, evaluation and deployment with practical mini-projects.',
    venue: 'Computer Lab B, SLIIT',
    date: '2025-11-22',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Cloud Native Day',
    description:
      'Keynotes and workshops around Kubernetes, Docker, and cloud-native best practices for scalable apps.',
    venue: 'Tech Park Conference Hall',
    date: '2025-10-18',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'React Native Hack Night',
    description:
      'Evening event to prototype cross-platform mobile apps using React Native — bring your ideas and laptop.',
    venue: 'Mobile Dev Lab, SLIIT',
    date: '2025-09-28',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Open Source Mentorship Program Kickoff',
    description:
      'Intro session for mentees and mentors joining a 3-month open-source mentorship cohort.',
    venue: 'Online (Zoom)',
    date: '2025-07-15',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Design Sprint: UX for Developers',
    description:
      'Interactive design sprint that pairs developers with designers to validate product ideas quickly.',
    venue: 'Studio 2, Innovation Hub',
    date: '2025-12-14',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Women in Tech: Leadership Panel',
    description:
      'Panel discussion featuring women leaders in tech sharing career advice and leadership lessons.',
    venue: 'Auditorium B, SLIIT',
    date: '2026-02-05',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Game Dev Jam: Build in a Weekend',
    description:
      'A 48-hour game development jam where participants build a playable game from scratch. Mentors available on-site.',
    venue: 'Main Library Discussion Room',
    date: '2026-01-15',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Cyber Security Awareness Day',
    description:
      'Workshops on ethical hacking, defending against common exploits, and securing personal data.',
    venue: 'PC Lab 05, SLIIT',
    date: '2026-03-10',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  {
    topic: 'Blockchain & Web3 Summit',
    description:
      'Exploring the future of decentralized internet, smart contracts, and real-world blockchain applications.',
    venue: 'Tech Park Auditorium',
    date: '2026-04-20',
    readMoreLink: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
  },
] as const;
