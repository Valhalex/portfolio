import "./testimonials.scss"
import { PersonOutline, LinkedIn } from '@mui/icons-material';

export default function Testimonials() {
  const data = [
    {
    id:1,
    name: "Larry Whittington",
    title: "Full Stack Developer & Woz U Mentor",
    img:"https://i.imgur.com/zP2Epwp.jpeg",
    descr: "During the time I have known Isaac, he has excelled in the problems given him. Taking initiative in learning beyond the materials provided him. And finding creative ways to solve problems and concepts presented to him. He has also led small groups of his peers in solving problems and concepts in software development.",
    

    },
    {
      id:2,
      name: "Dustin Guichett",
      title: "Full-Stack Engineer",
      img:"https://i.imgur.com/yqRmhWB.jpeg",
      descr:"Isaac, A man who uses his existing knowledge of technology to increase the speed in which he learns things. He compares and contrasts technology’s accurately and with well spoken analogies. His communication skills are where he shines, and by communicating the skills that Isaac is working on at the time becomes ingrained into his skill set like muscle memory. Learning from him just makes sense! In a team setting he is able to navigate the strengths and weaknesses of the whole team with a single conversation, and add value wherever he goes. That’s Isaac - a reliable encourager who makes an excellent leader, and learns things well on the fly under pressure."
    },
    {
      id:3,
      name: "Ryan Clark",
      title: "Software Engineer & Manager @ Code Ninjas Ponte vedra",
      img: null,
      descr: "Isaac has been a great hire because he brings a strong work ethic, commitment to learning and improving and a passion to help others. He took this role to improve his coding skills while helping others learn how to code. He did this for an altruistic reason as he has another job and makes less money with us. He has a positive attitude and really brings a great attitude to the dojo and makes our dojo better!"
      },


  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              {/* if testimonial user has no image use an icon */}
              {d.img ? <img
                className="user"
                src={d.img}
                alt=""
              /> : <PersonOutline className="icon"/>
              }
              {/* media link */}
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.descr}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
