
import './Week.css'

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
            <div className="tetris-project">
                <div className="projects project-one">
                    Project 1
                </div>
                <div className="projects project-two ">
                    Project 2
                </div>

                <div className="projects project-three ">
                    Project 3
                </div>
                <div className="projects  ">
                    Project 4
                </div>
                <div className="projects ">
                    Project 5
                </div>
            </div>
        </div>
    )
}
