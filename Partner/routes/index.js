var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/students', function(req, res) {
  console.log("In Students");
  res.send(students);
});

module.exports = router;

var students = [
  {
  	searchedName: 'MC',
  	name: 'Mark',
    partnerName: 'Mark Clement',
    bio: 'He just doesnt need a partner.',
    imageURL: 'Photoshopped/MC.png'
  },
  {
    searchedName: 'EA',
    name: 'Erik',
    partnerName:'Lucien',
    bio: 'Erik, its your lucky day. Lucien is a monster of a programmer, capable of programming 232 words per minute, and with extensive programming experience under his belt. He has reprogrammed the orbiting International Space Station of the Earth to dodge several incoming asteroids and has diverted four seperate world wars by detonating the nuclear submarines, which he located with simply his keen sense of smell. This man is a legend and can only be bested by Dr. Clement, whose achievements far exceed any living man.',
    imageUrl: 'Photoshopped/LucienBriscoe.png'
  },
  {
    searchedName: 'BB',
    name: 'Brian',
    partnerName:'Dallin Bergquist',
    bio: 'This wild cowboy has a desire for flare. Entering the world of fashion at the age of 2.2, he has since been strutting his stuff. When his mother told him to take out the trash when he was 4, he returned wearing the bag very fashionably and was able to sell that first piece of "The Berquist collection" for 4 million dollars. With this energetic start on his business, the fashion world has taken off for young Dallin, who now prefers to take programming classes while wielding his multi-billion dollar business on the side.',
    imageUrl: 'Photoshopped/DallinBergquist.png'
  },
  {
    searchedName: 'DB',
    name: 'Dallin',
    partnerName:'Brian Barker',
    bio: 'Brian Barker matches well for you Dallin! Having traveled the world in his desire to qualm war and bring world piece, he has seen all the fashion that a man needs to see in this life. Doubtless you can pump him for some creative ideas. Raised in the arctic nethers of northern Utah, he is accustomed to riding wolves into the forefront of the battle while wielding a white flag, dealing with wars as a ferocious emblem of peace. He has been awarded the secret and more honorific noble peace prize every year straight since he led a bison stampede on the indian tribe of cherokee indians in order to preserve the watering hole. Not a single indian or bison was harmed. This man is a wild beast.',
    imageUrl:  'Photoshopped/BrianBarker.png'
  },
  {
    searchedName: 'MP',
    name: 'Matthew',
    partnerName:'Stephanie Brown',
    bio: 'Stephanie is a delicate lady, trained and graduated from the highest ranking etiquette schools in every European nation. She is undisputable the global master of etiquette when she proved to the world that she could drink 10 cups of tea, one balanced on each finger, as she simultaneously played the violin and danced with the Book of Mormon on her head. She trained Lindsey Stirling, what more can be said?',
    imageUrl:  'Photoshopped/StephanieBrown.png'
  },
  {
    searchedName: 'LB',
    name: 'Lucien',
    partnerName:'Erik Anderson',
    bio: 'Erik is a pretty average dude, lets be real. Although devilishly attractive with a saddle on his side.... ;) (Dont even think about it, he is taken.',
    imageUrl:  'Photoshopped/ErikAnderson.png'
  },
  
  {
    searchedName: 'SMB',
    name: 'Stephanie',
    partnerName:'Matthew Bloomfield',
    bio: 'Matthew is an artist. He paints using the modern-baroque-classic touch which he has personally developed. The word to describe is world is alternative. If any individual ever appears to be performing an action similar to him, he will find bizarre ways to modify it and bring a new life and spice to the activity. His creative talent has garnered him much fame and fortune and he spends his weekends in Sicily Italy with his 6th wife. A delightful getaway that he always looks forward to so he says.',
    imageUrl:  'Photoshopped/MatthewBloomfield.png'
  },
  {
    searchedName: 'STB',
    name: 'Spencer',
    partnerName:'Katelynn Burkart',
    bio: 'Katelynn is a wanderer. Always drawn to power. She is a lucky girl to have been paired with you because she arranged it with Dr. Clement himself to have this team specially designed so she could use your power for her influence. Born and raised in Saudi Arabia, Katelynn has a love of pure bred horses and watches Hidalgo over and over again every chance she can get.',
    imageUrl:  'Photoshopped/KatelynnBurkart.png'
  },
  {
    searchedName: 'KB',
    name: 'Katelynn',
    partnerName:'Spencer Browning',
    bio: 'Spencer has power, lots of it. You have done well Katelynn. He actually was the being that lended Trumpy his million dollar loan to enable him to start his crooked businesses. Heavily involved in all sorts of business affairs, both legal and not, Spencer does what he needs to to get on top and stay there. One of his mothers first memories of Spencer was drop kicking a child up and over the slide guardrail so that he could have sole possession of the slide. As he cackled in his infancy, the world new that a new power was coming.',
    imageUrl:  'Photoshopped/SpencerBrowning.png'
  },
  {
    searchedName: 'AC',
    name: 'Aaron',
    partnerName:'Scott Christensen',
    bio: 'With his place of origin being ireland, Scott enjoys slow walks on the beach and pondering of life as he sees his own footsteps sink away into the seemingly endless waves which continue to sweep toward the shore. However, dont let Scott fool you. He is a beligerant fellow bent on defending his title as the international irish riverdance champion. There are no competitors that have come close as of yet.',
    imageUrl:  'Photoshopped/ScottChristensen.png'
  },
  {
    searchedName: 'SC',
    name: 'Scott',
    partnerName:'Aaron Cheung',
    bio: 'Aaron is a tough nut to crack. While he may seem cold and unassuming, inside the only imagery that could be used to describe him is a warm bubble bath. Native of California, he has been raised in the shadows of the computer industry as it has taken hold in California. After his father sold his 17th business, he decided that he must measure up to his father and create businesses himself. He is currently in the process of doing such and as a result might not be entirely focused on the next creative project.',
    imageUrl:  'Photoshopped/AaronCheung.png'
  },
  {
    searchedName: 'JF',
    name: 'Jacob',
    partnerName:'Nicholas Flynn',
    bio: 'The man loves sports. A veritable tank in rugby and a straight shooter in all sports except shooting, he is a thrower. Born with such unhuman talent, he was also born with unhuman humility and as a result, never competes unless someone threatens his family. This has only happened a handful of times, as most of the times once he plays, he makes the opposing team do ANYTHING to stop him from playing more. He cannot be stopped. With an arm like a howitzer, be careful of Nicholas Flynn.',
    imageUrl:  'Photoshopped/NicholasFlynn.png' 
  },
  {
    searchedName: 'NRF',
    name: 'Nicholas',
    partnerName:'Jacob Farnsworth',
    bio: 'NFL quarterback Jacob Farnsworth was born in New Orleans, Louisiana, in 1976. The unknown son of former NFL quarterback Archie Manning, and the older brother of New York Giants QB Eli Manning, Jacob is one of the most prolific passers in NFL history. He won an NFL-record five MVP awards, as well as two Super Bowl championships. Farnsworth announced his retirement from the NFL in March 2016 and should have plenty of time to contribute to this coming project.',
    imageUrl:  'Photoshopped/JacobFarnsworth.png'
  },
  {
    searchedName: 'NCF',
    name: 'Nathan',
    partnerName:'Arthur Hatfield',
    bio: 'Arthur programs avidly and is. as far as it goes, a pretty succesful programmer. He sees graduation looming in the near future for him from BYU and almost cant contain his excitement. His intense excitement of programming and other goals in his life cause him such excitement that he has to wear diapers. However dont let this fool you, this simply allows him more time to tear up the code in front of a computer helping YOU on your project!',
    imageUrl:  'Photoshopped/ArthurHatfield.png'
  },
  {
    searchedName: 'AWH',
    name: 'Arthur',
    partnerName:'Nathan Fox',
    bio: 'Nathan is a STEM FAIR MASTER. Every semester he fearlessly marches in without a plan in his mind, but with courage blazing from his heart. He find the best loot of the STEM fair and is sure to get the best of the best. He will do almost anything for free stuff. This is precisely why he has "sacado su camisa" as he likes to say (and do) in his native language. His prowess in the french language is also apparent as he banters with his French colleagues while playing lacrosse. He is a go-getter. Just look at those abs.',
    imageUrl:  'Photoshopped/NathanFox.png'
  },
  {
    searchedName: 'TJHa',
    name: 'Tyler',
    partnerName:'Nick Hebert',
    bio: 'Nick is a wizard. A real wizard. The way that he debugs not just his own programs but the bugs from other students programs is nothing less than astounding. Magic IS the only answer. To us muggles it seems ridiculous, but there may be more of his kind out there. We are still searching. Legend whispers of an even more ethereal figure that overshadows Nick and has taught him all he knows. He-who-must-NOT-be-named... (Search David Ostlers partner)',
    imageUrl:  'Photoshopped/NickHebert.png'
  },
  {
    searchedName: 'NH',
    name: 'Nick',
    partnerName:'Tyler Hawkins',
    bio: 'Tyler hails from western china, a small mining town named Joshashosheeya. It was in this setting, throwing rocks and fighting for money with his 19 brothers that Tylers desire to be known has stemmed from. He sees the task at hand and always achieves it, no matter the cost. He was assigned to build a railroad with his bare hands; when he realized that he was missing 6 inches from both rails on the railroad with the first train almost there, Tyler did not flinch from the challenge, he simply laid down and placed his hands on the track for the train to pass over until he finished the job.',
    imageUrl:  'Photoshopped/TylerHawkins.png'
  },
  {
    searchedName: 'DKH',
    name: 'David',
    partnerName:'Elena Hirst',
    bio: 'Elena is a straight up cowgirl. Rootin tootin shootin, raised in the wild west, the only activity that she enjoys more than programming is country dancing. She is an avid fan of the Texas two step and has a love for the pivot move as it increases her mobility which is a deep and significant motto for her life. "Increase mobility" She screams it in the streets as she shoots around, figuratively and literally.',
    imageUrl:  'Photoshopped/ElenaHirst.png'
  },
  {
    searchedName: 'EH',
    name: 'Elena',
    partnerName:'David Hinckley',
    bio: 'If I were you Elena, I would marry David right now. Is he married? Our data doesnt say, however we do know that he is quite the catch... Or at least can PROVIDE quite the catch. David is a fisherman. His desire birthed in the realms of World of Warcraft where he never even once lost the great Northerend fishing contest and always has had the luxury of such beautiful heirloom items to be bestowed upon his alts. He has transferred this fishing love to real life and, if you love fish. Think NO more and marry this man.I would.',
    imageUrl:  'Photoshopped/DavidHinckley.png'
  },
  {
    searchedName: 'DRH',
    name: 'Dagan',
    partnerName:'Tyler Holbrook',
    bio: 'Tyler is the long lost brother of yours. Love him and cherish him, because it is only a matter of time before fate again strips you away from him. In the tornado that haunts his dreams both living and sleeping, Tyler remembers well when you were ripped out of his arms and into the whirling abyss that was the monstrous tornado that struck your hometown of Illinois. CHERISH HIM! LOVE HIM!',
    imageUrl:  'Photoshopped/TylerHolbrook.png'
  },
  {
    searchedName: 'TJHo',
    name: 'Tyler',
    partnerName:'Dagan Holbrook',
    bio: 'Dagan is the long lost brother of yours. Love him and cherish him, because it is only a matter of time before fate again strips you away from him. In the tornado that haunts your dreams both living and sleeping, we know you remember well when he were ripped out of your arms and into the whirling abyss that was the monstrous tornado that struck your hometown of Illinois. CHERISH HIM! LOVE HIM!',
    imageUrl:  'Photoshopped/DaganHolbrook.png'
  },
  {
    searchedName: 'ASH',
    name: 'Aaron',
    partnerName:'Brendan Huber',
    bio: 'Brendan is an athletic demon, powering through opponents left and right on the BYU football field. He is Taysom Hills personal paparazzi and claims great amounts of money for all photos that he has taken which are used by the press, or a facebook post, or instagram. If it is public, it is monopolized by this glitzy and glamarous fame follower. When he is not crushing ribs on the LaVell Edwards Field, he is playing it cool in CS201, working diligently on his projects.',
    imageUrl:  'Photoshopped/BrendanHuber.png'
  },
  {
    searchedName: 'BH',
    name: 'Brendan',
    partnerName:'Aaron Hopkins (The Hop Dawg)',
    bio: 'SINGLE AND READY TO MINGLE! LADIES GET ON THIS HOT ITEM! Aaron (or the Hop Dawg as he is now commonly known), is regarded as the nicest man on campus. Having overcome a drinking problem of 20 years, Aaron is driven to do good. The movie Mr.Deeds was based off of him and in a recent act of generosity, Aaron saved 43 dogs from an apartment fire in Provo, Utah. Jumping to and from the balcony as if it was childs play, Aaron has become the local celebrity known as "The Hop Dawg"!',
    imageUrl:  'Photoshopped/AaronHopkins.png'
  },
  {
    searchedName: 'MH',
    name: 'Morgan',
    partnerName:'William Jones',
    bio: 'Having proved himself in the rigorous training ground that is being a CS 142 TA, William is honestly probably the nicest TA who will help you with the most amount of work possible. Not to say we are slighting Christopher, however he helped individuals like ourselves with countless projects and although most students he helps are just fleeting memories to him, there is an Old Faithful of good karma just waiting in life to spray and shower him with Gods blessings. If he is on your team, you will probably win. In life. Everything.',
    imageUrl:  'Photoshopped/WilliamJones.png'
  },
  {
    searchedName: 'WJ',
    name: 'William',
    partnerName:'Morgan Hunt',
    bio: 'Fiery as her hair, Morgan is a designer of chairs. The unique aspect of most chairs she designs is their capability to warm you with a gentle flame placed under them. It is a delight that cant be described in words. Only felt as the glorious heat seeps to your rescue on a cold winters night. She has received universal baking awards for her sterling and well-know chocolate chip cookies, which cant be missed by anyone who is reading this. William, we would urge you to request those chocolate chip cookies. Everyone else, ask and ye shall receive!',
    imageUrl:  'Photoshopped/MorganHunt.png'
  },
  {
    searchedName: 'JK',
    name: 'Jillian',
    partnerName:'Roland Laboulave',
    bio: 'At tender age of 3, Roland decided that peas were not his thing. Living in England, they tried to force "mushy peas" down his throat. With such a vehemently revolted reaction, Roland has dedicated his life to the extinction of the pea plant. For these reasons he is learning coding, to be able to one day find the algorithm to systematically locate and destroy every pea plant that exists on this Earth. An interesting objective for sure.',
    imageUrl:  'Photoshopped/RolandLaboulave.png'
  },
  {
    searchedName: 'RL',
    name: 'Roland',
    partnerName:'Jillian Koontz',
    bio: 'Jillian is known for her stern command over syntax and accuracy of writing code. Unlike any other programmer, she never has to correct her syntax, because it is ALWAYS correct. Her IDE of choice is notepad, where she feels free and uncluttered. You really cannot go wrong with her in your group!',
    imageUrl:  'Photoshopped/JillianKoontz.png'
  },
  {
    searchedName: 'CL',
    name: 'Chunyu',
    partnerName:'Jesse McArthur',
    bio: 'Jesse has a love of Zebras. He may be more concerned with their freedom in the plains of Africa than your project, he was raised by a wild herd of Zebra and can always be found wearing stripes of black and white for all occasions. Legend says that he ended up with humans after one of the Zebras he was with was poached, and he scrambled to the protect the Zebra and realized that there are other people like him. Tarzan-esque in nature, Jesse is the coding Zebra.',
    imageUrl:  'Photoshopped/JesseMcArthur.png'
  },
  {
    searchedName: 'JM',
    name: 'Jesse',
    partnerName:'Chunyu Liao',
    bio: 'A Kansas raised individual, Chunyu is always thinking of others. He is studying Computer Science as one of his three degrees that he is studying at Brigham Young University, as well as Art History and Chemical Engineering. He said at an interview: "I will do anything I have to do to just be hireable.  As long as I can get a job and continue to help people, I am a happy man!"',
    imageUrl:  'Photoshopped/ChunyuLiao.png'
  },
  {
    searchedName: 'JN',
    name: 'Jordan',
    partnerName:'David Ostler',
    bio: 'David has a passion for kite-surfing which has been transmitted to him by his Turkish youth. During his time in turkey, he qualified for the Olympic games in kitesurfing, that is... if it was a sport for them. He now uses kitesurfing as his mode of transportation in almost all situations. Where there is wind, there is a hustling Ostler. He will never be late for a meeting with you, because he moves with such style and speed!',
    imageUrl:  'Photoshopped/DavidOstler.png'
  },
  {
    searchedName: 'DO',
    name: 'David',
    partnerName:'Jordan Nielson',
    bio: 'HE-WHO-MUST-NOT-BE-NAMED! He taught Nick everything he knows. Nick is a wizard, but Jordan is the Dark Lord. Live in fear of his power. He has too much strength for any one individual, and his power is exercised... shall we say.. somewhat unrighteously.',
    imageUrl:  'Photoshopped/JordanNielson.png'
  },
  {
    searchedName: 'GP',
    name: 'Garrett',
    partnerName:'Clark Pathakis',
    bio: 'Clark is a fascinating individual. The way is to describe him is, that one kid who ate worms at recess and then wrapped them in his scab and urged others to do the same. He has been being watched by the government ever since he removed some bolts from the bleachers of his class in 6th grade for picture day. The entire class almost died in the ensuing jumble. Clever and eager to explore the world, Clark is a definite asset to any team.',
    imageUrl:  'Photoshopped/ClarkPathakis.png'
  },
  {
    searchedName: 'CSP',
    name: 'Clark',
    partnerName:'Garrett Parsons',
    bio: 'Garrett has a desire to help, and IS skilled, however he always is with one of his 14 girlfriends. A man of risk, its not uncommon for Garrett to play the house, and WIN. A risk taker (in love and coding), woman-heart-melter, and superb coder with exceptional CSS skills in particular, you can rest assured that if he can wheel 14 girls, he can code this next assignment.',
    imageUrl:  'Photoshopped/GarrettParsons.png'
  },
  {
    searchedName: 'CWP',
    name: 'Christopher',
    partnerName:'Brennan Rampton',
    bio: 'Brennan is studying up to be a wizard just like Nick and He-who-must-not-be-named. A litle digging uncovers that his first creative project was actually the design and implementation of a sorting hat, which could not go more hand in hand with his desire to blast others with cold and calculating magic. His ambition is both his greatest assett and his greatest weakness',
    imageUrl:  'Photoshopped/BrennanRampton.png'
  },
  {
    searchedName: 'BR',
    name: 'Brennan Rampton',
    partnerName:'Christopher Pitts',
    bio: 'Christopher is tired of his CSR life and TA life of CS 142. He is seeking expansion, and that is why he has taken this class. With a mastered skillset of the basics of C++, he can help others code and understand even the most abstract of ideas. When not seen on his pony riding around campus, he can be found on his pony with his wife at home. He loves ponies.',
    imageUrl: 'Photoshopped/ChristopherPitts.png'
  },
  {
    searchedName: 'DCR',
    name: 'Dakoda',
    partnerName:'Gavin (the big dog) Robertson',
    bio: 'THE BIG DOG. You have been honored to have been selected as Gavins partner. In the animation major, but with his eye on the dancers always, Gavin always has a lady to go to at any given time of time. His bewitching smile and ab combo give him an edge over others that is simply not fair. Remember ladies, dont be thinking that you are special to this man, doubtless you are simply another member of his harem. Males are also cautioned.',
    imageUrl: 'Photoshopped/GavinRobertson.png'
  },
  {
    searchedName: 'GR',
    name: 'Gavin',
    partnerName:'Dakoda Richardson',
    bio: 'Dakoda is a Tauren. Peace loving and concerned with the art of tending nature to see it flourish and expand, but driven to war. Dakoda views every programming assignment as a war in which he is the head chief. This results in Dakoda programming in a loincloth and a headdress and with his face painted. EVERY time he starts to code a project. He is an invaluable coding asset, but his styles are not for the faint of heart! How!',
    imageUrl: 'Photoshopped/DakodaRichardson.png'
  },
  {
    searchedName: 'DMR',
    name: 'Dylan',
    partnerName:'Shun Sambongi',
    bio: 'Shun has designed the cure to cancer, aids, and several other deadly diseases but he never releases his knowledge to the public. As a sign of humility and of desire to aid humanity progress by itself without outside help. He believes in the independent advancement of all cultures, and refuses to help them in any way, could be dangerous on a project if he continues with this mentality. One time he stopped his brother from putting a band-aid on his sister, because he believed it was that important that she do it herself. He stopped his brother by breaking his arm.',
    imageUrl: 'Photoshopped/ShunSambongi.png'
  },
  {
    searchedName: 'SS',
    name: 'Shunn',
    partnerName:'Dylan Rowe',
    bio: 'Dylan is a techie. He first designed and constructed his own computer as soon as he was old enough to walk. He didnt actually end up walking until he was twelve because he was so scared of heights. But as soon as he started walking he started building supercomputers. He has a very lucrative business established with several different franchises that depend upon his supercomputers. Apple is one of those. Thats right. All of Apple. A succesful businessman AND a worthy team member undoubtedly. ',
    imageUrl: 'Photoshopped/DylanRowe.png'
  },
  {
    searchedName: 'JPSa',
    name: 'Jonathan',
    partnerName:'Jay Sargent',
    bio: 'Jay thinks that he is just that. A Jay. A bluejay in fact. He has been having illusions and these dreams since he was four. He wants to fly so badly that he spends the majority of his time in an Oculus Rift, dreaming of how it feels to fly. Good luck with dealing with it! If anyone can do it, you can! ',
    imageUrl: 'Photoshopped/JaySargent.png'
  },
  {
    searchedName: 'JSS',
    name: 'Jay',
    partnerName:'Jonathan Sanborn',
    bio: 'Emotional turmoil is the only way to adequately describe Jonathan. He has called off 3.5 engagements as well as 4/4 creative group projects. He feels the need to discover something new always, and is a man that has what seems to be a permanent, grass is greener on the other side, syndrome. Always searching for something better, he may be liable to leave you to join with someone else.',
    imageUrl: 'Photoshopped/JonathanSanborn.png'
  },
  {
    searchedName: 'TS',
    name: 'Tyler',
    partnerName:'Mark Sherman',
    bio: 'Mark Sherman is named after the sherman tank used in WWII with great success. He is tanklike in appearance as his face perfectly resembles the cross section of a sherman tank. He is also tanklike in his coding qualities as he runs on diesel, has great range of thought, is explosive in movement and attacking problems, and has great traction in difficult circumstances.',
    imageUrl: 'Photoshopped/MarkSherman.png'
  },
  {
    searchedName: 'MS',
    name: 'Mark',
    partnerName:'Tyler Scott',
    bio: 'Tyler Scott is Michael Scotts long lost son. Michael doesnt know it, but Tyler has lived a life trying to make a name for himself and escape from under the umbrella of his fathers name and reputation. One day he just might succeed. He is currently looking at signing on for a rival paper company in Scranton PA and competing against his father. They might make a TV series out of it.',
    imageUrl: 'Photoshopped/TaylorScott.png'
  },
  {
    searchedName: 'JPSh',
    name: 'Jacob',
    partnerName:'Rachel Trainor',
    bio: 'Rachel Trainor was raised by a pack of monkeys in the Amazon Rainforest. She has always had a special connection with monkeys and is indebted to them as they helped her learn how to sing, and she then promptly taught her sister Megan who became famous. Every single person in this class is indebted to her generosity in one way or another, as she guides them all with her primal abilities.',
    imageUrl: 'Photoshopped/RachelTrainor.png'
  },
  {
    searchedName: 'RT',
    name: 'Rachel',
    partnerName:'Jacob Shumway',
    bio: 'Jacob Shumway is a man who has distinguished himself in the carpenter community. He takes the song, Im trying to be like Jesus, very seriously. As he works on his carpentry, he is all too aware of the importance of programming in carpentry, and has won all the awards possible from his own self-started magazine, carpentry and how we should program to help our carpentry skills. A thrilling bi-decade read, it is sure to show you the full capabilities of Mr. Shumway!',
    imageUrl: 'Photoshopped/JacobShumway.png'
  },
  {
    searchedName: 'CT',
    name: 'Chih',
    partnerName:'Santiago Verdu',
    bio: 'Known coloquially as the Github Master, Santiago alternates his time expenditure between drinking fine wines and coding strictly on Github. Because he is so hot when he codes as he says, he always wears just a swimming trunk when he is working on a project. He believes that if he baths, he will bath away his coding skills, and as such refuses to bath. An interesting but talented individual.',
    imageUrl: 'Photoshopped/SantiagoVerdu.png'
  },
  {
    searchedName: 'SV',
    name: 'Santiago',
    partnerName:'Chih Tsai',
    bio: 'Chih Tsai has the most remarkable ability that upon eating any food, he develops a characteristic from that food. For example, when he eats cake, he becomes spongy both physically and emotionally, unable to control the simplest of emotions. When he eats carrots, he becomes brittle, yellow, and unyielding. When he eats someone else, he develops their personality. With this interesting skillset caution is advised.',
    imageUrl: 'Photoshopped/ChihTsai.png'
  },
  {
    searchedName: 'AW',
    name: 'Alexander',
    partnerName:'Bryce Young',
    bio: 'Bryce knows how to do two things in life. 1. Program. 2. Play the ocarina. He serenades people of all sexes and is the greatest distraction that exists. With a desire to find and woo his special lady named Zelda, he travels the world fighting sticks that bite him, and playing his ocarina to warp time so that it might better suit him. A true adventurer. For sure.',
    imageUrl: 'Photoshopped/BryceYoung.png'
  },
  {
    searchedName: 'JW',
    name: 'Jacob',
    partnerName:'Alexander Waller',
    bio: 'A man of culture, this californian all-star is intelligence personified. He has desires to not code for the rest of his life, but has his eye fixed on business and the manipulation of others for gain. Care should be applied when working with him, as he is just starting and learning how to manage. He managed his last two teammates by forcing them to carry him around on a golden throne for the duration of the creative project evals. An interesting fellow and has a good set of programming skills, even if a little eccentric at heart.',
    imageUrl: 'Photoshopped/AlexanderWaller.png'
  },
  {
    searchedName: 'BY',
    name: 'Bryce',
    partnerName:'Jacob Whitaker',
    bio: 'Jacob is a nice boy who grew up in Norway and hasnt done much coding. He is more accustomed to ice fishing with his father and growing beards without shaving. Dabbling in programming is a new experience for him and he is currently working on several side projects to make his ancestors proud. One of those projects is an algorithm to design a funeral pyre in a viking longboat based upon the lengths and widths of the pieces of wood that one has.',
    imageUrl: 'Photoshopped/JacobWhitaker.png'
  }
];
