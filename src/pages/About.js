import PersonIcon from '@mui/icons-material/Person';
import "../styles/about.css"

export default function About() {
    return (
        <main>
            <section>
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aspernatur dolor sit alias asperiores. Id perspiciatis saepe delectus blanditiis, voluptate consequuntur reprehenderit odio. Illo, eius iure fugiat eveniet, error modi laudantium distinctio, delectus veritatis quae earum accusamus ad rerum quia? Optio numquam enim, quia veritatis exercitationem sit ut alias harum itaque! Odit, aspernatur maxime quasi ab repudiandae quod ullam, sunt provident a veniam dicta beatae saepe obcaecati soluta iste consectetur nesciunt quidem ratione quam eum in? Modi soluta quam adipisci distinctio, maxime aut dolore labore! Illo excepturi sit in et reiciendis? Sed culpa possimus sunt harum, eos distinctio amet animi!
                </p>
            </section>
            <section>
                <h2>Meet The Team</h2>
                <div className="teamContainer">
                    <div className="teamMemberContainer">
                        <PersonIcon />
                        <p>George Orwell</p>
                        <p>General Director</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias illo laboriosam eaque obcaecati hic, necessitatibus delectus, cum eius doloremque voluptates provident. Officiis voluptatibus quam repellat officia vitae. Placeat, quas!
                        </p>
                    </div>
                    <div className="teamMemberContainer">
                        <PersonIcon />
                        <p>Stephen Hawking</p>
                        <p>Accountant</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias illo laboriosam eaque obcaecati hic, necessitatibus delectus, cum eius doloremque voluptates provident. Officiis voluptatibus quam repellat officia vitae. Placeat, quas!
                        </p>
                    </div>
                    <div className="teamMemberContainer">
                        <PersonIcon />
                        <p>Richard Dawkins</p>
                        <p>Marketer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias illo laboriosam eaque obcaecati hic, necessitatibus delectus, cum eius doloremque voluptates provident. Officiis voluptatibus quam repellat officia vitae. Placeat, quas!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}