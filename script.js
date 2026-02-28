// =============================================
// Constants & Data
// =============================================

// Training levels – multi-line texts for real practice
const TRAINING_LEVELS = {
    ar: [
        // المستوى 1: صف الارتكاز (كمنت شسيب) - أسطر متعددة
        "كمنت شسيب كمنت شسيب كمنت شسيب\nكمنت شسيب كمنت شسيب كمنت شسيب\nكمنت شسيب كمنت شسيب كمنت شسيب\nشسيب كمنت شسيب كمنت شسيب كمنت",
        // المستوى 2: تكرار صف الارتكاز بتنوع أكبر
        "شسيب كمنت كمنت شسيب شسيب كمنت\nكمنت شسيب شسيب كمنت كمنت شسيب\nشسيب شسيب كمنت كمنت شسيب كمنت\nكمنت كمنت شسيب شسيب كمنت شسيب",
        // المستوى 3: توسيع صف الارتكاز
        "سيب كمنت شسيب طك لا من تب يس\nكتب منت شسيب يسك لبنت كمنت شسيب\nبنت كتب منت سيب شسيب كمنت يسك\nطك لا من تب يس سيب كمنت شسيب",
        // المستوى 4: كلمات بسيطة
        "بيت كتب منت سبت نبت يكتب بنت\nكتب بيت سبت منت نبت يكتب بنت\nبنت كتب بيت سبت منت نبت يكتب\nيكتب بنت كتب بيت سبت منت نبت",
        // المستوى 5: جمل قصيرة
        "الكتابة تحتاج تمرين مستمر على الكيبورد\nالطباعة العمياء تحتاج لتركيز مستمر وصبر\nالممارسة تجعلك خبيرا في الطباعة بسرعة\nلا تنظر إلى لوحة المفاتيح أثناء الكتابة",
        // المستوى 6: جمل أطول
        "التدريب المستمر هو سر النجاح في الطباعة العمياء\nكلما تدربت أكثر كلما أصبحت أسرع وأدق في الكتابة\nحاول أن تكتب بدون النظر إلى لوحة المفاتيح أبدا\nالصبر والمثابرة هما مفتاح إتقان الطباعة السريعة",
        // المستوى 7: فقرات
        "الطباعة العمياء هي القدرة على الكتابة دون النظر إلى لوحة المفاتيح\nتعتمد على حفظ مواقع الأحرف وتدريب الأصابع على الحركة الصحيحة\nيبدأ التدريب من صف الارتكاز ثم يتوسع ليشمل جميع الأحرف\nالهدف هو الوصول لسرعة عالية مع دقة ممتازة في الكتابة",
        // المستوى 8: نص متقدم
        "التكنولوجيا تتطور بسرعة كبيرة والقدرة على الطباعة السريعة أصبحت ضرورية\nسواء كنت طالبا أو موظفا أو مبرمجا فإن سرعة الكتابة توفر لك وقتا ثمينا\nالاستثمار في تعلم الطباعة العمياء هو من أفضل الاستثمارات في مسيرتك المهنية\nابدأ اليوم ولا تؤجل فكل يوم تتدرب فيه يقربك من الاحتراف",
        // المستوى 9: خطبة الحاجة
        "إن الحمد لله نحمده ونستعينه ونستغفره\nونعوذ بالله من شرور أنفسنا ومن سيئات أعمالنا\nمن يهده الله فلا مضل له ومن يضلل فلا هادي له\nوأشهد أن لا إله إلا الله وحده لا شريك له\nوأشهد أن محمدا عبده ورسوله صلى الله عليه وسلم",
        // المستوى 10: أحاديث من البخاري
        "إنما الأعمال بالنيات وإنما لكل امرئ ما نوى\nفمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله\nومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها\nفهجرته إلى ما هاجر إليه",
        // المستوى 11: أحاديث من البخاري
        "المسلم من سلم المسلمون من لسانه ويده\nوالمهاجر من هجر ما نهى الله عنه\nلا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه\nمن كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت",
        // المستوى 12: أحاديث من البخاري
        "من كان يؤمن بالله واليوم الآخر فليكرم جاره\nومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه\nالدين النصيحة قلنا لمن\nقال لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم",
        // المستوى 13: أحاديث من مسلم
        "إن الله لا ينظر إلى صوركم وأموالكم\nولكن ينظر إلى قلوبكم وأعمالكم\nلا تحاسدوا ولا تناجشوا ولا تباغضوا ولا تدابروا\nولا يبع بعضكم على بيع بعض وكونوا عباد الله إخوانا",
        // المستوى 14: أحاديث من مسلم
        "المسلم أخو المسلم لا يظلمه ولا يخذله ولا يحقره\nالتقوى هاهنا ويشير إلى صدره ثلاث مرات\nبحسب امرئ من الشر أن يحقر أخاه المسلم\nكل المسلم على المسلم حرام دمه وماله وعرضه",
        // المستوى 15: حديث طلب العلم
        "من سلك طريقا يلتمس فيه علما سهل الله له به طريقا إلى الجنة\nوإن الملائكة لتضع أجنحتها لطالب العلم رضا بما يصنع\nوإن العالم ليستغفر له من في السموات ومن في الأرض\nحتى الحيتان في الماء",
    ],
    en: [
        // Level 1: Home row multi-line
        "asdf jkl; asdf jkl; asdf jkl;\nasdf jkl; asdf jkl; asdf jkl;\njkl; asdf jkl; asdf jkl; asdf\nasdf jkl; asdf jkl; asdf jkl;",
        // Level 2: Home row variations
        "asdfjkl; fjdk slaj fkdl sajf\ndksl ajfk fjdk slaj fkdl sajf\nasdfjkl; fjdk slaj fkdl sajf\ndksl ajfk fjdk slaj fkdl sajf",
        // Level 3: Top row
        "qwer uiop qwer uiop qwer uiop\ntyui oper wqty uipo qwer uiop\nqwer uiop tyui oper wqty uipo\nuiop qwer uiop qwer uiop qwer",
        // Level 4: Bottom row
        "zxcv bnm, zxcv bnm, zxcv bnm,\nbnm, zxcv bnm, zxcv bnm, zxcv\nzxcv bnm, zxcv bnm, zxcv bnm,\nbnm, zxcv bnm, zxcv bnm, zxcv",
        // Level 5: Common words
        "the quick brown fox jumps over the lazy dog\npack my box with five dozen liquor jugs\nhow vexingly quick daft zebras jump\nthe five boxing wizards jump quickly",
        // Level 6: Sentences
        "touch typing is an essential skill for everyone today\npractice makes perfect keep your eyes on the screen\nthe best way to learn is through consistent daily practice\npatience and persistence are key to mastering any skill",
        // Level 7: Longer sentences
        "a good programmer types fast and accurately\nthey spend most of their time writing code\ncommunicating with their team members is important\nspeed and accuracy make a big difference",
        // Level 8: Paragraphs
        "technology is evolving rapidly and the ability to type\nwithout looking at the keyboard gives you a significant\nadvantage in productivity and efficiency at work\nlearn to type properly and invest in your career",
        // Level 9: Advanced text
        "the internet has transformed the way we communicate\nwork and learn making keyboard skills more important\nthan ever before in human history and development\nevery professional should master touch typing skills",
        // Level 10: Speed challenge
        "artificial intelligence and machine learning are changing\nevery industry but the fundamental skill of typing remains\nessential for interacting with these powerful technologies\nmastering the basics creates a strong foundation for growth",
        // Level 11
        "successful people understand that mastering basics\nlike touch typing creates a strong foundation\nfor more advanced skills and greater achievements\nconsistency is the key to mastering any skill",
        // Level 12
        "every expert was once a beginner and every master\nwas once a disaster do not be afraid to make mistakes\nbecause mistakes are simply proof that you are trying\nyour best to improve and grow every single day",
        // Level 13
        "the difference between ordinary and extraordinary\nis that little extra effort that you put in every day\nconsistency is the key to mastering any skill\nincluding touch typing keep practicing daily",
        // Level 14
        "learning to type properly is one of the best investments\nyou can make in your career it saves time and reduces errors\nit increases your overall output and makes you more productive\nstart today and see the difference it makes in your work",
        // Level 15
        "the journey of a thousand miles begins with a single step\nevery keystroke brings you closer to becoming a typing master\ndo not give up when things get difficult keep pushing forward\nyour future self will thank you for the effort you put in today",
    ]
};

