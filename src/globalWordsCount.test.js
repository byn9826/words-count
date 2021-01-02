import { expect } from 'chai';
import wordsCount, {
  wordsCount as count,
  wordsSplit as split,
  wordsDetect as detect
} from '../dist/index.js';

const wordsIsExpected = (firstArr, secondArr) => firstArr.every((el, index) => secondArr[index] === el);

describe('Simple', function() {
  it('English', function() {
    expect(wordsCount('Hello World')).to.equal(2);
  });
  it('Chinese', function() {
    expect(wordsCount('你好，世界')).to.equal(4);
  });
  it('English-Chinese', function() {
    expect(wordsCount('Hello, 你好。')).to.equal(3);
  });
  it('English-Chinese-Japanese-Number', function() {
    expect(wordsCount("Let's say ‘你好’ 100 times per day, 勤勉")).to.equal(10);
  });
});

describe('Basic', function() {
  it('English', function() {
    const content = "Google's free service instantly translates words, phrases, and web pages between English and over 100 other languages.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Chinese', function() {
    const content = "Google的免费服务可即时翻译英文和其他100多种语言的文字，短语和网页。";
    expect(wordsCount(content)).to.equal(29);
  });
  it('Chinese-Traditional', function() {
    const content = "Google的免費服務可即時翻譯英文和其他100多種語言的文字，短語和網頁。";
    expect(wordsCount(content)).to.equal(29);
  });
  it('Japanese', function() {
    const content = "Googleの無料サービスは、英語と100以上の他の言語との間で、単語、フレーズ、およびウェブページを即座に翻訳します。";
    expect(wordsCount(content)).to.equal(48);
  });
  it('Korean', function() {
    const content = "Google의 무료 서비스는 단어와 구문, 웹 페이지를 영어와 100 개 이상의 다른 언어로 즉시 번역합니다.";
    expect(wordsCount(content)).to.equal(38);
  });
  it('French', function() {
    const content = "Le service gratuit de Google traduit instantanément des mots, des expressions et des pages Web entre l'anglais et plus de 100 autres langues.";
    expect(wordsCount(content)).to.equal(23);
  });
  it('German', function() {
    const content = "Der kostenlose Google-Dienst übersetzt Wörter, Sätze und Webseiten sofort in Englisch und über 100 andere Sprachen.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Italian', function() {
    const content = "Il servizio gratuito di Google traduce istantaneamente parole, frasi e pagine Web tra l'inglese e oltre 100 altre lingue.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Spanish', function() {
    const content = "El servicio gratuito de Google traduce al instante palabras, frases y páginas web entre inglés y más de 100 idiomas.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Portuguese', function() {
    const content = "O serviço gratuito do Google traduz instantaneamente palavras, frases e páginas da web entre inglês e mais de 100 outros idiomas.";
    expect(wordsCount(content)).to.equal(21);
  });
  it('Russian', function() {
    const content = "Бесплатный сервис Google мгновенно переводит слова, фразы и веб-страницы между английским и более 100 другими языками.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Ukrainian', function() {
    const content = "Безкоштовна служба Google миттєво перекладає слова, фрази та веб-сторінки між англійською мовою та більш ніж 100 іншими мовами.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Arabic', function() {
    const content = "تعمل خدمة Google المجانية على الفور على ترجمة الكلمات والعبارات وصفحات الويب بين الإنجليزية وأكثر من 100 لغة أخرى.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Hebrew', function() {
    const content = "השירות החינמי של גוגל מתרגם באופן מיידי מילים, ביטויים ודפי אינטרנט בין אנגלית ל -100 שפות נוספות.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Afrikaans', function() {
    const content = "Google se gratis diens vertaal onmiddellik woorde, frases en webblaaie tussen Engels en meer as 100 ander tale.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Albanian', function() {
    const content = "Shërbimi i lirë i Google përkthen në çast fjalët, frazat dhe faqet në internet midis anglishtes dhe mbi 100 gjuhëve të tjera.";
    expect(wordsCount(content)).to.equal(22);
  });
  it('Amharic', function() {
    const content = "የ Google ነጻ አገልግሎት በፍጥነት ከእንግሊዝኛ እና ከ 100 በላይ በሆኑ ሌሎች ቋንቋዎች ቃላትን, ሐረጎችን, እና ድረ-ገጾችን ይተረጉማል.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Armenian', function() {
    const content = "Google- ի անվճար ծառայությունը անմիջապես թարգմանում է բառեր, արտահայտություններ եւ վեբ էջեր անգլերենի եւ ավելի քան 100 այլ լեզուների միջեւ:";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Azerbaijani', function() {
    const content = "Google-un pulsuz xidməti İngilis dili ilə 100-dən çox digər dillər arasında sözləri, sözləri və veb səhifələrini dərhal tərcümə edir.";
    expect(wordsCount(content)).to.equal(21);
  });
  it('Basque', function() {
    const content = "Google-ren doako zerbitzua ingelesez eta beste 100 hizkuntzatan baino gehiagotan hitzak, esaldiak eta web orriak itzultzen ditu instantan.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Belarusian', function() {
    const content = "Бясплатны сэрвіс Google імгненна перакладае словы, фразы і вэб-старонак паміж ангельскай і больш за 100 іншых моў.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Bengali', function() {
    const content = "Google এর বিনামূল্যের পরিষেবাটি ইংরেজী এবং আরো 100 টিরও বেশি ভাষার মধ্যে শব্দ, বাক্যাংশ এবং ওয়েব পৃষ্ঠাগুলিকে সঙ্গে সঙ্গে অনুবাদ করে।";
    expect(wordsCount(content)).to.equal(21);
  });
  it('Bulgarian', function() {
    const content = "Безплатната услуга на Google незабавно превежда думи, фрази и уеб страници между английски и над 100 други езици.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Bosnian', function() {
    const content = "Google-ova besplatna usluga trenutno prevodi riječi, fraze i web stranice između engleskog i preko 100 drugih jezika.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Catalan', function() {
    const content = "El servei gratuït de Google tradueix de manera instantània paraules, frases i pàgines web entre l'anglès i més de 100 idiomes.";
    expect(wordsCount(content)).to.equal(21);
  });
  it('Cebuano', function() {
    const content = "Ang libreng serbisyo sa Google diha-diha dayon naghubad sa mga pulong, hugpong sa mga pulong, ug mga panid sa web tali sa Iningles ug kapin sa 100 ka lain nga mga pinulongan.";
    expect(wordsCount(content)).to.equal(33);
  });
  it('Croatian', function() {
    const content = "Googleova besplatna usluga trenutačno prevodi riječi, fraze i web stranice između engleskog jezika i preko 100 drugih jezika.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Chichewa', function() {
    const content = "Utumiki waulere wa Google nthawi yomweyo amatanthauzira mawu, mawu, ndi masamba a pakati pa Chingerezi ndi zinenero zina zoposa 100.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Corsican', function() {
    const content = "U serviziu di Google gratuituamente traduce parole, parole è pagine web entre inglesu è più di 100 altre lingue.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Czech', function() {
    const content = "Bezplatná služba Google okamžitě přeloží slova, fráze a webové stránky mezi angličtinu a více než 100 dalších jazyků.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Danish', function() {
    const content = "Googles gratis service oversætter øjeblikkeligt ord, sætninger og websider mellem engelsk og over 100 andre sprog.";
    expect(wordsCount(content)).to.equal(16);
  });
  it('Dutch', function() {
    const content = "De gratis service van Google vertaalt woorden, zinnen en webpagina's onmiddellijk tussen Engels en meer dan 100 andere talen.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Esperanto', function() {
    const content = "La libera servo de Google tuj tradukas vortojn, frazojn kaj retpaĝojn inter la angla kaj pli ol 100 aliaj lingvoj.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Estonian', function() {
    const content = "Google'i tasuta teenus koheselt tõlgib sõnu, fraase ja veebilehti inglise keele ja üle 100 muu keele vahel.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Filipino', function() {
    const content = "Ang libreng serbisyo ng Google ay agad na nagta-translate ng mga salita, parirala, at mga web page sa pagitan ng Ingles at mahigit sa 100 iba pang mga wika.";
    expect(wordsCount(content)).to.equal(30);
  });
  it('Finnish', function() {
    const content = "Googlen ilmainen palvelu kääntää hetkessä sanat, lauseet ja verkkosivut englannin ja yli 100 muulla kielellä.";
    expect(wordsCount(content)).to.equal(15);
  });
  it('Frisian', function() {
    const content = "De frije tsjinst fan Google ferwiist fuortendaliks wurden, wurden, en websiden tusken Ingelsk en mear as 100 oare talen.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Greek', function() {
    const content = "Η δωρεάν υπηρεσία της Google μεταφράζει άμεσα λέξεις, φράσεις και ιστοσελίδες μεταξύ αγγλικών και πάνω από 100 άλλες γλώσσες.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Galician', function() {
    const content = "O servizo gratuíto de Google traduce instantáneamente palabras, frases e páxinas web entre inglés e máis de 100 idiomas.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Georgian', function() {
    const content = "Google- ის უფასო სერვისი მყისიერად თარგმნის სიტყვებს, ფრაზებსა და ვებ გვერდებს ინგლისურ ენასა და 100-ზე მეტ ენაზე.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Gujarati', function() {
    const content = "Google ની મફત સેવા અંગ્રેજી અને 100 અન્ય ભાષાઓમાંના શબ્દો, શબ્દસમૂહો અને વેબ પૃષ્ઠોને તરત અનુવાદિત કરે છે.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Haitian Creole', function() {
    const content = "Sèvis gratis Google la imedyatman tradui mo, fraz, ak paj entènèt ant angle ak plis pase 100 lòt lang.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Hausa', function() {
    const content = "Sabis na kyauta na Google nan take fassara kalmomi, kalmomi, da kuma shafukan intanet tsakanin Ingilishi da fiye da 100 sauran harsuna.";
    expect(wordsCount(content)).to.equal(22);
  });
  it('Hindi', function() {
    const content = "Google की नि: शुल्क सेवा तुरंत अंग्रेजी और 100 से अधिक अन्य भाषाओं के बीच शब्दों, वाक्यांशों और वेब पृष्ठों का अनुवाद करती है।";
    expect(wordsCount(content)).to.equal(24);
  });
  it('Hmong', function() {
    const content = "Google txoj kev pab dawb yog txhais cov lus, nqe lus, thiab cov nplooj ntawv web ntawm lus Askiv thiab tshaj 100 lwm yam lus.";
    expect(wordsCount(content)).to.equal(25);
  });
  it('Hungarian', function() {
    const content = "A Google ingyenes szolgáltatása azonnal fordít szavakat, kifejezéseket és weboldalakat angol és több mint 100 nyelven.";
    expect(wordsCount(content)).to.equal(16);
  });
  it('Icelandic', function() {
    const content = "Ókeypis þjónustu Google er þegar í stað þýtt orð, orðasambönd og vefsíður á milli ensku og yfir 100 önnur tungumál.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Igbo', function() {
    const content = "Ọrụ n'efu nke Google na-asụgharị okwu, ahịrịokwu, na ibe weebụ n'otu ntabi anya n'etiti English na karịa 100 asụsụ ndị ọzọ.";
    expect(wordsCount(content)).to.equal(22);
  });
  it('Indonesian', function() {
    const content = "Layanan gratis Google dengan cepat menerjemahkan kata, frasa, dan halaman web antara bahasa Inggris dan lebih dari 100 bahasa lainnya.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Irish', function() {
    const content = "Aistríonn seirbhís saor in aisce Google láithreach focail, frásaí agus leathanaigh ghréasáin idir Béarla agus os cionn 100 teanga eile.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Javanese', function() {
    const content = "Layanan gratis Google langsung nerjemahake tembung, frase, lan kaca web antarane basa Inggris lan luwih saka 100 basa liyane.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Kannada', function() {
    const content = "Google ನ ಉಚಿತ ಸೇವೆಯು ಇಂಗ್ಲಿಷ್ ಮತ್ತು 100 ಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಿನ ಭಾಷೆಗಳ ನಡುವೆ ಪದಗಳು, ಪದಗುಚ್ಛಗಳು ಮತ್ತು ವೆಬ್ ಪುಟಗಳನ್ನು ತಕ್ಷಣ ಭಾಷಾಂತರಿಸುತ್ತದೆ.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Kazakh', function() {
    const content = "Google-дің тегін қызметі ағылшын тілдері мен 100-ден астам басқа тілдердің арасындағы сөздерді, сөз тіркестерін және веб-беттерді жедел аударады.";
    expect(wordsCount(content)).to.equal(21);
  });
  it('Kurdish', function() {
    const content = "Gava xizmeta belaş ya Google yekser peyvan, navên û malperên di navbera Îngilîzî û ji 100 zimanên din de wergerandin.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Kyrgyz', function() {
    const content = "Google'дун акысыз кызмат заматта англис жана 100 башка тилде ортосундагы сөздөрдү, сөз айкаштарын, жана барактарды которот.";
    expect(wordsCount(content)).to.equal(16);
  });
  it('Latin', function() {
    const content = "Liberum servitium statim verba Googles ope apud translates: Phrases: et super C, et linguis Latina inter paginas.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Latvian', function() {
    const content = "Google bezmaksas pakalpojums nekavējoties pārveido vārdus, frāzes un tīmekļa lapas starp angļu valodu un vairāk nekā 100 citām valodām.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Lithuanian', function() {
    const content = '"Google" nemokama paslauga iš karto verčia žodžius, frazes ir tinklalapius iš anglų kalbos ir daugiau kaip 100 kitų kalbų.';
    expect(wordsCount(content)).to.equal(19);
  });
  it('Luxembourgish', function() {
    const content = 'De fräien Service vu Google gëtt direkt Iwwersetzungen, Wierder, an Websäiten tëschent Englesch an iwwer 100 anere Sproochen iwwersetzt.';
    expect(wordsCount(content)).to.equal(19);
  });
  it('Macedonian', function() {
    const content = 'Бесплатната услуга на Google веднаш преведува зборови, фрази и веб-страници помеѓу англиски и повеќе од 100 други јазици.';
    expect(wordsCount(content)).to.equal(19);
  });
  it('Malagasy', function() {
    const content = "Ny tolotrasa maimaim-poana ao Google dia avy hatrany dia mandika teny, andian-teny, ary tranonkala misy eo amin'ny teny anglisy sy fiteny 100 mahery.";
    expect(wordsCount(content)).to.equal(25);
  });
  it('Malay', function() {
    const content = "Perkhidmatan percuma Google serta menterjemahkan kata-kata, frasa, dan laman web antara bahasa Inggeris dan lebih dari 100 bahasa lain.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Malayalam', function() {
    const content = "ഇംഗ്ലീഷിലും കൂടാതെ 100-ലധികം ഭാഷകളിലുമുള്ള വാക്കുകളും വാചകങ്ങളും വെബ് പേജുകളും Google ൻറെ സൌജന്യ സേവനം തൽക്ഷണം വിവർത്തനം ചെയ്യുന്നു.";
    expect(wordsCount(content)).to.equal(16);
  });
  it('Nepali', function() {
    const content = "Google को नि: शुल्क सेवाले अंग्रेजी र 100 भन्दा बढी अन्य भाषाहरू बीचको शब्दहरू, वाक्यांशहरू, र वेब पृष्ठहरू तुरुन्तै अनुवाद गर्दछ।";
    expect(wordsCount(content)).to.equal(21);
  });
  it('Norwegian', function() {
    const content = "Googles gratis tjeneste oversetter umiddelbart ord, setninger og nettsider mellom engelsk og over 100 andre språk.";
    expect(wordsCount(content)).to.equal(16);
  });
  it('Polish', function() {
    const content = "Bezpłatna usługa Google błyskawicznie tłumaczy słowa, zwroty i strony internetowe między angielskim a ponad 100 innymi językami.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Romanian', function() {
    const content = "Serviciul gratuit Google traduce instantaneu cuvinte, fraze și pagini web între limba engleză și peste 100 de alte limbi.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Serbian', function() {
    const content = "Гоогле-ова бесплатна услуга тренутно преводи речи, фразе и веб странице између енглеског и преко 100 других језика.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Slovenian', function() {
    const content = "Googlova brezplačna storitev takoj prevaja besede, besedne zveze in spletne strani med angleščino in več kot 100 drugimi jeziki.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Swedish', function() {
    const content = "Googles kostnadsfria tjänst översätter direkt ord, fraser och webbsidor mellan engelska och över 100 andra språk.";
    expect(wordsCount(content)).to.equal(16);
  });
  it('Turkish', function() {
    const content = "Google'ın ücretsiz hizmeti, kelimeleri, kelime öbeklerini ve web sayfalarını İngilizce ve 100'den fazla başka dilde anında çevirir.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Welsh', function() {
    const content = "Mae gwasanaeth rhad ac am ddim Google yn gyfieithu geiriau, ymadroddion a thudalennau gwe rhwng Saesneg a thros 100 o ieithoedd eraill.";
    expect(wordsCount(content)).to.equal(22);
  });
  it('Zulu', function() {
    const content = "Insizakalo yamahhala yakwa-Google ishintsha ngokushesha amagama, imishwana, namakhasi ewebhu phakathi kweNgisi kanye nezinye izilimi ezingu-100.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Maori', function() {
    const content = "Ko te ratonga koreutu a Google ka whakawhiti i nga kupu, nga kupu, me nga whārangi tukutuku i waenga i te reo Ingarihi me te 100 atu reo.";
    expect(wordsCount(content)).to.equal(28);
  });
  it('Marathi', function() {
    const content = "Google ची विनामूल्य सेवा इंग्रजी आणि 100 अन्य भाषांमधील शब्द, वाक्यांश आणि वेब पृष्ठे झटकन अनुवादित करते.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Mongolian', function() {
    const content = "Google-ийн үнэгүй үйлчилгээ нь англиар болон 100 гаруй хэлнүүдийн хооронд үг, хэллэг, вэб хуудсыг даруй орчуулдаг.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Pashto', function() {
    const content = "د ګوګل وړیا خدمت په چټکه توګه د انګلستان او له 100 څخه زیاتو نورو ژبو تر منځ خبرې، جملې، او ویب پاڼې ژباړئ.";
    expect(wordsCount(content)).to.equal(24);
  });
  it('Persian', function() {
    const content = "سرویس رایگان گوگل فورا کلمات، عبارات و صفحات وب را بین انگلیسی ها و بیش از 100 زبان دیگر ترجمه می کند.";
    expect(wordsCount(content)).to.equal(22);
  });
  it('Punjabi', function() {
    const content = "Google ਦੀ ਮੁਫਤ ਸੇਵਾ ਅੰਗਰੇਜ਼ੀ, ਅਤੇ 100 ਤੋਂ ਵੱਧ ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਦੇ ਵਿੱਚ ਸ਼ਬਦਾਂ, ਵਾਕਾਂਸ਼ ਅਤੇ ਵੈਬ ਪੇਜਜ਼ ਦਾ ਤੁਰੰਤ ਅਨੁਵਾਦ ਕਰਦੀ ਹੈ.";
    expect(wordsCount(content)).to.equal(23);
  });
  it('Samoan', function() {
    const content = "O le free service a Google na vave faaliliuina upu, fuaitau, ma itulau web i le va o le Igilisi ma le silia i le 100 isi gagana.";
    expect(wordsCount(content)).to.equal(28);
  });
  it('Scots Gaelic', function() {
    const content = "Bidh seirbheis an-asgaidh Ghoogle a 'ciallachadh faclan, abairtean agus duilleagan eadar Beurla agus còrr is 100 cànan eile.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Sesotho', function() {
    const content = "Tšebeletso ea mahala ea Google hang-hang e fetolela mantsoe, lipolelo le maqephe a maqephe pakeng tsa Senyesemane le lipuo tse ling tse fetang 100.";
    expect(wordsCount(content)).to.equal(25);
  });
  it('Shona', function() {
    const content = "Basa rebasa reGoogle rinobva rashandura mazwi, mitsara, nemapeji ewebhu pakati peChirungu nemamwe mitauro zana.";
    expect(wordsCount(content)).to.equal(14);
  });
  it('Sindhi', function() {
    const content = "گوگل جي مفت خدمت، انگريز ۽ مٿي 100 ٻين ٻولين جي وچ ۾ فوري طور لفظن، جملن، ۽ ويب صفحا.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Sinhala', function() {
    const content = "ගූගල්ගේ නොමිලේ සේවාව ක්ෂණිකව ඉංග්රීසි සහ වචන 100 කට වැඩි භාෂා ගණනකින් වචන, වාක්ය සහ වෙබ් පිටු පරිවර්තනය කරයි.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Slovak', function() {
    const content = "Bezplatná služba Google okamžite prekladá slová, frázy a webové stránky medzi angličtinu a viac ako 100 ďalších jazykov.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Somali', function() {
    const content = "Adeegga bilaashka ah ee Google ayaa si dhakhso ah u turjumaya ereyo, odhaaho, iyo bogag internet ah oo u dhaxeeya Ingiriisiga iyo in ka badan 100 luqadood oo kale.";
    expect(wordsCount(content)).to.equal(29);
  });
  it('Sundanese', function() {
    const content = "jasa bébas Google instan ditarjamahkeun kecap, frasa, jeung kaca ramat antara Inggris jeung leuwih 100 basa séjén.";
    expect(wordsCount(content)).to.equal(17);
  });
  it('Swahili', function() {
    const content = "Huduma ya bure ya Google mara moja hutafsiri maneno, misemo, na kurasa za wavuti kati ya Kiingereza na zaidi ya lugha 100.";
    expect(wordsCount(content)).to.equal(22);
  });
  it('Tajik', function() {
    const content = "Хизмати ройгони Google instantly калимаҳо, ибораҳо ва саҳифаҳои веб дар забони англисӣ ва зиёда аз 100 забонҳои дигарро тарҷума мекунад.";
    expect(wordsCount(content)).to.equal(20);
  });
  it('Telugu', function() {
    const content = "Google యొక్క ఉచిత సేవ పదాలు, పదబంధాలు మరియు వెబ్ పేజీలను ఇంగ్లీష్ మరియు 100 కంటే ఎక్కువ భాషల మధ్య తక్షణమే అనువదిస్తుంది.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Turkish', function() {
    const content = "Google'ın ücretsiz hizmeti, kelimeleri, kelime öbeklerini ve web sayfalarını İngilizce ve 100'den fazla başka dilde anında çevirir.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Urdu', function() {
    const content = "Google کی مفت سروس انگریزی اور 100 سے زائد دیگر زبانوں کے درمیان الفاظ، جملے، اور ویب صفحات کو فوری طور پر ترجمہ کرتا ہے.";
    expect(wordsCount(content)).to.equal(25);
  });
  it('Uzbek', function() {
    const content = "Google bepul xizmati ingliz va 100 dan ortiq boshqa tillardagi so'zlar, iboralar va veb-sahifalarni bir zumda tarjima qiladi.";
    expect(wordsCount(content)).to.equal(19);
  });
  it('Vietnamese', function() {
    const content = "Dịch vụ miễn phí của Google ngay lập tức dịch các từ, cụm từ và trang web giữa tiếng Anh và hơn 100 ngôn ngữ khác.";
    expect(wordsCount(content)).to.equal(26);
  });
  it('Xhosa', function() {
    const content = "Inkonzo yamahhala ye-Google iguqulela ngokukhawuleza amagama, amabinzana kunye namaphepha ewebhu phakathi kweesiNgesi kunye nezinye iilwimi ezili-100.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Yiddish', function() {
    const content = "דער גוגל'ס פריי דינען תנאים איבערזעצן ווערטער, פראַסעס און וועב זייטלעך צווישן ענגליש און איבער 100 אנדערע שפראכן.";
    expect(wordsCount(content)).to.equal(18);
  });
  it('Yoruba', function() {
    const content = "Iṣẹ ọfẹ ọfẹ ti Google lesekese tumọ ọrọ, gbolohun ọrọ, ati oju-iwe wẹẹbu laarin English ati ju 100 awọn ede miran lọ.";
    expect(wordsCount(content)).to.equal(23);
  });
  
  describe('Config', function() {
    it('Punctuation Breaker', function() {
      const content = "Google's free service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuationAsBreaker: true
      })).to.equal(18);
    });
    it('Wipe out default punctuation list', function() {
      const content = "Google's free service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        disableDefaultPunctuation: true
      })).to.equal(18);
    });
    it('Considering more simbol as punctuation', function() {
      const content = "Google's free-service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuation: ['-']
      })).to.equal(16);
    });
    it('Considering more simbol as punctuation 2', function() {
      const content = "Googles free-service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuation: ['-']
      })).to.equal(16);
    });
    it('Considering more simbol as punctuation as word breaker', function() {
      const content = "Google's free-service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuation: ['-'],
        punctuationAsBreaker: true
      })).to.equal(18);
    });
    it('Considering more simbol as punctuation as word breaker 2', function() {
      const content = "Googles free-service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuation: ['-'],
        punctuationAsBreaker: true
      })).to.equal(17);
    });
    it('Only use simbol provided as punctuation', function() {
      const content = "Google's free-service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuation: ['-'],
        disableDefaultPunctuation: true
      })).to.equal(17);
    });
    it('Only use simbol provided as punctuation 2', function() {
      const content = "Googles free-service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuation: ['-'],
        disableDefaultPunctuation: true
      })).to.equal(16);
    });
    it('Only use simbol provided as punctuation as word breaker', function() {
      const content = "Google's free-service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuation: ['-'],
        disableDefaultPunctuation: true,
        punctuationAsBreaker: true
      })).to.equal(18);
    });
    it('Only use simbol provided as punctuation as word breaker 2', function() {
      const content = "Googles free-service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      expect(wordsCount(content, {
        punctuation: ['-'],
        disableDefaultPunctuation: true,
        punctuationAsBreaker: true
      })).to.equal(17);
    });
  });

  describe('Special', function() {
    it('Same punctuation multiple times: apostrophe', function() {
      const content = "Google's'home is a server.";
      expect(wordsCount(content)).to.equal(4);
    });
    it('Same punctuation multiple times as breaker: apostrophe', function() {
      const content = "Google's'home is a server.";
      expect(wordsCount(content, {
        punctuationAsBreaker: true
      })).to.equal(6);
    });
    it('Same punctuation multiple times: colon', function() {
      const content = "Google:s:home is a server.";
      expect(wordsCount(content)).to.equal(4);
    });
    it('Same punctuation multiple times as breaker: colon', function() {
      const content = "Google:s:home is a server.";
      expect(wordsCount(content, {
        punctuationAsBreaker: true
      })).to.equal(6);
    });
  });

  describe('Split and detector', function() {
    it('English', function() {
      const content = "Google's free service instantly translates words, phrases, and web pages between English and over 100 other languages.";
      const splittedContent = [
        'Googles', 'free', 'service', 'instantly', 'translates', 'words',
        'phrases', 'and', 'web', 'pages', 'between', 'English', 'and',
        'over', '100', 'other', 'languages'
      ];
      expect(count(content)).to.equal(17);
      expect(wordsIsExpected(split(content), splittedContent)).to.equal(true);
      const { words: detectedWords, count: detectedCount } = detect(content);
      expect(detectedCount).to.equal(17);
      expect(wordsIsExpected(detectedWords, splittedContent)).to.equal(true);
    });
    it('Chinese', function() {
      const content = "Google的免费服务可即时翻译英文和其他100多种语言的文字，短语和网页。";
      const splittedContent = [
        'Google', '的', '免', '费', '服', '务', '可', '即', '时', '翻', '译',
        '英', '文', '和', '其', '他', '100', '多', '种', '语', '言', '的',
        '文', '字', '短', '语', '和', '网', '页'
      ];
      expect(count(content)).to.equal(29);
      expect(wordsIsExpected(split(content), splittedContent)).to.equal(true);
      const { words: detectedWords, count: detectedCount } = detect(content);
      expect(detectedCount).to.equal(29);
      expect(wordsIsExpected(detectedWords, splittedContent)).to.equal(true);
    });
  });
}); 
