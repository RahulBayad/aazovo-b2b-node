import multer from "multer";
import { diskStorage } from "multer";
import path from "path"

const storage = diskStorage({
    destination : (_, file, cb)=>{
        cb(null, path.join( process.cwd(), 'temp/uploads'))
    },
    filename : (_, file, cb )=>{
        cb(null, Date.now() + "_" + file.originalname)
    }
})
export const upload = multer({ storage })