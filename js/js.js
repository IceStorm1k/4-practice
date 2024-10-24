const asabenehChallenges2020 = {
    description: "Vlad Sinyakovskiy challenges in ",
    challengeTitle: "Vlad Sinyakovskiy challenges",
    challengeSubtitle: "30DaysOfJavaScript Challenge",
    challengeYear: 2024,
    keywords: [
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JS",
        "JavaScript",
        "ES6",
        "Promise",
        "async await",
        "Database",
        "React",
        "React Hooks",
        "Context API",
        "React Router",
        "Web Storage",
        "localStorage",
        "sessionStorage",
        "Redux",
        "Node",
        "MongoDB",
        "SQL",
        "API",
        "DOM",
        "data science",
        "MERN",
        "Python",
        "Flask",
        "Statistics",
        "Linear Algebra",
        "Numpy",
        "Pandas",
        "Scipy",
        "Scikit-learn",
        "Visualization",
        "D3.js",
    ],
    author: {
        firstName: "Vlad",
        lastName: "Sinyakovskiy",
        titles: [
            ["💻", "Programmer"],
            ["🌐", "Web-Developer"],
        ],
        qualifications: [
            "📖 MSc. Computer Science Ongoing",
            "🧑‍🎓 BSc. Information and Communication Eng.",
            "🧑‍🎓 MSc. Food Technology",
            "🧑‍🎓 BSc.Food Technology",
        ],
        socialLinks: [
            {
                social: "LinkedIn",
                url: "https://www.instagram.com/mekotio_",
                fontawesomeIcon: '<i class="fa-brands fa-square-instagram"></i>',
            },
            {
                social: "Telegram",
                url: "https://t.me/IceStormik",
                fontawesomeIcon: '<i class="fa-brands fa-telegram"></i>',
            },
            {
                social: "Github",
                fontawesomeIcon: '<i class="fa-brands fa-github-square"></i>',
                url: "https://github.com/IceStorm1k",
            },
            {
                social: "DEV.to",
                fontawesomeIcon: "",
                url: "https://dev.to/asabeneh",
            },
        ],
        skills: [
            "✅ Web Development",
            "✅ Data Analysis",
            "✅ Data Visualization",
            "✅ Programming",
            "✅ Databases",
            "✅ Developing API",
        ],
        bio: "I am a student from the Bytonite training center and this is my first website written in JavaScript and CSS without using HTML.",
    },
    challenges: [
        {
            name: "30 Days Of Python",
            topics: ["Python", "Flask", "Numpy", "Pandas", "Statistics", "API", "MongoDB"],
            days: 30,
            status: "Done",
            questions: "Above 500",
            projects: "Two",
            interviewQns: "",
            githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
        },
        {
            name: "30 Days Of JavaScript",
            topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
            days: 30,
            status: "Ongoing",
            questions: "Above 500",
            projects: "About 30",
            interviewQns: "",
            githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
        },
        {
            name: "30 Days Of HTML & CSS",
            topics: ["CSS", "Flex", "Grid", "CSS Animation"],
            days: 30,
            status: "Coming",
            questions: "Above 500",
            projects: "Two",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of React",
            topics: ["React", "React Router", "Redux", "Context API", "React Hooks", "MERN"],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of ReactNative",
            topics: ["ReactNative", "Redux"],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "Two",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Fullstack",
            topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
            days: 30,
            status: "",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Data Analysis",
            topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Machine Learning",
            topics: [
                "Python",
                "Numpy",
                "Pandas",
                "Scikit-learn",
                "Scipy",
                "Linear Algebra",
                "Statistics",
                "Visualization",
            ],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
    ],
};

document.addEventListener("DOMContentLoaded", function () {
    let asabenehChallenges = asabenehChallenges2020.description;
    let year = asabenehChallenges2020.challengeYear;
    let subtitle = asabenehChallenges2020.challengeSubtitle;

    // Изменение цвета
    function changeColor() {
        let red = Math.floor(Math.random() * 100 + 100);
        let green = Math.floor(Math.random() * 100 + 100);
        let blue = Math.floor(Math.random() * 100 + 100);
        let randomRGB = `rgb(${red},${green},${blue})`;
        document.getElementById("elementId").style.color = randomRGB;
    }

    setInterval(changeColor, 1000);
    let h1 = document.createElement("h1");
    h1.textContent = `${asabenehChallenges} `;
    h1.classList.add("title");
    document.body.appendChild(h1);
    let span = document.createElement("span");
    span.textContent = year;
    span.classList.add("year");
    span.setAttribute("id", "elementId");
    h1.appendChild(span);

    // Изменение цвета времени
    function counterDate() {
        let r = Math.floor(Math.random() * 100 + 100);
        let g = Math.floor(Math.random() * 100 + 100);
        let b = Math.floor(Math.random() * 100 + 100);
        let rgb = `rgb(${r},${g},${b})`;

        let date = new Date();
        let monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let month = monthNames[date.getMonth()];
        let day = date.getDate();
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        h3.textContent = `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
        h3.style.backgroundColor = rgb;
    }
    setInterval(counterDate, 1000);

    let container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    let p = document.createElement("p");
    p.classList.add("subtitle");
    p.textContent = subtitle;
    container.appendChild(p);

    let h3 = document.createElement("h3");
    h3.classList.add("time");
    container.appendChild(h3);

    asabenehChallenges2020.challenges.forEach((challenge, i) => {
        let papa = document.createElement("div");
        papa.classList.add(`papa${i}`);
        container.appendChild(papa);

        let link = document.createElement("a");
        link.textContent = challenge.name;
        link.href = challenge.githubUrl || "#";
        if (!challenge.githubUrl) {
            link.style.textDecoration = "none";
            link.style.color = "black";
            link.style.cursor = "default";
        }
        papa.appendChild(link);

        let details = document.createElement("details");
        details.classList.add(`details`);
        papa.appendChild(details);

        let summary = document.createElement("summary");
        summary.classList.add(`summary`);
        summary.textContent = challenge.name.substring(10);
        details.appendChild(summary);

        challenge.topics.forEach((topic) => {
            let span = document.createElement("span");
            span.textContent = topic;
            details.appendChild(span);
        });

        let status = document.createElement("div");
        status.classList.add(`status`);
        status.textContent = challenge.status;
        papa.appendChild(status);
        

        if (challenge.status == "") {
            status.classList.add("gray");
            papa.style.backgroundColor = "gray";
        } else if (challenge.status == "Coming") {
            status.classList.add(`red`);
            papa.style.backgroundColor = "red";
        } else if (challenge.status == "Ongoing") {
            status.classList.add(`yellow`);
            papa.style.backgroundColor = "yellow";
        } else {
            papa.classList.add(`parent${i}`);
            status.classList.add(`green`);
        }
    });

    let parent0 = document.querySelector(".parent0");
    if (parent0) {
        parent0.style.backgroundColor = "rgb(31, 155, 31)";
        parent0.style.marginTop = "30px";
    }
    let greenstat = document.querySelector(".green");
    if (greenstat) {
        greenstat.style.display = "flex";
        greenstat.style.justifySelf = "end";
    }

    let asabenehyetayeh = document.createElement("h2");
    asabenehyetayeh.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
    asabenehyetayeh.style.textAlign = "center";
    asabenehyetayeh.style.fontSize = "30px";
    asabenehyetayeh.style.fontWeight = "600";
    container.appendChild(asabenehyetayeh);

    let parent = document.createElement("div");
    parent.classList.add("social");

    asabenehChallenges2020.author.socialLinks.forEach((linkData) => {
        let socialBlock = document.createElement("a");
        socialBlock.href = linkData.url;
        socialBlock.classList.add("socialIcons");
        socialBlock.innerHTML = linkData.fontawesomeIcon;
        parent.appendChild(socialBlock);
    });
    container.appendChild(parent);

    let bio = document.createElement("p");
    bio.textContent = asabenehChallenges2020.author.bio;
    bio.style.textAlign = "center";
    bio.style.marginTop = "30px";
    container.appendChild(bio);

    let parametr = document.createElement("div");
    parametr.classList.add("parametr");

    let parametrList = document.createElement("ul");
    parametrList.classList.add("parametrList");
    parametr.appendChild(parametrList);
    let title = document.createElement("li");
    title.classList.add("title1");
    title.textContent = "Title";
    parametrList.appendChild(title);
    asabenehChallenges2020.author.titles.forEach((titleData) => {
        let li = document.createElement("li");
        li.style.marginBottom = "10px";
        li.textContent = titleData.join(" ");
        parametrList.appendChild(li);
    });

    let parametrList2 = document.createElement("ul");
    parametrList2.classList.add("parametrList2");
    parametr.appendChild(parametrList2);
    let title2 = document.createElement("li");
    title2.classList.add("title1");
    title2.textContent = "Skills";
    parametrList2.appendChild(title2);
    asabenehChallenges2020.author.skills.forEach((skill) => {
        let li2 = document.createElement("li");
        li2.textContent = skill;
        li2.classList.add("li2");
        parametrList2.appendChild(li2);
    });

    let parametrList3 = document.createElement("ul");
    parametrList3.classList.add("parametrList");
    parametr.appendChild(parametrList3);
    let title3 = document.createElement("li");
    title3.classList.add("title1");
    title3.textContent = "Qualifications";
    parametrList3.appendChild(title3);
    asabenehChallenges2020.author.qualifications.forEach((qualification, i) => {
        let li3 = document.createElement("li");
        li3.textContent = qualification;
        li3.classList.add("li3");
        if (i === 0) {
            li3.classList.add("book");
        }
        parametrList3.appendChild(li3);
    });

    container.appendChild(parametr);

    let keywords = document.createElement("div");
    keywords.style.display = "flex";
    keywords.style.flexDirection = "row";
    keywords.style.flexWrap = "wrap";
    keywords.style.width = "100%";
    keywords.classList.add("keywords");
    let keywordsText = document.createElement("p");
    keywordsText.classList.add("keywordsText");
    keywordsText.textContent = "Keywords";
    keywords.appendChild(keywordsText);
    let skillsList = document.createElement("div");
    skillsList.classList.add("skillsList");
    skillsList.style.display = "flex";
    skillsList.style.flexWrap = "wrap";

    asabenehChallenges2020.keywords.forEach((keyword) => {
        let keywordsItems = document.createElement("span");
        keywordsItems.textContent = keyword;
        keywordsItems.classList.add("keywordsItems");
        keywordsItems.style.backgroundColor = `rgb(${Math.floor(Math.random() * 100 + 100)},${Math.floor(Math.random() * 100 + 100)},${Math.floor(Math.random() * 100 + 100)})`;
        keywordsItems.style.borderRadius = "20px";
        keywordsItems.style.padding = "5px";
        keywordsItems.style.margin = "5px";
        skillsList.appendChild(keywordsItems);

        if (keywordsItems.backgroundColor < "rgb(150, 150, 150)") {

            keywordsItems.style.color = "white";
    
        };
    })
    keywords.appendChild(skillsList);
    container.appendChild(keywords);
});
