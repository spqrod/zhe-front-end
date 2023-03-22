import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BedIcon from '@mui/icons-material/Bed';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Button from "@mui/material/Button";
import "../styles/rooms.css";

export default function Rooms() {
    return (
        <main className="roomsPage">
            <section className="heroSection">
                <h1>Hero Section</h1>
                <div className="heroInfoContainer">
                    <h1>Five Beautiful Rooms For Your Stay In Lusaka</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A enim labore, corporis quisquam exercitationem quae hic vitae recusandae ipsum voluptas.</p>
                    <Button variant="contained" size="large"
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black"
                    }}>Choose Dates</Button>
                </div>
            </section>
            <section className="roomsFeaturesSection">
                <h2>Rooms Features Section</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quaerat ducimus odit laborum quod explicabo delectus a praesentium qui ratione! Incidunt sed esse accusamus ullam officia et neque velit voluptates.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias modi rerum explicabo quae non, ex rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ad! Quas enim, ad provident blanditiis nemo dolor velit molestiae perferendis vero sapiente quibusdam!
                </p>
                <ul>
                    <li>Feature1</li>
                    <li>Feature2</li>
                    <li>Feature3</li>
                    <li>Feature4</li>
                    <li>Feature5</li>
                </ul>
            </section>
            <section className="roomsSection">
                <h2>Rooms Section</h2>
                <div className="roomContainer">
                    <div className="roomPhotoContainer">
                        <InsertPhotoOutlinedIcon sx={{fontSize: "300px"}}/>
                    </div>
                    <div className="roomInfoContainer">
                        <h3>Room Type 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto sapiente sed vero voluptatibus quidem aut, officia magni impedit ipsa explicabo beatae exercitationem vitae, dicta vel eaque, eius recusandae libero sunt! Praesentium, doloremque.
                        </p>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="2 Persons" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <BedIcon />
                                </ListItemIcon>
                                <ListItemText primary="1 Queen Bed" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SquareFootIcon />
                                </ListItemIcon>
                                <ListItemText primary="30 Sq. M." />
                            </ListItem>
                        </List>
                    </div>
                </div>
                <div className="roomContainer">
                    <div className="roomPhotoContainer">
                        <InsertPhotoOutlinedIcon sx={{fontSize: "300px"}}/>
                    </div>
                    <div className="roomInfoContainer">
                        <h3>Room Type 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto sapiente sed vero voluptatibus quidem aut, officia magni impedit ipsa explicabo beatae exercitationem vitae, dicta vel eaque, eius recusandae libero sunt! Praesentium, doloremque.
                        </p>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="2 Persons" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <BedIcon />
                                </ListItemIcon>
                                <ListItemText primary="1 Queen Bed" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SquareFootIcon />
                                </ListItemIcon>
                                <ListItemText primary="30 Sq. M." />
                            </ListItem>
                        </List>
                    </div>
                </div>
                <div className="roomContainer">
                    <div className="roomPhotoContainer">
                        <InsertPhotoOutlinedIcon sx={{fontSize: "300px"}}/>
                    </div>
                    <div className="roomInfoContainer">
                        <h3>Room Type 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto sapiente sed vero voluptatibus quidem aut, officia magni impedit ipsa explicabo beatae exercitationem vitae, dicta vel eaque, eius recusandae libero sunt! Praesentium, doloremque.
                        </p>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="2 Persons" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <BedIcon />
                                </ListItemIcon>
                                <ListItemText primary="1 Queen Bed" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SquareFootIcon />
                                </ListItemIcon>
                                <ListItemText primary="30 Sq. M." />
                            </ListItem>
                        </List>
                    </div>
                </div>
            </section>
            <section className="reserveSection">
                <h1>Reserve Section</h1>
                <Button variant="contained" size="large"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>Reserve
                </Button>
            </section>
        </main>
    );
}