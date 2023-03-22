import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import "../styles/blog.css";

export default function ThingsToDoInLusaka() {
    return (
        <main className="blogPage">
            <section>
                <h1>Things To Do In Lusaka Section</h1>
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
            </section>
        </main>
    );
}

// https://spqrod.github.io/the-sunningdale-house/