import PersonIcon from '@mui/icons-material/Person';
import "../styles/about.css"
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";

export default function About() {
    return (
        <main className='aboutPage'>
            <section className='generalInfoSection'>
                <h1>Обо мне</h1>
                <div className='infoContainer generalInfoContainer'>
                    <div className="generalInfoTextContainer">
                        <p>
                            Меня зовут Дарья Жеребцова. Я дипломированный психолог-консультант. Имею высшее психологическое образование по специальности «Психолог». Постоянно обучаюсь на разных курсах по повышению квалификации, развиваюсь и совершенствуюсь.
                        </p> <br />
                        <p>
                            Больше всего на свете меня поражает природа наших мыслей и чувств. Их глубина, разнообразие и развитие. В каждом из нас – огромный загадочный мир. И чем лучше мы его понимаем, тем приятней жить.
                        </p> <br />
                        <p>
                            Моя миссия – помочь разобраться в самом важном человеке в Вашей жизни – себе!
                        </p>
                    </div>
                    <div className='generalInfoImageContainer'>
                        <img className='generalInfoImage' src={image2} alt="" />
                    </div>
                </div>
            </section>
            <section className='personalLifeSection'>
                <div className='infoContainer personalLifeContainer'>    
                    <div className='personalInfoImageContainer'>
                        <img className='personalInfoImage' src={image1} alt="" />
                    </div>
                    <div className="personalInfoTextContainer">
                        <p>
                            Душа  и наше тело едины, поэтому я люблю активный образ жизни и спорт. Он делает меня более сильной и дисциплинированной. Дает возможность высвободить свои эмоции и переживания продуктивным путем. <br /><br />

                            Также, природа является моим вдохновением, поэтому походы являются частью моей жизни. В природе, на мой взгляд, можно найти ответы на все внутренние вопросы. Это прекрасный ментальный отдых и перезагрузка.<br /><br />

                            Книги и фильмы это еще одно мое большое увлечение. Правильно подобранная литература или кино, для меня являются терапевтичными. Мне нравится  возможность опредметить свои переживания, эмоции и прожить их с главным героем вместе. <br /><br />

                            Конечно же, я очень люблю путешествовать, а кто не любит? <br /><br />

                            Увиденное новое всегда меняет меня, расширяет собственные границы. Наполняет и вдохновляет. После путешествий в голову приходят самые важные жизненные инсайты.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}