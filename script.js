/* ==========================================
   MOVIEZWORLD — All Movies Data + Logic
   ========================================== */

const T = 'https://wsrv.nl/?url=image.tmdb.org/t/p/w500';
const TB = 'https://wsrv.nl/?url=image.tmdb.org/t/p/original';
const PH = (title, w=300, h=450) => `https://placehold.co/${w}x${h}/1a1a1a/e50914?text=${encodeURIComponent(title)}`;

const movies = [
  // ===== TELUGU (20) =====
  {id:1,title:"RRR",year:2022,language:"Telugu",type:"movie",genres:["Action","Drama","Fantasy"],
    director:"S.S. Rajamouli",cast:["N.T. Rama Rao Jr.","Ram Charan","Alia Bhatt","Ajay Devgn","Shriya Saran"],
    imdbRating:7.8,duration:"187 min",
    description:"A fictional story about two legendary revolutionaries — Alluri Sitarama Raju and Komaram Bheem — and their journey far from home before they started fighting for their country in the 1920s.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg"},
  {id:2,title:"Baahubali: The Beginning",year:2015,language:"Telugu",type:"movie",genres:["Action","Fantasy","Drama"],
    director:"S.S. Rajamouli",cast:["Prabhas","Rana Daggubati","Anushka Shetty","Tamannaah"],
    imdbRating:8.1,duration:"159 min",
    description:"In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples. He eventually discovers he is the heir to a great legacy.",
    poster:T+"https://www.themoviedb.org/t/p/w1280/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",backdrop:TB+"https://www.themoviedb.org/t/p/w1280/9BAjt8nSSms62uOVYn1t3C3dVto.jpg"},
  {id:3,title:"Baahubali: The Conclusion",year:2017,language:"Telugu",type:"movie",genres:["Action","Fantasy","Drama"],
    director:"S.S. Rajamouli",cast:["Prabhas","Rana Daggubati","Anushka Shetty","Ramya Krishnan","Sathyaraj"],
    imdbRating:8.2,duration:"171 min",
    description:"When Shiva, the son of Baahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/21sC2assImQIYCEDA84Qh9d1RsK.jpg",backdrop:TB+"/qPfLibKBOKIhVODoxYBmTKxKYjF.jpg"},
  {id:4,title:"Devara: Part 1",year:2024,language:"Telugu",type:"movie",genres:["Action","Thriller","Drama"],
    director:"Koratala Siva",cast:["Jr. NTR","Saif Ali Khan","Janhvi Kapoor","Prakash Raj"],
    imdbRating:6.1,duration:"166 min",
    description:"The story of a feared man who ruled the sea and his legacy that haunts his son, who must confront demons of the past to find his own identity and protect his people.",
    poster:T+"https://www.themoviedb.org/t/p/w1280/lQfuaXjANoTsdx5iS0gCXlK9D2L.jpg",backdrop:TB+"/gj9StOJcbSpvMq3y8IHTV4GXuKF.jpg"},
  {id:5,title:"Kalki 2898 AD",year:2024,language:"Telugu",type:"movie",genres:["Sci-Fi","Action","Fantasy"],
    director:"Nag Ashwin",cast:["Prabhas","Deepika Padukone","Amitabh Bachchan","Kamal Haasan","Disha Patani"],
    imdbRating:6.6,duration:"181 min",
    description:"Set in a dystopian future in 2898 AD, the film is a mythological sci-fi epic where the eternal prophecy of Kalki Avatar unfolds against the backdrop of a post-apocalyptic world.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg",backdrop:TB+"/okQgjt9E0mCAuGVOPQx9bRaCvzQ.jpg"},
  {id:6,title:"Pushpa: The Rise",year:2021,language:"Telugu",type:"movie",genres:["Action","Crime","Drama"],
    director:"Sukumar",cast:["Allu Arjun","Rashmika Mandanna","Fahadh Faasil","Sunil","Anasuya Bharadwaj"],
    imdbRating:7.6,duration:"179 min",
    description:"Pushpa Raj, a laborer who rises up in the red sandalwood smuggling syndicate through his guts and grills. His rise brings him into conflict with the police and rival smugglers.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/oaRk2HgOirEeNuDCwwScmq7rKvS.jpg",backdrop:TB+"/rugyJdeoJm7cwQxuDCcCXNwBhLG.jpg"},
  {id:7,title:"Pushpa: The Rule",year:2024,language:"Telugu",type:"movie",genres:["Action","Crime","Drama"],
    director:"Sukumar",cast:["Allu Arjun","Rashmika Mandanna","Fahadh Faasil","Jagapathi Babu"],
    imdbRating:7.0,duration:"192 min",
    description:"Pushpa Raj returns fiercer than ever as he tries to consolidate his empire, while SP Bhanwar Singh Shekawat comes back with renewed vengeance to destroy him.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/bhxZj3y59cK7JtGdV285dhDRaMe.jpg",backdrop:TB+"/hiCuGnV5Mm0FDQZFGB3FjQDpw89.jpg"},
  {id:8,title:"Jersey",year:2019,language:"Telugu",type:"movie",genres:["Drama","Sports","Romance"],
    director:"Gowtam Tinnanuri",cast:["Nani","Shraddha Srinath","Sathyaraj","Ronit Kamra"],
    imdbRating:8.5,duration:"157 min",
    description:"A failed cricketer decides to follow his dream and represent the state team, to fulfill his son's wish of getting a jersey as a gift. A deeply emotional tale of redemption and love.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/bU9q9yVtxeBiC0Do27CekHXNE6D.jpg",backdrop:TB+"/p2eYEIhFmj6LB89MaCMSByp1N3Q.jpg"},
  {id:9,title:"Rangasthalam",year:2018,language:"Telugu",type:"movie",genres:["Action","Drama","Romance"],
    director:"Sukumar",cast:["Ram Charan","Samantha Ruth Prabhu","Aadhi Pinisetty","Jagapathi Babu"],
    imdbRating:8.3,duration:"170 min",
    description:"Set in the 1980s, a partially-deaf man fights alongside his brother against the corrupt village committee that exploits farmers with money-lending schemes.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/yiEzDgBBFC25Zd6z0r7sMngn5vr.jpg",backdrop:TB+"/7bO8sMjBB6bGSmwwzPK6jYLXLfb.jpg"},
  {id:10,title:"Janatha Garage",year:2016,language:"Telugu",type:"movie",genres:["Action","Drama","Thriller"],
    director:"Koratala Siva",cast:["Jr. NTR","Mohanlal","Samantha Ruth Prabhu","Nithya Menen"],
    imdbRating:7.0,duration:"171 min",
    description:"An environmentalist's son joins forces with a vigilante group to protect nature from powerful industrialists and corrupt politicians who exploit natural resources.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/cj9bhdru0CxnAnCYAIy63P134eL.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/cj9bhdru0CxnAnCYAIy63P134eL.jpg"},
  {id:11,title:"Aravinda Sametha",year:2018,language:"Telugu",type:"movie",genres:["Action","Drama","Romance"],
    director:"Trivikram Srinivas",cast:["Jr. NTR","Pooja Hegde","Supriya Pathak","Jagapathi Babu"],
    imdbRating:7.5,duration:"163 min",
    description:"A young man caught in a family feud between two powerful clans tries to end the generational cycle of violence while falling in love with his enemy's daughter.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/if8A96hBdeMfeduQqtuccvi6gYF.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/if8A96hBdeMfeduQqtuccvi6gYF.jpg"},
  {id:12,title:"Temper",year:2015,language:"Telugu",type:"movie",genres:["Action","Drama","Thriller"],
    director:"Puri Jagannadh",cast:["Jr. NTR","Kajal Aggarwal","Prakash Raj","Posani Krishna Murali"],
    imdbRating:7.4,duration:"155 min",
    description:"A corrupt police officer undergoes a transformation when he encounters a rape victim who has lost everything, leading him to take on the system to deliver justice.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/hA793thpccdoAHSOZ5GNbtdSQlC.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/hA793thpccdoAHSOZ5GNbtdSQlC.jpg"},
  {id:13,title:"Ala Vaikunthapurramuloo",year:2020,language:"Telugu",type:"movie",genres:["Action","Comedy","Drama"],
    director:"Trivikram Srinivas",cast:["Allu Arjun","Pooja Hegde","Tabu","Jayaram"],
    imdbRating:7.5,duration:"167 min",
    description:"A man who was swapped at birth grows up in a middle-class family and discovers his true origins while navigating love, family, and an unexpected inheritance.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/2rzORJaegE2bbKNVkQXbZCeV0BP.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/2rzORJaegE2bbKNVkQXbZCeV0BP.jpg"},
  {id:14,title:"Arjun Reddy",year:2017,language:"Telugu",type:"movie",genres:["Drama","Romance"],
    director:"Sandeep Reddy Vanga",cast:["Vijay Deverakonda","Shalini Pandey","Rahul Ramakrishna"],
    imdbRating:8.0,duration:"181 min",
    description:"A short-tempered house surgeon gets used to drugs and alcohol when his girlfriend is forced to marry another man. A raw, intense drama about love, loss, and self-destruction.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/kHubDgL59I5hCn7ccBYvU7bKY1r.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/kHubDgL59I5hCn7ccBYvU7bKY1r.jpg"},
  {id:15,title:"Magadheera",year:2009,language:"Telugu",type:"movie",genres:["Action","Fantasy","Romance"],
    director:"S.S. Rajamouli",cast:["Ram Charan","Kajal Aggarwal","Dev Gill","Srihari"],
    imdbRating:7.7,duration:"157 min",
    description:"The story of two lovers, separated by a brutal war 400 years ago, who are reincarnated in the modern era and must rediscover each other and fulfill their destiny.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/xK7MEV56GF291VG0U5XnVJuvNv3.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/xK7MEV56GF291VG0U5XnVJuvNv3.jpg"},
  {id:16,title:"Eega",year:2012,language:"Telugu",type:"movie",genres:["Fantasy","Action","Thriller"],
    director:"S.S. Rajamouli",cast:["Nani","Samantha Ruth Prabhu","Sudeep"],
    imdbRating:8.0,duration:"132 min",
    description:"A man murdered by a powerful villain reincarnates as a housefly and seeks revenge with the help of his beloved. A uniquely imaginative revenge thriller from a fly's perspective.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/pX7fn4EZrg2YFlV4GNMIfHDOQZ6.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/pX7fn4EZrg2YFlV4GNMIfHDOQZ6.jpg"},
  {id:17,title:"HanuMan",year:2024,language:"Telugu",type:"movie",genres:["Action","Fantasy","Sci-Fi"],
    director:"Prasanth Varma",cast:["Teja Sajja","Amritha Aiyer","Varalaxmi Sarathkumar","Vinay Rai"],
    imdbRating:7.5,duration:"135 min",
    description:"An ordinary man from a poverty-stricken village gains extraordinary superpowers through a divine gemstone and becomes a protector of his people, fighting powerful forces of evil.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/m1zq48rWSXxplzoJR8YtbXWnnHM.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/m1zq48rWSXxplzoJR8YtbXWnnHM.jpg"},
  {id:18,title:"Dasara",year:2023,language:"Telugu",type:"movie",genres:["Action","Crime","Drama"],
    director:"Srikanth Odela",cast:["Nani","Keerthy Suresh","Samuthirakani","Shine Tom Chacko"],
    imdbRating:6.8,duration:"168 min",
    description:"Set in the coal mines of Singareni, a man with a troubled past must make difficult choices when the woman he loves becomes a pawn in a deadly power struggle.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/4OTVoCVXa5aHDZl8opKoIV9Ezr5.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/4OTVoCVXa5aHDZl8opKoIV9Ezr5.jpg"},
  {id:19,title:"Sye Raa Narasimha Reddy",year:2019,language:"Telugu",type:"movie",genres:["Action","Biography","History"],
    director:"Surender Reddy",cast:["Chiranjeevi","Ram Charan","Amitabh Bachchan","Vijay Sethupathi","Nayanthara"],
    imdbRating:6.8,duration:"170 min",
    description:"Based on the life of freedom fighter Uyyalawada Narasimha Reddy, who led an armed rebellion against British colonial rule in 1847, a full decade before the 1857 uprising.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/uEheujJysophwGaqHWPu1UCPthl.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/uEheujJysophwGaqHWPu1UCPthl.jpg"},
  {id:20,title:"Saaho",year:2019,language:"Telugu",type:"movie",genres:["Action","Thriller","Sci-Fi"],
    director:"Sujeeth",cast:["Prabhas","Shraddha Kapoor","Neil Nitin Mukesh","Arun Vijay","Jackie Shroff"],
    imdbRating:5.2,duration:"170 min",
    description:"An undercover cop races against time to find a MacGuffin in a heist-action thriller featuring mind-bending plot twists and high-octane action sequences.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/abjWQwUakmBUecf73jiZDx5iex0.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/abjWQwUakmBUecf73jiZDx5iex0.jpg"},

  // ===== KANNADA (10) =====
  {id:21,title:"KGF: Chapter 1",year:2018,language:"Kannada",type:"movie",genres:["Action","Drama","Crime"],
    director:"Prashanth Neel",cast:["Yash","Srinidhi Shetty","Ramachandra Raju","Malavika Avinash"],
    imdbRating:8.2,duration:"156 min",
    description:"In the 1970s, a gangster rises to become the overlord of the world's largest gold mine, Kolar Gold Fields, driven by a promise made to his dying mother.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg"},
  {id:22,title:"KGF: Chapter 2",year:2022,language:"Kannada",type:"movie",genres:["Action","Drama","Crime"],
    director:"Prashanth Neel",cast:["Yash","Sanjay Dutt","Raveena Tandon","Srinidhi Shetty","Prakash Raj"],
    imdbRating:8.4,duration:"168 min",
    description:"Rocky's fearsome reputation extends far beyond Kolar now. But while he faces the wrath of Adheera, the governments of India and the media try to strike down his empire.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/khNVygolU0TxLIDWff5tQlAhZ23.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/khNVygolU0TxLIDWff5tQlAhZ23.jpg"},
  {id:23,title:"Kantara",year:2022,language:"Kannada",type:"movie",genres:["Action","Mystery","Fantasy"],
    director:"Rishab Shetty",cast:["Rishab Shetty","Sapthami Gowda","Kishore Kumar G.","Achyuth Kumar"],
    imdbRating:9.1,duration:"148 min",
    description:"A man protects his tribe's forest rights from land grabbers while an ancient deity's power runs through his bloodline, blending folklore, faith, and fierce action.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/jIsKmkxMzdCZ0Ux1GVSnu8m6Na6.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/jIsKmkxMzdCZ0Ux1GVSnu8m6Na6.jpg"},
  {id:24,title:"Kantara: Chapter 1",year:2025,language:"Kannada",type:"movie",genres:["Action","Mystery","Fantasy"],
    director:"Rishab Shetty",cast:["Rishab Shetty","Sapthami Gowda"],
    imdbRating:8.0,duration:"TBA",
    description:"The highly anticipated sequel to the cult phenomenon Kantara, diving deeper into the mythology, the divine deity Panjurli, and the ancient secrets of coastal Karnataka.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/qQBZTuCnaXMkMiLEW5ANxVMngz0.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/qQBZTuCnaXMkMiLEW5ANxVMngz0.jpg"},
  {id:25,title:"Vikrant Rona",year:2022,language:"Kannada",type:"movie",genres:["Action","Mystery","Fantasy"],
    director:"Anup Bhandari",cast:["Kichcha Sudeepa","Jacqueline Fernandez","Nirup Bhandari","Neetha Ashok"],
    imdbRating:6.0,duration:"150 min",
    description:"In a remote, superstition-ridden village where a series of mysterious deaths rock the community, a legendary detective must unravel supernatural secrets to find the truth.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/jq1yH1pT8VMZONLMTgOFUDgitNh.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/jq1yH1pT8VMZONLMTgOFUDgitNh.jpg"},
  {id:26,title:"777 Charlie",year:2022,language:"Kannada",type:"movie",genres:["Drama","Comedy","Romance"],
    director:"Kiranraj K",cast:["Rakshit Shetty","Sangeetha Sringeri","Danish Sait","Raj B. Shetty"],
    imdbRating:8.8,duration:"168 min",
    description:"A reclusive, heartbroken loner finds the will to live through his friendship with a stray puppy named Charlie. A profoundly touching journey of love, healing, and loyalty.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/qArPmXH0aWsT3SEtYl8XrU2Oz48.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/qArPmXH0aWsT3SEtYl8XrU2Oz48.jpg"},
  {id:27,title:"Kirik Party",year:2016,language:"Kannada",type:"movie",genres:["Comedy","Drama","Romance"],
    director:"Rishab Shetty",cast:["Rakshit Shetty","Rashmika Mandanna","Samyukta Hornad","Achyuth Kumar"],
    imdbRating:8.5,duration:"155 min",
    description:"A mischievous engineering student's college life gets turned upside down when strict new rules are enforced. A fun, relatable, and emotionally resonant coming-of-age story.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/oKPrrCNGJuYdmn0ZeUZbPCAvvun.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/oKPrrCNGJuYdmn0ZeUZbPCAvvun.jpg"},
  {id:28,title:"Ulidavaru Kandanthe",year:2014,language:"Kannada",type:"movie",genres:["Thriller","Crime","Drama"],
    director:"Rakshit Shetty",cast:["Rakshit Shetty","Raj B. Shetty","Danish Sait","Achyuth Kumar"],
    imdbRating:8.7,duration:"141 min",
    description:"A journalist investigates a murder in a coastal Karnataka town, where multiple perspectives reveal a complex web of revenge, love, and tragedy among the fisher folk.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/b7Ee4DKKhNVYNV84rovdqcWXjgt.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/b7Ee4DKKhNVYNV84rovdqcWXjgt.jpg"},
  {id:29,title:"Dia",year:2020,language:"Kannada",type:"movie",genres:["Romance","Drama","Thriller"],
    director:"K.S. Ashoka",cast:["Kushee Ravi","Pruthvi Ambaar","Pradeep Shetty","Priya Anand"],
    imdbRating:7.8,duration:"126 min",
    description:"Dia, a bright young woman caught in a love triangle, navigates heartbreak and family pressure, only to discover dark secrets that change her life forever.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/n038AswpNaZgIWfMEr5cxVAqcsB.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/n038AswpNaZgIWfMEr5cxVAqcsB.jpg"},
  {id:30,title:"Yuvarathnaa",year:2021,language:"Kannada",type:"movie",genres:["Action","Drama","Comedy"],
    director:"Santhosh Ananddram",cast:["Puneeth Rajkumar","Sayyeshaa","Sonu Gowda","Dhananjay"],
    imdbRating:6.5,duration:"149 min",
    description:"A student leader battles corrupt college management and a powerful industrialist to fight for the rights of reservation students and expose the nexus between education and politics.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/1UakdDY2Pyo6uwUdIRSHgsIbV5Q.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/1UakdDY2Pyo6uwUdIRSHgsIbV5Q.jpg"},

  // ===== HINDI (20) =====
  {id:31,title:"Dhurandhar",year:2025,language:"Hindi",type:"movie",genres:["Action","Thriller","Crime"],
    director:"Vikramaditya Motwane",cast:["Ranveer Singh","R. Madhavan","Sanjay Dutt","Fatima Sana Shaikh"],
    imdbRating:8.1,duration:"145 min",
    description:"An elite intelligence operative is drawn into a dangerous conspiracy that reaches the highest levels of power, forcing him to question everything he believes in to save the nation.",
    poster:T+"https://www.themoviedb.org/t/p/w1280/8FHOtUpNIk5ZPEay2N2EY5lrxkv.jpg",backdrop:TB+"https://www.themoviedb.org/t/p/w1280/8FHOtUpNIk5ZPEay2N2EY5lrxkv.jpg"},
  {id:32,title:"PK",year:2014,language:"Hindi",type:"movie",genres:["Comedy","Drama","Sci-Fi"],
    director:"Rajkumar Hirani",cast:["Aamir Khan","Anushka Sharma","Sushant Singh Rajput","Boman Irani"],
    imdbRating:8.1,duration:"153 min",
    description:"An alien stranded on Earth is mistakenly given a TV remote and must navigate religion, society, and spirituality to find his way back home — with some unexpected help.",
    poster:T+"https://www.themoviedb.org/t/p/w1280/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg",backdrop:TB+"https://www.themoviedb.org/t/p/w1280/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg"},
  {id:33,title:"3 Idiots",year:2009,language:"Hindi",type:"movie",genres:["Comedy","Drama","Romance"],
    director:"Rajkumar Hirani",cast:["Aamir Khan","Madhavan","Sharman Joshi","Kareena Kapoor","Boman Irani"],
    imdbRating:8.4,duration:"170 min",
    description:"Two friends set out on a quest for a lost buddy. As they retrace their college days, they recall their encounters with an unconventional student who inspired them to think differently.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/66A9MqXOyVFCssoloscw79z8Tew.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/66A9MqXOyVFCssoloscw79z8Tew.jpg"},
  {id:34,title:"Sultan",year:2016,language:"Hindi",type:"movie",genres:["Action","Drama","Sports"],
    director:"Ali Abbas Zafar",cast:["Salman Khan","Anushka Sharma","Randeep Hooda","Amit Sadh"],
    imdbRating:7.0,duration:"170 min",
    description:"A local wrestling champion from Haryana must find his way back into the sport to reclaim both his glory and the love of his life, after years of ego and self-destruction.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/vPTYtKuV8X5uUd3SqnzO14W6Dti.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/vPTYtKuV8X5uUd3SqnzO14W6Dti.jpg"},
  {id:35,title:"Dangal",year:2016,language:"Hindi",type:"movie",genres:["Biography","Drama","Sports"],
    director:"Nitesh Tiwari",cast:["Aamir Khan","Fatima Sana Shaikh","Sanya Malhotra","Sakshi Tanwar"],
    imdbRating:8.3,duration:"161 min",
    description:"Former wrestler Mahavir Singh Phogat trains his daughters to become world-class wrestlers, defying social norms and fighting a broken sports system to achieve gold.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/1CoKNi3XVyijPCvy0usDbSWEXAg.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/1CoKNi3XVyijPCvy0usDbSWEXAg.jpg"},
  {id:36,title:"Jawan",year:2023,language:"Hindi",type:"movie",genres:["Action","Thriller","Drama"],
    director:"Atlee Kumar",cast:["Shah Rukh Khan","Nayanthara","Vijay Sethupathi","Deepika Padukone","Sanya Malhotra"],
    imdbRating:7.2,duration:"169 min",
    description:"A jailer recruits six women wronged by society to carry out an extraordinary heist, while a mysterious man battles a weapons kingpin who caused widespread devastation.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg"},
  {id:37,title:"Pathaan",year:2023,language:"Hindi",type:"movie",genres:["Action","Thriller","Spy"],
    director:"Siddharth Anand",cast:["Shah Rukh Khan","Deepika Padukone","John Abraham","Dimple Kapadia"],
    imdbRating:5.9,duration:"146 min",
    description:"An exiled Indian spy goes up against a rogue agent who has stolen a deadly biological weapon, in a global action spectacle that marks the return of a legendary spy.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg"},
  {id:38,title:"Kabir Singh",year:2019,language:"Hindi",type:"movie",genres:["Drama","Romance"],
    director:"Sandeep Reddy Vanga",cast:["Shahid Kapoor","Kiara Advani","Suresh Oberoi","Arjan Bajwa"],
    imdbRating:7.1,duration:"173 min",
    description:"A brilliant but self-destructive surgeon goes on a downward spiral of alcohol and drugs after the love of his life is forced to marry another man. An intense, raw love story.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/unqiPjtc6CGqs13zho7ZvWU85zu.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/unqiPjtc6CGqs13zho7ZvWU85zu.jpg"},
  {id:39,title:"Animal",year:2023,language:"Hindi",type:"movie",genres:["Action","Crime","Drama"],
    director:"Sandeep Reddy Vanga",cast:["Ranbir Kapoor","Anil Kapoor","Bobby Deol","Rashmika Mandanna","Tripti Dimri"],
    imdbRating:7.5,duration:"201 min",
    description:"A son's obsessive and violent love for his father drives him to cross every moral boundary, leading to a brutal war against those who tried to destroy his family.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg"},
  {id:40,title:"Bajrangi Bhaijaan",year:2015,language:"Hindi",type:"movie",genres:["Drama","Comedy","Family"],
    director:"Kabir Khan",cast:["Salman Khan","Harshaali Malhotra","Kareena Kapoor","Nawazuddin Siddiqui"],
    imdbRating:8.0,duration:"163 min",
    description:"A devoted follower of Hanuman undertakes a journey across the border to reunite a Pakistani mute girl with her family — a touching story of humanity transcending borders.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/vhlliI7HZZlWfo5d6CiyfBAGLrW.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/vhlliI7HZZlWfo5d6CiyfBAGLrW.jpg"},
  {id:41,title:"URI: The Surgical Strike",year:2019,language:"Hindi",type:"movie",genres:["Action","Biography","Drama"],
    director:"Aditya Dhar",cast:["Vicky Kaushal","Paresh Rawal","Yami Gautam","Mohit Raina"],
    imdbRating:8.2,duration:"138 min",
    description:"Based on the 2016 Indian Army's surgical strikes on militant launch pads across the Line of Control in Pakistan-administered Kashmir. How's the josh?",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/yNySAgpAnWmPpYinim9E0tUzJWG.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/yNySAgpAnWmPpYinim9E0tUzJWG.jpg"},
  {id:42,title:"Shershaah",year:2021,language:"Hindi",type:"movie",genres:["Action","Biography","Drama"],
    director:"Vishnuvardhan",cast:["Sidharth Malhotra","Kiara Advani","Shiv Pandit","Raj Arjun"],
    imdbRating:8.4,duration:"135 min",
    description:"The true story of Captain Vikram Batra, a decorated war hero who sacrificed his life during the Kargil War of 1999. A powerful tribute to India's greatest soldier.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/zGvFnwoXJKrYnKhoVPytqkqCJ8V.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/zGvFnwoXJKrYnKhoVPytqkqCJ8V.jpg"},
  {id:43,title:"Sam Bahadur",year:2023,language:"Hindi",type:"movie",genres:["Biography","Drama","History"],
    director:"Meghna Gulzar",cast:["Vicky Kaushal","Sanya Malhotra","Fatima Sana Shaikh","Neeraj Kabi"],
    imdbRating:7.9,duration:"151 min",
    description:"The extraordinary life story of Field Marshal Sam Manekshaw, India's first Field Marshal, who led the Indian Armed Forces to a historic victory in the 1971 Bangladesh Liberation War.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/nFYf3g3CObjx9ri3PMWkK1lWFhr.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/nFYf3g3CObjx9ri3PMWkK1lWFhr.jpg"},
  {id:44,title:"Stree 2",year:2024,language:"Hindi",type:"movie",genres:["Horror","Comedy","Drama"],
    director:"Amar Kaushik",cast:["Shraddha Kapoor","Rajkummar Rao","Aparshakti Khurana","Pankaj Tripathi","Tamannaah"],
    imdbRating:7.6,duration:"133 min",
    description:"A new supernatural force terrorizes Chanderi, targeting men this time. The town must once again rally against this fearsome spirit, with help from a mysterious woman and old friends.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/2NC7sj8rheKxWqLYAbHnCa4mYBH.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/2NC7sj8rheKxWqLYAbHnCa4mYBH.jpg"},
  {id:45,title:"Drishyam 2",year:2022,language:"Hindi",type:"movie",genres:["Thriller","Crime","Drama"],
    director:"Abhishek Pathak",cast:["Ajay Devgn","Tabu","Akshaye Khanna","Shriya Saran","Ishita Dutta"],
    imdbRating:8.0,duration:"152 min",
    description:"Seven years after Vijay Salgaonkar's perfect cover-up, a new investigation threatens to unravel everything. But this time, Vijay has an even more elaborate plan to protect his family.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/yJNNwHQuKYNeHFbsxSFR6yK9Dda.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/yJNNwHQuKYNeHFbsxSFR6yK9Dda.jpg"},
  {id:46,title:"War",year:2019,language:"Hindi",type:"movie",genres:["Action","Thriller","Spy"],
    director:"Siddharth Anand",cast:["Hrithik Roshan","Tiger Shroff","Vaani Kapoor","Ashutosh Rana"],
    imdbRating:6.5,duration:"154 min",
    description:"An Indian soldier is assigned to eliminate his former mentor who has gone rogue and is now selling state secrets to the enemy. A high-octane action thriller.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/yUtaHkL2SDIAZhRApZAyQrAXygn.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/yUtaHkL2SDIAZhRApZAyQrAXygn.jpg"},
  {id:47,title:"Tanhaji: The Unsung Warrior",year:2020,language:"Hindi",type:"movie",genres:["Action","Biography","History"],
    director:"Om Raut",cast:["Ajay Devgn","Saif Ali Khan","Kajol","Sharad Kelkar"],
    imdbRating:7.1,duration:"135 min",
    description:"The untold story of Tanaji Malusare, the military leader of Chhatrapati Shivaji Maharaj, and his heroic battle to recapture the Kondhana fort from Mughal emperor Aurangzeb.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/fZhgcUVwV7ocglL5XDq4ygsfXqD.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/fZhgcUVwV7ocglL5XDq4ygsfXqD.jpg"},
  {id:48,title:"Tiger Zinda Hai",year:2017,language:"Hindi",type:"movie",genres:["Action","Thriller","Spy"],
    director:"Ali Abbas Zafar",cast:["Salman Khan","Katrina Kaif","Paresh Rawal","Angad Bedi"],
    imdbRating:6.9,duration:"132 min",
    description:"RAW agent Tiger and Pakistani spy Zoya reunite for a high-stakes mission to rescue Indian and Pakistani nurses held hostage by the terror organization ISC in Iraq.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/mdzNLFfCfuBoJz43l0SmMWWdu5t.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/mdzNLFfCfuBoJz43l0SmMWWdu5t.jpg"},
  {id:49,title:"Brahmastra: Part One – Shiva",year:2022,language:"Hindi",type:"movie",genres:["Action","Fantasy","Sci-Fi"],
    director:"Ayan Mukerji",cast:["Ranbir Kapoor","Alia Bhatt","Amitabh Bachchan","Nagarjuna","Mouni Roy"],
    imdbRating:5.5,duration:"167 min",
    description:"Shiva discovers he has a special connection with fire and that he is the gateway to the most powerful weapon in human history — the Brahmastra — which evil forces desperately seek.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/x61qdvHIsr9U53FwoLVDQqAGur0.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/x61qdvHIsr9U53FwoLVDQqAGur0.jpg"},
  {id:50,title:"Fighter",year:2024,language:"Hindi",type:"movie",genres:["Action","Thriller","Drama"],
    director:"Siddharth Anand",cast:["Hrithik Roshan","Deepika Padukone","Anil Kapoor","Akshay Oberoi"],
    imdbRating:6.1,duration:"166 min",
    description:"India's first aerial action film follows Air Force officers as they take on a deadly cross-border terrorist threat, featuring spectacular aerial combat sequences.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/zqFuriKJ6pYDvf72kXNLONnuE8k.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/zqFuriKJ6pYDvf72kXNLONnuE8k.jpg"},

  // ===== TAMIL (20) =====
  {id:51,title:"Vikram",year:2022,language:"Tamil",type:"movie",genres:["Action","Thriller","Crime"],
    director:"Lokesh Kanagaraj",cast:["Kamal Haasan","Vijay Sethupathi","Fahadh Faasil","Narain","Kalidas Jayaram"],
    imdbRating:7.5,duration:"174 min",
    description:"A retired officer is covertly recruited for a special mission after a sequence of masked vigilante killings sets off a chain reaction in the criminal underworld.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg"},
  {id:52,title:"Leo",year:2023,language:"Tamil",type:"movie",genres:["Action","Crime","Thriller"],
    director:"Lokesh Kanagaraj",cast:["Vijay","Sanjay Dutt","Trisha Krishnan","Arjun","Gautham Menon"],
    imdbRating:6.2,duration:"164 min",
    description:"A mild-mannered café owner living a peaceful life in the hills is forced to confront his violent past when dangerous criminals arrive, threatening everything he loves.",
    poster:T+"https://media.themoviedb.org/t/p/w600_and_h900_face/t1oAdt8JjUs4sHEBvE8fKtjV7er.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w600_and_h900_face/t1oAdt8JjUs4sHEBvE8fKtjV7er.jpg"},
  {id:53,title:"Mersal",year:2017,language:"Tamil",type:"movie",genres:["Action","Drama","Thriller"],
    director:"Atlee Kumar",cast:["Vijay","S.J. Suryah","Samantha Ruth Prabhu","Kajal Aggarwal","Nithya Menen"],
    imdbRating:7.5,duration:"170 min",
    description:"Three timelines collide as a magician-turned-vigilante and a cop unravel a conspiracy tied to medical corruption that spans decades and generations.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/65Q1wpRPZ5E3UVUv2V5JBbJQCcj.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/65Q1wpRPZ5E3UVUv2V5JBbJQCcj.jpg"},
  {id:54,title:"Bigil",year:2019,language:"Tamil",type:"movie",genres:["Action","Drama","Sports"],
    director:"Atlee Kumar",cast:["Vijay","Nayanthara","Jackie Shroff","Daniel Balaji"],
    imdbRating:6.9,duration:"178 min",
    description:"A rowdy-turned-coach takes charge of a women's football team and trains them for the national championship, while battling his own criminal past and corrupt officials.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/s4Yi1RbMyyN3hH2hElwvluP2rOG.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/s4Yi1RbMyyN3hH2hElwvluP2rOG.jpg"},
  {id:55,title:"Kaithi",year:2019,language:"Tamil",type:"movie",genres:["Action","Thriller","Crime"],
    director:"Lokesh Kanagaraj",cast:["Karthi","Narain","Arjun Das","George Maryan"],
    imdbRating:8.5,duration:"145 min",
    description:"A recently released convict, trying to meet his daughter for the first time, unwittingly becomes entangled in a drug busting operation on a night when everything goes wrong.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/mxvOvom5zKRp4WPURKrhjoatt4P.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/mxvOvom5zKRp4WPURKrhjoatt4P.jpg"},
  {id:56,title:"Mahaan",year:2022,language:"Tamil",type:"movie",genres:["Action","Crime","Drama"],
    director:"Karthik Subbaraj",cast:["Vikram","Dhruv Vikram","Bobby Simha","Simran"],
    imdbRating:7.8,duration:"168 min",
    description:"A man who was forced to live a restricted life all his youth breaks free on his 40th birthday, only to enter a world of liquor, crime, and a complicated relationship with his own son.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/rHcwUUy3gRVUEUepYOd7xkesiNf.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/rHcwUUy3gRVUEUepYOd7xkesiNf.jpg"},
  {id:57,title:"Jai Bhim",year:2021,language:"Tamil",type:"movie",genres:["Drama","Crime","Biography"],
    director:"T.J. Gnanavel",cast:["Suriya","Manikandan","Lijomol Jose","Rajisha Vijayan"],
    imdbRating:8.8,duration:"164 min",
    description:"Based on a true story, a courageous lawyer fights for justice on behalf of a pregnant tribal woman whose husband was illegally arrested and later found dead in police custody.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/ehybiOtBUtrMkmtB39zQEtq1Jie.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/ehybiOtBUtrMkmtB39zQEtq1Jie.jpg"},
  {id:58,title:"Master",year:2021,language:"Tamil",type:"movie",genres:["Action","Drama","Thriller"],
    director:"Lokesh Kanagaraj",cast:["Vijay","Vijay Sethupathi","Malavika Mohanan","Andrea Jeremiah"],
    imdbRating:7.7,duration:"179 min",
    description:"An alcoholic professor is sent to a juvenile school, where he confronts a dangerous gangster who has been using the facility to recruit child soldiers and carry out crimes.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/wjbOlovDadOdPKkSAMohLCjbIsc.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/wjbOlovDadOdPKkSAMohLCjbIsc.jpg"},
  {id:59,title:"Vettaiyan",year:2024,language:"Tamil",type:"movie",genres:["Action","Drama","Thriller"],
    director:"T.J. Gnanavel",cast:["Rajinikanth","Amitabh Bachchan","Fahadh Faasil","Rana Daggubati","Manju Warrier"],
    imdbRating:6.8,duration:"176 min",
    description:"A veteran cop who believes in encounter killings comes face-to-face with a new-age officer who opposes extrajudicial methods, forcing a clash of ideologies over justice.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/yEEyhQaW7cEb0IDJstoMBmEtPND.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/yEEyhQaW7cEb0IDJstoMBmEtPND.jpg"},
  {id:60,title:"Ponniyin Selvan: I",year:2022,language:"Tamil",type:"movie",genres:["Action","History","Drama"],
    director:"Mani Ratnam",cast:["Vikram","Aishwarya Rai","Karthi","Jayam Ravi","Trisha Krishnan"],
    imdbRating:7.5,duration:"167 min",
    description:"Based on the legendary Tamil novel, the story follows Prince Vanthiyathevan who is sent on a secret mission to deliver a message to the Chola princes, uncovering a dangerous conspiracy.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/zSNyZUeqDdii0doQ9970E90kCkb.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/zSNyZUeqDdii0doQ9970E90kCkb.jpg"},
  {id:61,title:"Ponniyin Selvan: II",year:2023,language:"Tamil",type:"movie",genres:["Action","History","Drama"],
    director:"Mani Ratnam",cast:["Vikram","Aishwarya Rai","Karthi","Jayam Ravi","Trisha Krishnan","Sobhita Dhulipala"],
    imdbRating:7.4,duration:"151 min",
    description:"The epic conclusion to the Chola saga. As betrayals unfold and war looms, the fates of the Chola empire and those who love it hang in the balance.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/1fMM5yjLYJNfO3CSQBpfC1kqeIK.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/1fMM5yjLYJNfO3CSQBpfC1kqeIK.jpg"},
  {id:62,title:"Soorarai Pottru",year:2020,language:"Tamil",type:"movie",genres:["Biography","Drama","Action"],
    director:"Sudha Kongara",cast:["Suriya","Aparna Balamurali","Paresh Rawal","Urvashi"],
    imdbRating:8.7,duration:"153 min",
    description:"Inspired by the life of Captain G.R. Gopinath, this film follows a man with a dream to make air travel affordable for the common man, defying the establishment at every turn.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/5uimlxPCgAei8JfQUDFEUQLoyyh.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/5uimlxPCgAei8JfQUDFEUQLoyyh.jpg"},
  {id:63,title:"Karnan",year:2021,language:"Tamil",type:"movie",genres:["Action","Drama","Crime"],
    director:"Mari Selvaraj",cast:["Dhanush","Rajisha Vijayan","Lal","Yogi Babu"],
    imdbRating:8.5,duration:"159 min",
    description:"A fearless young man rises as a protector for an oppressed Dalit community, challenging systemic police brutality and casteism in a rural Tamil Nadu village.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/z5SxDcVWa9nokynVqBHb2IKk78J.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/z5SxDcVWa9nokynVqBHb2IKk78J.jpg"},
  {id:64,title:"Jailer",year:2023,language:"Tamil",type:"movie",genres:["Action","Thriller","Crime"],
    director:"Nelson Dilipkumar",cast:["Rajinikanth","Mohanlal","Shiva Rajkumar","Tamannaah","Ramya Krishnan"],
    imdbRating:7.1,duration:"168 min",
    description:"A retired jailer reawakens his deadly skills when his son, an encounter specialist, is killed — embarking on a mission of vengeance against a powerful drug lord.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/pTmMxAHqX4vsIDE6HPPxOR0Q6TN.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/pTmMxAHqX4vsIDE6HPPxOR0Q6TN.jpg"},
  {id:65,title:"Super Deluxe",year:2019,language:"Tamil",type:"movie",genres:["Drama","Thriller","Comedy"],
    director:"Thiagarajan Kumararaja",cast:["Vijay Sethupathi","Fahadh Faasil","Mysskin","Samantha Ruth Prabhu","Ramya Krishnan"],
    imdbRating:8.4,duration:"175 min",
    description:"Four bizarre, interwoven stories about karma, redemption, and the consequences of our choices — featuring a sex change, a dead body in a bedroom, a vengeful man, and a peculiar boy.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/rTsYDdFWyw87CTk4YgJO6nYmVcJ.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/rTsYDdFWyw87CTk4YgJO6nYmVcJ.jpg"},
  {id:66,title:"Vada Chennai",year:2018,language:"Tamil",type:"movie",genres:["Action","Crime","Drama"],
    director:"Vetrimaaran",cast:["Dhanush","Aishwarya Rajesh","Andrea Jeremiah","Kishore"],
    imdbRating:8.6,duration:"163 min",
    description:"A carrom player gets entangled in the political vendettas and gang wars of north Chennai, as three generations of gangsters fight for dominance in a brutal saga.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/4Pa7SriYtq4BdoS2BAPm6w66vLi.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/4Pa7SriYtq4BdoS2BAPm6w66vLi.jpg"},
  {id:67,title:"96",year:2018,language:"Tamil",type:"movie",genres:["Romance","Drama"],
    director:"C. Prem Kumar",cast:["Vijay Sethupathi","Trisha Krishnan","Gouri G. Kishan"],
    imdbRating:8.7,duration:"158 min",
    description:"A wildlife photographer returns to his hometown for a school reunion and meets his first love after 22 years. A hauntingly beautiful meditation on time, memory, and unlived lives.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/nrVloCa2hCFOztRF1DZU2jnWIiQ.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/nrVloCa2hCFOztRF1DZU2jnWIiQ.jpg"},
  {id:68,title:"Vikram Vedha",year:2017,language:"Tamil",type:"movie",genres:["Action","Thriller","Crime"],
    director:"Pushkar & Gayatri",cast:["R. Madhavan","Vijay Sethupathi","Shraddha Srinath","Varalaxmi Sarathkumar"],
    imdbRating:8.4,duration:"147 min",
    description:"A no-nonsense cop sets out to track down and kill a gangster, but is surprised when the gangster voluntarily surrenders to him and narrates three mind-bending stories.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/ob9YxdzRu5lfKgz0PNrlL45dorf.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/ob9YxdzRu5lfKgz0PNrlL45dorf.jpg"},
  {id:69,title:"Raayan",year:2024,language:"Tamil",type:"movie",genres:["Action","Crime","Drama"],
    director:"Dhanush",cast:["Dhanush","S.J. Suryah","Selvaraghavan","Sundeep Kishan","Dushara Vijayan"],
    imdbRating:7.1,duration:"153 min",
    description:"A devoted family man is thrust into the criminal underworld when his younger brother crosses paths with the wrong people, forcing him to wage a war to protect what he holds dear.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/dHMbqpG7vZk1iEJaEkCCyixFbos.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/dHMbqpG7vZk1iEJaEkCCyixFbos.jpg"},
  {id:70,title:"Mark Antony",year:2023,language:"Tamil",type:"movie",genres:["Action","Comedy","Sci-Fi"],
    director:"Adhik Ravichandran",cast:["Vishal","S.J. Suryah","Ritu Varma","Abhinaya"],
    imdbRating:7.3,duration:"152 min",
    description:"A man discovers that he can communicate with the past using a special telephone, and uses it to save his father from his enemies — in a fun time-travel action comedy.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/3xz1lfMrFlNtZ4H8DQKvYog8ilR.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/3xz1lfMrFlNtZ4H8DQKvYog8ilR.jpg"},

  // ===== HOLLYWOOD (20) =====
  {id:71,title:"Interstellar",year:2014,language:"English",type:"movie",genres:["Sci-Fi","Drama","Mystery"],
    director:"Christopher Nolan",cast:["Matthew McConaughey","Anne Hathaway","Jessica Chastain","Michael Caine","Matt Damon"],
    imdbRating:8.7,duration:"169 min",
    description:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. A visually breathtaking and emotionally shattering meditation on time and love.",
    poster:T+"/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",backdrop:TB+"/xJHokMbljvjADYdit5fK5VQsXEG.jpg"},
  {id:72,title:"Avatar",year:2009,language:"English",type:"movie",genres:["Sci-Fi","Action","Fantasy"],
    director:"James Cameron",cast:["Sam Worthington","Zoe Saldana","Sigourney Weaver","Michelle Rodriguez","Stephen Lang"],
    imdbRating:7.9,duration:"162 min",
    description:"A paraplegic Marine is dispatched to the moon Pandora on a unique mission, and becomes torn between following orders and protecting the Na'vi civilization he has come to love.",
    poster:T+"/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",backdrop:TB+"/o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg"},
  {id:73,title:"Avengers: Endgame",year:2019,language:"English",type:"movie",genres:["Action","Sci-Fi","Fantasy"],
    director:"Anthony & Joe Russo",cast:["Robert Downey Jr.","Chris Evans","Mark Ruffalo","Chris Hemsworth","Scarlett Johansson","Josh Brolin"],
    imdbRating:8.4,duration:"181 min",
    description:"After the devastating events of Infinity War, the universe is in ruins. The Avengers assemble once more in order to undo Thanos's actions and restore order to the universe.",
    poster:T+"/or06FN3Dka5tukK1e9sl16pB3iy.jpg",backdrop:TB+"/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"},
  {id:74,title:"Avengers: Infinity War",year:2018,language:"English",type:"movie",genres:["Action","Sci-Fi","Fantasy"],
    director:"Anthony & Joe Russo",cast:["Robert Downey Jr.","Chris Evans","Chris Hemsworth","Benedict Cumberbatch","Chadwick Boseman","Josh Brolin"],
    imdbRating:8.4,duration:"149 min",
    description:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    poster:T+"/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",backdrop:TB+"/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"},
  {id:75,title:"Oppenheimer",year:2023,language:"English",type:"movie",genres:["Biography","Drama","History"],
    director:"Christopher Nolan",cast:["Cillian Murphy","Emily Blunt","Matt Damon","Robert Downey Jr.","Florence Pugh"],
    imdbRating:8.3,duration:"180 min",
    description:"The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II, and the aftermath that would define and haunt him for the rest of his life.",
    poster:T+"/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",backdrop:TB+"/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"},
  {id:76,title:"F1",year:2025,language:"English",type:"movie",genres:["Action","Drama","Sports"],
    director:"Joseph Kosinski",cast:["Brad Pitt","Damson Idris","Kerry Condon","Javier Bardem","Tobias Menzies"],
    imdbRating:7.4,duration:"146 min",
    description:"A retired Formula 1 driver returns to the grid as a mentor to a young driver, hoping to help him win the championship while rekindling his own love for the sport.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg"},
  {id:77,title:"Inception",year:2010,language:"English",type:"movie",genres:["Sci-Fi","Action","Mystery"],
    director:"Christopher Nolan",cast:["Leonardo DiCaprio","Joseph Gordon-Levitt","Elliot Page","Tom Hardy","Marion Cotillard","Ken Watanabe"],
    imdbRating:8.8,duration:"148 min",
    description:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster:T+"/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",backdrop:TB+"/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"},
  {id:78,title:"The Dark Knight",year:2008,language:"English",type:"movie",genres:["Action","Crime","Drama"],
    director:"Christopher Nolan",cast:["Christian Bale","Heath Ledger","Aaron Eckhart","Michael Caine","Gary Oldman","Maggie Gyllenhaal"],
    imdbRating:9.0,duration:"152 min",
    description:"Batman raises the stakes in his war on crime. With the help of allies, he sets out to dismantle the remaining criminal organizations. But the Joker has other plans for Gotham.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
  {id:79,title:"Avatar: The Way of Water",year:2022,language:"English",type:"movie",genres:["Sci-Fi","Action","Fantasy"],
    director:"James Cameron",cast:["Sam Worthington","Zoe Saldana","Sigourney Weaver","Kate Winslet","Cliff Curtis"],
    imdbRating:7.6,duration:"192 min",
    description:"Jake Sully and his family face new threats on Pandora as they take refuge with the Metkayina, a sea-dwelling Na'vi clan, in a visually stunning underwater adventure.",
    poster:T+"/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",backdrop:TB+"/s16H6tpK2utvwDtzZ8Qy4impTff.jpg"},
  {id:80,title:"The Dark Knight Rises",year:2012,language:"English",type:"movie",genres:["Action","Crime","Drama"],
    director:"Christopher Nolan",cast:["Christian Bale","Tom Hardy","Anne Hathaway","Gary Oldman","Joseph Gordon-Levitt","Marion Cotillard"],
    imdbRating:8.4,duration:"164 min",
    description:"Eight years after the Joker's reign of anarchy, Batman must confront the masked terrorist Bane who is trying to destroy Gotham City. The epic conclusion to Nolan's Batman trilogy.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg"},
  {id:81,title:"Spider-Man: No Way Home",year:2021,language:"English",type:"movie",genres:["Action","Sci-Fi","Fantasy"],
    director:"Jon Watts",cast:["Tom Holland","Zendaya","Benedict Cumberbatch","Jamie Foxx","Alfred Molina","Willem Dafoe"],
    imdbRating:8.3,duration:"148 min",
    description:"Peter Parker's identity is revealed. To restore anonymity, he asks Doctor Strange to make the world forget, but the spell opens the multiverse, bringing in dangerous villains.",
    poster:T+"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",backdrop:TB+"/eFHh8oNPvNHAaeSGFmuTEDC3OiX.jpg"},
  {id:82,title:"Dune: Part One",year:2021,language:"English",type:"movie",genres:["Sci-Fi","Action","Fantasy"],
    director:"Denis Villeneuve",cast:["Timothée Chalamet","Rebecca Ferguson","Oscar Isaac","Josh Brolin","Zendaya","Javier Bardem"],
    imdbRating:8.0,duration:"155 min",
    description:"Feature adaptation of Frank Herbert's science fiction novel about a boy who becomes humanity's hope on a hostile desert planet with the universe's most precious resource.",
    poster:T+"https://media.themoviedb.org/t/p/w600_and_h900_face/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w600_and_h900_face/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg"},
  {id:83,title:"Dune: Part Two",year:2024,language:"English",type:"movie",genres:["Sci-Fi","Action","Fantasy"],
    director:"Denis Villeneuve",cast:["Timothée Chalamet","Zendaya","Rebecca Ferguson","Austin Butler","Florence Pugh","Christopher Walken"],
    imdbRating:8.5,duration:"167 min",
    description:"Paul Atreides unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"},
  {id:84,title:"Top Gun: Maverick",year:2022,language:"English",type:"movie",genres:["Action","Drama"],
    director:"Joseph Kosinski",cast:["Tom Cruise","Miles Teller","Jennifer Connelly","Jon Hamm","Glen Powell","Lewis Pullman"],
    imdbRating:8.3,duration:"131 min",
    description:"After 30 years, Maverick is still pushing the envelope. Assigned to train a detachment of Top Gun graduates for a specialized mission, he must confront his deepest fears.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg"},
  {id:85,title:"John Wick: Chapter 4",year:2023,language:"English",type:"movie",genres:["Action","Crime","Thriller"],
    director:"Chad Stahelski",cast:["Keanu Reeves","Donnie Yen","Bill Skarsgård","Laurence Fishburne","Hiroyuki Sanada","Ian McShane"],
    imdbRating:7.7,duration:"169 min",
    description:"John Wick uncovers a path to defeating the High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
    poster:T+"/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",backdrop:TB+"/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg"},
  {id:86,title:"Gladiator II",year:2024,language:"English",type:"movie",genres:["Action","Drama","History"],
    director:"Ridley Scott",cast:["Paul Mescal","Pedro Pascal","Denzel Washington","Connie Nielsen","Joseph Quinn"],
    imdbRating:7.1,duration:"148 min",
    description:"Years after witnessing his father's death, Lucius is forced into the treacherous world of the Colosseum, where he must fight to the death for the entertainment of a corrupt Rome.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"},
  {id:87,title:"The Batman",year:2022,language:"English",type:"movie",genres:["Action","Crime","Drama"],
    director:"Matt Reeves",cast:["Robert Pattinson","Zoë Kravitz","Paul Dano","Jeffrey Wright","John Turturro","Colin Farrell"],
    imdbRating:7.8,duration:"176 min",
    description:"Two years of stalking the streets as Batman, his alter ego Bruce Wayne uncovers corruption in Gotham City that connects to his own family while facing the Riddler.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/74xTEgt7R36Fpooo50r9T25onhq.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/74xTEgt7R36Fpooo50r9T25onhq.jpg"},
  {id:88,title:"Mission: Impossible – Dead Reckoning",year:2023,language:"English",type:"movie",genres:["Action","Thriller","Spy"],
    director:"Christopher McQuarrie",cast:["Tom Cruise","Hayley Atwell","Ving Rhames","Simon Pegg","Rebecca Ferguson","Vanessa Kirby"],
    imdbRating:7.7,duration:"163 min",
    description:"Ethan Hunt and his IMF team embark on a treacherous mission involving a terrifying new weapon that threatens all of humanity, forcing them to confront a past that will not let go.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg"},
  {id:89,title:"Doctor Strange in the Multiverse of Madness",year:2022,language:"English",type:"movie",genres:["Action","Sci-Fi","Fantasy"],
    director:"Sam Raimi",cast:["Benedict Cumberbatch","Elizabeth Olsen","Chiwetel Ejiofor","Benedict Wong","Xochitl Gomez"],
    imdbRating:6.9,duration:"126 min",
    description:"Doctor Strange teams up with a mysterious girl who can travel across multiverses, but evil forces are trying to destroy her. Strange faces impossible choices to protect the multiverse.",
    poster:T+"/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",backdrop:TB+"/wcKFYIiVDvRURrzglV9bM3Sj7t5.jpg"},
  {id:90,title:"Tenet",year:2020,language:"English",type:"movie",genres:["Sci-Fi","Action","Thriller"],
    director:"Christopher Nolan",cast:["John David Washington","Robert Pattinson","Elizabeth Debicki","Kenneth Branagh","Dimple Kapadia"],
    imdbRating:7.3,duration:"150 min",
    description:"Armed with only one word — Tenet — a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg"},

  // ===== TV SERIES (20) =====
  {id:91,title:"Breaking Bad",year:2008,language:"English",type:"series",genres:["Crime","Drama","Thriller"],
    director:"Vince Gilligan",cast:["Bryan Cranston","Aaron Paul","Anna Gunn","Dean Norris","Bob Odenkirk"],
    imdbRating:9.5,duration:"5 Seasons",
    description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
    poster:T+"/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",backdrop:TB+"/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"},
  {id:92,title:"Game of Thrones",year:2011,language:"English",type:"series",genres:["Fantasy","Drama","Action"],
    director:"David Benioff & D.B. Weiss",cast:["Emilia Clarke","Peter Dinklage","Kit Harington","Lena Headey","Sophie Turner"],
    imdbRating:9.2,duration:"8 Seasons",
    description:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia. Power, politics, and dragons in a sprawling epic.",
    poster:T+"/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",backdrop:TB+"/suopoADq0k8YZr4oOOxzMQ9NupE.jpg"},
  {id:93,title:"Stranger Things",year:2016,language:"English",type:"series",genres:["Sci-Fi","Horror","Drama"],
    director:"The Duffer Brothers",cast:["Millie Bobby Brown","Finn Wolfhard","Winona Ryder","David Harbour","Gaten Matarazzo"],
    imdbRating:8.7,duration:"5 Seasons",
    description:"When a young boy disappears, his mother and friends must confront terrifying supernatural forces and government experiments in order to get him back in a 1980s Indiana town.",
    poster:T+"/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",backdrop:TB+"/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"},
  {id:94,title:"Money Heist",year:2017,language:"Spanish",type:"series",genres:["Crime","Thriller","Drama"],
    director:"Álex Pina",cast:["Álvaro Morte","Úrsula Corberó","Itziar Ituño","Pedro Alonso","Miguel Herrán"],
    imdbRating:8.2,duration:"5 Parts",
    description:"A mysterious criminal mastermind known as The Professor recruits a team of robbers to carry out an elaborate heist on the Royal Mint of Spain, taking hostages inside.",
    poster:T+"/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",backdrop:TB+"/hJPuyt63XJBi5QGfYFBUyECGciI.jpg"},
  {id:95,title:"Dark",year:2017,language:"German",type:"series",genres:["Sci-Fi","Mystery","Thriller"],
    director:"Baran bo Odar & Jantje Friese",cast:["Louis Hofmann","Oliver Masucci","Lisa Vicari","Karoline Eichhorn"],
    imdbRating:8.8,duration:"3 Seasons",
    description:"A family saga with a supernatural twist, set in a German town where the mysterious disappearance of two young children exposes the dark secrets of four interlinked families across multiple time periods.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"},
  {id:96,title:"Peaky Blinders",year:2013,language:"English",type:"series",genres:["Crime","Drama","Thriller"],
    director:"Steven Knight",cast:["Cillian Murphy","Paul Anderson","Helen McCrory","Tom Hardy","Sam Neill"],
    imdbRating:8.8,duration:"6 Seasons",
    description:"A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"},
  {id:97,title:"Squid Game",year:2021,language:"Korean",type:"series",genres:["Thriller","Drama","Action"],
    director:"Hwang Dong-hyuk",cast:["Lee Jung-jae","Park Hae-soo","Wi Ha-jun","Jung Ho-yeon","O Yeong-su"],
    imdbRating:8.0,duration:"2 Seasons",
    description:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes. The ultimate survival thriller.",
    poster:T+"/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",backdrop:TB+"/qw3J9cNeLioOLoR68WX7z79aCdK.jpg"},
  {id:98,title:"The Witcher",year:2019,language:"English",type:"series",genres:["Fantasy","Action","Drama"],
    director:"Lauren Schmidt Hissrich",cast:["Henry Cavill","Anya Chalotra","Freya Allan","Jodhi May"],
    imdbRating:7.5,duration:"3 Seasons",
    description:"Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg"},
  {id:99,title:"Wednesday",year:2022,language:"English",type:"series",genres:["Comedy","Horror","Mystery"],
    director:"Tim Burton",cast:["Jenna Ortega","Emma Myers","Hunter Doohan","Joy Sunday","Gwendoline Christie"],
    imdbRating:8.1,duration:"2 Seasons",
    description:"Wednesday Addams investigates a murder mystery while mastering her psychic ability, all while making new friends and enemies at Nevermore Academy.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg"},
  {id:100,title:"The Last of Us",year:2023,language:"English",type:"series",genres:["Drama","Horror","Sci-Fi"],
    director:"Craig Mazin & Neil Druckmann",cast:["Pedro Pascal","Bella Ramsey","Anna Torv","Gabriel Luna","Merle Dandridge"],
    imdbRating:8.8,duration:"2 Seasons",
    description:"After a global catastrophe, a hardened survivor Joel is hired to smuggle a 14-year-old girl, Ellie, out of an oppressive quarantine zone. What starts as a job becomes a brutal, heart-wrenching journey.",
    poster:T+"/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",backdrop:TB+"/uDgy6hyPd9qv7uEFILQmR4JsDME.jpg"},
  {id:101,title:"House of the Dragon",year:2022,language:"English",type:"series",genres:["Fantasy","Drama","Action"],
    director:"Ryan Condal & George R.R. Martin",cast:["Matt Smith","Emma D'Arcy","Olivia Cooke","Paddy Considine","Rhys Ifans"],
    imdbRating:8.5,duration:"2 Seasons",
    description:"An account of the civil war between members of House Targaryen during the reign of King Viserys I. Dragons clash as families tear apart the realm of Westeros.",
    poster:T+"/z2yahl2uefxDCl0nogcRBstwruJ.jpg",backdrop:TB+"/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg"},
  {id:102,title:"Black Mirror",year:2011,language:"English",type:"series",genres:["Sci-Fi","Thriller","Drama"],
    director:"Charlie Brooker",cast:["Daniel Lapaine","Hannah John-Kamen","Jodie Whittaker","Rafe Spall","Bryce Dallas Howard"],
    imdbRating:8.8,duration:"7 Seasons",
    description:"An anthology series exploring the dark, satirical and sometimes terrifying nature of modern society and the unforeseen consequences of new technology on human behavior.",
    poster:T+"/7PRddO7z7mcPi21nZTCMGShAyy1.jpg",backdrop:TB+"/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"},
  {id:103,title:"Narcos",year:2015,language:"English",type:"series",genres:["Crime","Biography","Drama"],
    director:"Chris Brancato & Carlo Bernard",cast:["Wagner Moura","Boyd Holbrook","Pedro Pascal","Joanna Christie"],
    imdbRating:8.8,duration:"3 Seasons",
    description:"A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the 1970s and '80s.",
    poster:T+"/rTmal9fDbwh5F0waol2hq35U4ah.jpg",backdrop:TB+"/9O9RpyeIUBLObEAJdoLJBUl7VKM.jpg"},
  {id:104,title:"Vikings",year:2013,language:"English",type:"series",genres:["Action","Drama","History"],
    director:"Michael Hirst",cast:["Travis Fimmel","Katheryn Winnick","Gustaf Skarsgård","Alexander Ludwig","Clive Standen"],
    imdbRating:8.5,duration:"6 Seasons",
    description:"Follows the adventures of Ragnar Lothbrok, the greatest hero of his age, a Viking raider and farmer who hopes to find and explore new lands across the seas to the west.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg"},
  {id:105,title:"Loki",year:2021,language:"English",type:"series",genres:["Sci-Fi","Fantasy","Action"],
    director:"Michael Waldron",cast:["Tom Hiddleston","Sophia Di Martino","Gugu Mbatha-Raw","Owen Wilson","Jonathan Majors"],
    imdbRating:7.9,duration:"2 Seasons",
    description:"The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.",
    poster:T+"/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",backdrop:TB+"/tnAuB8sAyAsIDMnmB7ePjFMOTUj.jpg"},
  {id:106,title:"Mirzapur",year:2018,language:"Hindi",type:"series",genres:["Crime","Action","Drama"],
    director:"Karan Anshuman & Gurmmeet Singh",cast:["Pankaj Tripathi","Ali Fazal","Vikrant Massey","Shweta Tripathi","Rasika Dugal"],
    imdbRating:8.5,duration:"3 Seasons",
    description:"A crime drama that unfolds the story of drugs, guns and crime in the rough terrain of Purvanchal in Uttar Pradesh, centered around the Tripathi family's iron grip over the region.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/1rxLUFVrtTo82OxhbDXJDiJVkwL.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/1rxLUFVrtTo82OxhbDXJDiJVkwL.jpg"},
  {id:107,title:"Sacred Games",year:2018,language:"Hindi",type:"series",genres:["Crime","Thriller","Drama"],
    director:"Vikramaditya Motwane & Anurag Kashyap",cast:["Saif Ali Khan","Nawazuddin Siddiqui","Radhika Apte","Neeraj Kabi"],
    imdbRating:8.6,duration:"2 Seasons",
    description:"A complex crime thriller set in Mumbai, where a police officer receives a cryptic call from a gangster who claims the city will be destroyed in 25 days — setting off a chain of chaos.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/uEbNtFbK4At9WBDGap23lt1qO9n.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/uEbNtFbK4At9WBDGap23lt1qO9n.jpg"},
  {id:108,title:"Panchayat",year:2020,language:"Hindi",type:"series",genres:["Comedy","Drama"],
    director:"Deepak Kumar Mishra",cast:["Jitendra Kumar","Raghubir Yadav","Neena Gupta","Chandan Roy","Faisal Malik"],
    imdbRating:9.0,duration:"3 Seasons",
    description:"An engineering graduate reluctantly takes a job as a government officer in a remote village in Uttar Pradesh, and slowly discovers the beauty in simplicity and service.",
    poster:T+"https://media.themoviedb.org/t/p/w600_and_h900_face/xrfvAhrMdT6Uwg5fyTyQAZBYyiu.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w600_and_h900_face/xrfvAhrMdT6Uwg5fyTyQAZBYyiu.jpg"},
  {id:109,title:"Scam 1992",year:2020,language:"Hindi",type:"series",genres:["Biography","Crime","Drama"],
    director:"Hansal Mehta",cast:["Pratik Gandhi","Shreya Dhanwanthary","Hemant Kher","Satish Kaushik"],
    imdbRating:9.3,duration:"1 Season",
    description:"The story of Harshad Mehta, a stockbroker who single-handedly took the stock market to dizzying heights and his catastrophic fall after the biggest financial scam of India's history.",
    poster:T+"https://media.themoviedb.org/t/p/w188_and_h282_face/fiimZ9Xt5cPTPHNrbS4QautBXpU.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w188_and_h282_face/fiimZ9Xt5cPTPHNrbS4QautBXpU.jpg"},
  {id:110,title:"The Crown",year:2016,language:"English",type:"series",genres:["Biography","Drama","History"],
    director:"Peter Morgan",cast:["Claire Foy","Olivia Colman","Imelda Staunton","Matt Smith","Tobias Menzies"],
    imdbRating:8.6,duration:"6 Seasons",
    description:"Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century. A lavish, deeply personal royal drama.",
    poster:T+"https://media.themoviedb.org/t/p/w600_and_h900_face/1M876KPjulVwppEpldhdc8V4o68.jpg",backdrop:TB+"https://media.themoviedb.org/t/p/w600_and_h900_face/1M876KPjulVwppEpldhdc8V4o68.jpg"}
];

// ==========================================
// HERO FEATURED MOVIES
// ==========================================
const heroFeatured = [
  movies.find(m=>m.title==="Dhurandhar"),
  movies.find(m=>m.title==="Avengers: Endgame"),
  movies.find(m=>m.title==="Interstellar"),
  movies.find(m=>m.title==="Baahubali: The Beginning"),
  movies.find(m=>m.title==="Avatar"),
  movies.find(m=>m.title==="Leo"),
  movies.find(m=>m.title==="Stranger Things"),
  movies.find(m=>m.title==="Breaking Bad"),
].filter(Boolean);

// ==========================================
// STATE
// ==========================================
let currentHero = 0;
let heroTimer = null;
let activeGenre = 'All';
let activeView = 'all';
let watchlist = JSON.parse(localStorage.getItem('moviezworld_wl') || '[]');
let currentModalId = null;

// ==========================================
// UTILS
// ==========================================
function imgWithFallback(src, title) {
  const safe = (encodeURIComponent(title.substring(0,15)));
  return `<img src="${src}" alt="${title}" loading="lazy"
    onerror="this.onerror=null;this.src='https://placehold.co/300x450/1a1a1a/e50914?text=${safe}'" />`;
}

function getLangClass(lang) {
  const map = { Telugu:'telugu', Hindi:'hindi', Tamil:'tamil', Kannada:'kannada', English:'english' };
  return 'lang-' + (map[lang] || 'english');
}

function getLangLabel(lang) {
  if (lang === 'English') return 'ENGLISH';
  return lang.toUpperCase();
}

function isInWatchlist(id) { return watchlist.some(m=>m.id===id); }

function saveWatchlist() { localStorage.setItem('moviezworld_wl', JSON.stringify(watchlist)); }

function updateWatchlistBadge() {
  document.getElementById('watchlistCount').textContent = watchlist.length;
}

// ==========================================
// HERO
// ==========================================
function renderHero(index) {
  const m = heroFeatured[index];
  if (!m) return;
  const bg = document.getElementById('heroBg');
  const title = document.getElementById('heroTitle');
  const meta = document.getElementById('heroMeta');
  const desc = document.getElementById('heroDesc');
  const labels = document.getElementById('heroLabels');
  const dots = document.getElementById('heroDots');

  bg.style.backgroundImage = `url('${m.backdrop}')`;
  bg.style.backgroundPosition = 'center top';
  title.textContent = m.title;
  labels.innerHTML = `<span class="hero-lang-tag">${m.language.toUpperCase()}</span>${m.genres.slice(0,2).map(g=>`<span class="hero-genre-tag">${g}</span>`).join('')}`;
  meta.innerHTML = `
    <div class="hero-rating">★ ${m.imdbRating} IMDb</div>
    <div class="hero-year">${m.year}</div>
    <div class="hero-dur">${m.duration}</div>
    <div class="hero-lang-meta">${m.language}</div>`;
  desc.textContent = m.description;

  // Dots
  dots.innerHTML = heroFeatured.map((_,i)=>`<div class="hero-dot${i===index?' active':''}" data-i="${i}"></div>`).join('');
  dots.querySelectorAll('.hero-dot').forEach(d=>d.addEventListener('click',()=>setHero(+d.dataset.i)));

  // Hero buttons
  document.getElementById('heroInfo').onclick = () => openModal(m.id);
  document.getElementById('heroPlay').onclick = () => openModal(m.id);
  document.getElementById('heroWatchlist').onclick = () => toggleWatchlist(m.id);

  // Animation
  const content = document.getElementById('heroContent');
  content.style.animation = 'none';
  void content.offsetWidth;
  content.style.animation = 'hero-in 0.7s ease forwards';
}

function setHero(i) {
  currentHero = (i + heroFeatured.length) % heroFeatured.length;
  renderHero(currentHero);
  resetHeroTimer();
}

function resetHeroTimer() {
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(() => setHero(currentHero + 1), 6000);
}

document.getElementById('heroPrev').addEventListener('click', () => setHero(currentHero - 1));
document.getElementById('heroNext').addEventListener('click', () => setHero(currentHero + 1));

// ==========================================
// CARD BUILDER
// ==========================================
function buildCard(m) {
  const inWl = isInWatchlist(m.id);
  const div = document.createElement('div');
  div.className = 'movie-card';
  div.dataset.id = m.id;

  const safeTitle = encodeURIComponent(m.title.substring(0,15));
  const omdb = `https://img.omdbapi.com/?apikey=564727fa&t=${encodeURIComponent(m.title)}`;
  const placeholder = `https://placehold.co/300x450/1a1a1a/e50914?text=${safeTitle}`;

  div.innerHTML = `
    <div style="position:relative;overflow:hidden;">
      <img class="card-poster" src="${m.poster}" alt="${m.title}" loading="lazy"
        onerror="
          if(this.src !== '${omdb}') {
            this.src='${omdb}';
          } else {
            this.src='${placeholder}';
          }
        " />
      <span class="card-lang-badge ${getLangClass(m.language)}">${getLangLabel(m.language)}</span>
      ${m.type==='series'?'<span class="card-type-badge">SERIES</span>':''}
      <div class="card-overlay">
        <div class="card-play-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </div>
        <div class="card-title-overlay">${m.title}</div>
        <div class="card-year-overlay">${m.year}</div>
      </div>
    </div>
    <div class="card-info">
      <div class="card-title">${m.title}</div>
      <div class="card-bottom">
        <div class="card-imdb">${m.imdbRating}</div>
        <div class="card-year">${m.year}</div>
      </div>
    </div>`;

  div.addEventListener('click', () => openModal(m.id));
  return div;
}
// ==========================================
// POPULATE ROWS
// ==========================================
function fillRow(rowId, items) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.innerHTML = '';
  items.forEach(m => row.appendChild(buildCard(m)));
}

function renderAllRows() {
  const tel = movies.filter(m=>m.language==='Telugu');
  const hin = movies.filter(m=>m.language==='Hindi');
  const tam = movies.filter(m=>m.language==='Tamil');
  const kan = movies.filter(m=>m.language==='Kannada');
  const hw = movies.filter(m=>m.language==='English' && m.type==='movie');
  const ser = movies.filter(m=>m.type==='series');
  const topRated = [...movies].sort((a,b)=>b.imdbRating-a.imdbRating).slice(0,18);
  const trending = [...movies].sort(()=>Math.random()-0.5).slice(0,18);

  fillRow('trendingRow', trending);
  fillRow('topratedRow', topRated);
  fillRow('teluguRow', tel);
  fillRow('hindiRow', hin);
  fillRow('tamilRow', tam);
  fillRow('kannadaRow', kan);
  fillRow('hollywoodRow', hw);
  fillRow('seriesRow', ser);
}

// ==========================================
// ARROW SCROLL
// ==========================================
document.addEventListener('click', e => {
  const btn = e.target.closest('.arrow-btn');
  if (!btn) return;
  const target = btn.dataset.target;
  const row = document.getElementById(target);
  if (!row) return;
  const dir = btn.classList.contains('left') ? -1 : 1;
  row.scrollBy({ left: dir * 520, behavior: 'smooth' });
});

// ==========================================
// MODAL
// ==========================================
function openModal(id) {
  const m = movies.find(x=>x.id===id);
  if (!m) return;
  currentModalId = id;
  const overlay = document.getElementById('modalOverlay');
  const safeTitle = encodeURIComponent(m.title.substring(0,15));

  document.getElementById('modalBackdrop').style.backgroundImage = `url('${m.backdrop || m.poster}')`;
  const modalImg = document.getElementById('modalPoster');
const omdb = `https://img.omdbapi.com/?apikey=564727fa&t=${encodeURIComponent(m.title)}`;
const placeholder = `https://placehold.co/300x450/1a1a1a/e50914?text=${safeTitle}`;

modalImg.src = m.poster;

modalImg.onerror = function () {
  if (this.src !== omdb) {
    this.src = omdb;
  } else {
    this.src = placeholder;
  }
};
    document.getElementById('modalImdb').textContent = m.imdbRating + '/10';
  document.getElementById('modalTitle').textContent = m.title;
  document.getElementById('modalRowMeta').innerHTML = `
    <span class="meta-year">${m.year}</span>
    <span class="meta-dot">·</span>
    <span class="meta-dur">${m.duration}</span>
    <span class="meta-dot">·</span>
    <span class="meta-lang">${m.language}</span>`;
  document.getElementById('modalTagRow').innerHTML = m.genres.map(g=>`<span class="genre-tag">${g}</span>`).join('');
  document.getElementById('modalDescText').textContent = m.description;
  document.getElementById('infoDirector').textContent = m.director;
  document.getElementById('infoCast').textContent = m.cast.join(', ');
  document.getElementById('infoDuration').textContent = m.duration;
  document.getElementById('infoLanguage').textContent = m.language;

  const wlBtn = document.getElementById('modalWlBtn');
  const wlText = document.getElementById('modalWlText');
  const inWl = isInWatchlist(id);
  wlBtn.classList.toggle('added', inWl);
  wlText.textContent = inWl ? '✓ In Watchlist' : 'Add to Watchlist';
  wlBtn.onclick = () => {
    toggleWatchlist(id);
    const nowIn = isInWatchlist(id);
    wlBtn.classList.toggle('added', nowIn);
    wlText.textContent = nowIn ? '✓ In Watchlist' : 'Add to Watchlist';
  };

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModalId = null;
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key==='Escape') { closeModal(); closeWlPanel(); }});

