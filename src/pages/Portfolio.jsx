import './Portfolio.css'
import sunset from '../images/sunset.png'
import workout from '../images/workout.png'
import workday from '../images/schedule.html.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const Portfolio = () => {
    return (
      <>
        <div class="backgroundcolor">
            <div class="align">
                <h1>Portfolio</h1>
            </div>
            <div class="container">
                <img class="sunset" src={sunset}></img>
            <div class="mood">
                <a id="work" href="https://madilyncooper.github.io/mood-ring/">
                    <nav class="move" id="project">
                        <p class="moodring">Mood Ring</p>
                    </nav>
                </a>
            </div>

                    <img class="shapeshift" src={workout}></img>
                    <div class="lift">
                <a id="work" href="https://shape-shift.herokuapp.com/">
                    <nav id="project">
                        <p class="work">Shape-Shift</p>
                    </nav>
                </a>
                </div>

                <img class="workday" src={workday}></img>
                    <div class="workschedule">
                <a id="work" href="https://joelestrada16.github.io/WorkDaySchedule/">
                    <nav id="project">
                        <p class="wo">WorkDay</p>
                    </nav>
                </a>

                </div>
            </div>
        </div>
            
        </>
    )
};

export default Portfolio;