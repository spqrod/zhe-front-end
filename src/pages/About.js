import PersonIcon from '@mui/icons-material/Person';
import "../styles/about.css"

export default function About() {
    return (
        <main className='aboutPage'>
            <h1>Обо мне</h1>
            <section className='generalInfoSection'>
                <PersonIcon sx={{fontSize: "260px"}}/>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aspernatur dolor sit alias asperiores. Id perspiciatis saepe delectus blanditiis, voluptate consequuntur reprehenderit odio. Illo, eius iure fugiat eveniet, error modi laudantium distinctio, delectus veritatis quae earum accusamus ad rerum quia? Optio numquam enim, quia veritatis exercitationem sit ut alias harum itaque! Odit, aspernatur maxime quasi ab repudiandae quod ullam, sunt provident a veniam dicta beatae saepe obcaecati soluta iste consectetur nesciunt quidem ratione quam eum in? Modi soluta quam adipisci distinctio, maxime aut dolore labore! Illo excepturi sit in et reiciendis? Sed culpa possimus sunt harum, eos distinctio amet animi!
                </p>
            </section>
            <section className='EducationSection'>
                <h2>Образование</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium quaerat rerum maiores fugiat dolorem error deleniti reprehenderit magnam eveniet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit velit repudiandae, delectus tenetur id nostrum iste perspiciatis, sunt voluptas aliquid quibusdam nesciunt eligendi.</p>
            </section>
            <section className='personalLifeSection'>
                <h2>Личная жизнь</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aspernatur dolor sit alias asperiores. Id perspiciatis saepe delectus blanditiis, voluptate consequuntur reprehenderit odio. Illo, eius iure fugiat eveniet, error modi laudantium distinctio, delectus veritatis quae earum accusamus ad rerum quia? Optio numquam enim, quia veritatis exercitationem sit ut alias harum itaque! Odit, aspernatur maxime quasi ab repudiandae quod ullam, sunt provident a veniam dicta beatae saepe obcaecati soluta iste consectetur nesciunt quidem ratione quam eum in? Modi soluta quam adipisci distinctio, maxime aut dolore labore! Illo excepturi sit in et reiciendis? Sed culpa possimus sunt harum, eos distinctio amet animi!
                </p>
                <PersonIcon sx={{fontSize: "260px"}}/>
            </section>
        </main>
    );
}