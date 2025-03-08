export interface Theme {
  appBackground: string
  appColor: string
  appDefaultStroke: string
  appLogo: string
  appSkeletonFron: string
  appSkeletonTo: string
  buttons: {
    alert: string
    alertColor: string
    alertHover: string
    desabled: string
    desabledColor: string
    primary: string
    primaryColor: string
    primaryHover: string
  }
  card: {
    alert: string
    background: string
    border: string
    success: string
    warning: string
  }
  textImput: {
    active: string
    activeColor: string
    borderColor: string
    disabled: string
    disabledBorderColor: string
    disabledColor: string
    placeholderColor: string
  }
  typographies: {
    error: string
    subtitle: string
    success: string
  }
}
