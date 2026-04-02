const CLUBS = [
  {
    id: "test-cub",
    name: "Test Club",
    initials: "TC",
    category: "hangout",
    categoryLabel: "Hangout",
    server: "DE18",
    founded: "February 2025",
    members: "50",
    meetingTimes: "Mondays 9pm",
    language: "German",
    instagram: "@testclub",
    instagramUrl: "https://instagram.com/testclub",
    acceptingMembers: true,
    image: null,
    avatarBg: "rgba(220,50,90,0.25)",
    avatarColor: "#ffb8cc",
    description: "This is just a test.",
    requirements: "This is also just a test.",

    visit: {
      date: "March 2026",
      meetingsAttended: 3,
      report: "\"This test will show, if everything works.\""
    },

    spotlight: "test-club"
  },
  {
    id: "moonridge-riders",
    name: "Moonridge Riders",
    initials: "MR",
    category: "hangout",
    categoryLabel: "Hangout",
    server: "DE7",
    founded: "March 2023",
    members: "~18",
    meetingTimes: "Fridays 6pm, Sundays 4pm",
    language: "German",
    instagram: "@moonridgeriders",
    instagramUrl: "https://instagram.com/moonridgeriders",
    acceptingMembers: true,
    image: null,
    avatarBg: "rgba(100,130,200,0.2)",
    avatarColor: "#a0b8e8",
    description: "A relaxed hangout club for players who just want to have fun — no pressure, all heart. Moonridge Riders is all about enjoying the game together, whether that's going on trail rides, attending events or just hanging out at the stables.",
    requirements: "No requirements — everyone is welcome regardless of level or experience. Just be friendly and respectful!",
    visit: {
      date: "January 2026",
      meetingsAttended: 1,
      report: "\"Moonridge Riders lived up to everything I'd heard about them. The atmosphere was genuinely relaxed and fun — nobody was trying to impress anyone, they were just enjoying the game. I stayed much longer than planned because it was hard to leave. Great energy.\""
    },
    spotlight: "moonridge-riders"
  },
  {
    id: "stormwind",
    name: "Stormwind",
    initials: "SW",
    category: "racing",
    categoryLabel: "Racing",
    server: "DE1",
    founded: "June 2021",
    members: "~31",
    meetingTimes: "Wednesdays 7pm, Saturdays 5pm",
    language: "German / English",
    instagram: "@stormwindclub",
    instagramUrl: "https://instagram.com/stormwindclub",
    acceptingMembers: true,
    image: null,
    avatarBg: "rgba(200,130,60,0.2)",
    avatarColor: "#e8c090",
    description: "Competitive racing club with regular events, rankings and a passionate community. Stormwind has been one of the most active racing clubs on DE1 for years.",
    requirements: "Basic racing experience preferred. Active participation in weekly events expected.",
    visit: {
      date: "December 2025",
      meetingsAttended: 2,
      report: "\"Stormwind's races are seriously well-organised — they have a proper ranking system and everyone takes it seriously, but there's no toxic energy at all. Newcomers are welcomed and helped to improve. Really impressive club.\""
    },
    spotlight: "stormwind"
  },
  {
    id: "jorvik-hearts",
    name: "Jorvik Hearts",
    initials: "JH",
    category: "allrounder",
    categoryLabel: "Allrounder",
    server: "DE5",
    founded: "July 2025",
    members: "~15",
    meetingTimes: "Thursdays 6pm",
    language: "German",
    instagram: null,
    instagramUrl: null,
    acceptingMembers: true,
    image: null,
    avatarBg: "rgba(80,160,130,0.2)",
    avatarColor: "#80d4b8",
    description: "Something for everyone — dressage, racing, hangout and lots of community events. Jorvik Hearts is a young club with lots of energy and big ambitions.",
    requirements: "Open to all. We just ask that you're active and friendly!",
    visit: null,
    spotlight: "jorvik-hearts"
  },
  {
    id: "eclipse",
    name: "Eclipse",
    initials: "EC",
    category: "competitive",
    categoryLabel: "Competitive",
    server: "DE2",
    founded: "January 2020",
    members: "~40",
    meetingTimes: "Tuesdays 7pm, Saturdays 6pm",
    language: "German",
    instagram: "@eclipsessoclub",
    instagramUrl: "https://instagram.com/eclipsessoclub",
    acceptingMembers: false,
    image: null,
    avatarBg: "rgba(180,70,100,0.2)",
    avatarColor: "#e890b0",
    description: "High-level competitive club for dedicated players — structured training and tournaments. Eclipse is one of the longest-running competitive clubs on the German servers.",
    requirements: "Application required. Minimum activity level expected. Prior competitive experience preferred.",
    visit: null,
    spotlight: null
  },
  {
    id: "nightveil",
    name: "Nightveil",
    initials: "NV",
    category: "hangout",
    categoryLabel: "Hangout",
    server: "DE3",
    founded: "April 2024",
    members: "~12",
    meetingTimes: "Sundays 7pm",
    language: "German / English",
    instagram: null,
    instagramUrl: null,
    acceptingMembers: true,
    image: null,
    avatarBg: "rgba(140,80,160,0.2)",
    avatarColor: "#c8a0e0",
    description: "Cozy and creative — a safe space for players of all levels to ride and connect. Nightveil is known for its welcoming vibe and creative events.",
    requirements: "No requirements. Just be yourself!",
    visit: null,
    spotlight: null
  }
];




