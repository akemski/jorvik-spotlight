const CLUBS = [
  {
    id: "example-club",
    name: "Example Club",
    initials: "EC",
    category: "Dressage",
    categoryLabel: "Dressage",
    server: "DE10",
    founded: "Month 202X",
    members: "50",
    meetingTimes: "Day Time",
    language: "German",
    instagram: "@exampleclub",
    instagramUrl: "https://instagram.com/exampleclub",
    acceptingMembers: true,
    image: null,
    avatarBg: "rgba(220,50,90,0.25)",
    avatarColor: "#ffb8cc",
    description: "This is an example club to show you what a directory listing looks like. Once your club gets listed, this is where your club description will appear. Tell us about your vibe, what you do, and what makes your club special!",
    requirements: "This is where your club's requirements to join would appear.",

    visit: {
      date: "March 2026",
      meetingsAttended: 0,
      report: "\"This is an example of a personal visit report. Clubs that have been personally visited by Jorvik Spotlight will have a report like this one. Written from firsthand experience after attending one or more of your meetings.\""
    },

    spotlight: "example-club"
  },
  {
    id: "thunder-guards",
    name: "Thunder Guards",
    initials: "TG",
    category: "dressage",
    categoryLabel: "Dressage",
    server: "DE1",
    founded: "October 2025",
    members: "16/25",
    meetingTimes: "Twice a week 7:30pm (days voted by members) + optional hangout meeting",
    language: "German",
    instagram: "@thunderguards_",
    instagramUrl: "https://instagram.com/thunderguards_",
    acceptingMembers: true,
    image: "/images/thunder-guards.png",
    avatarBg: "rgba(80,120,200,0.25)",
    avatarColor: "#a0b8f0",
    description: "Thunder Guards is a German Storytelling club that focuses on sharing OC stories via dressage videos and story posts on Instagram. Though definitely a dressage club, the focus lies on creating a comfort space for all young women (age 16+) that still enjoy Star Stable and other games. An entirely men-free space where members have the right to vote on new applicants. Mandatory meetings are held twice a week at 7:30pm, plus a weekly optional hangout meeting outside of Star Stable. A very tight-knit family where everyone gets along and there's never silence in chat or voice calls.",
    requirements: "Age 16+ · Women only · Level 20+ (exceptions for level 18-19, must stay in basic group until leveled up) · Active outside of meetings (Discord, calls, games...)",
    visit: null,
    spotlight: null
  },
  {
    id: "the-dinosaur-agency",
    name: "The Dinosaur Agency",
    initials: "DA",
    category: "dressage",
    categoryLabel: "Dressage",
    server: "DE3",
    founded: "Januar 2026",
    members: "17",
    meetingTimes: "Dienstag & Donnerstag 20:00 Uhr",
    language: "Deutsch",
    instagram: "@thedinosauragency",
    instagramUrl: "https://instagram.com/thedinosauragency",
    acceptingMembers: true,
    image: "/images/the-dinosaurs-agency.jpg",
    avatarBg: "rgba(80,160,80,0.25)",
    avatarColor: "#a0e0a0",
    description: "Hey wir sind the Dinosaur Agency. Ein Dressur und Freizeit Club von Server Drei. Wir treffen uns Dienstags und Donnerstags Abends und machen zusammen Dressur oder verschiedene Aktivitäten wie Verstecken, leveln oder das auf was die Mittis gerade so Lust haben.",
    requirements: "mindestens 15 Jahre · mindestens Level 10 · Discord",
    visit: null,
    spotlight: null
  },
  {
    id: "team-illysia",
    name: "Team Illysia",
    initials: "TI",
    category: "hangout",
    categoryLabel: "Hangout",
    server: "DE16",
    founded: "November 2025",
    members: "19/20",
    meetingTimes: "Monday & Wednesday 8:00pm - Open End",
    language: "German",
    instagram: "@teamillysia.sso",
    instagramUrl: "https://instagram.com/teamillysial.sso",
    acceptingMembers: true,
    image: "/images/team-illysia.png",
    avatarBg: "rgba(100,80,180,0.25)",
    avatarColor: "#c0b0f0",
    description: "Team Illysia is a German crime-based roleplay team that combines mystery, storytelling, and deep character development into one world. The goal is to create a space where every decision matters, every action has consequences, and every secret tells its own story. In Illysia, no character exists without purpose — each member brings their own background, motives, and hidden truths into the story. Plot twists, conflicts, and relationships develop naturally through roleplay, creating a dynamic and unpredictable experience. Behind the crime and mystery, you'll find a welcoming and active community that enjoys spending time together.",
    requirements: "Discord required · StarRider with Jarlaheim unlocked · Age 14+ · Certain level of maturity · Must be able to switch to DE16 · Willing to develop storylines and bring your character to life · Active roleplay participation",
    visit: null,
    spotlight: null
  },
  {
    id: "fairy-swans",
    name: "Fairy Swans",
    initials: "FS",
    category: "dressage",
    categoryLabel: "Dressage",
    server: "DE9",
    founded: "Februar 2026",
    members: "8/30",
    meetingTimes: "Dienstag 19:00–20:00 Uhr (Dressur, verpflichtend) · Donnerstag 19:00–20:00 Uhr (Spiele & Freizeit, freiwillig)",
    language: "German",
    instagram: "@fairyswanss",
    instagramUrl: "https://instagram.com/fairyswanss",
    acceptingMembers: true,
    image: "/images/fairy-swans.jpg",
    avatarBg: "rgba(180,140,220,0.25)",
    avatarColor: "#e0c8f8",
    description: "Fairy Swans ist der perfekte Star Stable Club für alle, die Schule, Arbeit oder Privatleben an erste Stelle setzen - und trotzdem Teil von etwas Besonderem sein möchten. Bei uns zählt Qualität statt Dauer-Online-Sein: ein entspanntes Clubleben ohne Druck. Unser Club ist SSD-based, stilvoll strukturiert und lebt von einem originellen, liebevoll durchdachten Konzept. Dazu kommen ein never-seen-before Cluboutfit und ein einzigartiges Clubpferd, die Fairy Swans sofort erkennbar machen. Fairy Swans ist mehr als ein Club. Es ist ein Ort, an dem dein echtes Leben Platz hat - und Magie trotzdem entsteht.",
    requirements: "15+ Jahre · Level 18+ · Discord",
    visit: null,
    spotlight: null
  },
  {
    id: "tame-flowers",
    name: "Tame Flowers",
    initials: "TF",
    category: "dressage",
    categoryLabel: "Dressage",
    server: "DE13",
    founded: "Dezember 2025",
    members: "14",
    meetingTimes: "Mittwoch 20:00 Uhr · Freitag 20:00 Uhr · Sonntag 20:00 Uhr",
    language: "German",
    instagram: "@tame.flowers",
    instagramUrl: "https://instagram.com/tame.flowers",
    acceptingMembers: true,
    image: null,
    avatarBg: "rgba(160,200,140,0.25)",
    avatarColor: "#c8e8b8",
    description: "Die 'Tame Flowers' sind ein story basierter Dressur und Hangout Club x Team auf dem 13. deutschen Server Magnolia Tower. Bei uns steht besonders die Gemeinschaft und der Spaß im Vordergrund. Unsere Dressurstunden sind basiert auf dem SSD System und daher sehr strukturiert. Bei unseren Hangout Treffen spielen wir oft Spiele in SSO aber auch Browser Games oder andere Multiplayer Games. Des weiteren gibt es bei den Tame Flowers einige interne Aktivitäten, wie zum Beispiel unseren Bookclub und unsere Artist Lounge, bei welchen wir uns regelmäßig austauschen können. Im Club läuft alles sehr harmonisch ab, worauf alle einen großen Wert legen.",
    requirements: "16+ Jahre · Level 18+",
    visit: null,
    spotlight: null
  },
  {
    id: "team-kinzoku",
    name: "Team Kinzoku",
    initials: "TK",
    category: "dressage",
    categoryLabel: "Competitive Dressage",
    server: "DE9",
    founded: "Februar 2026",
    members: "7",
    meetingTimes: "Dienstag, Donnerstag & Sonntag 20:00–21:00 Uhr",
    language: "German",
    instagram: "@team.kinzoku",
    instagramUrl: "https://instagram.com/team.kinzoku",
    acceptingMembers: true,
    image: "/images/team-kinzoku.jpg",
    avatarBg: "rgba(220,160,160,0.25)",
    avatarColor: "#f8c8c8",
    description: "Wir sind Team Kinzoku, ein Dressurteam auf dem 9. deutschen Server Raindrop Rose. Unser Vibe ist auf Japan und Sakura ausgelegt. Wir konzentrieren uns sehr auf die Dressur.",
    requirements: "15+ Jahre · Level 19+ · Teampferd und Teamoutfit · Mindestens 2 Treffen pro Woche",
    visit: null,
    spotlight: null
  },
];




const SPOTLIGHTS = [
  {
    id: "example-club",
    clubId: "example-club",
    month: "March 2026",
    isLatest: true,
    title: "Example Club",
    whyLabel: "Example headline",
    article: "This is an example spotlight article. Each month one club gets featured here with a personal write-up about why they stood out."
  },
];

function getClub(id) {
  return CLUBS.find(c => c.id === id) || null;
}

function getSpotlight(id) {
  return SPOTLIGHTS.find(s => s.id === id) || null;
}


function avatarHTML(club, size = '36px', extraStyle = '') {
  const fontSize = parseInt(size) > 50 ? '20px' : parseInt(size) > 36 ? '14px' : '12px';
  if (club.image) {
    return `<div style="width:${size};height:${size};border-radius:50%;overflow:hidden;flex-shrink:0;${extraStyle}">
      <img src="${club.image}" alt="${club.name}" style="width:100%;height:100%;object-fit:cover;">
    </div>`;
  }
  return `<div style="width:${size};height:${size};border-radius:50%;background:${club.avatarBg};color:${club.avatarColor};display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:${fontSize};font-weight:700;flex-shrink:0;${extraStyle}">${club.initials}</div>`;
}
