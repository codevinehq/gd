import Image from 'next/image'

import logo from '@/images/icons8-ghost-96.png'

export function Logo({className}) {
  return (
      <Image
      className={...className}
        src={logo}
        alt="ghostdev logo"
        width={48}
        height={48}
        unoptimized
      />

  )
}
