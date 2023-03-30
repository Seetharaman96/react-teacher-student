import Carousel from "react-bootstrap/Carousel";

export function Dashboard() {
  return (
    <div className="home">
      <div className="title">
        <h3>Hello all welcome to the student teacher management app</h3>
      </div>
      <div className="slides">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-vector/teacher-teaching-students-classroom-scene_1308-64207.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://theschool-management.com/wp-content/uploads/2020/08/How-is-the-School-Management-System.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.javatpoint.com/blog/images/student-management-system.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
