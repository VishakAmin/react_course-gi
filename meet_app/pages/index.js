
import MeetupList from '../components/meetups/MeetupList'


const MEET = [

  {
  Id: "m1",
  title : "A first Meetup",
  image : "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  address: "Some Things, pin 546565",
  description : "This is Firts"
},
{
  Id: "m2",
  title : "A  Meetup",
  image : "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  address: "Some Things, pin 546565",
  description : "This is Firts"
},
]

const HomePage = (props) => {
  return (
    <MeetupList  meetups={props.meetups}/>
   )
}

export async function getStaticProps() {
  
  return {
    props : {
      meetups: MEET
    },
    revalidate: 10
  }
}

export default HomePage


