import { Link } from "react-router-dom"

const courseList = [
    {
        id: 1,
        title: "React",
        description: "React is a JavaScript library for building user interfaces.",
        price: 100
    },
    {
        id: 2,
        title: "Angular",
        description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
        price: 150
    },
    {
        id: 3,
        title: "Vue",
        description: "Vue is a progressive framework for building user interfaces.",
        price: 200
    }
]

const Courses = () => {
  return (
      <div>
            <h1>Courses</h1>
            <div className="row">
                {courseList.map(course => (
                    <div className="col-md-4" key={course.id}>
                        
                            <div className="card">
                            <div className="card-body">
                                <Link to={`/dashboard/courses/${course.id}`}>
                                    <h5 className="card-title">{course.title}</h5>
                                </Link>
                                <p className="card-text">{course.description}</p>
                                <p className="card-text">Price: {course.price}</p>
                                <a href="#" className="btn btn-primary">Enroll</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Courses