import clsx from 'clsx'
import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-900 py-32"
    >
   {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
         <Container className="relative">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-white">
            With the annual cost of hiring a senior developer now exceeding £65,000</p> <p className="text-lg text-white">not including benefits! You could save over £180,000 per year.
          </p>
        </div>
        <div
          class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-slate-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div class="p-8 sm:p-10 lg:flex-auto">
            <h3 class="text-2xl font-bold tracking-tight text-slate-50">
              Monthly Subscription
            </h3>
            <p class="mt-6 text-base leading-7 text-slate-50">
              We work on your tasks every day except weekends and bank holidays.
              There is always someone available to work on your request, no
              holdiays, no sick days, no problems.
            </p>
            <div class="mt-10 flex items-center gap-x-4">
              <h4
                class="flex-none text-sm font-semibold leading-6 text-blue-400"
              >
                What's included
              </h4>
              <div class="h-px flex-auto bg-slate-100"></div>
            </div>
            <ul
              role="list"
              class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-50 sm:grid-cols-2 sm:gap-6"
            >
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"></path>
                </svg>
                 One request at a time
              </li>
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"></path>
                </svg>
                 Average 2 days per request
              </li>
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"></path>
                </svg>
                 Work on your tasks every day
              </li>
              <li class="flex gap-x-3">
                <svg
                  class="h-6 w-5 flex-none text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"></path>
                </svg>
                 Bring your own tools, JIRA etc
              </li>
            </ul>
          </div>
          <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div
              class="rounded-2xl bg-slate-50 py-10 text-center ring-1 ring-inset ring-slate-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
            >
              <div class="mx-auto max-w-xs px-8">
                <p class="text-base font-semibold text-slate-900">
                  One fee, three devs!
                </p>

                <div
                  class="mt-6 flex flex-col items-center justify-center gap-x-2"
                >
                 
                  <p>
                    <span
                      class="text-5xl font-bold tracking-tight text-slate-900"
                      >£4,995</span>
                    <span>/month</span>
                  </p>
                  <p
                    class="mt-3 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700"
                  >
                    Save £15,000 per month!
                  </p>
                </div>
                <a
                  href="#"
                  class="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                  >Get access</a
                >
                <p class="mt-6 text-xs leading-5 text-slate-900">
                  Invoices and receipts available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}