// Test texts – used for timed speed tests
const TEST_TEXTS = {
    ar: [
        "إن الحمد لله نحمده ونستعينه ونستغفره ونعوذ بالله من شرور أنفسنا ومن سيئات أعمالنا من يهده الله فلا مضل له ومن يضلل فلا هادي له وأشهد أن لا إله إلا الله وحده لا شريك له وأشهد أن محمدا عبده ورسوله صلى الله عليه وسلم إنما الأعمال بالنيات وإنما لكل امرئ ما نوى فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه المسلم من سلم المسلمون من لسانه ويده والمهاجر من هجر ما نهى الله عنه لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت ومن كان يؤمن بالله واليوم الآخر فليكرم جاره ومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه",
        "الطباعة العمياء هي القدرة على الكتابة باستخدام لوحة المفاتيح دون النظر إليها وتعتمد هذه المهارة على حفظ مواقع الأحرف وتدريب الأصابع على الحركة الصحيحة بين المفاتيح يبدأ التدريب عادة من صف الارتكاز حيث توضع الأصابع على الحروف الأساسية ثم يتوسع ليشمل جميع الأحرف والأرقام والرموز الهدف النهائي هو الوصول لسرعة عالية في الكتابة مع الحفاظ على دقة ممتازة التكنولوجيا تتطور بسرعة كبيرة والقدرة على الطباعة السريعة أصبحت ضرورية في العمل والدراسة",
        "إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم لا تحاسدوا ولا تناجشوا ولا تباغضوا ولا تدابروا ولا يبع بعضكم على بيع بعض وكونوا عباد الله إخوانا المسلم أخو المسلم لا يظلمه ولا يخذله ولا يحقره التقوى هاهنا بحسب امرئ من الشر أن يحقر أخاه المسلم كل المسلم على المسلم حرام دمه وماله وعرضه من سلك طريقا يلتمس فيه علما سهل الله له به طريقا إلى الجنة الدين النصيحة قلنا لمن قال لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم",
    ],
    en: [
        "the quick brown fox jumps over the lazy dog pack my box with five dozen liquor jugs how vexingly quick daft zebras jump the five boxing wizards jump quickly a good programmer types fast and accurately because they spend most of their time writing code and communicating with their team members technology is evolving rapidly and the ability to type without looking at the keyboard gives you a significant advantage in productivity and efficiency learning to type properly is one of the best investments you can make in your career it saves time reduces errors and increases your overall output",
        "artificial intelligence and machine learning are changing every industry but the fundamental skill of typing remains essential for interacting with these powerful technologies successful people understand that mastering the basics like touch typing creates a strong foundation for more advanced skills and greater achievements in life every expert was once a beginner and every master was once a disaster do not be afraid to make mistakes because mistakes are simply proof that you are trying your best to improve the difference between ordinary and extraordinary is that little extra effort",
        "the internet has transformed the way we communicate work and learn making keyboard skills more important than ever before in human history touch typing is not just about speed it is about efficiency and reducing cognitive load when you can type without thinking about where the keys are you can focus entirely on your ideas and creative thinking this is why professional writers programmers and content creators all emphasize the importance of developing strong typing skills through consistent practice and dedication",
    ]
};

