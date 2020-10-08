import { Router } from 'express'

import DialogFlowController from './controller/DialogFlowController'

const routes = Router();

routes.get('/', DialogFlowController)

export default routes