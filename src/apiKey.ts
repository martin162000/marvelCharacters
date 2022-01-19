import md5 from 'md5'

const getApiUrl = (): string => {
	const publicKey = '01898db904565065bf024d294facc19d'
	const privateKey = 'e3b3b3f7eee7add95c20e37adfe1a7532e5e0572'
	const ts = 1
	const hash = md5(ts + privateKey + publicKey)
	const url = `ts=${ts}&apikey=${publicKey}&hash=${hash}`
	return url
}

export { getApiUrl }
