// Auto-scroll functionality
const scrollContainer = document.getElementById('scroll-container');
const scrollItems = scrollContainer.querySelectorAll('.scroll-item');
let scrollPosition = 0;
let scrollInterval;  // Variable to store the interval ID
let isAutoScrolling = true; // Flag to track if auto-scrolling is active

// Function to scroll the container
function autoScroll() {
    const scrollItemWidth = scrollItems[0].clientWidth; // Get the width of the first scroll item
    if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        // Reset scroll position to the beginning
        scrollPosition = 0;
    } else {
        scrollPosition += scrollItemWidth;
    }
    scrollContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

// Start auto-scrolling every 1.9 seconds (1900ms) for faster movement
function startAutoScroll() {
    scrollInterval = setInterval(autoScroll, 1900);
}

// Stop auto-scrolling
function stopAutoScroll() {
    clearInterval(scrollInterval);
}

// Toggle auto-scrolling when the scroll container is touched or clicked
scrollContainer.addEventListener('click', function(event) {
    if (isAutoScrolling) {
        stopAutoScroll();
    } else {
        startAutoScroll();
    }
    isAutoScrolling = !isAutoScrolling; // Toggle the flag
});

// Start the scrolling when the page loads
startAutoScroll();






let isTranslated = false;

function translatePage() {
    const translations = {
        "Saif Maghrabi": "سيف مغربي",
        "Home": "الرئيسية",
        "Welcome to my career page!": "مرحبًا بكم في صفحتي المهنية!",
        "About Me": "عنّي",
        "I am a web developer with extensive experience in front-end and back-end. In front-end, I focus on creating attractive and user-friendly user interfaces, while adhering to best practices in design and user experience. I work on improving the interaction between the user and the application to ensure a smooth and efficient experience.": 
            "أنا مطور ويب مع خبرة واسعة في الواجهة الأمامية والخلفية. في الواجهة الأمامية، أركز على إنشاء واجهات مستخدم جذابة وسهلة الاستخدام، مع الالتزام بأفضل الممارسات في التصميم وتجربة المستخدم. أعمل على تحسين التفاعل بين المستخدم والتطبيق لضمان تجربة سلسة وفعالة.",
        "In back-end, I deal with the development of databases and data management systems, where I ensure performance stability and data reliability. I work on building robust services that support back-end operations, which contributes to enhancing the overall efficiency of the system.": 
            "في الواجهة الخلفية، أتعامل مع تطوير قواعد البيانات وأنظمة إدارة البيانات، حيث أضمن استقرار الأداء وموثوقية البيانات. أعمل على بناء خدمات قوية تدعم العمليات الخلفية، مما يساهم في تعزيز الكفاءة العامة للنظام.",
        "I always strive to provide comprehensive solutions that meet the needs of clients, which contributes to achieving business goals effectively and enhancing the final user experience.": 
            "أنا دائمًا أسعى لتقديم حلول شاملة تلبي احتياجات العملاء، مما يساهم في تحقيق أهداف الأعمال بفعالية وتحسين تجربة المستخدم النهائية.",
        "Web developer and application programmer from Riyadh, Saudi Arabia. I work in web development and have a passion for user experience and interface design, in addition to my interest in both front-end and back-end development.": "مطور ويب ومبرمج تطبيقات من الرياض، المملكة العربية السعودية. أعمل في تطوير الويب ولدي شغف بتجربة المستخدم وتصميم الواجهات.",
        "What I do": "ما أفعله",
        "As a web developer, I specialize in both back-end and front-end technologies. I build websites and applications, manage databases, and design user interfaces.": "بصفتي مطور ويب، أختص في تقنيات الواجهة الخلفية والأمامية. أعمل على إنشاء مواقع الويب والتطبيقات، وإدارة قواعد البيانات، وتصميم واجهات المستخدم.",
        "Creating and maintaining websites and applications is what web developers do.": "إنشاء وصيانة مواقع الويب والتطبيقات هو ما يفعله مطورو الويب.",
        "The process of improving visual elements to enhance a product's functionality and appeal.": "عملية تحسين العناصر المرئية لتعزيز وظيفة المنتج وجاذبيته.",
        "Professional experience": "الخبرة المهنية",
        "Technologies and Programming Languages I Work With": "التقنيات ولغات البرمجة التي أعمل بها",
        "Cooperative training | Web Development": "التدريب التعاوني | تطوير الويب",
        "UI/UX Design": "تصميم واجهة المستخدم وتجربة المستخدم",
        "Haraj Information Technology Foundation": "مؤسسة حراج لتقنية المعلومات",
        "Full-time | Coordinator": "دوام كامل | منسق",
        "Marble Restaurant": "مطعم ماربل",
        "Skills Acquired": "المهارات المكتسبة",
        "Customer service concern": "الاهتمام بخدمة العملاء",
        "Analytical thinking": "التفكير التحليلي",
        "Crisis management": "إدارة الأزمات",
        "Leadership and guidance": "القيادة والتوجيه",
        "Working under pressure": "العمل تحت الضغط",
        "Back-End Technologies for Applications": "تقنيات الواجهة الخلفية للتطبيقات",
        "Databases": "قواعد البيانات",
        "Back-End Technologies for Websites": "تقنيات الواجهة الخلفية لمواقع الويب",
        "Front-End Technologies for Websites": "تقنيات الواجهة الأمامية لمواقع الويب",
        "Front-End Technologies for Applications": "تقنيات الواجهة الأمامية للتطبيقات",
        "Show More": "عرض المزيد",
        "Show Less": "عرض أقل",
        "Education": "التعليم",
        "College of Telecomm and Information": "كلية الاتصالات والمعلومات",
        "Diploma of Programming and Web Development Technology": "دبلوم في تكنولوجيا البرمجة وتطوير الويب",
        "Additional Courses":"دورات إضافية",
        "Big Data": "البيانات الضخمة",
        "Data Science & Machine Learning": "علم البيانات والتعلم الآلي",
        "Web Application Development": "تطوير تطبيقات الويب",
        "Data Science in Our World": "علم البيانات في عالمنا",
        "Introduction to Data Concepts": "مقدمة لمفاهيم البيانات",
        "Overview of Data Tools and Languages": "نظرة عامة على أدوات ولغات البيانات",
        "Project Based Learning Programme in Data Analysis": "برنامج التعلم القائم على المشاريع في تحليل البيانات",
        "Clean, Refine, and Visualize Data with IBM Watson Studio": "تنظيف البيانات وتنقيحها وتصورها باستخدام IBM Watson Studio",
        "Your Future in Data: The Job Landscape": "مستقبلك في البيانات: المشهد الوظيفي",
        "Web Development":"تطوير الويب",
        "Project Responsibilities :": "مسؤوليات المشروع :",
        "Identify the main objectives and requirements of the project.": "تحديد الأهداف والمتطلبات الرئيسية للمشروع.",
        "Develop an algorithm to outline and structure project needs.": "تطوير خوارزمية لتحديد وهيكلة احتياجات المشروع.",
        "Design the website and application prototypes and present them to stakeholders for approval.": "تصميم نماذج أولية للموقع والتطبيق وتقديمها لأصحاب المصلحة للموافقة عليها.",
        "Execute the project plan and begin implementation according to the approved design.": "إجراء اختبارات صارمة للموقع والتطبيق لضمان الأداء والجودة.",
        "Conduct rigorous testing of the website and application to ensure functionality and quality.": "اختبار الموقع والتطبيق قبل عرضه على المسؤولين.",
        "Present the completed project to stakeholders and document feedback for improvements.": "تقديم المشروع المكتمل لأصحاب المصلحة وتوثيق الملاحظات لتحسينه.",
        "Apply necessary modifications and deliver the final version of the project to stakeholders.": "تطبيق التعديلات اللازمة وتسليم النسخة النهائية من المشروع لأصحاب المصلحة.",
        "Skills Acquired :": "المهارات المكتسبة :",
        "Customer Service: Providing strong services to meet customer needs and increase customer satisfaction.": "خدمة العملاء: تقديم خدمات قوية لتلبية احتياجات العملاء وزيادة رضاهم.",
        "Analytical Thinking: Developing my problem analysis and problem solving skills.": "التفكير التحليلي: تطوير مهاراتي في تحليل وحل المشاكل.",
        "Management: Learning how to deal with rapid response and diversity.": "الإدارة: تعلم كيفية التعامل مع الاستجابة السريعة والتنوع.",
        "Leadership and Guidance: Requires the skill of motivating the team and guiding them towards achieving goals effectively.": "القيادة والتوجيه: يتطلبان مهارة تحفيز الفريق وإرشاده نحو تحقيق الأهداف بشكل فعال.",
        "Under Pressure: Improving my ability to manage time and is represented in many difficult circumstances.": "تحت الضغط: تحسين قدرتي على إدارة الوقت ويتجلى ذلك في العديد من الظروف الصعبة.",
        "Front-End Development":"تطوير الواجهة الأمامية",
        "Back-End Development":"تطوير الواجهة الخلفية",
        "SQL Database Management":"إدارة قاعدة بيانات SQL",
        "Database Development":"تطوير قاعدة البيانات",
        "Database Administrator":"مسؤول قاعدة البيانات",
        "Job Titles":"المسميات الوظيفية",
        "Experiences":"الخبرات",
        "Programming languages":"لغات البرمجة"

    };

    const elementsToTranslate = document.querySelectorAll("*");

    elementsToTranslate.forEach(element => {
        if (element.childNodes.length === 0) return;

        element.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                const originalText = child.nodeValue.trim();
                if (originalText) {
                    if (isTranslated) {
                        const originalKey = Object.keys(translations).find(key => translations[key] === originalText);
                        child.nodeValue = originalKey ? originalKey : originalText;
                        element.classList.remove('rtl');
                    } else {
                        const translatedText = translations[originalText];
                        child.nodeValue = translatedText ? translatedText : originalText;
                        if (translatedText && isArabic(translatedText) && !element.classList.contains('center')) {
                            element.classList.add('rtl');
                        } else {
                            element.classList.remove('rtl');
                        }
                    }
                }
            }
        });
    });

    if (!isTranslated) {
        document.body.classList.add('arabic');
        document.getElementById("toggle-button").style.float = "right";
    } else {
        document.body.classList.remove('arabic');
        document.getElementById("toggle-button").style.float = "left";
    }

    isTranslated = !isTranslated;
}

