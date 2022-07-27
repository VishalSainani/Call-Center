import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Images/callcenter1.jpg'
import image2 from '../Images/callcenter2.jpg'
import image3 from '../Images/callcenter3.jpg'
import './slider.css'
function UncontrolledExample() {
  return (
    <Carousel className="Setting " variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class="text-white bg-dark">Treat every call like it was your only call.</h3>
          <p class="text-white bg-dark" >ACT leverages industry best practices and operations expertise to meet the unique needs of your business.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 class="text-white bg-dark">Don't just make a sale;  secure a long-term customer.</h3>
          <p class="text-white bg-dark">Optimize sales by developing great customer relationships.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 class="text-white bg-dark">Everyone remembers great customer service.</h3>
          <p class="text-white bg-dark">
          Every campaign includes integrated quality assurance and compliance measures to ensure your customers always have the best possible experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;