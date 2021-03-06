﻿using DotNetCore.Objects;
using GAP.CrossCutting.Resources;
using GAP.Domain;
using GAP.Infrastructure;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public sealed class AppointmentApplicationService : BaseApplicationService, IAppointmentApplicationService
    {
        public AppointmentApplicationService(IAppointmentRepository appointmentRepository, IDatabaseUnitOfWork databaseUnitOfWork)
        {
            AppointmentRepository = appointmentRepository;
            DatabaseUnitOfWork = databaseUnitOfWork;
        }

        private IAppointmentRepository AppointmentRepository { get; }
        private IDatabaseUnitOfWork DatabaseUnitOfWork { get; }

        public async Task<PagedList<AppointmentModel>> ListAsync(PagedListParameters parameters)
        {
            return await AppointmentRepository.ListAsync<AppointmentModel>(parameters);
        }

        public async Task<IEnumerable<AppointmentModel>> ListAsync(long customerId)
        {
            return await AppointmentRepository.GetByCustomerId(customerId);
        }

        public async Task<IResult> AddAsync(AddAppointmentModel addAppointmentModel)
        {
            var appointmentEntity = AppointmentFactory.Create(addAppointmentModel);
            var appointments = await AppointmentRepository.GetByCustomerId(addAppointmentModel.CustomerId);



            if (!appointmentEntity.canCreate(appointments))
            {
                return ErrorResult(Texts.AppointmentCanNotBeCreated);
            }

            await AppointmentRepository.AddAsync(appointmentEntity);
            await DatabaseUnitOfWork.SaveChangesAsync();
            var appointment = await AppointmentRepository.SelectAsync<AppointmentModel>(appointmentEntity.AppointmentId);
            return SuccessDataResult(appointment);
        }

        public async Task<IResult> DeleteAsync(long appointmentId)
        {
            var appointment = await AppointmentRepository.SelectAsync<AppointmentEntity>(appointmentId);
            
            if(appointment == null)
            {
                return ErrorResult(Texts.AppointmentNotFound);
            }

            if (!appointment.canBeDeleted())
            {
                return ErrorResult(Texts.AppointmentCanNotBeDeleted);
            }

            await AppointmentRepository.DeleteAsync(appointmentId);
            await DatabaseUnitOfWork.SaveChangesAsync();

            return SuccessDataResult(appointmentId);
        }
    }
}