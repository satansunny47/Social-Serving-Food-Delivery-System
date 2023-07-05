import { useState, useEffect } from "react";
import axios from 'axios'
import "./ngopage.css";
import restImg from "./rest.png";
import NGOdonate from "../paymentanddelivery/ngodonate";
const Custpage = ({ charge }) => {
  // let [num, setNum] = useState(0);

  // let handleChange = (e) => {
  //     setNum(e.target.value);
  // }
  const [donate, setdonate] = useState(false);
  const [newcharge, setnewcharge] = useState(charge * 0.6);
  const tempObjects = [
    {
      name: "NGO1",
      Address:
        "Arrays of objects don't stay the same all the time. We almost always need to manipulate them. So let's take a look at how we can add objects to an already existing array.",
      phone_number: 100
    }
  ];
  const [restList, setrestList] = useState(tempObjects);

  const url = "http://localhost:3000/ngolist"
  const [ngoList, setngoList] = useState(tempObjects);


  useEffect(() => {
    console.log("dgbvuydfyusfiuvdshiugviudrfhighdi");
    callNgo();
  }, [])

  const callNgo = () => {

    axios.get(url)
      .then((response) => {
        // setUserData(response.data)
        console.log(response.data);
        const vari = response.data;
        setngoList(vari);



        // setChange(0);
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      {donate && <NGOdonate newcharge={newcharge} />}
      {!donate && (
        <div className="restListBox">
          <div className="rest-upper">
            <h2 className="restlistname">NGOs nearby</h2>
          </div>
          <div className="rest-lower">
            {ngoList.map((rest) => (
              <div className="rest-des">
                <div className="rest-left">
                  <img src={restImg} className="image" />
                </div>
                <div className="rest-right">
                  <div className="up-portion">
                    <h2>{rest.name}</h2>
                    <div className="viewmenu">
                      <button
                        onClick={() => {
                          setdonate(true);
                        }}
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                  <div className="down-portion">
                    <p>{rest.Address}</p>
                    <p>{rest.phone_number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Custpage;