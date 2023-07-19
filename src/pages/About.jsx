import image from '../images/image.jpeg'
import './About.css'


const About = () => {

    return (
        
        <div class="bckgrnd">
            <h1 class="About">About Me</h1>
            <img class="Image" src={image}></img>
            <p class="paragraph">My name is Joel Estrada and I am Web Devolper in the making. So far I am experienced in Node, Javascript, Express, Mysql, and MongoDB. I am working on completing my bootcamp at UCLA and once I do so I am gonna wor towards my career in Web Development. I am 21 as of right now and hope to get a job within a couple months after this program. </p>
        </div>
    )
};

export default About;