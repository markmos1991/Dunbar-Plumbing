import {
    ArrowPathIcon,
    CloudArrowUpIcon,
   MapPinIcon,
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Point Grey',
      description: '',
      icon: MapPinIcon,
    },
    {
      name: 'Dunbar',
      description: '',
      icon: MapPinIcon,
    },
    {
      name: 'Point Gray',
      description: '',
      icon: MapPinIcon,
    },
    {
      name: 'Kerrisdale',
      description: '',
      icon: MapPinIcon,
    },
    {
      name: 'UBC',
      description: '',
      icon: MapPinIcon,
    },
    {
      name: 'Kits',
      description: '',
      icon: MapPinIcon,
    },
    {
      name: 'Mackenzie Heights',
      description: '',
      icon: MapPinIcon,
    },
  
    {
      name: 'Shaunessy',
      description: '',
      icon: MapPinIcon,
    },
  
  
  ]
  
  export default function Areas() {
    return (
      <div className="bg-blue-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-blue-400">We&apos;ve got you covered</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Serving Vancouver&apos;s West Side</p>
         
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-400" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  