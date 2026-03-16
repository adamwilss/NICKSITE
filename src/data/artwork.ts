export type ArtworkCategory = 'celebrity' | 'event' | 'studio' | 'commission';

export interface ArtworkItem {
  id: string;
  filename: string;
  title: string;
  caption: string;
  category: ArtworkCategory;
  tags: string[];
  width: number;
  height: number;
}

export const artworkItems: ArtworkItem[] = [
  {
    id: 'tommy-lee-1',
    filename: 'TommyCopyright20251216_174543.jpg',
    title: 'Tommy Lee — Mötley Crüe',
    caption:
      'Commissioned by rock superstar Tommy Lee of Mötley Crüe, this intricate caricature portrait shows the legendary drummer behind his kit, faithfully capturing his distinctive tattoos. Personally hand-delivered backstage at Wembley Arena, London on his 2011 UK tour. He IS as cool in person as you imagine! (Pencil on paper)',
    category: 'celebrity',
    tags: ['commission'],
    width: 800,
    height: 1000,
  },
  {
    id: 'tommy-lee-deadmau5',
    filename: 'TommyLeeDeadmaus220260314_133632.jpg',
    title: 'Tommy Lee — Mötley Crüe & Deadmau5',
    caption:
      'Presenting Tommy Lee of Mötley Crüe with his commissioned caricature portrait backstage at Wembley Arena in London during his UK tour, at the time of his collaboration with Deadmau5. (Pencil on paper)',
    category: 'celebrity',
    tags: ['commission'],
    width: 800,
    height: 1000,
  },
  {
    id: 'jon-snow',
    filename: 'JonSnow.Copyright.jpg',
    title: 'Jon Snow',
    caption:
      'Presenting Jon Snow, the beloved British journalist and broadcaster, with his caricature — drawn live, face-to-face at a political awards ceremony in London. And I have to say... he is an absolute gentleman!',
    category: 'event',
    tags: ['celebrity'],
    width: 800,
    height: 1000,
  },
  {
    id: 'charlotte-hawkins',
    filename: 'CharlotteHawkins.Copyright.jpg',
    title: 'Charlotte Hawkins',
    caption:
      'Charlotte Hawkins, the prominent British television presenter, with her personalised Bronowski caricature — drawn live, face-to-face at a charity gala in London.',
    category: 'event',
    tags: ['celebrity'],
    width: 800,
    height: 1000,
  },
  {
    id: 'lord-sacks',
    filename: 'LordSacks.jpg',
    title: 'Rabbi Lord Jonathan Sacks',
    caption:
      'Presenting the late Rabbi Lord Jonathan Sacks with his caricature portrait, drawn live during an event.',
    category: 'event',
    tags: ['celebrity'],
    width: 800,
    height: 1000,
  },
  {
    id: 'phil-spencer',
    filename: 'PhilSpencer.Copyright.jpg',
    title: 'Phil Spencer',
    caption:
      "A quickfire caricature sketch with Phil Spencer, television personality and property expert best known for presenting Channel 4's Location, Location, Location — drawn during a charity gala fundraiser in London.",
    category: 'event',
    tags: ['celebrity'],
    width: 800,
    height: 1000,
  },
  {
    id: 'jason-fox',
    filename: 'Jason.FOXY.Fox.Copyright.jpg',
    title: 'Jason "Foxy" Fox',
    caption:
      "A quick live caricature drawn for former SBS operator and SAS: Who Dares Wins presenter Jason 'Foxy' Fox during a charity event in London.",
    category: 'event',
    tags: ['celebrity'],
    width: 800,
    height: 1000,
  },
  {
    id: 'dalai-lama',
    filename: 'DalaiCopyright (1).jpg',
    title: 'His Holiness the Dalai Lama',
    caption:
      'A stylised watercolour portrait capturing the warmth and character of His Holiness the Dalai Lama. Commissions in this style are available on request.',
    category: 'studio',
    tags: ['celebrity', 'commission'],
    width: 800,
    height: 1000,
  },
  {
    id: 'rishi-sunak',
    filename: 'RishiCopyright.jpg',
    title: 'Rishi Sunak — Former Prime Minister',
    caption:
      'A stylised watercolour caricature portrait of former British Prime Minister Rishi Sunak. Commissions available upon request.',
    category: 'studio',
    tags: ['celebrity', 'commission'],
    width: 800,
    height: 1000,
  },
  {
    id: 'rockit-beatles',
    filename: 'RockitCopyright.jpg',
    title: 'Rock-It Logistics — Beatles Commission',
    caption:
      'A vivid, Beatles-themed watercolour painting, tailor-made as a bespoke commission to mark a corporate retirement. Created in close collaboration with Rock-It Logistics to reflect their global transport and logistics services across air, sea, and land. Their clients include Bruce Springsteen, Taylor Swift, Lady Gaga, Madonna, Paul McCartney, Katy Perry, Beyoncé, Ed Sheeran, The Police, and many others. Commissions available on request.',
    category: 'commission',
    tags: ['studio'],
    width: 800,
    height: 1000,
  },
  {
    id: 'lords-cricket',
    filename: 'LordsCopyright.jpg',
    title: "Lord's Cricket Ground",
    caption:
      "Commissioned by the groundskeeper at Lord's Cricket Ground, this highly detailed pencil caricature portrait captures both character and setting with precision and subtle humour. The client is proudly depicted seated on his lawnmower — playfully reimagined with a souped-up V8 powerhouse!",
    category: 'commission',
    tags: ['studio'],
    width: 800,
    height: 1000,
  },
  {
    id: 'italy-winemaker',
    filename: 'ItalyCopyright.jpg',
    title: 'Tuscan Winemaker — Italy',
    caption:
      'A black-and-white pencil caricature portrait of an independent winemaker in Tuscany, set against the beautiful surroundings of his Tuscan villa and commissioned for use as a personalised wine label. Commissions available upon request.',
    category: 'commission',
    tags: ['studio'],
    width: 800,
    height: 1000,
  },
  {
    id: 'greek-businessmen',
    filename: 'GreekCopyright.jpg',
    title: 'Three Businessmen — Bespoke Commission',
    caption:
      'A fun, personalised satirical pencil sketch developed in close collaboration with the client, incorporating distinctive personal details, character, and context — humorously reimagining three businessmen sitting on the wrecked hull of a wooden boat, when in reality the vessel was a sleek, polished yacht.',
    category: 'commission',
    tags: ['studio'],
    width: 800,
    height: 1000,
  },
  {
    id: 'swiss-rudolf',
    filename: 'SwissCopyright.jpg',
    title: 'Rudolf & Rudolf — Switzerland',
    caption:
      'A bespoke watercolour commission for a family in Switzerland, capturing the relationship between father and son, who both share the name Rudolf! Commissions available upon request.',
    category: 'commission',
    tags: ['studio'],
    width: 800,
    height: 1000,
  },
  {
    id: 'usa-christmas',
    filename: 'USACopyright.jpg',
    title: 'USA Family Christmas Card',
    caption:
      'A fun bespoke Christmas greeting card in watercolour, created in close collaboration with the family in the USA to capture their individual personalities and shared comical family dynamic! Commissions available on request.',
    category: 'commission',
    tags: ['studio'],
    width: 800,
    height: 1000,
  },
  {
    id: 'live-event',
    filename: 'InShot_20260208_135850007.jpg',
    title: 'Live Event Performance',
    caption:
      'Nick in action at a live event, entertaining guests with face-to-face caricatures.',
    category: 'event',
    tags: [],
    width: 800,
    height: 1000,
  },
];

export const categoryLabels: Record<string, string> = {
  all: 'All Work',
  celebrity: 'Celebrity',
  event: 'Live Event',
  studio: 'Studio',
  commission: 'Commission',
};
