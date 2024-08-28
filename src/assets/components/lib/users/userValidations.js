export const validateUserName = username =>{

  if (username.length < 6 || username.length > 15)
    return 'Longitud entre 6 y 15 caracteres'

}

export const validateName = name => {
  if (name.length < 2 || name.length > 30)
    return 'Longitud entre 2 y 30 caracteres'

}

