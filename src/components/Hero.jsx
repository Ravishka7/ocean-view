import AnimateOnScroll from "@/components/AnimateOnScroll"
export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden  py-64 sm:py-30">
      
      <img
        alt=""
        src="/assets/hero/beach_hero.jpg"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >     
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      
      
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      
        <div className="mx-auto max-w-3xl lg:mx-0 py-28">
        <AnimateOnScroll>
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Welcome to Ocean View</h2>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
          TOURIST GUEST HOUSE AND TOURS
          </p>
        </AnimateOnScroll>
          
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none py-2">
          
          
        </div>
        
      </div>
      
      
    </div>
  )
}