// ==========================================
// WATCHLIST
// ==========================================
function toggleWatchlist(id) {
  const m = movies.find(x=>x.id===id);
  if (!m) return;
  const i = watchlist.findIndex(x=>x.id===id);
  if (i>-1) { watchlist.splice(i,1); } else { watchlist.push(m); }
  saveWatchlist();
  updateWatchlistBadge();
  renderWlPanel();
}

function renderWlPanel() {
  const body = document.getElementById('wlBody');
  const empty = document.getElementById('wlEmpty');
  if (watchlist.length === 0) {
    empty.style.display = 'flex';
    const items = body.querySelectorAll('.wl-item');
    items.forEach(i=>i.remove());
    return;
  }
  empty.style.display = 'none';
  body.querySelectorAll('.wl-item').forEach(i=>i.remove());
  watchlist.forEach(m => {
    const div = document.createElement('div');
    div.className = 'wl-item';
    const safe = encodeURIComponent(m.title.substring(0,12));
    div.innerHTML = `
      <img src="${m.poster}" alt="${m.title}"
        onerror="this.onerror=null;this.src='https://placehold.co/48x72/1a1a1a/e50914?text=${safe}'" />
      <div class="wl-item-info">
        <div class="wl-item-title">${m.title}</div>
        <div class="wl-item-meta">${m.year} · ${m.language} · ★ ${m.imdbRating}</div>
      </div>
      <button class="wl-remove" data-id="${m.id}" title="Remove">✕</button>`;
    div.querySelector('.wl-item-info').addEventListener('click', () => { closeWlPanel(); openModal(m.id); });
    div.querySelector('.wl-remove').addEventListener('click', e => {
      e.stopPropagation();
      toggleWatchlist(m.id);
    });
    body.appendChild(div);
  });
}

