'use client'
import clsx from 'clsx'

import { TicketIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { PauseCircleIcon } from '@heroicons/react/24/outline'


import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

const features = [
  {
    name: '1. The Request',
    description:
      `Add tasks to your private trello board or tag us in your ticket system. We'll work through them in order one at a time.`,
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      return (
       <TicketIcon className="text-slate-900"/>
      )
    },
  },
  {
    name: '2. The Approval',
    description:
      `Once you have approved the work, we'll pick up the next task. If you have any change requests, we'll work on them until you're happy.`,
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
       <ChatBubbleLeftRightIcon className="text-slate-900"/>
      )
    },
  },
  {
    name: '3. All Done?',

    description: `If you run out of tasks, you can pause your subscription. For example if you use 20 days of work in a month, you can pause your subscription and save the remaining 10 days for the next month.`,
    image: screenshotContacts,
    icon: function ContactsIcon() {
      return (
       <PauseCircleIcon className="text-slate-900"/>
      )
    },
  },
]

function Feature({ feature, className, ...props }) {
  return (
    <div
      className={clsx(className, 'opacity-100')}
      {...props}
    >
      <div className="flex flex-row">
      <div
        className={clsx(
          'w-9 rounded-lg justify-center items-center flex bg-white',
        )}
      >
        <svg aria-hidden="true" className="h-7 w-7" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'ml-4 text-xl font-medium text-white',
        )}
      >
        {feature.name}
      </h3>
      </div>
      <p className="mt-4 text-md text-white">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-20 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <div className="hidden lg:mt-20 lg:block">
          <div className="grid grid-cols-3 gap-x-8">
            {features.map((feature) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <div className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </div>
                  ),
                }}
                className="relative"
              />
            ))}
          </div>
    </div>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="method"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-28 lg:pb-28 bg-blue-600"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            How does it work?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
