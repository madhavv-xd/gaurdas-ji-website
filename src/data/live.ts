// Snapshot of the gaurdasjimaharaj.in API (api.gaurdasjimaharaj.in/api/v1), taken 2026-09-21. Hardcoded on purpose — edit here to change site content.
export type Category = { id: number; name: string; description: string; featured: boolean; image: string };
export type Katha = { id: number; categoryId: number; name: string; shortDescription: string; description: string; dates: string; status: 'upcoming' | 'done'; location: string; time: string; images: string[] };
export type Video = { id: number; kathaId: number; name: string; yt: string };
export type Bhajan = { id: number; title: string; yt: string };

export const ABOUT: { title: string; html: string } = {
 "title": "परम पूज्य श्री गौरदास जी महाराज का संक्षिप्त जीवन परिचय",
 "html": "<p><strong style=\"color: rgb(255, 153, 0);\">परमपूज्य श्रीगौरदास जी महाराजजी का शुभ जन्म चैत्र कृष्ण अष्टमी (शीतला अष्टमी, दिन बुधवार) विक्रम सम्वत् २०३५ (तदानुसार 21 मार्च 1979) को मथुरावासी </strong><strong style=\"color: rgb(255, 153, 0);\">शांडिल्य</strong><strong style=\"color: rgb(255, 153, 0);\"> विप्र परिवार में हुआ .</strong></p><p><span style=\"color: rgb(0, 0, 0);\">आपका बाल्यकाल विलक्षण था। बचपन से ही आपकी अद्भुत मेधा थी एवं आपमें विलक्षण स्मरण तथा कवित्त शक्ति विराजमान थी। पाँच वर्ष की अवस्था में आपको सर्वप्रथम श्रीशुकदेव स्वरुप श्रीडोंगरे जी महाराज का आशीर्वाद प्राप्त हुआ । आपने पाँच वर्ष की अवस्था में श्रीडोंगरे जी महाराज जी की संपूर्ण भागवत कथा श्रवण की और कथा विश्राम पर श्रीडोंगरे जी महाराज जी ने आपको गोदमें लेकर स्नेह किया। बाल्यावस्था में श्री गौरदास जी महाराज को श्री गोवर्धनवासी महान संत पंडित श्रीगया प्रसादजी महाराजजी का दर्शन कृपा लाभ भी प्राप्त हुआ। भारत के महान संत स्वामी श्रीरामसुखदास जी महाराज का भी दर्शन सत्संग लाभ प्राप्त हुआ । इनके पश्चात् अयोध्यावासी संत श्रीगोपालाचार्य जी एवं शिक्षा गुरुदेव स्वरुप संत भगवान श्रीमन् नारायणदास भक्तमाली जी ( मामा जी महाराज) का कृपा दुलार एवं वाणी का लाभ श्रीधाम बरसाना में अनेक बार प्राप्त हुआ ।</span></p><p><span style=\"color: rgb(0, 0, 0);\">संत कृपा फलस्वरुप आपने श्री ब्रह्ममध्वगौड़ेश्वर सम्प्रदाय में श्रीनित्यानंद प्रभुजी की पावन परंपरा में श्रीमद् राधारमणचरणदासदेव श्री बड़े बाबाजी महाराज के परिवार में आश्रय ग्रहण किया। श्री हरि गुरु कृपा की शक्ति को धारण किये आप लगभग सात वर्ष की छोटी अवस्था से ही सत्संग संकीर्तन की सेवा कर रहे हैं। लौकिक-अलौकिक शिक्षा ग्रहण करके बाल्यावस्था से ही नाम प्रचार में निरंतर संलग्न रहते हुए आपने संत आज्ञा से गृहस्थ आश्रम में प्रवेश किया। आपकी सहधर्मिणी श्रीमती विष्णुप्रियादासी जी (गुरु माँ) सम्पूर्ण प्रकार से पूज्य महाराज जी का भजन मार्ग में सहयोग करने वाली हैं एवं पूज्य महाराज जी के सुपुत्र चिरंजीव निताईदास जी वैदिक एवं आधुनिक दोनों शिक्षा ग्रहण कर रहे हैं।</span></p><p><span style=\"color: rgb(0, 0, 0);\">परम पूज्य श्रीगौरदास जी महाराज जी की ही तरह चिरंजीव निताईदास जी भी लगभग छः वर्ष की अवस्था से ही सत्संग कर रहे हैं। उनके You Tube चैनल पर उनकी अनेको कथायें उपलब्ध हैं।</span></p><p>परम पूज्य श्रीगौरदास जी महाराज जी की अद्भुत स्मरण शक्ति है। आप सदा से बिना देखे ही कोई भी पोथी या पुस्तक रखे बिना निरंतर नए-नए विषयों पर भाव विभोर कर देने वाली कथा रसवर्षा करते ही रहते हैं। जनवरी 2023 तक लगभग 1500 कथा-सत्संग आपके द्वारा संपन्न हो गए हैं। जिनमे श्रीमद् भागवत कथा, श्रीराम कथा, श्री गौरांग कथा, श्री चैतन्य चरितामृत कथा, श्रीमद् बाल्मिकी रामायण कथा, श्री नरसी चरित्र, श्री मीरा चरित्र, श्री नामदेव जी चरित्र, श्री शिव महापुराण, 108 दिवसीय श्री भक्तमाल कथा, 31 दिवसीय श्री राधा रससुधानिधि, 31 दिवसीय श्री विलाप कुसुमांजलि, 31 दिवसीय श्री नरोत्तम प्रार्थना, असंख्य भक्त चरित्र आदि अनगिनत सत्संग निरंतर हो रहे हैं।</p><p>पूज्य महाराज जी आशु कवि हैं (अर्थात् तुरंत पद रचना करके गा देना)। आपके द्वारा अभी तक कई हजार पदों (भजनों) की रचना हो चुकी है जो अत्यंत सारगर्भित, रसीले, रागबद्ध एवं भक्त हृदय की करुण पुकार से परिपूर्ण हैं। जिनका आपकी कृपा से अब शीघ्र प्रकाशन होना है।</p><p>पूज्य महाराज जी के कथा रस की महिमा वही जानता है जिसने एक बार भी आपके श्रीमुख निःसृत कथासुधा का पान किया है। उस दिव्य आनंद को व्यक्त करने के लिए शब्द नहीं हैं। हजारों शुष्क हृदयों में आपकी वाणी के प्रभाव से भक्तिरस का संचार हुआ है। आज लाखों की संख्या में देश-विदेश से श्रोता भक्तजन You Tube, Facebook के माध्यम से आपको श्रवण कर कृतार्थ हो रहे हैं। हजारों की संख्या में भक्तजन गुरुदेव श्रीगौरदास जी महाराज से श्री गुरुदीक्षा ग्रहण कर भजन मार्ग में अग्रसर हो रहे हैं। सैकड़ों शिष्य मन्त्र पुरुश्चरण कर रहे हैं। प्रतिदिन एक लाख नामजप करने वाले शिष्यों की संख्या भी हजारों में है। आपके आनुगत्य में अनेको शिष्य भक्तजनों ने लीला रस अनुभव किया है और कर रहे हैं।</p><p>परमपूज्य श्रीगौरदास जी महाराज जी के सानिध्य में श्रीधाम वृन्दावन में अटल्ला चुंगी के निकट श्रीबांके बिहारी मार्ग पर श्रीगौरकृपा धाम आश्रम संचालित है जहाँ श्री ठाकुर सेवा, नाम सेवा, विप्र साधु सेवा के साथ अनेक सेवा प्रकल्प चल रहे हैं।</p><p>गाजियाबाद में भी पूज्य महाराज जी द्वारा घंटाघर श्री हनुमान मंदिर में श्री निताई गौरांग महाप्रभु जी, श्री जगन्नाथ - बलभद्र- सुभद्रा-सुदर्शन भगवान के विशाल विग्रह के साथ श्री युगल किशोर विराजित हैं। पूज्य महाराज जी के शिष्य परिकरों के द्वारा यहाँ बहुत सुंदर रूप में सेवा सम्पन्न हो रही है। प्रत्येक एकादशी तिथि पर यहाँ मंदिर में अष्टप्रहर अखण्ड ' ( भज) निताई गौर राधे श्याम (जप) हरे कृष्ण हरे राम कीर्तन होता है। प्रत्येक वैष्णव तिथियों का पालन होता है। गाजियाबाद में लगभग पिछले 25 वर्षों से श्री हरिनाम संकीर्तन, उत्सव, कथा एंव प्रति वर्ष श्री गौर पूर्णिमा (होली) पर विशाल श्री निताई गौर डोल यात्रा का भव्य आयोजन होता है। गाजियाबाद में हजारों वैष्णव भजन में लगे हैं, सैकड़ों परिवारों में ठाकुर जी की अष्टायाम सेवा चल रही है।</p><p>गाजियाबाद में डासना गेट, श्री निताई गौर गली में श्री महाप्रभु जी की सेवा और एकादशी अखण्ड हरिनाम पिछले 15 वर्षों से चल रहा है। गाजियाबाद के अतिरिक्त दिल्ली, मेरठ, मुजफ्फरनगर, अहमदाबाद, सूरत आदि अनेकों स्थानों पर एकादशी हरिनाम की प्रतिष्ठा की गई है। यह सब श्री महाराज जी के अथक परिश्रम का ही परिणाम है।</p><p>अभी श्रीधाम वृन्दावन में नवीन आश्रम श्री विष्णुप्रिया धाम का कार्य प्रगति पर है। अनेक भक्तजन इस आश्रम के प्रकल्प से जुड़कर कृतार्थ हो रहे हैं। परमपूज्य गुरुदेव श्रीगौरदास जी महाराज की यशगाथा अनंत है। यहाँ अनेक भक्तजनों के आग्रह पर पूज्य महाराज जी का संक्षिप्त जीवन परिचय प्रस्तुत कर रहे हैं और साथ में हम सब महाप्रभु जी से प्रार्थना भी कर रहे हैं की हमारे प्राणधन सदगुरुदेव परमपूज्य श्रीगौरदास जी महाराज सदैव स्वस्थ रहें, दीर्घायु हों और इसी प्रकार अपना सानिध्य प्रदान कर हमें भगवत भागवत लीला रस में सराबोर करते रहें ।</p><p><strong>कोटिशः दंडवत प्रणाम</strong></p><p><strong>समस्त शिष्य वैष्णव परिकरजन</strong></p><p><strong>श्री गौर कृपा धाम</strong></p><p><strong>श्री निताई गौर हरि संकीर्तन मंडल ट्रस्ट (रजि.)</strong></p><p><strong>श्रीधाम वृन्दावन</strong></p>"
};

export const CATEGORIES: Category[] = [
 {
  "id": 1,
  "name": "श्री राम कथा",
  "description": "",
  "featured": true,
  "image": "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBTZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8fe3403744e2d9546a0f6052463c58f3d3b17e2d/for%20web%20ram%20katha%20.jpg"
 },
 {
  "id": 8,
  "name": "श्री कृष्ण चैतन्य महाप्रभु कथा",
  "description": "",
  "featured": true,
  "image": "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBUUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b35adaef0a95c9a50ae8a1675aacb3dbcbb8e835/for%20web%20gaur%20katha%20.jpg"
 },
 {
  "id": 4,
  "name": "श्री भक्तमाल कथा",
  "description": "",
  "featured": true,
  "image": "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBUQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d7414e81600efb5db3d24ff46d83d8a5fa3961fb/for%20web%20bhaktmal%20katha%20.jpg"
 },
 {
  "id": 5,
  "name": "एक द्विवसीय कथा",
  "description": "",
  "featured": false,
  "image": "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBUdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--79e88b7cb10d59422721237956d513c1abdf0eb2/for%20web%20satsang%20evm%20sankirtan%20.jpg"
 },
 {
  "id": 31,
  "name": "श्री शिवमहापुराण कथा",
  "description": "<p><span>&nbsp;श्री राम कथा</span></p>",
  "featured": false,
  "image": "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBVQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a2f6b69db8205f403ee779e824098e21a7e8001d/for%20web%20shiv%20mahapuran%20.jpg"
 },
 {
  "id": 2,
  "name": "श्रीमद्भागवत कथा",
  "description": "",
  "featured": true,
  "image": "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBTdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c939714c744b56b5118ba532149c9c7290bf966d/for%20website%20bhagwat%20katha%20.jpg"
 }
];

