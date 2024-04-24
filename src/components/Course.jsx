import { useParams } from "react-router-dom";

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

const Course = () => {

    const { id } = useParams();

  return (
      <div>
            {courseList.map(course => {
                if (course.id == id) {
                    return (
                        <div key={course.id}>
                            <h1>{course.title}</h1>
                            <p>{course.description}</p>
                            <p>Price: {course.price}</p>
                            <a href="#" className="btn btn-primary">Enroll</a>
                        </div>
                    )
                }
            })}
    </div>
  )
}

export default Course