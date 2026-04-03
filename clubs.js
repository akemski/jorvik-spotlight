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
    image: "images/thunder-guards.jpg",
    avatarBg: "rgba(80,120,200,0.25)",
    avatarColor: "#a0b8f0",
    description: "Thunder Guards is a German Storytelling club that focuses on sharing OC stories via dressage videos and story posts on Instagram. Though definitely a dressage club, the focus lies on creating a comfort space for all young women (age 16+) that still enjoy Star Stable and other games. An entirely men-free space where members have the right to vote on new applicants. Mandatory meetings are held twice a week at 7:30pm, plus a weekly optional hangout meeting outside of Star Stable. A very tight-knit family where everyone gets along and there's never silence in chat or voice calls.",
    requirements: "Age 16+ · Women only · Level 20+ (exceptions for level 18-19, must stay in basic group until leveled up) · Active outside of meetings (Discord, calls, games...)",
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