function isArabic(text) {
    return /[\u0600-\u06FF]/.test(text);
}

document.getElementById("translate-button").addEventListener("click", translatePage);
document.getElementById("translate-button-mobile").addEventListener("click", translatePage);

document.getElementById('menu-button').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    var menuContent = document.getElementById('menu-content');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.remove('overlay-fade-out');
        mobileMenu.classList.add('overlay-fade-in');
        menuContent.classList.remove('fade-out');
        menuContent.classList.add('fade-in');
    } else {
        mobileMenu.classList.remove('overlay-fade-in');
        mobileMenu.classList.add('overlay-fade-out');
        menuContent.classList.remove('fade-in');
        menuContent.classList.add('fade-out');
        setTimeout(function() {
            mobileMenu.classList.add('hidden');
        }, 500);
    }
});

document.getElementById('mobile-menu').addEventListener('click', function(event) {
    if (event.target === this) {
        var mobileMenu = document.getElementById('mobile-menu');
        var menuContent = document.getElementById('menu-content');
        mobileMenu.classList.remove('overlay-fade-in');
        mobileMenu.classList.add('overlay-fade-out');
        menuContent.classList.remove('fade-in');
        menuContent.classList.add('fade-out');
        setTimeout(function() {
            mobileMenu.classList.add('hidden');
        }, 500);
    }
});

