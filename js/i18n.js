// === Internationalization (i18n) ===

// Translation strings
const strings = {
  en: {
    brand: "Community Hope",
    tagline: "Support • Shelter • Opportunity",
    nav_home: "Home",
    nav_about: "About Us",
    nav_history: "Our History",
    nav_programs: "Programs",
    nav_media: "Media",
    nav_donate: "Donate",
    nav_contact: "Contact",
    hero_title: "Building Hope. Strengthening Community.",
    hero_sub: "Together, we provide support, shelter, and opportunities for a better future.",
    cta_donate: "Donate Now",
    cta_learn: "Learn More",
    about_title: "Who We Are",
    about_kicker: "Community‑driven • Nonprofit • Local impact",
    about_mission_h: "Our Mission",
    about_mission_p: "We empower families and individuals through safe shelter, education, and wraparound support services.",
    about_story_h: "Our Story",
    about_story_p: "Founded by neighbors who care, we've served thousands with dignity and compassion since 2012.",
    about_story_cta: "Read Our History",
    programs_title: "Programs & Services",
    programs_viewall: "View all programs →",
    prog1_h: "Shelter & Support",
    prog1_p: "Emergency beds, case management, and pathways to stable housing.",
    prog2_h: "Youth Education",
    prog2_p: "After‑school tutoring, mentorship, and STEM clubs for teens.",
    prog3_h: "Community Services",
    prog3_p: "Food pantry, legal clinics, and job readiness workshops.",
    stories_title: "Voices from Our Community",
    stories_kicker: "Real stories. Real impact.",
    t1_h: "Resident Story",
    t1_p: "\"With your help, my children have a safe place to sleep and a chance to learn.\"",
    t1_a: "— Amina, mother of two",
    t2_h: "Volunteer Reflection",
    t2_p: "\"I came to give back and found a family. Serving here changed my life.\"",
    t2_a: "— Daniel, mentor",
    donate_title: "Your Support Makes a Difference",
    donate_kicker: "Multiple secure payment options available",
    donate_cards_h: "Credit/Debit Cards",
    donate_cards_desc: "Visa, Mastercard, American Express",
    donate_cards_btn: "Donate with Card",
    donate_digital_h: "Digital Wallets",
    donate_digital_desc: "PayPal, Apple Pay, Google Pay",
    donate_digital_btn: "Donate with Wallet",
    donate_bank_h: "Bank Transfer",
    donate_bank_desc: "Direct bank transfer for larger donations",
    donate_bank_btn: "Get Bank Details",
    donate_crypto_h: "Crypto Donations",
    donate_crypto_desc: "Bitcoin, Ethereum, and other cryptocurrencies",
    donate_crypto_btn: "Crypto Donate",
    live_events_h: "Live Events",
    live_events_desc: "Join our telethons and fundraising events",
    live_events_btn: "View Events",
    vol_h: "Volunteer",
    vol_p: "Join our team of neighbors helping neighbors. One hour can change a life.",
    vol_cta: "Sign Up to Volunteer",
    live_title: "Live Events & Telethons",
    live_kicker: "Join our fundraising events",
    event_live: "LIVE NOW",
    event_telethon_title: "Annual Telethon 2024",
    event_telethon_desc: "Join us for our biggest fundraising event of the year",
    event_goal: "Goal:",
    event_raised: "Raised:",
    event_join_btn: "Join Live Stream",
    event_upcoming_title: "Upcoming Events",
    event_concert: "Community Concert",
    event_workshop: "Volunteer Workshop",
    event_gala: "Annual Gala",
    footer_h: "Contact Us",
    footer_addr: "123 Hope Street, Fairfax, VA",
    footer_home: "Home",
    footer_quick: "Quick Links",
    footer_programs: "Programs",
    footer_donate: "Donate",
    footer_social: "Follow",
    rights: "All rights reserved."
  },
  am: {
    brand: "የማህበረሰብ ተስፋ",
    tagline: "ድጋፍ • መጠለያ • ዕድል",
    nav_home: "ቤት",
    nav_about: "ስለእኛ",
    nav_history: "ታሪካችን",
    nav_programs: "ፕሮግራሞች",
    nav_media: "ሚዲያ",
    nav_donate: "ልገሳ",
    nav_contact: "አድራሻ",
    hero_title: "ተስፋን እና ማህበረሰብን እናበረታታለን",
    hero_sub: "በአንድነት ድጋፍ፣ መጠለያ እና ለወደፊት ዕድሎችን እናቀርባለን።",
    cta_donate: "አሁን ልገሳ ያድርጉ",
    cta_learn: "ተጨማሪ ይወቁ",
    about_title: "እኛ ማነን?",
    about_kicker: "በማህበረሰብ የሚመራ • የጥበቃ ድርጅት • የአካባቢ ተፅእኖ",
    about_mission_h: "ተልእኳችን",
    about_mission_p: "በደህንነት መጠለያ፣ ትምህርት እና የድጋፍ አገልግሎቶች በኩል ቤተሰቦችንና ግል ሰዎችን እናበረታታለን።",
    about_story_h: "ታሪካችን",
    about_story_p: "በሚነካ ጎረቤቶች የተጀመረ፣ ከ2012 ጀምሮ ከሺዎች በላይን በክብር እና በርኅራኄ አገልግለናል።",
    about_story_cta: "ታሪካችንን ያንብቡ",
    programs_title: "ፕሮግራሞች እና አገልግሎቶች",
    programs_viewall: "ሁሉንም ፕሮግራሞች ይመልከቱ →",
    prog1_h: "መጠለያ እና ድጋፍ",
    prog1_p: "የአደጋ አልጋዎች፣ የጉዳይ አያያዝ እና ወደ ዘላቂ መኖሪያ መንገዶች።",
    prog2_h: "የወጣቶች ትምህርት",
    prog2_p: "የትምህርት ቤት በኋላ የትምህርት እርዳታ፣ የመምሪያ እና የSTEM ክለቦች ለወጣቶች።",
    prog3_h: "የማህበረሰብ አገልግሎቶች",
    prog3_p: "የምግብ ቤት፣ የሕግ ክሊኒኮች እና የስራ ዝግጅት ስልጠናዎች።",
    stories_title: "ከማህበረሰባችን ድምፆች",
    stories_kicker: "እውነተኛ ታሪኮች። እውነተኛ ተፅእኖ።",
    t1_h: "የነዋሪ ታሪክ",
    t1_p: "\"በእርስዎ እርዳታ ልጆቼ ደህንነቱ የተጠበቀ ቦታ እና የመማር እድል አላቸው።\"",
    t1_a: "— አሚና፣ የሁለት ልጆች እናት",
    t2_h: "የበጎ ፈቃደኛ አስተያየት",
    t2_p: "\"ለመመለስ መጣሁ እና ቤተሰብ አገኘሁ። እዚህ መስራት ሕይወቴን ቀይሯል።\"",
    t2_a: "— ዳንኤል፣ አማካሪ",
    donate_title: "ድጋፍዎ ልዩነት ያስገኛል",
    donate_kicker: "በርካታ ደህንነቱ የተጠበቀ የመክፈያ አማራጮች ይገኛሉ",
    donate_cards_h: "ክሬዲት/ዴቢት ካርዶች",
    donate_cards_desc: "ቪዛ፣ ማስተርካርድ፣ አሜሪካን ኤክስፕረስ",
    donate_cards_btn: "በካርድ ልገሳ",
    donate_digital_h: "ዲጂታል ዋሌቶች",
    donate_digital_desc: "PayPal፣ Apple Pay፣ Google Pay",
    donate_digital_btn: "በዋሌት ልገሳ",
    donate_bank_h: "የባንክ ማስተላለፍ",
    donate_bank_desc: "ለትላልቅ ልገሳዎች ቀጥተኛ የባንክ ማስተላለፍ",
    donate_bank_btn: "የባንክ ዝርዝሮች ያግኙ",
    donate_crypto_h: "ክሪፕቶ ልገሳዎች",
    donate_crypto_desc: "ቢትኮይን፣ ኢቴሪየም እና ሌሎች ክሪፕቶ ካሬንሲዎች",
    donate_crypto_btn: "ክሪፕቶ ልገሳ",
    live_events_h: "ቀጥተኛ ዝግጅቶች",
    live_events_desc: "በስልክ ዝግጅቶቻችን እና የገንዘብ ማሰባሰብ ዝግጅቶች ይቀላቀሉ",
    live_events_btn: "ዝግጅቶችን ይመልከቱ",
    vol_h: "በጎ ፈቃደኛ",
    vol_p: "ጎረቤቶች ጎረቤቶችን በሚረዱ ቡድናችን ይቀላቀሉ። አንድ ሰዓት ሕይወት ሊቀይር ይችላል።",
    vol_cta: "በጎ ፈቃደኛ ለመሆን ይመዝገቡ",
    live_title: "ቀጥተኛ ዝግጅቶች እና ቴሌቶኖች",
    live_kicker: "በገንዘብ ማሰባሰብ ዝግጅቶቻችን ይቀላቀሉ",
    event_live: "አሁን ቀጥተኛ",
    event_telethon_title: "ዓመታዊ ቴሌቶን 2024",
    event_telethon_desc: "ለዓመቱ ትልቁን የገንዘብ ማሰባሰብ ዝግጅት ይቀላቀሉን",
    event_goal: "ዓላማ:",
    event_raised: "ተሰብስቧል:",
    event_join_btn: "ቀጥተኛ ስትሪም ይቀላቀሉ",
    event_upcoming_title: "የሚመጡ ዝግጅቶች",
    event_concert: "የማህበረሰብ ኮንሰርት",
    event_workshop: "የበጎ ፈቃደኛ ስልጠና",
    event_gala: "ዓመታዊ ጋላ",
    footer_h: "አግኙን",
    footer_addr: "123 ተስፋ ጎዳና፣ ፌርፋክስ፣ VA",
    footer_home: "ቤት",
    footer_quick: "ፈጣን አገናኞች",
    footer_programs: "ፕሮግራሞች",
    footer_donate: "ልገሳ",
    footer_social: "ተከተል",
    rights: "ሁሉም መብቶች የተጠበቁ ናቸው።"
  }
};

// Language switching functionality
function switchLanguage(lang) {
  // Update active language button
  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById('lang-' + lang).classList.add('active');
  
  // Update all text elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (strings[lang] && strings[lang][key]) {
      element.textContent = strings[lang][key];
    }
  });
}

// Initialize language switching
document.addEventListener('DOMContentLoaded', function() {
  // Set up language buttons
  const enButton = document.getElementById('lang-en');
  const amButton = document.getElementById('lang-am');
  
  if (enButton) {
    enButton.addEventListener('click', () => switchLanguage('en'));
  }
  
  if (amButton) {
    amButton.addEventListener('click', () => switchLanguage('am'));
  }
});
