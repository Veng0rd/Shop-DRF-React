import React, { useEffect, useState } from 'react'
import LoginButton from '../../../../ui/loginButton/LoginButton'
import { AuthModal } from '../authModal/AuthModal'
import { RegModal } from '../regModal/RegModal'
import { LoginModal } from '../loginModal/LoginModal'
import { LoginUser } from '../..'

export const Auth = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenReg, setIsOpenReg] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)

  const [name, setName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const name = await LoginUser().catch(() => {
        return
      })
      setName(name)
    }

    if (localStorage.getItem('refresh')) {
      fetchData()
    }
  }, [])

  const handleOpenModal = () => {
    setIsOpenModal(prev => !prev)
  }

  const handleOpenReg = () => {
    setIsOpenModal(prev => !prev)
    setIsOpenReg(prev => !prev)
  }

  const handleClickCloseAllModal = () => {
    setIsOpenModal(false)
    setIsOpenReg(false)
    setIsOpenLogin(false)
  }

  const handleOpenLogin = () => {
    setIsOpenModal(prev => !prev)
    setIsOpenLogin(prev => !prev)
  }

  useEffect(() => {}, [])

  return (
    <>
      <LoginButton handleOpenModal={handleOpenModal} name={name} />
      {isOpenModal && (
        <AuthModal
          handleOpenModal={handleOpenModal}
          handleOpenReg={handleOpenReg}
          handleOpenLogin={handleOpenLogin}
        />
      )}
      {isOpenReg && (
        <RegModal handleOpenReg={handleOpenReg} handleClickCloseAllModal={handleClickCloseAllModal} />
      )}
      {isOpenLogin && (
        <LoginModal
          handleOpenLogin={handleOpenLogin}
          handleClickCloseAllModal={handleClickCloseAllModal}
          setName={setName}
        />
      )}
    </>
  )
}
