
import './Week.css'
import { Projects } from './Projects';

export const Week = () => {
    return (
        <div className="card-week">
            {/* <div className="days"> */}
            <div className="day monday">Monday</div>
            <div className="day tuesday">Tuesday</div>
            <div className="day wednesday">Wednesday</div>
            <div className="day thursday">Thursday</div>
            <div className="day friday">Friday</div>
            <div className="day saturday">Saturday</div>
                <div className="day sunday">Sunday</div> 
            {/* </div>  */}
            <div className="users">
                <div className="user user-one">
                    Camilo Andre Rodriquez
                </div>
                <div className="user user-two">
                    Francis Leonor
                </div>
                <div className="user">
                    Francisco Jose Bohorquez
                </div>
            </div>
            <Projects></Projects>
        </div>
    )
}
