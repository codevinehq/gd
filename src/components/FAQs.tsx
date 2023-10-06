import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How do I request development?",
    answer:
      "We offer a lot of flexibility. Some common ways clients request development work is directly via Trello, or with links to the clients existing ticking management system.",
  },
  {
    question: "Is there a limit to the work I can request?",
    answer:
      "You can request as much work as you like but there can only be one task currently in progress.",
  },
  {
    question: "How fast will the request be completed?",
    answer:
      "On average, most requests are completed within 1-3 days. However, more complex requests can take longer. Time frames will be discussed during task allocation. There is always someone available to work on your request, no holdiays, no sick days, no problems.",
  },
  {
    question: "Why wouldn't I just hire a full-time developer?",
    answer: `The annual cost of a full-time senior-level developer now exceeds £65,000, plus benefits. Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you are not able to utilize.
With our monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying when you have work available.`,
  },
  {
    question: "How many days work is included in the monthly plan?",
    answer: `The monthly plan includes 22 days of development work per month. Unused days do not roll over to the next month unless you pause your subscription.`,
  },
  // More questions...
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