const UI_TEXTS = {
    ar: {
        appTitle: "الطباعة العمياء",
        langText: "English",
        welcomeTitle: "مرحباً بك في تطبيق الطباعة العمياء",
        welcomeDesc: "احترف الكتابة السريعة على لوحة المفاتيح عبر مستويات متدرجة تدعم اللغتين العربية والإنجليزية.",
        selectLevelTitle: "مستواك الحالي: ",
        trainText: "تدريب",
        trainDesc: "تدرّب بدون وقت محدد",
        testText: "اختبار",
        testDesc: "اختبر سرعتك بوقت محدد",
        durationTitle: "اختر مدة الاختبار:",
        startTestText: "ابدأ الاختبار",
        wpmLabel: "السرعة (WPM)",
        accLabel: "الدقة",
        levelLabel: "المستوى",
        timerLabel: "الوقت المتبقي",
        hintText: "ركز على الشاشة ولا تنظر إلى لوحة المفاتيح!",
        modeBadgeTrain: "وضع التدريب",
        modeBadgeTest: "وضع الاختبار",
        resultTitle: "النتيجة",
        finalAccLbl: "الدقة",
        resultMessageSuccess: "أداء ممتاز! يمكنك الانتقال للمستوى التالي.",
        resultMessageFail: "حاول مرة أخرى لتحسين سرعتك ودقتك.",
        resultTestGreat: "سرعة ممتازة! أنت محترف في الطباعة.",
        resultTestGood: "أداء جيد! استمر في التدريب لتحسين سرعتك.",
        resultTestNeedWork: "تحتاج مزيد من التدريب. لا تستسلم!",
        retryText: "إعادة المحاولة",
        nextText: "المستوى التالي",
        homeText: "الرئيسية",
        footerText: "تمت البرمجة باحترافية لتطوير مهاراتك",
        allLevelsDone: "مبروك! أتممت جميع المستويات بنجاح.",
        dir: "rtl"
    },
    en: {
        appTitle: "Touch Typing",
        langText: "العربية",
        welcomeTitle: "Welcome to Touch Typing App",
        welcomeDesc: "Master fast typing through graduated levels supporting both Arabic and English.",
        selectLevelTitle: "Your Current Level: ",
        trainText: "Training",
        trainDesc: "Practice without time limit",
        testText: "Speed Test",
        testDesc: "Test your speed with a timer",
        durationTitle: "Choose test duration:",
        startTestText: "Start Test",
        wpmLabel: "WPM",
        accLabel: "Accuracy",
        levelLabel: "Level",
        timerLabel: "Time Left",
        hintText: "Focus on the screen, don't look at the keyboard!",
        modeBadgeTrain: "Training Mode",
        modeBadgeTest: "Test Mode",
        resultTitle: "Result",
        finalAccLbl: "Accuracy",
        resultMessageSuccess: "Great job! You can proceed to the next level.",
        resultMessageFail: "Try again to improve your speed and accuracy.",
        resultTestGreat: "Excellent speed! You are a typing pro.",
        resultTestGood: "Good performance! Keep practicing to improve.",
        resultTestNeedWork: "Needs more practice. Don't give up!",
        retryText: "Retry",
        nextText: "Next Level",
        homeText: "Home",
        footerText: "Professionally coded to develop your skills",
        allLevelsDone: "Congratulations! You've finished all levels.",
        dir: "ltr"
    }
};

