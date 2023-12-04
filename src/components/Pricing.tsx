const PricingFeatures = ({ features }: { features: string[] }) => (
  <ul role="list" className="mt-8 space-y-3 text-sm leading-6  xl:mt-10">
    {features.map((feature) => (
      <li className="flex gap-x-3" key={feature}>
        <svg
          className="h-6 w-5 flex-none text-amber-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
        {feature}
      </li>
    ))}
  </ul>
);

const Pricing = () => {
  return (
    <div className="bg-amber-400 py-12 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Pricing plans for businesses of&nbsp;all&nbsp;sizes
          </h2>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-3xl bg-amber-100/25 p-8 ring-2 ring-slate-900 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-support"
                className="text-lg font-semibold leading-8 text-slate-900"
              >
                Support
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 ">
              Access to a team of experienced developers to support your
              business. This plan is designed for small businesses that
              need a little extra help.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-slate-900">
                <span className="mr-px text-2xl">£</span>2495
              </span>
              <span className="text-sm font-semibold leading-6 ">/month</span>
            </p>
            <a
              href="https://forms.gle/rm6TbhpT2FaUQvxZ9"
              aria-describedby="tier-support"
              className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-slate-900 ring-2 ring-inset ring-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Get started
            </a>
            <PricingFeatures
              features={[
                "Minimum 5 days of work per month",
                "One request at a time",
                "Average 2 days per request",
                "Work on your tasks every day",
                "Bring your own tools, JIRA etc",
              ]}
            />
          </div>
          <div className="rounded-3xl bg-slate-900 p-8 text-slate-100 ring-2 ring-slate-900 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3 id="tier-grow" className="text-lg font-semibold leading-8 ">
                Scale
              </h3>
              <p className="rounded-full bg-amber-400 px-2.5 py-1 text-xs font-semibold leading-5 text-slate-900">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-100">
              The perfect plan for small to medium sized teams. Great for
              burstable workloads or teams that don't need a full time
              developer.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-slate-100">
                <span className="mr-px text-2xl">£</span>4995
              </span>
              <span className="text-sm font-semibold leading-6 text-slate-100">
                /month
              </span>
            </p>
            <a
              href="https://forms.gle/rm6TbhpT2FaUQvxZ9"
              aria-describedby="tier-grow"
              className="mt-6 block rounded-md bg-amber-400 px-3 py-2 text-center text-sm font-semibold leading-6 text-slate-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Get started
            </a>
            <PricingFeatures
              features={[
                "Minimum 10 days of work per month",
                "One request at a time",
                "Average 2 days per request",
                "Work on your tasks every day",
                "Bring your own tools, JIRA etc",
              ]}
            />
          </div>
          <div className="rounded-3xl bg-amber-100/25 p-8 ring-2 ring-slate-900 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-enterprise"
                className="text-lg font-semibold leading-8 text-slate-900"
              >
                Create
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 ">
              Get a dedicated developer for your business. This plan is designed
              for large projects with continuous development.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-slate-900">
                <span className="mr-px text-2xl">£</span>8995
              </span>

              <span className="text-sm font-semibold leading-6 ">/month</span>
            </p>
            <a
              href="https://forms.gle/rm6TbhpT2FaUQvxZ9"
              aria-describedby="tier-enterprise"
              className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-slate-900 ring-2 ring-inset ring-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Get started
            </a>
            <PricingFeatures
              features={[
                "Minimum 20 days of work per month",
                "Two requests at a time",
                "Average 2 days per request",
                "Work on your tasks every day",
                "Bring your own tools, JIRA etc",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
