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
