import "../styles/restaurant.css";
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Button from '@mui/material/Button';

export default function Restaurant() {
    return (
        <main className="restaurantPage">
            <section className="heroSection">
                <h1>Hero Section</h1>
                <div className="heroInfoContainer">
                    <h2>Table For Two?</h2>
                    <div className="heroButtonsContainer">
                        <Button variant="contained" size="large"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>Reserve Table
                        </Button>
                        <Button variant="contained" size="large"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>
                                See Menu
                        </Button>
                    </div>
                </div>
                <p>Beautiful photo in the background</p>
            </section>
            <section className="chefSection">
                <h2>Chef Section</h2>
                <div className="chefContainer">
                    <PersonOutlinedIcon className="chefPhoto" sx={{fontSize: "300px"}}/>
                    <div className="chefInfoContainer">
                        <h3 className="chefName">Daniel Pink</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestiae, natus sint sapiente excepturi dolorum est? Similique voluptatibus quisquam inventore laborum expedita. Voluptatem, maiores? Cupiditate, debitis id? Aliquid, soluta optio.</p>
                    </div>
                </div>
            </section>
            <section className="menuSection">
                <h2>Menu Section</h2>
                <p>Just a text and photo description of what we serve?</p>
                <p>Or a downloadable .pdf?</p>
                <p>Or a dynamic menu like this one: <a href='https://www.jupiterrestaurant.nyc/menus/#dinner'>https://www.jupiterrestaurant.nyc/menus/#dinner</a></p>
            </section>
            <section className="photosSection">
                <h2>Photos Section</h2>
                <div className="photosContainer">
                    <PhotoOutlinedIcon sx={{fontSize: "200px"}}/>
                    <PhotoOutlinedIcon sx={{fontSize: "200px"}}/>
                    <PhotoOutlinedIcon sx={{fontSize: "200px"}}/>
                </div>
            </section>
            <section className="hoursAndLocationSection">
                <h2>Hours & Location Section</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa aperiam soluta iure nostrum exercitationem animi, voluptate accusantium debitis deleniti laudantium voluptates eos perferendis velit pariatur totam odit impedit, nemo consequatur!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tempora!</p>
            </section>
            <section className="reservationSection">
                <h2>Reservations Section</h2>
                <h3>
                    DAYTIME
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at qui assumenda. Et hic, molestias tempora ea soluta quo quasi ad obcaecati cumque laborum voluptates dolores eligendi aperiam. Minus repellendus animi, alias placeat reprehenderit veniam explicabo eveniet. Doloribus reprehenderit architecto magni vel. Id iste numquam mollitia vel eius quidem dignissimos.
                </p>
                <h3>
                    DINNER
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae voluptates nostrum repellendus. Debitis excepturi aliquid numquam neque quidem dolore nam quo veritatis ipsam voluptatum, minus sunt, maiores natus praesentium id exercitationem omnis nihil. Ducimus quae debitis id assumenda tenetur facere quas laboriosam corporis explicabo totam quisquam, quia ad mollitia sint odio ea autem exercitationem? Cum perferendis delectus vitae ipsum error minus odio vel dignissimos, debitis, odit deserunt sint exercitationem corporis officia architecto porro reprehenderit provident labore. Sequi, explicabo veritatis. Quis repellendus qui, ullam corporis autem dolorem repudiandae accusamus itaque iusto, praesentium non ab iste magni enim sit debitis provident?
                </p>                    
                <h3>
                    GROUP BOOKINGS
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque quos quisquam laboriosam. Eius, minus voluptatem? Mollitia sequi cumque odio repudiandae error facilis ipsum quidem veniam commodi molestiae sapiente repellendus ipsa, assumenda sint eligendi fuga deleniti suscipit provident nam porro doloremque ratione velit? Adipisci neque sapiente iste, non dolorum dignissimos.
                </p>
                <h3>
                    WEDDINGS
                </h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dicta et repudiandae, modi culpa explicabo, facere voluptatibus blanditiis ipsa, recusandae iure quis. Voluptate asperiores facere sunt voluptatem, reiciendis animi quo.
                </p>
            </section>
            <section className="reserveTableSection">
                <h2>Reserve a Table Section</h2>
                <Button variant="contained" size="large"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>Reserve Table
                </Button>
            </section>
            <section className="eventsSection">
                <h2>Events Section</h2>
                <p>Are we going to have events?</p>
            </section>
        </main>
    );
}