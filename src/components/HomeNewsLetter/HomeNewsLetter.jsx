
export default function HomeNewsLetter() {
  return <>
  
  <section className="flex flex-col items-center justify-center my-6 gap-4 p-16 bg-yellow-100/30">
    <h3 className="text-[18px] md:text-3xl font-bold">Subscribe to our Newsletter</h3>
    <p className="text-xs md:text-lg text-gray-500">Stay updated with our latest offers</p>
    <div>
        <div className="relative ">
          <input type="email" className="form-control rounded-tr-none rounded-br-none w-74 md:w-96" placeholder="Enter your email here"/>
        <button className="btn absolute -right-4 text-sm p-[10.5px] rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none  bg-primary-600 text-white">Subscribe</button>
        </div>
    </div>
  </section>
  
  
  </>
}
