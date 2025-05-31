import multer, { diskStorage } from "multer";
import path from "path"

const storage = diskStorage({
    destination : (req, file, cb)=>{
        cb(null, path.join( process.cwd(), 'temp/uploads'))
    },
    filename : (req, file, cb )=>{
        cb(null, new Date.now() + "_" + file.originalname)
    }
})

export const upload = multer({ storage })