// =============================================
// State Variables
// =============================================
let currentLang = 'ar';
let currentLevel = 1;
let currentMode = 'train'; // 'train' or 'test'
let testDuration = 180; // default 3 minutes in seconds
let currentText = "";
let typedChars = 0;
let errors = 0;
let startTime = null;
let timerInterval = null;
let countdownInterval = null;
let isTyping = false;
let charElements = [];
let remainingSeconds = 0;

// =============================================
// DOM Elements
// =============================================
const docHtml = document.documentElement;
const d = {
    langBtn: document.getElementById('lang-btn'),
    appTitle: document.getElementById('app-title'),
    langText: document.getElementById('lang-text'),
    welcomeScreen: document.getElementById('welcome-screen'),
    typingScreen: document.getElementById('typing-screen'),
    resultScreen: document.getElementById('result-screen'),

    // Welcome
    welcomeTitle: document.getElementById('welcome-title'),
    welcomeDesc: document.getElementById('welcome-desc'),
    selectLevelTitle: document.getElementById('select-level-title'),
    currentUserLevel: document.getElementById('current-user-level'),
    trainBtn: document.getElementById('train-btn'),
    trainText: document.getElementById('train-text'),
    trainDesc: document.getElementById('train-desc'),
    testBtn: document.getElementById('test-btn'),
    testText: document.getElementById('test-text'),
    testDesc: document.getElementById('test-desc'),
    testDurationPanel: document.getElementById('test-duration-panel'),
    durationTitle: document.getElementById('duration-title'),
    startTestBtn: document.getElementById('start-test-btn'),
    startTestText: document.getElementById('start-test-text'),
    levelPills: document.getElementById('level-pills'),
    prevLevelBtn: document.getElementById('prev-level-btn'),
    nextLevelNavBtn: document.getElementById('next-level-nav-btn'),

    // Typing
    wpmLabel: document.getElementById('wpm-label'),
    accLabel: document.getElementById('acc-label'),
    levelLabel: document.getElementById('level-label'),
    timerLabel: document.getElementById('timer-label'),
    hintText: document.getElementById('hint-text'),
    textDisplay: document.getElementById('text-display'),
    hiddenInput: document.getElementById('hidden-input'),
    wpmDisplay: document.getElementById('wpm'),
    accDisplay: document.getElementById('accuracy'),
    levelDisplay: document.getElementById('level-display'),
    levelBox: document.getElementById('level-box'),
    timerBox: document.getElementById('timer-box'),
    timerDisplay: document.getElementById('timer-display'),
    modeBadge: document.getElementById('mode-badge'),
    modeBadgeText: document.getElementById('mode-badge-text'),

    // Result
    resultTitle: document.getElementById('result-title'),
    finalAccLbl: document.getElementById('final-acc-lbl'),
    resultMessage: document.getElementById('result-message'),
    retryBtn: document.getElementById('retry-btn'),
    retryText: document.getElementById('retry-text'),
    nextLevelBtn: document.getElementById('next-level-btn'),
    nextText: document.getElementById('next-text'),
    homeBtn: document.getElementById('home-btn'),
    homeText: document.getElementById('home-text'),
    footerText: document.getElementById('footer-text'),

    finalWpm: document.getElementById('final-wpm'),
    finalAcc: document.getElementById('final-acc'),
    wpmCirclePath: document.getElementById('wpm-circle-path'),
    accCirclePath: document.getElementById('acc-circle-path'),
};

