import PersonIcon from '@mui/icons-material/Person';
import "../styles/about.css"

export default function About() {
    return (
        <main className='aboutPage'>
            <section className='generalInfoSection'>
                <h1>Обо мне</h1>
                <div className='infoContainer generalInfoContainer'>
                    <PersonIcon sx={{fontSize: "260px"}}/>
                    <p>
                        Меня зовут Дарья! Дипломированный психолог-консультант. Имею высшее психологическое образование по специальности «Психолог». Участвовала во многих тренингах и семинарах. Проходила дополнительные обучения в клиент-центрированном подходе. Постоянно обучаюсь на различных курсах по повышению квалификации, развиваюсь и совершенствуюсь.
                    </p>
                </div>
            </section>
            <section>
                <div className='infoContainer'>
                    <p>
                        Время от времени нам всем нужна поддержка и тот самый искренний диалог. В нашем быстро меняющимся мире очень важно заботиться о себе и о своём ментальном здоровье. Узнать и понять самого важного человека в вашей жизни - себя! Наши консультации про удовольствие и спокойствие, а не только про достигаторство и постоянное стремление к реализации своего внутреннего потенциала. Наши с вами встречи - это точка входа в ощущение удовольствия от себя и от своей жизни. Вас ждет открытый, искренний диалог, в котором вы можете быть честным с самим собой. 
                    </p>
                </div>
            </section>
            <section className='EducationSection'>
                <div className='infoContainer educationContainer'>
                    <h2>Образование</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium quaerat rerum maiores fugiat dolorem error deleniti reprehenderit magnam eveniet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit velit repudiandae, delectus tenetur id nostrum iste perspiciatis, sunt voluptas aliquid quibusdam nesciunt eligendi.</p>
                </div>
            </section>
            <section className='personalLifeSection'>
                <div className='infoContainer personalLifeContainer'>    
                    <h2>Личная жизнь</h2>
                    <p>
                        Душа  и наше тело едины, поэтому я люблю активный образ жизни и спорт. Он делает меня более сильной и дисциплинированной. Дает возможность высвободить свои эмоции и переживания продуктивным путем. <br /><br />

                        Также природа является моим вдохновением, поэтому походы являются частью моей жизни. В природе, на мой взгляд, можно найти ответы на все внутренние вопросы. Это прекрасный ментальный отдых и перезагрузка.<br /><br />

                        Книги и фильмы это еще одно мое большое увлечение. Правильно подобранная литература или кино, для меня являются террапевтичными. Мне нравится  возможность опредметить свои переживания, эмоции и прожить их с главным героем вместе. <br /><br />

                        Конечно же я очень люблю путешествовать, а кто не любит? <br /><br />

                        Увиденное новое всегда меняет меня, расширяет собственные границы. Наполняет и вдохновляет. После путешествий в голову приходят самые важные жизненные инсайты
                    </p>
                    <PersonIcon sx={{fontSize: "260px"}}/>
                </div>
            </section>
        </main>
    );
}