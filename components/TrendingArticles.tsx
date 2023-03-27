import Image from 'next/image'
import retroPc from "/home/michael/Desktop/Training/Training/the-newsroom/public/image-retro-pcs.jpg";
import topLaptops from "/home/michael/Desktop/Training/Training/the-newsroom/public/image-top-laptops.jpg";
import gamingGrowth from "/home/michael/Desktop/Training/Training/the-newsroom/public/image-gaming-growth.jpg";
import Link from 'next/link';

function ArticleList({pages}) {
  // console.log("the new page is: ", pages)

  // improvements for better fetching coming, I'm just playing around with data objects.

  console.log("the image is: ", pages[0].url)

    return ( 
        <section className="top-news">
          <Link href={pages[0].url}>
            <div className="news">
              <img className='w-[100px] h-[127px] object-cover cursor-pointer' src={pages[0].data.slices[0].primary.article_image.url} alt="Reviving Retro PCs" />
              <div className="write-up">
                <h1 className="number cursor-pointer">01</h1>
                <h6 className='font-bold text-slate-600 hover:text-orange-600 cursor-pointer'>{pages[0].data.article_title[0].text}</h6>
                <p className="cursor-pointer">{pages[0].data.slices[0].primary.description[0].text.substring(0, 50)}...</p>
              </div>
            </div>
            </Link>
            <div className="news">
              <Image src={topLaptops} alt="Top laptops of 2022" />
              <div className="write-up">
                <h1 className="number">02</h1>
                <h3>Article title</h3>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </div>
            <div className="news">
              <Image src={gamingGrowth} alt="Gaming growth" />

              <div className="write-up">
                <h1 className="number">03</h1>
                <h4 className='font-bold'>The Growth of Gaming</h4>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </section>
     );
}

export default ArticleList;