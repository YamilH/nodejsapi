import { Router } from 'express';
import { getPatient, createPatient, updatePatient, deletePatient, getPatients } from '../controller/patient.controller';

const patientRoutes = Router();

patientRoutes.route('/')
  .get(getPatients)
  .post(createPatient);

patientRoutes.route('/:patientId')
  .get(getPatient)
  .put(updatePatient)
  .delete(deletePatient);

export default patientRoutes;