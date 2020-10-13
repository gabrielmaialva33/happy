import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Orphanage from '../models/Orphanage';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const orphanagesRepository = getRepository(Orphanage);

    //* -> validando dados
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
    });

    await schema.validate(
      { ...request.body },
      {
        abortEarly: false,
      },
    );

    const orphanage = orphanagesRepository.create({ ...request.body });

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  },
};
