import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import "../styles/blog.css";

export default function Blog() {
    return (
        <main className="blogPage">
            <section>
                <h1>Психологические заметки</h1>
                    <div className="blogPostsContainer">
                        <div className="blogPostContainer">
                            <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                            <p className="blogPostName">Психологическая заметка</p>
                        </div>
                        <div className="blogPostContainer">
                            <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                            <p className="blogPostName">Психологическая заметка</p>
                        </div>
                        <div className="blogPostContainer">
                            <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                            <p className="blogPostName">Психологическая заметка</p>
                        </div>
                        <div className="blogPostContainer">
                            <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                            <p className="blogPostName">Психологическая заметка</p>
                        </div>
                    </div>
            </section>
        </main>
    );
}