import React from 'react';

function Biography({ bioKey, onNavigate }) {
  const biographies = {
    'martin-garrix-bio': {
      title: 'Martin Garrix: The Dutch Prodigy',
      author: 'EchoWave Team • Jan 10, 2025',
      img: 'https://dynamicmedia.livenationinternational.com/u/p/v/2acb5db0-fee0-4b3e-a462-18d82f529191.jpg?format=webp&width=3840&quality=75',
      content: [
        'Martin Garrix is a Dutch DJ, producer, and songwriter who has become one of the most influential figures in modern electronic dance music. Born Martijn Gerard Garritsen on May 14, 1996, in Amstelveen, Netherlands, he broke onto the global scene at just 17 years old with his explosive 2013 hit "Animals," a track that redefined big-room EDM and became a festival anthem worldwide.',
        '## The Early Years',
        'Growing up in Amstelveen, just outside Amsterdam, Garrix showed an early interest in music. He began playing guitar at age 8 and started experimenting with digital audio workstations by 11. His musical education included studying at the Herman Brood Academy, a prestigious music production school in Utrecht, where he honed his production skills and developed his signature sound.',
        '## Global Breakthrough with "Animals"',
        'Released in 2013, "Animals" became an instant global phenomenon. The track\'s minimalistic yet powerful drop, featuring a distinctive synth lead and driving bassline, captured the energy of the big-room house movement. It topped charts in over 10 countries, including the UK, Belgium, and his native Netherlands, and has since been certified multi-platinum in numerous territories. The success of "Animals" catapulted Garrix from an unknown teenager to an international star virtually overnight.',
        '## Musical Evolution and Versatility',
        'Known for his high-energy sound, melodic drops, and constant evolution, Garrix has collaborated with some of the biggest names in music, including Dua Lipa ("Scared to Be Lonely"), Khalid ("Ocean"), Usher ("Don\'t Look Down"), Bonn, and David Guetta. His versatility spans progressive house, future bass, pop, and club-driven EDM, allowing him to dominate both mainstream charts and underground festival stages.',
        '## STMPD RCRDS: Building an Empire',
        'In 2016, seeking creative independence, Garrix founded his own label, STMPD RCRDS. The label name comes from "stamped records," reflecting his desire to leave a lasting mark on the industry. STMPD RCRDS has grown into a respected force in the electronic music industry, showcasing both established artists and emerging talent while maintaining Garrix\'s commitment to musical innovation.',
        '## Festival Dominance and Awards',
        'A regular headliner at the world\'s biggest festivals—such as Tomorrowland, Ultra Music Festival, and Coachella—Martin Garrix has repeatedly been ranked #1 DJ in the world by DJ Mag\'s Top 100 DJs poll. His visually stunning live shows, featuring synchronized fireworks, lasers, and massive LED screens, have set new standards for festival production.',
        '## Legacy and Influence',
        'Despite his massive success, Garrix remains known for his humility, passion for music, and relentless work ethic. He has become a role model for aspiring producers worldwide, proving that age is no barrier to artistic achievement. Today, Martin Garrix continues to push the boundaries of EDM, shaping the sound of a new generation while staying true to the energy that launched his career.',
        '## Key Achievements',
        '- Youngest DJ ever to headline Tomorrowland (age 17)',
        '- Multiple #1 rankings in DJ Mag\'s Top 100 DJs poll',
        '- Over 10 billion streams across platforms',
        '- Performances at three consecutive Olympic closing ceremonies',
        '- Collaboration with the Dutch National Opera for a unique classical-electronic fusion project'
      ],
      summary: 'From teenage prodigy to global EDM icon, Martin Garrix has redefined electronic music with hits like "Animals" and built an empire with his label STMPD RCRDS.',
      stats: {
        birthDate: 'May 14, 1996',
        birthPlace: 'Amstelveen, Netherlands',
        genre: 'Progressive House, Big Room, Future Bass',
        activeYears: '2012 - Present',
        labels: 'STMPD RCRDS (own label)',
        notableWorks: '"Animals", "Scared to Be Lonely", "In the Name of Love"'
      }
    },
    'armin-bio': {
      title: 'Armin van Buuren: The Trance Emperor',
      author: 'EchoWave Team • Jan 10, 2025',
      img: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1200&q=80',
      content: [
        'Armin van Buuren is a Dutch DJ, record producer, and remixer who has been a dominant force in the trance music scene for over two decades. Born on December 25, 1976, in Leiden, Netherlands, he is best known for his "A State of Trance" radio show, which reaches millions of listeners worldwide and has become the most influential trance platform in the world.',
        '## The Rise of a Trance Legend',
        'Van Buuren began producing music in his teenage years, studying law at Leiden University while pursuing music as a passion. His breakthrough came in 1999 with the track "Blue Fear," which gained international recognition. However, it was his 2003 hit "Communication" that truly established him as a global trance superstar.',
        '## A State of Trance Empire',
        'Launched in 2001, "A State of Trance" (ASOT) started as a two-hour weekly radio show but has grown into a multimedia empire. The show broadcasts to over 40 million listeners in 84 countries and has spawned massive worldwide events, with the annual ASOT festival in Utrecht drawing over 30,000 trance enthusiasts.',
        '## Musical Mastery and Innovations',
        'Armin has been voted the world\'s number one DJ five times in DJ Mag\'s Top 100 DJs poll—a record he shares with no other artist. His ability to evolve with the times while staying true to trance\'s emotional core has kept him relevant across generations. His productions range from euphoric vocal trance to harder tech-trance, always maintaining the genre\'s signature emotional uplift.',
        '## Legacy and Industry Impact',
        'Beyond his music, Armin has mentored countless producers through his Armada Music label (co-founded with Maykel Piron and David Lewis). He has performed at every major festival worldwide and continues to be trance music\'s most recognizable ambassador, proving that trance remains a vital and evolving genre in the global EDM landscape.'
      ],
      summary: 'Armin van Buuren, the five-time world\'s #1 DJ, has shaped trance music for over two decades through his iconic "A State of Trance" brand and groundbreaking productions.',
      stats: {
        birthDate: 'December 25, 1976',
        birthPlace: 'Leiden, Netherlands',
        genre: 'Trance, Progressive Trance',
        activeYears: '1996 - Present',
        labels: 'Armada Music (co-founder)',
        notableWorks: '"Communication", "This Is What It Feels Like", "Blah Blah Blah"'
      }
    },
    'amelie-lens-bio': {
      title: 'Amelie Lens: The Belgian Techno Force',
      author: 'EchoWave Team • Jan 15, 2025',
      img: 'https://assets.beatportal.com/images/transforms/content-item/_1334x750_crop_center-center_none/150468/Amelie-Lens-Beatport-Playlist-of-the-Week-1536x715-1718807467.webp',
      content: [
        'Amelie Lens is a Belgian DJ, producer, and label owner known for her fast, driving, and uncompromising techno sound. Born on May 31, 1990, in Belgium, she rose from the underground scene to global prominence through her relentless energy, precise mixing, and deeply immersive performances.',
        '## The Underground Ascent',
        'Lens first gained international recognition through releases on influential labels such as Second State, Drumcode, and Suara, where her high-BPM, acid-infused productions quickly caught the attention of the global techno community. Her sound is characterized by pounding kick drums, hypnotic synth lines, and a raw intensity that dominates dance floors worldwide.',
        '## Building the Exhale Empire',
        'In 2018, she launched her own label and event series, Exhale, creating a platform dedicated to pushing forward-thinking techno while fostering a strong sense of community within the scene. Exhale has since grown into a respected global brand, hosting sold-out events and showcasing emerging and established artists alike.',
        '## Festival Dominance and Performances',
        'A regular headliner at the world\'s most prestigious techno festivals and clubs—including Tomorrowland, Awakenings, Time Warp, Ultra, and Fabric—Amelie Lens is celebrated for her marathon DJ sets and unwavering connection with the crowd. Her performances are focused, powerful, and built for total immersion.',
        '## The Art of Techno',
        'Driven by authenticity, discipline, and passion, Amelie Lens continues to shape the future of modern techno. She stands as one of the genre\'s most influential and respected artists, maintaining the delicate balance between underground credibility and global recognition.',
        '## Key Milestones',
        '- Founded the influential label and event series Exhale in 2018',
        '- Resident at legendary clubs including Labyrinth Club (Hasselt) and Kompass (Ghent)',
        '- Named "Best Belgian Act" at the Red Bull Elektropedia Awards',
        '- Regularly features in DJ Mag\'s Top 100 DJs poll',
        '- Known for her iconic all-black aesthetic and powerful stage presence',
        '- Advocate for mental health awareness within the electronic music industry'
      ],
      summary: 'Amelie Lens, the Belgian techno powerhouse, has redefined modern techno with her relentless energy and influential Exhale brand.',
      stats: {
        birthDate: 'May 31, 1990',
        birthPlace: 'Antwerp, Belgium',
        genre: 'Techno, Acid Techno',
        activeYears: '2014 - Present',
        labels: 'Exhale (own label), Drumcode, Second State',
        notableWorks: '"Feel It", "In My Mind", "Contradiction"'
      }
    },
    'charlotte-bio': {
      title: 'Charlotte de Witte: The Queen of Techno',
      author: 'EchoWave Team • Jan 15, 2025',
      img: 'https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png',
      content: [
        'Charlotte de Witte is a Belgian DJ and producer widely regarded as one of the most powerful forces in contemporary techno. Born on July 21, 1992, in Ghent, Belgium, she rose to prominence through her uncompromising sound—dark, driving, and minimalist—quickly earning global recognition within the underground techno scene.',
        '## From Raving George to Charlotte de Witte',
        'Initially performing under the alias Raving George, de Witte transitioned to using her real name in 2015, marking a turning point in her artistic identity. This shift coincided with a deeper commitment to raw, high-BPM techno, characterized by heavy basslines, acid influences, and hypnotic rhythms. Her releases on respected labels such as Drumcode, Turbo Recordings, and NovaMute helped cement her reputation as a leading innovator of modern techno.',
        '## The KNTXT Revolution',
        'In 2019, she founded her own label, KNTXT, designed as a platform for forward-thinking techno artists and a reflection of her sonic vision. The label has since become a defining brand in the global techno landscape, hosting events and releases that consistently push boundaries.',
        '## Global Techno Ambassador',
        'A dominant presence on the world\'s biggest stages, Charlotte de Witte is a regular headliner at major festivals and clubs including Tomorrowland, Awakenings, Time Warp, Ultra, and Printworks. Known for her intense, marathon DJ sets and precise track selection, she has built a reputation for delivering relentless energy and total immersion on the dance floor.',
        '## Legacy and Impact',
        'With a focus on authenticity and artistic integrity, Charlotte de Witte continues to shape the future of techno, bridging underground culture with global impact—without compromising the raw spirit of the genre.',
        '## Career Highlights',
        '- Transitioned from Raving George to Charlotte de Witte in 2015',
        '- Founded the influential label KNTXT in 2019',
        '- First female DJ to headline Tomorrowland\'s Mainstage',
        '- Named "Best Techno Artist" at the DJ Awards Ibiza',
        '- Known for her signature dark, minimalistic techno sound',
        '- Advocate for gender equality in the electronic music industry',
        '- Regular resident at Belgium\'s legendary Fuse club'
      ],
      summary: 'Charlotte de Witte has emerged as techno\'s most powerful female voice, combining raw energy with artistic integrity through her KNTXT label.',
      stats: {
        birthDate: 'July 21, 1992',
        birthPlace: 'Ghent, Belgium',
        genre: 'Techno, Acid Techno',
        activeYears: '2011 - Present',
        labels: 'KNTXT (own label), Drumcode',
        notableWorks: '"Selected", "Your Mind", "The Healer"'
      }
    },
    'nina-bio': {
      title: 'Nina Kraviz: The Siberian Techno Visionary',
      author: 'EchoWave Team • Jan 15, 2025',
      img: 'https://w0.peakpx.com/wallpaper/662/599/HD-wallpaper-nina-kraviz-russian-dj-portrait-hoot-popular-djs.jpg',
      content: [
        'Nina Kraviz is a Russian DJ, producer, and label owner known for her raw, hypnotic approach to techno and her fearless artistic identity. Born in Siberia and originally trained as a dentist, she transitioned into music and quickly became one of the most distinctive and influential figures in the global techno scene.',
        '## From Dentistry to Decks',
        'Emerging from the underground with releases on respected labels such as Rekids, Underground Quality, and Rush Hour, Kraviz gained international attention for her minimalist, acid-driven sound and emotionally charged productions. Her music often blends dark techno with elements of house, acid, and experimental electronica, creating an atmosphere that is both intense and deeply personal.',
        '## The Trip Label',
        'In 2014, she founded her own label, трип (trip), which has since become a platform for boundary-pushing electronic music and rare archival releases. The label reflects Kraviz\'s eclectic taste and commitment to preserving the raw, unconventional spirit of underground dance music.',
        '## The Art of Performance',
        'Renowned for her unpredictable DJ sets and immersive performances, Nina Kraviz has headlined many of the world\'s most prestigious clubs and festivals, including Berghain, Awakenings, Time Warp, Sonar, and Dekmantel. Her ability to seamlessly move between hard, fast techno and slower, atmospheric selections has earned her a reputation as a true curator of sound rather than a formula-driven performer.',
        '## Vision and Influence',
        'Bold, uncompromising, and constantly evolving, Nina Kraviz continues to challenge expectations and redefine what it means to be an artist in modern electronic music.',
        '## Notable Achievements',
        '- Trained as a dentist before pursuing music full-time',
        '- Founded the influential трип (trip) label in 2014',
        '- Known for her eclectic style blending techno, acid, and experimental sounds',
        '- Regular performer at Berlin\'s legendary Berghain club',
        '- Advocate for artistic freedom and creative expression',
        '- Featured in Resident Advisor\'s annual Top 100 DJs poll',
        '- Known for her distinct vocal style in both productions and DJ sets'
      ],
      summary: 'Nina Kraviz, the Siberian-born techno innovator, has redefined electronic music with her raw sound and uncompromising artistic vision.',
      stats: {
        birthDate: 'February 7, 1982',
        birthPlace: 'Irkutsk, Siberia, Russia',
        genre: 'Techno, Acid Techno, House',
        activeYears: '2008 - Present',
        labels: 'трип (trip) - own label',
        notableWorks: '"Ghetto Kraviz", "Mr. Jones", "Pain in the Ass"'
      }
    },
    'afrojack-bio': {
      title: 'Afrojack: The Dutch Hitmaker',
      author: 'EchoWave Team • Jan 20, 2025',
      img: 'https://edm.com/.image/t_share/MTc1NjQzMjYzMDQ5OTM0MDQ5/afrojack.jpg',
      content: [
        'Afrojack, born Nick van de Wall on September 9, 1987, in Spijkenisse, Netherlands, is a Grammy-winning DJ, record producer, and remixer known for his high-energy electro house productions and collaborations with pop superstars.',
        '## Rise to Fame',
        'Afrojack gained international recognition with his 2010 hit "Take Over Control" featuring Eva Simons. His breakthrough came in 2011 when he produced and co-wrote Pitbull\'s "Give Me Everything," which topped charts worldwide and earned him a Grammy nomination.',
        '## Musical Style and Influence',
        'Known for his signature "dirty Dutch" sound—characterized by aggressive synth lines, heavy bass drops, and explosive energy—Afrojack has become one of electronic music\'s most recognizable producers. His collaborations span the biggest names in pop, including Beyoncé, Madonna, and David Guetta.',
        '## Wall Recordings',
        'In 2007, Afrojack founded his own label, Wall Recordings, which has become a platform for emerging talent while releasing his own chart-topping hits like "Ten Feet Tall" and "SummerThing!"',
        '## Legacy and Achievements',
        '- Grammy Award winner for Best Remixed Recording',
        '- Regularly ranked in DJ Mag\'s Top 100 DJs',
        '- Resident DJ at Hakkasan Las Vegas',
        '- Performed at major festivals worldwide including Tomorrowland, Ultra, and Coachella'
      ],
      summary: 'Afrojack, the Grammy-winning Dutch producer, has shaped modern electro house with his "dirty Dutch" sound and high-profile pop collaborations.',
      stats: {
        birthDate: 'September 9, 1987',
        birthPlace: 'Spijkenisse, Netherlands',
        genre: 'Electro House, Big Room, EDM',
        activeYears: '2007 - Present',
        labels: 'Wall Recordings (own label)',
        notableWorks: '"Take Over Control", "Ten Feet Tall", "Turn Up the Speakers"'
      }
    },
    'zedd-bio': {
      title: 'Zedd: The Classically Trained Virtuoso',
      author: 'EchoWave Team • Jan 20, 2025',
      img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=80',
      content: [
        'Anton Zaslavski, known professionally as Zedd, is a Russian-German DJ, record producer, and songwriter renowned for his melodic, complex productions that blend classical training with cutting-edge electronic music.',
        '## Classical Background',
        'Born on September 2, 1989, in Kaiserslautern, Germany, Zedd began playing piano at age four and later studied classical music and jazz. This musical foundation gives his electronic productions a unique sophistication and attention to detail.',
        '## Breakthrough Success',
        'Zedd gained international fame with his 2012 debut album "Clarity," featuring the title track with Foxes. The song earned him a Grammy for Best Dance Recording in 2014, establishing him as a major force in EDM.',
        '## Production Mastery',
        'Known for his meticulous production techniques, Zedd creates intricate soundscapes that blend progressive house, electro, and pop elements. His hit "The Middle" with Maren Morris and Grey became one of 2018\'s biggest cross-genre successes.',
        '## Visual Artistry',
        'Beyond music, Zedd is known for his distinctive visual style, often incorporating anime and futuristic aesthetics into his album artwork and stage productions.',
        '## Key Achievements',
        '- Grammy Award for Best Dance Recording ("Clarity")',
        '- Multiple Billboard Music Awards',
        '- Collaborations with Ariana Grande, Selena Gomez, and Justin Bieber',
        '- Sold-out world tours and headline performances at major festivals'
      ],
      summary: 'Zedd combines classical training with electronic innovation, creating sophisticated productions that have earned him Grammy recognition and global acclaim.',
      stats: {
        birthDate: 'September 2, 1989',
        birthPlace: 'Kaiserslautern, Germany',
        genre: 'Progressive House, Electro House, Pop',
        activeYears: '2010 - Present',
        labels: 'Interscope Records',
        notableWorks: '"Clarity", "Stay", "The Middle"'
      }
    },
    'alesso-bio': {
      title: 'Alesso: The Swedish Melodic Master',
      author: 'EchoWave Team • Jan 20, 2025',
      img: 'https://assets.rockwerchter.be/files/2022-10/alesso-3.jpg',
      content: [
        'Alessandro Lindblad, known as Alesso, is a Swedish DJ and record producer celebrated for his euphoric melodies, progressive house anthems, and emotional dance music that has dominated festivals worldwide.',
        '## Stockholm Beginnings',
        'Born on July 7, 1991, in Stockholm, Sweden, Alesso began producing music at 16, inspired by Swedish House Mafia. His early releases on Sebastian Ingrosso\'s label Refune Records quickly gained attention in the EDM community.',
        '## Festival Anthems',
        'Alesso rose to prominence with festival anthems like "Calling (Lose My Mind)" with Sebastian Ingrosso and "Years" featuring Matthew Koma. His 2015 debut album "Forever" showcased his ability to create emotional, melody-driven progressive house.',
        '## Mainstream Crossovers',
        'Alesso successfully bridged EDM and pop with hits like "Heroes (we could be)" featuring Tove Lo and "Let Me Go" with Hailee Steinfeld. His remix of OneRepublic\'s "If I Lose Myself" became one of the most-played EDM tracks of 2013.',
        '## Live Performance Excellence',
        'Known for his energetic performances and emotional connection with audiences, Alesso has headlined every major festival including Tomorrowland, Ultra, and Coachella, often closing events with his signature track "If I Lose Myself."',
        '## Career Highlights',
        '- Coachella main stage headliner',
        '- Created official anthem for UEFA Euro 2016',
        '- Collaborations with Calvin Harris, David Guetta, and Usher',
        '- Multiple platinum-certified singles worldwide'
      ],
      summary: 'Alesso, the Swedish progressive house maestro, creates emotional festival anthems that have made him one of electronic music\'s most beloved artists.',
      stats: {
        birthDate: 'July 7, 1991',
        birthPlace: 'Stockholm, Sweden',
        genre: 'Progressive House, EDM',
        activeYears: '2010 - Present',
        labels: 'Refune Records, Def Jam',
        notableWorks: '"Heroes", "If I Lose Myself", "Years"'
      }
    },
    'kygo-bio': {
      title: 'Kygo: The Tropical House Pioneer',
      author: 'EchoWave Team • Jan 20, 2025',
      img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1200&q=80',
      content: [
        'Kyrre Gørvell-Dahll, known as Kygo, is a Norwegian DJ, record producer, and songwriter who pioneered the tropical house genre, bringing relaxed, melodic electronic music to global mainstream audiences.',
        '## The SoundCloud Sensation',
        'Born on September 11, 1991, in Singapore and raised in Norway, Kygo gained viral fame in 2013 with his remix of Ed Sheeran\'s "I See Fire." The track amassed over 60 million plays on SoundCloud, launching his career.',
        '## Defining Tropical House',
        'Kygo\'s signature sound—characterized by marimba melodies, relaxed beats, and feel-good vibes—created a new subgenre that contrasted with the aggressive drops dominating EDM at the time. His debut single "Firestone" featuring Conrad Sewell became an international hit.',
        '## Record-Breaking Success',
        'Kygo became the fastest artist to reach one billion streams on Spotify, and his debut album "Cloud Nine" (2016) was the first tropical house album to chart globally. His performance at the 2016 Rio Olympics closing ceremony introduced his sound to billions.',
        '## Musical Evolution',
        'While maintaining his tropical roots, Kygo has expanded his sound to include pop collaborations (with Selena Gomez, Whitney Houston) and more diverse electronic elements. His label, Palm Tree Records, reflects his laid-back aesthetic.',
        '## Notable Achievements',
        '- Fastest to 1 billion Spotify streams',
        '- Performed at Rio Olympics closing ceremony',
        '- First tropical house artist to headline Coachella',
        '- Multiple chart-topping singles across 30+ countries'
      ],
      summary: 'Kygo revolutionized electronic music with his tropical house sound, becoming one of streaming\'s most successful artists and bringing relaxed vibes to global audiences.',
      stats: {
        birthDate: 'September 11, 1991',
        birthPlace: 'Singapore (raised in Norway)',
        genre: 'Tropical House, Deep House',
        activeYears: '2013 - Present',
        labels: 'Palm Tree Records (own label)',
        notableWorks: '"Firestone", "Stole the Show", "It Ain\'t Me"'
      }
    },
    'david-guetta-bio': {
      title: 'David Guetta: The Global EDM Ambassador',
      author: 'EchoWave Team • Jan 20, 2025',
      img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
      content: [
        'Pierre David Guetta is a French DJ, record producer, and songwriter who played a pivotal role in bringing electronic dance music to the global mainstream, bridging the gap between underground club culture and pop music.',
        '## Parisian Beginnings',
        'Born on November 7, 1967, in Paris, France, Guetta began DJing in Paris clubs in the 1980s. His early residencies at legendary venues like Le Palace helped shape France\'s emerging house music scene.',
        '## The Pop-EDM Revolution',
        'Guetta\'s 2009 album "One Love" revolutionized music by fusing electronic production with mainstream pop vocals. Hits like "When Love Takes Over" (with Kelly Rowland) and "Sexy Bitch" (with Akon) brought EDM to pop radio worldwide.',
        '## Collaborations and Influence',
        'Known as "the collaboration king," Guetta has worked with virtually every major pop star including Sia, Nicki Minaj, Rihanna, and Usher. His ability to identify vocal talent and create crossover hits has made him one of music\'s most influential figures.',
        '## Festival Icon',
        'As a regular headliner at every major festival, Guetta\'s high-energy performances and hit-packed sets have made him one of the world\'s most in-demand DJs. His residencies in Las Vegas and Ibiza are legendary.',
        '## Legacy and Awards',
        '- Two Grammy Awards',
        '- Billboard Music Award for Top Dance/Electronic Artist',
        '- Over 50 million records sold worldwide',
        '- Named number one DJ in DJ Mag\'s Top 100 DJs poll twice',
        '- Instrumental in the 2010s EDM boom'
      ],
      summary: 'David Guetta, the French DJ and producer, bridged EDM and pop music, becoming one of electronic music\'s most influential figures and bringing dance music to global mainstream audiences.',
      stats: {
        birthDate: 'November 7, 1967',
        birthPlace: 'Paris, France',
        genre: 'House, Electro House, EDM',
        activeYears: '1984 - Present',
        labels: 'Jack Back Records, Parlophone',
        notableWorks: '"When Love Takes Over", "Titanium", "Without You"'
      }
    },
    'r3hab-bio': {
      title: 'R3hab: The Dutch-Moroccan Hitmaker',
      author: 'EchoWave Team • Feb 15, 2025',
      img: 'https://i.scdn.co/image/ab6761610000e5ebf0a971f5bda50f7abfc6cec0',
      content: [
        'Fadil El Ghoul, known professionally as R3hab, is a Dutch-Moroccan DJ, record producer, and remixer who has become one of the most prolific and versatile artists in modern electronic dance music.',
        '## Early Career and Breakthrough',
        'Born on April 2, 1986, in Breda, Netherlands, R3hab started his music career in the late 2000s. His breakthrough came through collaborations with Dutch superstar Afrojack, and his 2012 track "The Bottle Song" with Deorro became a viral hit, establishing him as a force in the big-room house scene.',
        '## The "R3hab Sound"',
        'Known for his energetic productions, catchy melodies, and hard-hitting drops, R3hab has developed a signature sound that blends big-room house, progressive house, and festival-oriented EDM. His remixes for major pop artists have garnered hundreds of millions of streams and earned him recognition as one of the most sought-after remixers in the industry.',
        '## Chart Success and Collaborations',
        'R3hab has achieved massive chart success with tracks like "All Around The World (La La La)" with A Touch of Class, "Flames" with Zayn and Jungleboi, and "Lullaby" with Mike Williams. He has collaborated with top artists including Ava Max, Sofia Carson, Luis Fonsi, and Ellie Goulding.',
        '## Ibiza Residency and Global Performances',
        'A regular fixture in Ibiza, R3hab has held residencies at some of the island\'s most iconic venues including Ushuaïa Ibiza Beach Hotel and Hï Ibiza. His high-energy performances and ability to connect with diverse crowds have made him a favorite on the White Isle.',
        '## Musical Versatility',
        'Unlike many EDM producers who stick to one style, R3hab has demonstrated remarkable versatility, producing everything from hard-hitting festival anthems to melodic progressive house and even venturing into pop and Latin-infused tracks. This adaptability has allowed him to remain relevant through changing musical trends.',
        '## Career Highlights',
        '- Over 6 billion streams across platforms',
        '- Named #1 most-played artist on SiriusXM BPM',
        '- Multiple Billboard Dance Chart #1 hits',
        '- Regular performer at Tomorrowland, Ultra, and EDC',
        '- Ibiza residencies at Ushuaïa and Hï Ibiza',
        '- Founder of CYB3RPVNK record label',
        '- Known for his high-energy performances and distinctive DJ sets'
      ],
      summary: 'R3hab, the Dutch-Moroccan DJ and producer, has become a global EDM phenomenon with chart-topping hits and legendary Ibiza performances.',
      stats: {
        birthDate: 'April 2, 1986',
        birthPlace: 'Breda, Netherlands',
        genre: 'Big Room House, Progressive House, EDM',
        activeYears: '2007 - Present',
        labels: 'CYB3RPVNK (own label)',
        notableWorks: '"All Around The World", "Flames", "Lullaby"'
      }
    },
    'calvin-harris-bio': {
      title: 'Calvin Harris: The Scottish Hit Machine',
      author: 'EchoWave Team • Feb 10, 2025',
      img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80',
      content: [
        'Adam Richard Wiles, known professionally as Calvin Harris, is a Scottish DJ, record producer, singer, and songwriter who holds the Guinness World Record for the most top 10 singles from one studio album on the UK Singles Chart.',
        '## From Supermarket Clerk to Superstar',
        'Born on January 17, 1984, in Dumfries, Scotland, Harris began making music in his bedroom. His breakthrough came in 2007 with the single "Acceptable in the 80s," followed by his debut album "I Created Disco."',
        '## Chart Domination',
        'Calvin Harris became one of the world\'s highest-paid DJs with hits like "We Found Love" (with Rihanna), "Summer," "Sweet Nothing" (with Florence Welch), and "This Is What You Came For" (with Rihanna). His 2012 album "18 Months" spent 154 weeks on the UK Albums Chart.',
        '## Production Mastery',
        'Known for his ability to create perfect pop-EDM crossover tracks, Harris has worked with virtually every major pop star including Rihanna, Dua Lipa, Sam Smith, and Frank Ocean.',
        '## Vegas Residency King',
        'His residencies in Las Vegas have broken attendance records, cementing his status as one of the most commercially successful electronic artists of all time.',
        '## Notable Records',
        '- Guinness World Record: Most top 10 singles from one album (9 from "18 Months")',
        '- First British solo artist to reach one billion streams on Spotify',
        '- Multiple Brit Award and Grammy Award winner',
        '- Highest-paid DJ in the world for multiple consecutive years',
        '- Developed the "Harris sound" that dominated 2010s pop radio'
      ],
      summary: 'Calvin Harris, the Scottish hitmaker, has dominated pop and EDM charts with record-breaking success and some of the decade\'s biggest dance anthems.',
      stats: {
        birthDate: 'January 17, 1984',
        birthPlace: 'Dumfries, Scotland',
        genre: 'EDM, House, Electro Pop',
        activeYears: '2002 - Present',
        labels: 'Columbia Records',
        notableWorks: '"We Found Love", "Summer", "This Is What You Came For"'
      }
    },
    'chainsmokers-bio': {
      title: 'The Chainsmokers: American Pop-EDM Duo',
      author: 'EchoWave Team • Feb 10, 2025',
      img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80',
      content: [
        'The Chainsmokers are an American DJ and production duo consisting of Alexander "Alex" Pall and Andrew "Drew" Taggart. Known for their blend of EDM and pop, they rose to fame with their 2014 hit "#Selfie" before establishing themselves as serious hitmakers.',
        '## Viral Beginnings',
        'Formed in 2012 in New York City, The Chainsmokers gained initial attention with their satirical track "#Selfie" in 2014, which went viral and peaked at number 16 on the US Billboard Hot 100.',
        '## Evolution into Hitmakers',
        'The duo evolved from novelty act to respected producers with hits like "Roses" (featuring ROZES), "Don\'t Let Me Down" (featuring Daya), and "Closer" (featuring Halsey). "Closer" spent 12 consecutive weeks at number one on the Billboard Hot 100.',
        '## Singer-Songwriter Transition',
        'Unlike most EDM acts, The Chainsmokers began singing on their own tracks starting with "Paris" and "Something Just Like This" (with Coldplay), establishing a unique identity in the electronic music scene.',
        '## Business Ventures',
        'Beyond music, they\'ve launched investment funds, a podcast, and have become known for their savvy business acumen and social media presence.',
        '## Major Achievements',
        '- Grammy Award for Best Dance Recording ("Don\'t Let Me Down")',
        '- Multiple Billboard Music Awards',
        '- "Closer" broke records for longest-running #1 on Billboard Hot 100 by a duo',
        '- Sold-out world tours and headline festival performances',
        '- Successful transition from DJs to singer-songwriters'
      ],
      summary: 'The Chainsmokers evolved from viral sensations to Grammy-winning hitmakers, successfully blending EDM production with pop songwriting and vocal performances.',
      stats: {
        birthDate: 'Alex Pall: May 16, 1985 | Drew Taggart: December 31, 1989',
        birthPlace: 'New York City, USA',
        genre: 'EDM, Pop, Future Bass',
        activeYears: '2012 - Present',
        labels: 'Disruptor Records, Columbia',
        notableWorks: '"Closer", "Don\'t Let Me Down", "Something Just Like This"'
      }
    },
    'tiesto-bio': {
      title: 'Tiësto: The Godfather of EDM',
      author: 'EchoWave Team • Feb 10, 2025',
      img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
      content: [
        'Tijs Michiel Verwest, known professionally as Tiësto, is a Dutch DJ and record producer who has been instrumental in bringing trance and electronic dance music to global mainstream audiences. Often called "The Godfather of EDM," he has inspired generations of electronic musicians.',
        '## Early Trance Pioneer',
        'Born on January 17, 1969, in Breda, Netherlands, Tiësto began DJing in the early 1990s. His early work in trance music, particularly his "Magik" and "In Search of Sunrise" compilation series, established him as a leading figure in the genre.',
        '## Olympic History',
        'In 2004, Tiësto made history by becoming the first DJ to perform at the Olympic Games, playing at the opening ceremony of the Athens Olympics—a performance that introduced electronic music to billions worldwide.',
        '## Evolution and Mainstream Success',
        'While starting in trance, Tiësto successfully transitioned to more mainstream EDM and house music in the 2010s. His 2009 album "Kaleidoscope" featured collaborations with pop artists, while tracks like "Red Lights" and "Wasted" brought him commercial success.',
        '## Las Vegas Legacy',
        'As a pioneer of the Las Vegas DJ residency model, Tiësto\'s Hakkasan residency helped establish Vegas as an EDM destination and transformed how DJs approach live performances.',
        '## Career Milestones',
        '- First DJ to perform at the Olympic Games (Athens 2004)',
        '- Three-time DJ Mag Top 100 DJs #1 (2002-2004)',
        '- Grammy Award winner for Best Remixed Recording',
        '- Performed for the largest solo concert audience in history (250,000 in Rio)',
        '- Instrumental in popularizing DJ residencies in Las Vegas'
      ],
      summary: 'Tiësto, the Dutch pioneer who performed at the Olympics, has shaped electronic music for decades while successfully evolving from trance icon to mainstream EDM superstar.',
      stats: {
        birthDate: 'January 17, 1969',
        birthPlace: 'Breda, Netherlands',
        genre: 'Trance, Progressive House, EDM',
        activeYears: '1994 - Present',
        labels: 'Musical Freedom (own label)',
        notableWorks: '"Adagio for Strings", "Red Lights", "Wasted"'
      }
    }
  };

  const bio = biographies[bioKey];

  if (!bio) {
    return (
      <div className="min-h-screen bg-white text-black font-sans">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wide text-purple-600">EchoWave</h1>
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Back to Home
            </button>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Biography Not Found</h1>
          <p className="text-gray-600 mb-8">The biography you're looking for doesn't exist.</p>
          <button
            onClick={() => onNavigate('home')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 
            className="text-2xl font-bold tracking-wide text-purple-600 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            EchoWave
          </h1>
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            ← Back to Home
          </button>
        </div>
      </nav>

      {/* Biography Content */}
      <article className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={bio.img} 
                alt={bio.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Biography Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                {bio.title}
              </h1>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="font-semibold text-purple-600">{bio.author}</span>
              </div>
            </header>

            {/* Biography Body */}
            <div className="prose prose-lg max-w-none">
              {bio.content.map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={index} className="text-gray-700 leading-relaxed ml-6 mb-2">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Artist Stats Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <h3 className="font-bold text-lg mb-4 text-purple-900">Quick Facts</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">Birth Date</div>
                    <div className="text-sm text-gray-900">{bio.stats.birthDate}</div>
                  </div>
                  <div>
                    <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">Birthplace</div>
                    <div className="text-sm text-gray-900">{bio.stats.birthPlace}</div>
                  </div>
                  <div>
                    <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">Genre</div>
                    <div className="text-sm text-gray-900">{bio.stats.genre}</div>
                  </div>
                  <div>
                    <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">Active Years</div>
                    <div className="text-sm text-gray-900">{bio.stats.activeYears}</div>
                  </div>
                  <div>
                    <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">Labels</div>
                    <div className="text-sm text-gray-900">{bio.stats.labels}</div>
                  </div>
                  <div>
                    <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">Notable Works</div>
                    <div className="text-sm text-gray-900">{bio.stats.notableWorks}</div>
                  </div>
                </div>
              </div>

              {/* Actions Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-4">Follow & Listen</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    <span>🎵</span>
                    <span className="font-medium">Listen on Spotify</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                    <span>📱</span>
                    <span className="font-medium">Follow on Instagram</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                    <span>🐦</span>
                    <span className="font-medium">Follow on Twitter</span>
                  </button>
                </div>
              </div>

              {/* Share Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-4">Share Biography</h3>
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm">
                    Facebook
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm">
                    Twitter
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-8 py-6 text-center text-sm text-gray-600 mt-16">
        <p>© 2025 EchoWave. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
            Facebook
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Biography;
        