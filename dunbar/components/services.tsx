import { CheckBadgeIcon, WrenchIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Faucets',
    description: '',
    icon: WrenchIcon,
  },
  {
    name: 'Garburators',
    description: '',
    icon: WrenchIcon,
  },
  {
    name: 'Leaks and repairs',
    description: '',
    icon: WrenchIcon,
  },
  {
    name: ' Toilets',
    description: '',
    icon: WrenchIcon,
  },
  {
    name: 'Water heaters',
    description: '',
    icon: WrenchIcon,
  },
  {
    name: 'Pipe replacement',
    description: '',
    icon: WrenchIcon,
  },
  {
    name: 'Bathroom renovations',
    description: '',
    icon: WrenchIcon,
  },
  {
    name: 'Plugged drains',
    description: '',
    icon: WrenchIcon,
  },
  
]

const features1 = [
 
  {
    name: 'Certified Experienced Tradesmen',
    description: '',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Licensed-Bonded-Insured',
    description: '',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Fully Stocked Trucks',
    description: '',
    icon: CheckBadgeIcon,
  },
  {
    name: 'WCB Approved',
    description: '',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Friendly, Clean and Knowledgeable staff',
    description: '',
    icon: CheckBadgeIcon,
  },
  {
    name: 'And best of all, no travel time charges. We are always in your neighbourhood!',
    description: '',
    icon: CheckBadgeIcon,
  },
 
]

export default function Services() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start ">
          
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto  max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">what we do</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services We Provide</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer a range of plumbing services including maintenance, repairs, and installation.
              </p>
              <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-1">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    
                  </div>
                ))}
              </dl>
            </div>
          </div>


          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-800">decisions decisions</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us</p>
            
              <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-1">
                {features1.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-800" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
