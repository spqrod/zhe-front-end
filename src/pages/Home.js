import "../styles/home.css";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PersonIcon from '@mui/icons-material/Person';
import ConsultationBookingProcess from "../components/ConsultationBookingProcess"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import image1 from "../images/3.JPG";
import image2 from "../images/4.jpg";
import { useEffect } from "react";
import crystal1 from "../images/crystal-1.png"
import crystal2 from "../images/crystal-2.png"
import crystal6 from "../images/crystal-6.png"
import crystal9 from "../images/crystal-9.png"
import crystal13 from "../images/crystal-13.png"
import review1 from "../images/review-1.png"
import review2 from "../images/review-2.png"
import review3 from "../images/review-3.png"
import review4 from "../images/review-4.png"
 
export default function Home({consultationPrice, consultationLength, whatsAppLink}) {
    useEffect(() => {

        setTimeout(animateHeroPhotoOutlineAfterLoad, 1000);
        
        function animateHeroPhotoOutlineAfterLoad() {
            const heroPhotoOutline = document.querySelector(".heroPhotoOutline");
            heroPhotoOutline.classList.add("heroPhotoOutlineAfterLoad");
            setTimeout(() => 
                heroPhotoOutline.style.transition = "var(--transition)",
                1500
            );
        }
    });

    return (
        <main className="homePage">
            <section className="heroSection">
                <div className="heroInfoContainer">
                    <h1>Психолог Дарья Жеребцова</h1>
                    <p>Провожу онлайн консультации для тех, кому трудно, кто запутался и не знает, как быть дальше. <br></br>И для тех, кто хочет спокойствия, гармонии и понимания.</p>
                    <HashLink className="buttonLink" smooth to="/#help">
                        <button className="button">
                            С чем я могу помочь
                        </button>
                        <svg className="arrowIconSVG">
                            <path className="arrowIconPath" d="M 0 0 L 25 25 L 50 0"/>
                        </svg>
                    </HashLink>
                </div>
                <div className="heroPhotoContainer">
                    <img className="heroPhoto" src={image1} alt="" />
                    <div className="heroPhotoOutline"></div>
                </div>
            </section>
            <section className="problemsSection" id="help">
                <h1 className="sectionName">Проблемы</h1>
                <h2>С чем я могу помочь</h2>
                <div className="problemsContainer">
                    <div className="problemContainer irritation">
                        <div className="problemContentContainer">
                            Раздражительность
                        </div>
                    </div>
                    <div className="problemContainer selfRespect">
                        <div className="problemContentContainer">
                            Проблемы с самооценкой
                        </div>
                    </div>
                    <div className="problemContainer depression">
                        <div className="problemContentContainer">
                            Тревожные и депрессивные состояния
                        </div>
                    </div>
                    <div className="problemContainer perfectionism">
                        <div className="problemContentContainer">
                            Перфекционизм
                        </div>
                    </div>
                    <div className="problemContainer selfDissatisfaction">
                        <div className="problemContentContainer">
                            Недовольство собой и своими достижениями
                        </div>
                    </div>
 
                    <div className="problemContainer negativeFeelings">
                        <div className="problemContentContainer">
                            Негативные чувства: злость, вина, стыд
                        </div>
                    </div>
                    <div className="problemContainer communicationProblems">
                        <div className="problemContentContainer">
                            Сложности в построении коммуникации с окружающими
                        </div>
                    </div>
                    <div className="problemContainer relationshipProblems">
                        <div className="problemContentContainer">
                            Трудности в построение отношений
                        </div>
                    </div>
                    <div className="problemContainer loss">
                        <div className="problemContentContainer">
                            Потеря близкого человека
                        </div>
                    </div>
                </div>
            </section>
            <section className="methodsSection">
                <h2>Методы работы</h2>
                <div className="methodsContainer">
                    <div className="methodContainer">
                        <div className="crystalImageContainer">
                            <img className="crystalImage" src={crystal1} alt="" />
                        </div>
                        <div className="methodInfoContainer">
                            <h3>Клиент-центрированная терапия</h3>
                            <p>Направление созданное К. Роджерсом на основе принципов гуманистической психологии. Психолог в консультировании ведет себя не директивно, рефлексивно по отношению к клиенту.  Главный принцип это «здесь и теперь». Нет никаких правил, не указаний и четного алгоритма к действию. Клиент самостоятельно решает свой запрос, но опираясь на принятие, доверие  и опыт специалиста.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="crystalImageContainer">
                            <img className="crystalImage" src={crystal6} alt="" />
                        </div>
                        <div className="methodInfoContainer">
                            <h3>Метод дерефлексии</h3>
                            <p>Снятие излишнего самоконтроля, чрезмерного самокопания. В некоторых случаях это не является продуктивным, а отнимает только силы и энергию. </p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="crystalImageContainer">
                            <img className="crystalImage" src={crystal2} alt="" />
                        </div>
                        <div className="methodInfoContainer">
                            <h3>Метод пародоксальной интенции</h3>
                            <p>Подведение клиента к тому, что вызывает страхи  и большее стремление  избежать. Благодаря этому достигается ощущение свободы. Прежние тревожности и страхи недосказывают такого негативного воздействия, что позволяет двигаться перед. </p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="crystalImageContainer">
                            <img className="crystalImage" src={crystal9} alt="" />
                        </div>
                        <div className="methodInfoContainer">
                            <h3>Арт-терапия</h3>
                            <p>Это направление в психотерапии, метод психологической коррекции, в основе которого лежит использование искусства и творчества. Своеобразное связующее звено между сознанием и подсознанием человека. Часто ее называют мостом, проложенным между разумом и душой.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="crystalImageContainer">
                            <img className="crystalImage" src={crystal13} alt="" />
                        </div>
                        <div className="methodInfoContainer">
                            <h3>Позитивная психология</h3>
                            <p>Отрасль психологической практики, в центре которой находится позитивный потенциал человека. Этот подход нацелен  оптимизацию функционирования человека, поиск факторов, которые способствовали бы благополучному существованию и расцвету индивида.</p>
                        </div>
                    </div>
                </div>
                
            </section>
            {/* <section className="educationSection">
                <h1 className="sectionName">Образование</h1>
                <h2>Моё образование</h2>
                <div className="educationsContainer">
                    <div className="educationContainer">
                            <h3>Образование 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                    </div>
                    <div className="educationContainer">
                            <h3>Образование 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                    </div>
                    <div className="educationContainer">
                            <h3>Образование 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                    </div>
                    <div className="educationContainer">
                            <h3>Образование 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                    </div>
                    <div className="educationContainer">
                            <h3>Образование 5</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                    </div>
                </div>
                
            </section> */}
            <section className="reviewsSection">
                <h1 className="sectionName">Отзывы</h1>
                <h2>Отзывы</h2>
                <div className="reviewsContainer">
                    <div className="reviewContainer">
                        <img className="reviewImage" src={review1} alt="" />
                    </div>
                    <div className="reviewContainer">
                        <img className="reviewImage" src={review4} alt="" />
                    </div>
                    <div className="reviewContainer">
                        <img className="reviewImage" src={review3} alt="" />
                    </div>
                    <div className="reviewContainer">
                        <img className="reviewImage" src={review2} alt="" />
                    </div>
                </div>
            </section>
            <section className="formatSection">
                <h2>Как попасть на консультацию?</h2>
                <ConsultationBookingProcess consultationPrice={consultationPrice} consultationLength={consultationLength} whatsAppLink={whatsAppLink}/>
                <button className="button">
                    <Link className="buttonLink" to="">
                        Записаться
                    </Link>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                </button>
            </section>
            <section className="afterSection">
                <h1 className="sectionName">После консультаций</h1>
                <h2>Что будет после консультаций?</h2>
                <div className="afterInfoContainer">
                    <div className="afterInfoItem">
                        <p>
                            После одной консультации вы не станете непобедимым супер героем. Но репертуар того, что вы принимаете в себе и в жизни станет гораздо шире. Жить будет <strong>спокойнее и счастливее</strong>. 
                        </p>
                    </div>
                    <div className="afterInfoItem">
                        <p>
                            <strong>Консультации как уборки.</strong> Помогают все непонятное упорядочить, разложить по своим местам. Ведь в этой жизни все стремится к хаосу. Что будет, если перестать убирать дома, поливать цветы, проводить осмотр автомобиля? Конечно, всё запылиться, завянет и заскрипит.
                        </p>
                    </div>
                    <div className="afterInfoItem">
                        <p>
                            То же самое и с нашим <strong>ментальным здоровьем</strong>. Поэтому, чтобы было принято жить эту жизнь, уборки лучше проводить регулярно. 
                        </p>
                    </div>

                </div>
            </section>
            <section className="aboutSection">
                <h2>Пару слов обо мне</h2>
                <div className="aboutContainer">
                    <div className="aboutImageContainer">
                        <img className="aboutImage" src={image2} alt="" />
                        <div className="aboutImageOutline"></div>
                    </div>
                    <div className="aboutInfoContainer">
                        <p>
                            Меня зовут Дарья Жеребцова. Я дипломированный психолог-консультант. 
                            Имею высшее психологическое образование по специальности «Психолог». Постоянно обучаюсь на разных курсах по повышению квалификации, развиваюсь и совершенствуюсь.
                        </p><br />
                        <p>
                            Больше всего на свете меня поражает природа наших мыслей и чувств. Их глубина, разнообразие и развитие. В каждом из нас – огромный загадочный мир. И чем лучше мы его понимаем, тем приятней жить.
                        </p><br />
                        <p>
                            Моя миссия – помочь разобраться в самом важном человеке в Вашей жизни – себе!
                        </p>
                    </div>
                </div>
            </section>
            <section className="blogSection">
                <h1 className="sectionName">Блог</h1>
                <h2>Психологические заметки</h2>
                <div className="blogPostsContainer">
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon className="blogPostIcon" />
                        <p className="blogPostName">Заметка 1</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon className="blogPostIcon" />
                        <p className="blogPostName">Заметка 2</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon className="blogPostIcon" />
                        <p className="blogPostName">Заметка 3</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon className="blogPostIcon" />
                        <p className="blogPostName">Заметка 4</p>
                    </div>
                </div>
                <button className="button">
                    <Link className="buttonLink" to="/blog">
                        Смотреть все заметки
                    </Link>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                </button>
            </section>
            <section className="bookSection">
                <h1 className="sectionName">Запись</h1>
                <h2>Записаться на консультацию</h2>
                <div className="bookForm">
                    Запись
                </div>
            </section>
        </main>
    );
}