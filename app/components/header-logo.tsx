import Image from 'next/image'

import LogoImg from '@/public/images/logo.png'

const HeaderLogo = () => {
  return (
    <div>
      <Image
        alt="Logo"
        src={LogoImg}
        width={32}
        height={32}
        className="
          rounded-md
          hover: shadow-white
        "
      />
    </div>
  )
}

export default HeaderLogo