function openWlPanel() {
  document.getElementById('wlPanel').classList.add('open');
  document.getElementById('panelBg').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWlPanel() {
  document.getElementById('wlPanel').classList.remove('open');
  document.getElementById('panelBg').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('watchlistBtn').addEventListener('click', openWlPanel);
document.getElementById('wlClose').addEventListener('click', closeWlPanel);
document.getElementById('panelBg').addEventListener('click', closeWlPanel);

// ==========================================
// GENRE FILTER
// ==========================================
document.getElementById('genrePills').addEventListener('click', e => {
  const pill = e.target.closest('.pill');
  if (!pill) return;
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  pill.classList.add('active');
  activeGenre = pill.dataset.genre;
  applyFilters();
});

// ==========================================
// VIEW TABS
// ==========================================
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    activeView = btn.dataset.view;
    applyFilters();
  });
});

// ==========================================
// NAV TABS
// ==========================================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
    link.classList.add('active');
    const tab = link.dataset.tab;
    if (tab === 'movies') {
      activeView = 'movie';
      document.querySelectorAll('.tab').forEach(t=>{t.classList.remove('active'); if(t.dataset.view==='movie')t.classList.add('active');});
      applyFilters();
    } else if (tab === 'series') {
      activeView = 'series';
      document.querySelectorAll('.tab').forEach(t=>{t.classList.remove('active'); if(t.dataset.view==='series')t.classList.add('active');});
      applyFilters();
    } else {
      activeView = 'all';
      activeGenre = 'All';
      document.querySelectorAll('.pill').forEach(p=>{p.classList.remove('active'); if(p.dataset.genre==='All')p.classList.add('active');});
      document.querySelectorAll('.tab').forEach(t=>{t.classList.remove('active'); if(t.dataset.view==='all')t.classList.add('active');});
      applyFilters();
    }
  });
});

