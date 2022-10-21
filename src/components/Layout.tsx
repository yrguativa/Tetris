import { Title } from "./Title"
import { Week } from "./Week";

import './Layout.css';

export const Layout = () => {
    return (
        <div >
            <Title></Title>
            <div className="container">
                Layout
                <Week></Week>
            </div>
        </div>
    )
}