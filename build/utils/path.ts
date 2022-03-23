import path from 'path'
export const resolvePath = (dir: string) => {
    return path.resolve(__dirname, '../../', dir)
}