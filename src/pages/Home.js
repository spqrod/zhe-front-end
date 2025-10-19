import "../styles/home.css";
import ConsultationBookingProcess from "../components/ConsultationBookingProcess"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import image1 from "../images/3.JPG";
import image2 from "../images/4.jpg";
import { useEffect, useState, useRef } from "react";
import review1 from "../images/review-1.png"
import review2 from "../images/review-2.png"
import review3 from "../images/review-3.png"
import review4 from "../images/review-4.png"
import BookConsultationForm from "../components/BookConsultationForm";
 
export default function Home({consultationPrice, consultationLength, whatsAppLink}) {
    const [counts, setCounts] = useState({
        hours: 500,
        years: 3,
        successfulConsultations: 95
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

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
    });

    useEffect(() => {
        const currentRef = statsRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.5 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 1000;
        const steps = 100;
        const stepDuration = duration / steps;

        const targets = {
            hours: 500,
            years: 3,
            successfulConsultations: 95
        };

        const starts = {
            hours: Math.floor(targets.hours * 0.9),
            years: Math.floor(targets.years * 0.9),
            successfulConsultations: Math.floor(targets.successfulConsultations * 0.9)
        };

        let currentStep = 0;

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const interval = setInterval(() => {
            currentStep++;
            const progress = easeOutCubic(currentStep / steps);

            setCounts({
                hours: Math.floor(starts.hours + (targets.hours - starts.hours) * progress),
                years: Math.floor(starts.years + (targets.years - starts.years) * progress),
                successfulConsultations: Math.floor(starts.successfulConsultations + (targets.successfulConsultations - starts.successfulConsultations) * progress)
            });

            if (currentStep >= steps) {
                setCounts(targets);
                clearInterval(interval);
            }
        }, stepDuration);
    };

    return (
        <main className="homePage">
            <section className="heroSection">
                <div className="heroInfoContainer">
                    <h1>Психолог Дарья Жеребцова</h1>
                    <p>
                        Я специалист, который заботится о вашем  благополучии.
                        Моя главная цель - улучшить качество жизни, достичь внутренней и внешней гармонии, а также в поддержании баланса между ментальным, эмоциональным и физическим.
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

            <section className="aboutSection">
                <h2>Пару слов обо мне</h2>
                <div className="aboutContainer">
                    <div className="aboutImageContainer">
                        <img className="aboutImage" src={image2} alt="" />
                        <div className="aboutImageOutline"></div>
                    </div>
                    <div className="aboutInfoContainer1">
                        <p>
                            Меня зовут Дарья Жеребцова, я психолог-консультант. Я верю, что каждый рождается цельным, но жизнь — ожидания, опыт, боль, страх «неправильности» — отрывает нас от себя. Моя работа — помочь восстановить эту связь. Опираюсь на научную психологию и философию осознанности (wellness).<br></br><br></br>

                            Психология для меня — не только о травмах, но и о возврате радости жизни, тела, чувств, удовольствия быть собой. Не верю в мгновенные изменения, но верю в процесс: постепенные изменения для устойчивости, ясности и внутреннего стержня. Интересно, как мы устроены: как прошлое эхом в реакциях, почему непрожитые эмоции живут внутри, и как понимание рождает свободу.<br></br><br></br>

                            В консультациях создаю пространство для аутентичности — без оценок, спешки, масок. Здесь начинается истинный контакт с собой.<br></br><br></br>
                        </p>
                    </div>
                    <div className="aboutInfoContainer2">
 
                    </div>
                </div>
            </section>

            <section className="statsSection" ref={statsRef}>
                <div className="statsContainer">
                    <div className="statItem">
                        <h3>{counts.hours}+</h3>
                        <p>часов консультаций</p>
                    </div>
                    <div className="statItem">
                        <h3>{counts.years}+</h3>
                        <p>года работы</p>
                    </div>
                    <div className="statItem">
                        <h3>{counts.successfulConsultations}%</h3>
                        <p>успешных консультаций</p>
                    </div>
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
                            Трудности в построении отношений
                        </div>
                    </div>
                    <div className="problemContainer loss">
                        <div className="problemContentContainer">
                            Потеря близкого человека
                        </div>
                    </div>
                </div>
            </section>

            <section className="suitableForSection">
                <h1 className="sectionName">Для кого</h1>
                <h2>Кому подходит</h2>
                <div className="suitableForContainer">
                    <div className="suitableForItem">
                        <li>Тем, кто чувствует хроническую усталость или потерю интереса к жизни, но не имеет клинических диагнозов.</li>
                    </div>
                    <div className="suitableForItem">
                        <li>Людям, стремящимся к личностному росту и профилактике проблем.</li>
                    </div>
                    <div className="suitableForItem">
                        <li>Людям с высоким уровнем стресса.</li>
                    </div>
                    <div className="suitableForItem">
                        <li>Тем, кто хочет улучшить физическое здоровье через психологическую работу (например, мотивация к спорту).</li>
                    </div>
                    <div className="suitableForItem">
                        <li>Тем, кто хочет выстроить долгие и эмоционально близкие отношения.</li>
                    </div>
                    <div className="suitableForItem">
                        <li>Всем, кто ищет гармонию и хочет «жить лучше», но не знает, с чего начать.</li>
                    </div>
                </div>
            </section>

            <section className="methodsSection">
                <h2>Подход</h2>
                <div className="methodsContainer">
                    <div className="methodContainer">
                        <div className="methodInfoContainer">
                            <p>Опираясь на классическую психологическую базу и человеко-центрированный подход Роджерса, я осознала, что мои интересы и практика давно вышли за эти рамки.
                            </p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="methodInfoContainer">
                            <p>Я исследую целостную парадигму – интеграцию ментального, эмоционального и физического благополучия.
                            Это не просто консультации, а терапия. Путь к устойчивому развитию личности.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <div className="methodInfoContainer">
                            <p>
                                Основа моего подхода - диалог!
                                Искренний, эмоционально близкий, безопасный и непредвзятый.
                                Я создаю уникально теплую атмосферу, которая способствует раскрытию личностного потенциала – мыслей, эмоций, чувств и поведения.</p>
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

            <section className="afterSection">
                <h1 className="sectionName">После консультаций</h1>
                <h2>Что будет после консультаций?</h2>
                <div className="afterInfoContainer">
                    <div className="afterInfoItem">
                        <p>
                            <strong>Осознание</strong>. Ты начнёшь лучше понимать, что с тобой происходит — где твои истинные чувства, а где автоматические реакции или старые сценарии.
                            Появится ясность и ощущение, что внутри стало немного больше воздуха.
                        </p>
                    </div>
                    <div className="afterInfoItem ">
                        <p>
                            <strong>Опора</strong>. Через осмысление и проживание эмоций формируется внутренняя устойчивость.
                            Ты перестаёшь искать подтверждение своей ценности снаружи — и начинаешь ощущать её изнутри.
                        </p>
                    </div>
                    <div className="afterInfoItem">
                        <p>
                            <strong>Изменение</strong>. Мир вокруг остаётся тем же,
                            но твои реакции, решения и границы становятся другими — спокойными, зрелыми и осознанными.
                            Это не волшебство, а естественный результат внутренней работы и честного диалога с собой.
                        </p>
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



            <section className="bookSection">
                <h1 className="sectionName">Запись</h1>
                <h2>Записаться на консультацию</h2>
                <BookConsultationForm />
            </section>
        </main>
    );
}