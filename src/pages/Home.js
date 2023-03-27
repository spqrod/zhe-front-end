import "../styles/home.css";
import Button from "@mui/material/Button"
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PersonIcon from '@mui/icons-material/Person';

export default function Home() {
    return (
        <main className="homePage">
            <section className="heroSection">
                <h1 className="sectionName">Главная</h1>
                <div className="roomsInfoContainer">
                    <h1>Психолог Дарья Жеребцова</h1>
                    <h2>Онлайн консультации для здоровья по последним методикам</h2>
                    <p>Cо мной вы можете быть СОБОЙ
                    Не важно с каким запросом  вы пришли, важны ВЫ</p>
                </div>
            </section>
            <section className="aboutSection">
            <h1 className="sectionName">Обо мне</h1>
                <p>
                    Меня зовут Дарья! Дипломированный психолог-консультант. 
                    Имею высшее психологическое образование по специальности «Психолог». Участвовала во многих тренингах и семинарах. Проходила дополнительные обучения в клиент-центрированном подходе. Постоянно обучаюсь на различных курсах по повышению квалификации, развиваюсь и совершенствуюсь. 
                </p>
                <p>
                    В нашем быстро меняющимся мире очень важно заботиться о себе и о своём ментальном здоровье. Узнать и понять самого важного человека в вашей жизни - себя! Время от времени нам всем нужна поддержка и тот самый искренний диалог. 
                </p>
                <p>
                    Я как раз помогаю ответить на эти вопросы.
                </p>
            </section>
            <section className="problemsSection">
                <h1 className="sectionName">Проблемы</h1>
                <h2>С чем я могу помочь</h2>
                <div className="problemsContainer">
                    <div className="problem">Проблемы с самооценкой</div>
                    <div className="problem">Тревожные и депрессивные состояния</div>
                    <div className="problem">Перфекционизм</div>
                    <div className="problem">Недовольство собой и своими достижениями</div>
                    <div className="problem">Раздражительность</div>
                    <div className="problem">Негативные чувства: злость, вина, стыд</div>
                    <div className="problem">Сложности в построении коммуникации с окружающими</div>
                    <div className="problem">Трудности в построение отношений</div>
                    <div className="problem">Потеря близкого человека</div>
                </div>
            </section>
            <section className="methodsSection">
                <h1 className="sectionName">Решения</h1>
                <h2>Методы работы</h2>
                <div className="methodsContainer">
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Клиент-центрированная терапия</h3>
                            <p>Направление созданное К. Роджерсом на основе принципов гуманистической психологии. Психолог в консультировании ведет себя не директивно, рефлексивно по отношению к клиенту.  Главный принцип это «здесь и теперь». Нет никаких правил, не указаний и четного алгоритма к действию. Клиент самостоятельно решает свой запрос, но опираясь на принятие, доверие  и опыт специалиста.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Метод дерефлексии</h3>
                            <p>Снятие излишнего самоконтроля, чрезмерного самокопания. В некоторых случаях это не является продуктивным, а отнимает только силы и энергию. </p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Метод пародоксальной интенции</h3>
                            <p>Подведение клиента к тому, что вызывает страхи  и большее стремление  избежать. Благодаря этому достигается ощущение свободы. Прежние тревожности и страхи недосказывают такого негативного воздействия, что позволяет двигаться перед. </p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Арт-терапия</h3>
                            <p>Это направление в психотерапии, метод психологической коррекции, в основе которого лежит использование искусства и творчества. Своеобразное связующее звено между сознанием и подсознанием человека. Часто ее называют мостом, проложенным между разумом и душой.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
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
                        <PersonIcon sx={{fontSize: "100px"}} />
                        <div className="reviewInfoContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque quas facere officiis quasi, assumenda doloremque, laborum in.</p><br></br>
                            <p>Arthur Conan Doyle</p>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <PersonIcon sx={{fontSize: "100px"}} />
                        <div className="reviewInfoContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque quas facere officiis quasi, assumenda doloremque, laborum in.</p><br></br>
                            <p>Winston Churchill</p>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <PersonIcon sx={{fontSize: "100px"}} />
                        <div className="reviewInfoContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque quas facere officiis quasi, assumenda doloremque, laborum in.</p><br></br>
                            <p>Mark Manson</p>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <PersonIcon sx={{fontSize: "100px"}} />
                        <div className="reviewInfoContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque quas facere officiis quasi, assumenda doloremque, laborum in.</p><br></br>
                            <p>William Shirer</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="formatSection">
                <h1 className="sectionName">Формат</h1>
                <h2>Формат консультаций</h2>
                <div className="formatInfoContainer">
                    <PhotoOutlinedIcon className="formatIcon" />
                    <p>Я провожу консультации как онлайн – в любом удобном мессенджере.</p>
                    <p>Так и оффлайн – при личной встрече.</p>
                    <p>Длительность консультации от 40 до 80 минут.</p>
                </div>
            </section>
            <section className="priceSection">
                <h1 className="sectionName">Цены</h1>
                <h2>Стоимость услуг</h2>
                <p>Цена 1200 руб за 40 мин</p>
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
                <Button variant="contained" size="large" href="/things-to-do-in-lusaka"
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black"
                    }}>Смотреть все заметки
                </Button>
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