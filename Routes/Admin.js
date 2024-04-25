import express from 'express'
const routes =express.Router()
import {addOrganizations} from '../Controllers/Admin/organization.js';

routes.get('/addOrganizations',addOrganizations);

export default routes;