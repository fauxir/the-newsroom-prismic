function SideLinks() {
    return ( 
        <section className="right-aside-new">
            <h1 className="title">New</h1>
            <div className="a-news">
              <h3 className='font-bold'>Hydrogen vs Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            <hr />

            <div className="a-news">
              <h3 className='font-bold'>The DownSides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>

            <hr />

            <div className="a-news">
              <h3 className='font-bold'>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </section>
     );
}

export default SideLinks;