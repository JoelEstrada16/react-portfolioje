import snapchat from '../images/snapchat.png'
import Insta from '../images/Insta.png'
import './Footer.css'

const footer = ({ setCurrentPage, allPages }) => {
    return (
        <>

<div class="backcolor">
    <footer class="footersize">
        <a href="https://www.instagram.com/joeljazzhands/"><img class="snapchat" src={snapchat} ></img></a>
        <a href="https://www.instagram.com/joeljazzhands/"><img class="Insta"src={Insta}></img></a>
    </footer>
</div>
        </>
    )
};

export default footer;