export const KATHAS: Katha[] = [
 {
  "id": 191,
  "categoryId": 4,
  "name": "Shri BhakatMal katha",
  "shortDescription": "<p>Shri BhakatMal katha</p>",
  "description": "",
  "dates": "07 August 2026 - 14 August 2026",
  "status": "upcoming",
  "location": "श्री सिद्ध पीठ दंडी स्वामी मंदिर,सिविल लाइन , लुधियाना , पंजाब",
  "time": "",
  "images": []
 },
 {
  "id": 190,
  "categoryId": 8,
  "name": "Shri Gaurang Katha",
  "shortDescription": "<p><span>Shri BhakatMal katha</span></p>",
  "description": "",
  "dates": "03 August 2026 - 07 August 2026",
  "status": "done",
  "location": "Shri sanatan dharma sabha Mandir , Sadar Bazar , Nabha , Punjab",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBjdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4dc23c2f74824e68d45fac33415e7200c2ab06df/gaurrang%20katha.png"
  ]
 },
 {
  "id": 189,
  "categoryId": 2,
  "name": "Upcomings kathas",
  "shortDescription": "<p>Schedule for upcoming katha for year 2026</p>",
  "description": "",
  "dates": "21 July 2026 - 23 January 2027",
  "status": "upcoming",
  "location": "",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBjZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8ef4bd462504898d60836b1d6f4de6b94213456d/WhatsApp%20Image%202026-07-19%20at%2019.25.19.jpeg"
  ]
 },
 {
  "id": 188,
  "categoryId": 2,
  "name": "श्रीमद्भगवद्गीता कथा",
  "shortDescription": "",
  "description": "",
  "dates": "21 July 2026 - 27 July 2026",
  "status": "done",
  "location": "डेरा बापू गंगा दास जी धाम, माहिलपुर, होशियारपुर, पंजाब",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBjUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1a9433aa7b182141dd0281fd3d5b1874469ad0f9/WhatsApp%20Image%202026-07-17%20at%2017.07.56.jpeg"
  ]
 },
 {
  "id": 187,
  "categoryId": 5,
  "name": "महान रसिक संत श्री सनम साहब का पावन चरित्र",
  "shortDescription": "<p><strong>महान रसिक संत श्री सनम साहब का पावन चरित्र</strong></p>",
  "description": "",
  "dates": "06 July 2026 - 08 July 2026",
  "status": "done",
  "location": "श्री सनातन धर्म मंदिर, G ब्लॉक, नारायण विहार, दिल्ली",
  "time": "",
  "images": []
 },
 {
  "id": 186,
  "categoryId": 8,
  "name": "श्री पिसी मां गोस्वामिनी जी का पावन चरित्र",
  "shortDescription": "<p><strong>श्री पिसी मां गोस्वामिनी जी का पावन चरित्र</strong></p>",
  "description": "",
  "dates": "03 July 2026 - 05 July 2026",
  "status": "done",
  "location": "वात्सल्य मंदिर, A-3, प्रदीप भाटिआ मार्ग, पॉकेट 3, सेक्टर 7A, रोहिणी, दिल्ली 110085, Nearest Rohini East Metro Station",
  "time": "",
  "images": []
 },
 {
  "id": 185,
  "categoryId": 5,
  "name": "Shri Radha Madhav Vivah Mahotsav (Shyam Sagai)",
  "shortDescription": "<p><strong>Shri Radha Madhav Vivah Mahotsav (Shyam Sagai)</strong></p>",
  "description": "",
  "dates": "01 July 2026 - 02 July 2026",
  "status": "done",
  "location": "Shri Dham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 184,
  "categoryId": 8,
  "name": "ग्रीष्मकालीन श्री राधा माधव लीला महामहोत्सव",
  "shortDescription": "<p><strong>ग्रीष्मकालीन श्री राधा माधव लीला महामहोत्सव</strong></p>",
  "description": "",
  "dates": "24 June 2026 - 30 June 2026",
  "status": "done",
  "location": "राणा फार्म हाउस, अग्रसेन मार्केट, कस्बा रोड, मुरादनगर",
  "time": "",
  "images": []
 },
 {
  "id": 183,
  "categoryId": 8,
  "name": "श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा",
  "shortDescription": "<p><strong>श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा</strong></p>",
  "description": "",
  "dates": "17 June 2026 - 23 June 2026",
  "status": "done",
  "location": "सत्संग भवन, श्री गोविंद देव जी मंदिर, सिटी पैलेस, जलेबी चौक के पास, जयपुर",
  "time": "",
  "images": []
 },
 {
  "id": 182,
  "categoryId": 2,
  "name": "Shri Bhagwat Chintan",
  "shortDescription": "<p><strong>Shri Bhagwat Chintan</strong></p>",
  "description": "",
  "dates": "09 June 2026 - 15 June 2026",
  "status": "done",
  "location": "डेरा बाबा रूद्रानंद ठाकुर द्वारा अम्लहेड, ऊना (हिमाचल प्रदेश)",
  "time": "",
  "images": []
 },
 {
  "id": 181,
  "categoryId": 8,
  "name": "श्री बद्री विशाल भागवत कथा",
  "shortDescription": "<p><strong>श्री बद्री विशाल भागवत कथा</strong></p>",
  "description": "",
  "dates": "01 June 2026 - 07 June 2026",
  "status": "done",
  "location": "पंजाब एंड सिंध भवन क्षेत्र, बद्रीनाथ",
  "time": "",
  "images": []
 },
 {
  "id": 180,
  "categoryId": 8,
  "name": "श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा",
  "shortDescription": "<p><strong>श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा</strong></p>",
  "description": "",
  "dates": "24 May 2026 - 30 May 2026",
  "status": "done",
  "location": "बाल मंदिर सीनियर सेकेंडरी स्कूल, डिफेंस एनक्लेव, नियर प्रीत विहार मेट्रो स्टेशन, दिल्ली",
  "time": "",
  "images": []
 },
 {
  "id": 179,
  "categoryId": 8,
  "name": "श्री पुरुषोत्तम भागवत कथा",
  "shortDescription": "<p><strong>श्री पुरुषोत्तम भागवत कथा</strong></p>",
  "description": "",
  "dates": "17 May 2026 - 23 May 2026",
  "status": "done",
  "location": "बडुका निवास, महबूबगंज, हैदराबाद",
  "time": "",
  "images": []
 },
 {
  "id": 178,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "",
  "description": "",
  "dates": "11 July 2026 - 17 July 2026",
  "status": "done",
  "location": "श्री बाबा झारखंडी महादेव शिव मंदिर घंटाघर मेरठ , उत्तर प्रदेश",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBiZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--48fe9503407805c4e20dbb00162b5a69b33303ee/WhatsApp%20Image%202026-07-08%20at%2020.55.14.jpeg"
  ]
 },
 {
  "id": 177,
  "categoryId": 8,
  "name": "Ashtayam Leela",
  "shortDescription": "<p><strong>Ashtayam Leela</strong></p>",
  "description": "",
  "dates": "08 May 2026 - 15 May 2026",
  "status": "done",
  "location": "",
  "time": "",
  "images": []
 },
 {
  "id": 176,
  "categoryId": 5,
  "name": "Phool Kunj Mahotsav 2026",
  "shortDescription": "<p><strong>Phool Kunj Mahotsav 2026</strong></p>",
  "description": "<p>\t</p>",
  "dates": "07 May 2026 - 07 May 2026",
  "status": "done",
  "location": "",
  "time": "",
  "images": []
 },
 {
  "id": 175,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "description": "",
  "dates": "30 April 2026 - 06 May 2026",
  "status": "done",
  "location": "Rukmini Bhawan, Triveni Nagar 2, Sitapur Road, Lucknow, Lucknow",
  "time": "",
  "images": []
 },
 {
  "id": 174,
  "categoryId": 8,
  "name": "Shrila Roop Sanatan Goswami Ji Ka Charitra",
  "shortDescription": "",
  "description": "",
  "dates": "26 April 2026 - 29 April 2026",
  "status": "done",
  "location": "Anand Ashram, Rampur Bug , Bareilly",
  "time": "",
  "images": []
 },
 {
  "id": 173,
  "categoryId": 5,
  "name": "Akshaya Tritiya",
  "shortDescription": "<p><strong>Akshaya Tritiya (Chadan Mahotsav 2026)</strong></p>",
  "description": "",
  "dates": "21 April 2026 - 21 April 2026",
  "status": "done",
  "location": "Shri Gaur Kripa Dham, Shri Banke Bihari Ji Road, Near Atalla Chungi, Behind Agarwal Satsang Bhawan, Shri Dham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 172,
  "categoryId": 4,
  "name": "Bhaktimati Shri Meerabai Ji Ka Chartra and Shri Narasi Ji Ka Bhat",
  "shortDescription": "<p><strong>Bhaktimati Shri Meerabai Ji Ka Chartra and Shri Narasi Ji Ka Bhat</strong></p>",
  "description": "",
  "dates": "15 April 2026 - 20 April 2026",
  "status": "done",
  "location": "Shri Gaur Kripa Dham, Shri Banke Bihari Ji Road, Near Atalla Chungi, Behind Agarwal Satsang Bhawan, Shri Dham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 171,
  "categoryId": 5,
  "name": "Shrimad Radharaman Charandas Dev (Shri Bade Baba Ji Maharaj) Avirbhav Mahotsav || Vrindavan",
  "shortDescription": "<p>Shrimad Radharaman Charandas Dev (Shri Bade Baba Ji Maharaj) Avirbhav Mahotsav || Vrindavan</p>",
  "description": "",
  "dates": "14 April 2026 - 14 April 2026",
  "status": "done",
  "location": "Shri Gaur Kripa Dham, Shri Banke Bihari Ji Road, Near Atalla Chungi, Behind Agarwal Satsang Bhawan, Shri Dham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 170,
  "categoryId": 5,
  "name": "Satsang & Sankirtan",
  "shortDescription": "<p><strong>Satsang &amp; Sankirtan</strong></p>",
  "description": "",
  "dates": "13 April 2026 - 13 April 2026",
  "status": "done",
  "location": "",
  "time": "",
  "images": []
 },
 {
  "id": 169,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "description": "",
  "dates": "06 April 2026 - 12 April 2026",
  "status": "done",
  "location": "Tiltoria, Post Madanpur, P S Nirsa, District Dhanbad, State Jharkhand, Pin 828205",
  "time": "",
  "images": []
 },
 {
  "id": 168,
  "categoryId": 5,
  "name": "Shri Thakurji Patotsav",
  "shortDescription": "<p><strong>Shri Thakurji Patotsav</strong></p>",
  "description": "",
  "dates": "05 April 2026 - 05 April 2026",
  "status": "done",
  "location": "Brij Eternity, Chhatikara Road, Near Hira Sweets, Vrindavan, Mathura-281121",
  "time": "",
  "images": []
 },
 {
  "id": 167,
  "categoryId": 4,
  "name": "Shri Bhaktmaal Katha",
  "shortDescription": "<p><strong style=\"background-color: transparent;\">Shri Bhaktmaal Katha</strong></p>",
  "description": "",
  "dates": "29 March 2026 - 04 April 2026",
  "status": "done",
  "location": "Gram Singhra, Chattisgarh",
  "time": "",
  "images": []
 },
 {
  "id": 166,
  "categoryId": 5,
  "name": "Shri Sundarkand Path || Param Pujya Shri Gaurdas Ji Maharaj",
  "shortDescription": "<p><strong>Shri Sundarkand Path || Param Pujya Shri Gaurdas Ji Maharaj</strong></p>",
  "description": "",
  "dates": "28 March 2026 - 28 March 2026",
  "status": "done",
  "location": "Shri Sundarkand Path || Param Pujya Shri Gaurdas Ji Maharaj",
  "time": "",
  "images": []
 },
 {
  "id": 165,
  "categoryId": 1,
  "name": "Shri Ram Katha",
  "shortDescription": "<p><strong>Shri Ram Katha&nbsp;</strong></p>",
  "description": "",
  "dates": "19 March 2026 - 27 March 2026",
  "status": "done",
  "location": "Shri Mahavar Vaishya Dharamshala, Near Modi Bhawan, Haridwar",
  "time": "",
  "images": []
 },
 {
  "id": 164,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "",
  "description": "",
  "dates": "12 March 2026 - 18 March 2026",
  "status": "done",
  "location": "Hindu Kanya Mahavidhyalay, Safindon Road, Jind",
  "time": "",
  "images": []
 },
 {
  "id": 163,
  "categoryId": 4,
  "name": "Shri Ram Bhaktmal Katha",
  "shortDescription": "<p><strong>Shri Ram Bhaktmal Katha</strong></p>",
  "description": "",
  "dates": "04 March 2026 - 11 March 2026",
  "status": "done",
  "location": "शारदा स्कूल ग्राउंड ,स्टेशन रोड, सी.एम. राईज स्कूल के सामने , मल्हारगढ़",
  "time": "",
  "images": []
 },
 {
  "id": 162,
  "categoryId": 5,
  "name": "26 वीं विशाल श्री निताई गौर डोल यात्रा || श्री हनुमान मन्दिर, घण्टाघर, गाजियाबाद ||",
  "shortDescription": "<p><strong>26 वीं विशाल श्री निताई गौर डोल यात्रा || श्री हनुमान मन्दिर, घण्टाघर, गाजियाबाद ||</strong></p>",
  "description": "",
  "dates": "04 March 2026 - 04 March 2026",
  "status": "done",
  "location": "श्री हनुमान मन्दिर, घण्टाघर, गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 161,
  "categoryId": 5,
  "name": "श्री कृष्ण चैतन्य महाप्रभु बधाई गान उत्सव || गौर ग्रीन एवेन्यू, अभय खंड टू, इंदिरापुरम",
  "shortDescription": "<p><strong>श्री कृष्ण चैतन्य महाप्रभु बधाई गान उत्सव || गौर ग्रीन एवेन्यू, अभय खंड टू, इंदिरापुरम</strong></p>",
  "description": "",
  "dates": "03 March 2026 - 03 March 2026",
  "status": "done",
  "location": "गौर ग्रीन एवेन्यू, अभय खंड टू, इंदिरापुरम",
  "time": "",
  "images": []
 },
 {
  "id": 160,
  "categoryId": 5,
  "name": "ग्रहण काल में श्री गंगा स्नान, मंत्र जप एवं श्री गौरांग महाप्रभु जी का अभिषेक एवं बधाई",
  "shortDescription": "<p><strong>ग्रहण काल में श्री गंगा स्नान, मंत्र जप एवं श्री गौरांग महाप्रभु जी का अभिषेक एवं बधाई</strong></p>",
  "description": "",
  "dates": "03 March 2026 - 03 March 2026",
  "status": "done",
  "location": "गंग नहर, मुरादनगर",
  "time": "",
  "images": []
 },
 {
  "id": 159,
  "categoryId": 5,
  "name": "Holi Mahotsav 2026",
  "shortDescription": "<p><strong>&nbsp;Holi Mahotsav 2026</strong></p>",
  "description": "",
  "dates": "02 March 2026 - 02 March 2026",
  "status": "done",
  "location": "Holi Chowk, Avantika 1st, Ghaziabad",
  "time": "",
  "images": []
 },
 {
  "id": 158,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "description": "",
  "dates": "23 February 2026 - 01 March 2026",
  "status": "done",
  "location": "C-3, Park Adjacent to Shri Ram Mandir, Janakpuri, New Delhi, 110058",
  "time": "",
  "images": []
 },
 {
  "id": 157,
  "categoryId": 5,
  "name": "Satsang & Sankirtan",
  "shortDescription": "<p><strong>Satsang &amp; Sankirtan</strong></p>",
  "description": "",
  "dates": "21 February 2026 - 22 February 2026",
  "status": "done",
  "location": "",
  "time": "",
  "images": []
 },
 {
  "id": 156,
  "categoryId": 5,
  "name": "Shri Geetaji Par Adbhut Pravachan",
  "shortDescription": "<p><strong>Shri Geetaji Par Adbhut Pravachan</strong></p>",
  "description": "",
  "dates": "20 February 2026 - 20 February 2026",
  "status": "done",
  "location": "",
  "time": "",
  "images": []
 },
 {
  "id": 155,
  "categoryId": 5,
  "name": "Shri Bade Baba Ji Maharaj Ji Ka Tirobhav Mahotsav",
  "shortDescription": "<p><strong>Shri Bade Baba Ji Maharaj Ji Ka Tirobhav Mahotsav</strong></p>",
  "description": "",
  "dates": "19 February 2026 - 19 February 2026",
  "status": "done",
  "location": "Shri Khaki Baba Ramcharit manas Mandir, Dinod Gate, Bhiwani",
  "time": "",
  "images": []
 },
 {
  "id": 154,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "description": "",
  "dates": "12 February 2026 - 18 February 2026",
  "status": "done",
  "location": "Green City Galleria, Phase-2. Opp. Kripalu Kunj Mandir, Bhathinda",
  "time": "",
  "images": []
 },
 {
  "id": 153,
  "categoryId": 4,
  "name": "Shri Bhaktmal Katha",
  "shortDescription": "<p><strong>Shri Bhaktmal Katha</strong></p>",
  "description": "",
  "dates": "01 February 2026 - 11 February 2026",
  "status": "done",
  "location": "Shri Agrasen Bhawan, Hisar, Haryana",
  "time": "",
  "images": []
 },
 {
  "id": 152,
  "categoryId": 8,
  "name": "Shri Gaur Katha",
  "shortDescription": "<p><strong>Shri Gaur Katha</strong></p>",
  "description": "",
  "dates": "23 January 2026 - 29 January 2026",
  "status": "done",
  "location": "Shri Chaitanya Bhagavat Sevashram, Shri Dham Nabadwip Rajarghat, Nabadwip, Nadia 741302",
  "time": "",
  "images": []
 },
 {
  "id": 151,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "description": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "dates": "17 January 2026 - 22 January 2026",
  "status": "done",
  "location": "1204, Dakshindari Road, Natural City, Lake Town, Kolkata",
  "time": "",
  "images": []
 },
 {
  "id": 150,
  "categoryId": 2,
  "name": "श्रीमद्भागवत कथा",
  "shortDescription": "<p><span>श्री </span>गौर दास जी महाराज के सुपुत्र श्री निताई दास जी महाराज की प्रथम कथा</p>",
  "description": "",
  "dates": "09 January 2026 - 15 January 2026",
  "status": "done",
  "location": "हिंदी भवन, ए-ब्लॉक, लोहिया नगर, ग़ाज़ियाबाद",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBhdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ac38b7650f68af7b4b80268765d59b48acc33a7f/WhatsApp%20Image%202026-01-04%20at%2022.36.32.jpeg"
  ]
 },
 {
  "id": 149,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "description": "",
  "dates": "24 December 2025 - 30 December 2025",
  "status": "done",
  "location": "M-P Marriage Lawn, Near Baba Mandir, Hardoi, Uttar Pradesh",
  "time": "",
  "images": []
 },
 {
  "id": 148,
  "categoryId": 8,
  "name": "Nanibai Ro Mayaro Narsi Ka Bhat",
  "shortDescription": "<p><strong>Nanibai Ro Mayaro Narsi Ka Bhat</strong></p>",
  "description": "",
  "dates": "21 December 2025 - 23 December 2025",
  "status": "done",
  "location": "Agra, RBS College Auditorium, Khandari",
  "time": "",
  "images": []
 },
 {
  "id": 147,
  "categoryId": 5,
  "name": "Shri Nityanand Mahima Katha",
  "shortDescription": "<p><strong>Shri Nityanand Mahima Katha</strong></p>",
  "description": "",
  "dates": "20 December 2025 - 20 December 2025",
  "status": "done",
  "location": "Ludhiana, Punjab",
  "time": "",
  "images": []
 },
 {
  "id": 146,
  "categoryId": 8,
  "name": "Shri Meera Katha",
  "shortDescription": "<p><strong>Shri Meera Katha</strong></p>",
  "description": "",
  "dates": "15 December 2025 - 19 December 2025",
  "status": "done",
  "location": "Ojas Banquet Hall, 86A Topsia Road, Kolkata",
  "time": "",
  "images": []
 },
 {
  "id": 145,
  "categoryId": 5,
  "name": "Thakurji Patotsav",
  "shortDescription": "<p><strong>Thakurji Patotsav</strong></p>",
  "description": "",
  "dates": "14 December 2025 - 14 December 2025",
  "status": "done",
  "location": "Bundi Rajasthan",
  "time": "",
  "images": []
 },
 {
  "id": 144,
  "categoryId": 1,
  "name": "Shri Ram Katha",
  "shortDescription": "<p><strong>Shri Ram Katha</strong></p>",
  "description": "",
  "dates": "05 December 2025 - 13 December 2025",
  "status": "done",
  "location": "Shri Dandi Swami Mandir, Civil Lines, Ludhiana, Punjab",
  "time": "",
  "images": []
 },
 {
  "id": 143,
  "categoryId": 4,
  "name": "Shri Bhaktmal Katha",
  "shortDescription": "<p>Shri Bhaktmal Katha</p>",
  "description": "",
  "dates": "01 December 2025 - 04 December 2025",
  "status": "done",
  "location": "Shri Ved Katha Bhavan, Shri Durgiana Tirth, Amritsar",
  "time": "",
  "images": []
 },
 {
  "id": 142,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "description": "",
  "dates": "21 November 2025 - 27 November 2025",
  "status": "done",
  "location": "Marudhar Mathur Samaj in Mansarovar, Jaipur",
  "time": "",
  "images": []
 },
 {
  "id": 141,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "<p><strong>Shrimad Bhagwat Katha</strong></p>",
  "description": "",
  "dates": "03 November 2025 - 09 November 2025",
  "status": "done",
  "location": "Kohra, Dr. Sainthal, Tehsil Jogindar Nagar, District - Mandi, Himachal Pradesh",
  "time": "",
  "images": []
 },
 {
  "id": 140,
  "categoryId": 5,
  "name": "Shri Radha Madhav Vivah Mahotsav",
  "shortDescription": "",
  "description": "<p><strong>&nbsp;Shri Radha Madhav Vivah Mahotsav</strong></p>",
  "dates": "02 November 2025 - 02 November 2025",
  "status": "done",
  "location": "Shri Gaur Kripa Dham, Shri Banke Bihari Road, Near Atalla Chungi, Behind Agarwal Satsang Bhawan, Shridham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 139,
  "categoryId": 5,
  "name": "Ekadashi Mahima Katha",
  "shortDescription": "",
  "description": "<p>&nbsp;Ekadashi Mahima Katha</p>",
  "dates": "02 November 2025 - 02 November 2025",
  "status": "done",
  "location": "Shri Gaur Kripa Dham, Shri Banke Bihari Road, Near Atalla Chungi, Behind Agarwal Satsang Bhawan, Shridham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 138,
  "categoryId": 5,
  "name": "Shri Tulsi Shaligram Vivah Mahotsav",
  "shortDescription": "<p><strong>Shri Tulsi Shaligram Vivah Mahotsav</strong></p>",
  "description": "",
  "dates": "01 November 2025 - 01 November 2025",
  "status": "done",
  "location": "Shri Gaur Kripa Dham, Shri Banke Bihari Road, Near Atalla Chungi, Behind Agarwal Satsang Bhawan, Shridham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 137,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "",
  "description": "",
  "dates": "25 October 2025 - 31 October 2025",
  "status": "done",
  "location": "Shri Gopal Giri Ji Ashram, near Kardhar BabJi Sthan, Village Bada Bhanuja, Nathdwara, Rajasthan",
  "time": "",
  "images": []
 },
 {
  "id": 136,
  "categoryId": 5,
  "name": "Vinay Patrika",
  "shortDescription": "",
  "description": "",
  "dates": "24 October 2025 - 24 October 2025",
  "status": "done",
  "location": "",
  "time": "",
  "images": []
 },
 {
  "id": 135,
  "categoryId": 5,
  "name": "Shri Radha Madhav Vivah Mahotsav",
  "shortDescription": "",
  "description": "",
  "dates": "23 October 2025 - 23 October 2025",
  "status": "done",
  "location": "Volga Place , Ghaziabad",
  "time": "",
  "images": []
 },
 {
  "id": 134,
  "categoryId": 5,
  "name": "Sanatan Dharam Ke 16 Sansker",
  "shortDescription": "",
  "description": "",
  "dates": "20 October 2025 - 20 October 2025",
  "status": "done",
  "location": "Agra",
  "time": "",
  "images": []
 },
 {
  "id": 133,
  "categoryId": 4,
  "name": "Shri Bhaktmal Katha",
  "shortDescription": "",
  "description": "",
  "dates": "12 October 2025 - 18 October 2025",
  "status": "done",
  "location": "Charak Shiv Bhawan, Lane No. 7 (upper side), Greater Kailash, Jammu",
  "time": "",
  "images": []
 },
 {
  "id": 132,
  "categoryId": 8,
  "name": "Shri Gaur Katha",
  "shortDescription": "",
  "description": "",
  "dates": "09 October 2025 - 14 October 2025",
  "status": "done",
  "location": "Kolkata",
  "time": "",
  "images": []
 },
 {
  "id": 131,
  "categoryId": 5,
  "name": "Shri Maharaas ( Sharad ) Purnima 2025",
  "shortDescription": "",
  "description": "",
  "dates": "07 October 2025 - 07 October 2025",
  "status": "done",
  "location": "Shri Radha Kund",
  "time": "",
  "images": []
 },
 {
  "id": 130,
  "categoryId": 5,
  "name": "Shri Radha Madhav Vivah Mahotsav",
  "shortDescription": "",
  "description": "",
  "dates": "07 October 2025 - 07 October 2025",
  "status": "done",
  "location": "Ladli Ju Mandir , Barsana",
  "time": "",
  "images": []
 },
 {
  "id": 129,
  "categoryId": 8,
  "name": "Shri Radha Rani Ji Ki Katha",
  "shortDescription": "<blockquote><br></blockquote>",
  "description": "",
  "dates": "04 October 2025 - 07 October 2025",
  "status": "done",
  "location": "Maharaja Agrasen Bhavan, Loha Mandi, Agra",
  "time": "",
  "images": []
 },
 {
  "id": 128,
  "categoryId": 5,
  "name": "Maharaja Agrasen Ji Ka Charitra",
  "shortDescription": "",
  "description": "",
  "dates": "03 October 2025 - 03 October 2025",
  "status": "done",
  "location": "Maharaja Agrasen Bhavan, Loha Mandi, Agra",
  "time": "",
  "images": []
 },
 {
  "id": 127,
  "categoryId": 5,
  "name": "Dussehra Mahotsav 2025",
  "shortDescription": "",
  "description": "",
  "dates": "02 October 2025 - 02 October 2025",
  "status": "done",
  "location": "Maharaja Agrasen Bhavan, Loha Mandi, Agra",
  "time": "",
  "images": []
 },
 {
  "id": 126,
  "categoryId": 5,
  "name": "Shri Durga Mahima Katha",
  "shortDescription": "",
  "description": "",
  "dates": "01 October 2025 - 01 October 2025",
  "status": "done",
  "location": "Shri Dham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 125,
  "categoryId": 8,
  "name": "Shri Gaurang Katha",
  "shortDescription": "",
  "description": "",
  "dates": "20 September 2025 - 30 September 2025",
  "status": "done",
  "location": "Shri Govind Dev Ji Mandir, City Palace, Jalebi chauk, (Jaipur)",
  "time": "",
  "images": []
 },
 {
  "id": 124,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "15 September 2025 - 20 September 2025",
  "status": "done",
  "location": "Utsav Maheshwari Bhawan, Vidyadhar Nagar, Jaipur",
  "time": "",
  "images": []
 },
 {
  "id": 123,
  "categoryId": 4,
  "name": "shree bhaktmal katha",
  "shortDescription": "",
  "description": "",
  "dates": "18 August 2025 - 20 August 2025",
  "status": "done",
  "location": "Shri Neel Madhav Dham , Parikrama Dham , Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 122,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "",
  "description": "",
  "dates": "30 July 2025 - 05 August 2025",
  "status": "done",
  "location": "Pushpanjali Baikunth, Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 121,
  "categoryId": 5,
  "name": "ठाकुर जी स्थापना महोत्सव",
  "shortDescription": "<p><strong>ठाकुर जी स्थापना महोत्सव</strong></p>",
  "description": "",
  "dates": "18 June 2025 - 18 June 2025",
  "status": "done",
  "location": "मकान संख्या 72, सादिक नगर, सिहानी मेरठ रोड, गाजियाबाद (RK Classic Public School के सामने, ईदगाह और टॉवर के पास )",
  "time": "",
  "images": []
 },
 {
  "id": 119,
  "categoryId": 5,
  "name": "श्री राधा माधव विवाह महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "23 October 2025 - 23 October 2025",
  "status": "done",
  "location": "गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 118,
  "categoryId": 5,
  "name": "श्री राधा छठी महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "14 September 2025 - 14 September 2025",
  "status": "done",
  "location": "वोल्गा पैलेस, गाज़ियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 117,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "08 September 2025 - 14 September 2025",
  "status": "done",
  "location": "Keshav Puram, Tri Nagar, New Delhi",
  "time": "",
  "images": []
 },
 {
  "id": 116,
  "categoryId": 4,
  "name": "श्री भक्तमाल कथा",
  "shortDescription": "",
  "description": "",
  "dates": "02 September 2025 - 06 September 2025",
  "status": "done",
  "location": "नकोदर जालंधर, पंजाब",
  "time": "",
  "images": []
 },
 {
  "id": 115,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "26 August 2025 - 01 September 2025",
  "status": "done",
  "location": "पुरषोत्तम वाटिका, जगन्नाथ पुरी, ओडिशा",
  "time": "",
  "images": []
 },
 {
  "id": 114,
  "categoryId": 5,
  "name": "श्री कृष्ण छठी",
  "shortDescription": "",
  "description": "",
  "dates": "24 August 2025 - 24 August 2025",
  "status": "done",
  "location": "गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 113,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "10 August 2025 - 16 August 2025",
  "status": "done",
  "location": "बाबा बाल जी महाराज आश्रम, ऊना, हिमाचल प्रदेश",
  "time": "",
  "images": []
 },
 {
  "id": 112,
  "categoryId": 5,
  "name": "सावन हरियाली तीज (झूला महोत्सव )",
  "shortDescription": "",
  "description": "",
  "dates": "27 July 2025 - 27 July 2025",
  "status": "done",
  "location": "श्री गौर कृपा धाम, वृन्दावन",
  "time": "",
  "images": []
 },
 {
  "id": 111,
  "categoryId": 1,
  "name": "श्री राम कथा (लंका कांड)",
  "shortDescription": "",
  "description": "",
  "dates": "21 July 2025 - 26 July 2025",
  "status": "done",
  "location": "दंडी स्वामी मंदिर, लुधियाना",
  "time": "",
  "images": []
 },
 {
  "id": 110,
  "categoryId": 4,
  "name": "श्री भक्तमाल कथा",
  "shortDescription": "",
  "description": "",
  "dates": "14 July 2025 - 19 July 2025",
  "status": "done",
  "location": "श्री केदारनाथ धाम (उत्तराखंड)",
  "time": "",
  "images": []
 },
 {
  "id": 108,
  "categoryId": 5,
  "name": "गृह प्रवेश महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "11 July 2025 - 11 July 2025",
  "status": "done",
  "location": "गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 107,
  "categoryId": 5,
  "name": "श्री गुरु पूर्णिमा महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "10 July 2025 - 10 July 2025",
  "status": "done",
  "location": "अग्रसेन भवन, लोहियानगर, गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 106,
  "categoryId": 5,
  "name": "श्री गुरु पूर्णिमा महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "09 July 2025 - 09 July 2025",
  "status": "done",
  "location": "श्री गौर कृपा धाम वृन्दावन",
  "time": "",
  "images": []
 },
 {
  "id": 105,
  "categoryId": 31,
  "name": "श्री शिव परिवार कथा एवं राधा-माधव विवाह महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "06 July 2025 - 08 July 2025",
  "status": "done",
  "location": "माहेश्वरी भवन, सूरत",
  "time": "",
  "images": []
 },
 {
  "id": 104,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "29 June 2025 - 05 July 2025",
  "status": "done",
  "location": "मौहाली, चंडीगढ़, पंजाब",
  "time": "",
  "images": []
 },
 {
  "id": 103,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "22 June 2025 - 28 June 2025",
  "status": "done",
  "location": "ऊटी, तमिलनाडु",
  "time": "",
  "images": []
 },
 {
  "id": 102,
  "categoryId": 4,
  "name": "श्री भक्तमाल कथा",
  "shortDescription": "",
  "description": "",
  "dates": "20 June 2025 - 21 June 2025",
  "status": "done",
  "location": "JVH hotel, Bangalaore",
  "time": "",
  "images": []
 },
 {
  "id": 101,
  "categoryId": 5,
  "name": "नौका विहार महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "17 June 2025 - 17 June 2025",
  "status": "done",
  "location": "अग्रसैन वाटिका, लौहा मंडी गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 100,
  "categoryId": 5,
  "name": "वन विहार महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "16 June 2025 - 16 June 2025",
  "status": "done",
  "location": "पटेल नगर, गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 99,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha (श्रीमद भागवत कथा)",
  "shortDescription": "<p><span style=\"background-color: rgba(0, 0, 0, 0.05); color: rgb(19, 19, 19);\">Shrimad Bhagwat Katha (श्रीमद भागवत कथा)</span></p>",
  "description": "",
  "dates": "09 June 2025 - 15 June 2025",
  "status": "done",
  "location": "Shri Gaur Krupa Dham, Shri Banke Bihari Road, Near Attalla Chungi, Behind Aggarwal Satsang, Shridham Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 98,
  "categoryId": 5,
  "name": "चुनरी महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "09 June 2025 - 09 June 2025",
  "status": "done",
  "location": "रास मंडल वृन्दावन",
  "time": "",
  "images": []
 },
 {
  "id": 97,
  "categoryId": 5,
  "name": "जलविहार महोत्सव",
  "shortDescription": "",
  "description": "",
  "dates": "07 June 2025 - 07 June 2025",
  "status": "done",
  "location": "शगुन पैलेस, मुज़्ज़फरनगर",
  "time": "",
  "images": []
 },
 {
  "id": 96,
  "categoryId": 8,
  "name": "श्री गौर कथा",
  "shortDescription": "<p>श्री गौर कथा</p>",
  "description": "",
  "dates": "30 May 2025 - 31 May 2025",
  "status": "done",
  "location": "मेदिनीपुर पश्चिम बंगाल",
  "time": "",
  "images": []
 },
 {
  "id": 95,
  "categoryId": 4,
  "name": "Shri Bhaktmaal Katha",
  "shortDescription": "<p>Shri Bhaktmaal Katha<span style=\"background-color: rgba(255, 255, 255, 0.1); color: rgb(255, 255, 255);\">ri Bhaktmaal Katha</span></p>",
  "description": "",
  "dates": "27 May 2025 - 29 May 2025",
  "status": "done",
  "location": "Shri Neel Madhav Dham (Baba Balji Ashram), Parikrama Marg Vrindavan",
  "time": "",
  "images": []
 },
 {
  "id": 94,
  "categoryId": 5,
  "name": "Nagar Kirtan(नगर कीर्तन)| गाज़ियाबाद ~~ Shri Gaurdas Ji Maharaj",
  "shortDescription": "<p><strong style=\"background-color: transparent;\">Nagar Kirtan(नगर कीर्तन)| गाज़ियाबाद ~~ Shri Gaurdas Ji Maharaj</strong></p>",
  "description": "",
  "dates": "26 May 2025 - 26 May 2025",
  "status": "done",
  "location": "गाज़ियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 93,
  "categoryId": 5,
  "name": "नवीन गृह प्रवेश महोत्सव 🏠~~ सेवा नगर , गाज़ियाबाद ~~ परम पूज्य श्री गौरदास जी महाराज",
  "shortDescription": "<p><strong>नवीन गृह प्रवेश महोत्सव 🏠~~ सेवा नगर , गाज़ियाबाद ~~ परम पूज्य श्री गौरदास जी महाराज</strong></p>",
  "description": "",
  "dates": "25 May 2025 - 25 May 2025",
  "status": "done",
  "location": "Shewa Nagar, Ghaziabad",
  "time": "",
  "images": []
 },
 {
  "id": 92,
  "categoryId": 5,
  "name": "श्री फूल कुञ्ज महोत्सव | Shri Phool Kunj Mahotsav | Pujya Shri Gaurdas Ji Maharaj",
  "shortDescription": "<p><strong style=\"background-color: transparent;\">श्री फूल कुञ्ज महोत्सव | Shri Phool Kunj Mahotsav | Pujya Shri Gaurdas Ji Maharaj&nbsp;</strong></p>",
  "description": "",
  "dates": "24 May 2025 - 24 May 2025",
  "status": "done",
  "location": "Shree Hanuman Mandir G.T.Road Ghantaghar,Ghaziabad",
  "time": "",
  "images": []
 },
 {
  "id": 91,
  "categoryId": 5,
  "name": "स्वामी श्री हरिदास जी चरित्र | Swami Shri Haridas JI Charitra | Pujya Shri Gaurdas Ji Maharaj",
  "shortDescription": "<p><strong>स्वामी श्री हरिदास जी चरित्र | Swami Shri Haridas JI Charitra | Pujya Shri Gaurdas Ji Maharaj</strong></p>",
  "description": "",
  "dates": "23 May 2025 - 23 May 2025",
  "status": "done",
  "location": "Kanpur",
  "time": "",
  "images": []
 },
 {
  "id": 90,
  "categoryId": 8,
  "name": "Shree Radha Katha",
  "shortDescription": "",
  "description": "",
  "dates": "17 May 2025 - 22 May 2025",
  "status": "done",
  "location": "Shri Jwala Devi Dharmarth Bhavan, Hotel Landmark ke peeche, Doodh Bangla, Kanpur",
  "time": "",
  "images": []
 },
 {
  "id": 89,
  "categoryId": 5,
  "name": "Vaishnav Sadhana Evam Naam Prachaar Mahima",
  "shortDescription": "",
  "description": "",
  "dates": "02 May 2025 - 02 May 2025",
  "status": "done",
  "location": "Sultanpuri, Delhi",
  "time": "",
  "images": []
 },
 {
  "id": 88,
  "categoryId": 2,
  "name": "Shrimad Bhagwat Katha",
  "shortDescription": "",
  "description": "",
  "dates": "25 April 2025 - 01 May 2025",
  "status": "done",
  "location": "Shri Gaur Krupa Dham, Shri Banke Bihari Road, Near Attalla Chungi, Behind Agarwal Satsang Bhavan, Shri Dham Vrindavan",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--21b407a54dbf5a3a11f378e8bfc2199b699fea5b/WhatsApp%20Image%202025-04-24%20at%207.56.03%20PM.jpeg"
  ]
 },
 {
  "id": 87,
  "categoryId": 5,
  "name": "श्रीमद् वल्लभाचार्य चरित्र | Shrimad Vallabhacharya Charitra",
  "shortDescription": "",
  "description": "",
  "dates": "24 April 2025 - 24 April 2025",
  "status": "done",
  "location": "",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBZdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c531ee566ea8caeb2a33b968e74fc43cd307e190/WhatsApp%20Image%202025-04-24%20at%201.39.19%20PM.jpeg"
  ]
 },
 {
  "id": 86,
  "categoryId": 8,
  "name": "Shri Gaurang Leela Chintan",
  "shortDescription": "",
  "description": "",
  "dates": "15 April 2025 - 23 April 2025",
  "status": "done",
  "location": "Geeta Bhavan No. 3, Swarg Ashram, Rishikesh (Uttarakhand)",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBZZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e965f5c6b5f569b820134a7f2239f0615044ac3d/WhatsApp%20Image%202025-04-14%20at%202.07.40%20PM.jpeg"
  ]
 },
 {
  "id": 85,
  "categoryId": 5,
  "name": "The Appearance Festival of Shrimad Radharaman Charan Das Dev (Bade Baba Ji Maharaj )",
  "shortDescription": "",
  "description": "",
  "dates": "14 April 2025 - 14 April 2025",
  "status": "done",
  "location": "A.K.Bhandari\r\nTarun Vihar Society Sector 13, Plot No.3 , Flat No.39 , Rohini, Delhi 110085",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBZUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--045f29e620f188b413831b735cdb76a211b8126c/WhatsApp%20Image%202025-04-12%20at%202.06.41%20PM.jpeg"
  ]
 },
 {
  "id": 84,
  "categoryId": 5,
  "name": "Shri Radha Madhav Vivah Mahotsav(Byahula Utsav)",
  "shortDescription": "<p>Shri Radha Madhav Vivah Mahotsav(Byahula Utsav)</p>",
  "description": "",
  "dates": "13 April 2025 - 13 April 2025",
  "status": "done",
  "location": "Volga Palace, Ghaziabad",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBZQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fb3f939a778366e7dcce86050f73d261df507519/WhatsApp%20Image%202025-04-12%20at%202.06.38%20PM.jpeg"
  ]
 },
 {
  "id": 83,
  "categoryId": 5,
  "name": "Shri Sunderkand Path",
  "shortDescription": "",
  "description": "",
  "dates": "12 April 2025 - 12 April 2025",
  "status": "done",
  "location": "Shri Nilanchal Dham, B-77, Patel Nagar-2, Near Somvar Bazaar Road, Ghaziabad",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBYdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--916a1e70387affc4ff16f62eef0568bcf1f2ce38/WhatsApp%20Image%202025-04-12%20at%207.21.10%20AM.jpeg"
  ]
 },
 {
  "id": 82,
  "categoryId": 5,
  "name": "Satsang & Sankirtan(सत्संग एवं संकीर्तन)",
  "shortDescription": "<p><strong style=\"background-color: transparent;\">Satsang &amp; Sankirtan(सत्संग एवं संकीर्तन)</strong></p>",
  "description": "",
  "dates": "11 April 2025 - 11 April 2025",
  "status": "done",
  "location": "Ghaziabad",
  "time": "",
  "images": []
 },
 {
  "id": 81,
  "categoryId": 8,
  "name": "Kokil Sai Ji Charitra",
  "shortDescription": "<p><strong>Kokil Sai Ji Charitra&nbsp;</strong></p>",
  "description": "",
  "dates": "09 April 2025 - 10 April 2025",
  "status": "done",
  "location": "Sri Sukh Niwas Satsang Bhavan , Vrindavan",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBYZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--79e82318d7a1d8820e5e0170ef134bc05ea194ff/WhatsApp%20Image%202025-04-08%20at%208.49.29%20PM.jpeg"
  ]
 },
 {
  "id": 80,
  "categoryId": 5,
  "name": "Shri Radha Madhav Vivah Mahotsav (Kamda Ekadashi )",
  "shortDescription": "<p><strong>Shri Radha Madhav Vivah Mahotsav (Kamda Ekadashi )</strong></p>",
  "description": "",
  "dates": "08 April 2025 - 08 April 2025",
  "status": "done",
  "location": "Ghaziabad",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBYUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--20ed4ccf447358e42805352cb928604ca8fcf058/WhatsApp%20Image%202025-04-08%20at%202.15.56%20PM.jpeg"
  ]
 },
 {
  "id": 79,
  "categoryId": 5,
  "name": "Shri Shabri Charitra(श्री शबरी चरित्र)",
  "shortDescription": "<p><strong>&nbsp;Shri Shabri Charitra(श्री शबरी चरित्र)&nbsp;</strong></p>",
  "description": "",
  "dates": "07 April 2025 - 07 April 2025",
  "status": "done",
  "location": "Mukerian, Punjab",
  "time": "",
  "images": []
 },
 {
  "id": 78,
  "categoryId": 4,
  "name": "Shri Bhaktmaal Katha",
  "shortDescription": "<p><strong style=\"background-color: transparent;\">&nbsp;Shri Bhaktmaal Katha&nbsp;</strong></p>",
  "description": "",
  "dates": "29 March 2025 - 02 April 2025",
  "status": "done",
  "location": "Bhiwani, Haryana",
  "time": "",
  "images": []
 },
 {
  "id": 77,
  "categoryId": 1,
  "name": "Shri Ram katha (Ayodha Kand )",
  "shortDescription": "<p><strong style=\"background-color: transparent;\">Shri Ram katha (Ayodha Kand )&nbsp;</strong></p>",
  "description": "",
  "dates": "13 February 2025 - 19 February 2025",
  "status": "done",
  "location": "Chitrakoot Dham",
  "time": "",
  "images": []
 },
 {
  "id": 76,
  "categoryId": 4,
  "name": "Shri Bhaktmaal Katha",
  "shortDescription": "<p><strong>Shri Bhaktmaal Katha</strong></p>",
  "description": "",
  "dates": "01 February 2025 - 08 February 2025",
  "status": "done",
  "location": "Agrasen Bhawan, Hisar, Haryana",
  "time": "",
  "images": []
 },
 {
  "id": 74,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )",
  "shortDescription": "<p>श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )</p>",
  "description": "",
  "dates": "01 June 2025 - 07 June 2025",
  "status": "done",
  "location": "हरिद्वार",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--db25d993998abdcc13677636121e3afc3c44406c/WhatsApp%20Image%202025-05-22%20at%209.08.42%20PM.jpeg"
  ]
 },
 {
  "id": 73,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )",
  "shortDescription": "<p>श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )</p>",
  "description": "",
  "dates": "10 May 2025 - 16 May 2025",
  "status": "done",
  "location": "भोपाल",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6cfb57345fd547ce55b7703c8ea688852e32b091/WhatsApp%20Image%202025-05-09%20at%204.38.30%20PM.jpeg"
  ]
 },
 {
  "id": 72,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )",
  "shortDescription": "<p>श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )</p>",
  "description": "",
  "dates": "03 May 2025 - 09 May 2025",
  "status": "done",
  "location": "मुंबई",
  "time": "",
  "images": []
 },
 {
  "id": 71,
  "categoryId": 8,
  "name": "Shri Namdev Ji Charitra",
  "shortDescription": "<p><strong>Shri Namdev Ji Charitra</strong></p>",
  "description": "",
  "dates": "03 April 2025 - 07 April 2025",
  "status": "done",
  "location": "देव जी महाराज शक्ति आश्रम, मुकेरिया, जिला होशियारपुर,",
  "time": "",
  "images": []
 },
 {
  "id": 70,
  "categoryId": 8,
  "name": "श्री कृष्ण कर्णामृत ( Shri Krishna Karnamrit )",
  "shortDescription": "<p>श्री कृष्ण कर्णामृत ( Shri Krishna Karnamrit )</p>",
  "description": "",
  "dates": "24 March 2025 - 28 March 2025",
  "status": "done",
  "location": "हरदोई",
  "time": "",
  "images": []
 },
 {
  "id": 69,
  "categoryId": 31,
  "name": "श्री शिव महापुराण ( Shri Shiv Mahapuran )",
  "shortDescription": "<p>श्री शिव महापुराण ( Shri Shiv Mahapuran )</p>",
  "description": "",
  "dates": "16 March 2025 - 23 March 2025",
  "status": "done",
  "location": "लुधियाना",
  "time": "",
  "images": []
 },
 {
  "id": 68,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )",
  "shortDescription": "<p>श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )</p>",
  "description": "",
  "dates": "03 March 2025 - 09 March 2025",
  "status": "done",
  "location": "",
  "time": "",
  "images": []
 },
 {
  "id": 67,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )",
  "shortDescription": "<p>श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )</p>",
  "description": "",
  "dates": "22 February 2025 - 28 February 2025",
  "status": "done",
  "location": "श्री गौरकृपा धाम, श्री धाम वृन्दावन",
  "time": "",
  "images": []
 },
 {
  "id": 65,
  "categoryId": 4,
  "name": "दो दिवसीय श्री नित्यानंद महिमा गान ( do divaseey shree nityaanand mahima gaan )",
  "shortDescription": "<p>दो दिवसीय श्री नित्यानंद महिमा गान ( do divaseey shree nityaanand mahima gaan )</p>",
  "description": "",
  "dates": "11 February 2025 - 12 February 2025",
  "status": "done",
  "location": "शृंगार वट, परिक्रमा मार्ग, वृन्दावन",
  "time": "",
  "images": []
 },
 {
  "id": 64,
  "categoryId": 5,
  "name": "श्री नित्यांनद त्ररोदशी  ( Shri Nityananda Trayodashi)",
  "shortDescription": "<p>श्री नित्यांनद त्ररोदशी ( Shri Nityananda <strong style=\"background-color: transparent;\">Trayodashi</strong>)</p>",
  "description": "",
  "dates": "10 February 2025 - 10 February 2025",
  "status": "done",
  "location": "श्री गौर कृपा धाम, वृन्दावन",
  "time": "",
  "images": []
 },
 {
  "id": 62,
  "categoryId": 5,
  "name": "श्री राधा माधव विवाह महोत्सव ( shree raadha maadhav vivaah mahotsav )",
  "shortDescription": "<p>श्री राधा माधव विवाह महोत्सव ( shree raadha maadhav vivaah mahotsav )</p>",
  "description": "",
  "dates": "31 January 2025 - 31 January 2025",
  "status": "done",
  "location": "श्री नाथ बैंकेट, पांडव नगर, गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 61,
  "categoryId": 5,
  "name": "सद‌गुरुदेव तिरोभाव महोत्सव ( Sadgurudev Tirobhav Mahotsav )",
  "shortDescription": "<p>सद‌गुरुदेव तिरोभाव महोत्सव ( Sadgurudev Tirobhav Mahotsav )</p>",
  "description": "",
  "dates": "30 January 2025 - 30 January 2025",
  "status": "done",
  "location": "श्री हनुमान मंदिर, घंटाघर, गाजियाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 60,
  "categoryId": 4,
  "name": "श्री नानीबाई रो मायरो ( Shri Nanibai Ro Mairo )",
  "shortDescription": "<p>श्री नानीबाई रो मायरो ( Shri Nanibai Ro Mairo )</p>",
  "description": "",
  "dates": "24 January 2025 - 28 January 2025",
  "status": "done",
  "location": "आनंद आश्रम, रामपुर बाग, बरेली (Anand Ashram, Rampur Bagh, Bareilly )",
  "time": "",
  "images": []
 },
 {
  "id": 59,
  "categoryId": 2,
  "name": "श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )",
  "shortDescription": "<p>श्रीमद् भागवत कथा ( Shrimad Bhagwat Katha )</p>",
  "description": "",
  "dates": "17 January 2025 - 23 January 2025",
  "status": "done",
  "location": "जनकपुरी, दिल्ली",
  "time": "",
  "images": []
 },
 {
  "id": 58,
  "categoryId": 4,
  "name": "श्री गौर कथा (नीलाचल लीला) Sri Gaur Katha (Neelachal Leela)",
  "shortDescription": "<p>श्री गौर कथा (नीलाचल लीला) Sri Gaur Katha (Neelachal Leela)</p>",
  "description": "",
  "dates": "10 January 2025 - 16 January 2025",
  "status": "done",
  "location": "Saltlake, Kolkata ( सॉल्टलेक, कोलकाता )",
  "time": "",
  "images": []
 },
 {
  "id": 51,
  "categoryId": 4,
  "name": "Srila Jiva Goswami Ji Charitra श्रील जीव गोस्वामी जी चरित्र",
  "shortDescription": "",
  "description": "",
  "dates": "30 September 2024 - 02 October 2024",
  "status": "done",
  "location": "Laxminarayan Mandir, A-3 Block, Janakpuri, New Delhi 110058",
  "time": "",
  "images": []
 },
 {
  "id": 50,
  "categoryId": 5,
  "name": "एक दिवसीय सत्संग एंम संंकीर्तन (ek divaseey satsang emm sankeertan)",
  "shortDescription": "<p><span>एक दिवसीय सत्संग एंम संंकीर्तन</span></p>",
  "description": "",
  "dates": "11 October 2024 - 11 October 2024",
  "status": "done",
  "location": "तरूम विहार सोसायटी,सेक्टर-13, प्लॉट नंबर-3, फ्लैट नंबर-39,रोहिणी दिल्ली",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBSQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3803a639ac116675407d9cb3a78ab52676e6ed1e/WhatsApp%20Image%202024-10-10%20at%208.24.17%20PM.jpeg"
  ]
 },
 {
  "id": 49,
  "categoryId": 5,
  "name": "एक दिवसीय सत्संग एंम संंकीर्तन ek divaseey satsang emm sankeertan",
  "shortDescription": "<p>एक दिवसीय सत्संग एंम संंकीर्तन</p>",
  "description": "",
  "dates": "13 October 2024 - 13 October 2024",
  "status": "done",
  "location": "श्री पीपलेश्वर महादेव मन्दिर ए ब्लॉक हिन्द विहार गली न0- 4, प्रेम नगर 3,शुक्र बाजार रोड,रेलवे फाटक नांगलोई, दिल्ली",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBRUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a303ca17e478be181781c517c6d24ca1558bbbce/WhatsApp%20Image%202024-10-13%20at%207.11.38%20AM.jpeg"
  ]
 },
 {
  "id": 48,
  "categoryId": 5,
  "name": "Sharad (Maharaas) Purnima Mahotsav शरद  पूर्णिमा   Delhi",
  "shortDescription": "",
  "description": "",
  "dates": "17 October 2024 - 17 October 2024",
  "status": "done",
  "location": "Delhi",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBVZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8ff5778fbff510d98e1be6851ea6bfab55ac49a0/Ras%20Purnima.jpg"
  ]
 },
 {
  "id": 38,
  "categoryId": 2,
  "name": "Shreemadbhaagavat katha श्रीमद्भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "12 October 2024 - 18 October 2024",
  "status": "done",
  "location": "बालाजी मन्दिर,विवेक विहार दिल्ली",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--016d7ffd70e82860a974ad6188cea556f957fdeb/WhatsApp%20Image%202024-10-11%20at%208.15.30%20PM.jpeg"
  ]
 },
 {
  "id": 37,
  "categoryId": 1,
  "name": "Shree Ram katha श्री राम कथा",
  "shortDescription": "",
  "description": "",
  "dates": "03 October 2024 - 11 October 2024",
  "status": "done",
  "location": "जे.एम.डी.टेण्ट,जापानी पार्क,दिल्ली",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBSUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--39534d4589aa1cbdc61d06e663ef65c427596029/WhatsApp%20Image%202024-10-05%20at%204.02.16%20PM.jpeg"
  ]
 },
 {
  "id": 30,
  "categoryId": 2,
  "name": "( shreemadbhaagavat katha) श्रीमद्भागवत कथा",
  "shortDescription": "<p>पहला दिन सूरत गुजरात</p>",
  "description": "",
  "dates": "02 January 2025 - 08 January 2025",
  "status": "done",
  "location": "सूरत गुजरात\r\nhttps://maps.app.goo.gl/NSLqqN6DErhb33a88",
  "time": "",
  "images": []
 },
 {
  "id": 25,
  "categoryId": 2,
  "name": "Shreemad Bhaagavat Katha श्रीमद्भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "16 December 2024 - 22 December 2024",
  "status": "done",
  "location": "साहिबाबाद",
  "time": "",
  "images": []
 },
 {
  "id": 20,
  "categoryId": 8,
  "name": "Shri Gaurang Katha (श्री गौरांग कथा)",
  "shortDescription": "",
  "description": "",
  "dates": "13 September 2024 - 19 September 2024",
  "status": "done",
  "location": "Mayapur West bangal",
  "time": "",
  "images": []
 },
 {
  "id": 6,
  "categoryId": 5,
  "name": "Sant Ravidas ki Kahani| श्री रैदास चरित्र |",
  "shortDescription": "<p>This is short description</p>",
  "description": "<p><span>This is description</span></p>",
  "dates": "25 September 2024 - 27 September 2024",
  "status": "done",
  "location": "Indore",
  "time": "1:00 pm - 4:00 pm",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6218d6fef36e33491a125581bf10a08e10a59662/0U5A9698.JPG"
  ]
 },
 {
  "id": 3,
  "categoryId": 2,
  "name": "Shreemad Bhaagavat katha श्रीमद्भागवत कथा",
  "shortDescription": "",
  "description": "",
  "dates": "04 November 2024 - 10 November 2024",
  "status": "done",
  "location": "श्री धाम वृन्दावन",
  "time": "",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6140f1326bfe1d593dea7dd042d7c2069796c0d3/0U5A7261.JPG"
  ]
 },
 {
  "id": 2,
  "categoryId": 1,
  "name": "uttar Ramayan",
  "shortDescription": "<p>This is a short description of uttar Ramayan</p>",
  "description": "<p>This is a full description of uttar Ramayan</p>",
  "dates": "01 August 2024 - 10 August 2024",
  "status": "done",
  "location": "Kathmandu",
  "time": "1:00 pm - 4:00 pm",
  "images": []
 },
 {
  "id": 1,
  "categoryId": 1,
  "name": "Ramcharitra manas",
  "shortDescription": "<p>This is a short description of Ramcharitra manas</p>",
  "description": "<p>This is a full description of Ramcharitra manas</p>",
  "dates": "01 September 2024 - 10 September 2024",
  "status": "done",
  "location": "Delhi",
  "time": "1:00 pm - 4:00 pm",
  "images": [
   "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5779fca6b58975404d4f16a320f8166c46bcd765/_RUN9116.JPG"
  ]
 }
];

