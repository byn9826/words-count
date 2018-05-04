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
    expect(wordsSplit(content).length).to.equal(16);
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

});
