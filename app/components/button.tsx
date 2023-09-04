import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { IconType } from 'react-icons'

interface ButtonProps {
  type: 'submit' | 'reset'
  label?: string
  icon: IconType
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon: Icon,
}) => {
  const { pending } = useFormStatus()

  return (
    
    <button
      type={type}
      disabled={pending}
      className='
        group
        flex
        items-center
        gap-4
        bg-white
        rounded-full
        max-w-fit
        px-4
        py-1.5
      text-black
        font-light
        hover:bg-transparent
        hover:text-white
        outline-none
        hover:ring-1
        transition-all
        focus:scale-110 
        hover:scale-110
        active:scale-105
        text-sm
        disabled:scale-100 
        disabled:bg-opacity-75
      '
    >
      {
        pending ? <div className='h-5 w-5 animate-spin border-b-2 border-sky-500 rounded-full'></div> : (
          <>
            {label}              
            <Icon 
              className='
                text-xs
                opacity-70
                transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1
              ' 
            />
          </>
        )
      }
    </button>
  )
}

export default Button