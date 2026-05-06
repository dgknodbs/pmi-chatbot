/**
   * PMI Türkiye SSS — Bilgi Kaynağı (Resmi Veri)
   * --------------------------------------------------------------
   * Bu dosya chatbot'un TEK bilgi kaynağıdır. Aşağıdaki dizide
   * yer alan soru-cevaplar dışında bir yanıt üretilmez.
   *
   * Yapı:
   *   { category: "...", question: "...", answer: "..." }
   *
   * Kategori değerleri:
   *   Genel, Üyelik, Kurumsal Üyelik, PMP, CAPM, Sertifikasyon,
   *   Gönüllülük, Mentorluk, Sponsorluk, Dergi, PDU, Etkinlikler
   *
   * Yeni soru eklemek için aynı yapıyı koruyarak yeni bir nesne
   * ekleyin. Mükerrer kayıtlardan kaçının.
   */
  const faqData = [
  
  // ─── Sertifikasyon ───
  {
    category: "Sertifikasyon",
    question: "İstenen belgeleri ne kadar sürede temin etmeliyim?",
    answer: "İstenen tüm belgeler 90 gün içinde PMI’ye ulaşmalıdır.",
  },

  // ─── Üyelik ───
  {
    category: "Üyelik",
    question: "Çoklu üyeliklerde fiyat avantajı sağlanıyor mu?",
    answer: "Evet. Bir şirket veya krurumdan en az 15 kişinin PMI’a ve PMI’ın bir Chapter’ına üye olması koşuluyla Grup Üyeliği avantajlarından yararlanılabilir. Bu konuda detaylı bilgi için aşağıdaki bağlantıyı kullanabilir. https://www.pmi.org/membership/types/group-billingve groupbilling@pmi.org mail adresinden bilgi alabilirsiniz. Grup üyeliklerinde sadece fiyat avantajı sağlamakla kalmaz aynı zamanda üyelikle ilgili üyelik başvurusu ile ilgili dokümantasyon işlemlerinizi de en aza indirgemiş olursunuz.",
  },
  {
    category: "Üyelik",
    question: "PMI TR Chapter üyesiyim. Etkinlikler ve çalışmalardan düzenli haberdar olmak için ne yapmalıyım?",
    answer: "Bize info@pmi.org.tr adresinden ulaşabilirsiniz. Web sitemizin iletişim sayfasını kullanarak https://www.pmi.org.tr/iletisim/ e-posta listemize üye olabilirsiniz. Bizi sosyal medya kanallarımızdan takip edebilirsiniz: PMI Türkiye web sitemiz:       https://www.pmi.org.tr, Linkedin sayfamız:                 https://tr.linkedin.com/company/pmi-tr, Facebook sayfamız:               https://www.facebook.com/PMITR/, YouTube kanalımız:               https://www.youtube.com/user/ PmiTurkeyChapter, Twitter hesabımız:                  https://twitter.com/pmi_tr, Ayrıca, volunteer@pmi.org.tr mail adresini kullanarak Gönüllü ekibimize katılım talebinde bulunabilirsiniz.",
  },
  {
    category: "Üyelik",
    question: "PMI Türkiye Chapter Üyelik avantajları nelerdir?",
    answer: "PMI Türkiye Chapter Üyeliği ile Yerel Topluluğun Bir Parçası Olun! PMI Türkiye, proje yönetimi mesleğinin ülkemizde gelişimini desteklemek ve bu gelişimi üyelerinin katkısıyla daha da ileri taşımak için faaliyet göstermektedir. PMI Global üyeliğinize ek olarak PMI Türkiye üyesi olmak, aşağıdaki ayrıcalıklardan faydalanmanızı sağlar:1. Kariyer, Bilgi ve Yeni BağlantılarPMI Türkiye etkinlikleri sayesinde: Mesleki bilgi ve becerilerinizi geliştirebilir, Deneyim paylaşımıyla karşılıklı öğrenme ortamı yakalayabilir, Yeni işbirlikleri kurarak profesyonel çevrenizi genişletebilirsiniz.2. PDU Kazanma FırsatlarıPMI Türkiye tarafından düzenlenen aylık etkinlikler, seminerler ve webinarlarla hem güncel kalır hem de sürekli mesleki gelişim (PDU) puanları kazanabilirsiniz.3. Gönüllülük ile Etki YaratınPMI Türkiye’nin tüm faaliyetleri gönüllülük esasına dayalı olarak yürütülmektedir. Birlikte üretmek, paylaşmak ve katkı sağlamak isteyen her üye, gönüllü olarak rol alabilir.4. Yönetim Kuruluna Katkı SağlayınPMI Türkiye üyeleri, her yıl yapılan Yönetim Kurulu seçimlerinde oy kullanma hakkına sahiptir.5. Özel Üye İndirimlerinden YararlanınSeminerler, atölyeler, çalışma grupları ve diğer mesleki gelişim etkinliklerine özel indirimlerle katılabilirsiniz. PMI Global onaylı eğitim sağlayıcıların (ATP – Authorized Training Partner) sunduğu eğitim programlarında üyeye özel avantajlar sizi bekliyor.",
  },
  {
    category: "Üyelik",
    question: "PMI Türkiye'ye nasıl üye olabilirim?",
    answer: "PMI Global Üyeliği ile Proje Yönetiminde Bir Adım Öne Çıkın!\n\nPMI Global üyeliği satın aldığınızda, sadece uluslararası bir topluluğun parçası olmakla kalmazsınız, aynı zamanda bulunduğunuz ülkenin yerel temsilciliğine (Chapter) de otomatik olarak üye olursunuz.\n\nPMI Türkiye Chapter üyeliğiniz de otomatik olarak başlar ve aktif hale gelir.\n– Ek bir başvuru yapmanıza veya ödeme gerçekleştirmenize gerek yoktur.\n– PMI Türkiye, global üyeliğinizin aktif olduğu sürece sizlere hizmet sunar.\n\nDetaylı bilgi ve üyelik satın almak için: https://www.pmi.org/store/ sayfasını ziyaret edebilirsiniz.",
  },
  {
    category: "Üyelik",
    question: "PMI Üyelik seçenekleri nelerdir?",
    answer: "PMI Global’de 3 tip üyelik seçeneği mevcuttur. Öğrenci Üyelik: Tam zamanlı öğrencilere özel, indirimli üyelik türüdür. Bireysel Üyelik: Çalışan profesyoneller için standart üyelik seçeneğidir. Emeklilik Üyeliği: Emekli olan ve uzun süre üyelik geçmişi olan kişiler içindir. Detaylı bilgi ve başvuru için: https://www.pmi.org/membership sayfasını ziyaret edebilirsiniz.",
  },
  {
    category: "Üyelik",
    question: "Yüksek Lisans öğrencisiyim. PMI Öğrenci Üyeliğini seçebilir miyim?",
    answer: "PMI‘ın öğrenci üyeliği tanımında “Full-time student” yani “Tam zamanlı öğrenci” ibaresi yer almaktadır. Yüksek lisans öğrencisi iseniz PMI’ın tam zamanlı öğrenci tanımının sizin için uygun olduğu söylenemez. Yüksek lisansın yanısıra bir işte de çalışıyorsanız, öğrenci üyelik yerine sizin için uygun olan model bireysel üyelik olacaktır. PMI, kişilerin beyan etmiş olduğu tüm bilgilerin doğru olduğunu kabul eden bir kuruluştur. Sürece başvururken kabul ettiğiniz etik kuralların işletilmesi konusunda son derece hassastır. PMI Audit sürecine kalırsanız ya da bir şikayet durumunda belgeniz geçersiz sayılır ise başvurunuz kabul edilmeyebilir. PMI doğru bilgi beyan etmediğinizi düşünür ise de ilişiğinizi kesip başvurularınızı kabul etmeyebilir.",
  },

  // ─── Kurumsal Üyelik ───
  {
    category: "Kurumsal Üyelik",
    question: "Kurumsal Üyelik nedir?",
    answer: "Kurumsal üyelik, PMI Türkiye Chapter bünyesinde 2016 yılı itibariyle başlatılmış olan bir programdır. Program, Chapter ile kurumlar arasındaki işbirliği çalışmaları kapsamında, karşılıklı faydaların arttırılması ve işbirliğinin sürekliliğinin sağlanması amacıyla işletime alınmıştır.",
  },
  {
    category: "Kurumsal Üyelik",
    question: "Kurumsal Üyelik programının amacı nedir?",
    answer: "Bu program ile amacımız kurumlarımızın çalışanlarının PMI ve PMI Türkiye Chapter üyeliklerini desteklemesini sağlamak ve üyeliğin getireceği avantaj ve sağlayacağı değerler ile çalışanların yetkinliklerinin artması; kurumların da daha yetkin çalışanların katacağı değerlerle daha başarılı projelere imza atmalarını sağlamaktır.",
  },
  {
    category: "Kurumsal Üyelik",
    question: "Kurumsal Üyelik programıyla kurumumuz ve PMI TR arasındaki karşılıklı kazanımlar neler olacaktır?",
    answer: "Bu programla taraflar arası karşılıklı kazanımlar açısından izlenen temel yaklaşımlar şöyle sıralanabilir: Farkındalık: Kurumsal üyelik modeli ile amaçlanan önemli faydalardan biri, ülkemizde proje yönetiminin önemini vurgulamak, organizasyonların ve ülkemizin kısıtlı kaynaklarının etkin kullanımına olumlu etkisine yönelik farkındalığı arttırmaktır. PMI Türkiye bu amaçla, Kurumsal Üyeleri ile yakın işbirliği içinde çalışmalarını yürütür. Görünürlük: PMI Türkiye tarafından yayınlanan Proje Yönetim Dünyası dergisi, web sitesi ve etkinliklere ait görsel medya gibi çeşitli platformlarda Kurumsal üyelerimiz vurgulanır. Eğitim: PMI Türkiye tarafından, talep edilmesi halinde üye kuruma eğitimler verilir. PMI Türkiye çalışmalarının tanıtıldığı ve PMBOK içeriğinin açıklandığı bu eğitimler, kurumsal üyelik kapsamında ücretsiz olarak sağlanır. Mentorluk: PMI Türkiye yıllık planlaması doğrultusunda üye kuruma mentorluk hizmeti sağlanır. Bu hizmet kapsamında üye kurumda proje yönetimi çalışmalarının yürütülmesi, proje yönetim ofisi kurulumu ve PMI sertifikasyonuna hazırlık çalışmalarında, PMI Türkiye tarafından mentorluk desteği sağlanmaktadır. PMI Meslek Ödülleri: PMI Professional Awards, PMI tarafından her yıl, proje yönetimi mesleğine yapılan katkıları onurlandırmak üzere verilen ödüllerdir. Ödüller; projeler, ürünler, akademik yayınlar ve benzer mesleki çalışmalar için kişiler ve kurumlar özelinde verilir. PMI Türkiye tarafından kurumsal üyeler için, talep edilmesi durumunda bu ödüllere başvuru sürecinde destek sağlanır. Esneklik: Her kurumun proje yönetimi kapsamında farklı ihtiyaç ve beklentilerine PMI Türkiye elindeki küresel imkanlarla destek olmaktadır. Dünyadaki hemen hemen her ülkeye ulaşabilen proje yönetimi ağı ile özellikle küresel ölçekte çalışan kurumlarımıza değer katabilecek imkanlar sunabilmektedir.",
  },
  {
    category: "Kurumsal Üyelik",
    question: "Ne tür gönüllü çalışma yapabilirim?",
    answer: "Chapter bünyesinde yürütülen faaliyetlerin bir kısmı aşağıda yer almakta olup, hayata geçirilebilecek projeler gönüllülerimizin hayal gücü ile sınırlıdır. Kurumsal Üyelik Gönüllü proje ekibimiz büyük kurumları ziyaret ederek PMI ve PMI Türkiye Chapter’ı tanıtıyor, proje yönetimini anlatıyor, çalışanlarının üye olması ile ne gibi faydalar kazanacaklarının farkındalığını oluşturmaya çalışıyorlar. CAPM Sertifikası Eğitimleri PMI’nın verdiği sertifikalardan biri olan CAPM sertifikasının eğitimlerini öğrencilerin çalışma hayatlarına daha hazır olarak başlamalarını sağlamak için ücretsiz olarak veriyoruz. Bu eğitimlerin hem içeriğini hazırlayan hem de eğitimlerini veren gönüllü bir proje ekibimiz var. PM Summit İstanbul-Ankara Yılda bir kez İstanbul ve Ankara’da düzenlenen uluslararası katılımlı Summitlerin organizasyonunu yapan, konuşmacıları, programı, program içeriğini oluşturan gönüllü Proje ekibimiz bulunmaktadır. Proje Yönetim Dünyası Dergimiz Her yıl belirli periyotlar ile dergi yayınlıyoruz. Dergi tamamen gönüllülerimizin desteği ile hazırlanmaktadır. Derginin içeriğinin hazırlanması, röportaj yapılması gibi işler için gönüllülerimiz destek olmaktadır. Sosyal Medya Sosyal medyada düzenli olarak paylaşımlar yapan bir gönüllü ekibimiz bulunmaktadır (Twitter, Facebook, Linkedin). Profesyonel Gelişim Aktiviteleri Her ay İstanbul’da 2, Ankara’da 1 ve İzmir’de farklı periyotlar ile gerçekleştirilen etkinlikleri organize eden, konuşmacı ayarlayan bir gönüllü ekibimiz var. Etkinlikleri pmi.org.tr web sayfamızdan takip edebilirsiniz. PMI Educational Foundation (PMIEF) PMI Türkiye bünyesinde ilkokul öğretmenlerine eğitim verilerek verilen bilgilerin öğrencilere aktarılmasının beklendiği, çeşitli Okullarda programı yürüten gönüllü bir proje ekibimiz bulunmaktadır. Yılın En İyi Projesi Yılın en iyi projesi ödülünü koordine etmek ve şartlarını belirlemek için çalışan bir gönüllü proje ekibimiz bulunmaktadır. Gönüllülerin Yönetimi Gönüllülük taleplerini yöneten ve ayrıca Üniversitelere ziyaretlerde bulunarak proje yönetimi, PMI ve PMI TR’nin çalışmalarının tanıtımını yapan bir ekibimiz bulunmaktadır. Mentörlük Üniversite öğrencilerine mentörlük yapan gönüllü proje ekibimiz bulunmaktadır. Bilgi Teknolojileri Ekibi Web sayfası ve Chapter içi iletişimi koordine eden bir BT gönüllü ekibimiz bulunmaktadır.",
  },
  {
    category: "Kurumsal Üyelik",
    question: "PMI Türkiye'ye nasıl Kurumsal Üye olunabilir?",
    answer: "En az on çalışanı için PMI ve PMI Türkiye Chapter üyelik ücretini karşılayan Kurumlar, talep etmeleri halinde PMI Türkiye Chapter kurumsal üyesi olarak Chapter tarafından sağlanan desteklere erişebilirler. Kurumsal üyemiz olmak veya daha ayrıntılı bilgi almak üzere, aşağıdaki iletişim kanallarından bize ulaşabilirsiniz: Telefon: 0 (212) 281 37 52E-posta: membership@pmi.org.trWeb: https://www.pmi.org.tr/",
  },

  // ─── PMP ───
  {
    category: "PMP",
    question: "8. Üniversite'de Proje Yönetimi ile ilgili aldığım dersi PMP sınavı ön şartı olan 35 saatlik eğitim için kullanabilir miyim?",
    answer: "Evet. Belirttiğiniz şekilde üniversitede aldığınız dersi ön şart olarak girebilirsiniz. Belgelenmesi istenir ise transcript ile belgeleyebilirsiniz.",
  },
  {
    category: "PMP",
    question: "Başvuruların ne kadarı denetime tabi tutulmakta ve denetim sonrası yüzde kaçı reddedilmektedir?",
    answer: "Tüm başvurular denetime tabi olsa da denetim için başvuruların yalnızca belirli bir yüzdesi seçilir. Başvuruların ne kadarının denetim sürecine tabi tutulduğu ve yüzde kaçının reddedildiği ile ilgili resmi bir bilgilendirme bulunmamaktadır.",
  },
  {
    category: "PMP",
    question: "Belgelerin tamamını göndermezsem ne olur?",
    answer: "Yine başvurunuzun PMI Denetimini geçemediği kabul edilecektir.",
  },
  {
    category: "PMP",
    question: "İzmir'de oturuyorum. Sınav her ay oluyor mu? Hangi lokasyonlarda oluyor?",
    answer: "Sınav tarihleri başvuru kabulü sonrası gelen mailde yapılan yönlendirmeler ile aday tarafından belirlenmektedir. Aday bireysel olarak, sınav yerinin uygunluk durumuna göre dilediği tarihte sınava girebilmektedir. İzmir’de bir test merkezi mevcuttur. Yine başvuru kabulü sonrası gelen mailde yapılan yönlendirmeler ile test merkezini seçebilmekte ve test merkezinin uygunluk durumuna göre sınav tarihini belirleyebilmektesiniz.",
  },
  {
    category: "PMP",
    question: "PMBOK7 kitabı satışınız var mıdır? Nasıl temin edebilirim?",
    answer: "PMBOK7, PMI-TR bünyesinde türkçeleştirilmiş ve PMBOK7 Türkçe sürümü Optimist Kitabevi üzerinden satılmaktadır. Maalesef ingilizce sürümünün satışı PMI-TR tarafından yapılmamaktadır. PMBOK7 Türkçe sürümü satış linki: https://www.optimistkitap.com/kitap/proje-yonetimi-bilgi-birikim-kilavuzu-pmbok-kilavuzu-yedinci-surum/",
  },
  {
    category: "PMP",
    question: "PMI denetim sürecini tamamlamak için ne kadar zaman gerekir?",
    answer: "İşlemin tamamlanması 5-7 iş günü arasında sürmektedir.",
  },
  {
    category: "PMP",
    question: "PMI denetimi tamamen rastgele bir seçim midir?",
    answer: "Evet. PMI üyesi olup olmamak, proje yönetim deneyimi süresi, milliyet, ırk, inanç, cinsiyet ve benzeri diğer şeyler denetime seçilip seçilmemeyi etkilemez. Denetim için seçim tamamen rastgeledir.",
  },
  {
    category: "PMP",
    question: "PMI denetlenen adaydan ne beklemektedir?",
    answer: "PMI genellikle eğitim, öğretim ve proje tecrübesi belgelerinizin basılı kopyalarını istemektedir. Adayın posta yoluyla istenen belgeleri göndermesi ve PMI’nın cevabını beklemesi gerekmektedir. Belgelerinizi aldıktan sonra, PMI bunları inceleyecektir. PMI memnun kalırsa, aday, denetimin başarıyla tamamlandığına dair bir başka e-posta alacaktır. PMI, denetimin başarıyla tamamlanmasının ardından uygunluk kodu(eligibility code) ve sınav planlama talimatları gönderecektir. Aday daha sonra sınav programına devam edebilir. Ancak, PMI belgelerden memnun değilse, aday daha fazla bilgi isteyen başka bir e-posta alacaktır (veya destekleyici belgeler). Bazı nadir durumlarda, aday denetimde başarısız olabilir.",
  },
  {
    category: "PMP",
    question: "PMI Üyelik avantajları nelerdir?",
    answer: "PMI Üyeliği Size Neler Kazandırır? PMI Global üyeliği, sadece bir unvan değil; bilgiye, kariyere ve küresel bir profesyonel topluluğa açılan kapıdır. İşte üyeliğinizle elde edeceğiniz başlıca avantajlar:1. Zengin Bilgi Kaynaklarına Ücretsiz ErişimPMI üyeleri; PMBOK® Guide başta olmak üzere tüm PMI standart ve kılavuzlarına ücretsiz dijital erişim sağlar, https://www.projectmanagement.com üzerinden özelleştirilebilir araçlar, şablonlar ve kaynaklara ulaşabilir, Ücretsiz webinar’lar ile bilgi birikimini güncel tutar, PM Network, PMI Today ve Project Management Journal gibi yayınlara dijital erişim kazanır.2. Kariyerinizi GüçlendirinPMI üyeleri; https://www.pmi.org/learning/careers üzerinden küresel iş fırsatlarına ulaşabilir, PMI’ın dünya genelindeki etkinliklerine üye indirimi ile katılabilir, Online eğitimlerde, SeminarsWorld oturumlarında özel fiyat avantajlarından yararlanabilir, Web seminerleri ve içeriklerle ücretsiz PDU kazanabilir.3. Küresel Bir Topluluğun Parçası OlunDünyanın dört bir yanındaki proje yönetimi profesyonelleriyle aynı çatı altında buluşarak ağınızı genişletin. PMI üyeleri, global etkinliklerde ve yerel chapter’larda aktif olarak yer alabilir.4. Üyelere Özel İndirimlerPMI Store’da yer alan tüm kitaplar ve ürünlerde özel indirimlerden faydalanın. Sertifika sınav ücretlerinde ciddi avantajlar elde edin. Online eğitimlerde ve içeriklerde özel üye fiyatlarını kaçırmayın.",
  },
  {
    category: "PMP",
    question: "PMP sertifikasyon koşulu için gereken eğitimi hangi kurumlardan alabilirim?",
    answer: "PMP Sınav İçeriği Özeti Dokümanı’nda bu konuda şunlar belirtilmiştir: Aşağıdaki eğitim sağlayıcısı türlerinden birinin veya daha fazlasının sunduğu kursu, atölyeyi veeğitim oturumunu başarıyla tamamladığınızı göstererek eğitim gereksinimlerini karşılayabilirsiniz: A. PMI Yetkili Eğitim İş Ortakları (ATP’ler)B. PMI şubeleri*C. İşveren/şirket sponsorlu programlarD. Eğitim şirketleri veya danışmanlar (ör. eğitim okulları)E. Kurs sonu değerlendirmesi de dahil olmak üzere uzaktan eğitim veren şirketlerF. Üniversite tarafından verilen akademik ve sürekli eğitim programları* Türkiyede eğitim alabileceğiniz yetkili eğitim sağlayıcılarına https://www.pmi.org.tr/egitim-saglayicilar/adresinden erişebilirsiniz. Aşağıdaki eğitimler, eğitim gereksinimlerini karşılamaz: PMI şube toplantıları*Kendi kendine öğrenme (ör. kitap okuma, kurs sonu değerlendirmesi içermeyeneğitici videolar izleme)*Şube toplantısının en az bir saati öğrenme üzerine harcanırsa bu aktiviteye ayırdığınız saatieğitim kapsamında uygunluk gereksinimi olarak saydırabilirsiniz. NOT: Lisans programınız dahilindeki bazı dersler gereksinimi karşılamıyor olabilir. Busebeple, lisans programınızdaki uygun dersleri belgeleyebilirsiniz ancak programı bütünüylebelgeleyemezsiniz.",
  },
  {
    category: "PMP",
    question: "PMP sınav başvurum denetim için seçilirse denetim süreci hakkında bilgi verebilir misiniz?",
    answer: "Başvurunuz denetim için seçilirse sertifikasyon ücreti ödemeden önce e-posta ile bilgilendirilirsiniz. Elektronik denetim bildirimi, denetimin şartlarına uyma ile ilgili ayrıntılı bilgi içerir. Denetim sırasında sizden aşağıdakiler gibi destekleyici belgeler göndermeniz istenebilir: Diplomanızın/küresel eş değerinin kopyası – Başvurunun deneyim doğrulaması bölümünde belirtilen projeler için denetmen veya yöneticilerinizin imzaları – Profesyonel eğitim için gerekli etkileşimli saatleri doldurmak için başvuruda belirtilen her kurs için eğitim kurumlarından sertifika ve/veya mektup kopyalarıPMI, talep edilen belgeleri göndermeniz için size 90 gün zaman tanır. Denetim sürecinin şart ve gereksinimlerini karşılamak için gerekli belgeleri sağlayabildiğiniz takdirde denetimin tamamlanması yaklaşık beş ila yedi iş günü sürer. Tamamlanan denetim formlarınızı normal posta yoluyla veya ekspres kurye hizmetiyle aşağıdaki adrese gönderebilirsiniz. Lütfen tüm materyalleri tek seferde ve tek bir zarfta gönderin. Denetim belgelerinin ayrı olarak gönderilmesi, denetim incelemesi zaman diliminde gecikmeye neden olabilir. PMI Konu: Certification Audit 14 Campus Blvd. Newtown Square, PA 19073-3299ABD Denetim için seçilirseniz denetim gereksinimlerine uymadığınız müddetçe sertifikasyon sürecine devam edemezsiniz. Denetimi başarıyla tamamladıktan sonra bir yıllık sınava uygunluk süreniz başlar. Eksik başvurular işleme alınmayacak ve denetimin başarısız olmasına neden olacaktır. Denetime uymamayı seçerseniz denetim başarısız olur ve herhangi bir PMI sertifikasyonuna bir yıl boyunca başvuramazsınız.",
  },
  {
    category: "PMP",
    question: "PMP sınav başvurusu yaptım. Denetim için seçilip seçilmediğim kaç gün içerisinde belli olmaktadır?",
    answer: "PMI, başvuruları zamanında incelemeye özen göstermektedir. Çevrimiçi olarak gönderilen başvuruların incelenme süresi 5 takvim günüdür. Bu süre sonunda denetime seçilip seilmediğiniz size e-posta ile bildirilecektir.",
  },
  {
    category: "PMP",
    question: "PMP sınav ön koşulu olan Proje Yönetimi Deneyimi'nin belgelendirilmesi hakkında bilgi verebilir misiniz?",
    answer: "Deneyim ve eğitim gereksinimlerinin karşılanıp karşılanmadığı kontrolü PMI Global tarafından yapılmaktadır. Bu konuda PMI Global tarafından yayınlanan “Sınav İçeriği Özeti” dokümanında şunlar yazmaktadır: “Proje yönetme ve yönlendirme deneyiminizi belgelemek için çevrimiçi başvurunun deneyim doğrulama bölümünü kullanın. Bu deneyimden para kazanmış olmanız gerekmez fakat deneyimin profesyonel bir ortamda gerçekleşmiş olması gerekir. Okul projeleri veya kişisel etkinliklerin planlanması gibi aktiviteler kabul edilmeyecektir. Başvurunuza dahil ettiğiniz proje sayısına bakılmaksızın tüm proje deneyimlerinin ayrı ayrı belgelenmesi gerekir.” PMI başvurunuz esnasında beyan ettiğiniz bilgilerin doğru olduğunu kabul eder. Denetim süreci için seçilmemişseniz sizden bir belge talebi olmayacaktır. Belirtmiş olduğunuz işler/projeler kapsamında proje yönetim süreçlerinin uygulandığı/uygulanmaya çalışıldığı bir proje içinde yer aldıysanız deneyim olarak beyan edebilirsiniz. Ancak proje yönetiminden ziyade operasyonel süreçlerin yürütüldüğü bir durumdan söz ediyorsanız deneyim olarak beyan etmeniz çok uygun olmayacaktır.* Başvuruların bir kısmı denetim(audit) sürecine tabi tutulmaktadır. Bu durumda PMI sizden iş deneyimi ile ilgili ıslak imzalı belge talebinde bulunabilmektedir. Categories: Eğitim, Sertifikasyon",
  },
  {
    category: "PMP",
    question: "PMP sınav ücreti hakkında bilgi verebilir misiniz?",
    answer: "PMI, 3 ocak 2023 tarihi itibariyle bölgesel bazlı fiyatlandırma politikasına geçmiştir. Türkiye’de 3 ocak itibari ile bazı üyelik ve sertifika ücretleri şu şekildedir:* Fiyatlarla ilgili güncel bilgi için https://www.pmi.org/certifications adresini ziyaret edebilirsiniz. * Üyelik hakkında detaylı bilgi için https://www.pmi.org/membership/join adresini ziyaret edebilirsiniz. * Sınav ücret indirimi Associated Üyelik için geçerli değildir. Categories: Eğitim, Sertifikasyon",
  },
  {
    category: "PMP",
    question: "PMP sınavı başvurusunu nereden yapabilirim?",
    answer: "PMI’ın web sitesinden aşağıdaki bağlantıyı kullanarak PMP sertifikası başvuru sayfasına ulaşabilir ve bu sayfadaki “Apply Now” butonuna tıklayıp ilgili yönergeleri takip ederek başvurunuzu yapabilirsiniz: https://www.pmi.org/certifications/types/project-management-pmp",
  },
  {
    category: "PMP",
    question: "PMP sınavı hakkında bilgiye nereden ulaşabilirim?",
    answer: "PMI’ın web sitesinden ulaşabilirsiniz: https://www.pmi.org/certifications/types/project-management-pmp Yine bu web sitesinde verilen PMP El Kitapçığından https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-handbook.pdfve PMP Sınavı içerik dokümanından https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-exam-outline.pdfdetaylı bilgiye ulaşabilirsiniz.",
  },
  {
    category: "PMP",
    question: "PMP sınavında Türkçe dil desteği bulunuyor mu?",
    answer: "PMP Sınavı İngilizce yapılmaktadır, ancak Türkçe dil desteği bulunmaktadır. Aynı sınav ekranında üstte sorunun İngilizcesi, altta ise sorunun Türkçesi yer almaktadır.",
  },
  {
    category: "PMP",
    question: "Sınav zamanı ve yeri konusunda bilgi alabilir miyim?",
    answer: "PMP Sınavı, Pearsonvue üzerinden hem fiziksel hem de online olarak alınabilmektedir. Tercihinize ve tarih uygunluğuna göre sıvan tarih ve yerini siz belirlemektesiniz. Aşağıdaki adresten sınav yerlerini görebilir ve sınav tarihi uygunluklarına bakabilirsiniz: https://home.pearsonvue.com/pmi",
  },
  {
    category: "PMP",
    question: "Yeni PMP sınav formatı nasıl olacaktır?",
    answer: "PMP sınav içeriği, 2 Ocak 2021 tarihinden itibaren “PMP Sınav İçeriği Özeti Dokümanı (ECO)”nda belirtilen alanlara göre belirlenmektedir. İlgili dokümana aşağıdaki linkten erişebilirsiniz: Türkçe : https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/pmp-examination-content-outline.pdf?rev=9115f9f3cd194f048034113b4990cfd1&sc_lang_temp=tr-TR İngilizce : https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-exam-outline.pdf detaylı bilgiye ulaşabilirsiniz.",
  },

  // ─── CAPM ───
  {
    category: "CAPM",
    question: "CAPM eğitimleri hakkında bilgi verebilir misiniz?",
    answer: "Türkçe dil desteği ile de girebileceğiniz CAPM sertifikası sınavına yönelik olarak, üniversitelerin 3.sınıf ve son sınıf öğrencisi olan ya da  2 yıl içerisinde mezun olmuş olan  kişilere ücretsiz olarak Sertifikalı Genç Proje Yönetici Adayı Yetiştirme Programı kapsamında en az 23 saatlik eğitim verilmektedir. CAPM sertifikası sınavına girmeniz için sizden ya 1500 saat proje yönetimi alanında çalışmış olmanız ya da 23 saat proje yönetimi eğitimi almanız istenmektedir. Bu eğitim sayesinde sınav ön şartını karşılamış olursunuz. Bu eğitim sayesinde sınav ön şartını karşılamış olursunuz. Eğitimlerimiz, PMI® tarafından sağlanan eğitim içeriği ile 4 tam gün içinde gerçekleştirilmekte olup, kesin yer, tarih ve saat bilgileri, 20 kişilik katılımcı sayısına ulaştıktan sonra belirlenip, duyurulacaktır. Eğitim sonunda, eğitimlerin 3/4’üne düzenli olarak katılmış olan öğrencilere PMI® tarafından hazırlanan katılım sertifikası verilecek ve verilen bu sertifika, CAPM® sınavına girmek için önkoşul olan eğitimi belgeleyecektir. Öğrenciler bu belgeyi kullanarak CAPM® sınavına başvurabileceklerdir Söz konusu eğitimlere katılım için başvurular, gencpy@pmi.org.tr adresineyapılmaktır. CAPM® sertifikası sınavı 150 sorudan oluşan 3 saatlik bir sınavdır. CAPM® sertifikasının 5 yıl geçerliliği vardır. CAPM Eğitimi hakkındaki detaylı bilgiye https://www.pmi.org.tr/capm-egitimleri/ bağlantısından da ulaşabilirsiniz.",
  },
  {
    category: "CAPM",
    question: "CAPM eğitimleri ne zaman gerçekleştirilmektedir?",
    answer: "Eğitimlerimiz netleşince web sayfamızda ve sosyal medya hesaplarımızdan yayınlanmakta ve talepler toplanmaktadır. Bu ilanlarımızı takip eder ve bu aşamada bizlerle kontağa geçerseniz seviniriz. Eğitim kesin tarih ve yer bilgileri yeterli katılımcı sayısına (örneğin 20 kişi) ulaştıktan sonra belirlenip, duyurulmaktadır.",
  },
  {
    category: "CAPM",
    question: "PMP sınavı ön şartları için bilgi verebilir misiniz?",
    answer: "PMP Sertifikasyon gereksinimleri:\nDört yıllık bir üniversite mezuniyeti\nSon 8 yıl içinde geçerli 36 ay Proje Yönetimi deneyimi\n35 saatlik proje yönetimi eğitimi veya CAPM Sertifikasyonu\n– VEYA –\nLise diploması veya önlisans derecesi (veya küresel eşdeğeri)\nSon 8 yıl içinde geçerli 60 ay Proje Yönetimi deneyimi\n35 saatlik proje yönetimi eğitimi veya CAPM Sertifikasyonu\n\nKategori: Eğitim, Sertifikasyon",
  },

  // ─── Sertifikasyon ───
  {
    category: "Sertifikasyon",
    question: "Bir şirket kursu sertifika vermediyse PMI hangi tür belge kabul edecektir?",
    answer: "PMI, eğitimin alındığına dair eğitim veren kişi, İK departmanı veya şirket antetli kağıda yazılmış ve imzalanmış bir tamamlama mektubunu kabul edecektir.",
  },
  {
    category: "Sertifikasyon",
    question: "Eğitim Sertifikam/Diplomam İngilizce değil. Tercüme edilmeli midir?",
    answer: "Orijinalin fotokopisi ve adayın, belgenin genel bir çevirisini özetleyen bir mektubu belgelerin arasına eklemesi gerekmektedir.",
  },
  {
    category: "Sertifikasyon",
    question: "Eğitim ve Öğretim sertifikalarının orjinallerini göndermem gerekiyor mu?",
    answer: "Hayır. Orijinal belgelerin fotokopileri yeterlidir.",
  },

  // ─── Gönüllülük ───
  {
    category: "Gönüllülük",
    question: "Gönüllü çalışmak istiyorum ancak fiziksel olarak katılmam mümkün olmuyor. Yine de gönüllü çalışmalara katılabilir miyim?",
    answer: "Elbette. Hemen hemen tüm projelerimizde kendinize uygun uzaktan katılım ve katkı sağlayabileceğiniz bir rol bulabilirsiniz. Siz yeter ki gönülden isteyin.",
  },
  {
    category: "Gönüllülük",
    question: "Gönüllü çalışmalara hangi şehirlerde katılabilirim?",
    answer: "Fiziksel anlamda başta İstanbul, Ankara ve İzmir şehirlerimizde katılabilirsiniz. Zaman zaman diğer illerimizde de etkinlikler düzenlemekteyiz. Ancak, hangi şehirde olursanız olun, bulunduğunuz şehirde PMI Türkiye etkinliklerinin düzenlenmesi için öncülük edebilirsiniz.",
  },
  {
    category: "Gönüllülük",
    question: "Gönüllü çalışmalarım için en fazla kaç PDU kazanabilirim?",
    answer: "PMI, talebinizi inceleyecek ve yapmış olduğunuz gönüllülük çalışması karşılığında alabileceğiniz PDU sayısı hususunda sizi bilgilendirecektir. PMI beyan esaslı çalışan bir kurum olmakla birlikte PDU taleplerini büyük bir titizlikle incelemekte ve suistimale yer vermemek adına gönüllülük çalışmanızdan kazanabileceğiniz PDU sayısını sınırlandırabilmektedir. Genel anlamda, 3 yıllık bir dönemde, PMI’ın yeni Continuing Certification Requirements (CCR) programına göre Gönüllü faaliyetlerinden kazanılabilecek azami PDU sayısı 25 olarak belirlenmiştir.",
  },
  {
    category: "Gönüllülük",
    question: "Gönüllü çalışmalarım için kazandığım PDU'lar kim tarafından nasıl bildiriliyor?",
    answer: "Yaptığınız gönüllü çalışmalar karşılığında PDU’larınızı kendiniz beyan edip PMI Global’e başvurabilirsiniz. Bunun için izlemeniz gereken yol çok kolay: PMI Üyelik hesabınızda – Report PDUs – Volunteer altındaki Volunteer Information formunu doldurup PDU talebinizi PMI’a iletebilirsiniz.",
  },
  {
    category: "Gönüllülük",
    question: "Gönüllü çalışmalarım için PDU kazanabilir miyim?",
    answer: "Evet. Yaptığınız gönüllü çalışmalar karşılığında PDU kazanabilirsiniz.",
  },
  {
    category: "Gönüllülük",
    question: "Gönüllü olmanın avantajları neledir?",
    answer: "Gönüllü olarak çalışmanız durumunda elde edeceğiniz kazanımların bir kısmı şöyle sıralanabilir: Her şeyden önce liderlik becerilerinizi geliştirebileceğiniz bir çevre içerisinde yer almak, İş çevrenizin genişlemesi, Kar amacı gütmeyen bir kuruluşta işlerin nasıl yürüdüğü hakkında bilgi sahibi olma, Profesyonel deneyim ve gelişim, PMP sertifikasının devamlılığı için PDU kazanma.",
  },
  {
    category: "Gönüllülük",
    question: "Nasıl gönüllü olabilirim?",
    answer: "Gönüllülük ile ilgili her türlü sorunuz için volunteer@pmi.org.tr adresinden bizimle iletişime geçebilirsiniz. PMI TR gönüllü ilanları https://vrms.pmi.org/ sayfasında yayınlanmakta olup ilanlara başvuru yapabilmek için öncelikle ücretsiz hesap oluşturmanız gerekmektedir.",
  },
  {
    category: "Gönüllülük",
    question: "PMI TR olarak PMP sınavına hazırlık eğitimi veriyor musunuz?",
    answer: "PMI Türkiye olarak şimdilik ücretli/ücretsiz bir eğitim vermiyoruz. PMI Türkiye tamamen gönüllülerden oluşan bir organizasyon olup, PMI Global ve aynı zamanda PMI Türkiyeüyelerine ücretsiz PMP kolaylaştırma grubu, şartları sağlayan öğrenci ve yeni mezunlarla ücretsiz CAPM eğitimivermektedir. PMP Kolaylaştırma gruplarında aktif bir öğrenme ortamı oluşturarak üyelerimizin PMP sertifikası almasınıkolaylaştırıyoruz. Category: Eğitim",
  },
  {
    category: "Gönüllülük",
    question: "PMI Türkiye gönüllülüğü nedir?",
    answer: "PMI TR gönüllülüğü özelde proje yönetimi profesyonellerinden ve proje yönetimine gönül verenlerden oluşan büyük bir ailenin bir parçası olmaktır.\n\nPMI Türkiye Chapter’ının yürüttüğü tüm faaliyetler ve projeler gönüllülük esaslı olup, gönüllü olarak yer alabileceğiniz işler haftada birkaç saatlik katılımın yeterli olabileceği projelerden özel bir projenin yönetimine kadar çeşitlilik göstermektedir.",
  },

  // ─── Mentorluk ───
  {
    category: "Mentorluk",
    question: "Kimler Menti (Danışan) olabilir?",
    answer: "Ağırlıklı olarak proje yönetimi ile ilgili konularda desteğe ihtiyacı olan hemen herkes mentorluk desteği almak için bu programa başvurabilir.",
  },
  {
    category: "Mentorluk",
    question: "Kimler mentor olabilir?",
    answer: "Mentor olabilmek için öncelikle PMI Türkiye üyesi ve aktif PMI sertifikası (CAPM hariç) sahibi olma şartı aranmaktadır. Ayrıca mentorun genel iş deneyiminin yanı sıra mutlaka mentorluk vereceği ilgili alanda en az 5 yıl iş deneyimi olması gerekmektedir. Bu işi gönüllü yapması, belirli bir zamanını düzenli olarak bu konuya adaması gibi özellikler de ayrıca aranmaktadır. Sertifikası aktif olmayanlar ve hiç sertifikaya sahip olmayanlar programa mentor olarak dâhil olamayacaktır.",
  },
  {
    category: "Mentorluk",
    question: "Mentor - Menti eşleşmeleri nasıl olacak?",
    answer: "Mentorlar ve mentiler ele alınacak konulara, bulundukları konuma ve zaman planına göre eşleştirilecektir.",
  },
  {
    category: "Mentorluk",
    question: "Mentor Danışmanlığı nedir?",
    answer: "Mentorlar normalde mentilerine destek vermekte olsalar da, zaman zaman mentorların da desteğe ihtiyacı olur. Mentorlara destek veren, programın bütününü koordine eden, süreci PMI TR beklentilerine uygun halde tutan kişiler Mentor Danışmanı adıyla, bir üst seviyede programda yer almaktadır. Bir anlamda mentorların mentoru olarak da ifade edilebilir.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk desteği hangi konuları kapsamaktadır?",
    answer: "PMI TR mentorluk programı temel olarak PMI, PMI Türkiye, Proje Yönetimi, PMI sertifikaları, üyelere değer katmak, üyelerin kariyer yolculuklarında destek olmak ve benzeri konular çevresine odaklanmıştır. Mentorluk sürecinde mentinin farklı özel beklentileri olabilir. Ancak PMI, PMI Türkiye, Proje Yönetimi veya yeni iş fikri ile alakalı olmayan konular PMI TR mentorluk programında ele alınmayacaktır. Yine de tüm konular hassasiyetle ele alınıp mümkün olduğunca destek verilmeye çalışılacaktır.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk desteği ücretli midir?",
    answer: "Üniversite öğrencileri için mentorluk desteği ücretsiz olarak sağlanmaktadır. Öğrenci olmayanlar için sadece PMI TR üyesi olma şartı dışında ek bir ücret söz konusu olmamaktadır.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk desteğinin mentorlara katkısı nedir?",
    answer: "Gönüllü olarak gerçekleştirilen bu faaliyet mentorlara farklı kişilerle çalışıp deneyim kazanmalarını sağlamanın yanında, sertifika sahibi olmalarından dolayı, mentorluk yaptıkları her 1 saat için 1 PDU olarak da geri dönüş sağalamaktadır.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk programı nerelerde gerçekleştirilmektedir?",
    answer: "Program öncelikli olarak İstanbul’da gerçekleştirilecek olsa da, PMI TR’nin bulunduğu diğer iller olan Ankara ve İzmir’de de aktif çalışmalar olacaktır. Ayrıca sadece yüzyüze değil çevrimiçi görüşmeler de olabileceğinden çevrimiçi uygulamalarla da (Skype, Hangout, Whatsapp, Facetime, vb.) görüşmeler yapılabilir. Bu sayede sadece İstanbul, Ankara ve İzmir ile sınırlı kalmayıp Türkiye’nin her yerine uzaktan da olsa ulaşma imkânımız olacaktır. Mentiler kendi imkânlarıyla ve mentorlarıyla zaman planını yaparak mentorun bulunduğu ile gelirse veya farklı illere özel planlanabilecek mentorluk ziyaretlerine kendilerini ayarlarlarsa yüzyüze görüşme fırsatı da olacaktır.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk programına bireysel Menti (Danışan) olarak nasıl başvurabilirim?",
    answer: "Başvurunuzu aşağıdaki formu doldurarak yapabilirsiniz. Menti Aday Başvuru FormuBaşvurunuz incelenip en kısa sürede size uygun bir mentor ile eşleşmeniz için geri dönüş yapılacaktır.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk programına kurumumuzu dahil etmek istiyoruz. Nasıl başvurabiliriz?",
    answer: "Başvurunuzu talebinizin detaylarını açıklayacak şekilde mentorship@pmi.org.tr adresine yazılı olarak yapabilirsiniz.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk programına mentor olarak nasıl başvurabilirim?",
    answer: "Başvurunuzu aşağıdaki formu doldurarak yapabilirsiniz. Mentor Aday Başvuru FormuSonrasında değerlendirme yapılıp geri dönüş gerçekleştirilecektir. Özellikleriniz program koşullarına uygun olduğu takdirde en kısa sürede çalışmalara dâhil olabilirsiniz.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk programında etik ve gizlilik nasıl ele alınmaktadır?",
    answer: "Programa özel etik ve gizlilik kuralları olmakla birlikte PMI ve EMCC tarafından belirlenmiş bazı kural ve standartlar da geçerlidir. Programa dâhil olan tüm taraflar bu kurallara uymakla yükümlüdür. PMI Etik Kodlarını buradan görebilirsiniz. EMCC Etik Kodlarını buradan görebilirsiniz.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk programında sorumluluk kimdedir?",
    answer: "Mentorluk kavramı genel olarak asıl sorumluluğun mentilerde olması üzerine kurulu bir çalışmadır. Mentorlar sadece uzmanlıklarını paylaşmakla ve kapsamı PMI TR kapsamı çerçevesinde tutmakla sorumludur. PMI TR ise sürecin genel denetimini yapmaktan sorumludur. Asıl iş mentilerin bu sürece kendini adamasına, ödevlerini zamanında yerine getirmesine ve kendi adına doğru seçimleri yapmasına bağlıdır. PMI TR veya mentorlar mentilerin seçimlerinden veya aldıkları kararlardan sorumlu değildir. Gerçekleştirilen etik dışı davranışlardan ise bu davranışı gerçekleştiren mentor veya menti şahsen sorumludur. Böyle bir durumun tespiti durumunda PMI TR her zaman ilgili süreci sonlandırma hakkını elinde tutar.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk programınıza sponsor olmak istiyoruz. Bu konuda nasıl ilerleyebiliriz?",
    answer: "Sponsorluk desteğinizden memnuniyet duyarız. Talebinizi aşağıdaki iki mail adresine birlikte gönderebilirsiniz.mentorship@pmi.org.trsponsorluk@pmi.org.trKonuyu resmileştirmek için sponsorluk direktörlüğümüz size en kısa sürede geri dönecektir.",
  },
  {
    category: "Mentorluk",
    question: "Mentorluk süresi ne kadardır?",
    answer: "Normal bir destek süreci ortalama 6-8 ay civarında sürmektedir. Ancak ihtiyaca bağlı olarak gerçek süre, eşleşmeler sonrasında mentor ve menti arasında kesinleştirilmektedir.",
  },
  {
    category: "Mentorluk",
    question: "PMI TR Mentorluk programı nedir?",
    answer: "PMI Türkiye gönüllü ekibi tarafından sağlanan bir destek programıdır. Amacı proje yönetimi konusunda mentorluk desteğine ihtiyaç duyan kişilere deneyimli gönüllüler tarafından ihtiyaçları doğrultusunda destek verilerek daha ileri bir seviyeye ulaşmalarını sağlamaktır.",
  },

  // ─── Sponsorluk ───
  {
    category: "Sponsorluk",
    question: "PMI Türkiye'ye sponsor olmak istiyorum. Sponsorluk şartlarınızı öğrenebilir miyim?",
    answer: "Çeşitli sponsorluk paketlerimiz bulunmaktadır. info@pmi.org.tr adresine şirketinizi tanıtan bir e-posta göndererek sponsorluk paketlerimiz hakkında bilgi talep edebilirsiniz.",
  },
  {
    category: "Sponsorluk",
    question: "Proje deneyim belgelerimin kopyalarını kim imzalayabilir?",
    answer: "Proje hakkında samimi bilgiye sahip olan herkes, proje belgelerini imzalayabilir. Örneğin, meslektaşınız, müşteri veya sponsorunuz proje belgelerini imzalayabilir. Ancak bu kişi PMP başvurusunda adını yazdığınız kişi olmalıdır.",
  },

  // ─── Dergi ───
  {
    category: "Dergi",
    question: "Derginizin basılı haline nasıl abone olabilirim?",
    answer: "Dergimize abone olma isteğinizi, kişisel bilgilerinizi, adres ve telefonunuzu, çalıştığınız kurum ve kurumdaki rolünüzü belirterek info@pmi.org.tr adresine iletebilirsiniz.",
  },
  {
    category: "Dergi",
    question: "Proje Yönetim Dünyası dergisine reklam vermek istiyorum. Kiminle görüşmem gerekir?",
    answer: "Dergimizin reklam fiyatlarını ve dergide reklamınızın ücretsiz yayınlanmasını içine alan sponsorluk paketlerini öğrenmek için info@pmi.org.tr adresine e posta gönderebilirsiniz.",
  },
  {
    category: "Dergi",
    question: "Proje Yönetimi dergisine nasıl ulaşabilirim?",
    answer: "Dergimiz Mart, Haziran, Eylül ve Aralık aylarında olmak üzere üç ayda bir yayınlanır. Dergimizin pdf kopyasını https://www.pmi.org.tr/dergiler/ linkini tıklayarak web sitemizden ücretsiz olarak indirebilir, aylık etkinliklerimizde ve zirvelerimizde basılı kopyasını ücretsiz alabilirsiniz.",
  },
  {
    category: "Dergi",
    question: "Proje Yönetimi dergisinin önceki sayılarına nereden ulaşabilirim?",
    answer: "Web sitemizde https://www.pmi.org.tr/dergiler linkini tıklayarak dergimizin önceki sayılarını ücretsiz olarak indirebilirsiniz.",
  },

  // ─── PDU ───
  {
    category: "PDU",
    question: "Sertifikanın geçerlilik süresi var mı? Varsa süresini uzatmak için yapılması gerekenler nelerdir?",
    answer: "Sertifikanın geçerlilik süresi 3 yıldır. Sertifikanın geçerlilik süresini uzatmak için 3 yıllık süre içerisinde 60 PDU toplanması gerekmekte ve sertifika yenilenmesi için gerekli ücretin PMI Global’e yatırılması gerekmektedir.",
  },
];
  
  /**
   * Anahtar kelime takma adları (alias).
   * Anahtar = kullanıcının yazabileceği terim, değer = ilgili FAQ'larda
   * eşleşmesi gereken kanonik terim. Tüm değerler NORMALİZE edilmiştir
   * (Türkçe karakterler ASCII'ye dönüştürülmüş, küçük harf).
   *
   * Örn: kullanıcı "fiyat" yazarsa, "ucret" geçen FAQ'lar da skor alır.
   */
  const faqAliases = {
    // Sertifika ve sınav
    pmp: ["proje yonetimi profesyoneli", "project management professional"],
    capm: ["baslangic sertifikasi", "certified associate"],
    pmbok: ["pmbok kilavuzu", "pmbok7", "kitap"],
    sinav: ["exam", "pearsonvue", "test"],
    egitim: ["training", "kurs", "35 saat"],
    sertifika: ["sertifikasyon", "certification"],
    pdu: ["professional development unit", "gelisim birimi"],

    // Üyelik
    uye: ["uyelik", "member", "membership"],
    uyelik: ["uye", "member", "membership"],
    kurumsal: ["kurum", "sirket", "corporate", "organizasyon"],
    ogrenci: ["student", "yuksek lisans", "universite"],

    // Topluluk
    gonullu: ["volunteer", "gonulluluk", "katki"],
    mentor: ["mentee", "menti", "danisan", "rehber"],
    sponsor: ["sponsorluk", "destek"],
    dergi: ["proje yonetim dunyasi", "magazine", "yayin"],
    etkinlik: ["event", "zirve", "webinar", "toplanti"],

    // Genel
    ucret: ["fiyat", "maliyet", "ucretler", "price"],
    basvuru: ["apply", "kayit", "muracaat"],
    iletisim: ["contact", "telefon", "eposta", "e-posta"],
    denetim: ["audit", "denetlen", "kontrol"],
  };
  
  // Tarayıcı global'leri (widget veya chat.html bu değişkenlere erişir)
  if (typeof window !== "undefined") {
    window.faqData = faqData;
    window.faqAliases = faqAliases;
  }
  
