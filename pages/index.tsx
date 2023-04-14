import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  SwiperCore.use([Autoplay])
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Semente da liberdade
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Cultivando a liberdade nas faculdades
          </p>

          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam delectus,
            blanditiis dignissimos, dolorem architecto, a amet voluptate debitis repellat doloremque
            eveniet et assumenda perspiciatis illum voluptatum optio libero omnis! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Accusamus praesentium recusandae enim harum unde
            explicabo molestias laboriosam sequi? Commodi, quae? Numquam nemo natus debitis facilis
            eum iusto voluptatibus reprehenderit qui? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Numquam eaque quisquam ipsa, ex at itaque ducimus dolores maiores?
            Nostrum commodi optio deserunt porro dolorem quisquam architecto, nihil laborum dolorum
            sunt!
          </p>

          <button
            onClick={() => {
              console.log('Click')
            }}
            className={`w-1/4 cursor-default rounded-md bg-primary-500 px-4 py-5 font-medium text-white 
              focus:outline-none focus:ring-2
             focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 sm:py-0`}
            type="submit"
          >
            Faça parte!
          </button>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 3000,
            }}
          >
            <SwiperSlide>
              <div className="h-64 w-full bg-slate-600">
                <p> FOTO </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-64 w-full bg-slate-600">
                <p> FOTO </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-64 w-full bg-slate-600">
                <p> FOTO </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-64 w-full bg-slate-600">
                <p> FOTO </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-full">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Nossos valores:</p>
        <div className="mt-3 flex flex-row justify-center">
          <div className="align-center flex w-1/2">Liberdade economica</div>
          <div className="align-center flex w-1/2">Propriedade privada</div>
          <div className="align-center flex w-1/2">Liberade indivual</div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            Todas as publicações &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
