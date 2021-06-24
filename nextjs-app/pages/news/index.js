import Link from 'next/link'
const NewsPage = () => {
  return (
    <div>
        The News Page
        <ul>
          <li>
            <Link href='/news/something'>
            A page
            </Link>
            </li>
          <li>B page</li>
        </ul>
    </div>
  )
}

export default NewsPage
