/*********************
 * File: SectionThree.tsx
 * Description: SectionThree component
 * This section has three columns (three reasons for Red Hat)
 ********************/

import React from 'react'
import FeatureList from '@/components/FeatureList'
import { MonitorCheck, ShieldPlus, CirclePoundSterling, Icon } from 'lucide-react'

//* Using the Ciena website 3 column layout as a template

const descriptionClass = ''

const commonIconClass = 'mx-auto text-center text-red-hat-red font-thin'

const listData = [
  {
    icon: MonitorCheck,
    title: 'Visibility',
    description:
      'Gain Visibility Across Your RHEL Estate:  Understand exactly what’s running in your environment.',
    titleClass: 'font-bold text-lg text-black',
    descriptionClass,
    iconClass: commonIconClass,
    iconSize: 110,
  },
  {
    icon: ShieldPlus,
    title: 'Stability',
    description:
      'Reduce Risk and Improve Operational Stability:  See how organisations use the assessment to identify performance issues, outdated configurations, and operational inefficiencies',
    titleClass: 'font-bold text-lg text-black',
    descriptionClass: `text-base xl:px-4`,
    iconClass: commonIconClass,
    iconSize: 110,
  },
  {
    icon: CirclePoundSterling,
    title: 'Cost Optimisation',
    description:
      'Identify Cost and Subscription Optimisation Opportunities:  Learn how a RHEL Estate Assessment can highlight opportunities to optimise subscription usage and ensure compliance with Red Hat terms.',
    titleClass: 'font-bold text-lg text-black',
    descriptionClass,
    iconClass: commonIconClass,
    iconSize: 110,
  },
]

const SectionThree = () => {
  return (
    <section
      id="s3"
      // explicitly bg-white class
      className="min-h-120 bg-white pt-20 pb-28 md:pt-40 md:pb-40 xl:py-55"
    >
      <div className="mx-auto flex max-w-[1350px] flex-col items-center">
        <FeatureList listData={listData} />
      </div>
    </section>
  )
}

export default SectionThree