const SPOTLIGHTS = [
  {
    id: "test-club",
    clubId: "test-club",
    month: "March 2026",
    isLatest: true,
    title: "Test Club",
    whyLabel: "Test Label",
    article: "This is just another test."
  },
  {
    id: "moonridge-riders",
    clubId: "moonridge-riders",
    month: "February 2026",
    isLatest: false,
    title: "Moonridge Riders",
    whyLabel: "I attended their anniversary event",
    article: "I chose Moonridge Riders this month because of their incredible 2-year anniversary event. What they put together was one of the most creative, fun and genuinely heartfelt things I've seen in SSO.\n\nThe event featured custom trail rides, games and a little ceremony to celebrate their members. It was clear that the people behind this club pour real love into it. The vibe was relaxed and joyful — exactly what SSO is supposed to feel like."
  },
  {
    id: "stormwind",
    clubId: "stormwind",
    month: "January 2026",
    isLatest: false,
    title: "Stormwind",
    whyLabel: "Best racing club on DE1",
    article: "Stormwind has been on my radar for a while, and after attending two of their events I knew they deserved a spotlight. Their racing events are the most well-organised I've seen — proper rankings, fair rules, and a community that takes the sport seriously without taking itself too seriously.\n\nWhat surprised me most was how welcoming they were to me as an outsider. No gatekeeping, no elitism — just genuine passion for racing and a willingness to share that with anyone who shows up."
  },
  {
    id: "jorvik-hearts",
    clubId: "jorvik-hearts",
    month: "December 2025",
    isLatest: false,
    title: "Jorvik Hearts",
    whyLabel: "Outstanding newcomer club",
    article: "Jorvik Hearts is only a few months old, but they've already made a real impression on DE5. I chose them as December's spotlight because I genuinely believe in supporting clubs that are doing things right from the very beginning.\n\nTheir energy is infectious. The founders clearly have a vision and the drive to make it happen. If you're on DE5, keep an eye on this one — they're only going to grow from here."
  }
];

// Helper: get club by ID
function getClub(id) {
  return CLUBS.find(c => c.id === id) || null;
}

// Helper: get spotlight by ID
function getSpotlight(id) {
  return SPOTLIGHTS.find(s => s.id === id) || null;
}

// =============================================
//  AVATAR HELPER
//  Returns HTML for an avatar — image if available, initials otherwise
//  size: CSS size string e.g. "36px", "72px"
// =============================================

function avatarHTML(club, size = '36px', extraStyle = '') {
  const fontSize = parseInt(size) > 50 ? '20px' : parseInt(size) > 36 ? '14px' : '12px';
  if (club.image) {
    return `<div style="width:${size};height:${size};border-radius:50%;overflow:hidden;flex-shrink:0;${extraStyle}">
      <img src="${club.image}" alt="${club.name}" style="width:100%;height:100%;object-fit:cover;">
    </div>`;
  }
  return `<div style="width:${size};height:${size};border-radius:50%;background:${club.avatarBg};color:${club.avatarColor};display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:${fontSize};font-weight:700;flex-shrink:0;${extraStyle}">${club.initials}</div>`;
}
