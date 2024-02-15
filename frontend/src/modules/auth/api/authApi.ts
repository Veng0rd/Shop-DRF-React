type TData = {
  email: string
  password: string
}

type TPostData = TData & {
  first_name: string
}

export const createJwtToken = async (data: TData) => {
  try {
    const response = await fetch('http://localhost:8000/auth/jwt/create/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()

    localStorage.setItem('access', responseData.access)
    localStorage.setItem('refresh', responseData.refresh)

    return await LoginUser()
  } catch (error) {
    console.error('Error making POST request:', error)
  }
}

const refreshJwtToken = async () => {
  try {
    const response = await fetch('http://localhost:8000/auth/jwt/refresh/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: localStorage.getItem('refresh') }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()

    localStorage.setItem('access', responseData.access)
  } catch (error) {
    console.error('Error making POST request:', error)
  }
}

export const verifyJwtToken = async () => {
  try {
    const response = await fetch('http://localhost:8000/auth/jwt/verify/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: localStorage.getItem('refresh') }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    await refreshJwtToken()

    return localStorage.getItem('access')
  } catch (error) {
    console.error('Error making POST request:', error)
  }
}

export const SubmitCreateUser = async (postData: TPostData, setIsUserCreate: (auth: boolean) => void) => {
  try {
    const response = await fetch('http://localhost:8000/auth/users/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    setIsUserCreate(true)

    createJwtToken({ email: postData.email, password: postData.password })
  } catch (error) {
    console.error('Error making POST request:', error)
  }
}

export const LoginUser = async () => {
  await verifyJwtToken()

  try {
    const response = await fetch('http://localhost:8000/auth/users/me/', {
      method: 'Get',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()
    return responseData.first_name
  } catch (error) {
    console.error('Error making POST request:', error)
  }
}