// =============================================
// Initialization
// =============================================
function init() {
    loadProgress();
    updateUI();
    setupListeners();
}

function loadProgress() {
    const savedLevel = localStorage.getItem(`type_learning_${currentLang}_level`);
    currentLevel = savedLevel ? parseInt(savedLevel) : 1;
}

function saveProgress(level) {
    if (level > currentLevel) {
        currentLevel = level;
        localStorage.setItem(`type_learning_${currentLang}_level`, currentLevel);
    }
}

// =============================================
// UI Updates
// =============================================
function updateUI() {
    const t = UI_TEXTS[currentLang];
    docHtml.lang = currentLang;
    docHtml.dir = t.dir;

    d.appTitle.innerText = t.appTitle;
    d.langText.innerText = t.langText;
    d.welcomeTitle.innerText = t.welcomeTitle;
    d.welcomeDesc.innerText = t.welcomeDesc;

    const maxLevels = TRAINING_LEVELS[currentLang].length;
    d.selectLevelTitle.innerHTML = `${t.selectLevelTitle} <span id="current-user-level">${currentLevel}/${maxLevels}</span>`;

    d.trainText.innerText = t.trainText;
    d.trainDesc.innerText = t.trainDesc;
    d.testText.innerText = t.testText;
    d.testDesc.innerText = t.testDesc;
    d.durationTitle.innerText = t.durationTitle;
    d.startTestText.innerText = t.startTestText;

    d.wpmLabel.innerText = t.wpmLabel;
    d.accLabel.innerText = t.accLabel;
    d.levelLabel.innerText = t.levelLabel;
    d.timerLabel.innerText = t.timerLabel;
    d.hintText.innerText = t.hintText;

    d.resultTitle.innerText = t.resultTitle;
    d.finalAccLbl.innerText = t.finalAccLbl;
    d.retryText.innerText = t.retryText;
    d.nextText.innerText = t.nextText;
    d.homeText.innerText = t.homeText;
    d.footerText.innerText = t.footerText;

    const nextIcon = document.getElementById('next-icon');
    if (nextIcon) {
        nextIcon.className = currentLang === 'en' ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-left";
    }

    // Hide test duration panel when updating UI
    d.testDurationPanel.classList.add('hidden');

    // Render level pills
    renderLevelPills();
}

function renderLevelPills() {
    const maxLevels = TRAINING_LEVELS[currentLang].length;
    d.levelPills.innerHTML = '';

    for (let i = 1; i <= maxLevels; i++) {
        const pill = document.createElement('button');
        pill.classList.add('level-pill');
        pill.textContent = i;

        if (i === currentLevel) {
            pill.classList.add('current-pill');
        } else if (i < currentLevel) {
            pill.classList.add('completed-pill');
        }

        pill.addEventListener('click', () => {
            currentLevel = i;
            updateUI();
        });

        d.levelPills.appendChild(pill);
    }

    // Update nav buttons state
    d.prevLevelBtn.disabled = currentLevel >= TRAINING_LEVELS[currentLang].length;
    d.nextLevelNavBtn.disabled = currentLevel <= 1;

    // Flip arrows for English LTR
    const prevIcon = d.prevLevelBtn.querySelector('i');
    const nextIcon = d.nextLevelNavBtn.querySelector('i');
    if (currentLang === 'en') {
        prevIcon.className = 'fa-solid fa-chevron-left';
        nextIcon.className = 'fa-solid fa-chevron-right';
    } else {
        prevIcon.className = 'fa-solid fa-chevron-right';
        nextIcon.className = 'fa-solid fa-chevron-left';
    }
}

function switchLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    loadProgress();
    updateUI();
}

function showScreen(screen) {
    [d.welcomeScreen, d.typingScreen, d.resultScreen].forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    screen.classList.remove('hidden');
    screen.classList.add('active');
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// =============================================
// Render Text Display
// =============================================

// We store a flat array of typable characters (no newlines)
let typableChars = []; // flat list of characters the user must type

function renderText(text) {
    d.textDisplay.innerHTML = '';
    typableChars = [];

    // Build typable chars list (skip newlines)
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== '\n') {
            typableChars.push(text[i]);
        }
    }

    // Render the text preserving word grouping
    // Split by newlines first, then by spaces
    const lines = text.split('\n');
    lines.forEach((line, lineIdx) => {
        if (lineIdx > 0) {
            d.textDisplay.appendChild(document.createElement('br'));
        }
        const words = line.split(' ');
        words.forEach((word, wordIdx) => {
            if (wordIdx > 0) {
                // Add space element between words
                const spaceSpan = document.createElement('span');
                spaceSpan.classList.add('word-unit', 'space-unit');
                spaceSpan.innerHTML = '&nbsp;';
                d.textDisplay.appendChild(spaceSpan);
            }
            // Add word element
            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word-unit');
            wordSpan.textContent = word;
            d.textDisplay.appendChild(wordSpan);
        });
    });

    // Initial highlight: show cursor on first char
    updateDisplay('');
}

