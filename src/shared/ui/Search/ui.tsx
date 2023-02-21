import { useSpring, animated } from '@react-spring/web'
import { ChangeEvent, useState, FC } from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

import { colors } from 'shared/lib'

import { Input } from '../Input'

interface ISearch {
  className?: string
}

export const Search: FC<ISearch> = ({ className = '' }) => {
  const [value, setValue] = useState('')

  const styles = useSpring({
    config: {
      duration: 1500,
    },
    from: { transform: `scale(${value ? 1 : 0})` },
    to: {
      transform: `scale(${value ? 1 : 0})`,
    },
  })

  const clickHandler = () => {
    setValue('')
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={`relative w-full flex items-center  ${className}`}>
      <div className="absolute top-1/2 translate-y-[-50%] left-[11px] z-10">
        <AiOutlineSearch color={colors.gray.hot} />
      </div>

      <Input
        placeholder="Search"
        value={value}
        handleChange={onChangeHandler}
        border="rounded-md focus:border-blue"
        borderColor="border-blue"
        styles="absolute top-0 left-0 right-0 bottom-0 z-1 pl-[36px] transition-all"
      />

      <animated.button
        style={styles}
        className={`${
          value ? 'z-10' : 'z-[-1]'
        } absolute  translate-y-[-50%] right-2 justify-end cursor-pointer transition-all duration-500`}
        onClick={clickHandler}>
        <AiOutlineClose color={colors.blue} />
      </animated.button>
    </div>
  )
}
