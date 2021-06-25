import React from 'react'

import MeetupDetail from '../../components/meetups/MeetupDeatil'

const MeetupDetails = () => {

  return (
    <div>
        <MeetupDetail image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"} title="First"
         address="sdsadas" 
         description="dsadasdsa"/>
    </div>
  )
}


export async function getStaticPaths() {
    return {
      fallback: false, 
      paths:[
          {
              params :{
                meetupId: "m1",
              },  

          },
          {
            params :{
              meetupId: "m2",
            },  

        }
        ]

}
}



export async function getStaticProps(context){

  const meetupID = context.params.meetupId;

  console.log(meetupID);
  return{
    props:{
      meetupData:{
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        id:"m1",
        title:"First Meetup",
        address:"Sds streey",
        description:"This is dexcription"

      }
    }
  }
}


export default MeetupDetails
