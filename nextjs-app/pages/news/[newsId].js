import { useRouter } from 'next/router';


const NewsPage = () => {

  const router =   useRouter()

  const newsId = router.query.newsId

  return (
    <div>
        The Detail News Page
    </div>
  )
}

export default NewsPage