function updateDisplay(typedValue) {
    d.textDisplay.innerHTML = '';
    const text = currentText;
    const lines = text.split('\n');

    let globalCharIdx = 0; // index into typableChars / typedValue

    lines.forEach((line, lineIdx) => {
        if (lineIdx > 0) {
            d.textDisplay.appendChild(document.createElement('br'));
        }

        const words = line.split(' ');
        words.forEach((word, wordIdx) => {
            if (wordIdx > 0) {
                // Space between words
                const spaceSpan = document.createElement('span');
                spaceSpan.classList.add('word-unit', 'space-unit');

                if (globalCharIdx < typedValue.length) {
                    // This space has been typed
                    if (typedValue[globalCharIdx] === ' ') {
                        spaceSpan.classList.add('typed-correct');
                    } else {
                        spaceSpan.classList.add('typed-incorrect');
                    }
                    spaceSpan.innerHTML = '&nbsp;';
                    globalCharIdx++;
                } else if (globalCharIdx === typedValue.length) {
                    // Cursor is on this space
                    spaceSpan.classList.add('cursor-char');
                    spaceSpan.innerHTML = '&nbsp;';
                    globalCharIdx++;
                } else {
                    spaceSpan.innerHTML = '&nbsp;';
                    globalCharIdx++;
                }

                d.textDisplay.appendChild(spaceSpan);
            }

            // Render word
            const wordStart = globalCharIdx;
            const wordEnd = globalCharIdx + word.length;

            if (typedValue.length <= wordStart) {
                // Word not yet reached
                if (typedValue.length === wordStart) {
                    // Cursor at start of this word
                    const wordSpan = document.createElement('span');
                    wordSpan.classList.add('word-unit');
                    // First char has cursor, rest is untyped
                    const cursorSpan = document.createElement('span');
                    cursorSpan.classList.add('cursor-char');
                    cursorSpan.textContent = word[0];
                    wordSpan.appendChild(cursorSpan);
                    if (word.length > 1) {
                        const restSpan = document.createElement('span');
                        restSpan.classList.add('untyped');
                        restSpan.textContent = word.substring(1);
                        wordSpan.appendChild(restSpan);
                    }
                    d.textDisplay.appendChild(wordSpan);
                } else {
                    // Entire word is untyped
                    const wordSpan = document.createElement('span');
                    wordSpan.classList.add('word-unit', 'untyped');
                    wordSpan.textContent = word;
                    d.textDisplay.appendChild(wordSpan);
                }
            } else if (typedValue.length >= wordEnd) {
                // Entire word has been typed
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('word-unit');

                let allCorrect = true;
                for (let i = 0; i < word.length; i++) {
                    if (typedValue[wordStart + i] !== word[i]) {
                        allCorrect = false;
                        break;
                    }
                }

                if (allCorrect) {
                    wordSpan.classList.add('typed-correct');
                    wordSpan.textContent = word;
                } else {
                    // Mix of correct/incorrect – render char by char with color
                    for (let i = 0; i < word.length; i++) {
                        const charSpan = document.createElement('span');
                        charSpan.textContent = word[i];
                        if (typedValue[wordStart + i] === word[i]) {
                            charSpan.classList.add('char-correct');
                        } else {
                            charSpan.classList.add('char-incorrect');
                        }
                        wordSpan.appendChild(charSpan);
                    }
                }
                d.textDisplay.appendChild(wordSpan);
            } else {
                // Partially typed word – cursor is inside this word
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('word-unit');
                const typedCount = typedValue.length - wordStart;

                // Check if typed portion is all correct for better ligature rendering
                let typedPartCorrect = true;
                for (let i = 0; i < typedCount; i++) {
                    if (typedValue[wordStart + i] !== word[i]) {
                        typedPartCorrect = false;
                        break;
                    }
                }

                if (typedPartCorrect) {
                    // Typed portion all correct - render as one colored span
                    const typedSpan = document.createElement('span');
                    typedSpan.classList.add('typed-correct');
                    typedSpan.textContent = word.substring(0, typedCount);
                    wordSpan.appendChild(typedSpan);
                } else {
                    // Mixed correct/incorrect in typed portion
                    for (let i = 0; i < typedCount; i++) {
                        const charSpan = document.createElement('span');
                        charSpan.textContent = word[i];
                        if (typedValue[wordStart + i] === word[i]) {
                            charSpan.classList.add('char-correct');
                        } else {
                            charSpan.classList.add('char-incorrect');
                        }
                        wordSpan.appendChild(charSpan);
                    }
                }

                // Cursor char
                const cursorSpan = document.createElement('span');
                cursorSpan.classList.add('cursor-char');
                cursorSpan.textContent = word[typedCount];
                wordSpan.appendChild(cursorSpan);

                // Remaining untyped
                if (typedCount + 1 < word.length) {
                    const restSpan = document.createElement('span');
                    restSpan.classList.add('untyped');
                    restSpan.textContent = word.substring(typedCount + 1);
                    wordSpan.appendChild(restSpan);
                }

                d.textDisplay.appendChild(wordSpan);
            }

            globalCharIdx = wordEnd;
        });
    });

    // Auto-scroll to cursor
    const cursorEl = d.textDisplay.querySelector('.cursor-char');
    if (cursorEl) {
        const container = d.textDisplay;
        const cursorRect = cursorEl.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        if (cursorRect.bottom > containerRect.bottom - 20) {
            container.scrollTop += cursorRect.bottom - containerRect.bottom + 60;
        }
    }
}

// =============================================
// Training Mode
// =============================================
function startTraining() {
    currentMode = 'train';
    const levelsArr = TRAINING_LEVELS[currentLang];
    const targetIdx = Math.min(currentLevel - 1, levelsArr.length - 1);
    currentText = levelsArr[targetIdx];

    // Setup mode badge
    const t = UI_TEXTS[currentLang];
    d.modeBadge.className = 'mode-badge train-badge';
    d.modeBadge.querySelector('i').className = 'fa-solid fa-graduation-cap';
    d.modeBadgeText.innerText = t.modeBadgeTrain;

    // Show level, hide timer
    d.levelBox.classList.remove('hidden');
    d.timerBox.classList.add('hidden');
    d.levelDisplay.innerText = currentLevel;

    resetAndStart();
}

// =============================================
// Test Mode
// =============================================
function startTest() {
    currentMode = 'test';
    const textsArr = TEST_TEXTS[currentLang];
    currentText = textsArr[Math.floor(Math.random() * textsArr.length)];

    // Setup mode badge
    const t = UI_TEXTS[currentLang];
    d.modeBadge.className = 'mode-badge test-badge';
    d.modeBadge.querySelector('i').className = 'fa-solid fa-stopwatch';
    d.modeBadgeText.innerText = t.modeBadgeTest;

    // Hide level, show timer
    d.levelBox.classList.add('hidden');
    d.timerBox.classList.remove('hidden');
    remainingSeconds = testDuration;
    d.timerDisplay.innerText = formatTime(remainingSeconds);

    resetAndStart();
}

function resetAndStart() {
    renderText(currentText);
    d.wpmDisplay.innerText = '0';
    d.accDisplay.innerText = '100%';
    typedChars = 0;
    errors = 0;
    isTyping = false;
    startTime = null;
    d.hiddenInput.value = '';
    clearInterval(timerInterval);
    clearInterval(countdownInterval);
    showScreen(d.typingScreen);
    d.hiddenInput.focus();
}

// =============================================
// Input Handling
// =============================================
function handleInput() {
    const val = d.hiddenInput.value;

    if (!isTyping && val.length > 0) {
        isTyping = true;
        startTime = new Date();
        timerInterval = setInterval(updateStats, 500);

        if (currentMode === 'test') {
            startCountdown();
        }
    }

    // Count errors
    let totalErrors = 0;
    for (let i = 0; i < val.length && i < typableChars.length; i++) {
        if (val[i] !== typableChars[i]) {
            totalErrors++;
        }
    }

    errors = totalErrors;
    typedChars = val.length;

    // Update display
    updateDisplay(val);

    // Check completion for training mode
    if (currentMode === 'train') {
        if (val.length >= typableChars.length) {
            finishLevel();
        }
    }
}

function countTypableChars() {
    return typableChars.length;
}

// =============================================
// Countdown Timer (Test Mode)
// =============================================
function startCountdown() {
    countdownInterval = setInterval(() => {
        remainingSeconds--;
        d.timerDisplay.innerText = formatTime(remainingSeconds);

        if (remainingSeconds <= 10) {
            d.timerDisplay.style.color = 'var(--error)';
        }

        if (remainingSeconds <= 0) {
            finishLevel();
        }
    }, 1000);
}

