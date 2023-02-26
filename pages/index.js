/* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { SlArrowRightCircle } from 'react-icons/sl';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full">
        <Navbar />
        <section className="flex justify-center py-5">
          <div className="relative bg-[#F3F2F2] h-[80vh] w-[90vw] rounded-md">
            <h1 className="sm:w-[700px] sm:leading-[150px] text-[50px] lg:text-[110px] font-[500] absolute top-[50px] left-[50px]">
              Sit with luxury
            </h1>
            <img
              src="/assets/chair.png"
              alt=""
              className="absolute w-[200px] h-[200px] sm:h-max sm:w-max right-20 sm:right-[100px] top-[230px] sm:top-[50px]"
            />
            <button className="sm:text-[25px] font-[500] px-4 py-2 rounded-md bg-black text-white tracking-widest absolute bottom-10 left-[10%] sm:left-[50%]">
              ORDER NOW
            </button>
          </div>
        </section>
        <section>
          <div className="mt-32 bg-[#F3F2F2] h-[100vh] px-2 sm:px-0">
            <div className="flex flex-col justify-center items-center">
              <h1 className="mt-5 text-[50px] sm:text-[100px] font-[500]">
                Who we are
              </h1>
              <p className="font-[500]">
                We are company which care about luxury and make feel our
                customer in best comfortable position on our appliance...
              </p>
              <div className="flex mt-5 sm:mr-[360px] font-[500]">
                <p>
                  All our appliance made by our professional master . . . . . .
                  . . . .
                </p>
                <HiArrowNarrowRight
                  size={25}
                  className="hidden sm:inline-block sm:pl-5 w-max"
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button className="sm:text-[30px] font-[500] px-6 py-2 rounded-md bg-black text-white tracking-widest">
                Best seller
              </button>
            </div>
            <div className="flex flex-wrap mt-10 justify-center items-center">
              <img
                src={featured2}
                alt=""
                className="w-[150px] h-[150px] sm:h-max sm:w-max mt-3 sm:mt-0"
              />
              <img
                src="assets/featured02.png"
                alt=""
                className="w-[150px] h-[150px] sm:h-max sm:w-max pt-2"
              />
              <img
                src="assets/featured03.png"
                alt=""
                className="w-[150px] h-[150px] sm:h-max sm:w-max pt-1"
              />
              <img
                src="assets/featured04.png"
                alt=""
                className="w-[150px] h-[150px] sm:h-max sm:w-max"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="mt-32 min-h-[100vh] bg-[#F3F2F2]">
            <div className="pt-20 flex justify-center">
              <button className="text-[20px] sm:text-[30px] font-[500] px-6 py-2 rounded-md bg-black text-white tracking-widest">
                CATEGORY
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center items-center">
              <img
                src="/assets/section1.png"
                alt=""
                className="w-[150px] h-[150px] sm:h-[300px] sm:w-[300px]"
              />
              <img
                src="/assets/section1.png"
                alt=""
                className="w-[150px] h-[150px] sm:h-[300px] sm:w-[300px]"
              />
              <img
                src="/assets/section3.png"
                alt=""
                className="w-[150px] h-[150px] sm:h-[300px] sm:w-[300px]"
              />
            </div>
            <div className="mt-10 sm:mt-5 flex flex-wrap sm:flex-nowrap justify-center gap-16">
              <div>
                <h1 className="text-[20px] sm:text-[30px] font-[500] tracking-widest">
                  For Office
                </h1>
                <p className="text-sm sm:text-normal sm:w-[250px] font-[500]">
                  Technical appliance for office. Best for small business.
                </p>
                <div className="flex mt-2 mb-4 sm:mb-0 sm:mt-4 w-max items-center justify-center gap-2 px-2 py-1 sm:px-5 sm:py-1 rounded-full bg-black font-[500] text-white">
                  <button className="text-sm sm:text-normal">See more</button>
                  <SlArrowRightCircle className="ml-2 text-[20px] sm:text-[25px]" />
                </div>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[30px] font-[500] tracking-widest">
                  For Home
                </h1>
                <p className="text-sm sm:text-normal sm:w-[250px] font-[500]">
                  Technical appliance for office. Best for small business.
                </p>
                <div className="flex mt-2 mb-4 sm:mb-0 sm:mt-4 w-max items-center justify-center gap-2 px-2 py-1 sm:px-5 sm:py-1 rounded-full bg-black font-[500] text-white">
                  <button className="text-sm sm:text-mormal">See more</button>
                  <SlArrowRightCircle className="ml-2 text-[20px] sm:text-[25px]" />
                </div>
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[30px] font-[500] tracking-widest">
                  Personal Use
                </h1>
                <p className="text-sm sm:text-normal sm:w-[250px] font-[500]">
                  Technical appliance for office. Best for small business.
                </p>
                <div className="flex mt-2 mb-20 sm:mt-4 w-max items-center justify-center gap-2 px-2 py-1 sm:px-5 sm:py-1 rounded-full bg-black font-[500] text-white">
                  <button className="text-sm sm:text-normal">See more</button>
                  <SlArrowRightCircle className="ml-2 text-[20px] sm:text-[25px]" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-full sm:min-h-[100vh] mt-32 bg-[#F3F2F2]">
            <h1 className="text-[30px] py-10 sm:py-0 sm:text-[70px] font-[500] w-max ml-10">
              ONE STOP SOLUTION
            </h1>
            <img src="/assets/section4.png" alt="" className="m-auto" />
            <p className="font-[500] pb-10 sm:pb-0 px-2 sm:px-20 mt-10">
              Working within our DEX team means that you have a tangible impact
              on the customer&apos;s delivery experience. We deliver packages
              (and groceries, Prime Now, 3P, and restaurant orders) to homes,
              businesses, Amazon Lockers, and even cars all over the world! This
              network is powered by hundreds of small businesses and tens of
              thousands of drivers that leverage Amazon technology to deliver
              millions of smiles to customers each day.
            </p>
          </div>
        </section>
        <section>
          <div className="mt-32 sm:min-h-[100vh] bg-[#F3F2F2]">
            <div className="flex gap-5 sm:gap-0 justify-around p-10">
              <div className="flex-1">
                <img src="/assets/footer-img.png" alt="" />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] sm:text-[30px] h-[70px] sm:h-[130px] font-[500] uppercase">
                  Quick Navigation
                </h3>
                <p className="text-sm sm:text-normal font-[500]">About us</p>
                <p className="text-sm sm:text-normal mt-4 font-[500]">
                  News & Events
                </p>
                <p className="text-sm sm:text-normal mt-4 font-[500]">
                  Terms & Conditions
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] sm:text-[30px] h-[70px] sm:h-[130px] font-[500] uppercase">
                  Knowledge Base
                </h3>
                <p className="text-sm sm:text-normal font-[500]">FAQ</p>
                <p className="text-sm sm:text-normal mt-4 font-[500]">
                  Return Policy
                </p>
                <p className="text-sm sm:text-normal mt-4 font-[500]">Emi</p>
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] sm:text-[30px] h-[70px] sm:h-[130px] font-[500] uppercase">
                  Information
                </h3>
                <p className="text-sm sm:text-normal font-[500]">New Arrival</p>
                <p className="text-sm sm:text-normal mt-4 font-[500]">
                  Installment
                </p>
                <p className="text-sm sm:text-normal mt-4 font-[500]">
                  Delivery
                </p>
                <p className="text-sm sm:text-normal mt-4 font-[500]">
                  Warranty
                </p>
                <p className="text-sm sm:text-normal mt-4 font-[500]">
                  Privacy Policy
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="sm:w-[50vw] h-[25vh] bg-[#E0E0E0]">
                <h1 className="text-center text-[20px] mt-5 sm:mt-0 mx-5 sm:mx-0 sm:text-[30px] font-[500] uppercase">
                  Subscribe To Our Newsletter
                </h1>
                <input
                  placeholder="Your Email"
                  className="outline-none bg-[#E0E0E0] ml-1 mt-10 p-2 border-b border-b-black w-[95%]"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-xl font-[500] mt-10 sm:mt-20 mb-5">
            Powered By Next JS.
          </div>
        </section>
      </main>
    </>
  );
}
