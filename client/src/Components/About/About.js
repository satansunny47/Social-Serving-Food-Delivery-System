import './about.css';
import img from './pic1.jpg'
const About = () => {
    return (
        <div id ="aboutID"className="about about-us">
            <div className="about-outer">
                <img src={img} />
                <img src={img} />
                {/* <img src=""/> */}

            </div>

            <div className="about-text">
                <div className="details">
                    <div className="para-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti officia animi odit incidunt
                        impedit quasi voluptatum rerum laboriosam commodi! Obcaecati explicabo odit dolore, recusandae
                        tempore beatae corrupti tenetur asperiores eius accusantium repellendus doloremque ut labore rem
                        quae perferendis dicta excepturi. Hic assumenda quisquam excepturi eaque, nulla rerum nostrum soluta
                        quaerat?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem culpa facere magni esse
                        vel blanditiis excepturi omnis animi ipsam earum ab laudantium magnam, mollitia odit doloremque
                        illum cum nam harum deserunt adipisci. Assumenda, placea
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;