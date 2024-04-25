import express from 'express'
const routes =express.Router()
import {addOrganizations} from '../Controllers/Admin/organization.js';
import {details} from '../Controllers/Admin/login.js'

routes.get('/addOrganizations',addOrganizations);
routes.post('/adminDetailsAdding',details)

export default routes;