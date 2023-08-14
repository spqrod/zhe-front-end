import "../styles/home.css";
import ConsultationBookingProcess from "../components/ConsultationBookingProcess"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import image1 from "../images/3.JPG";
import image2 from "../images/4.jpg";
import { useEffect } from "react";
import review1 from "../images/review-1.png"
import review2 from "../images/review-2.png"
import review3 from "../images/review-3.png"
import review4 from "../images/review-4.png"
import BookConsultationForm from "../components/BookConsultationForm";
 
export default function Home({consultationPrice, consultationLength, whatsAppLink}) {
    useEffect(() => {

        setTimeout(animateHeroPhotoOutlineAfterLoad, 500);
        
        function animateHeroPhotoOutlineAfterLoad() {
            const heroPhotoOutline = document.querySelector(".heroPhotoOutline");
            if (heroPhotoOutline) {
                heroPhotoOutline.classList.add("heroPhotoOutlineAfterLoad");
                setTimeout(() => 
                    heroPhotoOutline.style.transition = "var(--transition)",
                    1500
                );
            }
        }

        // const response = fetch("/test")
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch((error) => console.log(error));
    });

    return (
        <main className="homePage">
            <section className="heroSection">
                <div className="heroInfoContainer">
                    <h1>Психолог Дарья Жеребцова</h1>
                    <p>
                        Онлайн консультации, когда тебе трудно и когда легко.<br></br>
                        С заботой о тебе и твоём спокойствии, на пути к достижению удовольствия от жизни!
                    </p>
                </div>
                <div className="heroButtonContainer">
                    <HashLink className="buttonLink" smooth to="/#help">
                        <button className="button">
                            С чем я могу помочь
                            <div className="buttonBorder"></div>
                            <div className="buttonBorder"></div>
                            <div className="buttonBorder"></div>
                            <div className="buttonBorder"></div>
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
                        <div className="methodInfoContainer">
                            <h3>Клиент-центрированная терапия</h3>
                            <p>Направление созданное К. Роджерсом на основе принципов гуманистической психологии. Психолог в консультировании ведет себя не директивно, рефлексивно по отношению к клиенту.  Главный принцип это «здесь и теперь». Нет никаких правил, не указаний и четного алгоритма к действию. Клиент самостоятельно решает свой запрос, но опираясь на принятие, доверие  и опыт специалиста.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="methodInfoContainer">
                            <h3>Метод дерефлексии</h3>
                            <p>Снятие излишнего самоконтроля, чрезмерного самокопания. В некоторых случаях это не является продуктивным, а отнимает только силы и энергию. </p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="methodInfoContainer">
                            <h3>Метод пародоксальной интенции</h3>
                            <p>Подведение клиента к тому, что вызывает страхи  и большее стремление  избежать. Благодаря этому достигается ощущение свободы. Прежние тревожности и страхи недосказывают такого негативного воздействия, что позволяет двигаться перед. </p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="methodInfoContainer">
                            <h3>Арт-терапия</h3>
                            <p>Это направление в психотерапии, метод психологической коррекции, в основе которого лежит использование искусства и творчества. Своеобразное связующее звено между сознанием и подсознанием человека. Часто ее называют мостом, проложенным между разумом и душой.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="methodInfoContainer">
                            <h3>Позитивная психология</h3>
                            <p>Отрасль психологической практики, в центре которой находится позитивный потенциал человека. Этот подход нацелен  оптимизацию функционирования человека, поиск факторов, которые способствовали бы благополучному существованию и расцвету индивида.</p>
                        </div>
                    </div>
                </div>
                
            </section>
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
                    <Link className="buttonLink" to="/book-consultation">
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
                    <div className="afterInfoItem ">
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
                    <div className="aboutInfoContainer1">
                        <p>
                            Меня зовут Дарья Жеребцова. Я дипломированный психолог-консультант. 
                            Имею высшее психологическое образование по специальности «Психолог». Постоянно обучаюсь на разных курсах по повышению квалификации, развиваюсь и совершенствуюсь.<br></br><br></br>
                        </p>
                    </div>
                    <div className="aboutInfoContainer2">
                        <p>
                            Больше всего на свете меня поражает природа наших мыслей и чувств. Их глубина, разнообразие и развитие. В каждом из нас – огромный загадочный мир. И чем лучше мы его понимаем, тем приятней жить.
                        </p><br />
                        <p>
                            Моя миссия – помочь разобраться в самом важном человеке в Вашей жизни – себе!
                        </p>
                    </div>
                </div>
            </section>
            <section className="bookSection">
                <h1 className="sectionName">Запись</h1>
                <h2>Записаться на консультацию</h2>
                <BookConsultationForm />
            </section>
        </main>
    );
}