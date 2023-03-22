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
                    <p>Портрет на фоне</p>
                </div>
            </section>
            <section className="problemsSection">
                <h1 className="sectionName">Проблемы</h1>
                <h2>С чем я могу помочь</h2>
                <div className="problemsContainer">
                    <div className="problem">Проблема 1</div>
                    <div className="problem">Проблема 2</div>
                    <div className="problem">Проблема 3</div>
                    <div className="problem">Проблема 4</div>
                    <div className="problem">Проблема 5</div>
                    <div className="problem">Проблема 6</div>
                </div>
            </section>
            <section className="solutionsSection">
                <h1 className="sectionName">Решения</h1>
                <h2>Мои методики</h2>
                <div className="methodsContainer">
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Метод 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Метод 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Метод 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Метод 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                        </div>
                    </div>
                    <div className="methodContainer">
                        <PhotoOutlinedIcon className="methodIcon" />
                        <div className="methodInfoContainer">
                            <h3>Метод 5</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint commodi architecto incidunt mollitia nemo eos harum rem quae aspernatur.</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="educationSection">
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
                
            </section>
            <section className="formatSection">
                <h1 className="sectionName">Формат работы</h1>
                <h2>Формат консультаций</h2>
                <div className="formatInfoContainer">
                    <PhotoOutlinedIcon className="formatIcon" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, expedita laudantium. Fugit similique commodi cumque quia sunt veniam eius fugiat distinctio corporis! Ipsa atque omnis optio provident ex praesentium eius?
                    </p><br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, facere. Ab, odit ex. Ducimus dolorum incidunt totam eligendi nesciunt dolore amet, distinctio repellendus aperiam harum ex aut sed iure tenetur!</p>
                </div>
            </section>
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
            <section className="priceSection">
                <h1 className="sectionName">Цены</h1>
                <h2>Стоимость услуг</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos ea rerum sint nobis deleniti quam impedit, aut reiciendis voluptatem quo! Quibusdam quos excepturi cupiditate architecto. A modi ex cumque.</p>
                
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