import { Router } from "express"
const router = Router()


router.get('/', (req, res) => res.render('index', {tittle: 'Home'} ))
router.get('/contact', (req, res) => res.render('contact', {tittle: 'Contact'}))
router.get('/about', (req, res) => res.render('about',{tittle: 'About'}))

export default router