function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("toggle-button");

    if (document.body.classList.contains('arabic')) {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            moreText.style.opacity = 0;
            setTimeout(function() {
                moreText.style.transition = "opacity 1s ease";
                moreText.style.opacity = 1;
            }, 10);
            btnText.innerHTML = "عرض أقل";
        } else {
            moreText.style.transition = "opacity 0.3s ease";
            moreText.style.opacity = 0;
            setTimeout(function() {
                moreText.style.display = "none";
            }, 300);
            btnText.innerHTML = "عرض المزيد";
        }
    } else {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            moreText.style.opacity = 0;
            setTimeout(function() {
                moreText.style.transition = "opacity 1s ease";
                moreText.style.opacity = 1;
            }, 10);
            btnText.innerHTML = "Show Less";
        } else {
            moreText.style.transition = "opacity 0.3s ease";
            moreText.style.opacity = 0;
            setTimeout(function() {
                moreText.style.display = "none";
            }, 300);
            btnText.innerHTML = "Show More";
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});


function toggleContent(element) {
    if (window.innerWidth <= 768) {
        element.classList.toggle('active');
    }
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});


  // Add a class to the body element based on the language direction
  document.documentElement.lang === 'ar' ? document.body.classList.add('rtl') : document.body.classList.remove('rtl');

  