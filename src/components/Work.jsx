import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    title: 'Pull Request Reviews',
    desc: `A good pull request cadence is essential to keeping your team productive. Let your in-house senior devs focus on building your business. We'll help you keep your pull request queue moving.`,
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Incremental Rewrites',
    href: '#',
    desc: `A good pull request cadence is essential to keeping your team productive. Let your in-house senior devs focus on building your business. We'll help you keep your pull request queue moving.`,
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Improving Tests',
        desc: `A good pull request cadence is essential to keeping your team productive. Let your in-house senior devs focus on building your business. We'll help you keep your pull request queue moving.`,
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'New Components',
    href: '#',
    desc: `Need a new component? We can help you build it. Just give us some design and a spec and we'll build it for you. We'll even write the tests.`,
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Package Upgrades',
    href: '#',
    desc: `We can handle mudane tasks like upgrading packages for you. Make sure your application is always up to date with the latest security patches and features.`,
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Project Setup',
    href: '#',
    desc: `We can setup new projects for you. We'll help you choose the right packages and architecture for your project so you can get started quickly. Retrospectively adding internationalization to an application can be a pain.`,
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
  {
    title: 'Internationalization',
    href: '#',
    desc: `Retrospectively adding internationalization to an application can be a pain. We'll go file by file and add i18n to your application.`,
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Bug Fixes',
    href: '#',
    desc: `Got bugs? We'll fix them for you. Just give us a description of the bug and we'll squash it.`,
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Small Feature Additions',
    href: '#',
    desc: `Need to make a change to an existing feature? Let your team focus on building new features. We'll handle the small stuff.`,
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Work() {
  return (
    <section
      id="features"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">

<div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                What kind of work is suitable for GhostDevs?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-900">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>


    <div className="overflow-hidden rounded-lg sm:grid sm:grid-cols-3 gap-10 mt-20">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className="pb-10"
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'inline-flex rounded-lg p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold leading-6 text-gray-900">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-md text-gray-500">
           {action.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
 
      </Container>
    </section>
  )
}
