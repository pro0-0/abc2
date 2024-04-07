import React from "react";
import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp";
import g1 from "../../assets/donation/g1.jpg";
import g2 from "../../assets/donation/g2.jpg";
import g3 from "../../assets/donation/g3.jpg";
import g4 from "../../assets/donation/g4.jpg";
const Home = () => {
  const temp = [
    { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", recieve: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
    { blood: "O-", donate: "Everyone", recieve: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" },
  ];
  const temp2 = [
    { title: "Registration", img: g1 },
    { title: "Seeing", img: g2 },
    { title: "Donation", img: g3 },
    { title: "Save Life", img: g4 },
  ];
  return (
    <div className="dark:text-white-900">
      {/* <img src={bg} alt="" /> */}
      <div className="grid grid-cols-2 mt-6 place-items-center px-52">
        <div>
          <img draggable={false} src={bg2} width="100%" alt="" />
        </div>
        <div>
          <p className="text-4xl font-bold text-center text-gray-dark dark:text-white-900">
            Be the reason <br />
            for <br />
            someone's heartbeat
          </p>
        </div>
      </div>
      {/* <h1 className="my-4 text-lg font-bold text-center underline text-blood">
        Learn About Donation
      </h1> */}
      <div className="flex px-20">
        <div>
          <img src={donationFact} width="90%" alt="" />
          <p className="text-center">
            {/* <code>
              After donating blood, the body works to replenish the blood loss.
              This stimulates the production of new blood cells and in turn,
              helps in maintaining good health.
            </code> */}
          </p>
        </div>
        <div>
          <table className="w-max" cellPadding={5}>
            <tr>
              <td
                colSpan={3}
                className="font-bold text-center border bg-blood text-white-900"
              >
                Compatible Blood Type Donors
              </td>
            </tr>
            <tr>
              <th className="text-lg border w-max">Blood Type</th>
              <th className="text-lg border w-max">Donate Blood To</th>
              <th className="text-lg border w-max">Receive Blood From</th>
            </tr>
            {temp.map((e) => {
              return (
                <tr>
                  <td className="text-lg border w-max">{e.blood}</td>
                  <td className="text-lg border w-max">{e.donate}</td>
                  <td className="text-lg border w-max">{e.recieve}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      {/* <p className="mt-5 mb-5 text-xl font-bold text-center underline text-blood">
        Blood Donation Process
      </p>
      <div className="grid grid-cols-2 place-items-center">
        {temp2.map((e, i) => (
          <div className="border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2">
            <div>
              <img src={e.img} draggable={false} width="100%" alt="" />
            </div>
            <div className="m-4">
              <h1 className="text-lg font-bold text-midnight dark:text-white-900">
                {i + 1} - {e.title}
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur qwey adipisicing elit.
                Doloribus, as aliquam corporis dolorem consectetur qui libero,
                veritatis, nihil alias repellat quam architecto nobis laudantium
                ipsum nemo nesciunt quisquam est odit ad?
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="w-full text-sm font-bold text-center bg-blood text-white-900 h-max">
        <code>
          ॐ BloodLink @ {new Date().getFullYear()} ॐ || Made with ❤️ by Ujjwal
        </code>
      </div> */}
    </div>
  );
};

export default Home;
