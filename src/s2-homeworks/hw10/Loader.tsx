import s from './Loader.module.css'
import preloader from "./preloader.png"

export const Loader = () => <img src={preloader} className={s.loader} alt={"preloader"}/>

