import "../styles/home.css";
import Button from "@mui/material/Button"
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PersonIcon from '@mui/icons-material/Person';

export default function Home() {
    return (
        <main className="homePage">
            <section className="heroSection">
                <h1>Hero Section</h1>
                <div className="roomsInfoContainer">
                    <h1>Welcome To The Sunningdale House</h1>
                    <h2>A place of peaceful rest and exquisite cousine in the heart of Lusaka</h2>
                    <p>Beautiful photos in the background</p>
                </div>
            </section>
            <section className="restaurantSection">
                <h2>Restaurant Section</h2>
                <div className="restaurantPhotoContainer">
                    <PhotoOutlinedIcon sx={{fontSize: "300px"}} />
                </div>
                <div className="restaurantInfoContainer">
                    <h2>The Sunningdale House Restaurant</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint ut omnis voluptas beatae voluptatibus laboriosam, sed consequuntur. In, perferendis?</p>
                    <Button variant="contained" size="large" href="/restaurant"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>See Our Menu
                    </Button>
                </div>
            </section>
            <section className="roomsSection">
                <h2>Rooms Section</h2>
                <div className="roomsInfoContainer">
                    <h2>The Sunningdale House Hotel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint ut omnis voluptas beatae voluptatibus laboriosam, sed consequuntur. In, perferendis?</p>
                    <Button variant="contained" size="large" href="/rooms"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>See Our Rooms
                    </Button>
                </div>
                <div className="roomsPhotoContainer">
                    <PhotoOutlinedIcon sx={{fontSize: "300px"}} />
                </div>
            </section>
            <section className="reviewsSection">
                <h2>What Our Guests Say Section</h2>
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
            <section className="blogSection">
                <h2>Things To Do In Lusaka Section</h2>
                <div className="blogPostsContainer">
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                        <p className="blogPostName">Top 10 Places To Dine In Lusaka</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                        <p className="blogPostName">Top 10 Places To Stay In Lusaka</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                        <p className="blogPostName">Top Shopping Places In Lusaka</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                        <p className="blogPostName">Top 10 Safaris In Lusaka</p>
                    </div>
                </div>
                <Button variant="contained" size="large" href="/things-to-do-in-lusaka"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>Read More
                    </Button>
            </section>
            
        </main>
    );
}