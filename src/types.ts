export type ResultType = {
  status: number
  message: string
  messageDev: string
  codeResult: number
  duration: number
  idLog: string
}

export type ClientAccessDataType = {
  result: ResultType
  accessToken: string
}

export type ClientDataType = {
  typeBonusName: string
  currentQuantity: number
  forBurningQuantity: number
  dateBurning: string
}

export type ClientBonusInfoType = {
  result: ResultType
  data: ClientDataType
}
