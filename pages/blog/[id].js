import Layout from '../../components/layout'
// import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
// import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css'
const qs = require('qs')

export default function Products({ products }) {

//  console.log(blogs)

  // console.log('revalidating....',products.data);
//   let revalidate = ()=>{
//     console.log('revalidating....');
//     // fetch(`/api/revalidate?id=${products.data.id}`);
//     fetch(`/api/revalidate`);
//   }

  let imageBseUrl = 'http://localhost:1337'
  
  return (
    <Layout>
      <Head>
        {/* <title>{postData.title}</title> */}
      </Head>
      <article>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageBseUrl + products?.data.attributes.image.data.attributes.url} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{products?.data.attributes.label}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
          
       
      </article>
      {/* <button onClick={()=>revalidate()} className="bg-blue-500 mt-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Revalidate
        </button> */}
    </Layout>
  )
   
}

export async function getStaticPaths() {
  
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
  
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const port = process.env.NEXT_APP_PORT;
// console.log('port.....',port, process.env)
  // let fetchBlogs = await fetch(`http://localhost:${port}/api/blogs`);


  const query = qs.stringify(
    {
      populate: ['image']
    },
    {
      encodeValuesOnly: true
    }
  )

let response = await fetch(`http://host.docker.internal:1337/api/products/${params.id}/?${query}`)
  let blogs = await response.json();
   
  return {
    props: {
      products: blogs
    },
    revalidate: 1, 
  }
}
