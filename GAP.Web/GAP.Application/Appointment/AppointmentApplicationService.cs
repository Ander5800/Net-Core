using DotNetCore.Objects;
using GAP.Domain;
using GAP.Infrastructure;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public sealed class AppointmentApplicationService : BaseApplicationService, IAppointmentApplicationService
    {
        public AppointmentApplicationService(IAppointmentRepository appointmentRepository, 
            IDatabaseUnitOfWork databaseUnitOfWork)
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

        public async Task<IDataResult<long>> AddAsync(AddAppointmentModel addAppointmentModel)
        {
            //var validation = new AddUserModelValidator().Valid(addUserModel);

            //if (!validation.Success)
            //{
            //    return ErrorDataResult<long>(validation.Message);
            //}

            //UserDomainService.GenerateHash(addUserModel.SignIn);

            var appointmentEntity = AppointmentFactory.Create(addAppointmentModel);

            await AppointmentRepository.AddAsync(appointmentEntity);

            await DatabaseUnitOfWork.SaveChangesAsync();

            return SuccessDataResult(appointmentEntity.AppointmentId);
        }
    }
}