// ==========================================
// FILTER LOGIC
// ==========================================
function applyFilters() {
  let filtered = [...movies];
  if (activeView === 'movie') filtered = filtered.filter(m=>m.type==='movie');
  if (activeView === 'series') filtered = filtered.filter(m=>m.type==='series');
  if (activeGenre !== 'All') filtered = filtered.filter(m=>m.genres.includes(activeGenre));

  const showNormal = activeGenre==='All' && activeView==='all';
  document.getElementById('normalView').style.display = showNormal ? '' : 'none';
  document.getElementById('filteredView').style.display = showNormal ? 'none' : '';

  if (!showNormal) {
    const grid = document.getElementById('filteredGrid');
    const titleEl = document.getElementById('filteredTitle');
    const countEl = document.getElementById('resultCount');
    grid.innerHTML = '';
    let label = '';
    if (activeGenre!=='All' && activeView==='all') label = activeGenre + ' Titles';
    else if (activeView==='movie' && activeGenre==='All') label = 'All Movies';
    else if (activeView==='series' && activeGenre==='All') label = 'All TV Series';
    else label = `${activeGenre} — ${activeView==='movie'?'Movies':'Series'}`;
    titleEl.textContent = label;
    countEl.textContent = `${filtered.length} titles`;
    filtered.forEach(m => grid.appendChild(buildCard(m)));
  }
}

