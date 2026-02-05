export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const committeeMembers: CommitteeMember[] = [
  {
    id: 'cm-1',
    name: 'Pawan Senpura',
    role: 'Dev Lead',
    image: '/board/pawan.png',
  },
  {
    id: 'cm-2',
    name: 'Samudith Tharindaka',
    role: 'Design Lead',
    image: '/board/samudith.png',
  },
  {
    id: 'cm-3',
    name: 'Movindu Liyanage',
    role: 'Event Coordinator',
    image: '/board/movindu.png',
  },
  {
    id: 'cm-4',
    name: 'Asiri Jayawardena',
    role: 'Project Coordinator',
    image: '/board/asiri.png',
  },
  {
    id: 'cm-5',
    name: 'Amaya Fernando',
    role: 'Assistant Secretary',
    image: '/board/amaya.png',
  },
  {
    id: 'cm-6',
    name: 'Sadeesha Perera',
    role: 'Assistant Treasurer',
    image: '/board/sadeesha.png',
  },
];