export const VIDEOS: Video[] = [
 {
  "id": 560,
  "kathaId": 187,
  "name": "नामाचार्य श्री हरिदास ठाकुर जी का पावन चरित्र | Live | Day - 3 | Narayana Vihar, Delhi",
  "yt": "RZ5z_fozJRU"
 },
 {
  "id": 559,
  "kathaId": 187,
  "name": "श्री वृंदावन रसिकाचार्य श्री हरिराम व्यास जी का पावन चरित्र | Live | Day - 2 | Narayana Vihar, Delhi",
  "yt": "6iY6uenzjGs"
 },
 {
  "id": 558,
  "kathaId": 187,
  "name": "मुस्लिम परिवार में जन्मे, महान रसिक संत श्री सनम साहब का पावन चरित्र || Live || Day - 1 || Delhi",
  "yt": "j9X9dM2P0ak"
 },
 {
  "id": 557,
  "kathaId": 186,
  "name": "भक्तराज श्री भीष्म पितामह जी का पावन चरित्र एवं स्तुति || Live || Day - 3 || Delhi",
  "yt": "R8QPxtx-IT4"
 },
 {
  "id": 556,
  "kathaId": 186,
  "name": "ब्रज के महान संत सिद्ध श्री नित्यानंद दास बाबा जी महाराज का पावन चरित्र || Live || Day - 02 || Delhi",
  "yt": "JfviBEGPgd0"
 },
 {
  "id": 555,
  "kathaId": 186,
  "name": "वात्सल्य रस की मूर्ति, श्री वृंदावन की सिद्ध संत श्री पिसी मां गोस्वामिनी जी का पावन चरित्र || Live",
  "yt": "renklZVBXKk"
 },
 {
  "id": 554,
  "kathaId": 185,
  "name": "Shri Radha Madhav Vivah Mahotsav || Live || Day - 2 || Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "ZGZvsr0NPoE"
 },
 {
  "id": 553,
  "kathaId": 185,
  "name": "Shri Radha Madhav Vivah Mahotsav (Shyam Sagai) | Live | Day -1 | Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "0JXJb0gxVjk"
 },
 {
  "id": 552,
  "kathaId": 184,
  "name": "श्री राधा माधव लीला महामहोत्सव (श्री श्यामानंद प्रभु जी का तिरोभाव महोत्सव ) || Live || Day - 7",
  "yt": "gOhzythCMsM"
 },
 {
  "id": 551,
  "kathaId": 184,
  "name": "ग्रीष्मकालीन श्री राधा माधव लीला महामहोत्सव (श्री जगन्नाथ स्नान यात्रा महोत्सव) || Live || Day - 6",
  "yt": "18f6e5nMAXk"
 },
 {
  "id": 550,
  "kathaId": 184,
  "name": "ग्रीष्मकालीन श्री राधा माधव लीला महामहोत्सव (नौका विहार )|| Live || Day - 5 || मुरादनगर",
  "yt": "xbBtAhMOw0o"
 },
 {
  "id": 549,
  "kathaId": 184,
  "name": "ग्रीष्मकालीन श्री राधा माधव लीला महामहोत्सव ( दंड महोत्सव ) || Live || Day - 4 || मुरादनगर",
  "yt": "c6ac_Wap_Ls"
 },
 {
  "id": 548,
  "kathaId": 184,
  "name": "ग्रीष्मकालीन श्री राधा माधव लीला महामहोत्सव ( वन विहार ) || Live || Day - 3 || मुरादनगर",
  "yt": "2l_N8bovgF8"
 },
 {
  "id": 547,
  "kathaId": 184,
  "name": "ग्रीष्मकालीन श्री राधा माधव लीला महामहोत्सव ( Nirjala Ekadashi ) || Live || Day - 2 || मुरादनगर",
  "yt": "3R6jl5Bbelk"
 },
 {
  "id": 546,
  "kathaId": 184,
  "name": "ग्रीष्मकालीन श्री राधा माधव लीला महामहोत्सव ( Ganga Dussehra ) || Live || Day - 1 || मुरादनगर",
  "yt": "CMOnIn8Hq1E"
 },
 {
  "id": 545,
  "kathaId": 183,
  "name": "श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा || Live || Day 7 || श्री गोविंद देव जी मंदिर ,जयपुर",
  "yt": "j0tdgwHbWho"
 },
 {
  "id": 544,
  "kathaId": 183,
  "name": "श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा || Live || Day 6 || श्री गोविंद देव जी मंदिर ,जयपुर",
  "yt": "C9WXcKXSa6g"
 },
 {
  "id": 543,
  "kathaId": 183,
  "name": "श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा || Live || Day 5 || श्री गोविंद देव जी मंदिर ,जयपुर",
  "yt": "4wQCUfw2PSQ"
 },
 {
  "id": 542,
  "kathaId": 183,
  "name": "श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा || Live || Day 4 || श्री गोविंद देव जी मंदिर ,जयपुर",
  "yt": "qAwCpz9k2UQ"
 },
 {
  "id": 541,
  "kathaId": 183,
  "name": "श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा || Live || Day 3 || श्री गोविंद देव जी मंदिर ,जयपुर",
  "yt": "mZwuIcSfXBY"
 },
 {
  "id": 540,
  "kathaId": 183,
  "name": "श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा || Live || Day 2 || श्री गोविंद देव जी मंदिर ,जयपुर",
  "yt": "hhOG_O21520"
 },
 {
  "id": 539,
  "kathaId": 183,
  "name": "श्रीधाम वृंदावन के प्राचीन सप्त देवालयों की कथा || Live || Day 1|| श्री गोविंद देव जी मंदिर ,जयपुर",
  "yt": "0plcJyI1FOw"
 },
 {
  "id": 538,
  "kathaId": 182,
  "name": "Shri Bhagwat Chintan || Live || Day - 7 || Himachal || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "Zy6RFYh9mEY"
 },
 {
  "id": 537,
  "kathaId": 182,
  "name": "Shri Bhagwat Chintan || Live || Day - 6 || Himachal || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "xrl4XTq4MbE"
 },
 {
  "id": 536,
  "kathaId": 182,
  "name": "Shri Bhagwat Chintan || Live || Day - 5 || Himachal || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "QRk53kN2OQU"
 },
 {
  "id": 535,
  "kathaId": 182,
  "name": "Shri Bhagwat Chintan || Live || Day - 4 || Himachal || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "bL7EMeyAWAk"
 },
 {
  "id": 534,
  "kathaId": 182,
  "name": "Shri Bhagwat Chintan || Live || Day - 03 || Himachal || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "4Iy4nDznlX8"
 },
 {
  "id": 533,
  "kathaId": 182,
  "name": "Shri Bhagwat Chintan || Live || Day - 02 || Himachal || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "58MUVodgbpg"
 },
 {
  "id": 532,
  "kathaId": 182,
  "name": "Shri Bhagwat Chintan || Live || Day - 1 || Himachal || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "mqylj654CS4"
 },
 {
  "id": 531,
  "kathaId": 181,
  "name": "श्री बद्री विशाल भागवत कथा || बद्रीनाथ || Live || Day - 7 || परम पूज्य श्री गौरदास जी महाराज",
  "yt": "o4QndEfjV2U"
 },
 {
  "id": 530,
  "kathaId": 181,
  "name": "श्री बद्री विशाल भागवत कथा || बद्रीनाथ || Live || Day - 6 || परम पूज्य श्री गौरदास जी महाराज",
  "yt": "WfJ998ANre8"
 },
 {
  "id": 529,
  "kathaId": 181,
  "name": "श्री बद्री विशाल भागवत कथा || बद्रीनाथ || Live || Day - 5 || परम पूज्य श्री गौरदास जी महाराज",
  "yt": "fVtD3FD2tLw"
 },
 {
  "id": 528,
  "kathaId": 181,
  "name": "श्री बद्री विशाल भागवत कथा || बद्रीनाथ || Live || Day - 4 || परम पूज्य श्री गौरदास जी महाराज",
  "yt": "q9MmXKNE4lw"
 },
 {
  "id": 527,
  "kathaId": 181,
  "name": "श्री बद्री विशाल भागवत कथा || बद्रीनाथ || Live || Day - 3 || परम पूज्य श्री गौरदास जी महाराज",
  "yt": "SCSWs6wFBGE"
 },
 {
  "id": 526,
  "kathaId": 181,
  "name": "श्री बद्री विशाल भागवत कथा || बद्रीनाथ || Live || Day - 2 || परम पूज्य श्री गौरदास जी महाराज",
  "yt": "S3qzlg7gGJs"
 },
 {
  "id": 525,
  "kathaId": 181,
  "name": "श्री बद्री विशाल भागवत कथा || बद्रीनाथ || Live || Day - 1 || परम पूज्य श्री गौरदास जी महाराज",
  "yt": "wvp3Wz39pes"
 },
 {
  "id": 524,
  "kathaId": 180,
  "name": "श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा || Day - 7 || Live || दिल्ली || पूज्य श्री गौरदास जी",
  "yt": "Vg7VWRxLcbA"
 },
 {
  "id": 523,
  "kathaId": 180,
  "name": "श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा || Day - 6 || Live || दिल्ली || पूज्य श्री गौरदास जी",
  "yt": "Hq6mQ2glbQo"
 },
 {
  "id": 522,
  "kathaId": 180,
  "name": "श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा || Day -5 || Live || दिल्ली || पूज्य श्री गौरदास जी",
  "yt": "soGhf06yEfc"
 },
 {
  "id": 521,
  "kathaId": 180,
  "name": "श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा || Day -4 || Live || दिल्ली || पूज्य श्री गौरदास जी",
  "yt": "cksNex3Kw2A"
 },
 {
  "id": 520,
  "kathaId": 180,
  "name": "श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा || Day -3 || Live || दिल्ली || पूज्य श्री गौरदास जी",
  "yt": "qCw0Jc6vcMQ"
 },
 {
  "id": 519,
  "kathaId": 180,
  "name": "श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा || Day -2 || Live || दिल्ली || पूज्य श्री गौरदास जी",
  "yt": "b0eoTnJ6XAs"
 },
 {
  "id": 518,
  "kathaId": 180,
  "name": "श्री धाम वृंदावन के प्राचीन सात ठाकुर जी की कथा || Day -1 || Live || दिल्ली || पूज्य श्री गौरदास जी",
  "yt": "5Ty5WeY1Jc0"
 },
 {
  "id": 517,
  "kathaId": 179,
  "name": "श्री पुरुषोत्तम भागवत कथा || Live || Day - 7 || बद्रुका निवास, हैदराबाद || Shri Gaurdas Ji Maharaj",
  "yt": "MRVBQYdSrNs"
 },
 {
  "id": 516,
  "kathaId": 179,
  "name": "श्री पुरुषोत्तम भागवत कथा || Live || Day - 6 || बद्रुका निवास, हैदराबाद || Shri Gaurdas Ji Maharaj",
  "yt": "tfFazABXqc0"
 },
 {
  "id": 515,
  "kathaId": 179,
  "name": "श्री पुरुषोत्तम भागवत कथा || Live || Day - 5 || बद्रुका निवास, हैदराबाद || Shri Gaurdas Ji Maharaj",
  "yt": "MfSBsg9oheM"
 },
 {
  "id": 514,
  "kathaId": 179,
  "name": "श्री पुरुषोत्तम भागवत कथा || Live || Day - 4 || बद्रुका निवास, हैदराबाद || Shri Gaurdas Ji Maharaj",
  "yt": "Iju1oTPL2lE"
 },
 {
  "id": 513,
  "kathaId": 179,
  "name": "श्री पुरुषोत्तम भागवत कथा || Live || Day - 3 || बडुका निवास, हैदराबाद || Shri Gaurdas Ji Maharaj",
  "yt": "QXMGBNRGivc"
 },
 {
  "id": 512,
  "kathaId": 179,
  "name": "श्री पुरुषोत्तम भागवत कथा || Live || Day - 2 || बडुका निवास, हैदराबाद || Shri Gaurdas Ji Maharaj",
  "yt": "himtXVeO4Ow"
 },
 {
  "id": 511,
  "kathaId": 179,
  "name": "श्री पुरुषोत्तम भागवत कथा || Live || Day - 1|| बडुका निवास, हैदराबाद || Shri Gaurdas Ji Maharaj",
  "yt": "aZvYScLdd9Y"
 },
 {
  "id": 510,
  "kathaId": 177,
  "name": "Ashtayam Leela || Day 8 - झूलन लीला एवं शयन कुंज, शयन दर्शन || Live || श्री गौर कृपा धाम",
  "yt": "ihIzFoEMo7E"
 },
 {
  "id": 509,
  "kathaId": 177,
  "name": "Ashtayam Leela || Day 7 - महारास लीला || Live || श्री गौर कृपा धाम || Shri Gaurdas Ji Maharaj",
  "yt": "_3c3j-m-Q1U"
 },
 {
  "id": 508,
  "kathaId": 177,
  "name": "Ashtayam Leela || Day 6 - वन विहार, नौका विहार एवं श्री यमुना जलविहार || Live || श्री गौर कृपा धाम",
  "yt": "Et4DZZIQdUU"
 },
 {
  "id": 507,
  "kathaId": 177,
  "name": "Ashtayam Leela || Day 5 - गौचारण से लौटना, गोष्ठ मिलन एवं संध्या आरती || Live || श्री गौर कृपा धाम",
  "yt": "fRUVG4PcHfY"
 },
 {
  "id": 506,
  "kathaId": 177,
  "name": "Ashtayam Leela || Day 4 - कुसुम सरोवर एवं श्री राधा कुंड मिलन || Live || श्री गौर कृपा धाम",
  "yt": "voQUMMaX758"
 },
 {
  "id": 505,
  "kathaId": 177,
  "name": "Ashtayam Leela || Day 3 - गौचारण, सूर्य कुंड मिलन एवं राजभोग सेवा || Live || श्री गौर कृपा धाम",
  "yt": "4FMGhXyQQz4"
 },
 {
  "id": 504,
  "kathaId": 177,
  "name": "Ashtayam Leela || Day 2 - स्नान एवं श्रृंगार सेवा || Live || श्री गौर कृपा धाम || Shri Gaurdas Ji",
  "yt": "1ESUBiWQaQA"
 },
 {
  "id": 503,
  "kathaId": 177,
  "name": "Ashtayam Leela || Day 1 - मंगला सेवा || Live || श्री गौर कृपा धाम || Shri Gaurdas Ji Maharaj",
  "yt": "LzBpQiiP5e8"
 },
 {
  "id": 502,
  "kathaId": 176,
  "name": "Live || Phool Kunj Mahotsav 2026 | Agrasen Bhawan, Lohia Nagar, Ghaziabad | Shri Gaurdas Ji Maharaj",
  "yt": "kdW9uQ8f8_A"
 },
 {
  "id": 501,
  "kathaId": 175,
  "name": "Shrimad Bhagwat Katha || Live || Day - 7 || Rukmini Bhawan , Lucknow || Shri Gaurdas Ji Maharaj",
  "yt": "E_mwmy3YiKM"
 },
 {
  "id": 500,
  "kathaId": 175,
  "name": "Shrimad Bhagwat Katha || Live || Day - 6 || Rukmini Bhawan , Lucknow || Shri Gaurdas Ji Maharaj",
  "yt": "fD8Frm8D3_Y"
 },
 {
  "id": 499,
  "kathaId": 175,
  "name": "Shrimad Bhagwat Katha || Live || Day - 5 || Rukmini Bhawan , Lucknow || Shri Gaurdas Ji Maharaj",
  "yt": "9n2CCu_6bfg"
 },
 {
  "id": 498,
  "kathaId": 175,
  "name": "Shrimad Bhagwat Katha || Live || Day - 4 || Rukmini Bhawan , Lucknow || Shri Gaurdas Ji Maharaj",
  "yt": "JXqObaZS3WU"
 },
 {
  "id": 497,
  "kathaId": 175,
  "name": "Shrimad Bhagwat Katha || Live || Day - 3 || Lucknow || Shri Gaurdas Ji",
  "yt": "mTIelrWAGac"
 },
 {
  "id": 496,
  "kathaId": 175,
  "name": "Shrimad Bhagwat Katha (Madhavi Purnima) || Live || Day-2 || Lucknow || Shri Gaurdas Ji",
  "yt": "orWjhbRL0qU"
 },
 {
  "id": 495,
  "kathaId": 175,
  "name": "Shrimad Bhagwat Katha (Shri Narsingh Chaturdashi) || Live || Day-1 || Lucknow || Shri Gaurdas Ji",
  "yt": "8R97jtGR9ho"
 },
 {
  "id": 494,
  "kathaId": 174,
  "name": "Shrila Roop Sanatan Goswami Ji Ka Charitra || Live || Day-4 || Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "xDH-_tEy8pY"
 },
 {
  "id": 493,
  "kathaId": 174,
  "name": "Shrila Roop Sanatan Goswami Ji Ka Charitra || Live || Day-3 || Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "Vb5HXk-DyFE"
 },
 {
  "id": 492,
  "kathaId": 174,
  "name": "Shrila Roop Sanatan Goswami Ji Ka Charitra || Live || Day-2 || Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "jywAGjLNoFg"
 },
 {
  "id": 491,
  "kathaId": 174,
  "name": "Shrila Roop Sanatan Goswami Ji Ka Charitra || Live || Day-1 || Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "ofkc6fn4hD0"
 },
 {
  "id": 490,
  "kathaId": 173,
  "name": "Akshaya Tritiya (Chadan Mahotsav 2026) || Shri Gaur Kripa Dham, Vrindavan || Shri Gaurdas ji",
  "yt": "QSgAcRhudU4"
 },
 {
  "id": 489,
  "kathaId": 172,
  "name": "Day-5 || Shri Meerabai Ji Ka Charitra || Shri Gaur Kripa Dham, Vrindavan | Shri Gaurdas Ji",
  "yt": "W6yIyaMzu_Q"
 },
 {
  "id": 488,
  "kathaId": 172,
  "name": "Day-4 || Shri Meerabai Ji Ka Charitra || Shri Gaur Kripa Dham, Vrindavan | Shri Gaurdas Ji",
  "yt": "6kd1JscBqBo"
 },
 {
  "id": 487,
  "kathaId": 172,
  "name": "Day-3 || Shri Meerabai Ji Ka Charitra || Shri Gaur Kripa Dham, Vrindavan | Shri Gaurdas Ji",
  "yt": "tWxoLP4xOGE"
 },
 {
  "id": 486,
  "kathaId": 172,
  "name": "Day-2 || Shri Meerabai Ji Ka Charitra || Shri Gaur Kripa Dham, Vrindavan | Shri Gaurdas Ji",
  "yt": "sxMIWSNawaM"
 },
 {
  "id": 485,
  "kathaId": 172,
  "name": "Day-1 || Bhaktimati Shri Meerabai Ji Ka Chartra and Shri Narasi Ji Ka Bhat || Vrindavan",
  "yt": "ylpxr8AIiSo"
 },
 {
  "id": 484,
  "kathaId": 171,
  "name": "Live || Shrimad Radharaman Charandas Dev (Shri Bade Baba Ji Maharaj) Avirbhav Mahotsav || Vrindavan",
  "yt": "g0FHpC3Vn70"
 },
 {
  "id": 483,
  "kathaId": 170,
  "name": "Satsang & Sankirtan || Live || Hasi || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "vzqWOpqKWQE"
 },
 {
  "id": 482,
  "kathaId": 169,
  "name": "Day-7 || Shrimad Bhagwat Katha || Tiltoria, Dhanbad, Jharkhand || Shri Gaurdas Ji Maharaj",
  "yt": "5ZZKpwJ2uiE"
 },
 {
  "id": 481,
  "kathaId": 169,
  "name": "Day-6 || Shrimad Bhagwat Katha || Tiltoria, Dhanbad, Jharkhand || Shri Gaurdas Ji Maharaj",
  "yt": "TqYdDdBOWLk"
 },
 {
  "id": 480,
  "kathaId": 169,
  "name": "Day-5 || Shrimad Bhagwat Katha || Tiltoria, Dhanbad, Jharkhand || Shri Gaurdas Ji Maharaj",
  "yt": "9oFndGyNJys"
 },
 {
  "id": 479,
  "kathaId": 169,
  "name": "Day-4 || Shrimad Bhagwat Katha || Tiltoria, Dhanbad, Jharkhand || Shri Gaurdas Ji Maharaj",
  "yt": "5jMJRyVjKvg"
 },
 {
  "id": 478,
  "kathaId": 169,
  "name": "Day-3 || Shrimad Bhagwat Katha || Tiltoria, Dhanbad, Jharkhand || Shri Gaurdas Ji Maharaj",
  "yt": "2fBjnhwkuBY"
 },
 {
  "id": 477,
  "kathaId": 169,
  "name": "Day-2 || Shrimad Bhagwat Katha || Tiltoria, Dhanbad, Jharkhand || Shri Gaurdas Ji Maharaj",
  "yt": "Bg0Kt35dsdE"
 },
 {
  "id": 476,
  "kathaId": 169,
  "name": "Day-1 || Shrimad Bhagwat Katha || Tiltoria, Dhanbad, Jharkhand || Shri Gaurdas Ji Maharaj",
  "yt": "INGzLLBoq18"
 },
 {
  "id": 475,
  "kathaId": 168,
  "name": "Griha Pravesh|| Rukmani Vihar, Basera Vaikunth, Hare Krishna Florens, Vrindavan",
  "yt": "LQl8SkM31pM"
 },
 {
  "id": 474,
  "kathaId": 168,
  "name": "Shri Thakurji Patotsav || Brij Eternity, Chhatikara Road, Vrindavan",
  "yt": "O30zsD8MUiQ"
 },
 {
  "id": 473,
  "kathaId": 167,
  "name": "Day-7 || Shri Nitai Gaurang Dev Ki Charcha || Singhara, District Sakti, ,Chhattisgarh",
  "yt": "MwdIdLlxzJM"
 },
 {
  "id": 472,
  "kathaId": 167,
  "name": "Day-6 || Shri Bhaktmaal Katha (श्री भरत चरित्र | Part-1) || Gram Singhra, Chhattisgarh",
  "yt": "8qrijKC6UqA"
 },
 {
  "id": 471,
  "kathaId": 167,
  "name": "Day-5 || Shri Bhaktmaal Katha (श्री हनुमान जयंती महोत्सव 2026) || Gram Singhra, Chhattisgarh",
  "yt": "ix6TmhOPgZQ"
 },
 {
  "id": 470,
  "kathaId": 167,
  "name": "Day -4 || Shri Bhaktmaal Katha || Gram Singhra, Chattisgarh || Shri Gaurdas Ji Mahraraj",
  "yt": "68OeKmT7WQA"
 },
 {
  "id": 469,
  "kathaId": 167,
  "name": "Day -3 || Shri Bhaktmaal Katha || Gram Singhra, Chattisgarh || Shri Gaurdas Ji Mahraraj",
  "yt": "RKmyg4vyfPM"
 },
 {
  "id": 468,
  "kathaId": 167,
  "name": "Day -2 || Live || Shri Bhaktmaal Katha || Gram Singhra, Chattisgarh || Shri Gaurdas Ji Mahraraj",
  "yt": "z5noLy5KI_s"
 },
 {
  "id": 467,
  "kathaId": 167,
  "name": "Day - 1|| Live || Shri Bhaktmaal Katha ||Gram Singhra, Chattisgarh || Shri Gaurdas Ji Mahraraj",
  "yt": "DaDXNV60pb4"
 },
 {
  "id": 466,
  "kathaId": 166,
  "name": "Shri Sundarkand Path || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "OOkqLow8AVA"
 },
 {
  "id": 465,
  "kathaId": 165,
  "name": "Day - 9 || Shri Ram Katha || Shri Mahavar Vaishya Dharamshala , Haridwar || Shri Gaurdas Ji",
  "yt": "C2-QtJxDRvU"
 },
 {
  "id": 464,
  "kathaId": 165,
  "name": "Day - 8 || Shri Ram Katha || Shri Mahavar Vaishya Dharamshala , Haridwar || Shri Gaurdas Ji",
  "yt": "zU8BcauERBs"
 },
 {
  "id": 463,
  "kathaId": 165,
  "name": "Day - 7 || Shri Ram Katha || Shri Mahavar Vaishya Dharamshala , Haridwar || Shri Gaurdas Ji",
  "yt": "2eCzUvKuNfM"
 },
 {
  "id": 462,
  "kathaId": 165,
  "name": "Day - 6 || Shri Ram Katha || Shri Mahavar Vaishya Dharamshala , Haridwar || Shri Gaurdas Ji",
  "yt": "s98va9FcfCA"
 },
 {
  "id": 461,
  "kathaId": 165,
  "name": "Day - 5 || Shri Ram Katha || Shri Mahavar Vaishya Dharamshala , Haridwar || Shri Gaurdas Ji",
  "yt": "95qEGRD9joA"
 },
 {
  "id": 460,
  "kathaId": 165,
  "name": "Day - 4 ||🙏Shri Ram Katha ( हिन्दू नववर्ष )🙏|| Haridwar || Shri Gaurdas Ji Maharaj",
  "yt": "tlfkP2a3Eps"
 },
 {
  "id": 459,
  "kathaId": 165,
  "name": "Day - 3 || Shri Ram Katha || Haridwar || Shri Gaurdas Ji Maharaj",
  "yt": "08pMQ-aIOi4"
 },
 {
  "id": 458,
  "kathaId": 165,
  "name": "Day - 2 ||🙏Shri Ram Katha ( हिन्दू नववर्ष )🙏|| Haridwar || Shri Gaurdas Ji Maharaj",
  "yt": "TcAProizfXs"
 },
 {
  "id": 457,
  "kathaId": 165,
  "name": "Day - 1 ||🙏Shri Ram Katha ( हिन्दू नववर्ष )🙏|| Haridwar || Shri Gaurdas Ji Maharaj",
  "yt": "Vkr5qHT_KCE"
 },
 {
  "id": 456,
  "kathaId": 164,
  "name": "Day - 7 || Shrimad Bhagwat Katha || Hindu Kanya Mahavidhyalay, Jind || Shri Gaurdas Ji",
  "yt": "fqgR0gt5tg0"
 },
 {
  "id": 455,
  "kathaId": 164,
  "name": "Day - 6 || Shrimad Bhagwat Katha || Hindu Kanya Mahavidhyalay, Jind || Shri Gaurdas Ji",
  "yt": "LmLE27bMTV0"
 },
 {
  "id": 454,
  "kathaId": 164,
  "name": "Day - 5 || Shrimad Bhagwat Katha || Hindu Kanya Mahavidhyalay, Jind || Shri Gaurdas Ji",
  "yt": "o57EDxOXsgE"
 },
 {
  "id": 453,
  "kathaId": 164,
  "name": "Day - 4 || Shrimad Bhagwat Katha || Hindu Kanya Mahavidhyalay, Jind || Shri Gaurdas Ji",
  "yt": "Q04tojYd1SU"
 },
 {
  "id": 452,
  "kathaId": 164,
  "name": "Day - 3 || Shrimad Bhagwat Katha || Hindu Kanya Mahavidhyalay, Jind || Shri Gaurdas Ji",
  "yt": "_UJ3P1lkmiM"
 },
 {
  "id": 451,
  "kathaId": 164,
  "name": "Day - 2 || Shrimad Bhagwat Katha || Hindu Kanya Mahavidhyalay, Jind || Shri Gaurdas Ji",
  "yt": "spH3_S1Vn8I"
 },
 {
  "id": 450,
  "kathaId": 164,
  "name": "Day - 1 || Shrimad Bhagwat Katha || Hindu Kanya Mahavidhyalay, Jind || Shri Gaurdas Ji",
  "yt": "yZdqO_AvfsE"
 },
 {
  "id": 449,
  "kathaId": 163,
  "name": "Day - 7 || Shri Ram Bhaktmal Katha || Sharada School Ground , Malharghar || Shri GaurdasJi",
  "yt": "Almm5RH3Hx4"
 },
 {
  "id": 448,
  "kathaId": 163,
  "name": "Day - 6 || Shri Ram Bhaktmal Katha || Sharada School Ground , Malharghar || Shri GaurdasJi",
  "yt": "J8oD0fYPxaw"
 },
 {
  "id": 447,
  "kathaId": 163,
  "name": "Day - 5 || Shri Ram Bhaktmal Katha || Sharada School Ground , Malharghar || Shri GaurdasJi",
  "yt": "DjZeJK6EOlk"
 },
 {
  "id": 446,
  "kathaId": 163,
  "name": "Day - 4 || Shri Ram Bhaktmal Katha || Sharada School Ground , Malharghar || Shri GaurdasJi",
  "yt": "iteM5uCEaSA"
 },
 {
  "id": 445,
  "kathaId": 163,
  "name": "Day - 3 || Shri Ram Bhaktmal Katha || Sharada School Ground , Malharghar || Shri GaurdasJi",
  "yt": "u0UznTxjEHk"
 },
 {
  "id": 444,
  "kathaId": 163,
  "name": "Day - 2 || Shri Ram Bhaktmal Katha || Sharada School Ground , Malharghar || Shri GaurdasJi",
  "yt": "Upq4VHnCgq8"
 },
 {
  "id": 443,
  "kathaId": 163,
  "name": "Day - 1 || Shri Ram Bhaktmal Katha || Sharada School Ground , Malharghar || Shri GaurdasJi",
  "yt": "f6f0Wu4PSN4"
 },
 {
  "id": 442,
  "kathaId": 162,
  "name": "26 वीं विशाल श्री निताई गौर डोल यात्रा || श्री हनुमान मन्दिर, घण्टाघर, गाजियाबाद",
  "yt": "LdkSfJxz_Bo"
 },
 {
  "id": 441,
  "kathaId": 161,
  "name": "श्री कृष्ण चैतन्य महाप्रभु बधाई गान उत्सव || गौर ग्रीन एवेन्यू, अभय खंड टू, इंदिरापुरम",
  "yt": "Dqs6xz8tqDs"
 },
 {
  "id": 440,
  "kathaId": 160,
  "name": "ग्रहण काल में श्री गंगा स्नान, मंत्र जप एवं श्री गौरांग महाप्रभु जी का अभिषेक एवं बधाई",
  "yt": "3tajuBywY0k"
 },
 {
  "id": 439,
  "kathaId": 159,
  "name": "Holi Mahotsav 2026 || Holi Chowk, Avantika 1st, Ghaziabad || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "HvIsZDp8nQE"
 },
 {
  "id": 438,
  "kathaId": 158,
  "name": "Day -7 || Shrimad Bhagwat Katha || Janakpuri, New Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "O3aWzshoUGQ"
 },
 {
  "id": 437,
  "kathaId": 158,
  "name": "Day -6 || Shrimad Bhagwat Katha || Janakpuri, New Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "zBw2gDQ7XJA"
 },
 {
  "id": 436,
  "kathaId": 158,
  "name": "Day -5 || Shrimad Bhagwat Katha || Janakpuri, New Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "JoGTkWMf6sA"
 },
 {
  "id": 435,
  "kathaId": 158,
  "name": "Day -4 || Shrimad Bhagwat Katha || Janakpuri, New Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "iLPVnvNK9Yc"
 },
 {
  "id": 434,
  "kathaId": 158,
  "name": "Day -3 || Shrimad Bhagwat Katha || Janakpuri, New Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "eSIqWJPSoxE"
 },
 {
  "id": 433,
  "kathaId": 158,
  "name": "Day -2 || Shrimad Bhagwat Katha || Janakpuri, New Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "6fBWyG3vvZk"
 },
 {
  "id": 432,
  "kathaId": 158,
  "name": "Day -1 || Shrimad Bhagwat Katha || Janakpuri, New Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "HOZodaBcUGk"
 },
 {
  "id": 431,
  "kathaId": 157,
  "name": "Day - 2 || Satsang & Sankirtan || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "jf_Lc9Z55ek"
 },
 {
  "id": 430,
  "kathaId": 157,
  "name": "Day - 1 || Satsang & Sankirtan || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "CjRWBbz-xww"
 },
 {
  "id": 429,
  "kathaId": 156,
  "name": "Live || Shri Geetaji Par Adbhut Pravachan || Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "m8XrwcD7qnw"
 },
 {
  "id": 428,
  "kathaId": 155,
  "name": "Shri Bade Baba Ji Maharaj Ji Ka Tirobhav Mahotsav 🙏 || Bhiwani || Shri Gaurdas Ji Maharaj",
  "yt": "E7E-573OMOg"
 },
 {
  "id": 427,
  "kathaId": 154,
  "name": "Day -7 || Shrimad Bhagwat Katha || Green City Galleria, Bhatinda|| Shri Gaurdas Ji Maharaj",
  "yt": "nHNTg9TjCKQ"
 },
 {
  "id": 426,
  "kathaId": 154,
  "name": "Day -6 || Shrimad Bhagwat Katha || Green City Galleria, Bhathinda || Shri Gaurdas Ji Maharaj",
  "yt": "zNIumqiWbJM"
 },
 {
  "id": 425,
  "kathaId": 154,
  "name": "Day -5 || Shrimad Bhagwat Katha || Green City Galleria, Bhathinda || Shri Gaurdas Ji Maharaj",
  "yt": "FA8HKBHQ1js"
 },
 {
  "id": 424,
  "kathaId": 154,
  "name": "Day -4 || Shrimad Bhagwat Katha || Green City Galleria, Bhathinda || Shri Gaurdas Ji Maharaj",
  "yt": "O33AnOpm9ME"
 },
 {
  "id": 423,
  "kathaId": 154,
  "name": "Day -3 || Shrimad Bhagwat Katha || Green City Galleria, Bhathinda || Shri Gaurdas Ji Maharaj",
  "yt": "0Dqx23f1Dl4"
 },
 {
  "id": 422,
  "kathaId": 154,
  "name": "Day -2 || Shrimad Bhagwat Katha || Green City Galleria, Bhathinda || Shri Gaurdas Ji Maharaj",
  "yt": "rZrjBNDEsrQ"
 },
 {
  "id": 421,
  "kathaId": 154,
  "name": "Day -1 || Shrimad Bhagwat Katha || Green City Galleria, Bhathinda || Shri Gaurdas Ji Maharaj",
  "yt": "ZkV99RbOfq4"
 },
 {
  "id": 420,
  "kathaId": 153,
  "name": "Day - 11 || Shri Radha Madhav Vivah Mahotsav || Hisar, Haryana || Shri Gaurdas Ji Maharaj",
  "yt": "tjeAKAwwWXY"
 },
 {
  "id": 419,
  "kathaId": 153,
  "name": "Day - 10 || Shri Gaur Katha || Shri Agrasen Bhawan, Hisar, Haryana | Shri Gaurdas Ji Maharaj",
  "yt": "ukndGglJ-WA"
 },
 {
  "id": 418,
  "kathaId": 153,
  "name": "Day - 9 || Shri Gaur Katha || Shri Agrasen Bhawan, Hisar, Haryana | Shri Gaurdas Ji Maharaj",
  "yt": "8f28elfdcv0"
 },
 {
  "id": 417,
  "kathaId": 153,
  "name": "Day - 8 || Shri Gaur Katha || Shri Agrasen Bhawan, Hisar, Haryana | Shri Gaurdas Ji Maharaj",
  "yt": "SjNyhKPDxok"
 },
 {
  "id": 416,
  "kathaId": 153,
  "name": "Day-7 || Shri Bhaktmal Katha ( Shri Madhavendra Puri ji Charitra ) || Hisar, Haryana",
  "yt": "L0q6bQaL1rg"
 },
 {
  "id": 415,
  "kathaId": 153,
  "name": "Day-6 || Shri Bhaktmal Katha ( Shri Bharat Ji Charitra || Part-3 ) || Hisar, Haryana",
  "yt": "sbRMMbxM4cw"
 },
 {
  "id": 414,
  "kathaId": 153,
  "name": "Day-5 || Shri Bhaktmal Katha ( Shri Bharat Ji Charitra || Part-2 ) || Hisar, Haryana",
  "yt": "CUP3Z4oAbYI"
 },
 {
  "id": 413,
  "kathaId": 153,
  "name": "Day-4 || Shri Bhaktmal Katha ( Shri Bharat Ji Charitra || Part-1 ) || Hisar, Haryana",
  "yt": "MF95kU1Fy-Y"
 },
 {
  "id": 412,
  "kathaId": 153,
  "name": "Day-3 || Shri Bhaktmal Katha ( Goswami Tulsidas Ji Charitra - Part-2 ) || Hisar, Haryana",
  "yt": "96OJpa4myd0"
 },
 {
  "id": 411,
  "kathaId": 153,
  "name": "Day-2 || Shri Bhaktmal Katha ( Goswami Tulsidas Ji Charitra | Part-1 ) || Hisar, Haryana ||",
  "yt": "pqoUj2caxYg"
 },
 {
  "id": 410,
  "kathaId": 153,
  "name": "Day-1 || Shri Bhaktmal Katha ( Sant Shri Raidas Ji Charitra ) || Hisar, Haryana",
  "yt": "FiCjeO_UlZA"
 },
 {
  "id": 409,
  "kathaId": 152,
  "name": "Day - 7 || Shri Gaur Katha || Nabadwip || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "hatgF9C3OrE"
 },
 {
  "id": 408,
  "kathaId": 152,
  "name": "Day - 6 || Shri Gaur Katha || Nabadwip || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "-DPr2sfPQ6U"
 },
 {
  "id": 407,
  "kathaId": 152,
  "name": "Day - 5 || Shri Gaur Katha || Nabadwip || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "8fL4tMmoHgg"
 },
 {
  "id": 406,
  "kathaId": 152,
  "name": "Day - 4 || Shri Gaur Katha || Nabadwip || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "kp33yBE8WGM"
 },
 {
  "id": 405,
  "kathaId": 152,
  "name": "Day - 3 || Shri Gaur Katha || Nabadwip || Pujya Shri Gaurdas Ji Maharaj || Part-2",
  "yt": "CfAO2p6KbcU"
 },
 {
  "id": 404,
  "kathaId": 152,
  "name": "Day - 3 || Shri Gaur Katha || Nabadwip || Pujya Shri Gaurdas Ji Maharaj || Part-1",
  "yt": "JlubYWvL2bg"
 },
 {
  "id": 403,
  "kathaId": 152,
  "name": "Day - 2 || Shri Gaur Katha || Nabadwip || Pujya Shri Gaurdas Ji Maharaj || Part-2",
  "yt": "jJjDNsQ8qrM"
 },
 {
  "id": 402,
  "kathaId": 152,
  "name": "Day - 2 || Shri Gaur Katha || Nabadwip || Pujya Shri Gaurdas Ji Maharaj || Part-1",
  "yt": "ciW8rWWdTIo"
 },
 {
  "id": 401,
  "kathaId": 152,
  "name": "Day - 1 || SHRI GAUR KATHA || Nabadwip || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "90fwt83iOKw"
 },
 {
  "id": 400,
  "kathaId": 151,
  "name": "Day - 7 || Shrimad Bhagwat Katha || Lake Town, Kolkata || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "pS2Z1f9Bs3Q"
 },
 {
  "id": 399,
  "kathaId": 151,
  "name": "Day - 6 || Shrimad Bhagwat Katha || Lake Town, Kolkata || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "JsWKoUXBq4U"
 },
 {
  "id": 398,
  "kathaId": 151,
  "name": "Day - 5 || Shrimad Bhagwat Katha || Lake Town, Kolkata || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "_EfrXPOp_jc"
 },
 {
  "id": 397,
  "kathaId": 151,
  "name": "Day - 4 || Shrimad Bhagwat Katha || Lake Town, Kolkata || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "xnp_hf8TlMs"
 },
 {
  "id": 396,
  "kathaId": 151,
  "name": "Day - 3 || Shrimad Bhagwat Katha || Lake Town, Kolkata || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "klQe142rQIM"
 },
 {
  "id": 395,
  "kathaId": 151,
  "name": "Day - 2 || 🙏Shrimad Bhagwat Katha🙏 || Lake Town, Kolkata || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "c71L3KjrYY8"
 },
 {
  "id": 394,
  "kathaId": 151,
  "name": "Day - 1 || 🙏Shrimad Bhagwat Katha🙏 || Lake Town, Kolkata || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "EUAytJotPFc"
 },
 {
  "id": 393,
  "kathaId": 150,
  "name": "Day - 7 || Shrimad Bhagwat Katha || Hindi Bhavan, Ghaziabad || Shri Nitaidas Ji Maharaj",
  "yt": "9egwLkckHN0"
 },
 {
  "id": 392,
  "kathaId": 150,
  "name": "Day - 6 || Shrimad Bhagwat Katha || Hindi Bhavan, Ghaziabad || Shri Nitaidas Ji Maharaj",
  "yt": "nA8F2rFwI0k"
 },
 {
  "id": 391,
  "kathaId": 150,
  "name": "Day - 5 || Shrimad Bhagwat Katha || Hindi Bhavan, Ghaziabad || Shri Nitaidas Ji Maharaj",
  "yt": "DF152ZpIZl0"
 },
 {
  "id": 390,
  "kathaId": 150,
  "name": "Day - 4 || Shrimad Bhagwat Katha || Hindi Bhavan, Ghaziabad || Shri Nitaidas Ji Maharaj",
  "yt": "uvmKGqPQFxQ"
 },
 {
  "id": 389,
  "kathaId": 150,
  "name": "Day - 3 || Shrimad Bhagwat Katha || Hindi Bhavan, Ghaziabad || Shri Nitaidas Ji Maharaj",
  "yt": "BrE_S25Mysg"
 },
 {
  "id": 388,
  "kathaId": 150,
  "name": "Day - 2 || Shrimad Bhagwat Katha || Hindi Bhavan, Ghaziabad || Shri Nitaidas Ji Maharaj",
  "yt": "XI2OapvsKq0"
 },
 {
  "id": 387,
  "kathaId": 150,
  "name": "Day - 1 || Shrimad Bhagwat Katha || Hindi Bhavan, Ghaziabad || Shri Nitaidas Ji Maharaj",
  "yt": "zqDammWimX0"
 },
 {
  "id": 386,
  "kathaId": 149,
  "name": "Day - 7 || 💮Shrimad Bhagwat Katha💮 || Hardoi, Uttar Pradesh || Shri Gaurdas Ji Maharaj",
  "yt": "fZURNHL84MU"
 },
 {
  "id": 385,
  "kathaId": 149,
  "name": "Day - 6 || 💮Shrimad Bhagwat Katha💮 || Hardoi, Uttar Pradesh || Shri Gaurdas Ji Maharaj",
  "yt": "FhA9ySKmEas"
 },
 {
  "id": 384,
  "kathaId": 149,
  "name": "Day - 5 || 💮Shrimad Bhagwat Katha💮 || Hardoi, Uttar Pradesh || Shri Gaurdas Ji Maharaj",
  "yt": "von_l0ve06M"
 },
 {
  "id": 383,
  "kathaId": 149,
  "name": "Day-4 || 💮Shrimad Bhagwat Katha💮 || Hardoi, Uttar Pradesh || Shri Gaurdas Ji Maharaj",
  "yt": "wreDDl_zEkU"
 },
 {
  "id": 382,
  "kathaId": 149,
  "name": "Day-3 || 💮Shrimad Bhagwat Katha💮 || Hardoi, Uttar Pradesh || Shri Gaurdas Ji Maharaj",
  "yt": "n-ZJhyWskOU"
 },
 {
  "id": 381,
  "kathaId": 149,
  "name": "Day-2 || 💮Shrimad Bhagwat Katha💮 || Hardoi, Uttar Pradesh || Shri Gaurdas Ji Maharaj",
  "yt": "SHqYZlu0yQE"
 },
 {
  "id": 380,
  "kathaId": 149,
  "name": "Day-1 || 💮Shrimad Bhagwat Katha💮 || Hardoi, Uttar Pradesh || Shri Gaurdas Ji Maharaj",
  "yt": "FhYjg0mJUJU"
 },
 {
  "id": 379,
  "kathaId": 148,
  "name": "Day-3 ||🙏Nanibai Ro Mayaro Narsi Ka Bhat🙏 || Agra, RBS College Auditorium || Shri Gaurdas Ji Maharaj",
  "yt": "lvnc4Fmd9WY"
 },
 {
  "id": 378,
  "kathaId": 148,
  "name": "Day-2 ||🙏Nanibai Ro Mayaro Narsi Ka Bhat🙏 || Agra, RBS College Auditorium || Shri Gaurdas Ji Maharaj",
  "yt": "sSDnwGs057M"
 },
 {
  "id": 377,
  "kathaId": 148,
  "name": "day-1 ||🙏Nanibai Ro Mayaro Narsi Ka Bhat🙏 || Agra, RBS College Auditorium || Shri Gaurdas Ji Maharaj",
  "yt": "zvynhb-p2Zw"
 },
 {
  "id": 376,
  "kathaId": 147,
  "name": "Live || 🙏Shri Nityanand Mahima Katha🙏 || Ludhiana, Punjab || Shri Gaurdas Ji Maharaj",
  "yt": "B6kwKywmBos"
 },
 {
  "id": 375,
  "kathaId": 146,
  "name": "Day-5 || 💮Shri Meera Katha💮 || Ojas Banquet Hall, Kolkata || Shri Gaurdas Ji Maharaj",
  "yt": "b84ax09WKec"
 },
 {
  "id": 374,
  "kathaId": 146,
  "name": "Day-4 || 💮Shri Meera Katha💮 || Ojas Banquet Hall, Kolkata || Shri Gaurdas Ji Maharaj",
  "yt": "k4cWo9Ncng8"
 },
 {
  "id": 373,
  "kathaId": 146,
  "name": "Day-3 || 💮Shri Meera Katha💮 || Ojas Banquet Hall, Kolkata || Shri Gaurdas Ji Maharaj",
  "yt": "A3Bfym0VEf0"
 },
 {
  "id": 372,
  "kathaId": 146,
  "name": "Day-2 || 💮Shri Meera Katha💮 || Ojas Banquet Hall, Kolkata || Shri Gaurdas Ji Maharaj",
  "yt": "yBU1IR4UYok"
 },
 {
  "id": 371,
  "kathaId": 146,
  "name": "Day-1 || 💮Shri Meera Katha💮 || Ojas Banquet Hall, Kolkata || Shri Gaurdas Ji Maharaj",
  "yt": "N_7ojoqZOFQ"
 },
 {
  "id": 370,
  "kathaId": 145,
  "name": "Thakurji Patotsav🪷 || Bundi , Rajasthan || Shri Gaurdas Ji Maharaj",
  "yt": "tHk8zBXoDkg"
 },
 {
  "id": 369,
  "kathaId": 144,
  "name": "Day - 9 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Ludhiana",
  "yt": "khe5QjHKTUA"
 },
 {
  "id": 368,
  "kathaId": 144,
  "name": "Day - 8 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Ludhiana",
  "yt": "_F4C4BNe7Ow"
 },
 {
  "id": 367,
  "kathaId": 144,
  "name": "Day - 7 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Ludhiana",
  "yt": "DYdG8XOEiJg"
 },
 {
  "id": 366,
  "kathaId": 144,
  "name": "Day - 6 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Ludhiana",
  "yt": "ZXWSIhR90PY"
 },
 {
  "id": 365,
  "kathaId": 144,
  "name": "Day - 5 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Ludhiana",
  "yt": "vgrJ37p36TI"
 },
 {
  "id": 364,
  "kathaId": 144,
  "name": "Day - 4 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Ludhiana",
  "yt": "YIDbEmXCJu4"
 },
 {
  "id": 363,
  "kathaId": 144,
  "name": "Day - 3 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Ludhiana",
  "yt": "g3dJdoj2z3Q"
 },
 {
  "id": 362,
  "kathaId": 144,
  "name": "Day - 2 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Ludhiana",
  "yt": "huRfDj56PfY"
 },
 {
  "id": 361,
  "kathaId": 143,
  "name": "Day - 4 || 🪷Shri Bhaktmal Katha🪷( Goswami Tulsi Das Ji Ka Charitra ) Part -2 || Amritsar ||",
  "yt": "vBuOMTp8DNk"
 },
 {
  "id": 360,
  "kathaId": 144,
  "name": "Day - 1 || 🌼Shri Ram Katha ( Uttar Kand )🌼 || Shri Dandi Swami Mandir, Punjab ||",
  "yt": "7wsckGmzJnU"
 },
 {
  "id": 359,
  "kathaId": 143,
  "name": "Day - 4 || 🪷Shri Bhaktmal Katha🪷( Goswami Tulsi Das Ji Ka Charitra ) Part -1 || Amritsar",
  "yt": "TPMOJJ8x3AA"
 },
 {
  "id": 358,
  "kathaId": 143,
  "name": "Day - 3 || 🪷Shri Bhaktmal Katha🪷 || Amritsar || Shri Gaurdas Ji Maharaj",
  "yt": "bdH_TJ9xoxw"
 },
 {
  "id": 357,
  "kathaId": 143,
  "name": "Day - 2 || 🪷Shri Bhaktmal Katha🪷 Rasikacharya Shripad Gaurangdas Baba Ji Ka Charitra",
  "yt": "FIUM9BrUDV8"
 },
 {
  "id": 356,
  "kathaId": 143,
  "name": "Day - 1 || 🪷Shri Bhaktmal Katha🪷 || Amritsar || Shri Gaurdas Ji Maharaj ||",
  "yt": "cELegzMvsXg"
 },
 {
  "id": 355,
  "kathaId": 142,
  "name": "Live || Day - 7 || 🪷Shrimad Bhagwat Katha🪷 || Mansarovar, Jaipur || Shri Gaurdas Ji Maharaj ||",
  "yt": "dW5HU6OXNEE"
 },
 {
  "id": 354,
  "kathaId": 142,
  "name": "Live || Day - 6 || 🪷Shrimad Bhagwat Katha🪷 || Mansarovar, Jaipur || Shri Gaurdas Ji Maharaj ||",
  "yt": "X-n3epP5TL8"
 },
 {
  "id": 353,
  "kathaId": 142,
  "name": "Live || Day - 5 || 🪷Shrimad Bhagwat Katha🪷( Vivah Panchami & Bihari Ji Prakatya Mahotsav ) | Jaipur",
  "yt": "hItpNsnv14A"
 },
 {
  "id": 352,
  "kathaId": 142,
  "name": "Live || Day - 4 || 🪷Shrimad Bhagwat Katha🪷( Sadguru Prakatya Mahotsav ) || Mansarovar, Jaipur",
  "yt": "wmcRdl0KPE8"
 },
 {
  "id": 351,
  "kathaId": 142,
  "name": "Live || Day - 3 || 🪷Shrimad Bhagwat Katha🪷|| Mansarovar, Jaipur || Shri Gaurdas Ji Maharaj",
  "yt": "U3P7YCGxhhM"
 },
 {
  "id": 350,
  "kathaId": 142,
  "name": "Live || Day - 2 || 🪷Shrimad Bhagwat Katha🪷|| Mansarovar, Jaipur || Shri Gaurdas Ji Maharaj",
  "yt": "9i50ltkRhWg"
 },
 {
  "id": 349,
  "kathaId": 142,
  "name": "Live || Day-01 || 🪷Shrimad Bhagwat Katha🪷|| Mansarovar, Jaipur || Shri Gaurdas Ji Maharaj",
  "yt": "D0WCtuSfsxk"
 },
 {
  "id": 348,
  "kathaId": 141,
  "name": "Live ~ Day ~7~ 🪷Shrimad Bhagwat Katha🪷 ~ Kohra, Himachal Pradesh ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "ies1lySI0kU"
 },
 {
  "id": 347,
  "kathaId": 141,
  "name": "Live ~ Day ~6 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Kohra, Himachal Pradesh ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "4o2SmEvJW8A"
 },
 {
  "id": 346,
  "kathaId": 141,
  "name": "Live ~ Day ~5 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Kohra, Himachal Pradesh ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "ssjFXZ8HEUg"
 },
 {
  "id": 345,
  "kathaId": 141,
  "name": "Live ~ Day ~4 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Kohra, Himachal Pradesh ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "o300CdvDIhU"
 },
 {
  "id": 344,
  "kathaId": 141,
  "name": "Live ~ Day ~3 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Kohra, Himachal Pradesh ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "gZVKGDK2W3k"
 },
 {
  "id": 343,
  "kathaId": 141,
  "name": "Live ~ Day ~2 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Kohra, Himachal Pradesh ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "-9ZW5V4n0D0"
 },
 {
  "id": 342,
  "kathaId": 141,
  "name": "Live ~ Day ~1 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Kohra, Himachal Pradesh ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "o5d76h3p4OA"
 },
 {
  "id": 341,
  "kathaId": 140,
  "name": "Shri Radha Madhav Vivah Mahotsav",
  "yt": "CbEmPYcJsAs"
 },
 {
  "id": 340,
  "kathaId": 139,
  "name": "Ekadashi Mahima Katha 🍃🦚 ~ Vrindavan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "C_QsTsE3o78"
 },
 {
  "id": 339,
  "kathaId": 138,
  "name": "Live ~ 💮Shri Tulsi Shaligram Vivah Mahotsav💮 ~ Vrindavan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "DziO1CqdUS8"
 },
 {
  "id": 338,
  "kathaId": 137,
  "name": "Day ~7 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Nathdwara, Rajasthan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "ATWHxGXX6Rw"
 },
 {
  "id": 337,
  "kathaId": 137,
  "name": "Day ~6 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Nathdwara, Rajasthan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "7cMJcBa7Tf4"
 },
 {
  "id": 336,
  "kathaId": 137,
  "name": "Day ~5 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Nathdwara, Rajasthan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "62SNhMIpTCE"
 },
 {
  "id": 335,
  "kathaId": 137,
  "name": "Day ~4 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Nathdwara, Rajasthan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "PjD7YMTMYik"
 },
 {
  "id": 334,
  "kathaId": 137,
  "name": "Day ~3 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Nathdwara, Rajasthan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "qqVNyLwQSt8"
 },
 {
  "id": 333,
  "kathaId": 137,
  "name": "Day-2 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Nathdwara, Rajasthan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "w8zlRMXgVAs"
 },
 {
  "id": 332,
  "kathaId": 137,
  "name": "Day-1 ~ 🪷Shrimad Bhagwat Katha🪷 ~ Nathdwara, Rajasthan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "ECIsi6mni48"
 },
 {
  "id": 331,
  "kathaId": 136,
  "name": "Goswami Shri Tulsidas Ji Dwara Rachit Vinay Patrika ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "eU-JrqcoIpo"
 },
 {
  "id": 330,
  "kathaId": 135,
  "name": "Live ~ Shri Radha Madhav Vivah Mahotsav ~ Volga Place , Ghaziabad ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "y0MnBsS1uIM"
 },
 {
  "id": 329,
  "kathaId": 132,
  "name": "Day 5 ~ Shri Gaur Katha ~ Kolkata ~ Shri Gaurdas Ji Maharaj",
  "yt": "_Zp0g-C3I3w"
 },
 {
  "id": 328,
  "kathaId": 134,
  "name": "Sanatan Dharam Ke 16 Sansker ~ Agra ~ Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "2XAWCQLIOV4"
 },
 {
  "id": 327,
  "kathaId": 132,
  "name": "Day 4 ~ Shri Gaur Katha ~ Kolkata ~ Shri Gaurdas Ji Maharaj",
  "yt": "ge7LQh5KBMg"
 },
 {
  "id": 326,
  "kathaId": 132,
  "name": "Day 3 ~ Shri Gaur Katha ~ Kolkata ~ Shri Gaurdas Ji Maharaj",
  "yt": "FC1DLlhLZTM"
 },
 {
  "id": 325,
  "kathaId": 133,
  "name": "Day ~ 7 ~ Shri Bhaktmal Katha ~ Charak Shiv Bhawan , Jammu ~ Shri Gaurdas Ji Maharaj",
  "yt": "senC-eg_VHk"
 },
 {
  "id": 324,
  "kathaId": 133,
  "name": "Day ~ 6 ~ Shri Bhaktmal Katha ~ Charak Shiv Bhawan , Jammu ~ Shri Gaurdas Ji Maharaj",
  "yt": "DlZj-FDxHGc"
 },
 {
  "id": 323,
  "kathaId": 133,
  "name": "Day ~ 5 ~ Shri Bhaktmal Katha ~ Charak Shiv Bhawan , Jammu ~ Shri Gaurdas Ji Maharaj",
  "yt": "If-nzv_eun8"
 },
 {
  "id": 322,
  "kathaId": 133,
  "name": "Day ~ 4 ~ Shri Bhaktmal Katha ~ Charak Shiv Bhawan , Jammu ~ Shri Gaurdas Ji Maharaj",
  "yt": "XDpMFJD_z1A"
 },
 {
  "id": 321,
  "kathaId": 133,
  "name": "Day ~ 3 ~ Shri Bhaktmal Katha ~ Charak Shiv Bhawan , Jammu ~ Shri Gaurdas Ji Maharaj",
  "yt": "liZIRJoarK8"
 },
 {
  "id": 320,
  "kathaId": 133,
  "name": "Day ~ 2 ~ Shri Bhaktmal Katha ~ Charak Shiv Bhawan , Jammu ~ Shri Gaurdas Ji Maharaj",
  "yt": "83kAS0jcB1c"
 },
 {
  "id": 319,
  "kathaId": 133,
  "name": "Day ~ 1 ~ Shri Bhaktmal Katha ~ Charak Shiv Bhawan , Jammu ~ Shri Gaurdas Ji Maharaj",
  "yt": "F1lew1ACOnI"
 },
 {
  "id": 318,
  "kathaId": 132,
  "name": "Day2 ~ Shri Gaur Katha ~ Kolkata ~ Shri Gaurdas Ji Maharaj",
  "yt": "K-4vOMP2kqo"
 },
 {
  "id": 317,
  "kathaId": 132,
  "name": "DLive ~ Day1 ~ Shri Gaur Katha ~ Kolkata ~ Shri Gaurdas Ji Maharaj",
  "yt": "ZNW4ls2NI5U"
 },
 {
  "id": 316,
  "kathaId": 131,
  "name": "Shri Maharaas ( Sharad ) Purnima 2025 ~ Shri Radha Kund , Govardhan ~Shri Gaurdas JI Maharaj",
  "yt": "XV8zldg-ZqM"
 },
 {
  "id": 315,
  "kathaId": 130,
  "name": "Shri Radha Madhav Vivah Mahotsav ~ Ladli Ju Mandir , Barsana ~ Pujya Shri Gaurdas JI Maharaj",
  "yt": "-i_0R1G_kU4"
 },
 {
  "id": 314,
  "kathaId": 129,
  "name": "Day-3 ~ Shri Radha Rani Ji Ki Katha ~ Maharaja Agrasen Bhavan, Agra ~ Shri Gaurdas Ji Maharaj",
  "yt": "FZZfBy3etoQ"
 },
 {
  "id": 313,
  "kathaId": 129,
  "name": "Day 2 ~ Shri Radha Rani Ji Ki Katha ~ Maharaja Agrasen Bhavan, Agra ~ Shri Gaurdas Ji Maharaj",
  "yt": "HfNZVdi3dSc"
 },
 {
  "id": 312,
  "kathaId": 129,
  "name": "Day-1 ~🌼Shri Radha Rani Ji Ki Katha ~ Maharaja Agrasen Bhavan, Agra ~ Shri Gaurdas Ji Maharaj",
  "yt": "Vtg1tu1urC0"
 },
 {
  "id": 311,
  "kathaId": 128,
  "name": "Maharaja Agrasen Ji Ka Charitra ~ Maharaja Agrasen Bhavan, Agra ~ Shri Gaurdas Ji Maharaj",
  "yt": "4yLZ7hdNCHk"
 },
 {
  "id": 310,
  "kathaId": 127,
  "name": "Dussehra Mahotsav 2025 ~ Maharaja Agrasen Bhavan, Agra ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "pkv9J1PeQYQ"
 },
 {
  "id": 309,
  "kathaId": 126,
  "name": "Shri Durga Mahima Katha ~ Shri Dham Vrindavan ~ Shri Gaurdas Ji Maharaj",
  "yt": "XBtw3RCv9UE"
 },
 {
  "id": 308,
  "kathaId": 125,
  "name": "Day~11 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "J07pA-LqQfA"
 },
 {
  "id": 307,
  "kathaId": 125,
  "name": "Day~10 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "Iplnebaukpg"
 },
 {
  "id": 306,
  "kathaId": 125,
  "name": "Day ~ 9 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "mylOLVg5yD0"
 },
 {
  "id": 305,
  "kathaId": 125,
  "name": "Day ~ 8 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "b5seJi7_qD8"
 },
 {
  "id": 304,
  "kathaId": 125,
  "name": "Day ~ 7 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "-jQrY5T3yQg"
 },
 {
  "id": 303,
  "kathaId": 125,
  "name": "Day ~ 6 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "5zr7zj_cxZ0"
 },
 {
  "id": 302,
  "kathaId": 125,
  "name": "Day ~ 5 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "Jrf5iAScVOw"
 },
 {
  "id": 301,
  "kathaId": 125,
  "name": "Day ~ 4 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "h9nWWydrYd4"
 },
 {
  "id": 300,
  "kathaId": 124,
  "name": "तेरहवां व विश्राम सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "H9xVicfs8mI"
 },
 {
  "id": 299,
  "kathaId": 124,
  "name": "बारहवां सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "h4u2fg5fgu4"
 },
 {
  "id": 298,
  "kathaId": 125,
  "name": "Day ~ 3 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "snZ_KmkVypQ"
 },
 {
  "id": 297,
  "kathaId": 125,
  "name": "Day ~ 2 ~ 🪷 Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "mtxqmX0-Hk0"
 },
 {
  "id": 296,
  "kathaId": 125,
  "name": "Day-1 ~ 🪷💮Shri Gaurang Katha ~ Shri Govind Dev Ji Mandir, Jaipur ~ Shri Gaurdas Ji Maharaj",
  "yt": "B_m4DRU5JE0"
 },
 {
  "id": 295,
  "kathaId": 124,
  "name": "ग्यारहवां सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "uYOv2XY0OrA"
 },
 {
  "id": 294,
  "kathaId": 124,
  "name": "दसवां सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "s4XBpWzdCqc"
 },
 {
  "id": 293,
  "kathaId": 124,
  "name": "नवम सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "qOEHzigZ6TM"
 },
 {
  "id": 292,
  "kathaId": 124,
  "name": "अष्टम सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "ccZunmGH_jA"
 },
 {
  "id": 291,
  "kathaId": 124,
  "name": "सप्तम सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "2WzL1mYRiH0"
 },
 {
  "id": 290,
  "kathaId": 124,
  "name": "षष्ठ सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "JEsbXCrg3-8"
 },
 {
  "id": 289,
  "kathaId": 124,
  "name": "पंचम सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "mwmRcW8FZzk"
 },
 {
  "id": 288,
  "kathaId": 124,
  "name": "चतुर्थ सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "fLKmdSeVxfM"
 },
 {
  "id": 287,
  "kathaId": 124,
  "name": "तृतीय सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "vCM_CrjLLjo"
 },
 {
  "id": 286,
  "kathaId": 124,
  "name": "द्वितीय सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "zNycyeVdpKE"
 },
 {
  "id": 285,
  "kathaId": 124,
  "name": "प्रथम सत्र ~ श्रीमद् भागवत कथा ~ जयपुर ~ पूज्य गौरदास जी महाराज",
  "yt": "YzzlcSv4MqE"
 },
 {
  "id": 284,
  "kathaId": 118,
  "name": "Shri Radha Chhathi Mahotsav ~ 🪘🥁🦚🌸~ Volga Place , Ghaziabad ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "AkxoozJqQXY"
 },
 {
  "id": 283,
  "kathaId": 117,
  "name": "Day ~ 7 ~🪷💮 Shrimad Bhagwat Katha ~ Shri Gaurdas Ji Maharaj, ~ Trinagar ~ (Delhi)",
  "yt": "U6nMUNTGQqs"
 },
 {
  "id": 282,
  "kathaId": 117,
  "name": "Day ~ 6 ~🪷💮 Shrimad Bhagwat Katha ~ Shri Gaurdas Ji Maharaj, ~ Trinagar ~ (Delhi)",
  "yt": "lR449JwCdoI"
 },
 {
  "id": 281,
  "kathaId": 117,
  "name": "Day ~ 5 ~🪷💮 Shrimad Bhagwat Katha ~ Shri Gaurdas Ji Maharaj, ~ Trinagar ~ (Delhi)",
  "yt": "LwUPzn6J5Tc"
 },
 {
  "id": 280,
  "kathaId": 117,
  "name": "Day ~ 4 ~🪷💮 Shrimad Bhagwat Katha ~ Shri Gaurdas Ji Maharaj, ~ Trinagar ~ (Delhi)",
  "yt": "rmILWkFHQd4"
 },
 {
  "id": 279,
  "kathaId": 117,
  "name": "Day ~ 3 ~🪷💮 Shrimad Bhagwat Katha ~ Shri Gaurdas Ji Maharaj, ~ Trinagar ~ (Delhi)",
  "yt": "eOCQp9e0dQU"
 },
 {
  "id": 278,
  "kathaId": 117,
  "name": "Day ~ 2 ~🪷💮 Shrimad Bhagwat Katha ~ Shri Gaurdas Ji Maharaj, ~ Trinagar ~ (Delhi)",
  "yt": "WuQfXLbojPE"
 },
 {
  "id": 277,
  "kathaId": 117,
  "name": "Day ~ 1 ~🪷💮 Shrimad Bhagwat Katha ~ Shri Gaurdas Ji Maharaj, ~ Trinagar ~ (Delhi)",
  "yt": "aJho3rNOXn4"
 },
 {
  "id": 276,
  "kathaId": 116,
  "name": "Day ~ 5 ~ 🌼Shri Bhaktmal Katha ~ (Shrila Haridas Thakur Ji ka Tirobhav Mahotsav) ~(Jalandhar)",
  "yt": "qg40p53QALo"
 },
 {
  "id": 275,
  "kathaId": 116,
  "name": "Day ~ 4 ~ 🌼Shri Bhaktmal Katha ~ Devi Talab Mandir, ,Nakodar (Jalandhar)",
  "yt": "MFcDQjaaE7U"
 },
 {
  "id": 274,
  "kathaId": 116,
  "name": "Day ~ 3 ~ 🌼Shri Bhaktmal Katha (Vaman Dwadashi ) ~ Devi Talab Mandir, ,Nakodar (Jalandhar)",
  "yt": "_1brL-L6Q5A"
 },
 {
  "id": 273,
  "kathaId": 116,
  "name": "Day ~ 3 ~ 🌼Shri Bhaktmal Katha (Vaman Dwadashi ) ~ Devi Talab Mandir, ,Nakodar (Jalandhar)",
  "yt": "-1NgYr2H0Uw"
 },
 {
  "id": 272,
  "kathaId": 116,
  "name": "Day ~ 2 ~ 🌼Shri Bhaktmal Katha ~ Devi Talab Mandir, Purani Sabji Mandi, Nakodar (Jalandhar)",
  "yt": "kfyNwe5A0co"
 },
 {
  "id": 271,
  "kathaId": 116,
  "name": "Day ~ 1 ~ 🌼Shri Bhaktmal Katha ~ Devi Talab Mandir, Purani Sabji Mandi, Nakodar (Jalandhar)",
  "yt": "Z0KRsepY3nM"
 },
 {
  "id": 270,
  "kathaId": 115,
  "name": "Day ~ 8 ~ 🪷☘️Shrimad Bhagwat Katha ~ Purushottam Vatika , Jagannath Puri",
  "yt": "3somxYcv5Is"
 },
 {
  "id": 269,
  "kathaId": 115,
  "name": "Day ~ 7 ~ 🪷☘️Shrimad Bhagwat Katha ~ Purushottam Vatika , Jagannath Puri",
  "yt": "Gbw6bK3e85E"
 },
 {
  "id": 268,
  "kathaId": 115,
  "name": "Day ~ 6 ~ 🪷☘️Shrimad Bhagwat Katha ( Shri Radhashtami ) ~ Purushottam Vatika , Jagannath Puri",
  "yt": "ac2Woc337pU"
 },
 {
  "id": 267,
  "kathaId": 115,
  "name": "Day ~ 5 ~ 🪷☘️Shrimad Bhagwat Katha ~ Purushottam Vatika , Jagannath Puri",
  "yt": "l1e-StFwk94"
 },
 {
  "id": 266,
  "kathaId": 115,
  "name": "Day ~ 4 ~ 🪷☘️Shrimad Bhagwat Katha ~ Purushottam Vatika , Jagannath Puri",
  "yt": "2_27G3ODKqM"
 },
 {
  "id": 265,
  "kathaId": 115,
  "name": "Day ~ 3 ~ 🪷☘️Shrimad Bhagwat Katha ~(Rishi Panchmi ) ~ Purushottam Vatika , Jagannath Puri",
  "yt": "HEtOr6N-_Xw"
 },
 {
  "id": 264,
  "kathaId": 115,
  "name": "Day ~ 2 ~ 🪷☘️Shrimad Bhagwat Katha ~(Ganesh Chaturthi ) ~ Purushottam Vatika , Jagannath Puri",
  "yt": "tMTAAqHEUeA"
 },
 {
  "id": 263,
  "kathaId": 115,
  "name": "Day ~ 1 ~ 🪷☘️Shrimad Bhagwat Katha ~ Purushottam Vatika , Jagannath Puri , Odisha",
  "yt": "ckM6Vmz-akI"
 },
 {
  "id": 262,
  "kathaId": 114,
  "name": "Shri Krishna Bal Leela Mahotsav ~ Volga Palace, Ghaziabad ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "-uN0FJeP8Ks"
 },
 {
  "id": 261,
  "kathaId": 123,
  "name": "D ~ Live ~Day 3~ Shri Bhaktmal Katha ~ Shri Neel Madhav Dham , Vrindavan ~ Shri Gaurdas Ji Maharaj",
  "yt": "6EV4NJ1zKGQ"
 },
 {
  "id": 260,
  "kathaId": 123,
  "name": "D ~ Live ~Day 2~ Shri Bhaktmal Katha ~ Shri Neel Madhav Dham , Vrindavan ~ Shri Gaurdas Ji Maharaj",
  "yt": "pUsesEjtt4M"
 },
 {
  "id": 259,
  "kathaId": 123,
  "name": "D ~ Live ~ Shri Bhaktmal Katha ~ Shri Neel Madhav Dham , Vrindavan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "eANde7IONMM"
 },
 {
  "id": 258,
  "kathaId": 113,
  "name": "Live ~ Day ~ 7 ~ Shri Krishna Braj Leela (Shrimad Bhagwat , Dasham Skandh )~ Una, Himachal",
  "yt": "IMCa6YKFW4w"
 },
 {
  "id": 257,
  "kathaId": 113,
  "name": "Live ~ Day ~ 6 ~ Shri Krishna Braj Leela (Shrimad Bhagwat , Dasham Skandh )~ Una, Himachal",
  "yt": "23UrHAxeKV4"
 },
 {
  "id": 256,
  "kathaId": 113,
  "name": "Live ~ Day ~ 5 ~ Shri Krishna Braj Leela (Shrimad Bhagwat , Dasham Skandh )~ Una, Himachal",
  "yt": "XFj9MbzUC1Y"
 },
 {
  "id": 255,
  "kathaId": 113,
  "name": "Live ~ Day ~ 4 ~ Shri Krishna Braj Leela (Shrimad Bhagwat , Dasham Skandh )~ Una, Himachal",
  "yt": "UDFybGPAzvo"
 },
 {
  "id": 254,
  "kathaId": 113,
  "name": "Live ~ Day ~ 3 ~ Shri Krishna Braj Leela (Shrimad Bhagwat , Dasham Skandh )~ Una, Himachal",
  "yt": "cjRp83S7sdI"
 },
 {
  "id": 253,
  "kathaId": 113,
  "name": "Live ~ Day ~ 2 ~ Shri Krishna Braj Leela (Shrimad Bhagwat , Dasham Skandh )~ Una, Himachal",
  "yt": "HPF08B7qmI4"
 },
 {
  "id": 252,
  "kathaId": 113,
  "name": "Live ~ Day ~ 1 ~ Shri Krishna Braj Leela (Shrimad Bhagwat , Dasham Skandh )~ Una, Himachal",
  "yt": "9A3z7oWMCIU"
 },
 {
  "id": 251,
  "kathaId": 122,
  "name": "D Live ~ Day ~ 7 ~🌿🌸Shrimad Bhagwat Katha~Pushpanjali Baikunth, Vrindavan~ Shri Gaurdas Ji Maharaj",
  "yt": "NH1ez4s8SG8"
 },
 {
  "id": 250,
  "kathaId": 122,
  "name": "D Live ~ Day ~ 6 ~🌿🌸Shrimad Bhagwat Katha~Pushpanjali Baikunth, Vrindavan~ Shri Gaurdas Ji Maharaj",
  "yt": "AOk-1ky2rJ8"
 },
 {
  "id": 249,
  "kathaId": 122,
  "name": "D Live ~ Day ~ 5 ~🌿🌸Shrimad Bhagwat Katha~Pushpanjali Baikunth, Vrindavan~ Shri Gaurdas Ji Maharaj",
  "yt": "FVnkgXwOGrs"
 },
 {
  "id": 248,
  "kathaId": 122,
  "name": "D Live ~ Day~4 ~🌿🌸Shrimad Bhagwat Katha~Pushpanjali Baikunth, Vrindavan~ Shri Gaurdas Ji Maharaj",
  "yt": "Yn51NhJ6VXE"
 },
 {
  "id": 247,
  "kathaId": 122,
  "name": "D Live ~ Day~3 ~🌿🌸Shrimad Bhagwat Katha~Pushpanjali Baikunth, Vrindavan~ Shri Gaurdas Ji Maharaj",
  "yt": "NQWL_gpz25o"
 },
 {
  "id": 246,
  "kathaId": 122,
  "name": "D Live ~ Day~2 ~🌿🌸Shrimad Bhagwat Katha~Pushpanjali Baikunth, Vrindavan~ Shri Gaurdas Ji Maharaj",
  "yt": "XpcIJw5am10"
 },
 {
  "id": 245,
  "kathaId": 122,
  "name": "D Live ~ Day~1 ~🌿🌸Shrimad Bhagwat Katha~Pushpanjali Baikunth, Vrindavan~ Shri Gaurdas Ji Maharaj",
  "yt": "UpqKdXL8-98"
 },
 {
  "id": 244,
  "kathaId": 112,
  "name": "Live || Hariyaali Teej Jhula Mahoutsav || Shri Gaur Kripa Dham, Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "5CR3mnhBBiE"
 },
 {
  "id": 243,
  "kathaId": 111,
  "name": "Live~🌸Day-6🚩Shri Ram Katha (Lanka Kand) ~Shri Dandi Swami Mandir ,Ludhiana ~ Shri Gaurdas Ji Maharaj",
  "yt": "GQrJV-TcjhI"
 },
 {
  "id": 242,
  "kathaId": 111,
  "name": "Live~🌸Day-5🚩Shri Ram Katha (Lanka Kand) ~Shri Dandi Swami Mandir ,Ludhiana ~ Shri Gaurdas Ji Maharaj",
  "yt": "7Hcy6pFC3yc"
 },
 {
  "id": 241,
  "kathaId": 111,
  "name": "Live~🌸Day-4🚩Shri Ram Katha (Lanka Kand) ~Shri Dandi Swami Mandir ,Ludhiana ~ Shri Gaurdas Ji Maharaj",
  "yt": "sXdUChewqv0"
 },
 {
  "id": 240,
  "kathaId": 111,
  "name": "Live~🌸Day-3🚩Shri Ram Katha (Lanka Kand) ~Shri Dandi Swami Mandir ,Ludhiana ~ Shri Gaurdas Ji Maharaj",
  "yt": "vbs0pTxsWsM"
 },
 {
  "id": 239,
  "kathaId": 111,
  "name": "Live~🌸Day-2🚩Shri Ram Katha (Lanka Kand) ~Shri Dandi Swami Mandir ,Ludhiana ~ Shri Gaurdas Ji Maharaj",
  "yt": "C_ByS3e2YKU"
 },
 {
  "id": 238,
  "kathaId": 111,
  "name": "Live~🌸Day-1🚩Shri Ram Katha (Lanka Kand) ~Shri Dandi Swami Mandir ,Ludhiana ~ Shir Gaurdas Ji Maharaj",
  "yt": "0awA66Makds"
 },
 {
  "id": 237,
  "kathaId": 110,
  "name": "🔴Live~Day 6🌸Shri Bhaktmal Katha(श्री राधा जू चरित्र )~Kedarnath Dham~Shri GaurdasJi Maharaj",
  "yt": "4heIxvEHDw8"
 },
 {
  "id": 236,
  "kathaId": 110,
  "name": "🔴Live~Day 5🌸Shri Bhaktmal Katha(श्री नामदेव जी चरित्र )~Kedarnath Dham~Shri GaurdasJi Maharaj",
  "yt": "6LV_rcPHA58"
 },
 {
  "id": 235,
  "kathaId": 110,
  "name": "🔴Live~ Day 4🌸Sri Bhaktmal Katha(श्री वल्लभाचार्य जी चरित्र)~Kedarnath Dham | Shri Gaurdas Ji Maharaj",
  "yt": "iCKedIx_6nY"
 },
 {
  "id": 234,
  "kathaId": 110,
  "name": "🔴Live~ Day 3🌸Sri Bhaktmal Katha(श्री हित हरिवंश चरित्र)~ Kedarnath Dham | Shri Gaurdas Ji Maharaj",
  "yt": "GxMRooncsn0"
 },
 {
  "id": 233,
  "kathaId": 110,
  "name": "🔴Live~ Day 2🌸Sri Bhaktmal Katha(माता यशोदा चरित्र)~ Kedarnath Dham | Shri Gaurdas Ji Maharaj",
  "yt": "7aQK6j1RQbU"
 },
 {
  "id": 232,
  "kathaId": 110,
  "name": "🔴Live~ Day 1🌸Sri Bhaktmal Katha(कैकई चरित्र)~ Kedarnath Dham | Shri Gaurdas Ji Maharaj",
  "yt": "fhBOGbFvX18"
 },
 {
  "id": 231,
  "kathaId": 108,
  "name": "Live ~ नवीन गृह प्रवेश उत्सव एवं ठाकुर जी का प्राकट्य उत्सव ~ Ghaziabad ~ Shir Gaurdas Ji Maharaj",
  "yt": "Gd_d36JVYyk"
 },
 {
  "id": 230,
  "kathaId": 107,
  "name": "Live 🌕🔱Shri Guru Purnima Mahotsav - Ghaziabad | Shir Gaurdas Ji Maharaj",
  "yt": "ukM6fNFOheY"
 },
 {
  "id": 229,
  "kathaId": 106,
  "name": "Live 🌕🔱Shri Guru Purnima Mahotsav - Shridham Vrindavan | Shir Gaurdas Ji Maharaj",
  "yt": "-HcTjKE9R5I"
 },
 {
  "id": 228,
  "kathaId": 105,
  "name": "Live ~ Shri Radha Madhav Vivah Mahotsav ~ Maheswari Bhawan , Surat ~ Shri Gaurdas Ji Maharaj",
  "yt": "LHJcqBT1acg"
 },
 {
  "id": 227,
  "kathaId": 105,
  "name": "Live ~ Day -2 ~ Shri Shiv Parivar Katha ~ Maheswari Bhawan , Surat ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "ogwhSxvBup0"
 },
 {
  "id": 226,
  "kathaId": 105,
  "name": "Live ~ Day -1 ~ Shri Shiv Parivar Katha ~ Maheswari Bhawan , Surat ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "qx5xN6fFzAo"
 },
 {
  "id": 225,
  "kathaId": 104,
  "name": "Live ~ Day ~7 ~ Shrimad Bhagwat Katha ~ Mohali, Chandigarh, Punjab ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "8X8swLEUsak"
 },
 {
  "id": 224,
  "kathaId": 104,
  "name": "Live ~ Day ~6 ~ Shrimad Bhagwat Katha ~ Mohali, Chandigarh, Punjab ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "KHS1yQml5vQ"
 },
 {
  "id": 223,
  "kathaId": 104,
  "name": "Live ~ Day ~5 ~ Shrimad Bhagwat Katha ~ Mohali, Chandigarh, Punjab ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "mPaK4snYZTQ"
 },
 {
  "id": 222,
  "kathaId": 104,
  "name": "Live ~ Day ~4 ~ Shrimad Bhagwat Katha ~ Mohali, Chandigarh, Punjab ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "T3AdPX7vVNw"
 },
 {
  "id": 221,
  "kathaId": 104,
  "name": "Live ~ Day ~3 ~ Shrimad Bhagwat Katha ~ Mohali, Chandigarh, Punjab ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "PegMwOpZT_E"
 },
 {
  "id": 220,
  "kathaId": 104,
  "name": "Live ~ Day ~ 2 ~ Shrimad Bhagwat Katha ~ Mohali, Chandigarh, Punjab ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "Pj6FmuZSdkk"
 },
 {
  "id": 219,
  "kathaId": 104,
  "name": "Live ~ Day ~ 1 ~ Shrimad Bhagwat Katha ~ Mohali, Chandigarh, Punjab ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "EHODDbrSPu8"
 },
 {
  "id": 218,
  "kathaId": 103,
  "name": "Live ~ Day ~ 7 ~ Shrimad Bhagwat Katha ~ 🏔️ Ooty, Tamil Nadu ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "ZH9L-b74qHg"
 },
 {
  "id": 217,
  "kathaId": 103,
  "name": "Live ~ Day ~ 6 ~ Shrimad Bhagwat Katha ~ 🏔️ Ooty, Tamil Nadu ~ Shri Gaurdas Ji Maharaj #live",
  "yt": "_l8Ai9jJdnI"
 },
 {
  "id": 216,
  "kathaId": 103,
  "name": "Live ~ Day ~ 5 ~ Shrimad Bhagwat Katha ~ 🏔️ Ooty, Tamil Nadu ~ Shri Gaurdas Ji Maharaj",
  "yt": "AIrWIpQVrM8"
 },
 {
  "id": 215,
  "kathaId": 103,
  "name": "Live ~ Day ~ 4 ~ Shrimad Bhagwat Katha ~ 🏔️ Ooty, Tamil Nadu ~ Shri Gaurdas Ji Maharaj",
  "yt": "mGGUvvizxoM"
 },
 {
  "id": 214,
  "kathaId": 103,
  "name": "Live ~ Day ~ 3 ~ Shrimad Bhagwat Katha ~ 🏔️ Ooty, Tamil Nadu ~ Shri Gaurdas Ji Maharaj",
  "yt": "Iz7N_M-Aue8"
 },
 {
  "id": 213,
  "kathaId": 103,
  "name": "Live ~ Day ~ 2 ~ Shrimad Bhagwat Katha | Ooty, Tamil Nadu ~ Shri Gaurdas Ji Maharaj",
  "yt": "CP0CK1HoOnw"
 },
 {
  "id": 212,
  "kathaId": 103,
  "name": "Live ~ Day ~ 1 ~ Shrimad Bhagwat Katha | Ooty, Tamil Nadu ~ Shri Gaurdas Ji Maharaj",
  "yt": "maeMpbQILyU"
 },
 {
  "id": 211,
  "kathaId": 102,
  "name": "Live || Day-2 || 🌸 Shri Bhaktmal Katha (श्री भक्तमाल कथा)🌸 || Bangalore || Shri Gaurdas Ji Maharaj",
  "yt": "_Z27n41zRSU"
 },
 {
  "id": 210,
  "kathaId": 102,
  "name": "Live || Day-1 || 🌸 Shri Bhaktmal Katha (श्री भक्तमाल कथा)🌸 || Bangalore || Shri Gaurdas Ji Maharaj",
  "yt": "9OIynY9tQoQ"
 },
 {
  "id": 209,
  "kathaId": 121,
  "name": "Live || ठाकुर जी स्थापना महोत्सव || गाजियाबाद || परम पूज्य श्री गौरदास जी महाराज",
  "yt": "faFJVRTjd_E"
 },
 {
  "id": 208,
  "kathaId": 101,
  "name": "श्री राधा माधव नौका विहार महोत्सव एवं ठाकुर जी का पाटोत्सव | Shri Gaurdas Ji Maharaj",
  "yt": "kRl_xS96ypY"
 },
 {
  "id": 207,
  "kathaId": 100,
  "name": "Live ~ Shri Radha Madhav Van Vihar Mahotsav🌸 || 16 June 2025 || Ghaziabad || Shri Gaurdas Ji Maharaj",
  "yt": "zp7058YmE_g"
 },
 {
  "id": 206,
  "kathaId": 99,
  "name": "Live ~ Day ~ 7 ~ Shrimad Bhagwat Katha ~ Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "Av6AI1wyPwk"
 },
 {
  "id": 205,
  "kathaId": 99,
  "name": "Live ~ Day ~ 6 ~ Shrimad Bhagwat Katha ~ Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "7axz6KTe5lI"
 },
 {
  "id": 204,
  "kathaId": 99,
  "name": "Live ~ Day ~ 5 ~ Shrimad Bhagwat Katha ~ Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "lc-fSxDs9Y0"
 },
 {
  "id": 203,
  "kathaId": 99,
  "name": "Live ~ Day ~ 4 ~ Shrimad Bhagwat Katha ~ Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "k_O9RXVikDw"
 },
 {
  "id": 202,
  "kathaId": 99,
  "name": "Live || Shri Jagannath SnanYatra Mahotsav || Vrindavan || Pujya Shri Gaurdas Ji Mahotsav",
  "yt": "xFW21zMFQeA"
 },
 {
  "id": 201,
  "kathaId": 99,
  "name": "Live ~ Day ~ 2 ~ Shrimad Bhagwat Katha ~ Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "9-C8tuUb8dU"
 },
 {
  "id": 200,
  "kathaId": 99,
  "name": "Live ~ Day ~ 1 ~ Shrimad Bhagwat Katha (श्रीमद भागवत कथा)~Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "1j7JD6b4pU0"
 },
 {
  "id": 199,
  "kathaId": 74,
  "name": "Live ~ Day ~ 7 ~ 1500th Katha, 🥳🪷🦚of Pujya Shri Gaurdas Ji Maharaj ~ ( Nirjala Ekadashi ), Haridwar",
  "yt": "9G8De7740hw"
 },
 {
  "id": 198,
  "kathaId": 74,
  "name": "Live ~ Day ~ 6 ~ 1500th Katha, 🥳🪷🦚of Pujya Shri Gaurdas Ji Maharaj ~ Jairam Ashram ,Haridwar",
  "yt": "R8EYjh5yjkE"
 },
 {
  "id": 197,
  "kathaId": 74,
  "name": "Live ~ Day ~ 5 ~ 1500th Katha, 🥳🪷🦚of Pujya Shri Gaurdas Ji Maharaj ~ (Ganga Dusshera ) Haridwar",
  "yt": "N-u6yyInqIk"
 },
 {
  "id": 196,
  "kathaId": 74,
  "name": "Live ~ Day ~ 4 ~ 1500th Katha, 🥳🪷🦚of Pujya Shri Gaurdas Ji Maharaj ~ Jairam Ashram ,Haridwar",
  "yt": "UKxEGIEud8s"
 },
 {
  "id": 195,
  "kathaId": 74,
  "name": "Live ~ Day ~ 3 ~ 1500th Katha, 🥳🪷🦚of Pujya Shri Gaurdas Ji Maharaj ~ Jairam Ashram ,Haridwar",
  "yt": "ViXCljz4rFM"
 },
 {
  "id": 194,
  "kathaId": 74,
  "name": "Live ~ Day ~ 2 ~ 1500th Katha, 🥳🪷🦚of Pujya Shri Gaurdas Ji Maharaj ~ Jairam Ashram ,Haridwar",
  "yt": "r2iGjg0Nlkg"
 },
 {
  "id": 193,
  "kathaId": 74,
  "name": "Live ~ Day ~ 1~~ 1500th Katha🥳🪷🦚of Pujya Shri Gaurdas Ji Maharaj ~Jairam Ashram ,Haridwar",
  "yt": "HYnC9UCwo_8"
 },
 {
  "id": 190,
  "kathaId": 98,
  "name": "Live ~ Shri Yamuna Ji Chunri Mahotsav ~ RasMandal ,Vrindavan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "NRCmJL5Ql4w"
 },
 {
  "id": 189,
  "kathaId": 97,
  "name": "Live ~ Shri Radha Madhav Jal Vihar Mahotsav By Pujya Shri Gaurdas Ji Maharaj ~ Muzaffarnagar",
  "yt": "_vw4_PDz7Gk"
 },
 {
  "id": 181,
  "kathaId": 96,
  "name": "Day-2 | Shri Gaur Katha(श्री गौर कथा) | East Medinipur, West Bengal | Shri Gaurdas Ji Maharaj",
  "yt": "r2lnrAUJCLM"
 },
 {
  "id": 180,
  "kathaId": 96,
  "name": "Day-1 | Shri Gaur Katha(श्री गौर कथा) | East Medinipur, West Bengal | Shri Gaurdas Ji Maharaj",
  "yt": "gYytFvylZu0"
 },
 {
  "id": 179,
  "kathaId": 95,
  "name": "Day-3 || Shri Bhaktmaal Katha | Baba Bal Ji Ashram , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "BgVWNwHLrkA"
 },
 {
  "id": 178,
  "kathaId": 95,
  "name": "Day-2 || Shri Bhaktmaal Katha | Shri Neel Madhav Dham, Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "lUkkVNq-qdA"
 },
 {
  "id": 177,
  "kathaId": 95,
  "name": "Day-1 || Shri Bhaktmaal Katha | Shri Neel Madhav Dham, Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "woAV2QL9JUI"
 },
 {
  "id": 176,
  "kathaId": 94,
  "name": "Nagar Kirtan(नगर कीर्तन)| गाज़ियाबाद ~~ Shri Gaurdas Ji Maharaj",
  "yt": "ZsKEKhlxjAU"
 },
 {
  "id": 175,
  "kathaId": 93,
  "name": "नवीन गृह प्रवेश महोत्सव 🏠~~ सेवा नगर , गाज़ियाबाद ~~ परम पूज्य श्री गौरदास जी महाराज",
  "yt": "nTDlbqaHfAU"
 },
 {
  "id": 174,
  "kathaId": 92,
  "name": "श्री फूल कुञ्ज महोत्सव | Shri Phool Kunj Mahotsav | Pujya Shri Gaurdas Ji Maharaj",
  "yt": "2nRJ36zunzA"
 },
 {
  "id": 173,
  "kathaId": 91,
  "name": "स्वामी श्री हरिदास जी चरित्र | Swami Shri Haridas JI Charitra | Pujya Shri Gaurdas Ji Maharaj",
  "yt": "ijiRd4PYTYM"
 },
 {
  "id": 172,
  "kathaId": 90,
  "name": "Day ~ 6 ~ Shree Radha Katha ~ ( ShriVas Pandith Ji Avirbhav Mahotsav ) Kanpur",
  "yt": "jmSxOvecGOE"
 },
 {
  "id": 171,
  "kathaId": 90,
  "name": "Day ~ 5 ~ Shree Radha Katha ~ Shri Jwala Devi Dharmarth Bhavan, Doodh Bangla, Kanpur",
  "yt": "Zb1s_yu3T6k"
 },
 {
  "id": 170,
  "kathaId": 90,
  "name": "Day ~ 4 ~ Shree Radha Katha ~ Shri Jwala Devi Dharmarth Bhavan, Doodh Bangla, Kanpur",
  "yt": "H8bA6UWuvIw"
 },
 {
  "id": 169,
  "kathaId": 90,
  "name": "Day ~ 3 ~ Shree Radha Katha ~ Shri Jwala Devi Dharmarth Bhavan, Doodh Bangla, Kanpur",
  "yt": "UjzU9pBusvo"
 },
 {
  "id": 168,
  "kathaId": 90,
  "name": "Day ~ 2 ~ Shree Radha Katha ~ Shri Jwala Devi Dharmarth Bhavan, Doodh Bangla, Kanpur",
  "yt": "O8kI1MRMCaw"
 },
 {
  "id": 167,
  "kathaId": 90,
  "name": "Day ~ 1 ~ Shree Radha Katha ~ Shri Jwala Devi Dharmarth Bhavan, Doodh Bangla, Kanpur",
  "yt": "JwDdXAgYpq4"
 },
 {
  "id": 166,
  "kathaId": 73,
  "name": "Day ~ 7 ~ Shrimad Bhagwat Katha ~ Sarvkamna Poorti Mahadev Mandir,Bhopal(M.P)",
  "yt": "fO6t1tI06S8"
 },
 {
  "id": 165,
  "kathaId": 73,
  "name": "Day ~ 6 ~ Shrimad Bhagwat Katha ~ Sarvkamna Poorti Mahadev Mandir,Bhopal(M.P)",
  "yt": "gZz89ousbxI"
 },
 {
  "id": 164,
  "kathaId": 73,
  "name": "Day ~ 5 ~ Shrimad Bhagwat Katha ~ Sarvkamna Poorti Mahadev Mandir,Bhopal(M.P)",
  "yt": "_BrTGPY5cuA"
 },
 {
  "id": 163,
  "kathaId": 73,
  "name": "Day ~ 4 ~ Shrimad Bhagwat Katha ~ Sarvkamna Poorti Mahadev Mandir,Bhopal(M.P)",
  "yt": "GJeq3BMa5lE"
 },
 {
  "id": 162,
  "kathaId": 73,
  "name": "Day ~ 3 ~ Shrimad Bhagwat Katha ~ Sarvkamna Poorti Mahadev Mandir,Bhopal(M.P)",
  "yt": "W4d6UfDH4Ag"
 },
 {
  "id": 161,
  "kathaId": 73,
  "name": "Day ~ 2 ~ Shrimad Bhagwat Katha ~ Sarvkamna Poorti Mahadev Mandir,Bhopal(M.P)",
  "yt": "-aG8WHWA1Co"
 },
 {
  "id": 160,
  "kathaId": 73,
  "name": "Day~1~Shrimad Bhagwat Katha~Sarvkamna Poorti Mahadev Mandir,Bhopal(M.P)~Shri Gaurdas Ji Maharaj",
  "yt": "aihebiJEPXQ"
 },
 {
  "id": 159,
  "kathaId": 72,
  "name": "Day ~ 7 ~ Shrimad Bhagwat Katha ~ Club House, Kandivali East , Mumbai ~ Shri Gaurdas Ji Maharaj",
  "yt": "MXAQAsLTZE4"
 },
 {
  "id": 158,
  "kathaId": 72,
  "name": "Day ~ 6 ~ Shrimad Bhagwat Katha ~ Club House, Kandivali East , Mumbai ~ Shri Gaurdas Ji Maharaj",
  "yt": "Gc7eXgRWT_U"
 },
 {
  "id": 157,
  "kathaId": 72,
  "name": "Day ~ 5 ~ Shrimad Bhagwat Katha ~ Club House, Kandivali East , Mumbai ~ Shri Gaurdas Ji Maharaj",
  "yt": "zLcV4YhYPZI"
 },
 {
  "id": 156,
  "kathaId": 72,
  "name": "Day ~ 4 ~ Shrimad Bhagwat Katha ~ Club House, Kandivali East , Mumbai ~ Shri Gaurdas Ji Maharaj",
  "yt": "3P_oA8bx34Q"
 },
 {
  "id": 155,
  "kathaId": 72,
  "name": "Day ~ 3 ~ Shrimad Bhagwat Katha ~ Club House, Kandivali East , Mumbai ~ Shri Gaurdas Ji",
  "yt": "fMWPvwV9yvk"
 },
 {
  "id": 154,
  "kathaId": 72,
  "name": "Day ~ 2 ~ Shrimad Bhagwat Katha ~ Club House, Kandivali East , Mumbai ~ Shri Gaurdas Ji",
  "yt": "awujETOMLiU"
 },
 {
  "id": 153,
  "kathaId": 72,
  "name": "Day ~1 ~ Shrimad Bhagwat Katha ~ Club House, Kandivali East , Mumbai ~ Shri Gaurdas Ji",
  "yt": "WMm2wRshNxc"
 },
 {
  "id": 152,
  "kathaId": 89,
  "name": "Vaishnav Sadhana Evam Naam Prachaar Mahima | Sultanpuri, Delhi | Shri Gaurdas Ji Maharaj",
  "yt": "8oYno-5E_Do"
 },
 {
  "id": 151,
  "kathaId": 88,
  "name": "Day - 7 | Shrimad Bhagwat Katha | Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "JbOb3DMXRq8"
 },
 {
  "id": 150,
  "kathaId": 88,
  "name": "Day - 6 || Shrimad Bhagwat Katha (Akshaya Tritiya ) || Shri Gaur Kripa Dham , Vrindavan ||",
  "yt": "yqBu37esEt8"
 },
 {
  "id": 149,
  "kathaId": 88,
  "name": "Day - 5 | Shrimad Bhagwat Katha | Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "y-EybOxJJP8"
 },
 {
  "id": 148,
  "kathaId": 88,
  "name": "Day -4 | Shrimad Bhagwat Katha | Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "li7ZPIageJY"
 },
 {
  "id": 147,
  "kathaId": 88,
  "name": "Day -3 | Shrimad Bhagwat Katha | Shri gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "elAQUMN5F_U"
 },
 {
  "id": 146,
  "kathaId": 88,
  "name": "Day -2 | Shrimad Bhagwat Katha | Shri Gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "9YtrJJyvvFM"
 },
 {
  "id": 145,
  "kathaId": 88,
  "name": "Day -1 | Shrimad Bhagwat Katha | Shri gaur Kripa Dham , Vrindavan | Shri Gaurdas Ji Maharaj",
  "yt": "nJdx9okhoiw"
 },
 {
  "id": 144,
  "kathaId": 87,
  "name": "Shrimad Vallabhacharya Charitra || Vrindavan || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "DKE8xt8y5II"
 },
 {
  "id": 143,
  "kathaId": 86,
  "name": "Day - 9 || Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "21QoO69I94A"
 },
 {
  "id": 142,
  "kathaId": 86,
  "name": "Day -8 || Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "fyJdA2HobMo"
 },
 {
  "id": 141,
  "kathaId": 86,
  "name": "Day -7 || Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "r1ZS8O8Oqsg"
 },
 {
  "id": 140,
  "kathaId": 86,
  "name": "Day - 6 || Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "2fl8FY1nR20"
 },
 {
  "id": 139,
  "kathaId": 86,
  "name": "Day -5 || Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "AROH1rbQIg4"
 },
 {
  "id": 138,
  "kathaId": 86,
  "name": "Day -4 || Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "8Yc_lpfzlbs"
 },
 {
  "id": 137,
  "kathaId": 86,
  "name": "Day - 3 || Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "ADpc7lVfILY"
 },
 {
  "id": 136,
  "kathaId": 86,
  "name": "Day -2 || Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "8vRvA4VCz5w"
 },
 {
  "id": 135,
  "kathaId": 86,
  "name": "Day -1|| Shri Gaurang Leela Chintan ✨|| Geeta Bhavan No. 3 , Rishikesh || Shri Gaurdas Ji Maharaj",
  "yt": "A4lIHjzKw3U"
 },
 {
  "id": 134,
  "kathaId": 85,
  "name": "The Appearance Festival of Shrimad Radharaman Charan Das Dev (Bade Baba Ji Maharaj ) ~ Delhi",
  "yt": "bRHDU4ZVqW4"
 },
 {
  "id": 133,
  "kathaId": 84,
  "name": "Shri Radha Madhav Vivah Mahotsav(Byahula Utsav) | Ghaziabad | Shri Gaurdas Ji Maharaj",
  "yt": "eGyxvod-7P0"
 },
 {
  "id": 132,
  "kathaId": 83,
  "name": "Shri Sunderkand Path | Shri Nilanchal Dham , Ghaziabad | Pujya Shri Gaurdas Ji Maharaj",
  "yt": "TwTTZQuQ_fY"
 },
 {
  "id": 131,
  "kathaId": 82,
  "name": "Live~ Satsang & Sankirtan(सत्संग एवं संकीर्तन) || Ghaziabad || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "hWNotqQKmYQ"
 },
 {
  "id": 130,
  "kathaId": 81,
  "name": "Live ~ Day ~ 2 ~ Kokil Sai Ji Charitra ~ Sri Sukh Niwas Satsang Bhavan , Vrindavan ~ Shri Gaurdas Ji",
  "yt": "HplM_SYZQhI"
 },
 {
  "id": 129,
  "kathaId": 81,
  "name": "Live ~ Day ~ 1 ~ Kokil Sai Ji Charitra ~ Sri Sukh Niwas Satsang Bhavan , Vrindavan ~ Shri Gaurdas Ji",
  "yt": "ffN34ZtVozM"
 },
 {
  "id": 128,
  "kathaId": 80,
  "name": "Live | Shri Radha Madhav Vivah Mahotsav (Kamda Ekadashi ) |Shri Gaurdas Ji Maharaj | Ghaziabad",
  "yt": "nwwPog742To"
 },
 {
  "id": 127,
  "kathaId": 79,
  "name": "Live ~ Shri Shabri Charitra(श्री शबरी चरित्र) ~ Mukerian, Punjab ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "VpT-BrHB93w"
 },
 {
  "id": 126,
  "kathaId": 71,
  "name": "Live ~ Day ~ 4 ~ Shri Ram Navmi Mahotsav ~ Mukerian, Punjab ~ Shri Gaurdas Ji Maharaj",
  "yt": "aY_6q_QfFdM"
 },
 {
  "id": 125,
  "kathaId": 71,
  "name": "Live ~ Day ~3 ~ Shri Namdev Ji Charitra ~ Mukerian, Punjab ~ Shri Gaurdas Ji Maharaj",
  "yt": "OaUs_JdX6Ak"
 },
 {
  "id": 124,
  "kathaId": 71,
  "name": "Live ~ Day ~2 ~ Shri Namdev Ji Charitra ~ Mukerian, Punjab ~ Shri Gaurdas Ji Mahara",
  "yt": "DQdKuxFacAg"
 },
 {
  "id": 123,
  "kathaId": 71,
  "name": "Live ~ Day ~1 ~ Shri Namdev Ji Charitra ~ Mukerian, Punjab ~ Shri Gaurdas Ji Maharaj",
  "yt": "LUwL8VBC9zo"
 },
 {
  "id": 122,
  "kathaId": 78,
  "name": "Live || Day-5 || Shri Bhaktmaal Katha || Bhiwani, Haryana || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "NaDWorTK3zI"
 },
 {
  "id": 121,
  "kathaId": 78,
  "name": "Live || Day-4 || Shri Bhaktmaal Katha || Bhiwani, Haryana || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "Z-tWGmMHv1A"
 },
 {
  "id": 120,
  "kathaId": 78,
  "name": "Live || Day-3 || Shri Bhaktmaal Katha || Bhiwani, Haryana || Pujya Shri Gaurdas Ji Mahara",
  "yt": "R5XlODJGFGY"
 },
 {
  "id": 119,
  "kathaId": 78,
  "name": "Live || Day-2 || Shri Bhaktmaal Katha || Bhiwani, Haryana || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "wssJEaTn9OY"
 },
 {
  "id": 118,
  "kathaId": 78,
  "name": "Live || Day-1 || Shri Bhaktmaal Katha || Bhiwani, Haryana || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "gs6RQN-soOE"
 },
 {
  "id": 117,
  "kathaId": 70,
  "name": "Live || Day-4 || Shri Radha Ras Sudha Nidhi || Hardoi, Uttar Pradesh | Shri Gaurdas Ji Maharaj",
  "yt": "iH2nnhRt7Oc"
 },
 {
  "id": 116,
  "kathaId": 70,
  "name": "Live || Day-3 || Shri Radha Ras Sudha Nidhi || Hardoi, Uttar Pradesh | Shri Gaurdas Ji Maharaj",
  "yt": "566e10F3v5w"
 },
 {
  "id": 115,
  "kathaId": 70,
  "name": "Live || Day-2 || Shri Radha Ras Sudha Nidhi || Hardoi, Uttar Pradesh | Shri Gaurdas Ji Maharaj",
  "yt": "6WX1-JmdpxU"
 },
 {
  "id": 114,
  "kathaId": 70,
  "name": "Live || Day-1 || Shri Radha Ras Sudha Nidhi || Hardoi, Uttar Pradesh | Shri Gaurdas Ji Maharaj",
  "yt": "Kr6b_eadLi4"
 },
 {
  "id": 113,
  "kathaId": 77,
  "name": "Live || Day - 7 || Shri Ram katha (Ayodha Kand ) || Chitrakoot Dham | Shri Gaurdas Ji Maharaj",
  "yt": "cumVuRqzlmo"
 },
 {
  "id": 112,
  "kathaId": 77,
  "name": "Live || Day - 6 || Shri Ram katha (Ayodha Kand ) || Chitrakoot Dham | Shri Gaurdas Ji Maharaj",
  "yt": "T4rHOKUX2Og"
 },
 {
  "id": 111,
  "kathaId": 77,
  "name": "Live || Day - 5 || Shri Ram katha (Ayodha Kand ) || Chitrakoot Dham | Shri Gaurdas Ji Maharaj",
  "yt": "JdYqBOKgtjo"
 },
 {
  "id": 110,
  "kathaId": 77,
  "name": "Live || Day - 4 || Shri Ram katha (Ayodha Kand ) || Chitrakoot Dham | Shri Gaurdas Ji Maharaj",
  "yt": "UGCpJPUTYII"
 },
 {
  "id": 109,
  "kathaId": 77,
  "name": "Live || Day - 3 || Shri Ram katha (Ayodha Kand ) || Chitrakoot Dham | Shri Gaurdas Ji Maharaj",
  "yt": "hyYe-AB6NRY"
 },
 {
  "id": 108,
  "kathaId": 77,
  "name": "Live || Day - 2 || Shri Ram katha (Ayodha Kand ) || Chitrakoot Dham | Shri Gaurdas Ji Maharaj",
  "yt": "LJRgj27mkUI"
 },
 {
  "id": 107,
  "kathaId": 77,
  "name": "Live || Day - 1 || Shri Ram katha (Ayodha Kand ) || Chitrakoot Dham | Shri Gaurdas Ji Maharaj",
  "yt": "jolv3O-x34I"
 },
 {
  "id": 106,
  "kathaId": 76,
  "name": "Live || Day- 9 || Shri Bhaktmaal Katha || Agrasen Bhawan, Hisar, Haryana || Shri Gaurdas Ji Maharaj",
  "yt": "RDjVNyi72Yc"
 },
 {
  "id": 105,
  "kathaId": 76,
  "name": "Live || Day-8 || Shri Bhaktmaal Katha || Agrasen Bhawan, Hisar, Haryana || Shri Gaurdas Ji Maharaj",
  "yt": "v1HlIfG71l4"
 },
 {
  "id": 104,
  "kathaId": 76,
  "name": "Live || Day-7 || Shri Bhaktmaal Katha || Agrasen Bhawan, Hisar, Haryana || Shri Gaurdas Ji Maharaj",
  "yt": "_mlHdgBpwdQ"
 },
 {
  "id": 103,
  "kathaId": 76,
  "name": "Live || Day-6 || Shri Bhaktmaal Katha (Shri Sadgurudev Tirobhav Mahotsav ) || Sri Gaurdas Ji Maharaj",
  "yt": "rCynXhVFBIQ"
 },
 {
  "id": 102,
  "kathaId": 76,
  "name": "Live || Day-5 || Shri Bhaktmaal Katha (Shri Advaita Sptami ) || Haryana || Shri Gaurdas Ji Maharaj",
  "yt": "717B4W-BhEs"
 },
 {
  "id": 101,
  "kathaId": 76,
  "name": "Live || Day-4 || Shri Bhaktmaal Katha || Agrasen Bhawan, Hisar, Haryana || Shri Gaurdas Ji Maharaj",
  "yt": "CAlly1TqhuY"
 },
 {
  "id": 100,
  "kathaId": 76,
  "name": "Day-3 || Shri Bhaktmaal Katha || Agrasen Bhawan, Hisar, Haryana || Shri Gaurdas Ji Maharaj",
  "yt": "G1q_44fF_jI"
 },
 {
  "id": 99,
  "kathaId": 76,
  "name": "Day-2 || Shri Bhaktmaal Katha || Agrasen Bhawan, Hisar, Haryana || Shri Gaurdas Ji Maharaj",
  "yt": "O3hTqh2kKGo"
 },
 {
  "id": 98,
  "kathaId": 76,
  "name": "Day-1 | Shri Bhaktmaal Katha | Agrasen Bhawan, Hisar, Haryana | Pujya Shri Gaurdas Ji Maharaj",
  "yt": "IyVrX2sN2rs"
 },
 {
  "id": 97,
  "kathaId": 60,
  "name": "Nani Bai Ro Mayra (Narsi ka Bhat) || Day -5 || Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "_jiRluu0yBM"
 },
 {
  "id": 96,
  "kathaId": 60,
  "name": "Nani Bai Ro Mayra (Narsi ka Bhat) || Day -4 || Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "HIAcaryKQRc"
 },
 {
  "id": 95,
  "kathaId": 60,
  "name": "Nani Bai Ro Mayra (Narsi ka Bhat) || Day -3 || Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "qoNhJLAqIN4"
 },
 {
  "id": 94,
  "kathaId": 60,
  "name": "Nani Bai Ro Mayra (Narsi ka Bhat) || Day -2 || Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "CefedBJPMxI"
 },
 {
  "id": 93,
  "kathaId": 60,
  "name": "Nani Bai Ro Mayra (Narsi ka Bhat) || Day -1|| Bareilly || Shri Gaurdas Ji Maharaj",
  "yt": "GL4T6V0rEVA"
 },
 {
  "id": 92,
  "kathaId": 58,
  "name": "Day - 7 || Shri Gaur Katha ( Nilachal Leela ) || KolKata || Shri Gaurdas Ji Maharaj",
  "yt": "Uphk8SFo_7c"
 },
 {
  "id": 91,
  "kathaId": 58,
  "name": "Day - 6 || Shri Gaur Katha ( Nilachal Leela ) || KolKata || Shri Gaurdas Ji Maharaj",
  "yt": "PNYzHuHZyF4"
 },
 {
  "id": 90,
  "kathaId": 58,
  "name": "Day - 5 || Shri Gaur Katha ( Nilachal Leela ) || KolKata || Shri Gaurdas Ji Maharaj",
  "yt": "RBtwoeZvsHk"
 },
 {
  "id": 89,
  "kathaId": 58,
  "name": "Day - 4 || Shri Gaur Katha ( Nilachal Leela ) || KolKata || Shri Gaurdas Ji Mahara",
  "yt": "FJWr9jgykp4"
 },
 {
  "id": 88,
  "kathaId": 58,
  "name": "Day - 3 || Shri Gaur Katha ( Nilachal Leela ) || KolKata || Shri Gaurdas Ji Maharaj",
  "yt": "Gykn0RUvr5o"
 },
 {
  "id": 87,
  "kathaId": 58,
  "name": "Day-2 || Shri Gaur Katha ( Nilachal Leela ) || KolKata || Shri Gaurdas Ji Maharaj",
  "yt": "noguUA0qrEw"
 },
 {
  "id": 86,
  "kathaId": 58,
  "name": "Day-1 || Shri Gaur Katha ( Nilachal Leela ) || KolKata || Shri Gaurdas Ji Maharaj",
  "yt": "wTR8l_9gWvQ"
 },
 {
  "id": 85,
  "kathaId": 61,
  "name": "Shri Guru Mahima Satsang Evam Sankirtan || Ghantaghar, Ghaziabad || Shri Gaurdas Ji Maharaj",
  "yt": "AWVOqyH6eNY"
 },
 {
  "id": 84,
  "kathaId": 62,
  "name": "Shri Radha Madhav Vivah Mahotsav || Shrinath Banquet , Ghaziabad || Shri Gaurdas Ji Maharaj",
  "yt": "6v6Uca9GV28"
 },
 {
  "id": 83,
  "kathaId": 64,
  "name": "Live ~~ Shri Nityanand Trayodashi Mahotsav 2025 ~~ Vrindavan ~~ Pujya Sri Gaurdas Ji Mahara",
  "yt": "BP8jYQfzbcQ"
 },
 {
  "id": 82,
  "kathaId": 65,
  "name": "Live ~Day-2~ Shri Nityanand Mahima Katha ~ Shringaravat Mandir ,Vrindavan ~ Shri Gaurdas Ji Maharaj",
  "yt": "Fe2YldiudjE"
 },
 {
  "id": 81,
  "kathaId": 65,
  "name": "Live ~Day-1~ Shri Nityanand Mahima Katha ~ Shringaravat Mandir ,Vrindavan ~ Shri Gaurdas Ji Maharaj",
  "yt": "ImVN72AThEg"
 },
 {
  "id": 80,
  "kathaId": 69,
  "name": "Live ~ Day ~ 8 ~Shri Shiv Mahapuran Katha ~Shri Ram Park , Ludhiana ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "MNycEanhots"
 },
 {
  "id": 79,
  "kathaId": 69,
  "name": "Live ~ Day ~ 7 ~Shri Shiv Mahapuran Katha ~Shri Ram Park , Ludhiana ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "xDR9TcMwJHE"
 },
 {
  "id": 78,
  "kathaId": 69,
  "name": "Live ~ Day ~ 6 ~Shri Shiv Mahapuran Katha ~Shri Ram Park , Ludhiana ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "I4PSqRoBQDc"
 },
 {
  "id": 77,
  "kathaId": 69,
  "name": "Live ~ Day ~ 5 ~Shri Shiv Mahapuran Katha ~Shri Ram Park , Ludhiana ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "ru2vJP8rSa8"
 },
 {
  "id": 76,
  "kathaId": 69,
  "name": "Live ~ Day ~ 4 ~Shri Shiv Mahapuran Katha ~Shri Ram Park , Ludhiana ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "KGpMOHq2Fkg"
 },
 {
  "id": 75,
  "kathaId": 69,
  "name": "Live ~ Day ~ 3 ~Shri Shiv Mahapuran Katha ~Shri Ram Park , Ludhiana ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "xzJE2iuQhdM"
 },
 {
  "id": 74,
  "kathaId": 69,
  "name": "Live ~ Day ~ 2 ~Shri Shiv Mahapuran Katha ~Shri Ram Park , Ludhiana ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "0sjgT-g2FSE"
 },
 {
  "id": 73,
  "kathaId": 69,
  "name": "Live ~ Day ~1 ~Shri Shiv Mahapuran Katha ~Shri Ram Park , Ludhiana ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "arlEgvMXCZc"
 },
 {
  "id": 72,
  "kathaId": 3,
  "name": "Day - 7 || Shrimad Bhagwat Katha || Rukmani Vihar, Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "A8PjP8Xbgho"
 },
 {
  "id": 71,
  "kathaId": 3,
  "name": "Day - 6 || Shrimad Bhagwat Katha || Rukmani Vihar, Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "hh4DkcyWOHA"
 },
 {
  "id": 70,
  "kathaId": 3,
  "name": "Day - 5 || Shrimad Bhagwat Katha || Rukmani Vihar, Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "sRARsKzxxpM"
 },
 {
  "id": 69,
  "kathaId": 3,
  "name": "Day - 4 || Shrimad Bhagwat Katha || Rukmani Vihar, Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "TKqDMUARsCc"
 },
 {
  "id": 68,
  "kathaId": 3,
  "name": "Day -3 || Shrimad Bhagwat Katha || Rukmani Vihar, Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "gKnhr-km2qw"
 },
 {
  "id": 67,
  "kathaId": 3,
  "name": "Day -2 || Shrimad Bhagwat Katha || Rukmani Vihar, Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "LU0PCudgrhU"
 },
 {
  "id": 66,
  "kathaId": 3,
  "name": "Day -1 || Shrimad Bhagwat Katha || Rukmani Vihar, Vrindavan || Shri Gaurdas Ji Maharaj",
  "yt": "NX2FXCVtHwY"
 },
 {
  "id": 65,
  "kathaId": 59,
  "name": "Day-7 || Shrimad Bhagwat Katha || Jankapuri, Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "yBveMre1v5k"
 },
 {
  "id": 64,
  "kathaId": 59,
  "name": "Day-6 || Shrimad Bhagwat Katha || Jankapuri, Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "oIufcIYPsL4"
 },
 {
  "id": 63,
  "kathaId": 59,
  "name": "Day-5 || Shrimad Bhagwat Katha || Jankapuri, Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "IJOfM-lIQdY"
 },
 {
  "id": 62,
  "kathaId": 59,
  "name": "Day-4 || Shrimad Bhagwat Katha || Jankapuri, Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "8Mmh3IJLU7E"
 },
 {
  "id": 61,
  "kathaId": 59,
  "name": "Day-3 || Shrimad Bhagwat Katha || Jankapuri, Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "Dk6zVlR20Lw"
 },
 {
  "id": 60,
  "kathaId": 59,
  "name": "Day-2 || Shrimad Bhagwat Katha || Jankapuri, Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "CwjYdgh4ZPY"
 },
 {
  "id": 59,
  "kathaId": 59,
  "name": "Day-1 || Shrimad Bhagwat Katha || Jankapuri, Delhi || Shri Gaurdas Ji Maharaj",
  "yt": "FILBJm0iOcg"
 },
 {
  "id": 58,
  "kathaId": 30,
  "name": "Day-7 || Shrimad Bhagwat Katha || Maheshwari Bhawan, Surat || Shri Gaurdas Ji Maharaj",
  "yt": "39YnypOHQlM"
 },
 {
  "id": 57,
  "kathaId": 30,
  "name": "Day-6 || Shrimad Bhagwat Katha || Maheshwari Bhawan, Surat || Shri Gaurdas Ji Maharaj",
  "yt": "a4hAScXL0vM"
 },
 {
  "id": 56,
  "kathaId": 30,
  "name": "Day-5 || Shrimad Bhagwat Katha || Maheshwari Bhawan, Surat || Shri Gaurdas Ji Maharaj",
  "yt": "p_sKni7oYhs"
 },
 {
  "id": 55,
  "kathaId": 30,
  "name": "Day-4 || Shrimad Bhagwat Katha || Maheshwari Bhawan, Surat || Shri Gaurdas Ji Maharaj",
  "yt": "335sBD4ZzxI"
 },
 {
  "id": 54,
  "kathaId": 30,
  "name": "Day-3 || Shrimad Bhagwat Katha || Maheshwari Bhawan, Surat || Shri Gaurdas Ji Maharaj",
  "yt": "A4i7jtnuL6M"
 },
 {
  "id": 53,
  "kathaId": 30,
  "name": "Day-2 || Shrimad Bhagwat Katha || Maheshwari Bhawan, Surat || Shri Gaurdas Ji Maharaj",
  "yt": "kvt6I7AbaeI"
 },
 {
  "id": 52,
  "kathaId": 30,
  "name": "Day-1 || Shrimad Bhagwat Katha || Maheshwari Bhawan, Surat || Shri Gaurdas Ji Maharaj",
  "yt": "dgr24QhqkHU"
 },
 {
  "id": 51,
  "kathaId": 25,
  "name": "Day - 7 || Shrimad Bhagwat Katha || 1/2 Rajendra Nagar, Sahibabad || Shri Gaurdas Ji Maharaj",
  "yt": "KqXTm2ShC9c"
 },
 {
  "id": 50,
  "kathaId": 25,
  "name": "Day - 6 || Shrimad Bhagwat Katha || 1/2 Rajendra Nagar, Sahibabad || Shri Gaurdas Ji Maharaj",
  "yt": "ZIQC_lEFqh0"
 },
 {
  "id": 49,
  "kathaId": 25,
  "name": "Day - 5 || Shrimad Bhagwat Katha || 1/2 Rajendra Nagar, Sahibabad || Shri Gaurdas Ji Maharaj",
  "yt": "J4Gnqlxw0j8"
 },
 {
  "id": 48,
  "kathaId": 25,
  "name": "Day - 4 || Shrimad Bhagwat Katha || 1/2 Rajendra Nagar, Sahibabad || Shri Gaurdas Ji Maharaj",
  "yt": "HCRWdbNOiRo"
 },
 {
  "id": 47,
  "kathaId": 25,
  "name": "Day-3~Shrimad Bhagwat Katha | 1/2 Rajendra Nagar,Sector-2, Sahibabad |Shri Gaurdas Ji Maharaj",
  "yt": "22in0TjxN7E"
 },
 {
  "id": 46,
  "kathaId": 25,
  "name": "Day-2~Shrimad Bhagwat Katha | 1/2 Rajendra Nagar,Sector-2, Sahibabad |Shri Gaurdas Ji Maharaj",
  "yt": "Xyoap1TjCCE"
 },
 {
  "id": 45,
  "kathaId": 25,
  "name": "Day-1~Shrimad Bhagwat Katha | 1/2 Rajendra Nagar,Sector-2, Sahibabad |Shri Gaurdas Ji Maharaj",
  "yt": "2iqE2V6wmHs"
 },
 {
  "id": 44,
  "kathaId": 68,
  "name": "Live || Day -7 || Shrimad Bhagwat Katha || Maheshwari Bhawan , Varanasi || Shri Gaurdas Ji Maharaj",
  "yt": "dfdeD8g4uPQ"
 },
 {
  "id": 43,
  "kathaId": 68,
  "name": "Live || Day -5 || Shrimad Bhagwat Katha (Holi Mahotsav ) || Varanasi || Shri Gaurdas Ji Maharaj",
  "yt": "PhuRiaDCik4"
 },
 {
  "id": 42,
  "kathaId": 68,
  "name": "Live || Day -4 || Shrimad Bhagwat Katha || Maheshwari Bhawan,Varanasi || Shri Gaurdas Ji Maharaj",
  "yt": "jN7bXjriqEE"
 },
 {
  "id": 41,
  "kathaId": 68,
  "name": "Live || Day -3 || Shrimad Bhagwat Katha || Maheshwari Bhawan,Varanasi || Shri Gaurdas Ji Maharaj",
  "yt": "lRnxLyAOTYU"
 },
 {
  "id": 40,
  "kathaId": 68,
  "name": "Live || Day -2 || Shrimad Bhagwat Katha || Maheshwari Bhawan,Varanasi || Shri Gaurdas Ji Maharaj",
  "yt": "Fox_CWc7cHA"
 },
 {
  "id": 39,
  "kathaId": 68,
  "name": "Live || Day -1 || Shrimad Bhagwat Katha || Maheshwari Bhawan,Varanasi || Shri Gaurdas Ji Maharaj",
  "yt": "VdfVp9iiE4Y"
 },
 {
  "id": 38,
  "kathaId": 67,
  "name": "Live || Day - 7 || Shrimad Bhagwat Katha || Shri Gaur Kripa Dham, Vrindavan | Sri Gaurdas Ji Maharaj",
  "yt": "x-I7ZdLKcwo"
 },
 {
  "id": 37,
  "kathaId": 67,
  "name": "Live || Day - 6 || Shrimad Bhagwat Katha || Shri Gaur Kripa Dham, Vrindavan | Sri Gaurdas Ji Maharaj",
  "yt": "ULNrurv9OOQ"
 },
 {
  "id": 36,
  "kathaId": 67,
  "name": "Live || Day - 5 || Shrimad Bhagwat Katha || Shri Gaur Kripa Dham, Vrindavan | Sri Gaurdas Ji Maharaj",
  "yt": "45CDZPSBhYA"
 },
 {
  "id": 35,
  "kathaId": 67,
  "name": "Live || Day -4 || Shrimad Bhagwat Katha || Shri Gaur Kripa Dham, Vrindavan || Sri Gaurdas Ji Maharaj",
  "yt": "wrk68bRD5aA"
 },
 {
  "id": 34,
  "kathaId": 67,
  "name": "Live || Day -3 || Shrimad Bhagwat Katha || Shri Gaur Kripa Dham, Vrindavan || Sri Gaurdas Ji Maharaj",
  "yt": "hKLGNmEQcS0"
 },
 {
  "id": 33,
  "kathaId": 67,
  "name": "Live || Day -2 || Shrimad Bhagwat Katha || Shri Gaur Kripa Dham, Vrindavan || Sri Gaurdas Ji Maharaj",
  "yt": "qtgAqNWq10k"
 },
 {
  "id": 32,
  "kathaId": 48,
  "name": "Sharad (Maharaas) Purnima Mahotsav शरद  पूर्णिमा श्री धाम वृन्दावन",
  "yt": "3OjAyJe2Eeg"
 },
 {
  "id": 31,
  "kathaId": 49,
  "name": "सत्संग एंम संंकीर्तन नांगलोई, दिल्ली",
  "yt": "cR2ynaNu-X8"
 },
 {
  "id": 30,
  "kathaId": 38,
  "name": "Day -6 || Shrimad Bhagwat Katha",
  "yt": "RDF1uRXIxFI"
 },
 {
  "id": 29,
  "kathaId": 48,
  "name": "Sharad (Maharaas) Purnima Mahotsav शरद  पूर्णिमा   Delhi",
  "yt": "_ZanwR8hFmw"
 },
 {
  "id": 28,
  "kathaId": 20,
  "name": "Day 7 - Shri Gaurang Katha (श्री गौरांग कथा)",
  "yt": "4RGiWuh_bnM"
 },
 {
  "id": 27,
  "kathaId": 20,
  "name": "Day 6 - Shri Gaurang Katha (श्री गौरांग कथा)",
  "yt": "5SjtmIBxReM"
 },
 {
  "id": 26,
  "kathaId": 20,
  "name": "Day 5 - Shri Gaurang Katha (श्री गौरांग कथा)",
  "yt": "lZf-_mT9JRo"
 },
 {
  "id": 25,
  "kathaId": 20,
  "name": "Day 4 - Shri Gaurang Katha (श्री गौरांग कथा)",
  "yt": "9dkZzRgDBZo"
 },
 {
  "id": 24,
  "kathaId": 20,
  "name": "Day 3 - Shri Gaurang Katha (श्री गौरांग कथा)",
  "yt": "s_BQ7w2Eej0"
 },
 {
  "id": 23,
  "kathaId": 20,
  "name": "Day 2 - Shri Gaurang Katha (श्री गौरांग कथा)",
  "yt": "sFtjNE7OxLA"
 },
 {
  "id": 22,
  "kathaId": 20,
  "name": "Day 1 - Shri Gaurang Katha (श्री गौरांग कथा)",
  "yt": "_pci2TXUIFY"
 },
 {
  "id": 21,
  "kathaId": 37,
  "name": "Day 9 || Shri Ram Katha (श्री राम कथा)",
  "yt": "Ac_jlfZKmRg"
 },
 {
  "id": 20,
  "kathaId": 37,
  "name": "Day 8 || Shri Ram Katha (श्री राम कथा)",
  "yt": "NPaRajTa9pM"
 },
 {
  "id": 19,
  "kathaId": 37,
  "name": "Day 7 || Shri Ram Katha (श्री राम कथा)",
  "yt": "49E8qWkI8pE"
 },
 {
  "id": 18,
  "kathaId": 37,
  "name": "Day 6 || Shri Ram Katha (श्री राम कथा)",
  "yt": "Dvy7njbIT-k"
 },
 {
  "id": 17,
  "kathaId": 37,
  "name": "Day 5 || Shri Ram Katha (श्री राम कथा)",
  "yt": "gOTqUELfOYo"
 },
 {
  "id": 16,
  "kathaId": 37,
  "name": "Day 4 || Shri Ram Katha (श्री राम कथा)",
  "yt": "VlTLxk7HXWA"
 },
 {
  "id": 15,
  "kathaId": 37,
  "name": "Day 3 || Shri Ram Katha (श्री राम कथा)",
  "yt": "guMB0azqpuE"
 },
 {
  "id": 14,
  "kathaId": 38,
  "name": "Day -5 || Shrimad Bhagwat Katha",
  "yt": "32kBzb0nITE"
 },
 {
  "id": 13,
  "kathaId": 38,
  "name": "Day -4 || Shrimad Bhagwat Katha",
  "yt": "G-mdZZ_TfR0"
 },
 {
  "id": 12,
  "kathaId": 38,
  "name": "Day -3 || Shrimad Bhagwat Katha",
  "yt": "giC8EPJDRf4"
 },
 {
  "id": 11,
  "kathaId": 38,
  "name": "Day -2 || Shrimad Bhagwat Katha",
  "yt": "biSefFtZ1vs"
 },
 {
  "id": 10,
  "kathaId": 38,
  "name": "Day -1 || Shrimad Bhagwat Katha",
  "yt": "LidXhzWdG44"
 },
 {
  "id": 9,
  "kathaId": 51,
  "name": "Day 3 ~ Srila Jiva Goswami Ji Charitra",
  "yt": "-hws86_0RYU"
 },
 {
  "id": 8,
  "kathaId": 51,
  "name": "Day 2 ~ Srila Jiva Goswami Ji Charitra",
  "yt": "vkwp5EtogZ8"
 },
 {
  "id": 7,
  "kathaId": 51,
  "name": "Day 1 ~ Srila Jiva Goswami Ji Charitra",
  "yt": "_057L0ICYF0"
 },
 {
  "id": 6,
  "kathaId": 2,
  "name": "test",
  "yt": "BX6HhNyi6Po"
 },
 {
  "id": 5,
  "kathaId": 37,
  "name": "Day 2 || Shri Ram Katha (श्री राम कथा)",
  "yt": "P2Jo18_7l_k"
 },
 {
  "id": 4,
  "kathaId": 37,
  "name": "Day 1 || Shri Ram Katha (श्री राम कथा)",
  "yt": "--FfLn1-LZ4"
 }
];

