import NewMeetupPage from '../../components/meetups/NewMeetupForm'
import useRouter from 'next/router'

const NewMeetPage = () => {

 async function addMeetupHandler(enteredMeetup) {

    const router = useRouter();

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetup),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const data =  await response.json();  

  router.push(/)
  }


  return (
      <NewMeetupPage onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetPage
