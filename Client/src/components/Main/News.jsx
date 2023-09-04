import React from 'react'
import news1 from '../../images/news1.jpg'
import news2 from '../../images/news2.jpg'
import news3 from '../../images/news3.jpg'
const News = () => {
  return (
    <div id='News' className='bg-gray-100 bg-opacity-80'>
      <div class="container  pt-14 pb-7   md:px-20 px-10">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-[50px] text-center">
          <h2 class="mb-12 text-center text-3xl font-bold">Articles on Malnutrition</h2>

          <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            <div class="mb-6 lg:mb-0 px-6">
              <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src={news1} class="w-full" alt="Louvre" />
                <a href="https://indianexpress.com/article/cities/pune/malnutrition-cases-dip-pune-district-robust-child-health-tracking-system-reason-8654585/">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                  </div>
                </a>
              </div>

              <h5 class="mb-2 text-lg font-bold">Malnutrition cases dip by robust child health tracking system </h5>

              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                <small>June 9, 2023 16:29 IST </small>
              </p>
              <p class="text-neutral-500 dark:text-neutral-300">
                From 1,725 children with Moderate Acute Malnutrition (MAM) and 394 children with Severe Acute Malnutrition (SAM), the numbers have fallen to 302 and 44 respectively, Pune Zilla Parishad (ZP) authorities have said.
              </p>
            </div>

            <div class="mb-6 lg:mb-0 px-6">
              <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src={news2} class="w-full" alt="Louvre" />
                <a href="https://www.hindustantimes.com/india-news/over-14-lakh-children-severely-malnourished-in-india-govt-101680100159342.html">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                  </div>
                </a>
              </div>

              <h5 class="mb-2 text-lg font-bold">Over 14 Lakh Children "Severely Malnourished" In India</h5>

              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                <small>March 29, 2023 20:15 IST</small>
              </p>
              <p class="text-neutral-500 dark:text-neutral-300">
                There are over 14 lakh severely malnourished children in the country as per the government's Poshan Tracker, the Women and Child Development Ministry said on Wednesday.
              </p>
            </div>

            <div class="mb-6 lg:mb-0 px-6">
              <div>
                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src={news3} class="w-full" alt="Louvre" />
                  <a href="https://economictimes.indiatimes.com/news/new-updates/malnutrition-in-india-a-comprehensive-strategy-to-combat-for-better-future/articleshow/96518242.cms?from=mdr">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>

                <h5 class="mb-2 text-lg font-bold">Malnutrition in India: A comprehensive strategy to combat for better future</h5>

                <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                  <small>December 26, 2022 16:44 IST</small>
                </p>
                <p class="text-neutral-500 dark:text-neutral-300">
                  A persistent issue  for India's public administration is child malnutrition. India was among the nations with the lowest results for child health in the first National Family Health Survey (NFHS), which was conducted in 1992–1993
                </p>
              </div>
            </div>

          </div>
        </section>
        {/*   <!-- Section: Design Block --> */}
      </div>
    </div>
  )
}

export default News