// ==========================================
// SEARCH
// ==========================================
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (q.length < 2) {
    applyFilters();
    return;
  }
  const results = movies.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.director.toLowerCase().includes(q) ||
    m.cast.some(c=>c.toLowerCase().includes(q)) ||
    m.language.toLowerCase().includes(q) ||
    m.genres.some(g=>g.toLowerCase().includes(q))
  );
  document.getElementById('normalView').style.display = 'none';
  document.getElementById('filteredView').style.display = '';
  const grid = document.getElementById('filteredGrid');
  grid.innerHTML = '';
  document.getElementById('filteredTitle').innerHTML = `Search: <em>"${searchInput.value}"</em>`;
  document.getElementById('resultCount').textContent = `${results.length} results`;
  if (results.length === 0) {
    grid.innerHTML = '<p style="color:var(--gray);padding:20px 0;">No results found. Try a different search.</p>';
  } else {
    results.forEach(m => grid.appendChild(buildCard(m)));
  }
});

// Clear search on Escape
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') { searchInput.value = ''; applyFilters(); }
});

// ==========================================
// NAVBAR SCROLL
// ==========================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}, { passive: true });

// ==========================================
// HAMBURGER MENU
// ==========================================
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ==========================================
// PRELOADER + INIT
// ==========================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
    init();
  }, 1600);
});

function init() {
  renderHero(0);
  resetHeroTimer();
  renderAllRows();
  updateWatchlistBadge();
  renderWlPanel();
  animateSections();
}

// ==========================================
// INTERSECTION OBSERVER — Animate on scroll
// ==========================================
function animateSections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.row-section').forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(24px)';
    sec.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(sec);
  });
}