// =============================================
// Stats & Finish
// =============================================
function updateStats() {
    if (!startTime) return { wpm: 0, acc: 100 };

    const timeElapsed = (new Date() - startTime) / 60000;
    const wpm = timeElapsed > 0 ? Math.round((typedChars / 5) / timeElapsed) : 0;
    let acc = 100;
    if (typedChars > 0) {
        acc = Math.round(((typedChars - errors) / typedChars) * 100);
    }

    d.wpmDisplay.innerText = wpm;
    d.accDisplay.innerText = `${acc}%`;
    return { wpm, acc };
}

function finishLevel() {
    isTyping = false;
    clearInterval(timerInterval);
    clearInterval(countdownInterval);
    d.timerDisplay.style.color = '';

    const stats = updateStats();
    showResult(stats.wpm, stats.acc);
}

function showResult(wpm, acc) {
    showScreen(d.resultScreen);

    d.finalWpm.innerText = wpm;
    d.finalAcc.innerText = `${acc}%`;

    // Animate circles
    const wpmPercentage = Math.min(wpm, 100);
    d.wpmCirclePath.style.strokeDasharray = `${wpmPercentage}, 100`;
    d.accCirclePath.style.strokeDasharray = `${acc}, 100`;

    const t = UI_TEXTS[currentLang];

    if (currentMode === 'train') {
        const maxLevel = TRAINING_LEVELS[currentLang].length;
        if (acc >= 90 && currentLevel < maxLevel) {
            d.resultMessage.innerText = t.resultMessageSuccess;
            d.resultMessage.style.color = "var(--success)";
            d.nextLevelBtn.classList.remove('hidden');
            saveProgress(currentLevel + 1);
        } else if (acc >= 90 && currentLevel >= maxLevel) {
            d.resultMessage.innerText = t.allLevelsDone;
            d.resultMessage.style.color = "var(--success)";
            d.nextLevelBtn.classList.add('hidden');
        } else {
            d.resultMessage.innerText = t.resultMessageFail;
            d.resultMessage.style.color = "var(--error)";
            d.nextLevelBtn.classList.add('hidden');
        }
    } else {
        // Test mode results
        d.nextLevelBtn.classList.add('hidden');
        if (wpm >= 40 && acc >= 90) {
            d.resultMessage.innerText = t.resultTestGreat;
            d.resultMessage.style.color = "var(--success)";
        } else if (wpm >= 20 && acc >= 80) {
            d.resultMessage.innerText = t.resultTestGood;
            d.resultMessage.style.color = "var(--warning)";
        } else {
            d.resultMessage.innerText = t.resultTestNeedWork;
            d.resultMessage.style.color = "var(--error)";
        }
    }
}

// =============================================
// Event Listeners
// =============================================
function setupListeners() {
    d.langBtn.addEventListener('click', switchLanguage);

    // Training button
    d.trainBtn.addEventListener('click', () => {
        d.testDurationPanel.classList.add('hidden');
        startTraining();
    });

    // Test button – show duration panel
    d.testBtn.addEventListener('click', () => {
        d.testDurationPanel.classList.toggle('hidden');
    });

    // Duration buttons
    document.querySelectorAll('.duration-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active-duration'));
            btn.classList.add('active-duration');
            testDuration = parseInt(btn.dataset.duration);
        });
    });

    // Start test button
    d.startTestBtn.addEventListener('click', () => {
        startTest();
    });

    // Level navigation
    d.prevLevelBtn.addEventListener('click', () => {
        const maxLevels = TRAINING_LEVELS[currentLang].length;
        if (currentLevel < maxLevels) {
            currentLevel++;
            updateUI();
        }
    });

    d.nextLevelNavBtn.addEventListener('click', () => {
        if (currentLevel > 1) {
            currentLevel--;
            updateUI();
        }
    });

    // Hidden input
    d.hiddenInput.addEventListener('input', handleInput);

    // Click on typing area to focus
    document.querySelector('.typing-area').addEventListener('click', () => {
        d.hiddenInput.focus();
    });

    // Retry
    d.retryBtn.addEventListener('click', () => {
        if (currentMode === 'train') {
            startTraining();
        } else {
            startTest();
        }
    });

    // Next level (training only)
    d.nextLevelBtn.addEventListener('click', () => {
        loadProgress();
        startTraining();
    });

    // Home
    d.homeBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        clearInterval(countdownInterval);
        loadProgress();
        updateUI();
        showScreen(d.welcomeScreen);
    });
}

// =============================================
// Bootstrap
// =============================================
init();
