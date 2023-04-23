import "./styles.css";

import React, { useEffect, useState } from "react";

import DownloadButton from "../components/downloadButton";

// import { Link } from "react-router-dom";

// import "./app.js";

// TODO: Remake CV with TailwindCSS

const Cv = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoading(false);
      }, 1);
    });
  }, []);

  const itSkills = [
    "Lua",
    "HTML",
    "CSS",
    "Javascript/TypeScript",
    "SQL",
    "Vue.js",
    "React.js",
    "Node.js",
    "Cmake",
    "Python",
    "Git",
    "Google",
    "Office paket",
    "Server",
    "Felsökning",
    "Linux",
    "Windows",
    "Blender",
  ];

  const intrestList = [
    "Maskininlärning",
    "Rymden",
    "musik",
    "Filmer",
    "Programmering",
    "Spel",
    "Emulation",
  ];

  // return (
  //   <div>
  //     {loading ? (
  //       <div id="loading">Loading...</div>
  //     ) : (
  //       <div id="content">
  //         <ul id="it_skills_list">
  //           {itSkills.map((skill, index) => (
  //             <li key={index}>{skill}</li>
  //           ))}
  //         </ul>
  //         <ul id="intrest_list">
  //           {intrestList.map((interest, index) => (
  //             <li key={index}>{interest}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <>
      <div>
        {" "}
        {loading ? (
          <div
            id="loading"
            class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div class="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <html>
            <head>
              <meta charset="utf-8" />
              <title>AI</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <link rel="stylesheet" type="text/css" href="styles.css" />

              <script src="./app.js" type="text/javascript" defer></script>

              <script
                src="https://kit.fontawesome.com/341429ec46.js"
                crossorigin="anonymous"
              ></script>
              <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              />
            </head>

            <body>
              <div className="bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div class="resume_wrapper">
                  <div class="resume_left">
                    <div class="resume_image">
                      <div class="card">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TZO89bWv4cvDthf5gddjZEkThsw6prIEew&usqp=CAU"
                          alt="Resume_image"
                        />
                      </div>
                    </div>
                    <div class="resume_bottom">
                      <div class="resume_item resume_namerole">
                        <div class="name">Andreas Isidorsson</div>
                        <div class="role">mjukvaruingenjör</div>
                      </div>
                      <div class=" text-stone-300">
                        <div class="resume_title">Profil</div>
                        <div class="resume_info">
                          En passionerad spel- och teknikentusiast med kunskap
                          inom programutvecklare
                        </div>
                      </div>
                      <div class=" text-stone-300">
                        <div class=" resume_title">Address</div>
                        <div class="resume_info">
                          Sverige <br />
                          Västra Götalands län
                        </div>
                      </div>

                      <div class="resume_item resume_contact">
                        <div class="text-stone-300">Kontakt</div>
                        <div class="resume_info">
                          <div class="resume_subtitle  text-stone-300">
                            Telefon
                          </div>
                          <div class="resume_subinfo text-stone-300">
                            +46 0725442221
                          </div>
                        </div>
                        <div class="resume_info">
                          <div class="resume_subtitle  text-stone-300">
                            Email
                          </div>
                          <div class="resume_subinfo">
                            <a
                              href="mailto:Isidorssona@gmail.com"
                              target="_blank"
                            >
                              <i class="fab fa-light fa-at"></i>
                            </a>
                          </div>
                        </div>
                        <div class="resume_info">
                          <div class="resume_subtitle  text-stone-300">
                            Socials
                          </div>
                          <div class="resume_subinfo">
                            <div class="resume_icons">
                              <a
                                href="https://github.com/Cloticc/"
                                target="_blank"
                              >
                                <i class="fab fa-github"></i>
                              </a>
                              <a
                                href="https://www.linkedin.com/in/andreas-isidorsson-457027148/"
                                target="_blank"
                              >
                                <i class="fab fa-linkedin"></i>
                              </a>
                              <a
                                href="https://twitter.com/Clotic_"
                                target="_blank"
                              >
                                <i class="fab fa-twitter"></i>
                              </a>
                              <a
                                href="https://discordapp.com/users/Clotic#5747"
                                target="_blank"
                              >
                                <i class="fab fa-discord"></i>
                              </a>
                              <a
                                href="https://www.twitch.tv/clotic_"
                                target="_blank"
                              >
                                <i class="fab fa-twitch"></i>
                              </a>

                              <a href="https://www.youtube.com/@Clotic_/featured">
                                <i class="fab fa-youtube"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="resume_item resume_skills">
                        <div class="resume_title  text-stone-300">
                          IT-Kunskaper
                        </div>
                        <div class="resume_info">
                          <div class="line_adjust_name">
                            <div class="skills_list  text-stone-300">
                              <ul id="it_skills_list ">
                                {itSkills.map((skill, index) => (
                                  <li key={index}>{skill}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="resume_item resume_skills">
                        <div class="resume_title  text-stone-300">
                          Intressen
                        </div>
                        <div class="resume_info">
                          <div class="line_adjust_name">
                            <div class="interests_list  text-stone-300">
                              <ul id="intrest_list">
                                {intrestList.map((interest, index) => (
                                  <li key={index}>{interest}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="resume_item resume_skills">
                        <div class="resume_title  text-stone-300">Språk</div>
                        <div class="resume_info">
                          <div class="line_adjust_name text-stone-300">
                            <ul id="lang_list"></ul>
                            <li>Svenska - Modersmål</li>
                            <li>Engelska - Mycket goda kunskaper</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="resume_right">
                    <div class="resume_item resume_namerole">
                      <div class="name">Andreas Isidorsson</div>
                      <div class="role">systemutvecklare</div>
                    </div>
                    <div class="resume_item resume_experience">
                      <div class="resume_title">Erfarenhet</div>

                      <div id="scrollbox">
                        <div id="scrollbox_text">
                          <div class="resume_info">
                            <div class="resume_data">
                              <div class="year">2021/08 - 2022/08</div>

                              <div class="content">
                                <p>
                                  <a
                                    href="https://bikepart.se "
                                    target="_blank"
                                  >
                                    Bike Parts
                                  </a>
                                </p>
                                <p>
                                  Fordonsmekaniker och Demontör inom
                                  MC-industrin där jag fick möjlighet att
                                  demontera cyklar och registrera delarna för
                                  lager, samt att ha andra uppgifter såsom
                                  logistik, snöröjning, paketering och
                                  kundservice.
                                </p>
                              </div>
                            </div>
                            <div class="resume_data">
                              <div class="year">2020/06 - 2021/02</div>

                              <div class="content">
                                <p>
                                  <a
                                    href="https://titans-league.org/news"
                                    target="_blank"
                                  >
                                    Titans-League
                                  </a>
                                </p>
                                <p>
                                  Jag har erfarenhet av att utveckla front-end
                                  för webbsidor med hjälp av JavaScript
                                  ramverket Vue.js. Som ett bevis på min kunskap
                                  använde jag detta för att skapa en hemsida för
                                  en privat server för World of Warcraft
                                  Titans-League. Projektet innebar att designa
                                  och implementera en användarvänlig gränssnitt
                                  med hjälp av HTML, CSS och Vue.js, samt att
                                  samarbeta med en back-end-utvecklare för att
                                  säkerställa en smidig interaktion mellan
                                  gränssnittet och servern. Resultatet var en
                                  attraktiv och responsiv hemsida som
                                  förbättrade användarnas upplevelse. Även
                                  assisterat med andra projekt.
                                </p>
                              </div>
                            </div>

                            <div class="resume_data">
                              <div class="year">2018/01 - 2019/05</div>

                              <div class="content">
                                <p>
                                  <a
                                    href="https://www.se.issworld.com"
                                    target="_blank"
                                  >
                                    ISS Facility Services
                                  </a>
                                </p>
                                <p>
                                  Lokalvård lagerhus och köpcentrum. Det var en
                                  intressant och utmanande roll där jag fick
                                  möjlighet att arbeta självständigt och ansvara
                                  för att hålla lokalerna rena och väl
                                  underhållna.
                                </p>
                              </div>
                            </div>

                            <div class="resume_data">
                              <div class="year">2017/08 - 2018/12</div>

                              <div class="content">
                                <p>
                                  <a
                                    href="https://www.vattenfall.se"
                                    target="_blank"
                                  >
                                    Vattenfall
                                  </a>
                                </p>
                                <p>
                                  Tillsyningsman för grävmaskinsföraren för att
                                  kontrollera kablar och placera underlag för
                                  fundament och lyktstolpen. Arbetet var fysiskt
                                  krävande, men jag tyckte att det var givande
                                  att få bidra till att bygga infrastruktur och
                                  se resultatet av mitt arbete. Jag lärde mig
                                  också mycket om hur man använder olika typer
                                  av maskiner och verktyg och om hur man följer
                                  säkerhetsföreskrifter på en byggplats.
                                </p>
                              </div>
                            </div>

                            <div class="resume_data">
                              <div class="year">2016/04 - 2016/08</div>

                              <div class="content">
                                <p>
                                  <a href="" target="_blank">
                                    Gymgrossisten
                                  </a>
                                </p>
                                <p>
                                  Som truckförare på gymgrossisten va min
                                  huvudsakliga uppgift att hantera tömingar
                                  mellan olika platser. Jag arbetade tätt
                                  tillsammans med lagerarbetare och
                                  logistikpersonal för att säkerställa en
                                  effektiv och säker hantering av företagets
                                  produkter. Mitt jobb krävde noggrannhet och
                                  förmågan att arbeta under tidspress, samt god
                                  fysisk kondition för att hantera tunga last.
                                  Jag ansvarade också för att säkerställa att
                                  truckar var i god funktion och att
                                  säkerhetsföreskrifter följdes. Som truckförare
                                  på gymgrossisten var du en viktig del av lager
                                  och logistikverksamheten och bidrog till att
                                  säkerställa att kunderna fick sina produkter i
                                  tid.
                                </p>
                              </div>
                            </div>
                            <div class="resume_data">
                              <div class="year">2015/01 - 2015/05</div>

                              <div class="content">
                                <p>
                                  <a
                                    href="https://teknikgolv.se"
                                    target="_blank"
                                  >
                                    Teknik Golv
                                  </a>
                                </p>
                                <p>
                                  Flytspackling och slipning av golv.
                                  Inhomppning för hade mycket göra. Lärde mig
                                  noggrannhet och precision för att säkerställa
                                  ett jämnt och slätt resultat. Jag arbetade
                                  tillsammans med ett team för att säkerställa
                                  att alla golv i fastigheten blev klara enligt
                                  schemat och kundens önskemål. Det här var en
                                  utmanande men lärorik roll där jag fick
                                  utveckla mina tekniska färdigheter och
                                  samarbeta med andra i en yrkesmiljö.
                                </p>
                              </div>
                            </div>

                            <div class="resume_data">
                              <div class="year">2014/01 - 2014/05</div>

                              <div class="content">
                                <p>
                                  <a
                                    href="https://www.dackia.se"
                                    target="_blank"
                                  >
                                    Däckia
                                  </a>
                                </p>
                                <p>
                                  Min roll innebar att hjälpa till med montering
                                  och byten av däck på kundernas bilar. Under
                                  rushperioder var det ofta mycket trafik och
                                  högt arbetstempo, men jag stod upp och hjälpte
                                  till för att säkerställa att alla kunder fick
                                  sina däck installerade på ett snabbt och
                                  säkert sätt. Jag arbetade tillsammans med ett
                                  team av erfarna däckmontörer och lärde mig
                                  mycket om teknik och säkerhet när det gäller
                                  montering av däck. Det här var en utmanande
                                  men rolig roll där jag fick visa min förmåga
                                  att hantera stressiga situationer och
                                  samarbeta med andra för att uppnå gemensamma
                                  mål.
                                </p>
                              </div>
                            </div>

                            <div class="resume_data">
                              <div class="year">2000 - 2010</div>

                              <div class="content">
                                <p>
                                  <a href="" target="_blank">
                                    Lantbruk
                                  </a>
                                </p>
                                <p>
                                  tog hand om djur såsom kor och grisar. Min
                                  roll innebar matning och skötsel av djuren,
                                  samt övervakning av deras hälsa och
                                  välbefinnande. Jag var också ansvarig för att
                                  köra olika maskiner som traktor, skördetröska
                                  och andra lantbruksmaskiner. Detta krävde både
                                  teknisk kunskap och förmåga att arbeta med
                                  andra jordbruksutrustning. Detta var en
                                  utmanande men tillfredsställande roll där jag
                                  fick använda mina färdigheter i teknik och
                                  samtidigt ta hand om djur.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reference">Referenser lämnas på begäran</div>
                    </div>
                    <div class="resume_item resume_education">
                      <div class="resume_title">Utbildning & kurser</div>
                      <div class="resume_info">
                        <div class="resume_data">
                          <div class="year">2022/12 - 2023</div>
                          <div class="content">
                            <p>
                              <a
                                href="https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/"
                                target="_blank"
                              >
                                Kurs - Python
                              </a>
                            </p>
                            <p>jQuery, Python, and Django.</p>
                          </div>
                        </div>

                        <div class="resume_data">
                          <div class="year">2022/04 - 2022/07</div>
                          <div class="content">
                            <p>
                              <a
                                href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                                target="_blank"
                              >
                                Kurs - Web-Development
                              </a>
                            </p>
                            <p>
                              HTML, CSS, Javascript, Node, React, MongoDB, Web3
                              and DApps.
                            </p>
                          </div>
                        </div>
                        <div class="resume_data">
                          <div class="year">2008 - 2010</div>
                          <div class="content">
                            <p></p>
                            <p>Nils Ericsonsgymnasiet IV - Fordon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="resume_item resmue_interests">
                      <div class="resume_license">Körkortbehörighet</div>
                      <div class="resume_info">
                        <div class="resume_license_pad">
                          <div class="int_icon">
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
                          </div>
                          <div class="int_text">B</div>
                        </div>

                        <div class="resume_license_pad">
                          <div class="int_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              wid
                              th="1em"
                              height="1em"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M6 4v7H4c-1.11 0-2 .89-2 2v4a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-4l-4-9H6m11 1v14h5v-1.5h-3.5V5H17m-9.5.5h3.7l3.3 7.5h-7V5.5M5 15.5A1.5 1.5 0 0 1 6.5 17A1.5 1.5 0 0 1 5 18.5A1.5 1.5 0 0 1 3.5 17A1.5 1.5 0 0 1 5 15.5m8 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5Z"
                              />
                            </svg>
                          </div>

                          <div class="int_data">A2/A3/A4/B1/B2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DownloadButton />
            </body>
          </html>
        )}
      </div>
    </>
  );
};

export default Cv;
