import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../components/Project';
import SchoolImage from '../Assets/images/school.png';
import weatherAppImage from '../Assets/images/weather.png';
import ProjectOneImage from '../Assets/images/project.png';
import SchedulerImage from '../Assets/images/scheduler.png';
import QuizImage from '../Assets/images/quiz.png';
import PasswordGeneratorImage from '../Assets/images/pass_generator.png';

function Projects() {
    const projects = [
        {
            "title": "School System Portal",
            "description": "A Full-Stack App that serves as a portal to login students and professors to view class schedules",
            "key": "school-system",
            "imageSrc": SchoolImage,
            "repository": "https://github.com/izaack89/school-system",
            "deployed_app": "https://infinite-chamber-84516.herokuapp.com/"
        },
        {
            "title": "Weather App",
            "description": "JS App that uses third-party API's to get Weather information from the input city",
            "key": "weather-app",
            "imageSrc": weatherAppImage,
            "repository": "https://github.com/NAvena9/06-Weather-Dashboard",
            "deployed_app": "https://navena9.github.io/06-Weather-Dashboard/"
        },
        {
            "title": "MyBookCloud",
            "description": "A Front-End app to retrieve books by Author and Title names",
            "key": "myBookCloud-app",
            "imageSrc": ProjectOneImage,
            "repository": "https://github.com/NAvena9/project1",
            "deployed_app": "https://navena9.github.io/project1/"
        },
        {
            "title": "Scheduler App",
            "description": "Application that allows the user to schedule tasks for a day",
            "key": "scheduler-app",
            "imageSrc": SchedulerImage,
            "repository": "https://github.com/NAvena9/05-Work-Day-Scheduler",
            "deployed_app": "https://navena9.github.io/05-Work-Day-Scheduler/"
        },
        {
            "title": "JS Timed-Quiz",
            "description": "A frontend JS app consisting on a pop culture timed quiz",
            "key": "quiz-app",
            "imageSrc": QuizImage,
            "repository": "https://github.com/NAvena9/04-APIs-Timed-Quiz",
            "deployed_app": "https://navena9.github.io/04-APIs-Timed-Quiz/"
        },
        {
            "title": "Password Generator",
            "description": "A frontend vanilla JS Code that allows the user to create secure passwords",
            "key": "password-app",
            "imageSrc": PasswordGeneratorImage,
            "repository": "https://github.com/NAvena9/03-Password-Generator",
            "deployed_app": "https://navena9.github.io/03-Password-Generator/"
        }
    ]
    return (
        <div>
            <Jumbotron fluid className="p-5 mb-0 shadow">
                <Container className="text-center">
                    <div className="p-md-5">
                        <h1>Portfolio</h1>
                    </div>
                </Container>
            </Jumbotron>

            <Container className="p-3 ">
                <Row>
                    {projects.map((project) => {
                        return (
                            <Col s={12} lg={6} key={project.key}>
                                <Project project={project} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Projects;