var wordsSplit = require('./globalWordsSplit.js');
var expect = require('chai').expect;

describe('Simple', function() {
  it('English', function() {
    expect(wordsSplit('Hello World').length).to.equal(2);
  });
  it('Chinese', function() {
    expect(wordsSplit('你好，世界').length).to.equal(4);
  });
  it('English-Chinese', function() {
    expect(wordsSplit('Hello, 你好。').length).to.equal(3);
  });
  it('English-Chinese-Japanese-Number', function() {
    expect(wordsSplit("Let's say ‘你好’ 100 times per day, 勤勉").length).to.equal(10);
  });
});

describe('Basic', function() {
  it('English', function() {
    const content = "Google's free service instantly translates words, phrases, and web pages between English and over 100 other languages.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Chinese', function() {
    const content = "Google的免费服务可即时翻译英文和其他100多种语言的文字，短语和网页。";
    expect(wordsSplit(content).length).to.equal(29);
  });
  it('Chinese-Traditional', function() {
    const content = "Google的免費服務可即時翻譯英文和其他100多種語言的文字，短語和網頁。";
    expect(wordsSplit(content).length).to.equal(29);
  });
  it('Japanese', function() {
    const content = "Googleの無料サービスは、英語と100以上の他の言語との間で、単語、フレーズ、およびウェブページを即座に翻訳します。";
    expect(wordsSplit(content).length).to.equal(48);
  });
  it('Korean', function() {
    const content = "Google의 무료 서비스는 단어와 구문, 웹 페이지를 영어와 100 개 이상의 다른 언어로 즉시 번역합니다.";
    expect(wordsSplit(content).length).to.equal(38);
  });
  it('French', function() {
    const content = "Le service gratuit de Google traduit instantanément des mots, des expressions et des pages Web entre l'anglais et plus de 100 autres langues.";
    expect(wordsSplit(content).length).to.equal(23);
  });
  it('German', function() {
    const content = "Der kostenlose Google-Dienst übersetzt Wörter, Sätze und Webseiten sofort in Englisch und über 100 andere Sprachen.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Italian', function() {
    const content = "Il servizio gratuito di Google traduce istantaneamente parole, frasi e pagine Web tra l'inglese e oltre 100 altre lingue.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Spanish', function() {
    const content = "El servicio gratuito de Google traduce al instante palabras, frases y páginas web entre inglés y más de 100 idiomas.";
    expect(wordsSplit(content).length).to.equal(20);
  });
  it('Portuguese', function() {
    const content = "O serviço gratuito do Google traduz instantaneamente palavras, frases e páginas da web entre inglês e mais de 100 outros idiomas.";
    expect(wordsSplit(content).length).to.equal(21);
  });
  it('Russian', function() {
    const content = "Бесплатный сервис Google мгновенно переводит слова, фразы и веб-страницы между английским и более 100 другими языками.";
    expect(wordsSplit(content).length).to.equal(16);
  });
  it('Ukrainian', function() {
    const content = "Безкоштовна служба Google миттєво перекладає слова, фрази та веб-сторінки між англійською мовою та більш ніж 100 іншими мовами.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Arabic', function() {
    const content = "تعمل خدمة Google المجانية على الفور على ترجمة الكلمات والعبارات وصفحات الويب بين الإنجليزية وأكثر من 100 لغة أخرى.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Hebrew', function() {
    const content = "השירות החינמי של גוגל מתרגם באופן מיידי מילים, ביטויים ודפי אינטרנט בין אנגלית ל -100 שפות נוספות.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Afrikaans', function() {
    const content = "Google se gratis diens vertaal onmiddellik woorde, frases en webblaaie tussen Engels en meer as 100 ander tale.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Albanian', function() {
    const content = "Shërbimi i lirë i Google përkthen në çast fjalët, frazat dhe faqet në internet midis anglishtes dhe mbi 100 gjuhëve të tjera.";
    expect(wordsSplit(content).length).to.equal(22);
  });
  it('Amharic', function() {
    const content = "የ Google ነጻ አገልግሎት በፍጥነት ከእንግሊዝኛ እና ከ 100 በላይ በሆኑ ሌሎች ቋንቋዎች ቃላትን, ሐረጎችን, እና ድረ-ገጾችን ይተረጉማል.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Armenian', function() {
    const content = "Google- ի անվճար ծառայությունը անմիջապես թարգմանում է բառեր, արտահայտություններ եւ վեբ էջեր անգլերենի եւ ավելի քան 100 այլ լեզուների միջեւ:";
    expect(wordsSplit(content).length).to.equal(20);
  });
  it('Azerbaijani', function() {
    const content = "Google-un pulsuz xidməti İngilis dili ilə 100-dən çox digər dillər arasında sözləri, sözləri və veb səhifələrini dərhal tərcümə edir.";
    expect(wordsSplit(content).length).to.equal(21);
  });
  it('Basque', function() {
    const content = "Google-ren doako zerbitzua ingelesez eta beste 100 hizkuntzatan baino gehiagotan hitzak, esaldiak eta web orriak itzultzen ditu instantan.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Belarusian', function() {
    const content = "Бясплатны сэрвіс Google імгненна перакладае словы, фразы і вэб-старонак паміж ангельскай і больш за 100 іншых моў.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Bengali', function() {
    const content = "Google এর বিনামূল্যের পরিষেবাটি ইংরেজী এবং আরো 100 টিরও বেশি ভাষার মধ্যে শব্দ, বাক্যাংশ এবং ওয়েব পৃষ্ঠাগুলিকে সঙ্গে সঙ্গে অনুবাদ করে।";
    expect(wordsSplit(content).length).to.equal(21);
  });
  it('Bulgarian', function() {
    const content = "Безплатната услуга на Google незабавно превежда думи, фрази и уеб страници между английски и над 100 други езици.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Bosnian', function() {
    const content = "Google-ova besplatna usluga trenutno prevodi riječi, fraze i web stranice između engleskog i preko 100 drugih jezika.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Catalan', function() {
    const content = "El servei gratuït de Google tradueix de manera instantània paraules, frases i pàgines web entre l'anglès i més de 100 idiomes.";
    expect(wordsSplit(content).length).to.equal(21);
  });
  it('Cebuano', function() {
    const content = "Ang libreng serbisyo sa Google diha-diha dayon naghubad sa mga pulong, hugpong sa mga pulong, ug mga panid sa web tali sa Iningles ug kapin sa 100 ka lain nga mga pinulongan.";
    expect(wordsSplit(content).length).to.equal(33);
  });
  it('Croatian', function() {
    const content = "Googleova besplatna usluga trenutačno prevodi riječi, fraze i web stranice između engleskog jezika i preko 100 drugih jezika.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Chichewa', function() {
    const content = "Utumiki waulere wa Google nthawi yomweyo amatanthauzira mawu, mawu, ndi masamba a pakati pa Chingerezi ndi zinenero zina zoposa 100.";
    expect(wordsSplit(content).length).to.equal(20);
  });
  it('Corsican', function() {
    const content = "U serviziu di Google gratuituamente traduce parole, parole è pagine web entre inglesu è più di 100 altre lingue.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Czech', function() {
    const content = "Bezplatná služba Google okamžitě přeloží slova, fráze a webové stránky mezi angličtinu a více než 100 dalších jazyků.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Danish', function() {
    const content = "Googles gratis service oversætter øjeblikkeligt ord, sætninger og websider mellem engelsk og over 100 andre sprog.";
    expect(wordsSplit(content).length).to.equal(16);
  });
  it('Dutch', function() {
    const content = "De gratis service van Google vertaalt woorden, zinnen en webpagina's onmiddellijk tussen Engels en meer dan 100 andere talen.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Esperanto', function() {
    const content = "La libera servo de Google tuj tradukas vortojn, frazojn kaj retpaĝojn inter la angla kaj pli ol 100 aliaj lingvoj.";
    expect(wordsSplit(content).length).to.equal(20);
  });
  it('Estonian', function() {
    const content = "Google'i tasuta teenus koheselt tõlgib sõnu, fraase ja veebilehti inglise keele ja üle 100 muu keele vahel.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Filipino', function() {
    const content = "Ang libreng serbisyo ng Google ay agad na nagta-translate ng mga salita, parirala, at mga web page sa pagitan ng Ingles at mahigit sa 100 iba pang mga wika.";
    expect(wordsSplit(content).length).to.equal(30);
  });
  it('Finnish', function() {
    const content = "Googlen ilmainen palvelu kääntää hetkessä sanat, lauseet ja verkkosivut englannin ja yli 100 muulla kielellä.";
    expect(wordsSplit(content).length).to.equal(15);
  });
  it('Frisian', function() {
    const content = "De frije tsjinst fan Google ferwiist fuortendaliks wurden, wurden, en websiden tusken Ingelsk en mear as 100 oare talen.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Greek', function() {
    const content = "Η δωρεάν υπηρεσία της Google μεταφράζει άμεσα λέξεις, φράσεις και ιστοσελίδες μεταξύ αγγλικών και πάνω από 100 άλλες γλώσσες.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Galician', function() {
    const content = "O servizo gratuíto de Google traduce instantáneamente palabras, frases e páxinas web entre inglés e máis de 100 idiomas.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Georgian', function() {
    const content = "Google- ის უფასო სერვისი მყისიერად თარგმნის სიტყვებს, ფრაზებსა და ვებ გვერდებს ინგლისურ ენასა და 100-ზე მეტ ენაზე.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Gujarati', function() {
    const content = "Google ની મફત સેવા અંગ્રેજી અને 100 અન્ય ભાષાઓમાંના શબ્દો, શબ્દસમૂહો અને વેબ પૃષ્ઠોને તરત અનુવાદિત કરે છે.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Haitian Creole', function() {
    const content = "Sèvis gratis Google la imedyatman tradui mo, fraz, ak paj entènèt ant angle ak plis pase 100 lòt lang.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Hausa', function() {
    const content = "Sabis na kyauta na Google nan take fassara kalmomi, kalmomi, da kuma shafukan intanet tsakanin Ingilishi da fiye da 100 sauran harsuna.";
    expect(wordsSplit(content).length).to.equal(22);
  });
  it('Hindi', function() {
    const content = "Google की नि: शुल्क सेवा तुरंत अंग्रेजी और 100 से अधिक अन्य भाषाओं के बीच शब्दों, वाक्यांशों और वेब पृष्ठों का अनुवाद करती है।";
    expect(wordsSplit(content).length).to.equal(24);
  });
  it('Hmong', function() {
    const content = "Google txoj kev pab dawb yog txhais cov lus, nqe lus, thiab cov nplooj ntawv web ntawm lus Askiv thiab tshaj 100 lwm yam lus.";
    expect(wordsSplit(content).length).to.equal(25);
  });
  it('Hungarian', function() {
    const content = "A Google ingyenes szolgáltatása azonnal fordít szavakat, kifejezéseket és weboldalakat angol és több mint 100 nyelven.";
    expect(wordsSplit(content).length).to.equal(16);
  });
  it('Icelandic', function() {
    const content = "Ókeypis þjónustu Google er þegar í stað þýtt orð, orðasambönd og vefsíður á milli ensku og yfir 100 önnur tungumál.";
    expect(wordsSplit(content).length).to.equal(20);
  });
  it('Igbo', function() {
    const content = "Ọrụ n'efu nke Google na-asụgharị okwu, ahịrịokwu, na ibe weebụ n'otu ntabi anya n'etiti English na karịa 100 asụsụ ndị ọzọ.";
    expect(wordsSplit(content).length).to.equal(22);
  });
  it('Indonesian', function() {
    const content = "Layanan gratis Google dengan cepat menerjemahkan kata, frasa, dan halaman web antara bahasa Inggris dan lebih dari 100 bahasa lainnya.";
    expect(wordsSplit(content).length).to.equal(20);
  });
  it('Irish', function() {
    const content = "Aistríonn seirbhís saor in aisce Google láithreach focail, frásaí agus leathanaigh ghréasáin idir Béarla agus os cionn 100 teanga eile.";
    expect(wordsSplit(content).length).to.equal(20);
  });
  it('Latin', function() {
    const content = "Liberum servitium statim verba Googles ope apud translates: Phrases: et super C, et linguis Latina inter paginas.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Latvian', function() {
    const content = "Google bezmaksas pakalpojums nekavējoties pārveido vārdus, frāzes un tīmekļa lapas starp angļu valodu un vairāk nekā 100 citām valodām.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Lithuanian', function() {
    const content = '"Google" nemokama paslauga iš karto verčia žodžius, frazes ir tinklalapius iš anglų kalbos ir daugiau kaip 100 kitų kalbų.';
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Nepali', function() {
    const content = "Google को नि: शुल्क सेवाले अंग्रेजी र 100 भन्दा बढी अन्य भाषाहरू बीचको शब्दहरू, वाक्यांशहरू, र वेब पृष्ठहरू तुरुन्तै अनुवाद गर्दछ।";
    expect(wordsSplit(content).length).to.equal(21);
  });
  it('Norwegian', function() {
    const content = "Googles gratis tjeneste oversetter umiddelbart ord, setninger og nettsider mellom engelsk og over 100 andre språk.";
    expect(wordsSplit(content).length).to.equal(16);
  });
  it('Polish', function() {
    const content = "Bezpłatna usługa Google błyskawicznie tłumaczy słowa, zwroty i strony internetowe między angielskim a ponad 100 innymi językami.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Romanian', function() {
    const content = "Serviciul gratuit Google traduce instantaneu cuvinte, fraze și pagini web între limba engleză și peste 100 de alte limbi.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Serbian', function() {
    const content = "Гоогле-ова бесплатна услуга тренутно преводи речи, фразе и веб странице између енглеског и преко 100 других језика.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  it('Slovenian', function() {
    const content = "Googlova brezplačna storitev takoj prevaja besede, besedne zveze in spletne strani med angleščino in več kot 100 drugimi jeziki.";
    expect(wordsSplit(content).length).to.equal(19);
  });
  it('Swedish', function() {
    const content = "Googles kostnadsfria tjänst översätter direkt ord, fraser och webbsidor mellan engelska och över 100 andra språk.";
    expect(wordsSplit(content).length).to.equal(16);
  });
  it('Turkish', function() {
    const content = "Google'ın ücretsiz hizmeti, kelimeleri, kelime öbeklerini ve web sayfalarını İngilizce ve 100'den fazla başka dilde anında çevirir.";
    expect(wordsSplit(content).length).to.equal(18);
  });
  it('Welsh', function() {
    const content = "Mae gwasanaeth rhad ac am ddim Google yn gyfieithu geiriau, ymadroddion a thudalennau gwe rhwng Saesneg a thros 100 o ieithoedd eraill.";
    expect(wordsSplit(content).length).to.equal(22);
  });
  it('Zulu', function() {
    const content = "Insizakalo yamahhala yakwa-Google ishintsha ngokushesha amagama, imishwana, namakhasi ewebhu phakathi kweNgisi kanye nezinye izilimi ezingu-100.";
    expect(wordsSplit(content).length).to.equal(17);
  });
  
}); 
