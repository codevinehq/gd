"use client"
import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How do I request development",
    answer:
      `We offer a lot of flexibility. Some common ways clients request development work is directly via Trello, or with links to the clients existing ticking management system.`,
  },
    {
    question: "Is there a limit to the work I can request?",
    answer:
      `You can request as much work as you like but there can only be one task currently in progress.`,
  },
]

export function Faqs() {
  return (
       <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>

     </Container>
    </section>
  )
}


// export function Faqs() {
//   return (
//     <section
//       id="faq"
//       aria-labelledby="faq-title"
//       className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
//     >
//       <Image
//         className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
//         src={backgroundImage}
//         alt=""
//         width={1558}
//         height={946}
//         unoptimized
//       />
//       <Container className="relative">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2
//             id="faq-title"
//             className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
//           >
//             Frequently asked questions
//           </h2>
//           <p className="mt-4 text-lg tracking-tight text-slate-700">
//             If you can’t find what you’re looking for, email our support team
//             and if you’re lucky someone will get back to you.
//           </p>
//         </div>
//         <ul
//           role="list"
//           className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
//         >
//           {faqs.map((column, columnIndex) => (
//             <li key={columnIndex}>
//               <ul role="list" className="flex flex-col gap-y-8">
//                 {column.map((faq, faqIndex) => (
//                   <li key={faqIndex}>
//                     <h3 className="font-display text-lg leading-7 text-slate-900">
//                       {faq.question}
//                     </h3>
//                     <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </section>
//   )
// }
