import "../styles/CV.css";

import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../context/MyContext";

export function CV() {


  const { isDarkMode, setIsDarkMode } = useContext(MyContext);




  const birthYear = 1993;
  const [ageMessage, setAgeMessage] = useState("");

  useEffect(() => {
    const age = new Date().getFullYear() - birthYear;
    const messageTemplate = `En {age}-åring med en brinnande passion för spel och teknik. Jag älskar att utforska gränserna för vad som är möjligt med spel och teknik`;
    const message = messageTemplate.replace("{age}", age.toString());
    setAgeMessage(message);
  }, [birthYear]);

  const itSkills = [
    "Windows",
    "Linux",
    "Office paket",
    "Firebase",
    "SQL",
    "MySQL",
    "PostGreSQL",
    "MongoDB",
    "Node.js",
    "Rest API",
    "Express",
    "EJS",
    "Lua",
    "HTML",
    "CSS",
    "Javascript/TypeScript",
    "Vue",
    "React",
    "Cmake",
    "Python",
    "Github/Git",
    "Google",
    "npm/npx",
    "Google",
  ];

  // const itSkillsString = itSkills.join(", ");

  // const itSkillsList = document.getElementById("it_skills_list");

  // itSkills.forEach((skill) => {
  //   itSkillsList.innerHTML += `<li>${skill}</li>`;
  // });

  const intrestList = [
    "Maskininlärning",
    "Programmering",
    "Spel",
    "Rymden",
    "musik",
    "Filmer",
    "Emulation",
  ];

  // const intrestListList = document.getElementById("intrest_list");

  // intrestList.forEach((intrest) => {
  //   intrestListList.innerHTML += `<p>${intrest}</p>`;

  // });

  // if mouseover fa icon, show tooltip website link small image
  useEffect(() => {
    const faIcons = document.querySelectorAll(".fa");
    const scrollbox = document.getElementById("scrollbox");
    const scrollbox_text = document.getElementById("scrollbox_text");

    faIcons.forEach((icon) => {
      icon.addEventListener("mouseover", (e) => {
        const target = e.target as HTMLElement; // Type assertion
        const link = target.getAttribute("data-link");
        const tooltip = document.getElementById("tooltip");
        if (tooltip && link) { // Null check
          tooltip.style.display = "block";
          tooltip.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
        }
      });
      icon.addEventListener("mouseout", () => {
        const tooltip = document.getElementById("tooltip");
        if (tooltip) { // Null check
          tooltip.style.display = "none";
        }
      });
    });

    if (scrollbox && scrollbox_text) { // Null check
      scrollbox.addEventListener("scroll", () => {
        scrollbox_text.style.transform = `translateX(-${scrollbox.scrollLeft}px)`;
      });

      scrollbox.addEventListener("mouseleave", () => {
        scrollbox.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    }
  }, []);
  return (
    <>
      <div className="mode_element">
        <div className="resume_wrapper">
          <div className="resume_left">
            <div className="resume_image">
              <div className="card">
                <img src="apple-touch-icon.png" alt="Resume_image" />
              </div>
            </div>
            <div className="resume_bottom">
              <div className="resume_item resume_namerole">
                <div className="name">Andreas Isidorsson</div>
                <div className="role">mjukvaruingenjör</div>
              </div>
              <div className="resume_item resume_profile">
                <div className="resume_title">Profil</div>
                <div className="resume_info">
                  <div id="age" className="resume_info">
                    {ageMessage}
                  </div>
                </div>
              </div>
              <div className="resume_item resume_address">
                <div className="resume_title">Address</div>
                <div className="resume_info">
                  Sverige <br />
                  Västra Götalands län
                </div>
              </div>

              <div className="resume_item resume_contact">
                <div className="resume_title">Kontakt</div>
                <div className="resume_info">
                  <div className="resume_subtitle">Telefon</div>
                  <div className="resume_subinfo">+46 0725442221</div>
                </div>
                <div className="resume_info">
                  <div className="resume_subtitle">Email</div>
                  <div className="resume_subinfo">
                    <a href="mailto:Isidorssona@gmail.com" target="_blank">
                      {/* <i className="fas fa-at"></i> */}
                      <i className="material-icons">mail</i>
                    </a>
                  </div>
                </div>
                <div className="resume_info" >
                  <div className="resume_subtitle">Hemsida</div>
                  <div className="resume_subinfo">
                    <div className="resume_icons">
                      <a
                        href="https://cloticc.github.io/Minimal-Portfolio/"
                        target="_blank"
                      >
                        <i className="fa fa-globe"></i>
                      </a>
                      <a href="https://github.com/Cloticc/" target="_blank">
                        <i className="fab fa-github" title="Github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="resume_info">
                  <div className="resume_subtitle">Socials</div>
                  <div className="resume_subinfo">
                    <div className="resume_icons">
                      <a href="" target="_blank"></a>

                      <a
                        href="https://www.linkedin.com/in/andreas-isidorsson-457027148/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin" title="Linkedin"></i>
                      </a>

                      <a href="https://twitter.com/Clotic_" target="_blank">
                        <i className="fab fa-twitter" title="Twitter aka X"></i>
                      </a>

                      <a
                        href="https://discordapp.com/users/Clotic#5747"
                        target="_blank"
                      >
                        <i className="fab fa-discord" title="Discord"></i>
                      </a>
                      <a href="https://www.twitch.tv/clotic_" target="_blank">
                        <i className="fab fa-twitch" title="Twitch"></i>
                      </a>

                      <a href="https://www.youtube.com/@Clotic_/featured">
                        <i className="fab fa-youtube" title="Youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume_item resume_skills">
                <div className="resume_title">IT-Kunskaper</div>
                <div className="resume_info">
                  <div className="line_adjust_name">
                    <div className="skills_list">
                      <ul id="it_skills_list"></ul>
                      {itSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume_item resume_skills">
                <div className="resume_title">Intressen</div>
                <div className="resume_info">
                  <div className="line_adjust_name">
                    <div className="interests_list">
                      <ul id="intrest_list"></ul>
                      {intrestList.map((intrest, index) => (
                        <li key={index}>{intrest}</li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume_item resume_skills">
                <div className="resume_title">Språk</div>
                <div className="resume_info">
                  <div className="line_adjust_name">
                    <ul id="lang_list"></ul>
                    <li>Svenska - Modersmål</li>
                    <li>Engelska - Mycket goda kunskaper</li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="resume_right">
            <div className="resume_item resume_namerole">
              <div className="name">Andreas Isidorsson</div>
              <div className="role">systemutvecklare</div>
            </div>

            <div className="resume_item resume_experience">
              <div className="resume_title">Erfarenhet</div>

              <div id="scrollbox">
                <div id="scrollbox_text">
                  <div className="resume_info">
                    <div className="resume_data">
                      <div className="year">2023/07 - 2022/08</div>

                      <div className="content">
                        <p>
                          <a href="https://www.dafgards.se/" target="_blank">
                            Dafgård - Sommarjobb
                          </a>
                        </p>
                        <p>
                          På Dafgårds arbetade jag som truckförare i frys. Jag
                          ansvarade för att skicka pallar ut till produktionen,
                          lägga upp pallar i frysen och ta in pallar från
                          produktionen. Jag hade också hand om ett transportband
                          och kommunicerade med andra truckförare för att
                          säkerställa att pallarna hamnade på rätt plats. För
                          att lyckas i arbetet var det viktigt med god
                          kommunikationsförmåga, datavana och uppsikt.
                        </p>
                      </div>
                    </div>

                    <div className="resume_data">
                      <div className="year">2021/04 - 2022/08</div>

                      <div className="content">
                        <p>
                          <a href="https://bikepart.se " target="_blank">
                            Bike Parts
                          </a>
                        </p>
                        <p>
                          I MC-industrin hade jag en omväxlande arbetsdag där
                          jag fick demontera cyklar och registrera delarna för
                          lager. Utöver detta hade jag andra uppgifter såsom
                          administration, logistik, snöröjning, paketering och
                          kundservice. Det var en krävande, där jag fick använda
                          min tekniska kompetens och samtidigt utveckla mina
                          förmågor inom andra områden.
                        </p>
                      </div>
                    </div>
                    <div className="resume_data">
                      <div className="year">2017/08 - 2019/07</div>
                      <div className="content">
                        <p>
                          <a href="https://www.vattenfall.se" target="_blank">
                            Vattenfall
                          </a>
                        </p>
                        <p>
                          I min roll som tillsyningsman ansvarade jag för att
                          övervaka grävmaskinsföraren och kontrollera kablar
                          samt placera underlag för fundament och lyktstolpen.
                          Arbetet var fysiskt krävande, men jag fann det givande
                          att kunna bidra till att bygga infrastruktur och att
                          se resultatet av mitt arbete. Genom min roll lärde jag
                          mig också mycket om hur man använder olika typer av
                          maskiner och verktyg
                        </p>
                      </div>
                    </div>

                    <div className="resume_data">
                      <div className="year">2016/04 - 2016/08</div>
                      <div className="content">
                        <p>
                          <a href="" target="_blank">
                            Gymgrossisten
                          </a>
                        </p>
                        <p>
                          Som truckförare på gymgrossisten va min huvudsakliga
                          uppgift att hantera tömingar mellan olika platser. Jag
                          arbetade tätt tillsammans med lagerarbetare och
                          logistikpersonal för att säkerställa en effektiv och
                          säker hantering av företagets produkter. Mitt jobb
                          krävde noggrannhet och förmågan att arbeta under
                          tidspress, samt god fysisk kondition för att hantera
                          tunga last. Jag ansvarade också för att säkerställa
                          att truckar var i god funktion och att
                          säkerhetsföreskrifter följdes. Som truckförare på
                          gymgrossisten var du en viktig del av lager och
                          logistikverksamheten och bidrog till att säkerställa
                          att kunderna fick sina produkter i tid.
                        </p>
                      </div>
                    </div>
                    <div className="resume_data">
                      <div className="year">2015/01 - 2015/05</div>
                      <div className="content">
                        <p>
                          <a href="https://teknikgolv.se" target="_blank">
                            Teknik Golv
                          </a>
                        </p>
                        <p>
                          Flytspackling och slipning av golv. Inhomppning för
                          hade mycket göra. Lärde mig noggrannhet och precision
                          för att säkerställa ett jämnt och slätt resultat. Jag
                          arbetade tillsammans med ett team för att säkerställa
                          att alla golv i fastigheten blev klara enligt schemat
                          och kundens önskemål. Det här var en utmanande men
                          lärorik roll där jag fick utveckla mina tekniska
                          färdigheter och samarbeta med andra i en yrkesmiljö.
                        </p>
                      </div>
                    </div>

                    <div className="resume_data">
                      <div className="year">2014/01 - 2014/03</div>
                      <div className="content">
                        <p>
                          <a href="https://www.dackia.se" target="_blank">
                            Däckia
                          </a>
                        </p>
                        <p>
                          Som däckmontör hade jag en roll att hjälpa till med
                          montering och byten av däck på kundernas bilar. Under
                          rushperioder var det ofta mycket trafik och högt
                          arbetstempo, men jag stod alltid upp och hjälpte till
                          för att säkerställa att alla kunder fick sina däck
                          installerade på ett snabbt och säkert sätt. Jag
                          arbetade tillsammans med ett team av erfarna
                          däckmontörer och lärde mig mycket om teknik och
                          säkerhet kring montering av däck. Det här var en
                          utmanande men rolig roll där jag fick möjlighet att
                          visa min förmåga att hantera stressiga situationer och
                          samarbeta med andra för att uppnå gemensamma mål.
                        </p>
                      </div>
                    </div>

                    <div className="resume_data">
                      <div className="year">2000 - 2010</div>
                      <div className="content">
                        <p>
                          <a href="" target="_blank">
                            Lantbruk
                          </a>
                        </p>
                        <p>
                          Jag var ansvarig för att ta hand om djur som kor och
                          grisar, vilket innebar matning och skötsel av djuren
                          samt övervakning av deras hälsa och välbefinnande.
                          Utöver detta hade jag också ansvar för att köra olika
                          maskiner såsom traktorer, skördetröskor och andra
                          lantbruksmaskiner. Denna roll krävde både teknisk
                          kunskap och förmåga att hantera andra
                          jordbruksutrustningar. Trots utmaningarna var det en
                          tillfredsställande roll där jag fick använda mina
                          färdigheter inom teknik samtidigt som jag tog hand om
                          djur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reference">Referenser lämnas på begäran</div>
              </div>
            </div>
            <div className="resume_item resume_education">
              <div className="resume_title">Utbildning & kurser</div>
              <div className="resume_info">
                <div className="resume_data">
                  <div className="year">2023/11 - Pågående</div>
                  <div className="content">
                    <p>
                      <a href="https://www.lexicon.se/" target="_blank">
                        Frontendutvecklare/Lexicon IT Proffs, Stockholm
                      </a>
                    </p>
                    <p>
                      <ul>
                        <li>
                          <strong>HTML, CSS:</strong> Semantisk HTML, CSS
                          Syntax, versionshantering Git, flexbox & CSS grid,
                          responsivitet
                        </li>
                        <li>
                          <strong>Agila projektmetoder:</strong> Github, SCRUM,
                          agil webbutveckling
                        </li>
                        <li>
                          <li>
                            <strong>JavaScript:</strong> ECMAScript, Publicering
                            webbsidor, Kodstruktur, Manipulera DOM, Externa
                            tjänster
                          </li>
                        </li>
                        <li>
                          <strong>React:</strong> SPA-utveckling, SASS, React
                          JS, State Management, Routing
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="resume_data">
                  <div className="year">2022/05 - 2022/11</div>
                  <div className="content">
                    <p>
                      <a
                        href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                        target="_blank"
                      >
                        Kurs - webbutveckling
                      </a>
                    </p>
                    <p>
                      <ul>
                        <li>
                          <strong>Front-End Webbutveckling:</strong> HTML 5, CSS
                          3, Flexbox, Grid, Bootstrap 5, Javascript ES6, DOM
                          Manipulation, jQuery.
                        </li>
                        <li>
                          <strong>Backend Webbutveckling:</strong> Node.js, NPM,
                          Express.js, EJS, REST, API:er, Databaser (SQL,
                          PostgreSQL, Authentication), Firebase.
                        </li>
                        <li>
                          <strong>Web3:</strong> Blockchain-teknik, Token
                          contract development, NFT minting, buying and selling
                          logic.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="resume_data">
                  <div className="year">2008 - 2012</div>
                  <div className="content">
                    <p></p>
                    <p>Nils Ericsonsgymnasiet IV</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume_item resume_other">
              <div className="resume_other_title">Övrigt</div>
              <div className="resume_other_info">
                <ul>
                  <li>
                    <strong>Emulation:</strong> C++ för mmo emulator kärn
                    änvända också lua för menyskapande och strider med lua.
                  </li>
                  <li>
                    <strong>Server:</strong> Server administration, underhåll
                    och konfiguration.
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume_item">
              <div className="resume_license">Körkortbehörighet</div>

              <div className="resume_license_pad">
                <div className="int_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M959 413.4L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6l-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2l-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2l-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40l60.3-35.2a8 8 0 0 0 3-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zM220 418l72.7-199.9l.5-1.3l.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z"
                    />
                  </svg>
                  <div className="int_text">B</div>
                </div>

                <div className="int_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 4v7H4c-1.11 0-2 .89-2 2v4a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-4l-4-9H6m11 1v14h5v-1.5h-3.5V5H17m-9.5.5h3.7l3.3 7.5h-7V5.5M5 15.5A1.5 1.5 0 0 1 6.5 17A1.5 1.5 0 0 1 5 18.5A1.5 1.5 0 0 1 3.5 17A1.5 1.5 0 0 1 5 15.5m8 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5Z"
                    />
                  </svg>
                  <div className="int_text">A2/A3/A4/B1/B2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
