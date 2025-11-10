import { FaCheck } from "react-icons/fa6";
import { evenMoreGeneralQuestions } from "./evenmorequestions";
import copySkill from "./copying-skill.jpg";
import { type Question } from "herowars-library";
const generalQuestions = [
  {
    question: {
      text: [
        "A total of how many Friendship Chips can be obtained per day, not taking group gifts into account?",
      ],
    },
    answer: {
      text: ["1000"],
    },
  },
  {
    question: {
      text: ["A total of how many mentors did Osh the Eternal Keeper have?"],
    },
    answer: {
      text: ["5"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["At what level do Adventures become available?"],
    },
    answer: {
      text: ["40"],
    },
  },
  {
    question: {
      text: ["At what level does the Tower Instant Clear get available?"],
    },
    answer: {
      text: ["130"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "At which level does the player unlock Asgard and the Guild Raid?",
      ],
    },
    answer: {
      text: ["65"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["At which rank does a pet unlock its patronage skill?"],
    },
    answer: {
      text: ["Violet"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["At which rank does patronage become available to pets?"],
    },
    answer: {
      text: ["Blue"],
    },
  },
  {
    question: {
      text: [
        "At which team level can you get Honorable Guardian Boxes for completing daily quest?",
      ],
    },
    answer: {
      text: ["130"],
    },
  },
  {
    question: {
      text: [
        "Capturing which objective gives you the most points in the Guild War?",
      ],
    },
    answer: {
      text: ["Citadel"],
    },
  },
  {
    question: {
      text: ["During which event can Titan Skin Stones NOT be earned?"],
    },
    answer: {
      text: ["Elemental Synergy"],
    },
  },
  {
    question: {
      text: ["How can the Lesser Soul Stone Chest be obtained?"],
    },
    answer: {
      text: ["By logging in 28 days in a month"],
    },
  },
  {
    question: {
      text: ["How can't a Bronze Guild War Trophy be acquired?"],
    },
    answer: {
      text: ["Expedition loot"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How do you leave an Adventure before defeating the boss?"],
    },
    answer: {
      text: ["In the log"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How do you obtain Chaos Frame?"],
    },
    answer: {
      text: ["Defeat the boss in Adventure 13 fifteen times"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How do you unlock a hero sticker?"],
    },
    answer: {
      text: ["Summon the hero"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How do you unlock the Soul Shop?"],
    },
    answer: {
      text: ["Promote any hero to absolute star or get Cleaver"],
    },
  },
  {
    question: {
      text: ["How long is the expedition to the City of Angels?"],
    },
    answer: {
      text: ["3 Hours"],
    },
  },
  {
    question: {
      text: ["How Many adventures in the Game?"],
    },
    answer: {
      text: ["13"],
    },
  },
  {
    question: {
      text: [
        "How many Artifact Coins can you receive for selling any artifact fragment?",
      ],
    },
    answer: {
      text: ["50"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How many branches does the great tree of wisdom have?"],
    },
    answer: {
      text: ["7"],
    },
  },
  {
    question: {
      text: [
        "How many buffs of the day can be active at the same time in Adventures?",
      ],
    },
    answer: {
      text: ["3"],
    },
  },
  {
    question: {
      text: [
        "How many daily attack attempts does a Guild Champion have in a Guild War?",
      ],
    },
    answer: {
      text: ["2"],
    },
  },
  {
    question: {
      text: [
        "How many different masks can Peppy summon with her Masquerade skill?",
      ],
    },
    answer: {
      text: ["4"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "How many enemies must you defeat to proceed to Stage 2 of the Tournament of the Elements?",
      ],
    },
    answer: {
      text: ["5"],
    },
  },
  {
    question: {
      text: [
        "How many Guild Activity Points can be obtained for upgrading a Hero's Glyph once a day?",
      ],
    },
    answer: {
      text: ["700"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How many guild members can participate in the Clash of Worlds?"],
    },
    answer: {
      text: ["30"],
    },
  },
  {
    question: {
      text: [
        "How many Guild War fortifications must be conquered in order to earn max points?",
      ],
    },
    answer: {
      text: ["10"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "How many Hero Soul Stones does it take to evolve a Hero from the 5th star to Absolute Star?",
      ],
    },
    answer: {
      text: ["300"],
    },
  },
  {
    question: {
      text: [
        "How many Hero Soul Stones does the Lesser Hero Soul Stone Chest contain?",
      ],
    },
    answer: {
      text: ["50"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How many heroes are there in the game in total?"],
    },
    answer: {
      text: ["66  (18/Mar/2025)"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "How many in group was taught cheating won't get you any further in life?",
      ],
    },
    answer: {
      text: ["1"],
    },
  },
  {
    question: {
      text: ["How many levels are there between save points in the Dungeon?"],
    },
    answer: {
      text: ["10"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How many pets are available in the game?"],
    },
    answer: {
      text: ["9 (since Khorus)"],
    },
  },
  {
    question: {
      text: [
        "How many players are awarded Marks of Distinction for the Titanite farmed during the day?",
      ],
    },
    answer: {
      text: ["3"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How many Skin Stones does the Large Skin Stone Chest Contain?"],
    },
    answer: {
      text: ["150"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "How many stages are there in the Cross-Server Tournament of the Elements?",
      ],
    },
    answer: {
      text: ["7"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "How many times per day can you claim free energy for completing the daily quest?",
      ],
    },
    answer: {
      text: ["3"],
    },
  },
  {
    question: {
      text: ["How many times per week can you use the Astral Seer for free?"],
    },
    answer: {
      text: ["7"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How many Totems can one Titan team use simultaneously?"],
    },
    answer: {
      text: ["2"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "How many weekly attempts to fight the Guild Raid boss does each player get?",
      ],
    },
    answer: {
      text: ["5"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How many windows can you see in the main square shop?"],
    },
    answer: {
      text: ["3"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How much time do you have to complete an Adventure?"],
    },
    answer: {
      text: ["7 days"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "How much time has to pass before you can claim free energy in the daily quest again?",
      ],
    },
    answer: {
      text: ["1 hour"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["How often can you transfer from one guild to another for free?"],
    },
    answer: {
      text: ["Once every 8 hours"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["Name of Adventure 12?"],
    },
    answer: {
      text: ["Siege of Strongford"],
    },
  },
  {
    question: {
      text: ["Not in game?"],
    },
    answer: {
      text: ["Tower warden frame"],
    },
  },
  {
    question: {
      text: ["Physical damage pet is?"],
    },
    answer: {
      text: ["Fenris"],
    },
  },
  {
    question: {
      text: ["Rufus cannot have merlin as a pet?"],
    },
    answer: {
      text: ["Merlin"],
    },
  },
  {
    question: {
      text: ["Skull stones are obtained in?"],
    },
    answer: {
      text: ["The tower"],
    },
  },
  {
    question: {
      text: ["Starting at which rank can you rate a Hero and get 50 Emeralds?"],
    },
    answer: {
      text: ["Orange+4"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "The appearance of which drommer Master of Elements can’t be found in the game?",
      ],
    },
    answer: {
      text: ["Siungur"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "The attacking Titans of which element deal less damage against the Earth Crown?",
      ],
    },
    answer: {
      text: ["Water"],
    },
  },
  {
    question: {
      text: ["The passive skill of which Hero doesn't work after their death?"],
    },
    answer: {
      text: ["Andvari"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "The titans of which element are dealt boosted damage by Siungur's Staff artifact?",
      ],
    },
    answer: {
      text: ["Fire"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "The titans of which element are dealt boosted damage by the Ragni's Beast artifact?",
      ],
    },
    answer: {
      text: ["Earth Titans"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "The Titans of which element deal less damage against the Earth Crown in the attack battle?",
      ],
    },
    answer: {
      text: ["Water"],
    },
  },
  {
    question: {
      text: [
        "The Titans of which element deal less damage against the Water Crown in the defense battle?",
      ],
    },
    answer: {
      text: ["Any"],
    },
  },
  {
    question: {
      text: [
        "Titans of which element are dealt boosted damage from Andvari's Soul Artifact?",
      ],
    },
    answer: {
      text: ["Water"],
    },
  },
  {
    question: {
      text: ["Titans of which role don't have Champion Skins?"],
    },
    answer: {
      text: ["Marksmen"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What are Titan Skin Stones purchased for?"],
    },
    answer: {
      text: ["Bronze Guild War Trophies"],
    },
  },
];

const imageQuestions = [
  {
    question: {
      text: ["What artfact belongs to this Hero __IMG__ (Cleaver)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/5b/Browser_Cleaver_Avatar.png",
    },
    answer: {
      text: [
        "Ring of Strength",
        "Rusty Hook",
        "Putrefaction",
        "Mutilation",
        "Heavyweight",
        "Executioner's Hook",
        "Defender's Covenant",
      ],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What artfact belongs to this Hero __IMG__ (Isaac)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/12/Browser_Isaac_Avatar.png",
    },
    answer: {
      text: ["Ll’Tes’Lin"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Lars)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Lars_Avatar.png",
    },
    answer: {
      text: [" Stormy Talisman"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Helios)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Helios_Avatar.png",
    },
    answer: {
      text: [" Wand of the Thousand Suns"],
    },
  },

  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Artemis)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Artemis_Avatar.png",
    },
    answer: {
      text: ["Ring of Agility"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Dorian)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Dorian_Avatar.png",
    },
    answer: {
      text: ["Tome of Arcane Knowledge, Bleeding Steel"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Phobos)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/0006.png",
    },
    answer: {
      text: ["Raven’s Amulet"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Morrigan)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/Hero-Wars-Morrigan.png",
    },
    answer: {
      text: ["Raven’s Skull"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Luther)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/0027.png",
    },
    answer: {
      text: ["Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Lian)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/0023.png",
    },
    answer: {
      text: ["Tome of Arcane Knowledge"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Judge)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Judge_Avatar.png",
    },
    answer: {
      text: ["Chart of Endless Stars"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Mojo)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Mojo_Avatar.png",
    },
    answer: {
      text: ["Manuscript of the Void"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Luther)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/0027.png",
    },
    answer: {
      text: ["Defender’s Covenant"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Lilith)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/0026.png",
    },
    answer: {
      text: ["Devil’s Contract"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Dredevil)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/0008.png",
    },
    answer: {
      text: ["Ring of Agility"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Alvanor)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/hero-wars-alvanor.png",
    },
    answer: {
      text: ["Soul of the Forest"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Dorian)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Dorian_Avatar.png",
    },
    answer: {
      text: ["Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Kai)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Mobile_Kai_Avatar.png",
    },
    answer: {
      text: ["Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Astaroth)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Astaroth_Avatar.png",
    },
    answer: {
      text: [" Defender’s Covenant"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Galahad)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Galahad_Avatar.png",
    },
    answer: {
      text: [" Defender’s Covenant"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Judge)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Judge_Avatar.png",
    },
    answer: {
      text: [" Tome of Arcane Knowledge"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Rufus)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Rufus_Avatar.png",
    },
    answer: {
      text: [" Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Markus)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Markus_Avatar.png",
    },
    answer: {
      text: ["Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Lars)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/10/Browser_Lars_Avatar.png",
    },
    answer: {
      text: ["Stormy Talisman"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Artemis)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/57/Browser_Artemis_Avatar.png",
    },
    answer: {
      text: ["Evil's Bane", "Alchemist's Folio", "Ring of Agility"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Aurora)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/91/Browser_Aurora_Avatar.png",
    },
    answer: {
      text: ["Ring of Strength", "Book of Illusions", "Selias' Legacy"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Chabba)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/3/3d/Browser_Chabba_Avatar.png",
    },
    answer: {
      text: [
        "Defender's Covenant",
        "Ring of Strength",
        "Bracers of Hunger",
        "Bottomless Belly",
        "Fat Layer",
        "Burp",
        "Wild Hunger",
      ],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Cornelius)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/c2/Browser_Cornelius_Avatar.png",
    },
    answer: {
      text: [
        "Archivist's Staff",
        "Tome of Arcane Knowledge",
        "Ring of Intelligence",
      ],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Dorian)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e0/Browser_Dorian_Avatar.png",
    },
    answer: {
      text: [
        "Bleeding Steel",
        "Tome of Arcane Knowledge",
        "Ring of Intelligence",
      ],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Elmir)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/3/33/Browser_Elmir_Avatar.png",
    },
    answer: {
      text: ["Blades of Many Truths", "Alchemist's Folio", "Ring of Agility"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Galahad)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/52/Browser_Galahad_Avatar.png",
    },
    answer: {
      text: ["Defender's Covenant", "Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Jorgen)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/1f/Browser_Jorgen_Avatar.png",
    },
    answer: {
      text: ["Shavarakk's Blood", "Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Judge)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/cc/Browser_Judge_Avatar.png",
    },
    answer: {
      text: [
        "Chart of Endless Stars",
        "Tome of Arcane Knowledge",
        "Ring of Intelligence",
      ],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Kai)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/c5/Mobile_Kai_Avatar.png",
    },
    answer: {
      text: ["Wanderer’s Mantle", "Ring of Intelligence "],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Maya)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e4/Browser_Maya_Avatar.png",
    },
    answer: {
      text: ["Tome of Arcane Knowledge", "Mother Tree's Branch"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Mojo)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/42/Browser_Mojo_Avatar.png",
    },
    answer: {
      text: ["Mask of Anger", "Manuscript of the Void", "Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Morrigan)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/08/Browser_Morrigan_Avatar.png",
    },
    answer: {
      text: [
        "Raven's Skull",
        "Tome of Arcane Knowledge",
        "Ring of Intelligence",
      ],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Nebula)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/11/Browser_Nebula_Avatar.png",
    },
    answer: {
      text: ["Unborn Stars", "Book of Illusions", "Ring of Agility"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Peppy)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e7/Browser_Peppy_Avatar.png",
    },
    answer: {
      text: ["Ms. Whirligig", "Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Qing Mao)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/48/Browser_Qing_Mao_Avatar.png",
    },
    answer: {
      text: ["Ring of Agility", "Book of Illusions"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Thea)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/5c/Browser_Thea_Avatar.png",
    },
    answer: {
      text: [
        "Tome of Arcane Knowledge",
        "Ring of Intelligence",
        "Staff of Rebirth",
      ],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Yasmine)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/76/Browser_Yasmine_Avatar.png",
    },
    answer: {
      text: ["Concubine's Khanjars", "Warrior's Code"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this hero __IMG__ (Ziri)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/45/Browser_Ziri_Avatar.png",
    },
    answer: {
      text: ["Akhreb Ummi's Sting", "Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Tristan)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/Hero-Wars-tristan.png",
    },
    answer: {
      text: ["Demonic Reliquary"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Amira)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/d/dd/Mobile_Amira_Avatar.png",
    },
    answer: {
      text: ["Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Andvari)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/7d/Browser_Andvari_Avatar.png",
    },
    answer: {
      text: ["Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Arachne)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/ba/Browser_Arachne_Avatar.png",
    },
    answer: {
      text: ["Defender's Covenant"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Astaroth)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/46/Browser_Astaroth_Avatar.png",
    },
    answer: {
      text: ["Defender's Covenant"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Corvus)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/6a/Browser_Corvus_Avatar.png",
    },
    answer: {
      text: ["Defender's Covenant"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Dark Star)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/16/Mobile_Dark_Star_Avatar.png",
    },
    answer: {
      text: ["Ring of Agility"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Faceless)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/28/Browser_Faceless_Avatar.png",
    },
    answer: {
      text: ["Hermit's Shroud"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Fafnir)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/00/Mobile_Fafnir_Avatar.png",
    },
    answer: {
      text: ["Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Fox)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/6a/Browser_Fox_Avatar.png",
    },
    answer: {
      text: ["Alchemist's Folio"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Helios)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/50/Browser_Helios_Avatar.png",
    },
    answer: {
      text: ["Wand of the Thousand Suns"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Isaac)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/12/Browser_Isaac_Avatar.png",
    },
    answer: {
      text: ["Ring of Agility"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Ishmael)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/77/Browser_Ishmael_Avatar.png",
    },
    answer: {
      text: ["Ring of Agility"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Jet)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/9e/Browser_Jet_Avatar.png",
    },
    answer: {
      text: ["Book of Illusions"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Jhu)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/7a/Browser_Jhu_Avatar.png",
    },
    answer: {
      text: ["Zarakkar Bones"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Krista)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/4b/Browser_Krista_Avatar.png",
    },
    answer: {
      text: ["Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Lars)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/10/Browser_Lars_Avatar.png",
    },
    answer: {
      text: ["Manuscript of the Void"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Lian)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/70/Browser_Lian_Avatar.png",
    },
    answer: {
      text: ["Tome of Arcane Knowledge"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Lilith)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/cb/Browser_Lilith_Avatar.png",
    },
    answer: {
      text: ["Tome of Arcane Knowledge"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Markus)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/c5/Browser_Markus_Avatar.png",
    },
    answer: {
      text: ["Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Rufus)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/7a/Browser_Rufus_Avatar.png",
    },
    answer: {
      text: ["Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Andvari)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Andvari_Avatar.png",
    },
    answer: {
      text: ["Ring of Strength"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Kai)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Mobile_Kai_Avatar.png",
    },
    answer: {
      text: ["Wanderer’s Mantle"],
    },
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Maya)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e4/Browser_Maya_Avatar.png",
    },
    answer: {
      text: ["Tome of Arcane Knowledge"],
    },
  },
];

const generalQuestionsMore = [
  {
    question: {
      text: ["What can be obtained as a reward for Tower Points?"],
    },
    answer: {
      text: ["Gold and Tower Coins"],
    },
  },
  {
    question: {
      text: ["What can be purchased for Elemental Tournament Coins?"],
    },
    answer: {
      text: ["Titan Artifact Fragments"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What can you buy in the Pet Soul Stone Shop?"],
    },
    answer: {
      text: ["Chaos Particle"],
    },
  },
  {
    question: {
      text: ["What can you get for Skull Coins on Tower Floor 50?"],
    },
    answer: {
      text: ["Gold"],
    },
  },
  {
    question: {
      text: ["what can't be a part of Hero equipment items?"],
    },
    answer: {
      text: ["Runes"],
    },
  },
  {
    question: {
      text: ["What can't be exchanged for guild activity?"],
    },
    answer: {
      text: ["EXP Points"],
    },
  },
  {
    question: {
      text: ["What can't be found in an artifact chest?"],
    },
    answer: {
      text: ["Artifact Chest Key"],
    },
  },
  {
    question: {
      text: ["What can't be found in the Skin Stone Chest?"],
    },
    answer: {
      text: ["Stamina Skin Stone"],
    },
  },
  {
    question: {
      text: ["What can't be found on the 50th tower floor?"],
    },
    answer: {
      text: ["Tower Boss"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What can't be purchased at the Guild War Shop?"],
    },
    answer: {
      text: ["Great Enchantment Rune"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["what can’t be a part of Hero equipment items?"],
    },
    answer: {
      text: ["Runes"],
    },
  },
  {
    question: {
      text: ["What can’t be obtained in an Expedition?"],
    },
    answer: {
      text: ["Artifact Coin"],
    },
  },
  {
    question: {
      text: ["What cannot be obtained from chests in Adventures?"],
    },
    answer: {
      text: ["Pet Soul Stones"],
    },
  },
  {
    question: {
      text: [
        "What CANNOT be obtained as a reward for participationf in the Guild raids?",
      ],
    },
    answer: {
      text: ["Gold"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What did Ishmael's father want to do to him in his childhood?"],
    },
    answer: {
      text: ["Sacrifice him to the gods"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What do Mara the pet and Dark Star have in common?"],
    },
    answer: {
      text: ["Mind control"],
    },
  },
  {
    question: {
      text: [
        "What do you call a location in Adventure where you can pick a buff of your team?",
      ],
    },
    answer: {
      text: ["Altar of Power"],
    },
  },
  {
    question: {
      text: ["What do you do with Chaos Particles?"],
    },
    answer: {
      text: ["Charge a pet's Gem"],
    },
  },
  {
    question: {
      text: [
        "What do you have to do in order to obtain a Ghirwil City History Fragment?",
      ],
    },
    answer: {
      text: ["Complete a mission with 3 stars"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What do you receive for selling Hero Equipment items?"],
    },
    answer: {
      text: ["Gold"],
    },
  },
];

const imageAnswers = [
  {
    question: {
      text: ['What does "Superior Copying" skill look like?'],
    },
    answer: {
      img: copySkill,
    },
    confirmed: true,
  },
  {
    question: {
      text: ['What does "Tower Coin" look like?'],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/d/d0/Tower_Coin.png",
    },
  },
  {
    question: {
      text: ["What does an Elemental Tournament Coin look like?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/7d/Elemental_Tournament_Coin.png",
    },
  },
  {
    question: {
      text: ["What does Crystallization skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/34_skill_4.png",
    },
  },
  {
    question: {
      text: ['What does the item "Victor\'s Helmet" skill look like?'],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/a/a8/Green_Victor%27s_Helmet.png",
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What does the Altar of Souls skill icon look like (Corvus)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b1/Browser_Corvus_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Ancestor's Amulet skill icon look like (Dorian)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e6/Browser_Dorian_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the apostle mace look like?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/63/Violet_Apostle%27s_Mace.png",
    },
  },
  {
    question: {
      text: ["What does the apprentice mantle look like?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/11/White_Apprentice%27s_Mantle.png",
    },
  },
  {
    question: {
      text: ["What does the Art of Deceit skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/Art-of-Deceit-skill.jpg",
    },
  },
  {
    question: {
      text: ["What does the Assassin’s Instinct skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/49_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Astral Projection skill icon look like (Nebula)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/ce/Browser_Nebula_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Awakening skill icon look like (Ishmael)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2c/Browser_Ishmael_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Battle Song skill icon look like (Sebastian)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/8d/Browser_Sebastian_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Big Badda Boom skill icon look like (Daredevil)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/ed/Browser_Daredevil_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Black Arrow skill icon look like (Dark Star)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/56/Browser_Dark_Star_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Blade Whirlwind skill icon look like (Keira)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b5/Browser_Keira_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Blessed Vanguard skill icon look like (Tristan)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/06/Mobile_Tristan_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Boldness skill icon look like (Peppy)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e9/Browser_Peppy_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Bottomless Belly skill icon look like (Chabba)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/5a/Browser_Chabba_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Burp skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/11_skill_2.png",
    },
  },
  {
    question: {
      text: ["what does the Careless Wish skill icon look like (Amira)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/92/Mobile_Amira_skill_1.png",
    },
  },
  {
    question: {
      text: [
        "What does the Celestial Guardians skill icon look like (Helios)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/d/db/Browser_Helios_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Chain Lightning skill icon look like (Lars)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/71/Browser_Lars_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Compassion skill icon look like (Markus)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/01/Browser_Markus_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Conciliation skill icon look like (Lian)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/58/Browser_Lian_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Conductance skill icon look like (Lars)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/05/Browser_Lars_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Crused Bones skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/17_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Crystal of Selias skill icon look like (Aurora)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/8f/Browser_Aurora_skill_1.png",
    },
  },
  {
    question: {
      text: [
        "What does the Crystalline Onslaught skill icon look like (Aurora)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/ef/Browser_Aurora_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Cursed Bones skill icon look like (Mojo)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/93/Browser_Mojo_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Dark Craft skill icon look like?  (Ishmael)"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/3/36/Browser_Ishmael_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Dark Deal skill icon look like (Phobos)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/a/aa/Browser_Phobos_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Deathflower skill icon look like (Heidi)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/ed/Browser_Heidi_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Demolition Robot skill icon look like (Arachne)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/96/Browser_Arachne_skill_2.png",
    },
  },
  {
    question: {
      text: [
        "What does the Demon's Allegiance skill icon look like (Astaroth)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/09/Browser_Astaroth_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Desperate Fury skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/desperate-fury.jpg",
    },
  },
  {
    question: {
      text: ["What does the Devourer of Magic skill icon look like (Rufus)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b0/Browser_Rufus_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Discharge! skill icon look like (Daredevil)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e3/Browser_Daredevil_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Elixir of Vigor skill icon look like (Jet)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/7b/Browser_Jet_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Embrace of Pain skill icon look like (Yasmine)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/d/d4/Browser_Yasmine_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Equilibrium skill icon look like (Nebula)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/47/Browser_Nebula_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Eternal Wisdom skill icon look like (Satori)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/27/Browser_Satori_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Explosive Sphere skill icon look like (Kai)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/66/Browser_Kai_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Fat Layer skill icon look like (Chabba)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/69/Browser_Chabba_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Fire Breath skill icon look like (Litith)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/9f/Browser_Lilith_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Flame Veil skill icon look like (Astaroth)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/47/Browser_Astaroth_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Focus of Hatred skill icon look like (Ziri)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2c/Browser_Ziri_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Foremother’s Oath skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/46_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Frolic skill icon look like (Peppy)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/59/Browser_Peppy_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Gehenna skill icon look like (Luther)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/8a/Browser_Luther_skill_3.png",
    },
  },
  {
    question: {
      text: [
        "What does the Harmony of the Grove skill icon look like (Alvanor)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/98/Browser_Alvanor_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Healing Beam skill icon look like (Thea)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/83/Browser_Thea_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Healing Spirits skill icon look like?  (Mojo)"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/20/Browser_Mojo_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Heavy Wisdom skill icon look like (Cornelius)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/26/Browser_Cornelius_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Hex skill icon look like (Mojo)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/a/af/Browser_Mojo_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the High-Voltage Module skill icon look like (Isaac)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/ec/Browser_Isaac_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Hypnotic Ball skill icon look like (Lian)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/d/d4/Browser_Lian_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the I see you skill icon look like (Jhu)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/f/ff/Browser_Jhu_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Icy Vengeance skill icon look like (Krista)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/3/3a/Browser_Krista_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Imminent Reckoning skill icon look like (Satori)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/78/Browser_Satori_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Infernal Rift skill icon look like (Lilith)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/16/Browser_Lilith_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Inordinate Fury skill icon look like (Jet)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e8/Browser_Jet_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Ion Cyclon skill icon look like (Judge)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e2/Browser_Judge_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Lead Storm skill icon look like (Ginger)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/4c/Browser_Ginger_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Leper skill icon look like (Jorgen)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2c/Browser_Jorgen_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Many Truths skill icon look like (Elmir)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/8f/Browser_Elmir_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Memory Loss skill icon look like (Cornelius)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/f/fa/Browser_Cornelius_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Mirage skill icon look like (Elmir)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/54/Browser_Elmir_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Nature’s Barrer skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/47_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Negator of Laws skill icon look like (K'arkh)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/f/f6/Browser_K%27arkh_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Nexus of Horror skill icon look like (K'arkh)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/70/Browser_K%27arkh_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Phantom skill icon look like (Ishmael)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/1a/Browser_Ishmael_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Phoenix's Embrace skill icon look like (Aidan)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/07/Browser_Aidan_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Piecing Light skill icon look like (Aurora)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/bb/Browser_Aurora_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Plasma Explosion skill icon look like (Arachne)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/a/a1/Browser_Arachne_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Poisonous Bonds skill icon look like (Maya)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/3/33/Browser_Maya_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Potion of Fatigue skill icon look like (Jet)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/82/Browser_Jet_skill_3.png",
    },
  },
  {
    question: {
      text: [
        "What does the Predator's Charge skill icon look like (Astrid and Lucas)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/06/Browser_Astrid_and_Lucas_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Protective Dome skill icon look like (Cornelius)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/19/Browser_Cornelius_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Punishing Arrows skill icon look like (Artemis)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/bc/Browser_Artemis_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Putrefaction skill icon look like (Cleaver)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/88/Browser_Cleaver_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Queen of Flowers skill icon look like (Maya)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b2/Browser_Maya_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Rakashi's Oath skill icon look like (Rufus)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/9f/Browser_Rufus_skill_4.png",
    },
  },
  {
    question: {
      text: [
        "What does the Rampant Nature skill icon look like (Astrid and Lucas)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/68/Browser_Astrid_and_Lucas_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Ranging Shot skill icon look like (Ginger)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/a/af/Browser_Ginger_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Retribution skill icon look like (Dante)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/3/3f/Browser_Dante_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Righteous Light skill icon look like (Markus)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/7b/Browser_Markus_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Rusty Hook skill icon look like (Cleaver)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/10/Browser_Cleaver_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Sacred Rage skill icon look like (Tristan)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b5/Mobile_Tristan_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Schackles of Weakness skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/16_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Second Wind skill icon look like (Thea)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/28/Browser_Thea_skill_4.png",
    },
  },
  {
    question: {
      text: [
        "What does the Secret of Longevity skill icon look like (Martha)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/21/Browser_Martha_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Seed of Destruction skill icon look like (Iris)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/55/Browser_Iris_skill_4.png",
    },
  },
  {
    question: {
      text: [
        "What does the Shackles of Weakness skill icon look like (Dante)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/7d/Browser_Dante_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Shelter of Sands skill icon look like (Ziri)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/d/db/Browser_Ziri_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Solar Sanctuary skill icon look like (Thea)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/91/Browser_Thea_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Solar Wind skill icon look like (Helios)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/f/f6/Browser_Helios_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Spell Expert skill icon look like (Faceless)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/0/00/Browser_Faceless_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Spirit Purification skill icon look like?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2d/Browser_Satori_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does The spirits will heal me skill icon look like (Jhu)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/71/Browser_Jhu_skill_4.png",
    },
  },
  {
    question: {
      text: ["What does the Star Birth skill icon look like (Helios)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/6a/Browser_Helios_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Storm Blades skill icon look like (Ishmael)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b7/Browser_Ishmael_skill_4.png",
    },
  },
  {
    question: {
      text: [
        "What does the Strike of the Damned skill icon look like (Corvus)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/85/Browser_Corvus_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Tea Party skill icon look like (Martha)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/15/Browser_Martha_skill_3.png",
    },
  },
  {
    question: {
      text: [
        "What does the Thirst for Blood skill icon look like (Daredevil)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/44/Browser_Daredevil_skill_4.png",
    },
  },

  {
    question: {
      text: ["What does the Titan Angus' portrait look like?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/94/Browser_Angus_Avatar.png",
    },
  },
  {
    question: {
      text: [
        'What does the Titan artifact "Andvari\'s Arrowslinger" look like (Slyvia)?',
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/cd/Browser_Sylva_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Titan Moloch's portrait look like?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/d/d8/Browser_Moloch_Avatar.png",
    },
  },
  {
    question: {
      text: ["What does the Hero Cornelius's portrait look like?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/c2/Browser_Cornelius_Avatar.png",
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What does the Toxic Pollen skill icon look like (Maya)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/c4/Browser_Maya_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Toxic Spit skill icon look like (Heidi)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2e/Browser_Heidi_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Trembling Hands skill icon look like (Phobos)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/74/Browser_Phobos_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Under the Forest Canopy skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/Under-the-forest-canopy.jpg",
    },
  },
  {
    question: {
      text: [
        "What does the Under the Forest Canopy skill icon look like (Alvanor)?",
      ],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/8b/Browser_Alvanor_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Vengeful Souls skill icon look like?"],
    },
    answer: {
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/19_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the Vow of Silence skill icon look like (Thea)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/56/Browser_Thea_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Wandering Lights skill icon look like (Lian)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/3/38/Browser_Lian_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Wild Hunger skill icon look like (Chabba)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/cd/Browser_Chabba_skill_1.png",
    },
  },
  {
    question: {
      text: [
        "What does the wind vane on the Shop's roof in the main square look like?",
      ],
    },
    answer: {
      text: ["A Dragon"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What does the Wings of Night skill icon look like (Dorian)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/a/a0/Browser_Dorian_skill_3.png",
    },
  },
  {
    question: {
      text: ["What does the Wrath of Nature skill icon look like (Alvanor)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/71/Browser_Alvanor_skill_2.png",
    },
  },
  {
    question: {
      text: ["What does the You will not stop me skill icon look like (Jhu)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/5e/Browser_Jhu_skill_1.png",
    },
  },
  {
    question: {
      text: ["What does the Zenith skill icon look like (Celeste)?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2e/Browser_Celeste_skill_4.png",
    },
  },
  {
    question: {
      text: ["What Dragon Shield look like?"],
    },
    answer: {
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2d/Violet_Dragon_Shield.png",
    },
  },

  {
    question: {
      text: ["What is the name of the item?  __IMG__"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/6b/Green_Voodoo_Doll.png",
    },
    answer: {
      text: ["Voodoo Doll"],
    },
    confirmed: true,
  },
  {
    question: {
      text: ["What is the name of the item?  __IMG__"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/17/Green_Branch_of_Antiaris.png",
    },
    answer: {
      text: ["Branch of Antiaris"],
    },
  },
  {
    question: {
      text: [
        "What is the name of the skill represented by this icon __IMG__ (Kai)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/66/Browser_Kai_skill_3.png",
    },
    answer: {
      text: ["Explosive sphere"],
    },
  },
  {
    question: {
      text: [
        "What is the name of the skill represented by this icon __IMG__ (Galahad)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/45/Browser_Galahad_skill_2.png",
    },
    answer: {
      text: ["Unstoppable charge"],
    },
  },
  {
    question: {
      text: ["What is the name of the statue in Campain chapter 2?"],
    },
    answer: {
      text: ["Monolith of Meron"],
    },
  },
  {
    question: {
      text: ["What is the name of this artifact? __IMG__ (Dorian)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/62/Bleeding_Steel.png",
    },
    answer: {
      text: ["Bleeding Steel"],
    },
  },
  {
    question: {
      text: ["What is the name of this artifact? __IMG__ (Astaroth)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/a/a2/Scythe_of_Redemption.png",
    },
    answer: {
      text: ["Scythe of Redemption"],
    },
  },
  {
    question: {
      text: ["What is the name of this artifact? __IMG__ (Satori)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/88/Black_Fox%27s_Fan.png",
    },
    answer: {
      text: ["Black Fox's Fan"],
    },
  },
  {
    question: {
      text: ["What is the name of this coin? __IMG__"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/51/Outland_Coin.png",
    },
    answer: {
      text: ["Outland Coin"],
    },
  },
  {
    question: {
      text: ["What is the name of this item? __IMG__"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2b/Green_Brothers.png",
    },
    answer: {
      text: ["Brothers"],
    },
  },
  {
    question: {
      text: ["What is the name of this Titan Artifact __IMG__ (Moloch)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/c6/Ragni%27s_Hammer.png",
    },
    answer: {
      text: ["Ragni's Hammer"],
    },
  },

  {
    question: {
      text: ["What is this Hero's name __IMG__ (Rufus)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/7/7a/Browser_Rufus_Avatar.png",
    },
    answer: {
      text: ["Rufus"],
    },
  },
  {
    question: {
      text: ["What is this Titan's name __IMG__ (Vulcan)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/2f/Browser_Vulcan_Avatar.png",
    },
    answer: {
      text: ["Vulcan"],
    },
  },

  {
    question: {
      text: ["Which artifact belongs to this Hero __IMG__ (Sebastian)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Sebastian_Avatar.png",
    },
    answer: {
      text: ["Ring of Agility", "Warrior’s Code"],
    },
  },
  {
    question: {
      text: ["Which artifact belongs to this Hero __IMG__ (Ziri)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Ziri_Avatar.png",
    },
    answer: {
      text: [" Ring of Strength"],
    },
  },
  {
    question: {
      text: ["Which artifact belongs to this Hero __IMG__ (Morrigan)?"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Browser_Morrigan_Avatar.png",
    },
    answer: {
      text: [" Tome of Arcane Knowledge", "Ring of Intelligence"],
    },
  },
  {
    question: {
      text: ["Which artifact belongs to this Hero __IMG__ (Sebastian)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/53/Browser_Sebastian_Avatar.png",
    },
    answer: {
      text: ["Warrior's Code", "Ring of Agility"],
    },
  },
];

const moreImageAnswers = [
  {
    question: {
      text: [
        "Which Hero does thiis artifact belong to? __IMG__(Bleeding Steel)",
      ],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/weapon_1029.png",
    },
    answer: {
      text: ["Dorian"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artfact belong to? __IMG__(Manuscript of Void)",
      ],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/book_2003.png",
    },
    answer: {
      text: ["Alvanor"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Warrior’s Code)?",
      ],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Warrior27s_Code.png",
    },
    answer: {
      text: ["Yasmine", "Sebastian", "Jhu", "Daredevil"],
    },
  },
  {
    question: {
      text: ["Which Hero does this artifact belong to?__IMG__(Sentence)"],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/weapon_1027.png",
    },
    answer: {
      text: ["Luther"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to?  __IMG__  (Devil's Contract)",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/16/Devil_s_Contract.png",
    },
    answer: {
      text: ["Lilith"],
    },
  },
  {
    question: {
      text: ["Which hero does this artifact belong to?  __IMG__  (On and Off)"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e6/Item_on_and_off.png",
    },
    answer: {
      text: ["Daredevil"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to? __IMG__ (Concubine's Khanjars)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/a/ae/Concubine%27s_Khanjars.png",
    },
    answer: {
      text: ["Yasmine"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to? __IMG__ (Ring of Agility)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/3/30/Ring_of_Agility.png",
    },
    answer: {
      text: ["Ginger", "Arachne"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to? __IMG__ (Ring of Strength)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/f/f8/Ring_of_Strength.png",
    },
    answer: {
      text: ["Corvus"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Archivist's Staff)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b8/Archivist%27s_Staff.png",
    },
    answer: {
      text: ["Cornelius"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to? __IMG__ (Bleeding Steel)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/62/Bleeding_Steel.png",
    },
    answer: {
      text: ["Dorian"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Book of Illusions)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/1f/Book_of_Illusions.png",
    },
    answer: {
      text: ["Heidi", "Aurora", "Dante", "Jet", "Nebula", "Qing Mao"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Celeste's Crown)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/d/d3/Celeste%27s_Crown.png",
    },
    answer: {
      text: ["Celeste"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (DD-901 Arsenal)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/8f/DD-901_Arsenal.png",
    },
    answer: {
      text: ["Orion"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Defender's Covenant)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/92/Defender%27s_Covenant.png",
    },
    answer: {
      text: ["Cleaver"],
    },
  },
  {
    question: {
      text: ["Which hero does this artifact belong to? __IMG__ (Elven Lute)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/8a/Elven_Lute.png",
    },
    answer: {
      text: ["Sebastian"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Hidden Demon's Katars)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b2/Hidden_Demon%27s_Katars.png",
    },
    answer: {
      text: ["Ishmael"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to? __IMG__ (Hyper Booster DS-1)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/9/97/Hyper_Booster_DS-1.png",
    },
    answer: {
      text: ["Arachne"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Octaviana's Blades)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/19/Octaviana%27s_Blades.png",
    },
    answer: {
      text: ["Keira"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Raven's Skull)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/1/19/Raven%27s_Skull.png",
    },
    answer: {
      text: ["Morrigan"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Shavarakk's Blood)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/2/20/Shavarakk%27s_Blood.png",
    },
    answer: {
      text: ["Jorgen"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Shrapnel Cannon)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/8/87/Browser_Keira_Avatar.png",
    },
    answer: {
      text: ["Alchemists's Folio"],
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to? __IMG__ (Spear of Fate)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/6/66/Spear_of_Fate.png",
    },
    answer: {
      text: ["Dante"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Tome of Arcane Knowledge)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/c/c0/Tome_of_Arcane_Knowledge.png",
    },
    answer: {
      text: ["Rufus (and many others)"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Wand of the Thousand Suns)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/e/e7/Wand_of_the_Thousand_Suns.png",
    },
    answer: {
      text: ["Helios"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Wanderer's Mantle)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/f/f7/Wanderer%27s_Mantle.png",
    },
    answer: {
      text: ["Kai"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Warrior's Code)?",
      ],
      img: "https://static.wikia.nocookie.net/hero-wars/images/b/b3/Warrior%27s_Code.png",
    },
    answer: {
      text: ["Yasmine", "Sebastian", "Jhu", "Daredevil"],
    },
  },
  {
    question: {
      text: [
        "Which hero does this artifact belong to? __IMG__ (Hidden Demon’s Katars)?",
      ],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Hidden_Demon27s_Katars.png",
    },
    answer: {
      text: ["Ishmael"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to?__IMG__(Grimoire of Enslaved Souls)",
      ],
      img: "https://herowars-olympus.com/wp-content/uploads/2022/09/iris-artifact.jpg",
    },
    answer: {
      text: ["Iris"],
    },
  },
  {
    question: {
      text: ["Which hero does this artifact belong to?__IMG__    (Elven Lute)"],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Elven_Lute.png",
    },
    answer: {
      text: ["Sebastian"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to?__IMG__    (Ring of Agility)",
      ],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Ring_of_Agility.png",
    },
    answer: {
      text: ["Ginger"],
    },
  },
  {
    question: {
      text: [
        "Which Hero does this artifact belong to? __IMG__ (Concubine’s Khanjars)?",
      ],
      img: "https://herowars-olympus.com/wp-content/uploads/2021/09/Concubines_Khanjars.png",
    },
    answer: {
      text: ["Yasmine"],
    },
  },
];

const newQuestions = [
  {
    question: { text: ["Which Titan is a Light Titan?"] },
    answer: { text: ["lyari", "Solaris", "Amon", "Rigel"] },
    confirmed: true,
  },
  {
    question: { text: ["What is the official title of our gamed?"] },
    answer: { text: ["Hero Wars: Era of Dominion"] },
    confirmed: true,
  },
  {
    question: {
      text: ["Were can you obtain the Soul Crystals needed to summon Heroes?"],
    },
    answer: { text: ["Soul Atrium"] },
    confirmed: true,
  },
  {
    question: {
      text: ["What does the Doppelganger! skill icon look like (Faceless)?"],
    },
    answer: {
      text: [],
      img: "https://static.wikia.nocookie.net/hero-wars/images/4/4a/Browser_Faceless_skill_1.png",
    },
    confirmed: true,
  },
  {
    question: {
      text: [
        "How much gold do you need to unweave a white pattern out of a war flag?",
      ],
    },
    answer: { text: ["0"] },
    confirmed: true,
  },
  {
    question: { text: ["Vex's Curse of the Flesh skill affects the eneny…"] },
    answer: { text: ["…with the lowest Health."] },
    confirmed: true,
  },
  {
    question: {
      text: [
        "The Lost Hero animated short reveals the Archdemon's previous name. What is it?",
      ],
    },
    answer: { text: ["Gareth"] },
    confirmed: true,
  },
  {
    question: { text: ["What's the name of Julius's mech suit?"] },
    answer: { text: ["Felix"] },
    confirmed: true,
  },
  {
    question: { text: ["Which Support Heros's main stat is Strength?"] },
    answer: { text: ["Fafnir"] },
    confirmed: true,
  },
  {
    question: { text: ["What was the name of Lian's beloved?"] },
    answer: { text: ["Hiroshi"] },
    confirmed: true,
  },
  {
    question: {
      text: ["What artifact belongs to this Hero __IMG__ (Keira)?"],
      img: "https://static.wikia.nocookie.net/hero-wars/images/5/57/Browser_Keira_Avatar.png",
    },
    answer: {
      text: ["Evil's Bane", "Alchemist's Folio", "Ring of Agility"],
    },
  },
];

// [{
//     "question": {
//         "text": ["What artfact belongs to this Hero __IMG__ (Cleaver)?"],
//         "img": "https://static.wikia.nocookie.net/hero-wars/images/5/5b/Browser_Cleaver_Avatar.png"
//     },
//     "answer": {
//         "text": [
//             "Ring of Strength", "Rusty Hook", "Putrefaction", "Mutilation", "Heavyweight", "Executioner's Hook", "Defender's Covenant"
//         ]
//     }
// },
const iq = imageQuestions.sort((a, b) => {
  const aT = a.question.text[0].split(" (");
  const bT = b.question.text[0].split(" (");
  const aTC = aT[aT.length - 1].toUpperCase();
  const bTC = bT[bT.length - 1].toUpperCase();

  return aTC.localeCompare(bTC);
});

const imi = moreImageAnswers.sort((a, b) => {
  const aT = a.answer.text[0];
  const bT = b.answer.text[0];

  return aT.localeCompare(bT);
});

const lookLike = imageAnswers.filter((a) =>
  a.question.text.includes("skill icon look like"),
);
const notLookLike = imageAnswers.filter(
  (a) => !a.question.text.includes("skill icon look like"),
);

// const allQuestions = [...generalQuestions,  ...generalQuestionsMore, ...iq, ...imageAnswers, ...moreImageAnswers, ...evenMoreGeneralQuestions]
const allQuestions: Question[] = [
  ...generalQuestions,
  ...generalQuestionsMore,
  ...evenMoreGeneralQuestions,
  ...iq,
  ...lookLike,
  ...notLookLike,
  ...imageAnswers,
  ...imi,
  ...newQuestions,
];

const cleanQuestion = (
  q: { text: string[]; img?: string },
  idx: number,
) => {
  if (q != null) {
    const text = q?.text;
    const textArray = text[0].split("__IMG__");
    let finalText = (
      <>
        <td className="py-2 text-center px-2 border-r-2 border-slate-500">
          {idx}
        </td>
        <td className="pr-5 border-r-2 border-slate-500 pl-2"> {text}</td>
      </>
    );
    if (textArray.length > 1) {
      finalText = (
        <>
          <td className="py-5 text-center px-2 border-r-2 border-slate-500">
            {idx}
          </td>
          <td className="w-[700px] pr-5 pl-2">
            <div className="flex items-center">
              {" "}
              <div className="break-words border-r-2 border-slate-500">
                {textArray[0]}
              </div>
              <div className="px-3">
                {" "}
                <img src={q.img} alt="g.img" width={"50px"} />{" "}
              </div>{" "}
              <div>{textArray[1]}</div>
            </div>
          </td>
        </>
      );
    }
    return finalText;
  } else {
    return null;
  }
};

const cleanAnswer = (q: { text?: string[]; img?: string }) => {
  if (q != null) {
    // console.log(q?.text.length, q?.text)
    const finalText = q?.text ? (
      <td className="py-2 pl-2">
        {q?.text.map((t) => (
          <div className="w-[300px] " key={t}>
            {t}
          </div>
        ))}{" "}
      </td>
    ) : (
      <td className="py-2">{<img src={q.img} alt="q.img" width={"70px"} />}</td>
    );
    return <>{finalText}</>;
  } else {
    return null;
  }
};
// const allQuestions = a.sort((a, b) => a.question.text.localeCompare(b.question.text))
// const allQuestions = a

const Strongford = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="italic font-extralight sm:text-xl text-slate-500">
        {allQuestions.filter((q) => q.confirmed).length} confirmed out of{" "}
        {allQuestions.length} questions (
        {(
          100 *
          (allQuestions.filter((q) => q.confirmed).length / allQuestions.length)
        ).toFixed(2)}
        %){" "}
      </div>
      <div className="mx-2 font-light italic sm:hidden">
        Better watch this answers on big screen or at least rotated on mobile
      </div>
      <table className="hidden sm:block">
        <thead className="bg-slate-500 border-r text-white">
          <tr>
            <th className="text-center"></th>
            <th>QN</th>
            <th className="text-left">Question</th>
            <th className="text-left">answer</th>
          </tr>
        </thead>
        <tbody>
          {allQuestions.length > 1 &&
            allQuestions.map((t, idx) => {
              return (
                <tr
                  key={idx}
                  className={`${idx % 2 !== 0 ? "bg-slate-200 border-b-2 border-slate-500 border-t-2" : "bg-white"} text-lg`}
                >
                  {/* <td> */}
                  <td className="border-r-2 border-slate-500">
                    <div className="">
                      {t.confirmed === undefined ||
                        t.confirmed === false ? null : (
                        <FaCheck />
                      )}
                    </div>
                  </td>
                  {cleanQuestion(t.question, idx + 1)}
                  {/* {t.question.img && <img src={t.question?.img} width={'50px'} />} */}
                  {/* </td> */}
                  {cleanAnswer(t.answer)}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Strongford;
