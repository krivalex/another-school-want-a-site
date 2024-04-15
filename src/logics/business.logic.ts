const redirectToWhatsapp = async () => {
  window.open(`https://wa.me/+7 775 252 52 52`, '_blank')
}

const redirectToPhone = async () => {
  window.open(`tel:+7 775 252 52 52`, '_blank')
}

const redirectToMap = async () => {
  window.open(`https://go.2gis.com/gq81ej`, '_blank')
}

const redirectToInstagram = async () => {
  window.open(`https://www.instagram.com/flagman.talgar?igsh=NGdndHByc3IxZDRw`, '_blank')
}

export const RedirectsFunctions = {
  redirectToWhatsapp,
  redirectToPhone,
  redirectToMap,
  redirectToInstagram
}
