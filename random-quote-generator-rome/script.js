const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".name");

const quotes = [
    {
        content: "An adversary is more hurt by desertion than by slaughter.",
        author: "Vegetius"
    },
    {
        content: "What can a soldier do who charges when out of breath?",
        author: "Vegetius"
    },
    {
        content: "Few men are born brave, many become so through training and force of discipline.",
        author: "Vegetius"
    },
    {
        content: "Valour is superior to numbers.",
        author: "Vegetius"
    },
    {
        content: "An ambuscade, if discovered and promptly surrounded, will repay the intended mischief with interest.",
        author: "Vegetius"
    },
    {
        content: "A general is not easily overcome who can form a true judgement of his own and the enemy's forces.",
        author: "Vegetius"
    },
    {
        content: "Qui desiderat pacem praeparet bellum (Let him who desires peace prepare for war).",
        author: "Vegetius"
    },
    {
        content: "We die today not only for our friends and family but for our gods and for our forefathers and men before them so pray to them to make us victorious.",
        author: "Vegetius"
    },
    {
        content: "Let all be present and expect the palm, the prize of victory.",
        author: "Virgil"
    },
    {
        content: "So ends the bloody business of the day.",
        author: "Homer"
    },
    {
        content: "Even the bravest cannot fight beyond his strength.",
        author: "Homer"
    },
    {
        content: "Men grow tired of sleep, love, singing and dancing sooner than war.",
        author: "Homer"
    },
    {
        content: "He serves me most, who serves his country best.",
        author: "Homer"
    },
    {
        content: "The blade itself incites to violence.",
        author: "Homer"
    },
    {
        content: "To those that flee comes neither power nor glory.",
        author: "Homer"
    },
    {
        content: "Ye gods, what dastards would our host command? Swept to the war, the lumber of the land.",
        author: "Homer"
    },
    {
        content: "Noble and manly music invigorates the spirit, strengthens the wavering man, and incites him to great and worthy deeds.",
        author: "Homer"
    },
    {
        content: "A glorious death is his who for his country falls.",
        author: "Homer"
    },
    {
        content: "Conquered, we conquer.",
        author: "Plautus"
    },
    {
        content: "Ah, yes, mere infantry - poor beggars...",
        author: "Plautus"
    },
    {
        content: "The valiant profit more their country than the finest, cleverest speakers.",
        author: "Plautus"
    },
    {
        content: "Quick decisions are unsafe decisions.",
        author: "Sophocles"
    },
    {
        content: "It is the brave man's part to live with glory, or with glory die.",
        author: "Sophocles"
    },
    {
        content: "The outcome corresponds less to expectations in war than in any other case whatsoever.",
        author: "Livy"
    },
    {
        content: "Vae victus. (Woe to the vanquished.)",
        author: "Livy"
    },
    {
        content: "To a good general luck is important.",
        author: "Livy"
    },
    {
        content: "All warfare is based on deception.",
        author: "Sun Tzu"
    },
    {
        content: "In war, numbers alone confer no advantage. Do not advance relying on sheer military power.",
        author: "Sun Tzu"
    },
    {
        content: "Generally management of the many is the same as generally management of the few, it's a matter of organization.",
        author: "Sun Tzu"
    },
    {
        content: "He who knows when he can fight and when he cannot will be victorious.",
        author: "Sun Tzu"
    },
    {
        content: "In peace, sons bury their fathers, in war, fathers bury their sons.",
        author: "Herodotus"
    },
    {
        content: "Far better is to have a stout heart always and suffer one's share of evils, than to be ever fearing what may happen.",
        author: "Herodotus"
    },
    {
        content: "After the war is over, make alliances.",
        author: "Greek proverb"
    },
    {
        content: "Fortis cadere, cedere non potest. (A brave man may fall, but he cannot yield.)",
        author: "Latin proverb"
    },
    {
        content: "Victory loves prudence.",
        author: "Latin proverb"
    },
    {
        content: "Flet victus, victor interiit. (The conquered mourns, the conqueror is undone.)",
        author: "Latin proverb"
    },
    {
        content: "Timidi mater non flet. (A coward's mother does not weep.)",
        author: "Latin proverb"
    },
    {
        content: "Arms keep peace.",
        author: "Latin proverb"
    },
    {
        content: "To blunder twice is not allowed in war.",
        author: "Latin proverb"
    },
    {
        content: "The proper arts of a general are judgement and prudence.",
        author: "Tacitus"
    },
    {
        content: "Great empires are not maintained by timidity.",
        author: "Tacitus"
    },
    {
        content: "A bad peace is even worse than a war.",
        author: "Tacitus"
    },
    {
        content: "Even the bravest men are frightened by sudden terrors.",
        author: "Tacitus"
    },
    {
        content: "The desire for safety stands against every great and noble enterprise.",
        author: "Tacitus"
    },
    {
        content: "Valour is the contempt of death and pain.",
        author: "Tacitus"
    },
    {
        content: "They make a solitude and call it peace.",
        author: "Tacitus"
    },
    {
        content: "Only the dead have seen the end of the war.",
        author: "Plato"
    },
    {
        content: "The rulers of the State are the only ones who should have the privilege of lying.",
        author: "Plato"
    },
    {
        content: "I think the slain care little if they sleep or rise again.",
        author: "Aeschylus"
    },
    {
        content: "A people's voice is dangerous when charged with wrath.",
        author: "Aeschylus"
    },
    {
        content: "In war we must always leave room for strokes of fortune, and accidents that cannot be foreseen.",
        author: "Polybius"
    },
    {
        content: "A good general not only sees the way to victory, he also knows when victory is impossible.",
        author: "Polybius"
    },
    {
        content: "Bella detesta matribus. (Wars are the dread of mothers.)",
        author: "Horace"
    },
    {
        content: "Quae caret ora cruore nostro? (What coast knows not our blood?)",
        author: "Horace"
    },
    {
        content: "Dulce et decorum est pro patria mori. (It is a sweet and seemly thing to die for one's country.)",
        author: "Horace"
    },
    {
        content: "Adversity reveals the genius of a general; good fortune conceals it.",
        author: "Horace"
    },
    {
        content: "A wise man in times of peace prepares for war.",
        author: "Horace"
    },
    {
        content: "A collision at sea can ruin your entire day.",
        author: "Thucydides"
    },
    {
        content: "The strong did what they could, and the weak suffered what they must.",
        author: "Thucydides"
    },
    {
        content: "Self-control is the chief element in self respect, and self-respect is the chief element in courage.",
        author: "Thucydides"
    },
    {
        content: "The true contempt of an invader is shown by deeds of valour in the field.",
        author: "Hermocrates of Syracuse"
    },
    {
        content: "They have an abundance of gold and silver, and these make war, like other things, go smoothly.",
        author: "Hermocrates of Syracuse"
    },
    {
        content: "When there is mutual fear, men think twice before they make aggression upon one another.",
        author: "Hermocrates"
    },
    {
        content: "Nobody is driven in to war by ignorance, and no one who thinks he will gain anything from it is deterred by fear.",
        author: "Hermocrates"
    },
    {
        content: "Even the bravest cannot fight beyond his strength.",
        author: "Euripides"
    },
    {
        content: "The god of war hates those who hesitate.",
        author: "Euripides"
    },
    {
        content: "Danger gleams like sunshine to a brave man's eyes.",
        author: "Euripides"
    },
    {
        content: "A large army is always disorderly.",
        author: "Euripides"
    },
    {
        content: "It is right to learn, even from the enemy.",
        author: "Ovid"
    },
    {
        content: "The gods favour the bold.",
        author: "Ovid"
    },
    {
        content: "Armed forces abroad are of little value unless there is prudent counsel at home.",
        author: "Cicero"
    },
    {
        content: "The sinews of war are infinite money.",
        author: "Cicero"
    },
    {
        content: "War is not so much a matter of weapons, as of money.",
        author: "Cicero"
    },
    {
        content: "Silent enim leges inter arma. (Laws are silent in times of war.)",
        author: "Cicero"
    },
    {
        content: "War, as the saying goes, is full of false alarms.",
        author: "Aristotle"
    },
    {
        content: "We make war that we may live in peace.",
        author: "Aristotle"
    },
    {
        content: "The wise man speaks because he has something to say, the fool because he has to say something.",
        author: "Aristotle"
    },
    {
        content: "It is a bad plan that cannot be altered.",
        author: "Publilius Syrus"
    },
    {
        content: "Pardon one offence and you encourage the commission of many.",
        author: "Publilius Syrus"
    },
    {
        content: "We should provide in peace what we need in war.",
        author: "Publilius Syrus"
    },
    {
        content: "The cruelty of war makes for peace.",
        author: "Publilius Syrus"
    },
    {
        content: "Necessity knows no law except to conquer.",
        author: "Publilius Syrus"
    },
    {
        content: "He is best secure from dangers who is on his guard even when he seems safe.",
        author: "Publilius Syrus"
    },
    {
        content: "In war important events result from trivial causes.",
        author: "Gaius Julius Caesar"
    },
    {
        content: "War gives the right of the conquerors to impose any conditions they please upon the vanquished.",
        author: "Gaius Julius Caesar"
    },
    {
        content: "Veni, vidi, vici. (I came, I saw, I conquered.)",
        author: "Gaius Julius Caesar"
    },
    {
        content: "Alea iacta est. (The die is cast.)",
        author: "Gaius Julius Caesar"
    },
    {
        content: "If you must break the law, do it to seize power, in all other cases observe it.",
        author: "Gaius Julius Caesar"
    },
    {
        content: "Men of Athens, there is not much time for exhortation, but to the brave a few words are as good as many.",
        author: "Hippocrates"
    },
    {
        content: "War is the only proper school of the surgeon.",
        author: "Hippocrates"
    },
    {
        content: "If a man does not know to what port he is sailing, no wind is favourable.",
        author: "Seneca"
    },
    {
        content: "The fortunes of war are always doubtful.",
        author: "Seneca"
    },
    {
        content: "Constant exposure to dangers will breed contempt for them.",
        author: "Seneca"
    },
    {
        content: "Against danger it pays to be prepared.",
        author: "Aesop"
    },
    {
        content: "Brave men are a city's strongest tower of defence.",
        author: "Alcaeus"
    },
    {
        content: "A dead enemy always smells good.",
        author: "Aulus Vitellius"
    },
    {
        content: "Cry \"Havoc!\" and let slip the dogs of war.",
        author: "Shakespeare: Julius Caesar, III, 1"
    },
    {
        content: "He conquers who endures.",
        author: "Persius"
    },
    {
        content: "Extraordinary rains pretty generally fall after great battles.",
        author: "Plutarch"
    },
    {
        content: "I am more afraid of our own mistakes than of our enemies' designs.",
        author: "Pericles"
    },
    {
        content: "When one side goes against the enemy with the gods' gift of stronger morale, then their adversaries, as a rule, cannot withstand them.",
        author: "Xenophon"
    },
    {
        content: "Bella, horida bella! (Wars, horrid wars!)",
        author: "Virgil"
    },
    {
        content: "Willing obedience always beats forced obedience.",
        author: "Xenophon"
    },
    {
        content: "Soldiers do not like being under the command of one who is not of noble birth.",
        author: "Onosander"
    },
    {
        content: "To an imperial city nothing is inconsistent which is expedient.",
        author: "Euphemus of Athens"
    },
    {
        content: "In the moment of action remember the value of silence and order.",
        author: "Phormio of Athens"
    },
    {
        content: "If a man does not strike first, he will be first struck.",
        author: "Athenogoras of Syracuse"
    },
    {
        content: "Fortes fortuna adiuvat. (Fortune favours the brave.)",
        author: "Terence"
    },
    {
        content: "In war we must be speedy.",
        author: "Silius Italicus"
    },
    {
        content: "Learn to obey before you command.",
        author: "Solon of Athens"
    },
    {
        content: "Varus, give me back my legions.",
        author: "Augustus Caesar"
    },
    {
        content: "The Spartans do not ask how many enemies but where they are.",
        author: "Agis II of Sparta"
    },
    {
        content: "Come home with this shield, or upon it.",
        author: "A Spartan mother"
    },
    {
        content: "Who was the first that forged the deadly blade? Of rugged steel his savage soul was made.",
        author: "Tibullus"
    },
    {
        content: "A small country cannot contend with a great; the few cannot contend with the many; and the weak cannot contend with the strong.",
        author: "Mencius"
    },
    {
        content: "A disorderly mob is no more an army than a heap of building materials is a house.",
        author: "Socrates"
    },
    {
        content: "To brave men, the prizes that war offers are liberty and fame.",
        author: "Lycurgus of Sparta"
    },
    {
        content: "War spares not the brave but the cowardly.",
        author: "Anacreon"
    },
    {
        content: "It is the noblest and safest thing for a great army to be visibly animated by one spirit.",
        author: "Archidamus of Sparta"
    },
    {
        content: "Ah! The generals! They are numerous but not good for much!",
        author: "Aristophanes"
    },
    {
        content: "Let them hate us as long as they fear us.",
        author: "Caligula"
    },
    {
        content: "To lead untrained people to war is to throw them away.",
        author: "Confucius"
    },
    {
        content: "Only the brave enjoy noble and glorious deaths.",
        author: "Dionysius"
    },
    {
        content: "The walls shall shake at the noise of the horsemen, and of the wheels, and of the chariots.",
        author: "Ezekiel, XXVI, 10"
    },
    {
        content: "Alta sedent civilis vulnera dextrae. (Deep are the wounds that civil strife inflicts.)",
        author: "Lucan"
    },
    {
        content: "It is pleasant, when the sea is high and the winds are dashing the waves about, to watch from the shores the struggles of another.",
        author: "Lucretius"
    },
    {
        content: "Hannibal knew how to gain a victory, but not how to use it.",
        author: "Maharbal"
    },
    {
        content: "The man who runs away will fight again.",
        author: "Menander"
    },
    {
        content: "An alliance with the powerful is never to be trusted.",
        author: "Phaedrus"
    },
    {
        content: "War is sweet to those who have never experienced it.",
        author: "Pindar"
    },
    {
        content: "How are the mighty fallen in the midst of battle!",
        author: "II Samuel, I, 25"
    },
    {
        content: "March divided and fight concentrated.",
        author: "Military maxim"
    },
    {
        content: "Divide and conquer.",
        author: "Military maxim"
    },
    {
        content: "Nothing happens to anybody which he is not fitted by nature to bear.",
        author: "Marcus Aurelius"
    }
];

function randomQuote() {
    // First, hide the quote and author
    quoteText.classList.remove("visible");
    authorName.classList.remove("visible");
    
    // Wait for fade out to complete
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        
        // Update the content while it's hidden
        quoteText.innerText = quote.content;
        authorName.innerText = quote.author;
        
        // Trigger reflow to ensure the browser recognizes the content change
        void quoteText.offsetWidth;
        
        // Make visible again
        quoteText.classList.add("visible");
        authorName.classList.add("visible");
    }, 500);
}

// Display initial quote immediately
setTimeout(() => {
    // Set initial quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    quoteText.innerText = quote.content;
    authorName.innerText = quote.author;
    
    // Make visible
    quoteText.classList.add("visible");
    authorName.classList.add("visible");
}, 100);

// Then set up the interval for future quotes
setInterval(randomQuote, 10000);