export const BHAJANS: Bhajan[] = [
 {
  "id": 264,
  "title": "श्री राधाकुण्ड तीरे विहरत हैं प्यारी प्यारे | स्वरचित भजन | परम पूज्य श्री गौरदास जी महाराज",
  "yt": "rH76SVd0ys4"
 },
 {
  "id": 263,
  "title": "एक प्रेम का पागल आयो है | पानीहाटी आनंद छायो है | परम पूज्य श्री गौरदास जी महाराज #ytviral #bhajan",
  "yt": "_UQA5rz0OOI"
 },
 {
  "id": 262,
  "title": "भगवान भक्त के बस में | भावपूर्ण भजन | परम पूज्य श्री गौरदास जी महाराज | Shri Gaurdas Ji Bhajans #yt",
  "yt": "5_1CJ_im-yY"
 },
 {
  "id": 261,
  "title": "निकुंज में बिराजे घनश्याम, राधे राधे | परम पूज्य श्री गौरदास जी महाराज Shri Gaurdas Ji Bhajans #yt",
  "yt": "xqK5Kc6Rn5o"
 },
 {
  "id": 260,
  "title": "कृष्ण गोविंद गोविंद गोपाल नंदलाल | परम पूज्य श्री गौरदास जी महाराज | Shri Gaurdas Ji Bhajans #yt",
  "yt": "zglpHSNRFxs"
 },
 {
  "id": 259,
  "title": "Ganga Has Come to Liberate the World | Soulful Bhajan | Most Revered Shri Gaurdas Ji Maharaj #ytv...",
  "yt": "rHupiDlGAlw"
 },
 {
  "id": 258,
  "title": "चलो रे मन श्री वृंदावन धाम | परम पूज्य श्री गौरदास जी महाराज | Shri Gaurdas Ji Bhajans #bhajan #yt",
  "yt": "LOGTzPUD8X4"
 },
 {
  "id": 257,
  "title": "गौर हरि जी हमारे घर आए | मधुर गौर भजन | परम पूज्य श्री गौरदास जी महाराज #ytviral #bhajan #yt",
  "yt": "ZgJYkpvIDVE"
 },
 {
  "id": 256,
  "title": "Shyam Sundar Has Come Home | Melodious Bhajan | Most Revered Shri Gaurdas Ji Maharaj #ytviral #bh...",
  "yt": "3KNbsqFNtWk"
 },
 {
  "id": 255,
  "title": "तेरी सांवरी सूरत पे मैं हारीं | श्री गौरदास जी महाराज | कृष्ण भजन",
  "yt": "HTKPxuFOdg4"
 },
 {
  "id": 254,
  "title": "The Beloved Engages in Water Play with the Dear One | Most Revered Shri Gaurdas Ji Maharaj Shri G...",
  "yt": "Byi8RbPPcFc"
 },
 {
  "id": 253,
  "title": "वेणु बजाते हुए किसी ने मेरा श्याम देखा | परम पूज्य श्री गौरदास जी महाराज #ytviral #bhajan #yt",
  "yt": "52B2oHaoaEs"
 },
 {
  "id": 252,
  "title": "महल लाडली का बुहारा करेंगे | पूज्य श्री गौरदास जी महाराज का स्वरचित भजन",
  "yt": "ELVbeQcv7g8"
 },
 {
  "id": 251,
  "title": "Mohini Ekadashi Special | Shri Harinaam Sankirtan| Shri Gaurdas Ji Maharaj",
  "yt": "Q1VguB8A_aQ"
 },
 {
  "id": 250,
  "title": "चलो रे मन वृंदावन की ओर | राधा नंद किशोर भजन | श्री गौरदास जी महाराज",
  "yt": "1-WJvnw83JQ"
 },
 {
  "id": 249,
  "title": "Sita Navami 2026 Bhajan | राम रघुवर की प्राण प्रिया | Shri Gaurdas Ji Maharaj",
  "yt": "Wb69DCWRM2U"
 },
 {
  "id": 248,
  "title": "Meera Bai Bhajan | बाई मीरा के वर गिरधारी | Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "e6nRTjqXAoY"
 },
 {
  "id": 247,
  "title": "Ganga Saptami Bhajan | गंगा जग तारण को आई | पूज्य श्री गौरदास जी महाराज का स्वरचित भजन",
  "yt": "wCbPw71gtaA"
 },
 {
  "id": 246,
  "title": "भक्त श्री सूरदास जी के प्रथम पद - सुनि रे मेने, निर्बल के बल राम",
  "yt": "oMC362Hvlq8"
 },
 {
  "id": 245,
  "title": "बाई मीरा के वर गिरधारी , भली बनी जोड़ी | पूज्य श्री गौरदास जी महाराज",
  "yt": "e6nRTjqXAoY"
 },
 {
  "id": 244,
  "title": "Akshya Tritya Special Bhajan || Dekh Sakhi Shyam Aang Soh Raha Chandan || Shri Gaurdas Ji Maharaj",
  "yt": "c9LvQ2G28y0"
 },
 {
  "id": 243,
  "title": "I am in love with the feet of my Guru | Bhajan by Meera Bai Ji | Pujya Shri Gaurdas Ji Maharaj",
  "yt": "uAObfC7sUII"
 },
 {
  "id": 242,
  "title": "कुंजन माँझ विराजत जोरी भजन | पूज्य श्री गौरदास जी महाराज",
  "yt": "DYJA3aCeMHs"
 },
 {
  "id": 241,
  "title": "Celebration of the divine appearance of Shri Shukdev Ji Maharaj and Shrila Gadadhara Pandit Goswa",
  "yt": "pnPIHUlAKAc"
 },
 {
  "id": 240,
  "title": "दे गर बहियाँ रहे परस्पर चिबुक टटोहे | श्री भगवत रसिक जी का पद",
  "yt": "qmLEzHuLZJM"
 },
 {
  "id": 239,
  "title": "Bade Baba Ji repeatedly gives wheat to the feet | Special Bhajan on the occasion of Avirabhav Diw",
  "yt": "AXQ6bID0ILE"
 },
 {
  "id": 238,
  "title": "Badhai Hai || बड़े बाबा के शुभ जन्मोत्सव पर बधाई भजन #badhai",
  "yt": "iDg13gtXcig"
 },
 {
  "id": 237,
  "title": "भज गौरांग कह गौरांग लह गौरांग नाम रे | पूज्य श्री गौरदास जी महाराज #bhajan",
  "yt": "ifvwZj3FYQs"
 },
 {
  "id": 236,
  "title": "मेरो मन नंदलाल सो मान्यो | अष्टछाप श्री परमानंद दास जी का पद | पूज्य श्री गौरदास जी महाराज #bhajan",
  "yt": "61F5JC6dCY8"
 },
 {
  "id": 235,
  "title": "घनश्याम जी कन्हैया नंदलाल जी | मेरे प्राणों से प्यारे गोपाल जी | श्री गौरदास जी महाराज #bhajan",
  "yt": "Z8EmrwitHDs"
 },
 {
  "id": 234,
  "title": "हे प्रिया प्रियतम हमारे, ध्यान में आया करो | श्री गौरदास जी महाराज का स्वरचित नवीन पद #bhajan",
  "yt": "2gBeg4geuPw"
 },
 {
  "id": 233,
  "title": "हनुमानजी का मधुर पद | सेवा की मूरत है हनुमान जी | Shri Gaurdas Ji Maharaj |",
  "yt": "f1qdY1QO_0w"
 },
 {
  "id": 232,
  "title": "गुलाब डोल महोत्सव | Gulab Dol | Ekadashi Bhajan | श्री गौरदास जी महाराज | Shri Gaurdas Ji Maharaj",
  "yt": "vkb7Pvmd6G4"
 },
 {
  "id": 231,
  "title": "जन्मे है कौशल्या जी के राम | रामनवमी भजन | श्री गौरदास जी महाराज | Shri Gaurdas Ji Maharaj",
  "yt": "Gre5JwjFReg"
 },
 {
  "id": 230,
  "title": "जनम लियो मेरे रघुराई Janam Liyo Mere Raghurai -Pujya Shri Gaurdas Ji Maharaj",
  "yt": "-Ye7OBwweP8"
 },
 {
  "id": 229,
  "title": "Yamuna Sasthi Special Bhajan - Pujya Shri Gaurdas Ji Maharaj",
  "yt": "U50MNy3zFRk"
 },
 {
  "id": 228,
  "title": "Ekadashi Special Shri Harinaam Sankirtan by Pujya Shri Gaurdas Ji Maharaj",
  "yt": "UV50UFlvv08"
 },
 {
  "id": 227,
  "title": "पूज्य गुरुदेव श्री गौरदास जी महाराज जी के पावन आविर्भाव दिवस की बधाई है |",
  "yt": "J3kMQrnhFLc"
 },
 {
  "id": 226,
  "title": "Tere Jaisa Koi Na , Mere Jaisa Koi Na - Bhajan By Pujya Shri Gaurdas Ji Maharaj |",
  "yt": "ytkoRg8gTTk"
 },
 {
  "id": 225,
  "title": "झूलन लागे प्यारे, होली खेलके | PhoolDol Bhajan | Shri Gaurdas Ji Maharaj |",
  "yt": "ABMBpcDw-nQ"
 },
 {
  "id": 224,
  "title": "Gaur Purnima Special Bhajan - नदिया में प्रकटे गोपाल, होली रंग-रंगीली हो रही #gaurpurnima",
  "yt": "GHNeZB2WMDw"
 },
 {
  "id": 223,
  "title": "Aaj Brij Mein Hori Re Rasiya - आज बिरज में होरी रे रसिया - Pujya Shri Gaurdas Ji Maharaj",
  "yt": "jrcrW_UMIiw"
 },
 {
  "id": 222,
  "title": "होली खेलन को आयी रे...कारे कनुआ से कह दो - Holi Bhajan - Pujya Shri Gaurdas Ji Maharaj",
  "yt": "POElCnR0KLg"
 },
 {
  "id": 221,
  "title": "Rangbhari Ekadashi 2026- Harinaam Sankirtan - Pujya Shri Gaurdas Ji Maharaj",
  "yt": "vDp4qtKEkpw"
 },
 {
  "id": 220,
  "title": "Lathmar Holi Special Holi - Pujya Shri Gaurdas Ji Maharaj #holibhajan",
  "yt": "dKJ4Z-Pd5Xo"
 },
 {
  "id": 219,
  "title": "Holi Special Bhajan - Holi Khele To Aaye Jaiyo Barsane Rasiya - Pujya Shri Gaurdas Ji maharaj",
  "yt": "blzdtpRVXYw"
 },
 {
  "id": 218,
  "title": "Pran More Shri Radha Raman | प्राण मोर श्री राधा रमण | Shri Gaurdas Ji Maharaj | #bhajan #morning",
  "yt": "3mBYh3TSzKE"
 },
 {
  "id": 217,
  "title": "हे कृपा की मूर्ति हे दया के धाम, करुणा करिए दीन पै बड़े बाबा सुखदाम |Shri Gaurdas Ji Maharaj #bhajan",
  "yt": "pOp0gCI3geA"
 },
 {
  "id": 216,
  "title": "Mahashiv Ratri Special - Shiv Parvati vivah - Shiv Parvati ki Bhavariya - Paran lagi Hare Hare",
  "yt": "FAMAHxtV-Ek"
 },
 {
  "id": 215,
  "title": "Ekadashi Special Harinaam Sankirtan - Pujya Shri Gaurdas Ji Maharaj #ekadashi",
  "yt": "OwK4cW4fOT4"
 },
 {
  "id": 214,
  "title": "प्यारे तेरी वंशी नेक बजाऊं | Pyare Teri Vanshi Nek Bajau by Pujya Shri Gaurdas Ji Maharaj",
  "yt": "-H_rHax00ts"
 },
 {
  "id": 213,
  "title": "Krishna Bhajan || मैया कर दे मेरो ब्याह मंगाई दे दुल्हन गोरी सी || बृजभाषा संकलित || #bhajan",
  "yt": "32R30Gwuatw"
 },
 {
  "id": 212,
  "title": "Nityananda Trayodashi Special || Merciful Nitai has appeared today || Self-composed hymn by Pujya...",
  "yt": "OLujlA8BFfs"
 },
 {
  "id": 211,
  "title": "Non Stop Glories of Shri Nityananda Prabhu By Pujya Shri Gaurdas Ji Maharaj",
  "yt": "UeF9xE9r1rE"
 },
 {
  "id": 210,
  "title": "Ekadashi Special ~ Harinaam Sankirtan ~ Pujya Shri Gaurdas Ji Maharaj #ekadashi",
  "yt": "svs62jtsmkg"
 },
 {
  "id": 209,
  "title": "Sadgurudev Tirobhav Special Song | Vandahu Group Padma Paraga | Bhajan of Shri Gourdas Ji Maharaj",
  "yt": "9iEqxxJBqcE"
 },
 {
  "id": 208,
  "title": "Advaita Saptami (Appearance Day of Advaita Acharya) Special Bhajan || Pujya Maharaj Ji Ka Swarachit",
  "yt": "9JVJlGC-tVY"
 },
 {
  "id": 207,
  "title": "Vasant Panchami Festival Special || Pujya Maharaj Ji Ka Swarachit Bhajan #bhajan",
  "yt": "8-oOD5FH_NM"
 },
 {
  "id": 206,
  "title": "Ae Ri Sakhi Mangal Gao Ri , Radharaman Ghar Aavenge #devotional",
  "yt": "WKIGtHcGl8Q"
 },
 {
  "id": 205,
  "title": "महादुर्लभ संयोग❗संक्रांति और शटतिला एकादशी ~~हरिनाम संकीर्तन ~ बाल व्यास चिरंजीव श्री निताई दास जी",
  "yt": "wlHjKFGNU70"
 },
 {
  "id": 204,
  "title": "चिरंजीव श्री निताई दास जी के कथा में झूम उठा पूरा पंडाल #bhajan",
  "yt": "MbbJtg6DcI8"
 },
 {
  "id": 203,
  "title": "ऐसी योग्याता कैसे अवे || पूज्य महाराज जी का स्वरचित पद #shrigaurdasjimaharaj #devotionalbhajan",
  "yt": "XG07N2jaP6E"
 },
 {
  "id": 202,
  "title": "❄️ Sheet Ritu Hai Sakhi...❄️ Winter Special Bhajan ....❄️ Pujya Shri Gaurdas Ji Maharaj #winter",
  "yt": "gzRHkBUwhTQ"
 },
 {
  "id": 201,
  "title": "Hari Naam Sunane Wale Tumko Lakho Pranam 🙏🏻 Pujya Shri Guardas Ji Maharaj",
  "yt": "DMIJJmR7o6c"
 },
 {
  "id": 200,
  "title": "Ekadashi Special Shri Harinaam Sankirtan ~ Pujya Shri Gaurdas Ji Maharaj #harinaam",
  "yt": "vP_yq5U8YVE"
 },
 {
  "id": 199,
  "title": "हा प्यारी,हा प्यारे,आप ही प्रान हमारे हो.......🥹 #devotional",
  "yt": "Z3TrXu2J9is"
 },
 {
  "id": 198,
  "title": "Hari Ji Kab Honge Brajvas Humara ....Hariram Vyas Ji Ka Pad...#bhajan",
  "yt": "9E28cUYn-7E"
 },
 {
  "id": 197,
  "title": "Sheet Ritu Special 😶‍🌫️☃️Pujya Shri Gaurdas Ji Maharaj Ji Ka Swarachit Bhajan #bhajan",
  "yt": "Zp6ZKY1kstw"
 },
 {
  "id": 196,
  "title": "Shripad Gaurangdas Baba Tirobhav Mahotsav Special🌸#bhajan",
  "yt": "t3_UxkEk-Tg"
 },
 {
  "id": 195,
  "title": "Mokshda Ekadashi Harinaam Sankirtan...Pujya Shri Gaurdas Ji Maharaj",
  "yt": "L6t7A-NSQtM"
 },
 {
  "id": 193,
  "title": "First Time Ever ~ 🌸Vivah Panchami Special 🌸~ Pujya Shri Gaurdas Ji Maharaj #sitaram",
  "yt": "DrXfG1zWk8c"
 },
 {
  "id": 192,
  "title": "Badhai Hai....🥳 Sadgurudev Prakatay Special ~ Avatari Karuna Mahaprabhu Ji..#bhajan",
  "yt": "1AD644z0JnY"
 },
 {
  "id": 191,
  "title": "सखियन दोऊ जाये जगाये 🙏 || Bhajan || Shri Gaurdas Ji Maharaj #shrigaurdasjimaharaj #bhajan",
  "yt": "sqtL0wN9eKk"
 },
 {
  "id": 190,
  "title": "श्रीमती ललिता सखी माँ और श्रीपाद रामदास बाबा जी के तिरोभाव महोत्सव पर पूज्य महाराज श्री का भजन",
  "yt": "CenwoIGxNQc"
 },
 {
  "id": 189,
  "title": "Ekadashi Special ~ Harinaam Sankirtan ~ Pujya Shri Gaurdas Ji Maharaj #kirtan",
  "yt": "Q7tD9ICG8Cg"
 },
 {
  "id": 188,
  "title": "मार्गशीर्ष महीने में प्रतिदिन सुनें यह भजन .... 🌞🦚🪷 Pujya Shri Gaurdas Ji Maharaj #bhajan",
  "yt": "bzzgsX6ICNY"
 },
 {
  "id": 187,
  "title": "Kartik Purnima Special Bhajan Aaye Gaur Aaj Shri Dham Shri Gaurdas Ji Maharaj #music #bhajan",
  "yt": "gBu5qsicVLo"
 },
 {
  "id": 186,
  "title": "Ekadashi Special ~ Shri Harinaam ~ Pujya Shri Gaurdas Ji Maharaj #haribol",
  "yt": "rcYTRi2eQbo"
 },
 {
  "id": 185,
  "title": "Tulsi Saligram Vivah Special..... 🪴Pujya Shri Gaurdas Ji Maharaj #bhajan",
  "yt": "7a4of9BdCcI"
 },
 {
  "id": 184,
  "title": "Gpasthami Special 🪻🐄 Mohan Gaai Chari Raiyo",
  "yt": "2EtzNJownI4"
 },
 {
  "id": 183,
  "title": "Gurudev Se Prathna ~ Gurudev Meri Yha Prathna Hai",
  "yt": "0-d3m1iJAhY"
 },
 {
  "id": 182,
  "title": "Bhaiya Dooj Special ~ Pujya Shri Gaurdas Ji Ka Swarachit Bhajan",
  "yt": "NdP_ZRDhafM"
 },
 {
  "id": 181,
  "title": "Govardhan Puja Special Bhajan ~ Pujya Shri Gaurdas Ji Maharaj Ji Ka Swarachit Bhajan",
  "yt": "xrZWUYpE7Vc"
 },
 {
  "id": 180,
  "title": "Diwali Special 🪷✨🪔🏮Sada Shubh Ho Diwali .... #diwali",
  "yt": "mev2Ldhyj3A"
 },
 {
  "id": 179,
  "title": "भुजा उठाएं गौर निताई नगर भ्रमण को जाते है ...🦚🪷#bhajan",
  "yt": "pUHqoWfjiVE"
 },
 {
  "id": 178,
  "title": "Ekadashi Special ~ Hatri Bethe Yugal Kishor...Pujya Maharaj Ji Ka Swarachit Bhajan",
  "yt": "_bYXStqDwwQ"
 },
 {
  "id": 177,
  "title": "Prem Data Nitai Bole Gaur Hari Hari Bol ..... 🦚🌟🥹#haribol #bhajan",
  "yt": "imQqNbJJ_bw"
 },
 {
  "id": 176,
  "title": "Ahoi Astami Special ~ श्री राधा कुण्ड , श्री श्याम कुण्ड के प्राकट्य का पद #bhajan",
  "yt": "rpzoLuk_hZY"
 },
 {
  "id": 175,
  "title": "Ahoi Ashtami Special ~ Radha Kund Teere .... Pujya Shri Gaurdas Ji Maharaj Ji Ka Swarachit Bhajan",
  "yt": "xP1yFA5BD64"
 },
 {
  "id": 174,
  "title": "Narottam Prathana Radha Kund #radhakund #ytshorts #shortsfeed #bhajan",
  "yt": "1RWlfje7Ep8"
 },
 {
  "id": 173,
  "title": "करवा चौथ पर ज़रूर सुनें 🌟🌹हर सुहागन को इस करवा चौथ पर सुनना चाहिए ये भजन✨#bhajan",
  "yt": "mbVL8A43AtY"
 },
 {
  "id": 172,
  "title": "Raas Purnima Special Bhajan 🌕🦚🌟Aaj Yugal Nache Re...#bhajan",
  "yt": "8t9O6VJu6r8"
 },
 {
  "id": 171,
  "title": "Raas Purnima Special 🌕 Jai Jai Radha Rasbihari 🦚#bhajan",
  "yt": "uKRFC2H_aYA"
 },
 {
  "id": 169,
  "title": "Raas Purnima Special Bhajan 🌕🌟 नेक बंसी बजाये जा रे मोहन सांवरियाँ 🪈 #bhajan",
  "yt": "BwasJAyUXfo"
 },
 {
  "id": 168,
  "title": "तीनो गोस्वामी जी के तिरोभाव महोत्सव पर पूज्य महाराज श्री का भजन",
  "yt": "JquxrxQEW-o"
 },
 {
  "id": 167,
  "title": "Ekadashi Special 🦚🌟Shri Harinaam Sankirtan ~ Pujya Shri Gaurdas Ji Maharaj #kirtan",
  "yt": "SGa6P9wxCXo"
 },
 {
  "id": 166,
  "title": "Sharad Purnima Special Maharaas Ki Raat Hai Pujya Maharaj Ji Ka Swarachit Bhajan",
  "yt": "J4Zgm4dzgYw"
 },
 {
  "id": 165,
  "title": "Dussehra Special 🌺🌟🔱 Bhajan ~ Vijay Dashmi Ki Sabko Lakho Badhai ~ #dussehra",
  "yt": "V9agPkCRSo0"
 },
 {
  "id": 164,
  "title": "नवरात्रि महाष्टमी Special 🔱🕉️Krishna Prem Dijiye Bhagwati Maiya",
  "yt": "EWZsAFzHw1U"
 },
 {
  "id": 163,
  "title": "करुण पुकार ग्रन्थ पद संख्या 66 | पूज्य महाराज श्री जी का अद्भुत स्वरचित भजन",
  "yt": "c1-q8p5OgT0"
 },
 {
  "id": 162,
  "title": "Aali Ri Mohe Lage Vrindavan Niko ..🦚🌳🪷🌿Meera Bhajan ~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "wOZFgqSQUg8"
 },
 {
  "id": 161,
  "title": "Narottam Prathna ~ 💫🥹shri krishna chaitanya prabhu daya karo",
  "yt": "OQmilj22R5k"
 },
 {
  "id": 160,
  "title": "Harinaam Sankirtan ~ ( Bhaj ) Nitai Gaur Radhey Shyam ( Japa ) Hare Krishna Hare Ram",
  "yt": "xE5Hu2-1uAw"
 },
 {
  "id": 159,
  "title": "Krishna Bhajan 🦚 मेरे नैनन में प्रेम रस छा गयो री 🥰पूज्य श्री गौरदास जी का स्वरचित भजन",
  "yt": "dRCXjehtog0"
 },
 {
  "id": 158,
  "title": "Saras Madhuri Ji Ka Pad ~ Apni Si Kar Lena Guru ~ 🥹#bhajan",
  "yt": "ORbFitnYpy8"
 },
 {
  "id": 157,
  "title": "Shri Radha Naam Sankirtan ~ Radha Radha ~ Pujya Shri Gaurdas Ji Maharaj #radha",
  "yt": "iLmpXjBBamc"
 },
 {
  "id": 156,
  "title": "Namachariya Shrila Haridas Thakur Ji Ka Tirobhav Per Jarur Sune ......#bhajan",
  "yt": "A1MxpXdV0ds"
 },
 {
  "id": 155,
  "title": "Vaman Dwadashi Special Bhajan ~ Pujya Shri Gaurdas Ji maharaj Ji ka Swarachit Bhajan",
  "yt": "sBzCnbcL7K0"
 },
 {
  "id": 154,
  "title": "Radhashtami Special 🪷✨🥳 भैया हो आज वृषभानु जी के आनंद भयो ....अष्टछाप कवि परमानंद दास जी का पद",
  "yt": "yc1HED818cI"
 },
 {
  "id": 153,
  "title": "Radhashtami Special 🪷✨🥳Anand Me Anand Ki Chatta Aa Geya .... #radharanibhajan",
  "yt": "zvkyx0KcMws"
 },
 {
  "id": 152,
  "title": "Shri Radha Rani Ji Ke Jamotsav per Badhai .. Kishori Ji Ne Aaj Lio Hai Avater ..#radhashtami",
  "yt": "xgHc7GuFIBA"
 },
 {
  "id": 151,
  "title": "Radhashtami Special || Vrishbhanu Baba Ke Dwar Badhai Baj Rai || Pujya Maharaj Ji Ka Swarachit Pad",
  "yt": "yK9k4tE-kKs"
 },
 {
  "id": 150,
  "title": "सजनी चलो बधाई देन कीर्ति घर कन्या जाई है ~ 🥁🦚🪇🌹🦜 #radhashtami",
  "yt": "3EsDEL-DRPI"
 },
 {
  "id": 149,
  "title": "Radhashtami Special ~ Barsane Me Baje Badhai...🌺🦚🥁🦜 #radharani",
  "yt": "Rtz-VapooQQ"
 },
 {
  "id": 148,
  "title": "Aaj Saare Gokul Me Baje Badhai... #janmashtami #bhajan",
  "yt": "BPPhfnJdNBE"
 },
 {
  "id": 147,
  "title": "Thakur Ji Ke Bal Roop Ka Darshan ~ Surdas Ji Ke Pad #bhajan",
  "yt": "3-FstWTuMcM"
 },
 {
  "id": 146,
  "title": "Aaj Anand Nand Ju Ke Ghar 🪇🥁🪘🪗#bhajan #devotional",
  "yt": "sUlCZckBYHE"
 },
 {
  "id": 145,
  "title": "Ekadashi Special || Shri Harinaam Sankirtan || Pujya Shri Gaurdas Ji Maharaj #bhajan",
  "yt": "R49lPyZ5O1k"
 },
 {
  "id": 144,
  "title": "Janmashtami special ✨🎉🎇 Nand Ghar Anand Bhayo || Pujya Shri Gaurdas Ji Maharaj #bhajan",
  "yt": "Fjr9FvWobhU"
 },
 {
  "id": 143,
  "title": "Badhai Hai .....🥳🦚🌹Janam Din Nand lala ka .....#janmashtami",
  "yt": "nOb3rMV_FI0"
 },
 {
  "id": 142,
  "title": "Janmasthami Special 🥳 Aaja Pyaare Sawariya ..🪷 Pujya Shri Gaurdas Ji Maharaj Ji Ka Swarachit Bhajan",
  "yt": "cdjPHxR67H8"
 },
 {
  "id": 141,
  "title": "Janmashtami special🎈🧸🪅🍭 Kisi Premi ka jab Prabhu se",
  "yt": "VO4ejHw5kQ8"
 },
 {
  "id": 140,
  "title": "Janmasthami Special || Darsan Dije Nand Dulare....( दरसन दीजो नन्द दुलारे ) #bhajan",
  "yt": "K7fXdcnftvI"
 },
 {
  "id": 139,
  "title": "रक्षाबंधन पर सुनें पूज्य महाराज श्री जी का स्वरचित हृदयस्पर्शी भजन #rakshabandhan",
  "yt": "db0riGLDp10"
 },
 {
  "id": 138,
  "title": "रक्षाबंधन पर सुनें पूज्य महाराज श्री जी का स्वरचित हृदयस्पर्शी भजन #rakshabandhan",
  "yt": "db0riGLDp10"
 },
 {
  "id": 137,
  "title": "श्री रूप गोस्वामी जी के तिरोभाव महोत्सव पर अनोखे भजन || पूज्य महाराज श्री जी के स्वरचित पद #bhajan",
  "yt": "N27l0s-1n1w"
 },
 {
  "id": 136,
  "title": "Ekadashi Special Harinaam Sankirtan || Pujya Shri Gaurdas Ji Maharaj #harinaam",
  "yt": "W2ukkzMYhCI"
 },
 {
  "id": 135,
  "title": "🎊🌺 New Bhajan ~ Tere Naam Ke Sahare ~ Pujya Maharaj Ji Ka swarachit Naya Bhajan #bhajan",
  "yt": "NxEIQ9uCsz4"
 },
 {
  "id": 134,
  "title": "Jhulan Special ~~ Pujya Maharaj Ji ka swarachit Bhajan ~~ #bhajan",
  "yt": "QophJOp1vF0"
 },
 {
  "id": 133,
  "title": "Badhai Gaan ~ Goswami Tulsidas Ji Ka Avirbhav Diwas per || pujya maharaj ji ka swarachit bhajan",
  "yt": "HtxrRK9T8l0"
 },
 {
  "id": 132,
  "title": "Jhulan Special || Aaj hindora vrindavan dham jhula jhule shyama shyam || Shri gaurdas ji maharaj",
  "yt": "s2UYlaXuMOs"
 },
 {
  "id": 131,
  "title": "Jhulan Yarta Special ~ Jhula Jhube Padharo Sarkar ~ Pujya Shri Gaurdas Ji Maharaj #bhajan",
  "yt": "xcVhoS39grQ"
 },
 {
  "id": 130,
  "title": "🌳🌺 Jhoolan Kunj Bani,Padharo Payri 🌸🪴 Pujya Shri Gaurdas Ji Maharaj ka Swarachit Bhajan #bhajan",
  "yt": "VOqhQmzUbMc"
 },
 {
  "id": 129,
  "title": "Shri Ji ki Mehendi Lagane Aaye Thakur Ji Per Kaise",
  "yt": "diCpJejS6XU"
 },
 {
  "id": 128,
  "title": "Ekadashi Special || Shri Harinaam Sankirtan || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "-bT4RIdxwXo"
 },
 {
  "id": 127,
  "title": "Karun Pukar Grath Ka Pehela Pad",
  "yt": "nPruL-hqiu8"
 },
 {
  "id": 126,
  "title": "Sawan Special || 🔱🕉️ Shiv Bhajan 🔱🕉️",
  "yt": "IyeWXrbZ910"
 },
 {
  "id": 125,
  "title": "Guru Purnima Special ~~ Karuna Gurudev Ki Kamal Kar Gayi ~~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "Ro9qHQbTLY8"
 },
 {
  "id": 124,
  "title": "Guru Purnima Special ~~ Karuna Gurudev Ki Kamal Kar Gayi ~~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "Ro9qHQbTLY8"
 },
 {
  "id": 123,
  "title": "Guru Purnima Special ~~ Vandau Guru Pad Padma Paraga ~~ Pujya Shri Gaurdas Ji Maharaj",
  "yt": "gqayG_MC92s"
 },
 {
  "id": 122,
  "title": "Jagannath Ji Ke Bengoli Bhajan || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "K-CVyVkk6sk"
 },
 {
  "id": 121,
  "title": "Jaganaath Rath Yatra Special Bhajan",
  "yt": "CR-okLVNZUc"
 },
 {
  "id": 120,
  "title": "Aamader Pran Goura Rai",
  "yt": "2erEfyxmWfk"
 },
 {
  "id": 119,
  "title": "Ekadashi Special || Shri Harinaam Sankirtan ||",
  "yt": "oAZuCa0mlcE"
 },
 {
  "id": 118,
  "title": "Sri Gauranga Mahaprabhu Ji ke Alarnath Gaman Leela",
  "yt": "EZforQNaLoY"
 },
 {
  "id": 117,
  "title": "Radha Krishna Bhajan || नैनन जुगल किशोर बसे , मन अब जग में नाए लगे",
  "yt": "7dxjaHBfVhc"
 },
 {
  "id": 116,
  "title": "Shri Jagannath Snan Yatra Special || Pujya Maharaj Ji Ka Swarachit bhajan",
  "yt": "HozofnA9F7M"
 },
 {
  "id": 115,
  "title": "Dand Mahotsav Special || Aaj Ganga Tat Ananda Bhari...Pujya Maharaj Ji Ka Swarachit Pad",
  "yt": "Am9MyAz1gbA"
 },
 {
  "id": 114,
  "title": "Nirjala Ekadashi Special || Shri Harinaam Sankirtan",
  "yt": "Nc7dSqRy2nA"
 },
 {
  "id": 113,
  "title": "Ganga Dussehra Special ~~ Ganga Jag Tran ke Aaye ~~ Pujya Maharaj Ji Ka Swarachit Bhajan",
  "yt": "lN388jrfMPc"
 },
 {
  "id": 112,
  "title": "Summer Special🌿☀️🍃🪻 || Radha Madhav Bihar Ka Pad ( Jal Bihar, Nauka Bihar, Ban Bihar , Phool Kunj )",
  "yt": "1hasEvfN-K4"
 },
 {
  "id": 111,
  "title": "Nikunj Leela Cintan... Pujya Shri Gaurdas Ji Maharaj",
  "yt": "QJJMmhmJd1g"
 },
 {
  "id": 110,
  "title": "Radha Krishna Bhajan || Yugal Ke Rang Me Rangu...|| Pujya Maharaj Ji Ka Swarachit Bhajan",
  "yt": "w6Na9gieEeI"
 },
 {
  "id": 109,
  "title": "Kishna Bhajan || Bindu Goswami Ji Ka Pad || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "lwyhPZbhIX8"
 },
 {
  "id": 108,
  "title": "Bade Baba Ji ke Avirbhav Diwas Ki Mangal Badhai.",
  "yt": "9CA6_uQ2qck"
 },
 {
  "id": 107,
  "title": "Hanuman Jayanti Special || श्री हनुमत बलदइया प्रगट भए गावो बधईया.",
  "yt": "eHoO4hDyVQE"
 },
 {
  "id": 106,
  "title": "Main Radha Vallabh Ki , Radha Vallabh Meri .... By Pujya Shri Gaurdas Ji Maharaj",
  "yt": "Rjbm05JUkgs"
 },
 {
  "id": 105,
  "title": "Ram Navmi Special || Janam Lio Mere Raghurai..Aaj Abodh Me Bahara Chai.",
  "yt": "rg3mRrRYkd8"
 },
 {
  "id": 104,
  "title": "Yamuna Shsthi Special || Yamuna Shyam Sundar Ki Pyari.",
  "yt": "4ShV80lD0PA"
 },
 {
  "id": 103,
  "title": "Radha Rani Ka Adhut Bhajan || Mero Pranam Radha Pyari Ko.",
  "yt": "39qfKH5BD58"
 },
 {
  "id": 102,
  "title": "Ekadashi Special || Shri Harinaam Sankirtan || Pujya Shri Gaurdas Ji Maharaj",
  "yt": "JD11Q8VStXQ"
 },
 {
  "id": 101,
  "title": "Badhai Hai... Shri Sadguru Ki Pragatana Sada Subh Ho.",
  "yt": "zFqn3o8G3fI"
 },
 {
  "id": 100,
  "title": "Shrivas Pandith Ji ke Abhivbhav Tithi ki Mangal Badhai.",
  "yt": "ORpbJ5PrYmc"
 },
 {
  "id": 99,
  "title": "निकुंज लीला के पद गायन || द्वारे तेरे बंसी कौन बजाए .",
  "yt": "b4WUIokj9pQ"
 },
 {
  "id": 98,
  "title": "Nikunj Leela Ke Pad Gayan By Pujya Shri Gaurdas Ji Maharaj",
  "yt": "sCLF3PbrbgU"
 },
 {
  "id": 97,
  "title": "Krishna Bhajan || Hari Bhagi Bhagi Aayenge .",
  "yt": "Eak_B2YeOcY"
 },
 {
  "id": 96,
  "title": "Radha Krishna Bhajan || De Garbaiya Rahe Paraspar.",
  "yt": "UyfZd6ts3LU"
 },
 {
  "id": 95,
  "title": "Narsingh Chaturdashi Special || श्री नरसिंह भगवान की आविर्भाव की बधाई",
  "yt": "U6tWNhjVwHQ"
 },
 {
  "id": 94,
  "title": "Adbhut Harinaam ...Mool Swar me Harinaam .",
  "yt": "3POYEMHHtgg"
 },
 {
  "id": 93,
  "title": "Sita Navmi Special || Sunaiyna Maiya Siya Ji ko Goddh khilaye.",
  "yt": "GuGO5lpHkRk"
 },
 {
  "id": 92,
  "title": "Radha Krishna Bhajan || Hey Radha Madhav Yugal.",
  "yt": "Ze3DWzD-dWg"
 },
 {
  "id": 91,
  "title": "Akshaya Tritiya Special || महाराज जी के श्री मुख से Bangla भाषा में भजन .",
  "yt": "R2-2WU7fDTo"
 },
 {
  "id": 90,
  "title": "Shrila Gadadhar Pandith Ji Ka Avirbhav Diwas Ki Badhai Hai.",
  "yt": "01I6cZYQJoo"
 },
 {
  "id": 89,
  "title": "हरि बोल से गूंजा पूरा गीता भवन, ऋषिकेश || हरि बोल हरि बोल",
  "yt": "Aa64hSElMsM"
 },
 {
  "id": 88,
  "title": "Bhajan ~~ Shripad Ramdas Babaji Maharaj Ji Ke Abhirbhav Diwas Ka Badhai",
  "yt": "beZJ_p24szw"
 },
 {
  "id": 87,
  "title": "Krishna Bhajan || Mujhe dhundoo Gopal....By Pujya Shri Gaurdas Ji Maharaj",
  "yt": "epo05Kbasmc"
 },
 {
  "id": 86,
  "title": "Badhai Geet ~~ Premavater Shri Gaurhari Ji Ki Badhai Geet by Pujya Shri Gaurdas Ji Maharaj",
  "yt": "3cUzA42LBTI"
 },
 {
  "id": 85,
  "title": "Gaur Purnima Special || Sab Ho Gaye Lal-E-Lal , Holi Rang Rangili Hoi Rahi",
  "yt": "RFuGJQ3Ap8Q"
 },
 {
  "id": 84,
  "title": "Holi Special || Holi Kheli Na Jai....",
  "yt": "oNRZ2sN95n0"
 },
 {
  "id": 83,
  "title": "Holi Hai..... Aaj Biraj Me Holi Re Rasiya",
  "yt": "VWtCYsQGHT4"
 },
 {
  "id": 82,
  "title": "Holi Special Shri Harinaam Sankirtan by Param Pujya Shri Gaurdas Ji Maharaj",
  "yt": "y1F3zinhjhM"
 },
 {
  "id": 81,
  "title": "Holi Special || Non Stop Holi Bhajan By Pujya Shri Gaurdas Ji Maharaj",
  "yt": "jNAsz96DD7E"
 },
 {
  "id": 80,
  "title": "Lathmar Holi 2025 || Lathmar Holi Bhajan by Pujya Shri Gaurdas Ji Maharaj",
  "yt": "o4QXVmQZH-8"
 },
 {
  "id": 79,
  "title": "Laddu Holi Barsana 2025 || श्री राधा कृष्ण होली भजन",
  "yt": "blhhJj69wug"
 },
 {
  "id": 78,
  "title": "जीवन की सच्चाई है इस भजन में || मै नहीं मेरा नहीं यह तन किसी का है दिया ..श्री गौरदास जी महाराज",
  "yt": "qrOLT1e2TaY"
 },
 {
  "id": 77,
  "title": "Holi Special Bhajan || Aaj Bhai Kunjan Me Holi .... Pujya Maharaj Ji Ka Swarachit Bhajan",
  "yt": "LyIJzqTWCpM"
 },
 {
  "id": 76,
  "title": "Shrimad Radha Raman Charan Das Dev ( Bade Baba Ji ) Tirobhav Mahotsav Special Bhajan",
  "yt": "iKAf7PMM9b4"
 },
 {
  "id": 75,
  "title": "Mahashivratri Special Bhajan ||Shanker ji Ka Biha Rachao || Shri Gaurdas ji Maharaj Ji",
  "yt": "EHCR99sbjHE"
 },
 {
  "id": 74,
  "title": "Ekadashi Special Shri Harinaam Sankirtan by Shri Gaurdas Ji Maharaj",
  "yt": "CiPmP3hGg1w"
 },
 {
  "id": 73,
  "title": "Ram Bhajan || अहिल्या बड़े भाग तुम्हारे हैं, तेरे घर राम पधारे..",
  "yt": "fTkMUHGW3MQ"
 },
 {
  "id": 72,
  "title": "Shri Krishna Bhajan By Pujya Shri Gaurdas Ji Maharaj",
  "yt": "j8fHrhWletA"
 },
 {
  "id": 71,
  "title": "Chitrakoot Dham Mahima Bhajan by ShriGaurdas Ji Maharaj",
  "yt": "u-ji0wcHpBc"
 },
 {
  "id": 70,
  "title": "Meera Bai Ji Ke Pad by Shri Gaurdas Ji Maharaj || Shyam Mane Chakar Rakho Ji",
  "yt": "i3bInUuLCbE"
 },
 {
  "id": 69,
  "title": "Shri Nityanand Trayodashi Special Bhajan || Pujya Maharaj Ji Ka Swarachit",
  "yt": "uhTltaUtWsc"
 },
 {
  "id": 68,
  "title": "Shri Nityananda Trayodashi Special Bhajan || Pujya Shri Gaurdas Ji Maharaj Ji Ka Swaracht Bhajan",
  "yt": "GzdwK4fVZOc"
 },
 {
  "id": 67,
  "title": "Sri Sadgurudev Tirobhav Mahotsav Special Bhajan | GuruSakhi Yugal Kishor Ki Payare",
  "yt": "aPDwG2_frPY"
 },
 {
  "id": 66,
  "title": "Shri Advaita Achariya Ji Avirbhav Special || Pragatye Bhai Advaita Gosai",
  "yt": "Z5XAFhB7PWU"
 },
 {
  "id": 65,
  "title": "Basant Panchami Special || Vrindavan Basant chhaeyi .. Shri Gaurdas Ji Maharaj Ji Ka Swarachit Pad",
  "yt": "5DyDLMR6Vg0"
 },
 {
  "id": 64,
  "title": "Chalahu Man Shri Vrindavan Dham By Pujya Shri Gaurdas Ji Maharaj",
  "yt": "ckAjOaJvzmU"
 },
 {
  "id": 62,
  "title": "26 जनवरी विशेष~~ वंदे मातरम्..(26 January Special ~~ Vande Mataram )",
  "yt": "zyuKv1bIUZQ"
 },
 {
  "id": 61,
  "title": "(श्री हरिनाम संकीर्तन)..( Shri Harinaam Sankirtan)",
  "yt": "t4FB3aXAHlo"
 },
 {
  "id": 60,
  "title": "यह भजन सुनकर पत्थर दिल भी पिघल जाएगा || yha bhajan sunkar pathar dil bhi pighal jayega...",
  "yt": "I8U7xlKWB_U"
 },
 {
  "id": 59,
  "title": "सकट चौथ 2025 विशेष भजन || Sakat Chauth 2025 Special Bhajan ||",
  "yt": "IeCy--IYwaQ"
 },
 {
  "id": 57,
  "title": "मकर संक्रांति 2025: विशेष भजन|..Makar Sankranti 2025 : Special Bhajan..",
  "yt": "Ny-tXd5t4M0"
 },
 {
  "id": 56,
  "title": "राधा कृष्ण भजन || ऐसे योगिता कैसे आबे....Radha Krishna Bhajan || Aise Yogyta Kaise Aabe....",
  "yt": "HlvKMItTnLE"
 },
 {
  "id": 55,
  "title": "एकादशी के दिन जरूर सुनें !! हरिनाम संकीर्तन !! Ek dashi ke din jarur sune hari naam sankirtan..",
  "yt": "7n5oBQXSBIk"
 },
 {
  "id": 54,
  "title": "मन को छू जाने वाला भजन | man ko chun jane wala bhajan..",
  "yt": "PXDPstv8hjU"
 },
 {
  "id": 53,
  "title": "बहुत ही गहरे दर्द भरे शब्दों से भरा है ये भजन, सुन कर आंसू नहीं रोक पाओगे || (bahut hee gahare dard bhare shabdon se bhara hai ye bhajan, sun kar aansoo nahin rok paoge)",
  "yt": "bZMGFQGVuVA"
 },
 {
  "id": 52,
  "title": "नव वर्ष 2025 की हार्दिक शुभकामनाएँ ~~ नव वर्ष विशेष भजन ~~ पूज्य श्री गौरदास जी महाराज ( Happy New Year 2025 ~~ New Year Special Bhajan ~~ Pujya Shri Gaurdas Ji Maharaj )",
  "yt": "k1ofL9fEgnQ"
 },
 {
  "id": 51,
  "title": "एक बार ज़रूर सुने !! भज मान नदिया बिहारी, गौर हरि ! पूज्य महाराज जी का स्वरचित पद ( Ek Bar Jarur Sune !! Bhaja Maan Nadiya Bihari , Gaur Hari ! Pujya Maharaj Ji Ka Swarachit Pad )",
  "yt": "5TH-UJtgX-8"
 },
 {
  "id": 50,
  "title": "श्रीहरिनाम संकीर्तन || परम पूज्य श्री गौरदास जी महाराज ( Shriharinaam Sankirtan || Param Pujya Shri Gaurdas Ji Maharaj )",
  "yt": "YQPb84jIjSM"
 },
 {
  "id": 49,
  "title": "मेरे नैन जुगल किशेर बसे मन आब जग मे नाये लगे || पूज्य महाराज जी का स्वरचित पद(mere nain jugal kisher base man aab jag me naaye lage || poojy mahaaraaj jee ka svarachit pad)",
  "yt": "fwpNKMEiOEM"
 },
 {
  "id": 48,
  "title": "Bihari Ji Se Prathna || बिहारी जी कब अपनाओगे",
  "yt": "Vq4hGozkz_Y"
 },
 {
  "id": 47,
  "title": "रविवार विशेष || श्री गौरदास जी महाराज द्वारा श्री शिक्षाष्टकम् ( Sunday Special || Shri Sikashtakam by Shri Gaurdas Ji Maharaj )",
  "yt": "ARHe1pA8aeM"
 },
 {
  "id": 46,
  "title": "आँखों से आंसू नहीं रुकेंगे | मेरे प्राणेश मनमोहन, तुम्हें ढूंढूं कहाँ जाकर (दिल को छूने वाला भजन) (aankhon se aansoo nahin rukenge | mere praanesh manamohan, tumhen dhoondhoon kahaan jaakar (dil ko chhoone vaala bhajan)",
  "yt": "uxgDaFJRyz4"
 },
 {
  "id": 45,
  "title": "Bihari Ji Se Prathna || बिहारी जी कब अपनाओगे",
  "yt": "Vq4hGozkz_Y"
 },
 {
  "id": 43,
  "title": "रविवार विशेष ~~ श्री जी से प्रार्थना ~~ पूज्य श्री गौरदास जी महाराज जी का स्वरचित पद ( Sunday Special ~~ Shri Ji Se Prathna ~~ Pujya Shri Gaurdas Ji maharaj Ji Ka Swarachit Pad )",
  "yt": "mOPpn0xm2W4"
 },
 {
  "id": 42,
  "title": "श्रीपाद गौरांग दास बाबा जी के तिरोभाव महोत्सव पर स्पेशल भजन || श्री गौरदासजी महाराज जी का स्वरचितपद ( shreepaad gauraang daas baaba jee ke tirobhaav mahotsav par speshal bhajan || shree gauradaasajee mahaaraaj jee ka svarachitapad )",
  "yt": "YuCuTy6cb6E"
 },
 {
  "id": 41,
  "title": "विवाह पंचमी विशेष भजन || परम पूज्य श्री गौरदास जी महाराज ( Vivah Panchami Special Bhajan || Param Pujya Shri Gaurdas Ji Maharaj )",
  "yt": "mc3K3TQwOKI"
 },
 {
  "id": 40,
  "title": "श्री सदगुरुदेव प्राकट्य महोत्सव बधाई गान पर || पूज्य श्री गौरदास जी महाराज ( Shri Sadgurudev Prakatya Mahotsav par Badhai Gaan || Pujya Shri Gaurdas Ji Maharaj )",
  "yt": "QxKHo7ruSJg"
 },
 {
  "id": 39,
  "title": "( रविवार विशेष || पूज्य श्री गौरदास जी महाराज जी का स्वरचित कात्यायनी स्तुति ) Sunday Special || Pujya Shri Gaurdas Ji Maharah Ji Ka Swarachit Katyayani Stuti",
  "yt": "qhWY2B3nU9Y"
 },
 {
  "id": 38,
  "title": "( हरिनाम संकीर्तन || श्रीमती सखिमा एवं श्रीपदरामदास बड़ा जी के तिरोभाव महोत्सव) Harinaam Sankirtan || Shrimati Sakhimaa Evam Shripadramdas Bada Ji Ke Tirobhav Mahotsav",
  "yt": "d17OoyPKT2o"
 },
 {
  "id": 37,
  "title": "( श्रीमती ललिता सखी माँ एवं श्रीपाद रामदास बाबा जी के तिरोभाव महोत्सव पर विशेष भजन ) Shrimati Lalita Sakhi Maa Evam Shripad Ramdas Baba Ji Ke Tirobhav Mahotsav Par Vishes Bhajan",
  "yt": "yHMbGXQWVlU"
 },
 {
  "id": 36,
  "title": "31 दिवसीय मार्गशीर्ष मास अनुष्ठान मंगला आरती ( 31 divaseey maargasheersh maas anushthaan mangala aaratee )",
  "yt": "0XdLgQCF0I4"
 },
 {
  "id": 35,
  "title": "31 दिवसीय मार्गशीर्ष मास अनुष्ठान (31 divaseey maargasheersh maas anushthaan )",
  "yt": "wH2VfxNbLRs"
 },
 {
  "id": 34,
  "title": "धारण कियो हे मयूर पँख माथे पे(Dharan kiyo hai mayur pankh mathe pe)",
  "yt": "TxziT7iFp58"
 },
 {
  "id": 33,
  "title": "राधिका सुन्दर श्याम की जोरि\"(Radhika sundar shyam ki jori )",
  "yt": "PiGb0-UCnS0"
 },
 {
  "id": 32,
  "title": "|| सुध मेरी भी लेना गिरधारी ||(sudhar meri bhi len girdhari)",
  "yt": "VgNfEleZZoo"
 },
 {
  "id": 31,
  "title": "प्रातः काल के भावना(prath kaal ke bhawna)",
  "yt": "iiEyZNwEXN4"
 },
 {
  "id": 30,
  "title": "बहु दिन परे आज देखिया श्री मुख(Bahu din pare aaj dekhiye shri mukh)",
  "yt": "dyIfnklDll0"
 },
 {
  "id": 29,
  "title": "हा गौरांग तनक हँसी हेरो (Haa gourang tank hanshi hyero)",
  "yt": "upmm8zlD8e0"
 },
 {
  "id": 28,
  "title": "बोल बोल ओ तरुलता(bol bol on tarulta)",
  "yt": "uVqfdU2R1O0"
 },
 {
  "id": 27,
  "title": "अनोखे गौर बनकर के श्री राधा कृष्ण आये है || (Anhokhe gor bankar ke shri radha krishna aaye hai)",
  "yt": "dX3g4X9185s"
 },
 {
  "id": 26,
  "title": "श्री नित्यानंद प्रेम धन लाये.|| Shri Nityananda Prem Dhan Laye",
  "yt": "osi14gQDiv8"
 },
 {
  "id": 25,
  "title": "चलो मन नदिया नगरी चलिए (chalo man nadiya nagri chaliye)",
  "yt": "-yVxjQF5JWY"
 },
 {
  "id": 24,
  "title": "राधारमण गौरहरि ,गौरहरि राधारमण(Radharaman gorhri radharam)",
  "yt": "o8iY7K8SQzQ"
 },
 {
  "id": 23,
  "title": "अर्थ धर्म मोक्ष नही काम चाहियें, नन्द का कुमार हमें श्याम चाहियें(Arth dhram moksh nahi chahiye kaam chahiye nand ka kumar hame shyam chahiye)",
  "yt": "erVUTzHiMeA"
 },
 {
  "id": 22,
  "title": "जन्म तेरा बातों ही बीत गयो रे ,तूने कबहुँ न कृष्ण कहयो (Janm tera bato hi bith gayo re tune kabhun n krishna kahyo)",
  "yt": "vNIsXPVLs08"
 },
 {
  "id": 21,
  "title": "सुध मेरी भी लेना गिरधारी(sudh meri bhi lena girdhari)",
  "yt": "VgNfEleZZoo"
 },
 {
  "id": 20,
  "title": "मुझे दो दर्शन गिरधारी रे, तेरी साँवरी सूरत पे में वारी रे(Mujhe do darshan girdhari re teri sawari surat pe main waari)",
  "yt": "8xch8CRJ7Fc"
 },
 {
  "id": 19,
  "title": "तुम बिन डूबत कौन उबारे(Tum bin dubat koun ubare)",
  "yt": "MUNmCdFGI3I"
 },
 {
  "id": 18,
  "title": "युगल सरकार के विहार का पद || आदि न अन्त विहार करें दोऊ (yugal sarkar ke bihar ka pad)",
  "yt": "73k_sJRBqW8"
 },
 {
  "id": 16,
  "title": "हरि नाम नहीं तो जीना क्या(Hari naam nahi to jina kya)",
  "yt": "WiGtwmlthzk"
 },
 {
  "id": 15,
  "title": "राजी रहो सदा प्यारे तुम (Raji raho sadha pyare tum)",
  "yt": "i92h--e6e2U"
 },
 {
  "id": 14,
  "title": "Radha Krishna Bhajan (राधा कृष्ण भजन)",
  "yt": "4Ev-MXyDq_g"
 },
 {
  "id": 13,
  "title": "श्री राधा कृष्ण के प्रथम मिलन की लीला ||  shri radha krishan ke partham milan ki lila",
  "yt": "EyMX2PCICAM"
 },
 {
  "id": 12,
  "title": "पूज्य महाराज श्री का स्वरचित पद || राधारमण गौरहरि ,गौरहरि राधारमण || Radharamn Gorhi Hari",
  "yt": "o8iY7K8SQzQ"
 },
 {
  "id": 11,
  "title": "Maha Shiv Ratri Special",
  "yt": "F6BOv22zajc"
 },
 {
  "id": 10,
  "title": "Non Stop Shri Narottam Prathna",
  "yt": "zw-Ne_nUQKE"
 },
 {
  "id": 9,
  "title": "Mero Man Kaheto Ek Din Payre Payri ke sang aabenge",
  "yt": "0749KbxLlnk"
 },
 {
  "id": 8,
  "title": "Ekadashi Special Shri Harinaam Sankirtan",
  "yt": "dUpfBoYW8O8"
 },
 {
  "id": 7,
  "title": "Janmashtami Special Bhajan",
  "yt": "fU-DGnA3tHs"
 },
 {
  "id": 6,
  "title": "Balram Sasthi Evm Lalita Sakhi Avirbhav",
  "yt": "x7C2mcPuKjo"
 },
 {
  "id": 5,
  "title": "Hindora ke Bhajan",
  "yt": "7cSMmBu_M_s"
 },
 {
  "id": 4,
  "title": "Morning Bhajan || Subha ki Madhur Bhajan",
  "yt": "PgwcKRNoVao"
 },
 {
  "id": 3,
  "title": "Shri Ganesh Vandana || Shri Ganesh Chaturthi Special ||",
  "yt": "4Ql8Ro0ceLs"
 },
 {
  "id": 2,
  "title": "Guru Purnima Special || Nath Ab Karuna Karo ||",
  "yt": "gfNrFDyxCMM"
 },
 {
  "id": 1,
  "title": "108 दिवसीय दिव्य श्री भक्तमाल कथा का रसपान कीजिए - Bhaktmal Katha | Shri Gaurdas Ji Maharaj",
  "yt": "l_x_loLwoKE"
 }
];

export const GALLERY: string[] = [
 "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0e69d17623cfdf624973c8150c9ffbfa40cdfe94/_36A0659.JPG",
 "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8c381eab94cf6337a60e42ab5b1ff6b3a43f73c3/_36A0958.JPG",
 "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a9feae06054a022c347904d0a0a38dfb1a0d0e5f/_J8A8445.JPG",
 "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9fcb91f8871063c25e42b9fd107edc4e173fb1d5/_RUN9009.JPG",
 "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9408be1a7f6ae257674bd5ecab1b5ea5bddf39bb/_RUN9116.JPG",
 "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f37e9888539df43132919f3f07dd8e2b47fa83ee/0U5A7261.JPG",
 "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--671e048dd929058bd5272af2fc5d3625389fdcd7/0U5A9698.JPG",
 "https://api.gaurdasjimaharaj.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9ecb7da4bce9a689c37ce9669e2e9a1975ff7d3f/2T3A3764.JPG"
];

export const LIVE_KATHA_YT: string = "Vb5HXk-DyFE";
