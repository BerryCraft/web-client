export type ServerError = {
	code: string
	message: string
	stack: string
}
type PossibleError = ServerError | undefined | unknown

export const errorExists = (error: PossibleError): ServerError | null => {
	if (error && typeof error === 'object' && Object.entries(error).length > 0) {
		return error as ServerError
	} else {
		return null
	}
}
