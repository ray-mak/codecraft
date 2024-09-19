import Image from "next/image"

const WhoWeAre = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 bg-slate-100 dark:bg-slate-800">
      <div className="flex w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl items-center justify-center">
        <div className="flex gap-4 items-center">
          <div className="w-20 h-[2px] bg-lightTeal"></div>
          <h2 className="text-4xl font-bold text-center">
            <span className="text-teal-700 dark:text-lightTeal">Who</span> We
            Are
          </h2>
          <div className="w-20 h-[2px] bg-lightTeal"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-5/6 lg:max-w-2xl gap-6">
        <p>
          My name is Ray, and I used to manage a small cabinet business. As it
          was a mom-and-pop shop, I wore many hats, one of which was driving
          customer traffic through our website. With a tight budget, we couldn't
          afford to spend thousands on a custom site, so I quickly put one
          together using WordPress.
        </p>
        <p>
          While it worked, it wasn{"’"}t optimized for SEO, and it didn{"’"}t
          look great on mobile. That challenge sparked my interest in web
          development and led me to pursue my passion for coding full-time.
          Today, I specialize in helping small businesses not only build custom
          websites but also grow their online presence and boost their revenue.
        </p>
        <div className="profile-img mt-10 mb-6">
          <Image
            src="/images/profile-img.jpg"
            width={200}
            height={200}
            alt="picture of Ray"
          />
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
